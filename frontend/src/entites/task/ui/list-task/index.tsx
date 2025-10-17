import { useSelector } from "react-redux";
import type { Task } from "../../model/task";
import type { RootState } from "../../../../shared/model/reducer/root-reducer";
import { ItemTask } from "../item-task";
import "./style.css";

export const ListTask = () => {
  const tasks = useSelector((state: RootState) => state.taskReducer.task);

  return (
    <div className="container-task-list">
      {tasks?.map((t: Task) => (
        <ItemTask task={t} key={t._id} />
      ))}
    </div>
  );
};
