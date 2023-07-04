import React from "react";
import Root from "./root";
import Home from "./home";
import JobOffers from "./jobOffers";
import ErrorPage from "./errorPage";
import Companies from "./companies";

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
      {
        path: "/company",
        element: <Companies />,
      },
    ],
  },
];
export default Routes;
