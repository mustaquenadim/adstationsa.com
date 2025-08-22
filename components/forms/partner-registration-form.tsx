"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { usePartnerForm } from "@/hooks/use-partner-form";
import {
  TextInputField,
  FileInputField,
  SelectField,
  CheckboxGroupField,
} from "./form-fields";

export default function PartnerRegistrationForm() {
  const {
    form,
    t,
    countries,
    saudiRegions,
    availableCities,
    partnerTypes,
    offeredServices,
    selectedState,
    onSubmit,
    onReset,
  } = usePartnerForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit as any)}
        onReset={onReset}
        className="space-y-8 @container"
      >
        <div className="grid grid-cols-12 gap-6">
          <TextInputField
            control={form.control as any}
            name="partnerName"
            label={t("partnerName")}
          />

          <SelectField
            control={form.control as any}
            name="partnerType"
            label={t("partnerType")}
            placeholder={t("placeholders.selectPartnerType")}
            options={partnerTypes}
          />

          <FileInputField
            control={form.control as any}
            name="partnerLogo"
            label={t("officialLogo")}
            description={t("logoDescription")}
          />

          <SelectField
            control={form.control as any}
            name="country"
            label={t("country")}
            placeholder={t("placeholders.selectCountry")}
            options={countries}
            disabled
          />

          <SelectField
            control={form.control as any}
            name="state"
            label={t("state")}
            placeholder={t("placeholders.selectState")}
            options={saudiRegions}
          />

          <SelectField
            control={form.control as any}
            name="city"
            label={t("city")}
            placeholder={
              !selectedState
                ? t("placeholders.selectRegionFirst")
                : availableCities.length === 0
                ? t("placeholders.noCitiesAvailable")
                : t("placeholders.selectCity")
            }
            options={availableCities}
            disabled={!selectedState || availableCities.length === 0}
          />

          <TextInputField
            control={form.control as any}
            name="neighborhood"
            label={t("neighborhood")}
            placeholder={t("placeholders.enterNeighborhood")}
          />

          <TextInputField
            control={form.control as any}
            name="street"
            label={t("street")}
            placeholder={t("placeholders.enterStreet")}
          />

          <CheckboxGroupField
            control={form.control as any}
            name="offeredServices"
            label={t("servicesOffered")}
            options={offeredServices}
          />

          <FileInputField
            control={form.control as any}
            name="workSamples"
            label={t("workSamples")}
            description={t("workSamplesDescription")}
          />

          <TextInputField
            control={form.control as any}
            name="responsiblePersonName"
            label={t("responsiblePersonName")}
          />

          <TextInputField
            control={form.control as any}
            name="contactNumber"
            label={t("contactNumber")}
            type="tel"
          />

          <div className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
            <div className="w-full">
              <Button
                className="w-full cursor-pointer rounded-full"
                type="submit"
                variant="default"
                disabled={form.formState.isSubmitting}
              >
                {t("submitButton")}
              </Button>
            </div>
          </div>

          <div className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
            <div className="w-full">
              <Button
                className="w-full cursor-pointer rounded-full"
                type="reset"
                variant="outline"
                disabled={form.formState.isSubmitting}
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
