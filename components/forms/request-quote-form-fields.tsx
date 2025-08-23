import React from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  RequestQuoteFormData,
  SelectOption,
  ContactOption,
} from "@/lib/schemas/request-quote-form";

interface BaseFieldProps {
  control: Control<RequestQuoteFormData>;
  name: keyof RequestQuoteFormData;
  label: string;
  className?: string;
}

interface TextFieldProps extends BaseFieldProps {
  placeholder?: string;
  type?: "text" | "email" | "tel";
  rounded?: boolean;
}

interface TextAreaFieldProps extends BaseFieldProps {
  placeholder?: string;
  rows?: number;
}

interface SelectFieldProps extends BaseFieldProps {
  placeholder?: string;
  options: SelectOption[];
  rounded?: boolean;
  disabled?: boolean;
}

interface CheckboxGroupProps extends BaseFieldProps {
  options: ContactOption[];
}

interface FileUploadProps extends BaseFieldProps {
  description?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
  className = "col-span-12 @3xl:col-span-6",
  rounded = true,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem
        className={`${className} col-start-auto flex self-end flex-col gap-3 space-y-0 items-start`}
      >
        <FormLabel className="flex shrink-0">{label}</FormLabel>
        <div className="w-full">
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              id={name}
              className={rounded ? "rounded-full" : ""}
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
);

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  className = "col-span-12",
  rows = 4,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem
        className={`${className} col-start-auto flex self-end flex-col gap-3 space-y-0 items-start`}
      >
        <FormLabel className="flex shrink-0">{label}</FormLabel>
        <div className="w-full">
          <FormControl>
            <Textarea
              placeholder={placeholder}
              id={name}
              rows={rows}
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
);

export const SelectField: React.FC<SelectFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  options,
  className = "col-span-12 @3xl:col-span-6",
  rounded = true,
  disabled = false,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem
        className={`${className} col-start-auto flex self-end flex-col gap-3 space-y-0 items-start`}
      >
        <FormLabel className="flex shrink-0">{label}</FormLabel>
        <div className="w-full">
          <FormControl>
            <Select
              value={field.value as string}
              onValueChange={field.onChange}
              disabled={disabled}
            >
              <SelectTrigger
                className={`w-full ${rounded ? "rounded-full" : ""} ${
                  disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
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
);

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  control,
  name,
  label,
  options,
  className = "col-span-12",
}) => (
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
            <div className="grid grid-cols-1 gap-4">
              {options.map((option) => (
                <FormField
                  key={option.id}
                  control={control}
                  name={name}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={(field.value as string[])?.includes(
                            option.id
                          )}
                          onCheckedChange={(checked) => {
                            const currentValue =
                              (field.value as string[]) || [];
                            if (checked) {
                              field.onChange([...currentValue, option.id]);
                            } else {
                              field.onChange(
                                currentValue.filter(
                                  (value) => value !== option.id
                                )
                              );
                            }
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

export const FileUploadField: React.FC<FileUploadProps> = ({
  control,
  name,
  label,
  description,
  className = "col-span-12",
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem
        className={`${className} col-start-auto flex self-end flex-col gap-3 space-y-0 items-start`}
      >
        <FormLabel className="flex shrink-0">{label}</FormLabel>
        <div className="w-full">
          <FormControl>
            <Input
              type="file"
              id={name}
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </div>
      </FormItem>
    )}
  />
);
