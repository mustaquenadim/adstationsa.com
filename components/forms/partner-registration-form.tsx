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

export default function PartnerRegistrationForm() {
  const formSchema = z.object({
    "partner-name": z.string().min(1, { message: "This field is required" }),
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
    { value: "committee", label: "Committee" },
    { value: "firm", label: "Firm" },
    { value: "power-of-attorney", label: "Power of Attorney" },
    { value: "company", label: "Company" },
  ];

  const locationOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ];

  const offeredServices = [
    {
      value: "manage-advertising-campaigns",
      label: "Manage Advertising Campaigns",
    },
    { value: "managing-promotion-teams", label: "Managing Promotion Teams" },
    { value: "products-and-pos", label: "Products & POS" },
    { value: "exhibitions-and-events", label: "Exhibitions & Events" },
    { value: "interior-panels", label: "Interior Panels" },
    { value: "printing-of-all-kinds", label: "Printing of All Kinds" },
    { value: "creative-designs", label: "Creative Designs" },
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
        <div className="grid grid-cols-12 gap-4">
          <FormField
            control={form.control}
            name="partner-name"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">Partner Name</FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="text-input-0"
                        placeholder=""
                        type="text"
                        id="partner-name"
                        className=""
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
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">Partner Type</FormLabel>

                <div className="w-full">
                  <FormControl>
                    <Select {...field} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Partner Type" />
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
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">Official Logo</FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="file-input-0"
                        placeholder=""
                        type="file"
                        id="partner-logo"
                        className=""
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Upload company logo (PDF, JPG, PNG) Max file size 5MB.
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">State</FormLabel>

                <div className="w-full">
                  <FormControl>
                    <Select {...field} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a State" />
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
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">City</FormLabel>

                <div className="w-full">
                  <FormControl>
                    <Select {...field} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a City" />
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
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">Neighborhood</FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="text-input-1"
                        placeholder="Enter neighborhood"
                        type="text"
                        id="neighborhood"
                        className=""
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
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">Enter Street</FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="text-input-2"
                        placeholder="Enter street"
                        type="text"
                        id="street"
                        className=""
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
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  Services Offered
                </FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="grid w-full gap-2 @3xl:grid-cols-2">
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
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  Previous Work Samples
                </FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="file-input-1"
                        placeholder=""
                        type="file"
                        id="work-samples"
                        className=""
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Upload multiple work samples (PDF, JPG, PNG). Max 5 files,
                    10MB each.
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
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">
                  Responsible Person Name
                </FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="text-input-3"
                        placeholder=""
                        type="text"
                        id="responsible-person-name"
                        className=""
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
              <FormItem className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
                <FormLabel className="flex shrink-0">Contact Number</FormLabel>

                <div className="w-full">
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        key="tel-input-0"
                        placeholder=""
                        type="tel"
                        id="contact-number"
                        className=""
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
                Submit Partner Application
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
                Reset
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
