import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChooseDiet from "./ChooseDiet";
import Fridge from "./Fridge";
import Favourites from "./Favourites";
import Home from "./Home";
import Team from "./Team";
import NavBar from "../components/NavBar";
import Category from "./Category";
import useLocalStorage from "../components/UseLocalStorage";

function Outlet() {
  const navigate = useNavigate();
  const [categorySelected, setCategorySelected] = useLocalStorage(
    "categorySelected",
    ""
  );

  const handleClickCategory = (valueName) => {
    setCategorySelected(valueName);
    navigate("/category");
  };
  const [namePage, setNamePage] = useLocalStorage("NamePage", "Home");
  return (
    <div>
      <NavBar setNamePage={setNamePage} />
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              namePage={namePage}
              handleClickCategory={handleClickCategory}
            />
          }
        />
        <Route
          path="/choose-your-diet"
          element={<ChooseDiet namePage={namePage} />}
        />
        <Route path="/my-fridge" element={<Fridge />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/the-team" element={<Team />} />
        <Route
          path="/category"
          element={<Category categorySelected={categorySelected} />}
        />
      </Routes>
    </div>
  );
}

export default Outlet;
