import { GET_TASK_FAILURE, GET_TASK_SUCCESS } from "./actions";
import type { Task } from "./task";

interface TaskState {
  task: Task[];
  error?: string;
}

type Action =
  | { type: typeof GET_TASK_SUCCESS; payload: Task[] }
  | { type: typeof GET_TASK_FAILURE; payload: string }
  | { type: "GET_TASK_FETCH" };
const initialState: TaskState = {
  task: [],
  error: undefined,
};
const taskReducer = (state = initialState, action: Action): TaskState => {
  switch (action.type) {
    case GET_TASK_SUCCESS:
      return { ...state, task: action.payload, error: undefined };
    case GET_TASK_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
