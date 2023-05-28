/* eslint-disable comma-dangle */
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import "./index.css";
import AuthProviders from "./providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>
);
