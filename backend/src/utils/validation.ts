import { body, param } from "express-validator";

export const validateCreateTaskBody = () => {
  return [body("title").notEmpty(), body("description").notEmpty()];
};
export const validateTaskQuery = () => {
  return [param("id").notEmpty()];
};
export const ValidatepdateTaskBody = () => {
  return [
    param("id").notEmpty().withMessage("Task id is required"),
    body("title").optional().notEmpty().withMessage("Title cannot be empty"),
    body("description")
      .optional()
      .notEmpty()
      .withMessage("Description cannot be empty"),
    body("completed").optional().withMessage("Completed must be a boolean"),
  ];
};
