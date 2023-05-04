import React, { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { FilterContextProvider } from "./Context/FilterContext";
import { DarkModeContext } from "./Context/DarkModeContext";
import NavigateWebSite from "./pages/NavigateWebSite";

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
        <div className={`${darkMode ? "dark" : "light"}`}>
          <NavigateWebSite />
        </div>
        <ToastContainer />
      </FilterContextProvider>
    </ThemeProvider>
  );
}

export default App;
