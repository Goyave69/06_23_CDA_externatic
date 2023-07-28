import React from "react";
import Root from "./root";
import Home from "./Home";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import JobOffers from "./jobOffers";
import ErrorPage from "./errorPage";
import OfferSearch from "./offerSearch";
import DetailsOffer from "./detailsOffer";
import ApplyOffer from "./ApplyOffer";
import Pageoffer from "./Pageoffer";
import Companies from "./companies";
import CompaniesDetails from "./companyDetails";
import CandidateProfile from "./UserProfile/CandidateProfile";
import HeadhunterProfile from "./UserProfile/HeadhunterProfile";
import CompanyDashboard from "./CompanyDashboard";
import UserDashboard from "./Userdashboard";
import OffersDashboard from "./OffersDashboard";

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
      { path: "/Pageoffer", element: <Pageoffer /> },
      {
        path: "/applyOffer",
        element: <ApplyOffer />,
      },
      {
        path: "/company",
        element: <Companies />,
      },
      {
        path: "/companyDetails/:id",
        element: <CompaniesDetails />,
      },
      {
        path: "/candidateProfile",
        element: <CandidateProfile />,
      },
      {
        path: "/headhunterProfile",
        element: <HeadhunterProfile />,
      },
      {
        path: "/companydashboard",
        element: <CompanyDashboard />,
      },
      {
        path: "/userDashboard",
        element: <UserDashboard />,
      },
      {
        path: "/offersDashboard",
        element: <OffersDashboard />,
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
