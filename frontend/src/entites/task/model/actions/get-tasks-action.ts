import type { Task } from "../task";

export const GET_TASKS_FETCH = "GET_TASKS_FETCH";
export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const GET_TASKS_FAILURE = "GET_TASKS_FAILURE";
export interface GetTaskFetchAction {
  type: typeof GET_TASKS_FETCH;
  payload?: string;
}
export interface GetTaskSuccessAction {
  type: typeof GET_TASKS_SUCCESS;
  payload: Task[];
}

export interface GetTaskFailureAction {
  type: typeof GET_TASKS_FAILURE;
  payload: string;
}
export const getTaskFetch = (search?: string) => ({
  type: GET_TASKS_FETCH,
  payload: search,
});
export const getTasksSuccess = (tasks: Task[]): GetTaskSuccessAction => ({
  type: GET_TASKS_SUCCESS,
  payload: tasks,
});
export const getTaskFailure = (error: string): GetTaskFailureAction => ({
  type: GET_TASKS_FAILURE,
  payload: error,
});
