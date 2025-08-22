import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useMemo } from "react";
import { z } from "zod";
import {
  createPartnerFormSchema,
  getPartnerTypes,
  getOfferedServices,
} from "@/lib/form-data/partner-form-schema";
import { countries } from "@/lib/form-data/countries";
import { saudiRegions, saudiCities } from "@/lib/form-data/saudi-locations";
import { addDocument } from "@/lib/firebase";
import { generateUniqueFileName, uploadFile } from "@/lib/firebase";

export const usePartnerForm = () => {
  const t = useTranslations("joinUs.form");
  const locale = useLocale();
  
  const formSchema = createPartnerFormSchema(t);
  type FormData = z.infer<typeof formSchema>;
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as unknown as Resolver<FormData>,
    defaultValues: {
      partnerName: "",
      partnerType: "",
  partnerLogo: "",
      country: "SA",
      state: "",
      city: "",
      neighborhood: "",
      street: "",
      offeredServices: [],
  workSamples: "",
      responsiblePersonName: "",
      contactNumber: "",
    },
  });

  const selectedState = form.watch("state");

  // Map regions to include locale-appropriate labels
  const regionsWithLabels = useMemo(() => {
    return saudiRegions.map(region => ({
      value: region.value,
      label: locale === 'ar' ? region.labelAr : region.labelEn
    }));
  }, [locale]);

  // Get cities for selected state with locale-appropriate labels
  const availableCities = useMemo(() => {
    if (!selectedState) return [];
    const cities = saudiCities[selectedState as keyof typeof saudiCities] || [];
    return cities.map(city => ({
      value: city.value,
      label: locale === 'ar' ? city.labelAr : city.labelEn
    }));
  }, [selectedState, locale]);

  // Clear city when state changes
  useEffect(() => {
    if (selectedState) {
      form.setValue("city", "");
    }
  }, [selectedState, form]);

  const partnerTypes = useMemo(() => getPartnerTypes(t), [t]);
  const offeredServices = useMemo(() => getOfferedServices(t), [t]);

  // Localize country labels using i18n; fallback to provided label
  const localizedCountries = useMemo(
    () =>
      countries.map((c) => ({
        value: c.value,
        label: t(`countries.${c.value}`),
      })),
    [t]
  );

  const onSubmit = async (values: FormData) => {
    await handlePersist(values);
    // Reset form after successful submit
    form.reset();
  };

  const onReset = () => {
    form.reset();
    form.clearErrors();
  };

  return {
    form,
    t,
  countries: localizedCountries,
    saudiRegions: regionsWithLabels,
    availableCities,
    partnerTypes,
    offeredServices,
    selectedState,
    onSubmit,
    onReset,
  };
};

// Internal: persist to Firestore with optional Storage uploads
async function handlePersist(values: any) {
  try {
    // Prepare file uploads if File objects are present
    let partnerLogoUrl = typeof values.partnerLogo === 'string' ? values.partnerLogo : '';
    let workSamplesUrl = typeof values.workSamples === 'string' ? values.workSamples : '';

    if (values.partnerLogo && values.partnerLogo instanceof File) {
      const unique = generateUniqueFileName(values.partnerLogo.name);
      const path = `partners/logos/${unique}`;
      partnerLogoUrl = await uploadFile(values.partnerLogo, path);
    }

    if (values.workSamples && values.workSamples instanceof File) {
      const unique = generateUniqueFileName(values.workSamples.name);
      const path = `partners/work-samples/${unique}`;
      workSamplesUrl = await uploadFile(values.workSamples, path);
    }

    const payload = {
      partnerName: values.partnerName,
      partnerType: values.partnerType,
      partnerLogo: partnerLogoUrl,
      country: values.country,
      state: values.state,
      city: values.city,
      neighborhood: values.neighborhood,
      street: values.street,
      offeredServices: values.offeredServices ?? [],
      workSamples: workSamplesUrl,
      responsiblePersonName: values.responsiblePersonName,
      contactNumber: values.contactNumber,
      status: 'pending',
      submittedAt: new Date().toISOString(),
    };

    const id = await addDocument('partners', payload);
    console.info('Partner saved with id', id);
    return id;
  } catch (err) {
    console.error('Failed to save partner', err);
    throw err;
  }
}
