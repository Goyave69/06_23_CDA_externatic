import React from "react";
import Root from "./root";
import Home from "./home";
import Login from "./Login";
import SignUp from "./SignUp";
import JobOffers from "./jobOffers";
import ErrorPage from "./errorPage";
import Companies from "./companies";
import CompaniesDetails from "./companyDetails";
import CandidateProfile from "./CandidateProfile";

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
      {
        path: "/companyDetails",
        element: <CompaniesDetails />,
      },
      {
        path: "/candidateProfile",
        element: <CandidateProfile />,
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
