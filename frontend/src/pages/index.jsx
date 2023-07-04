import React from "react";
import Root from "./root";
import Home from "./home";
import Login from "./Login";
import SignUp from "./SignUp";
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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
];
export default Routes;
