import React from "react";
import ModalRecipeDetails from "../ModalRecipeDetail";

function CardRandom({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        <div className=" min-w-[150px] max-h-[100px] inline-block mt-3 mr-3 shadow-lg border border-black rounded-2xl">
          <img className=" rounded-2xl" src={item.recipe.image} alt="" />
        </div>
      </button>
      <ModalRecipeDetails
        handleOpen={handleOpen}
        recipe={item.recipe}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}

export default CardRandom;
