import type { Task } from "../../../entites/task/model/task";
import { updateTaskApi } from "../api/mutation-api";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  updateTaskFailure,
  updateTaskSuccess,
  type UpdateTaskFetchAction,
  UPDATE_TASK_FETCH,
} from "../model/actions/update-action";
import { navigate } from "../../../shared/lib/navigation";
import { routes } from "../../../shared/constant/routers";

function* workUpdateTaskFetch(action: UpdateTaskFetchAction): Generator {
  try {
    const newTask: Task = yield call(updateTaskApi, action.payload);
    yield put(updateTaskSuccess(newTask));
    yield call(navigate, routes.home);
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(updateTaskFailure(error.message));
    } else {
      yield put(updateTaskFailure("Unknown error"));
    }
  }
}

export function* updateTaskSaga() {
  yield takeEvery(UPDATE_TASK_FETCH, workUpdateTaskFetch);
}
