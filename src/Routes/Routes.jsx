import React from "react";
import { createBrowserRouter } from "react-router";

import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
]);