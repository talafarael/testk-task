import { useNavigate } from "react-router-dom";
import { routes } from "../../../../shared/constant/routers";
import { Button } from "../../../../shared/ui/button";
import type { Task } from "../../model/task";
import "./style.css";
export interface ItemTasProps {
  task: Task;
}
export const ItemTask = ({ task }: ItemTasProps) => {
  const navigate = useNavigate();

  const handlerNav = (path: string) => {
    navigate(path);
  };
  return (
    <div className="item-task-container">
      <h3 className="item-task-title">{task.title}</h3>
      <p className="item-task-description"> {task.description}</p>
      <Button
        className="item-task-button"
        onClick={() => handlerNav(routes.update(task._id))}
        text="Update"
      />
      <Button className="item-task-button" text="Delete" />
    </div>
  );
};
