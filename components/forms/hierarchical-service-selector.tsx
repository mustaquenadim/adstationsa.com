import React from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  RequestQuoteFormData,
  ServiceCategory,
} from "@/lib/schemas/request-quote-form";

interface HierarchicalServiceSelectorProps {
  control: Control<RequestQuoteFormData>;
  name: keyof RequestQuoteFormData;
  label: string;
  categories: ServiceCategory[];
  className?: string;
}

const ServiceCategoryItem: React.FC<{
  category: ServiceCategory;
  control: Control<RequestQuoteFormData>;
  name: keyof RequestQuoteFormData;
}> = ({ category, control, name }) => {
  const handleCategoryToggle = (
    checked: boolean,
    field: { value: string[] | undefined; onChange: (value: string[]) => void }
  ) => {
    if (checked) {
      // Add category and all its services
      const newServices = [
        ...(field.value || []),
        category.id,
        ...category.services.map((s) => s.id),
      ];
      field.onChange([...new Set(newServices)]);
    } else {
      // Remove category and all its services
      const servicesToRemove = [
        category.id,
        ...category.services.map((s) => s.id),
      ];
      field.onChange(
        (field.value || []).filter(
          (value: string) => !servicesToRemove.includes(value)
        )
      );
    }
  };

  const handleServiceToggle = (
    checked: boolean,
    serviceId: string,
    field: { value: string[] | undefined; onChange: (value: string[]) => void }
  ) => {
    if (checked) {
      field.onChange([...(field.value || []), serviceId]);
    } else {
      field.onChange(
        (field.value || []).filter((value: string) => value !== serviceId)
      );
    }
  };

  if (category.services.length === 0) {
    // Simple category without sub-services
    return (
      <div className="py-4">
        <FormField
          key={category.id}
          name={name}
          control={control}
          render={({ field }) => (
            <FormItem className="border-0 p-0 flex items-center space-x-2">
              <FormControl>
                <Checkbox
                  checked={(field.value as string[])?.includes(category.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      field.onChange([
                        ...((field.value as string[]) || []),
                        category.id,
                      ]);
                    } else {
                      field.onChange(
                        ((field.value as string[]) || []).filter(
                          (value: string) => value !== category.id
                        )
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
    );
  }

  // Category with sub-services - show with accordion
  return (
    <AccordionItem value={category.id} className="border-0">
      <div className="flex items-center space-x-2 py-4">
        <FormField
          key={category.id}
          name={name}
          control={control}
          render={({ field }) => (
            <FormItem className="border-0 p-0 flex items-center space-x-2">
              <FormControl>
                <Checkbox
                  checked={(field.value as string[])?.includes(category.id)}
                  onCheckedChange={(checked) =>
                    handleCategoryToggle(checked as boolean, {
                      value: field.value as string[] | undefined,
                      onChange: field.onChange,
                    })
                  }
                />
              </FormControl>
              <FormLabel className="font-medium cursor-pointer">
                {category.label}
              </FormLabel>
            </FormItem>
          )}
        />
        <AccordionTrigger className="text-left flex-1 justify-end p-0 h-auto" />
      </div>
      <AccordionContent>
        <div className="grid gap-2 pl-6 pt-2">
          {category.services.map((service) => (
            <FormField
              key={service.id}
              name={name}
              control={control}
              render={({ field }) => (
                <FormItem className="border-0 p-0 flex items-start space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={(field.value as string[])?.includes(service.id)}
                      onCheckedChange={(checked) =>
                        handleServiceToggle(checked as boolean, service.id, {
                          value: field.value as string[] | undefined,
                          onChange: field.onChange,
                        })
                      }
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
  );
};

export const HierarchicalServiceSelector: React.FC<
  HierarchicalServiceSelectorProps
> = ({ control, name, label, categories, className = "col-span-12" }) => (
  <FormField
    control={control}
    name={name}
    render={() => (
      <FormItem
        className={`${className} col-start-auto flex self-end flex-col gap-3 space-y-0 items-start`}
      >
        <FormLabel className="flex shrink-0">{label}</FormLabel>
        <div className="w-full">
          <FormControl>
            <div className="w-full">
              <Accordion type="multiple" className="w-full">
                {categories.map((category) => (
                  <ServiceCategoryItem
                    key={category.id}
                    category={category}
                    control={control}
                    name={name}
                  />
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
