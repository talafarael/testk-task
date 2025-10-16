export interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  completedAt?: Date | null;
  createdAt: Date;
}
