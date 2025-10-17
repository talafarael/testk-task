import type { AxiosResponse } from "axios";
import { axiosMutation } from "../../../shared/api/index";
import type { CreateTaskRequest, UpdateTaskRequest } from "./type";

export const createTaskApi = async (
  data: CreateTaskRequest,
): Promise<AxiosResponse> => {
  const res = await axiosMutation({
    path: "tasks",
    data,
    method: "post",
  });
  return res.data.data;
};

export const updateTaskApi = async (
  data: UpdateTaskRequest,
): Promise<AxiosResponse> => {
  const res = await axiosMutation({
    path: `tasks/${data.id}`,
    data,
    method: "put",
  });
  return res.data.data;
};

export const deleteTaskApi = async (id: string): Promise<AxiosResponse> => {
  const res = await axiosMutation({
    path: `tasks/${id}`,
    method: "delete",
  });
  return res.data.data;
};
