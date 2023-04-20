import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import WelcomePage from "./pages/WelcomePage";
import ChooseDiet from "./pages/ChooseDiet";
import Fridge from "./pages/Fridge";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import Team from "./pages/Team";
import { FilterContextProvider } from "./Context/FilterContext";
import Category from "./pages/Category";
import useLocalStorage from "./components/UseLocalStorage";

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
  const navigate = useNavigate();
  const [categorySelected, setCategorySelected] = useLocalStorage(
    "categorySelected",
    ""
  );

  const handleClickCategory = (valueName) => {
    setCategorySelected(valueName);
    navigate("/category");
  };

  return (
    <ThemeProvider theme={theme}>
      <FilterContextProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/home"
            element={<Home handleClickCategory={handleClickCategory} />}
          />
          <Route path="/choose-your-diet" element={<ChooseDiet />} />
          <Route path="/my-fridge" element={<Fridge />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/the-team" element={<Team />} />
          <Route
            path="/category"
            element={<Category categorySelected={categorySelected} />}
          />
        </Routes>
      </FilterContextProvider>
    </ThemeProvider>
  );
}

export default App;
