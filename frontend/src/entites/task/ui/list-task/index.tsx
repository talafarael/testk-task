import { useDispatch, useSelector } from "react-redux";
import { getTaskFetch } from "../../model/actions";
import { useEffect } from "react";
import type { Task } from "../../model/task";
import type { RootState } from "../../../../shared/model/reducer/root-reducer";

export const ListTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.taskReducer.task);
  useEffect(() => {
    dispatch(getTaskFetch());
  }, [dispatch]);
  return (
    <div>
      {tasks?.map((t: Task) => (
        <li key={t._id}>{t.title}</li>
      ))}
    </div>
  );
};
