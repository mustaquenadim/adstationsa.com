"use client";

import React from "react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRequestQuoteForm } from "@/hooks/use-request-quote-form";
import {
  TextField,
  TextAreaField,
  SelectField,
  CheckboxGroup,
  FileUploadField,
} from "./request-quote-form-fields";
import { HierarchicalServiceSelector } from "./hierarchical-service-selector";

interface RequestQuoteFormProps {
  onSuccess?: () => void;
}

export default function RequestQuoteForm({ onSuccess }: RequestQuoteFormProps) {
  const {
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
  } = useRequestQuoteForm(onSuccess);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onReset={onReset}
        className="space-y-8 @container"
      >
        <div className="grid grid-cols-12 gap-6">
          {/* Basic Information */}
          <TextField
            control={form.control}
            name="companyName"
            label={t("companyName")}
            placeholder={t("placeholders.companyName")}
          />

          <TextField
            control={form.control}
            name="responsiblePerson"
            label={t("responsiblePerson")}
            placeholder={t("placeholders.responsiblePerson")}
          />

          <TextField
            control={form.control}
            name="email"
            label={t("email")}
            placeholder={t("placeholders.email")}
            type="email"
            rounded={false}
            className="col-span-12 @3xl:col-span-6"
          />

          <TextField
            control={form.control}
            name="mobileNumber"
            label={t("mobileNumber")}
            placeholder={t("placeholders.mobileNumber")}
            type="tel"
          />

          {/* Location Information */}
          <SelectField
            control={form.control}
            name="country"
            label={t("country")}
            placeholder={t("placeholders.selectCountry")}
            options={countryOptions}
            disabled={true}
          />

          <SelectField
            control={form.control}
            name="state"
            label={t("state")}
            placeholder={t("placeholders.selectState")}
            options={stateOptions}
          />

          <SelectField
            control={form.control}
            name="city"
            label={t("city")}
            placeholder={t("placeholders.selectCity")}
            options={availableCities}
            disabled={!selectedState}
          />

          <TextField
            control={form.control}
            name="targetCity"
            label={t("targetCity")}
            placeholder={t("placeholders.targetCity")}
            rounded={false}
            className="col-span-12"
          />

          {/* Services Selection */}
          <HierarchicalServiceSelector
            control={form.control}
            name="selectedServices"
            label={t("selectServices")}
            categories={serviceCategories}
          />

          {/* Order Details */}
          <TextAreaField
            control={form.control}
            name="orderDetails"
            label={t("orderDetails")}
            placeholder={t("placeholders.orderDetails")}
            rows={4}
          />

          {/* Contact Preference */}
          <CheckboxGroup
            control={form.control}
            name="contactPreference"
            label={t("contactPreference")}
            options={contactOptions}
          />

          {/* File Upload */}
          <FileUploadField
            control={form.control}
            name="uploadedFiles"
            label={t("uploadFile")}
            description={t("uploadFileDescription")}
          />

          {/* Action Buttons */}
          <div className="col-span-12 @3xl:col-span-6 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start">
            <div className="w-full">
              <Button
                type="submit"
                variant="default"
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? t("submittingButton") : t("submitButton")}
              </Button>
            </div>
          </div>

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
