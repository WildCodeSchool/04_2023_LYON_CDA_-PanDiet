import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Fade, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { useNavigate } from "react-router-dom";
import ModalePostRecipe from "../components/MyRecipes/ModalePostRecipe";
import CardMyRecipe from "../components/MyRecipes/CardMyRecipe";
import HeaderChoose from "../components/Home/HeaderChoose";
import { useCurrentUserContext } from "../Context/userContext";

function MyRecipes() {
  const { token } = useCurrentUserContext();
  const navigate = useNavigate();
  const [reaload, setReload] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openRecipeCard, setOpenRecipeCard] = React.useState(false);
  const handleOpenRecipeCard = () => setOpenRecipeCard(true);
  const handleCloseRecipeCard = () => setOpenRecipeCard(false);
  const [dataMyRecipes, setDataMyRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/my-recipes")
      .then((response) => setDataMyRecipes(response.data));
  }, [reaload]);

  const handleDelete = (id, name) => {
    axios.delete(`http://localhost:5000/api/my-recipes/${id}`).then(() => {
      toast.success(`Recipe ${name} deleted ✅`);
      handleCloseRecipeCard(!openRecipeCard);
      setReload(!reaload);
    });
  };

  return (
    <div className=" mx-10 md:mx-20 ">
      <HeaderChoose />
      <div className=" w-full mt-4 mb-10">
        {token ? (
          <>
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
              {dataMyRecipes.map((recipe) => (
                <div className="mb-5 flex justify-center md:justify-between ">
                  <CardMyRecipe
                    openRecipeCard={openRecipeCard}
                    handleCloseRecipeCard={handleCloseRecipeCard}
                    handleOpenRecipeCard={handleOpenRecipeCard}
                    recipe={recipe}
                    handleDelete={handleDelete}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-xl">
              You must be logged in to view your recipes.
            </p>
            <button
              type="button"
              className="bg-[#FF9A62] text-white px-4 py-2 rounded-md mt-4"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        )}
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
