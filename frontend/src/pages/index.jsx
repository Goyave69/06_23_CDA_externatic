import React from "react";
import Root from "./root";
import Home from "./home";
import ErrorPage from "./errorPage";

const Routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
    ],
  },
];
export default Routes;
