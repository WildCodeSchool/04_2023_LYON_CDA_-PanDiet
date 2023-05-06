import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Profil from "./pages/Profile";
import LoginPage from "./pages/LoginPage";
import { FilterContextProvider } from "./Context/FilterContext";
import { CurrentUserContextProvider } from "./Context/userContext";
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
      <CurrentUserContextProvider>
        <FilterContextProvider>
          <Router>
            <div className={`${darkMode ? "dark" : "light"}`}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/my-Recipes" element={<MyRecipes />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/my-profile" element={<Profil />} />
              </Routes>
            </div>
            <ToastContainer />
          </Router>
        </FilterContextProvider>
      </CurrentUserContextProvider>
    </ThemeProvider>
  );
}

export default App;
