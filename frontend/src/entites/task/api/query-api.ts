import type { AxiosResponse } from "axios";
import { axiosQuery } from "../../../shared/api/index";
import type { Task } from "../model/task";

export const getTasksApi = async (search?: string): Promise<AxiosResponse> => {
  const res = await axiosQuery({
    path: search ? `tasks?search=${search}` : "tasks",
  });
  return res.data.data;
};
export const getTaskApi = async (id: string): Promise<Task> => {
  const res = await axiosQuery({ path: `tasks/${id}` });
  return res.data.data;
};
