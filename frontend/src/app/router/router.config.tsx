import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../ui/Layout";
import { CreateTask } from "../../features/task/ui/create-task";
import { MainPage } from "../../pages/main-page";
import { UpdateTaskPage } from "../../pages/update-task-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/create",
        element: <CreateTask />,
      },
      {
        path: "update/:id",
        element: <UpdateTaskPage />,
      },
    ],
  },
]);
