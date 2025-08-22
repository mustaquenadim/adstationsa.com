import { z } from "zod";

export const createPartnerFormSchema = (t: (key: string) => string) =>
  z.object({
    partnerName: z.string().min(1, { message: t("validation.required") }),
    partnerType: z.string().min(1, { message: t("validation.required") }),
  // Accept File | string | null at runtime (UI), will be normalized before persistence
  partnerLogo: z.any().optional().nullable().default(""),
    country: z.string().min(1, { message: t("validation.required") }),
    state: z.string().min(1, { message: t("validation.required") }),
    city: z.string().min(1, { message: t("validation.required") }),
    neighborhood: z.string().min(1, { message: t("validation.required") }),
    street: z.string().min(1, { message: t("validation.required") }),
    offeredServices: z.array(z.string()).default([]),
  workSamples: z.any().optional().nullable().default(""),
    responsiblePersonName: z.string().min(1, { message: t("validation.required") }),
    contactNumber: z.string().min(1, { message: t("validation.required") }),
  });

export type PartnerFormData = z.infer<ReturnType<typeof createPartnerFormSchema>>;

export const getPartnerTypes = (t: (key: string) => string) => [
  { value: "committee", label: t("partnerTypes.committee") },
  { value: "firm", label: t("partnerTypes.firm") },
  { value: "power-of-attorney", label: t("partnerTypes.powerOfAttorney") },
  { value: "company", label: t("partnerTypes.company") },
];

export const getOfferedServices = (t: (key: string) => string) => [
  {
    value: "manage-advertising-campaigns",
    label: t("services.manageAdvertisingCampaigns"),
  },
  {
    value: "managing-promotion-teams",
    label: t("services.managingPromotionTeams"),
  },
  { value: "products-and-pos", label: t("services.productsAndPos") },
  {
    value: "exhibitions-and-events",
    label: t("services.exhibitionsAndEvents"),
  },
  { value: "interior-panels", label: t("services.interiorPanels") },
  { value: "printing-of-all-kinds", label: t("services.printingOfAllKinds") },
  { value: "creative-designs", label: t("services.creativeDesigns") },
];

export const getFormDefaultValues = () => ({
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
} as const);
