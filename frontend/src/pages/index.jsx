import React from "react";
import Root from "./root";
import Home from "./home";
import Login from "./Login";
import SignUp from "./SignUp";
import JobOffers from "./jobOffers";
import ErrorPage from "./errorPage";
import OfferSearch from "./offerSearch";
import DetailsOffer from "./detailsOffer";

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
