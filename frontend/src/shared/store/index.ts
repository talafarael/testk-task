import { rootReducer } from "../model/reducer/root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import taskSaga from "../../entites/task/saga/taskSaga";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
});
sagaMiddleware.run(taskSaga);
