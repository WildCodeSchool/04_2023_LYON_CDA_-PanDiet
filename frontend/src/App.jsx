import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { FilterContextProvider } from "./Context/FilterContext";
import Home from "./pages/Home";
import MyRecipes from "./pages/MyRecipes";
import Favourites from "./pages/Favourites";
import { DarkModeContext } from "./Context/DarkModeContext";

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
        <Router>
          <div className={`${darkMode ? "dark" : "light"}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-Recipes" element={<MyRecipes />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
          </div>
          <ToastContainer />
        </Router>
      </FilterContextProvider>
    </ThemeProvider>
  );
}

export default App;
