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

// Form schema with validation
const formSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  responsiblePerson: z.string().min(1, "Responsible person is required"),
  email: z.string().email("Please enter a valid email address"),
  mobileNumber: z.string().min(1, "Mobile number is required"),
  state: z.string().min(1, "Please select a state"),
  targetCity: z.string().min(1, "Target city/area is required"),
  selectedServices: z
    .array(z.string())
    .min(1, "Please select at least one service"),
  orderDetails: z.string().min(1, "Order details are required"),
  contactPreference: z
    .array(z.string())
    .min(1, "Please select a contact preference"),
  uploadedFiles: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

// Service options
const serviceOptions = [
  { id: "outdoor-advertising", label: "Outdoor Advertising" },
  { id: "indoor-signage", label: "Indoor Signage" },
  { id: "creative-design", label: "Creative Design" },
  { id: "printing", label: "Printing Services" },
  { id: "exhibitions-events", label: "Exhibitions & Events" },
  { id: "point-of-sale", label: "Point of Sale" },
];

// Contact preference options
const contactOptions = [
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone Call" },
  { id: "whatsapp", label: "WhatsApp" },
];

// State options
const stateOptions = [
  { value: "riyadh", label: "Riyadh" },
  { value: "jeddah", label: "Jeddah" },
  { value: "dammam", label: "Dammam" },
  { value: "makkah", label: "Makkah" },
  { value: "medina", label: "Medina" },
  { value: "other", label: "Other" },
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

interface RequestQuoteFormProps {
  onSuccess?: () => void;
}

export default function RequestQuoteForm({ onSuccess }: RequestQuoteFormProps) {
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
    alert(
      "Thank you! Your quote request has been submitted successfully. We'll get back to you soon."
    );

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
                <FormLabel className="flex shrink-0">Company Name</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Enter your company name"
                      type="text"
                      id="companyName"
                      className=""
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
                  Responsible Person
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Enter responsible person name"
                      type="text"
                      id="responsiblePerson"
                      className=""
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
                <FormLabel className="flex shrink-0">Email</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      type="email"
                      id="email"
                      className=""
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
                <FormLabel className="flex shrink-0">Mobile Number</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Enter your mobile number"
                      type="tel"
                      id="mobileNumber"
                      className=""
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
                <FormLabel className="flex shrink-0">State</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select State" />
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
                  Target City/Area
                </FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Enter target city or area"
                      type="text"
                      id="targetCity"
                      className=""
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
            label="Select Services"
          />

          {/* Order Details */}
          <FormField
            control={form.control}
            name="orderDetails"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">Order Details</FormLabel>
                <div className="w-full">
                  <FormControl>
                    <Textarea
                      placeholder="Please describe your order requirements..."
                      id="orderDetails"
                      className="min-h-[120px]"
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
            label="Contact Preference"
          />

          {/* Upload File */}
          <FormField
            control={form.control}
            name="uploadedFiles"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">Upload File</FormLabel>
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
                    You can upload multiple files. Maximum file size: 5MB
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          {/* Reset Button */}
          <div className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
            <div className="w-full">
              <Button type="reset" variant="outline" className="w-full">
                Reset
              </Button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
            <div className="w-full">
              <Button type="submit" variant="default" className="w-full">
                Submit Request
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
