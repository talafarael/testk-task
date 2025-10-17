import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import type { Task } from "../../model/task";
import type { RootState } from "../../../../shared/model/reducer/root-reducer";
import { getTaskFetch } from "../../model/actions/get-action";
import { ItemTask } from "../item-task";

export const ListTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.taskReducer.task);
  useEffect(() => {
    dispatch(getTaskFetch());
  }, [dispatch]);
  return (
    <div>
      {tasks?.map((t: Task) => (
        <ItemTask task={t} key={t._id} />
      ))}
    </div>
  );
};
