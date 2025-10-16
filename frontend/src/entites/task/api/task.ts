import type { AxiosResponse } from "axios";
import { axiosQuery } from "../../../shared/api/inde";

export const getTasksApi = async (): Promise<AxiosResponse> => {
  const res = await axiosQuery("tasks");
  return res.data;
};
