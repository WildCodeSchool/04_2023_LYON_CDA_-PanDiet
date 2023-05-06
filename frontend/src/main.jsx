/* eslint-disable import/no-cycle */
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routes from "./index";
import { DarkModeProvider } from "./Context/DarkModeContext";
import { CurrentUserContextProvider } from "./Context/userContext";

const router = createBrowserRouter(Routes);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <DarkModeProvider>
      <CurrentUserContextProvider>
        <RouterProvider router={router} />
      </CurrentUserContextProvider>
    </DarkModeProvider>
  </StrictMode>
);
