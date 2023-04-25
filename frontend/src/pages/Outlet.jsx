import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import ChooseDiet from "./ChooseDiet";
import Fridge from "./Fridge";
import Favourites from "./Favourites";
import Home from "./Home";
import Team from "./Team";
import NavBar from "../components/NavBar";
import Category from "./Category";
import useLocalStorage from "../components/UseLocalStorage";
import ModalePostRecipe from "../components/ModalePostRecipe";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Outlet() {
  const [recipes, setRecipes] = useState([]);

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
    <div>
      <NavBar
        handleClickNavigate={handleClickNavigate}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setNamePage={setNamePage}
      />
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              recipes={recipes}
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
      </Routes>{" "}
      <Button onClick={handleOpen}>Open modal</Button>
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
          <Box sx={style}>
            <ModalePostRecipe
              recipes={recipes}
              setRecipes={setRecipes}
              setOpen={setOpen}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Outlet;
