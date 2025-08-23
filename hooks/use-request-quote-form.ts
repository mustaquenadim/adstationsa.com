import { useMemo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations, useLocale } from "next-intl";
import { toast } from "sonner";
import { countries } from "@/lib/form-data/countries";
import { saudiRegions, saudiCities } from "@/lib/form-data/saudi-locations";
import {
  createRequestQuoteSchema,
  RequestQuoteFormData,
  SelectOption,
} from "@/lib/schemas/request-quote-form";
import {
  createServiceCategories,
  createStateOptions,
  createContactOptions,
  DEFAULT_FORM_VALUES,
} from "@/lib/form-data/request-quote-form-data";

export const useRequestQuoteForm = (onSuccess?: () => void) => {
  const t = useTranslations("header.requestQuoteForm");
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create schema with translations
  const formSchema = useMemo(() => createRequestQuoteSchema(t), [t]);

  // Create form instance
  const form = useForm<RequestQuoteFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const selectedState = form.watch("state");

  // Create options with translations
  const serviceCategories = useMemo(() => createServiceCategories(t), [t]);
  const stateOptions = useMemo(() => createStateOptions(locale), [locale]);
  const contactOptions = useMemo(() => createContactOptions(t), [t]);

  // Country options with localized labels
  const countryOptions = useMemo(
    (): SelectOption[] =>
      countries.map((c) => ({
        value: c.value,
        label: t(`countries.${c.value}`),
      })),
    [t]
  );

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

  // Form submission handler
  const onSubmit = async (values: RequestQuoteFormData) => {
    if (isSubmitting) return; // Prevent double submission
    
    setIsSubmitting(true);
    
    try {
      console.log("Form submitted:", values);
      // Handle form submission here
      // You can add API call here to submit the form data
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show success toast
      toast.success(t("toast.success"));

      // Call onSuccess callback if provided (to close dialog)
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Show error toast
      toast.error(t("toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form reset handler
  const onReset = () => {
    form.reset();
    form.clearErrors();
  };

  return {
    form,
    t,
    serviceCategories,
    stateOptions,
    contactOptions,
    countryOptions,
    availableCities,
    selectedState,
    isSubmitting,
    onSubmit,
    onReset,
  };
};
