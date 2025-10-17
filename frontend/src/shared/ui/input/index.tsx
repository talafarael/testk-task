import {
  type FieldError,
  type FieldValues,
  type Path,
  Controller,
  type Control,
} from "react-hook-form";
import type { Validation } from "../../type/validation";
import "./style.css";
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
    <div className="container-input">
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({ field }) => (
          <input
            className={`input ${style}`}
            type={type}
            {...field}
            placeholder={placeholder}
          />
        )}
      />
      {error?.message && (
        <h4 className={`error-input ${styleError}`}>{error.message}</h4>
      )}
    </div>
  );
};
