import type { AxiosResponse } from "axios";
import { axiosQuery } from "../../../shared/api/inde";
import type { Task } from "../model/task";

export const getTasksApi = async (): Promise<AxiosResponse> => {
  const res = await axiosQuery({ path: "tasks" });
  return res.data.data;
};
export const getTaskApi = async (id: string): Promise<Task> => {
  const res = await axiosQuery({ path: `tasks/${id}` });
  return res.data.data;
};
