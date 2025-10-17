import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskApi } from "../api/query-api";
import type { Task } from "../model/task";

export const useGetTask = () => {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    (async () => {
      try {
        if (!id) return;
        setLoading(true);
        const res = await getTaskApi(id);
        setTask(res);
        setLoading(false);
      } catch (e) {
        setError(e.message || "Error fetching task");
        setLoading(false);
      }
    })();
  }, [id]);
  return { task, loading, error };
};
