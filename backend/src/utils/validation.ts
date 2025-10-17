import { body, param } from "express-validator";

export const validateCreateTaskBody = () => {
  return [body("title").notEmpty(), body("description").notEmpty()];
};
export const validateTaskQuery = () => {
  return [param("id").notEmpty()];
};

export const ValidatepdateTaskBody = () => {
  return [
    param("id").notEmpty(),
    body("title").optional().notEmpty(),
    body("description").optional().notEmpty(),
    body("completed").optional(),
  ];
};
