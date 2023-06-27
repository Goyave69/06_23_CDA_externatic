import React from "react";
import Root from "./root";
import Home from "./home";
import JobOffers from "./jobOffers";
import ErrorPage from "./errorPage";

const Routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobOffers",
        element: <JobOffers />,
      },
    ],
  },
];
export default Routes;
