import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { Layout } from "../ui/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);
