import { Response } from "express";

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
export const handlerError = (err: unknown, res: Response) => {
  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message });
  } else if (err instanceof Error) {
    res.status(500).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Unknown error" });
  }
};
