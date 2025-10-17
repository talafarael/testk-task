import { rootReducer } from "../model/reducer/root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { loadState, saveState } from "../../entites/task/store/local-store";
import { createTaskSaga } from "../../features/task/saga/create-saga";
import getTasksSaga from "../../entites/task/saga/get-tasks-saga";
import { updateTaskSaga } from "../../features/task/saga/update-saga";
import { deleteTaskSaga } from "../../features/task/saga/delete-saga";

export const sagaMiddleware = createSagaMiddleware();
const persistedState = loadState();
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
});

sagaMiddleware.run(getTasksSaga);
sagaMiddleware.run(createTaskSaga);
sagaMiddleware.run(updateTaskSaga);
sagaMiddleware.run(deleteTaskSaga);

export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  saveState(store.getState());
});
