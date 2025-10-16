import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_TASK_FETCH,
  getTaskFailure,
  getTasksSuccess,
} from "../model/actions";
import type { Task } from "../model/task";
import { getTasksApi } from "../api/task";

function* workGetTasksFetch(): Generator<unknown, void, Task[]> {
  try {
    const tasks = yield call(getTasksApi);
    yield put(getTasksSuccess(tasks));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(getTaskFailure(error.message));
    } else {
      yield put(getTaskFailure("Unknown error"));
    }
  }
}

function* taskSaga() {
  yield takeEvery(GET_TASK_FETCH, workGetTasksFetch);
}

export default taskSaga;
