import { useEffect } from "react";
import { getTaskFetch } from "../../model/actions/get-tasks-action";
import { useDispatch } from "react-redux";
import { ListTask } from "../list-task";
import { SearchInput } from "../../../../features/task/ui/search-input";
import "./style.css";
import { useSearchParams } from "react-router-dom";
export const Task = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search") || undefined;

    dispatch(getTaskFetch(search));
  }, [dispatch, searchParams]);
  return (
    <div className="container-task">
      <div className="container-header-task">
        <h1 className="title-task-list">Task list</h1>
        <SearchInput />
      </div>

      <ListTask />
    </div>
  );
};
