"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

interface RequestQuoteFormProps {
  onSuccess?: () => void;
}

export default function RequestQuoteForm({ onSuccess }: RequestQuoteFormProps) {
  const t = useTranslations("header.requestQuoteForm");

  // Form schema with validation using translations
  const formSchema = z.object({
    companyName: z.string().min(1, t("validation.companyNameRequired")),
    responsiblePerson: z
      .string()
      .min(1, t("validation.responsiblePersonRequired")),
    email: z.string().email(t("validation.invalidEmail")),
    mobileNumber: z.string().min(1, t("validation.mobileNumberRequired")),
    state: z.string().min(1, t("validation.stateRequired")),
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

  type FormData = z.infer<typeof formSchema>;

  // Service options with nested structure using translations
  const serviceCategories = [
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

  // Contact preference options using translations
  const contactOptions = [
    { id: "email", label: t("contactOptions.email") },
    { id: "phone", label: t("contactOptions.phone") },
    { id: "whatsapp", label: t("contactOptions.whatsapp") },
  ];

  // State options using translations
  const stateOptions = [
    { value: "riyadh", label: t("states.riyadh") },
    { value: "jeddah", label: t("states.jeddah") },
    { value: "dammam", label: t("states.dammam") },
    { value: "makkah", label: t("states.makkah") },
    { value: "medina", label: t("states.medina") },
    { value: "other", label: t("states.other") },
  ];

  // Hierarchical Service Selection Component
  const HierarchicalServiceSelector = ({
    name,
    control,
    categories,
    label,
  }: {
    name: keyof FormData;
    control: ReturnType<typeof useForm<FormData>>["control"];
    categories: {
      id: string;
      label: string;
      services: { id: string; label: string }[];
    }[];
    label: string;
  }) => (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
          <FormLabel className="flex shrink-0">{label}</FormLabel>
          <div className="w-full">
            <FormControl>
              <div className="w-full">
                <Accordion type="multiple" className="w-full">
                  {categories.map((category) => (
                    <div key={category.id} className="">
                      {category.services.length > 0 ? (
                        // Categories with sub-services - show with accordion
                        <AccordionItem value={category.id} className="border-0">
                          <div className="flex items-center space-x-2 py-4">
                            <FormField
                              key={category.id}
                              name={name}
                              control={control}
                              render={({ field: CategoryField }) => (
                                <FormItem className="border-0 p-0 flex items-center space-x-2">
                                  <FormControl>
                                    <Checkbox
                                      checked={CategoryField.value?.includes(
                                        category.id
                                      )}
                                      onCheckedChange={(checked) => {
                                        if (checked) {
                                          // Add category and all its services
                                          const newServices = [
                                            ...(CategoryField.value || []),
                                            category.id,
                                            ...category.services.map(
                                              (s) => s.id
                                            ),
                                          ];
                                          CategoryField.onChange([
                                            ...new Set(newServices),
                                          ]);
                                        } else {
                                          // Remove category and all its services
                                          const servicesToRemove = [
                                            category.id,
                                            ...category.services.map(
                                              (s) => s.id
                                            ),
                                          ];
                                          CategoryField.onChange(
                                            (
                                              CategoryField.value as string[]
                                            )?.filter(
                                              (value: string) =>
                                                !servicesToRemove.includes(
                                                  value
                                                )
                                            ) || []
                                          );
                                        }
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-medium cursor-pointer">
                                    {category.label}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                            <AccordionTrigger className="text-left flex-1 justify-end p-0 h-auto"></AccordionTrigger>
                          </div>
                          <AccordionContent>
                            <div className="grid gap-2 pl-6 pt-2">
                              {category.services.map((service) => (
                                <FormField
                                  key={service.id}
                                  name={name}
                                  control={control}
                                  render={({ field: ServiceField }) => (
                                    <FormItem className="border-0 p-0 flex items-start space-x-2">
                                      <FormControl>
                                        <Checkbox
                                          checked={ServiceField.value?.includes(
                                            service.id
                                          )}
                                          onCheckedChange={(checked) => {
                                            if (checked) {
                                              ServiceField.onChange([
                                                ...(ServiceField.value || []),
                                                service.id,
                                              ]);
                                            } else {
                                              ServiceField.onChange(
                                                (
                                                  ServiceField.value as string[]
                                                )?.filter(
                                                  (value: string) =>
                                                    value !== service.id
                                                ) || []
                                              );
                                            }
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal text-sm cursor-pointer">
                                        {service.label}
                                      </FormLabel>
                                    </FormItem>
                                  )}
                                />
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        // Categories without sub-services - show as simple checkbox without arrow
                        <div className="py-4">
                          <FormField
                            key={category.id}
                            name={name}
                            control={control}
                            render={({ field: CategoryField }) => (
                              <FormItem className="border-0 p-0 flex items-center space-x-2">
                                <FormControl>
                                  <Checkbox
                                    checked={CategoryField.value?.includes(
                                      category.id
                                    )}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        CategoryField.onChange([
                                          ...(CategoryField.value || []),
                                          category.id,
                                        ]);
                                      } else {
                                        CategoryField.onChange(
                                          (
                                            CategoryField.value as string[]
                                          )?.filter(
                                            (value: string) =>
                                              value !== category.id
                                          ) || []
                                        );
                                      }
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-medium cursor-pointer">
                                  {category.label}
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </Accordion>
              </div>
            </FormControl>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      responsiblePerson: "",
      email: "",
      mobileNumber: "",
      state: "",
      targetCity: "",
      selectedServices: [],
      orderDetails: "",
      contactPreference: [],
      uploadedFiles: "",
    },
  });

  function onSubmit(values: FormData) {
    console.log("Form submitted:", values);
    // Handle form submission here
    // You can add API call here to submit the form data

    // Show success message or handle success
    alert(t("successMessage"));

    // Call onSuccess callback if provided (to close dialog)
    if (onSuccess) {
      onSuccess();
    }
  }

  function onReset() {
    form.reset();
    form.clearErrors();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onReset={onReset}
        className="space-y-8 @container"
      >
        <div className="grid grid-cols-12 gap-6">
          {/* Company Name */}
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("companyName")}
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.companyName")}
                      type="text"
                      id="companyName"
                      className="rounded-full"
                      spellCheck={false}
                      data-ms-editor="false"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Responsible Person */}
          <FormField
            control={form.control}
            name="responsiblePerson"
            render={({ field }) => (
              <FormItem className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("responsiblePerson")}
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.responsiblePerson")}
                      type="text"
                      id="responsiblePerson"
                      className="rounded-full"
                      spellCheck={false}
                      data-ms-editor="false"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">{t("email")}</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.email")}
                      type="email"
                      id="email"
                      className=""
                      spellCheck={false}
                      data-ms-editor="false"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Mobile Number */}
          <FormField
            control={form.control}
            name="mobileNumber"
            render={({ field }) => (
              <FormItem className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("mobileNumber")}
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.mobileNumber")}
                      type="tel"
                      id="mobileNumber"
                      className="rounded-full"
                      spellCheck={false}
                      data-ms-editor="false"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* State */}
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">{t("state")}</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full rounded-full">
                        <SelectValue
                          placeholder={t("placeholders.selectState")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {stateOptions.map((state) => (
                          <SelectItem key={state.value} value={state.value}>
                            {state.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Target City/Area */}
          <FormField
            control={form.control}
            name="targetCity"
            render={({ field }) => (
              <FormItem className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("targetCity")}
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.targetCity")}
                      type="text"
                      id="targetCity"
                      className="rounded-full"
                      spellCheck={false}
                      data-ms-editor="false"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Select Services */}
          <HierarchicalServiceSelector
            name="selectedServices"
            control={form.control}
            categories={serviceCategories}
            label={t("selectServices")}
          />

          {/* Order Details */}
          <FormField
            control={form.control}
            name="orderDetails"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("orderDetails")}
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Textarea
                      placeholder={t("placeholders.orderDetails")}
                      id="orderDetails"
                      className="min-h-[120px]"
                      spellCheck={false}
                      data-ms-editor="false"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Contact Preference */}
          <FormField
            control={form.control}
            name="contactPreference"
            render={() => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-4 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("contactPreference")}
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      {contactOptions.map((option) => (
                        <FormField
                          key={option.id}
                          name="contactPreference"
                          control={form.control}
                          render={({ field: OptionField }) => (
                            <FormItem className="border-0 p-0 flex items-start">
                              <FormControl>
                                <Checkbox
                                  checked={OptionField.value?.includes(
                                    option.id
                                  )}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? OptionField.onChange([
                                          ...(OptionField.value || []),
                                          option.id,
                                        ])
                                      : OptionField.onChange(
                                          (
                                            OptionField.value as string[]
                                          )?.filter(
                                            (value: string) =>
                                              value !== option.id
                                          ) || []
                                        );
                                  }}
                                />
                              </FormControl>
                              <div className="grid gap-2 leading-none">
                                <FormLabel className="font-normal">
                                  {option.label}
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Upload File */}
          <FormField
            control={form.control}
            name="uploadedFiles"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("uploadFile")}
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder=""
                      type="file"
                      id="uploadedFiles"
                      className=""
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {t("uploadFileDescription")}
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
            <div className="w-full">
              <Button
                type="submit"
                variant="default"
                className="w-full rounded-full"
              >
                {t("submitButton")}
              </Button>
            </div>
          </div>

          {/* Reset Button */}
          <div className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
            <div className="w-full">
              <Button
                type="reset"
                variant="outline"
                className="w-full rounded-full"
              >
                {t("resetButton")}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
