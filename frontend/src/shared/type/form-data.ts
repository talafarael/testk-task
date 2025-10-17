import type { Validation } from "./validation";

export interface FormData<T> {
  name: T;
  type: string;
  placeholder: string;
  validation: Validation;
}
