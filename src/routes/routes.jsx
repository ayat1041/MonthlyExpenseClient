import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Main from "../components/layout/Main";
import Plans from "../components/pages/Home/Plans/Plans";
import Tracker from "../components/pages/Tracker/Tracker";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/monthly-plan",
        element: <Plans></Plans>
      },
      {
        path: "/tracker",
        element: <Tracker></Tracker>
      },
    ]
  },
]);
