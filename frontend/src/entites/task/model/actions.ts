import type { Task } from "./task";

export const GET_TASK_FETCH = "GET_TASK_FETCH";
export const GET_TASK_SUCCESS = "GET_TASK_SUCCESS";
export const GET_TASK_FAILURE = "GET_TASK_FAILURE";
export interface GetTaskSuccessAction {
  type: typeof GET_TASK_SUCCESS;
  payload: Task[];
}

export interface GetTaskFailureAction {
  type: typeof GET_TASK_FAILURE;
  payload: string;
}
export const getTaskFetch = () => ({
  type: GET_TASK_FETCH,
});
export const getTasksSuccess = (tasks: Task[]): GetTaskSuccessAction => ({
  type: GET_TASK_SUCCESS,
  payload: tasks,
});
export const getTaskFailure = (error: string): GetTaskFailureAction => ({
  type: GET_TASK_FAILURE,
  payload: error,
});
