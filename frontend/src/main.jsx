/* eslint-disable import/no-cycle */
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routes from "./index";
import { DarkModeProvider } from "./Context/DarkModeContext";

const router = createBrowserRouter(Routes);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </StrictMode>
);
