import { routes } from "../../../../shared/constant/routers";
import { Button } from "../../../../shared/ui/button";
import type { Task } from "../../model/task";
import "./style.css";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../../shared/store";
import { navigate } from "../../../../shared/lib/navigation";
import { deleteTaskFetch } from "../../../../features/task/model/actions/delete-action";
import { InputCheckbox } from "../../../../shared/ui/input-checkbox";
import { updateTaskFetch } from "../../../../features/task/model/actions/update-action";
export interface ItemTasProps {
  task: Task;
}
export const ItemTask = ({ task }: ItemTasProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const handlerSubmit = async (data: boolean) => {
    if (!task) return;
    dispatch(
      updateTaskFetch({
        completed: data,
        id: task._id,
      }),
    );
  };

  const handlerNav = (path: string) => {
    navigate(path);
  };
  const handlerDelete = (id: string) => {
    dispatch(deleteTaskFetch(id));
  };
  return (
    <div className="item-task-container">
      <div className="item-task-header">
        <h3 className="item-task-title">{task.title}</h3>
        <InputCheckbox
          onChange={() => handlerSubmit(!task.completed)}
          value={task.completed}
        />
      </div>

      <p className="item-task-description"> {task.description}</p>
      <Button
        className="item-task-button"
        onClick={() => handlerNav(routes.update(task._id))}
        text="Update"
      />
      <Button
        onClick={() => handlerDelete(task._id)}
        className="item-task-button"
        text="Delete"
      />
    </div>
  );
};
