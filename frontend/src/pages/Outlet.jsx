import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import ChooseDiet from "./ChooseDiet";
import Favourites from "./Favourites";
import Home from "./Home";
import Team from "./Team";
import NavBar from "../components/NavBar";
import Category from "./Category";
import useLocalStorage from "../components/UseLocalStorage";
import ModalePostRecipe from "../components/ModalePostRecipe";
import iconAdd from "../assets/iconAdd.png";
import MyRecipes from "./MyRecipes";

function Outlet() {
  const [recipes, setRecipes] = useState([]);
  const [reaload, setReload] = useState(true);
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="md:px-20">
      <NavBar
        handleClickNavigate={handleClickNavigate}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setNamePage={setNamePage}
        handleOpen={handleOpen}
      />
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
        <Route path="/my-fridge" element={<MyRecipes reaload={reaload} />} />
        <Route
          path="/favourites"
          element={<Favourites namePage={namePage} />}
        />
        <Route path="/the-team" element={<Team />} />
        <Route
          path="/category"
          element={<Category categorySelected={categorySelected} />}
        />
      </Routes>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box>
            <ModalePostRecipe
              reaload={reaload}
              recipes={recipes}
              handleClose={handleClose}
              setRecipes={setRecipes}
              setOpen={setOpen}
              setReload={setReload}
            />
          </Box>
        </Fade>
      </Modal>
      <button
        onClick={handleOpen}
        type="button"
        className="fixed right-10 bottom-10  h-20 w-20 bg-white rounded-full "
      >
        <img src={iconAdd} alt="" />
      </button>
    </div>
  );
}

export default Outlet;
