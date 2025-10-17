export interface CreateTaskRequest {
  title: string;
  description: string;
}

export interface UpdateTaskRequest {
  id: string;
  title?: string;
  description?: string;
  completed?: boolean;
}
