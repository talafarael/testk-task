import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "../../../entites/task/model/reducer";

export const rootReducer = combineReducers({ taskReducer });
export type RootState = ReturnType<typeof rootReducer>;
