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

  const onSubmit = (values: FormData) => {
    // Transform back to original format for backwards compatibility
    const transformedValues = {
      "partner-name": values.partnerName,
      "partner-type": values.partnerType,
      "partner-logo": values.partnerLogo,
      country: values.country,
      state: values.state,
      city: values.city,
      neighborhood: values.neighborhood,
      street: values.street,
      "offered-services": values.offeredServices,
      "work-samples": values.workSamples,
      "responsible-person-name": values.responsiblePersonName,
      "contact-number": values.contactNumber,
    };
    console.log(transformedValues);
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
