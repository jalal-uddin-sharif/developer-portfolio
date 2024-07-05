import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      children: [
        {
            path: "/",
            element: <Home/>
        }
      ]
    },
  ]);