import { useDispatch, useSelector } from "react-redux";
import { useGetTask } from "../../../../entites/task/hook/use-get-task";
import { Error } from "../../../../shared/ui/error";
import { Loading } from "../../../../shared/ui/loading";
import type { CreateTaskRequest } from "../../api/type";
import { TaskForm } from "../task-form";
import type { AppDispatch } from "../../../../shared/store";
import { updateTaskFetch } from "../../model/actions/update-action";
import type { RootState } from "../../../../shared/model/reducer/root-reducer";
import { useNavigate } from "react-router-dom";

export const UpdateTask = () => {
  const { task, loading, error } = useGetTask();
  const { loading: loadTask, error: errorTask } = useSelector(
    (state: RootState) => state.taskReducer,
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handlerSubmit = async (data: CreateTaskRequest) => {
    if (!task) return;
    dispatch(
      updateTaskFetch({
        ...data,
        id: task._id,
      }),
    );
  };
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div>
      {task && (
        <TaskForm
          loading={loadTask}
          error={errorTask}
          data={task}
          handlerSubmit={handlerSubmit}
        />
      )}
    </div>
  );
};
