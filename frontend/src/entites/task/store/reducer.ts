import type { CreateTaskRequest } from "../../../features/task/api/type";
import {
  CREATE_TASK_FAILURE,
  CREATE_TASK_FETCH,
  CREATE_TASK_SUCCESS,
} from "../../../features/task/model/actions/create-action";
import {
  GET_TASKS_FAILURE,
  GET_TASKS_SUCCESS,
} from "../model/actions/get-action";
import type { Task } from "../model/task";

interface TaskState {
  task: Task[];
  error?: string;
  loading: boolean;
}

type Action =
  | { type: typeof GET_TASKS_SUCCESS; payload: Task[] }
  | { type: typeof GET_TASKS_FAILURE; payload: string }
  | { type: "GET_TASKS_FETCH" }
  | { type: typeof CREATE_TASK_FETCH; payload: CreateTaskRequest }
  | { type: typeof CREATE_TASK_SUCCESS; payload: Task }
  | { type: typeof CREATE_TASK_FAILURE; payload: string };
const initialState = {
  task: [],
  error: undefined,
  loading: false,
};
const taskReducer = (state = initialState, action: Action): TaskState => {
  switch (action.type) {
    case "GET_TASKS_FETCH":
    case CREATE_TASK_FETCH:
      return { ...state, loading: true, error: undefined };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        task: action.payload,
        loading: false,
        error: undefined,
      };
    case GET_TASKS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        task: [...state.task, action.payload],
        loading: false,
      };
    case CREATE_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
