import React from "react";
import ModalRecipeDetails from "../ModalRecipeDetail";

function CardRecipe({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="mb-5">
      <button className="w-[25vw]" type="button" onClick={handleOpen}>
        <img
          className="h-[15vh] md:w-[12vw] rounded-xl"
          src={item.recipe.image}
          alt=""
        />
        <h4 className="pt-2 max-w-[30vw] md:max-w-[13vw] ">
          {item.recipe.label}
        </h4>
      </button>
      <ModalRecipeDetails
        handleOpen={handleOpen}
        item={item.recipe}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}

export default CardRecipe;
