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
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function PartnerRegistrationForm() {
  const t = useTranslations("joinUs.form");
  const formSchema = z.object({
    "partner-name": z.string().min(1, { message: t("validation.required") }),
    "partner-type": z.string(),
    "partner-logo": z.string(),
    state: z.string(),
    city: z.string(),
    neighborhood: z.string(),
    street: z.string(),
    "offered-services": z.array(z.string()).optional(),
    "work-samples": z.string(),
    "responsible-person-name": z.string(),
    "contact-number": z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "partner-name": "",
      "partner-type": "",
      "partner-logo": "",
      state: "",
      city: "",
      neighborhood: "",
      street: "",
      "offered-services": [],
      "work-samples": "",
      "responsible-person-name": "",
      "contact-number": "",
    },
  });

  // Data arrays for loops
  const partnerTypes = [
    { value: "committee", label: t("partnerTypes.committee") },
    { value: "firm", label: t("partnerTypes.firm") },
    { value: "power-of-attorney", label: t("partnerTypes.powerOfAttorney") },
    { value: "company", label: t("partnerTypes.company") },
  ];

  const locationOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  const offeredServices = [
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
          <FormField
            control={form.control}
            name="partner-name"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("partnerName")}
                </FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="text-input-0"
                        placeholder=""
                        type="text"
                        id="partner-name"
                        className="rounded-full"
                        spellCheck={false}
                        data-ms-editor="false"
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="partner-type"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("partnerType")}
                </FormLabel>

                <div className="w-full">
                  <FormControl>
                    <Select {...field} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full rounded-full">
                        <SelectValue
                          placeholder={t("placeholders.selectPartnerType")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {partnerTypes.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
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
          <FormField
            control={form.control}
            name="partner-logo"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("officialLogo")}
                </FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="file-input-0"
                        placeholder=""
                        type="file"
                        id="partner-logo"
                        className="rounded-full"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>{t("logoDescription")}</FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">{t("state")}</FormLabel>

                <div className="w-full">
                  <FormControl>
                    <Select {...field} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full rounded-full">
                        <SelectValue
                          placeholder={t("placeholders.selectState")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {locationOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
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
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">{t("city")}</FormLabel>

                <div className="w-full">
                  <FormControl>
                    <Select {...field} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full rounded-full">
                        <SelectValue
                          placeholder={t("placeholders.selectCity")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {locationOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
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
          <FormField
            control={form.control}
            name="neighborhood"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("neighborhood")}
                </FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="text-input-1"
                        placeholder={t("placeholders.enterNeighborhood")}
                        type="text"
                        id="neighborhood"
                        className="rounded-full"
                        spellCheck={false}
                        data-ms-editor="false"
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">{t("street")}</FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="text-input-2"
                        placeholder={t("placeholders.enterStreet")}
                        type="text"
                        id="street"
                        className="rounded-full"
                        spellCheck={false}
                        data-ms-editor="false"
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="offered-services"
            render={() => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-4 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("servicesOffered")}
                </FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="grid w-full gap-4 @3xl:grid-cols-2">
                      {offeredServices.map((service) => (
                        <FormField
                          key={service.value}
                          name="offered-services"
                          control={form.control}
                          render={({ field: OptionField }) => {
                            return (
                              <FormItem
                                key={service.value}
                                className="border-0 p-0 flex items-start"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={OptionField.value?.includes(
                                      service.value
                                    )}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? OptionField.onChange([
                                            ...(OptionField.value || []),
                                            service.value,
                                          ])
                                        : OptionField.onChange(
                                            (
                                              OptionField.value as string[]
                                            )?.filter(
                                              (value: string) =>
                                                value !== service.value
                                            ) || []
                                          );
                                    }}
                                  />
                                </FormControl>
                                <div className="grid gap-2 leading-none">
                                  <FormLabel className="font-normal">
                                    {service.label}
                                  </FormLabel>
                                </div>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                  </FormControl>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="work-samples"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("workSamples")}
                </FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="file-input-1"
                        placeholder=""
                        type="file"
                        id="work-samples"
                        className="rounded-full"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    {t("workSamplesDescription")}
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="responsible-person-name"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("responsiblePersonName")}
                </FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="text-input-3"
                        placeholder=""
                        type="text"
                        id="responsible-person-name"
                        className="rounded-full"
                        spellCheck={false}
                        data-ms-editor="false"
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact-number"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-3 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("contactNumber")}
                </FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="tel-input-0"
                        placeholder=""
                        type="tel"
                        id="contact-number"
                        className="rounded-full"
                        spellCheck={false}
                        data-ms-editor="false"
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <div className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
            <div className="w-full">
              <Button
                key="submit-button-0"
                id="submit"
                name=""
                className="w-full cursor-pointer rounded-full"
                type="submit"
                variant="default"
              >
                {t("submitButton")}
              </Button>
            </div>
          </div>
          <div className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
            <div className="w-full">
              <Button
                key="reset-button-0"
                id="reset"
                name=""
                className="w-full cursor-pointer rounded-full"
                type="reset"
                variant="outline"
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
