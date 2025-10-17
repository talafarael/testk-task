import type { Task } from "../../../../entites/task/model/task";
import type { UpdateTaskRequest } from "../../api/type";

export const UPDATE_TASK_FETCH = "UPDATE_TASK_FETCH";
export const UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS";
export const UPDATE_TASK_FAILURE = "UPDATE_TASK_FAILURE";

export interface UpdateTaskFetchAction {
  type: typeof UPDATE_TASK_FETCH;
  payload: UpdateTaskRequest;
}

export interface UpdateTaskSuccessAction {
  type: typeof UPDATE_TASK_SUCCESS;
  payload: Task;
}

export interface UpdateTaskFailureAction {
  type: typeof UPDATE_TASK_FAILURE;
  payload: string;
}
export const updateTaskFetch = (
  task: UpdateTaskRequest,
): UpdateTaskFetchAction => ({
  type: UPDATE_TASK_FETCH,
  payload: task,
});

export const updateTaskSuccess = (task: Task): UpdateTaskSuccessAction => ({
  type: UPDATE_TASK_SUCCESS,
  payload: task,
});

export const updateTaskFailure = (error: string): UpdateTaskFailureAction => ({
  type: UPDATE_TASK_FAILURE,
  payload: error,
});
