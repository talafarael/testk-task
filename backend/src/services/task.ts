import { Request, Response } from "express";
import { ICreateTask } from "../dto/task";
import { TaskModel } from "../models/task";
import { ApiError, handlerError } from "../utils/error";

class TaskService {
  async createTask(req: Request, res: Response) {
    try {
      const body: ICreateTask = req.body;
      const newTask = new TaskModel({
        title: body.title,
        description: body.description,
      });
      const savedTask = await newTask.save();
      res.status(201).json({
        data: savedTask,
      });
    } catch (err: unknown) {
      return handlerError(err, res);
    }
  }
  async getTasks(_: Request, res: Response) {
    try {
      const tasks = await TaskModel.find();
      res.status(200).json({ data: tasks });
    } catch (err: unknown) {
      return handlerError(err, res);
    }
  }
  async getTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const task = await TaskModel.findById(id);
      if (!task) {
        throw new ApiError(404, "Task not found");
      }
      res.status(200).json({ data: task });
    } catch (err: unknown) {
      console.error("get-task" + err);
      return handlerError(err, res);
    }
  }
  async updateTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updateData = { ...req.body };
      if (updateData.completed !== undefined) {
        // i think we can  take out "completed"  into a separate request
        updateData.completedAt = updateData.completed ? new Date() : null;
      }

      const updatedTask = await TaskModel.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
      });
      if (!updatedTask) {
        throw new ApiError(404, "Task not found");
      }

      res.status(200).json({ data: updatedTask });
    } catch (err: unknown) {
      console.error("update-task" + err);
      return handlerError(err, res);
    }
  }
  async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedTask = await TaskModel.findByIdAndDelete(id);

      if (!deletedTask) {
        throw new ApiError(404, "Task not found");
      }

      res
        .status(200)
        .json({ message: "Task deleted successfully", data: deletedTask });
    } catch (err) {
      console.error("delete-task" + err);
      return handlerError(err, res);
    }
  }
}

export default new TaskService();
