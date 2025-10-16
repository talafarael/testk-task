import axios, { type AxiosResponse } from "axios";
import { config } from "../config";

const API_PORT = `${config.port}/api/`;

export const createApi = () => {
  return axios.create({
    baseURL: API_PORT,
  });
};
interface AxiosMutationParams<T> {
  path: string;
  data?: T;
  method?: "post" | "put" | "delete";
}

export const axiosMutation = async <T>({
  path,
  data,
  method = "post",
}: AxiosMutationParams<T>): Promise<AxiosResponse> => {
  const axios = createApi();
  if (method === "delete") {
    return await axios.delete(path);
  }
  return await axios[method](path, data);
};

export const axiosQuery = async (path: string): Promise<AxiosResponse> => {
  const axios = createApi();
  return await axios.get(path);
};
