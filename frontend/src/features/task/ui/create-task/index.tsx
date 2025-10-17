import { useDispatch, useSelector } from "react-redux";

import type { CreateTaskRequest } from "../../api/type";
import { TaskForm } from "../task-form";
import { createTaskMockData } from "./create-task.mock";
import type { RootState } from "../../../../shared/model/reducer/root-reducer";
import { createTaskFetch } from "../../model/actions/create-action";
import type { AppDispatch } from "../../../../shared/store";

export const CreateTask = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector(
    (state: RootState) => state.taskReducer,
  );
  const handlerSubmit = (data: CreateTaskRequest) => {
    dispatch(createTaskFetch(data));
  };

  return (
    <div>
      <TaskForm
        title="Create task"
        loading={loading}
        error={error}
        data={createTaskMockData}
        handlerSubmit={handlerSubmit}
      />
    </div>
  );
};
