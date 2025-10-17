import {
  type FieldError,
  type FieldValues,
  type Path,
  Controller,
  type Control,
} from "react-hook-form";
import type { Validation } from "../../type/validation";

export type FormFieldProps<T extends FieldValues> = {
  type: string;
  placeholder: string;
  name: Path<T>;
  error?: FieldError | undefined;
  style: string;
  styleError?: string;
  control: Control<T>;
  validation?: Validation;
};
export const Input = <T extends FieldValues>({
  type,
  name,
  style,
  error,
  styleError,
  placeholder,
  control,
  validation,
}: FormFieldProps<T>) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({ field }) => (
          <input
            className={`${style}`}
            type={type}
            {...field}
            placeholder={placeholder}
          />
        )}
      />
      {error?.message && <div className={styleError}>{error.message}</div>}
    </div>
  );
};
