import { FormProvider, useForm } from "react-hook-form";
import type { CreateTaskRequest } from "../../api/type";
import { taskFormData } from "./task-form.data";
import { Input } from "../../../../shared/ui/input";

export interface TaskFormProps {
  data: CreateTaskRequest;
  handlerSubmit: (data: CreateTaskRequest) => void;
}
export const TaskForm = ({ data, handlerSubmit }: TaskFormProps) => {
  const form = useForm<CreateTaskRequest>({
    defaultValues: data,
  });
  return (
    <FormProvider {...form}>
      <form
        className="w-[auto]   max-w-[800px] p-[30px] rounded-[10px]  flex flex-col items-center justify-center  "
        onSubmit={form.handleSubmit((data) => handlerSubmit(data))}
      >
        {taskFormData.map((elem) => (
          <Input<CreateTaskRequest>
            type="input"
            name={elem.name}
            error={form.formState.errors[elem.name]}
            control={form.control}
            style="..."
            styleError="..."
            validation={elem.validation}
            placeholder={elem.placeholder}
          />
        ))}
      </form>
    </FormProvider>
  );
};
