import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Vaccine from "../pages/Vaccine/Vaccine";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "vaccine",
        element: <Vaccine />,
      },
    ],
  },
]);
