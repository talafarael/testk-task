import type { FormData } from "../../../../shared/type/form-data";
import type { CreateTaskRequest } from "../../api/type";

export const taskFormData: FormData<keyof CreateTaskRequest>[] = [
  {
    name: "title",
    type: "text",
    placeholder: "Enter title",
    validation: {
      required: "This field is required",
      validate: (value: string) => {
        if (!value.trim()) {
          return "This field cannot be empty";
        }
        return true;
      },
    },
  },
  {
    name: "description",
    type: "text",
    placeholder: "Enter description",
    validation: {
      required: "This field is required",
      validate: (value: string) => {
        if (!value.trim()) {
          return "This field cannot be empty";
        }
        return true;
      },
    },
  },
];
