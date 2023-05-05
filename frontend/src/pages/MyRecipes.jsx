import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Box, Fade, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import iconAdd from "../assets/iconAdd.png";
import ModalePostRecipe from "../components/MyRecipes/ModalePostRecipe";
import CardMyRecipe from "../components/MyRecipes/CardMyRecipe";
import HeaderChoose from "../components/ChooseDiet/HeaderChoose";

function MyRecipes() {
  const [reaload, setReload] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dataMyRecipes, setDetaMyRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/my-recipes")
      .then((response) => setDetaMyRecipes(response.data));
  }, [reaload]);

  return (
    <div>
      <HeaderChoose />
      <div className=" w-full mt-4 mb-10">
        <div className="w-1/5 font-bold mb-3 text-2xl">
          <h2>My Recipes</h2>
        </div>
        <div className="grid grid-cols-3 ">
          {dataMyRecipes.reverse().map((recipe) => (
            <div className="mb-5">
              <CardMyRecipe recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
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
              handleClose={handleClose}
              setReload={setReload}
            />
          </Box>
        </Fade>
      </Modal>
      <button onClick={handleOpen} type="button">
        <img src={iconAdd} alt="" />
      </button>
    </div>
  );
}

export default MyRecipes;
