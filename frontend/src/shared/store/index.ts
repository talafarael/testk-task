import { rootReducer } from "../model/reducer/root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import taskSaga from "../../entites/task/saga/taskSaga";
import createSagaMiddleware from "redux-saga";
import { loadState, saveState } from "../../entites/task/store/local-store";
import { createTaskSaga } from "../../features/task/saga/create-saga";

export const sagaMiddleware = createSagaMiddleware();
const persistedState = loadState();
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
});
sagaMiddleware.run(taskSaga);
sagaMiddleware.run(createTaskSaga);

store.subscribe(() => {
  saveState(store.getState());
});
