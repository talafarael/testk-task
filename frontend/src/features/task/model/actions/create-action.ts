import type { Task } from "../../../../entites/task/model/task";
import type { CreateTaskRequest } from "../../api/type";

export const CREATE_TASK_FETCH = "CREATE_TASK_FETCH";
export const CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS";
export const CREATE_TASK_FAILURE = "CREATE_TASK_FAILURE";

export interface CreateTaskFetchAction {
  type: typeof CREATE_TASK_FETCH;
  payload: CreateTaskRequest;
}

export interface CreateTaskSuccessAction {
  type: typeof CREATE_TASK_SUCCESS;
  payload: Task;
}

export interface CreateTaskFailureAction {
  type: typeof CREATE_TASK_FAILURE;
  payload: string;
}

export const createTaskFetch = (
  task: CreateTaskRequest,
): CreateTaskFetchAction => ({
  type: CREATE_TASK_FETCH,
  payload: task,
});

export const createTaskSuccess = (task: Task): CreateTaskSuccessAction => ({
  type: CREATE_TASK_SUCCESS,
  payload: task,
});

export const createTaskFailure = (error: string): CreateTaskFailureAction => ({
  type: CREATE_TASK_FAILURE,
  payload: error,
});
