import { call, put, takeEvery } from "redux-saga/effects";
import {
  CREATE_TASK_FETCH,
  createTaskFailure,
  createTaskSuccess,
  type CreateTaskFetchAction,
} from "../model/actions/create-action";
import { createTaskApi } from "../api/mutation-api";
import type { Task } from "../../../entites/task/model/task";
import { navigate } from "../../../shared/lib/navigation";
import { routes } from "../../../shared/constant/routers";

function* workCreateTaskFetch(action: CreateTaskFetchAction): Generator {
  try {
    const newTask: Task = yield call(createTaskApi, action.payload);
    yield put(createTaskSuccess(newTask));
    yield call(navigate, routes.home);
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(createTaskFailure(error.message));
    } else {
      yield put(createTaskFailure("Unknown error"));
    }
  }
}

export function* createTaskSaga() {
  yield takeEvery(CREATE_TASK_FETCH, workCreateTaskFetch);
}
