export interface Validation {
  required?: string | boolean;
  pattern?: { value: RegExp; message: string };
  validate?: (value: string) => true | string;
}
