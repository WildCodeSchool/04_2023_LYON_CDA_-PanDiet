import React from "react";
import ModalRecipeDetails from "../ModalRecipeDetail";

function CardRecipe({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="mb-5">
      <button className="md:max-w-[13vw]" type="button" onClick={handleOpen}>
        <img
          className="rounded-xl h-[24vh] w-[70vw] md:w-[13vw]"
          src={item.recipe.image}
          alt=""
        />
        <h4 className="pt-2 text-center ">{item.recipe.label}</h4>
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
