import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import InputForm from "../Components/InputForm";
import Root from "../Components/Root";
import UpdateForm from "../Components/UpdateForm";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-task",
        element: <InputForm />,
      },
      {
        path: "/edit-data",
        element: <UpdateForm />,
      },
    ],
  },
]);
