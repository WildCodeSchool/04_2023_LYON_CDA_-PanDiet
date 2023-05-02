import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChooseDiet from "./ChooseDiet";
import Fridge from "./Fridge";
import Favourites from "./Favourites";
import Home from "./Home";
import Team from "./Team";
import NavBar from "../components/NavBar";
import Category from "./Category";
import useLocalStorage from "../components/useLocalStorage";
import Planning from "./Planning";
import LoginPage from "./LoginPage";

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
  const [activeLink, setActiveLink] = useState("");
  const [namePage, setNamePage] = useState("Home");

  const handleClickNavigate = (valueName, valueLink) => {
    setNamePage(valueName);
    setActiveLink(valueLink);
  };
  return (
    <div>
      <NavBar
        handleClickNavigate={handleClickNavigate}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setNamePage={setNamePage}
      />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
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
        <Route
          path="/favourites"
          element={<Favourites namePage={namePage} />}
        />
        <Route path="/the-team" element={<Team />} />
        <Route
          path="/category"
          element={<Category categorySelected={categorySelected} />}
        />
        <Route path="my-planning" element={<Planning />} />
      </Routes>
    </div>
  );
}

export default Outlet;
