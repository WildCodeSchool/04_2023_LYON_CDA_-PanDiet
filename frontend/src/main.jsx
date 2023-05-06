import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeProvider } from "./Context/DarkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>
);
