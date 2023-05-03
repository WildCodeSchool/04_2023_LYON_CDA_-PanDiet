import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { FilterContextProvider } from "./Context/FilterContext";
import Home from "./pages/Home";
import MyRecipes from "./pages/MyRecipes";
import Favourites from "./pages/Favourites";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

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
        <BrowserRouter>
          <div className="md:px-20">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-Recipes" element={<MyRecipes />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
          </div>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </FilterContextProvider>
    </ThemeProvider>
  );
}

export default App;
