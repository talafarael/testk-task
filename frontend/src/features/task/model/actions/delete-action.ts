export const DELETE_TASK_FETCH = "DELETE_TASK_FETCH";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE";

export interface DeleteTaskFetchAction {
  type: typeof DELETE_TASK_FETCH;
  payload: string;
}

export interface DeleteTaskSuccessAction {
  type: typeof DELETE_TASK_SUCCESS;
  payload: string;
}

export interface DeleteTaskFailureAction {
  type: typeof DELETE_TASK_FAILURE;
  payload: string;
}

export const deleteTaskFetch = (id: string) => ({
  type: DELETE_TASK_FETCH,
  payload: id,
});

export const deleteTaskSuccess = (id: string): DeleteTaskSuccessAction => ({
  type: DELETE_TASK_SUCCESS,
  payload: id,
});

export const deleteTaskFailure = (error: string): DeleteTaskFailureAction => ({
  type: DELETE_TASK_FAILURE,
  payload: error,
});
