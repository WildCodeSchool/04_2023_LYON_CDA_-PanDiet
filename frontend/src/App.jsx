import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import { FilterContextProvider } from "./Context/FilterContext";
import Outlet from "./pages/Outlet";

const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: " ",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FilterContextProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/*" element={<Outlet />} />
        </Routes>
      </FilterContextProvider>
    </ThemeProvider>
  );
}

export default App;
