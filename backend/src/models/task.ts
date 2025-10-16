import { Schema, Types, connection, Document } from "mongoose";

export interface ITask extends Document {
  _id: Types.ObjectId;
  title: string;
  description: string;
  completed: boolean;
  completedAt?: Date | null;
  createdAt: Date;
}

const taskSchema = new Schema<ITask>({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
});

const db = connection.useDb(`${process.env.MONGO_DB_NAME}`);

export const TaskModel = db.model<ITask>("Task", taskSchema);
