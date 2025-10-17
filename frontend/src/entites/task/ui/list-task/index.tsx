import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import type { Task } from "../../model/task";
import type { RootState } from "../../../../shared/model/reducer/root-reducer";
import { ItemTask } from "../item-task";
import "./style.css";
import { getTaskFetch } from "../../model/actions/get-tasks-action";

export const ListTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.taskReducer.task);
  useEffect(() => {
    dispatch(getTaskFetch());
  }, [dispatch]);
  return (
    <div className="container-task">
      <h1 className="title-task-list">Task list</h1>
      <div className="container-task-list">
        {tasks?.map((t: Task) => (
          <ItemTask task={t} key={t._id} />
        ))}
      </div>
    </div>
  );
};
