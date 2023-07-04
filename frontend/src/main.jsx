import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./pages";
import TokenProvider from "./context/TokenContext";

const router = createBrowserRouter(Routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </TokenProvider>
  </React.StrictMode>
);
