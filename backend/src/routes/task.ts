import { Router } from "express";
import TaskService from "../services/task";
import {
  validateCreateTaskBody,
  validateTaskQuery,
  ValidatepdateTaskBody,
} from "../utils/validation";

const TaskRouter = Router();

TaskRouter.post("/tasks", validateCreateTaskBody(), TaskService.createTask);
TaskRouter.get("/tasks", TaskService.getTasks);
TaskRouter.get("/tasks/:id", validateTaskQuery(), TaskService.getTask);
TaskRouter.put("/tasks/:id", ValidatepdateTaskBody(), TaskService.updateTask);
TaskRouter.delete("/tasks/:id", validateTaskQuery(), TaskService.deleteTask);

export default TaskRouter;
