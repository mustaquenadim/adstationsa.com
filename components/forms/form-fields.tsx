import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Control, FieldPath } from "react-hook-form";

type FormData = {
  partnerName: string;
  partnerType: string;
  partnerLogo: string;
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  offeredServices: string[];
  workSamples: string;
  responsiblePersonName: string;
  contactNumber: string;
};

interface BaseFieldProps<T extends FieldPath<FormData>> {
  control: Control<FormData>;
  name: T;
  label: string;
  className?: string;
}

interface TextInputFieldProps<T extends FieldPath<FormData>>
  extends BaseFieldProps<T> {
  placeholder?: string;
  type?: "text" | "tel" | "email";
}

interface FileInputFieldProps<T extends FieldPath<FormData>>
  extends BaseFieldProps<T> {
  description?: string;
}

interface SelectFieldProps<T extends FieldPath<FormData>>
  extends BaseFieldProps<T> {
  placeholder: string;
  options: Array<{ value: string; label: string }>;
  disabled?: boolean;
}

interface CheckboxGroupFieldProps<T extends FieldPath<FormData>>
  extends BaseFieldProps<T> {
  options: Array<{ value: string; label: string }>;
}

export function TextInputField<T extends FieldPath<FormData>>({
  control,
  name,
  label,
  placeholder = "",
  type = "text",
  className = "col-span-12",
}: TextInputFieldProps<T>) {
  return (
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
  );
}

export function FileInputField<T extends FieldPath<FormData>>({
  control,
  name,
  label,
  description,
  className = "col-span-12",
}: FileInputFieldProps<T>) {
  return (
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
              <Input type="file" className="rounded-full" {...field} />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}

export function SelectField<T extends FieldPath<FormData>>({
  control,
  name,
  label,
  placeholder,
  options,
  disabled = false,
  className = "col-span-12",
}: SelectFieldProps<T>) {
  return (
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
                <SelectTrigger className="w-full rounded-full">
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
}

export function CheckboxGroupField<T extends FieldPath<FormData>>({
  control,
  name,
  label,
  options,
  className = "col-span-12",
}: CheckboxGroupFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem
          className={`${className} col-start-auto flex self-end flex-col gap-4 space-y-0 items-start`}
        >
          <FormLabel className="flex shrink-0">{label}</FormLabel>
          <div className="w-full">
            <FormControl>
              <div className="grid w-full gap-4 @3xl:grid-cols-2">
                {options.map((option) => (
                  <FormField
                    key={option.value}
                    name={name}
                    control={control}
                    render={({ field }) => (
                      <FormItem className="border-0 p-0 flex items-start">
                        <FormControl>
                          <Checkbox
                            checked={
                              Array.isArray(field.value) &&
                              field.value.includes(option.value)
                            }
                            onCheckedChange={(checked) => {
                              const currentValue = Array.isArray(field.value)
                                ? field.value
                                : [];
                              return checked
                                ? field.onChange([
                                    ...currentValue,
                                    option.value,
                                  ])
                                : field.onChange(
                                    currentValue.filter(
                                      (value: string) => value !== option.value
                                    )
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
}
