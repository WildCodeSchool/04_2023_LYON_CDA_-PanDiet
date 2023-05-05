import React, { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "./App.css";
import { FilterContextProvider } from "./Context/FilterContext";
import { DarkModeContext } from "./Context/DarkModeContext";
import NavBar from "./components/NavBar";

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
  const { darkMode } = useContext(DarkModeContext);
  return (
    <ThemeProvider theme={theme}>
      <FilterContextProvider>
        <NavBar />
        <main className={`${darkMode ? "dark" : "light"}`}>
          <Outlet />
        </main>
        <ToastContainer />
      </FilterContextProvider>
    </ThemeProvider>
  );
}

export default App;
