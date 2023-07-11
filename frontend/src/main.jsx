import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import TokenProvider from "./context/TokenContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TokenProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </TokenProvider>
  </React.StrictMode>
);
