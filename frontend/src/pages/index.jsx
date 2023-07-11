import React from "react";
import Root from "./root";
import Home from "./home";
import Login from "./Login";
import SignUp from "./SignUp";
import JobOffers from "./jobOffers";
import ErrorPage from "./errorPage";

import OfferSearch from "./offerSearch";
import DetailsOffer from "./detailsOffer";
import ApplyOffer from "./applyOffer";

import Companies from "./companies";
import CompaniesDetails from "./companyDetails";
import CandidateProfile from "./CandidateProfile";
import CompanyDashboard from "./CompanyDashboard";
import UserDashboard from "./Userdashboard";


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
        path: "/offerSearch",
        element: <OfferSearch />,
      },
      {
        path: "/detailsOffer",
        element: <DetailsOffer />,
      },
      {
        path: "/applyOffer",
        element: <ApplyOffer />,
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
      {
        path: "/companydashboard",
        element: <CompanyDashboard />,
      },
      {
        path: "/userDashboard",
        element: <UserDashboard />,
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
