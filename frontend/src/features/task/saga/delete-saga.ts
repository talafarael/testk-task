import { call, put, takeEvery } from "redux-saga/effects";
import {
  DELETE_TASK_FETCH,
  deleteTaskFailure,
  deleteTaskSuccess,
  type DeleteTaskFetchAction,
} from "../model/actions/delete-action";
import { deleteTaskApi } from "../api/mutation-api";

function* workDeleteTaskFetch(action: DeleteTaskFetchAction): Generator {
  try {
    const newTask: string = yield call(deleteTaskApi, action.payload);
    yield put(deleteTaskSuccess(newTask));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(deleteTaskFailure(error.message));
    } else {
      yield put(deleteTaskFailure("Unknown error"));
    }
  }
}

export function* deleteTaskSaga() {
  yield takeEvery(DELETE_TASK_FETCH, workDeleteTaskFetch);
}
