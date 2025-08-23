import { z } from "zod";

export const createRequestQuoteSchema = (t: (key: string) => string) => {
  return z.object({
    companyName: z.string().min(1, t("validation.companyNameRequired")),
    responsiblePerson: z
      .string()
      .min(1, t("validation.responsiblePersonRequired")),
    email: z.string().email(t("validation.invalidEmail")),
    mobileNumber: z.string().min(1, t("validation.mobileNumberRequired")),
    country: z.string().min(1, t("validation.countryRequired")),
    state: z.string().min(1, t("validation.stateRequired")),
    city: z.string().min(1, t("validation.cityRequired")),
    targetCity: z.string().min(1, t("validation.targetCityRequired")),
    selectedServices: z
      .array(z.string())
      .min(1, t("validation.servicesRequired")),
    orderDetails: z.string().min(1, t("validation.orderDetailsRequired")),
    contactPreference: z
      .array(z.string())
      .min(1, t("validation.contactPreferenceRequired")),
    uploadedFiles: z.string().optional(),
  });
};

export type RequestQuoteFormData = z.infer<ReturnType<typeof createRequestQuoteSchema>>;

export interface ServiceCategory {
  id: string;
  label: string;
  services: ServiceItem[];
}

export interface ServiceItem {
  id: string;
  label: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface ContactOption {
  id: string;
  label: string;
}
