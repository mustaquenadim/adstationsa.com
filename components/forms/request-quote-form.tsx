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

  // Service options using translations
  const serviceOptions = [
    { id: "outdoor-advertising", label: t("services.outdoorAdvertising") },
    { id: "indoor-signage", label: t("services.indoorSignage") },
    { id: "creative-design", label: t("services.creativeDesign") },
    { id: "printing", label: t("services.printing") },
    { id: "exhibitions-events", label: t("services.exhibitionsEvents") },
    { id: "point-of-sale", label: t("services.pointOfSale") },
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

  // Checkbox group component
  const CheckboxGroup = ({
    name,
    control,
    options,
    label,
  }: {
    name: keyof FormData;
    control: ReturnType<typeof useForm<FormData>>["control"];
    options: { id: string; label: string }[];
    label: string;
  }) => (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
          <FormLabel className="flex shrink-0">{label}</FormLabel>
          <div className="w-full">
            <FormControl>
              <div className="grid w-full gap-2">
                {options.map((option) => (
                  <FormField
                    key={option.id}
                    name={name}
                    control={control}
                    render={({ field: OptionField }) => (
                      <FormItem className="border-0 p-0 flex items-start">
                        <FormControl>
                          <Checkbox
                            checked={OptionField.value?.includes(option.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? OptionField.onChange([
                                    ...(OptionField.value || []),
                                    option.id,
                                  ])
                                : OptionField.onChange(
                                    (OptionField.value as string[])?.filter(
                                      (value: string) => value !== option.id
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
        <div className="grid grid-cols-12 gap-4">
          {/* Company Name */}
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("companyName")}
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.companyName")}
                      type="text"
                      id="companyName"
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

          {/* Responsible Person */}
          <FormField
            control={form.control}
            name="responsiblePerson"
            render={({ field }) => (
              <FormItem className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("responsiblePerson")}
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.responsiblePerson")}
                      type="text"
                      id="responsiblePerson"
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

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
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
              <FormItem className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("mobileNumber")}
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.mobileNumber")}
                      type="tel"
                      id="mobileNumber"
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

          {/* State */}
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">{t("state")}</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
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
              <FormItem className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  {t("targetCity")}
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder={t("placeholders.targetCity")}
                      type="text"
                      id="targetCity"
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

          {/* Select Services */}
          <CheckboxGroup
            name="selectedServices"
            control={form.control}
            options={serviceOptions}
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
          <CheckboxGroup
            name="contactPreference"
            control={form.control}
            options={contactOptions}
            label={t("contactPreference")}
          />

          {/* Upload File */}
          <FormField
            control={form.control}
            name="uploadedFiles"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
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
              <Button type="submit" variant="default" className="w-full">
                {t("submitButton")}
              </Button>
            </div>
          </div>

          {/* Reset Button */}
          <div className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
            <div className="w-full">
              <Button type="reset" variant="outline" className="w-full">
                {t("resetButton")}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
