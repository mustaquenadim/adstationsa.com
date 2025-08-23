import { ServiceCategory, SelectOption, ContactOption, RequestQuoteFormData } from "@/lib/schemas/request-quote-form";
import { saudiRegions } from "@/lib/form-data/saudi-locations";

export const createServiceCategories = (t: (key: string) => string): ServiceCategory[] => [
  {
    id: "advertising-campaigns",
    label: t("services.advertisingCampaigns"),
    services: [],
  },
  {
    id: "promotion-teams",
    label: t("services.promotionTeams"),
    services: [],
  },
  {
    id: "creative-designs",
    label: t("services.creativeDesigns"),
    services: [],
  },
  {
    id: "printing",
    label: t("services.printing.main"),
    services: [
      {
        id: "paper-publications",
        label: t("services.printing.paperPublications"),
      },
      { id: "3d-printing", label: t("services.printing.3dPrinting") },
      { id: "uv-printing", label: t("services.printing.uvPrinting") },
      { id: "bag-printing", label: t("services.printing.bagPrinting") },
      {
        id: "stickers-printing",
        label: t("services.printing.stickersPrinting"),
      },
      {
        id: "packaging-printing",
        label: t("services.printing.packagingPrinting"),
      },
      { id: "banners-flexos", label: t("services.printing.bannersFlexos") },
    ],
  },
  {
    id: "exterior-panels",
    label: t("services.exteriorPanels.main"),
    services: [
      {
        id: "project-fence-panels",
        label: t("services.exteriorPanels.projectFencePanels"),
      },
      {
        id: "hanging-column-panels",
        label: t("services.exteriorPanels.hangingColumnPanels"),
      },
      { id: "billboards", label: t("services.exteriorPanels.billboards") },
      {
        id: "side-gallery-panels",
        label: t("services.exteriorPanels.sideGalleryPanels"),
      },
      { id: "road-signs", label: t("services.exteriorPanels.roadSigns") },
      {
        id: "cladding-paintings",
        label: t("services.exteriorPanels.claddingPaintings"),
      },
    ],
  },
  {
    id: "interior-panels",
    label: t("services.interiorPanels"),
    services: [],
  },
  {
    id: "exhibitions-events",
    label: t("services.exhibitionsEvents.main"),
    services: [
      {
        id: "advertising-stand-rental",
        label: t("services.exhibitionsEvents.advertisingStandRental"),
      },
      {
        id: "monitors-rental",
        label: t("services.exhibitionsEvents.monitorsRental"),
      },
      {
        id: "theater-design",
        label: t("services.exhibitionsEvents.theaterDesign"),
      },
      {
        id: "pavilions-booths",
        label: t("services.exhibitionsEvents.pavilionsBooth"),
      },
      {
        id: "filming-documenting",
        label: t("services.exhibitionsEvents.filmingDocumenting"),
      },
    ],
  },
  {
    id: "products-pos",
    label: t("services.productsPos.main"),
    services: [
      {
        id: "shopper-research",
        label: t("services.productsPos.shopperResearch"),
      },
      {
        id: "promotion-teams-management",
        label: t("services.productsPos.promotionTeamsManagement"),
      },
      {
        id: "pos-promotion-tools",
        label: t("services.productsPos.posPromotionTools"),
      },
      {
        id: "product-logos-design",
        label: t("services.productsPos.productLogosDesign"),
      },
      {
        id: "racks-gondolas",
        label: t("services.productsPos.racksGondolas"),
      },
    ],
  },
];

export const createStateOptions = (locale: string): SelectOption[] => 
  saudiRegions.map(region => ({
    value: region.value,
    label: locale === 'ar' ? region.labelAr : region.labelEn
  }));

export const createContactOptions = (t: (key: string) => string): ContactOption[] => [
  { id: "email", label: t("contactOptions.email") },
  { id: "phone", label: t("contactOptions.phone") },
  { id: "whatsapp", label: t("contactOptions.whatsapp") },
];

export const DEFAULT_FORM_VALUES: Partial<RequestQuoteFormData> = {
  companyName: "",
  responsiblePerson: "",
  email: "",
  mobileNumber: "",
  country: "SA",
  state: "",
  city: "",
  targetCity: "",
  selectedServices: [],
  orderDetails: "",
  contactPreference: [],
  uploadedFiles: "",
};
