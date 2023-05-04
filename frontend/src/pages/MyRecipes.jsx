import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Box, Fade, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import NavBar from "../components/NavBar";
import ModalePostRecipe from "../components/MyRecipes/ModalePostRecipe";
import CardMyRecipe from "../components/MyRecipes/CardMyRecipe";
import HeaderChoose from "../components/Home/HeaderChoose";

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
    <div className=" mx-10 md:mx-20 ">
      <NavBar />
      <HeaderChoose />
      <div className=" w-full mt-4 mb-10">
        <div className=" flex justify-between  w-full mb-3">
          <h2 className="font-bold text-2xl">My Recipes</h2>
          <button
            className="border border-black p-1 md:ml-3 rounded-md "
            onClick={handleOpen}
            type="button"
          >
            <p className="text-[#FF9A62]">Add a new Recipe</p>
          </button>
        </div>
        <div className=" flex flex-col  md:grid md:grid-cols-3 ">
          {dataMyRecipes.reverse().map((recipe) => (
            <div className="mb-5 flex justify-center md:justify-between ">
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
    </div>
  );
}

export default MyRecipes;
