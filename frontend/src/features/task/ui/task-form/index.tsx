import { FormProvider, useForm } from "react-hook-form";
import type { CreateTaskRequest } from "../../api/type";
import { taskFormData } from "./task-form.data";
import { Input } from "../../../../shared/ui/input";
import { Button } from "../../../../shared/ui/button";
import "./style.css";
export interface TaskFormProps {
  data: CreateTaskRequest;
  loading?: boolean;
  error?: string;
  handlerSubmit: (data: CreateTaskRequest) => void;
}
export const TaskForm = ({
  data,
  handlerSubmit,
  loading,
  error,
}: TaskFormProps) => {
  const form = useForm<CreateTaskRequest>({
    defaultValues: data,
  });
  return (
    <FormProvider {...form}>
      <form
        className="task-form"
        onSubmit={form.handleSubmit((data) => handlerSubmit(data))}
      >
        {taskFormData.map((elem) => (
          <Input<CreateTaskRequest>
            key={elem.name}
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
        <h1>{error}</h1>
        <Button
          className="create-button"
          type="submit"
          loading={loading}
          text="create"
        />
      </form>
    </FormProvider>
  );
};
