import { useDispatch, useSelector } from "react-redux";
import type { CreateTaskRequest } from "../../api/type";
import { TaskForm } from "../task-form";
import { createTaskMockData } from "./create-task.mock";
import type { RootState } from "../../../../shared/model/reducer/root-reducer";
import { createTaskFetch } from "../../model/actions/create-action";

export const CreateTask = () => {
  const dispatch = useDispatch();
  const { task, loading, error } = useSelector(
    (state: RootState) => state.taskReducer,
  );
  const handlerSubmit = (data: CreateTaskRequest) => {
    dispatch(createTaskFetch(data));
  };

  return (
    <div>
      <TaskForm data={createTaskMockData} handlerSubmit={handlerSubmit} />
    </div>
  );
};
