import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function ModalRecipeDetails({ recipe, open, handleClose }) {
  let enercKcal = recipe.totalNutrients.ENERC_KCAL.quantity.toString();
  if (enercKcal.length > 6) {
    enercKcal = enercKcal.substring(0, 6);
  }
  let fat = recipe.totalNutrients.FAT.quantity.toString();
  if (fat.length > 6) {
    fat = fat.substring(0, 6);
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box class="absolute top-1/2 left-1/2 w-[90vw] transform -translate-x-1/2 -translate-y-1/2 md:w-[1000px] md:h-[500px] bg-white border-2  shadow-md block md:flex">
          <img className="md:h-[496px]" src={recipe.image} alt="" />
          <div className="md:flex mx-auto p-10 flex-col">
            <h3 className="text-xl w-full md:text-3xl pb-4 text-center">
              {recipe.label}
            </h3>
            <hr />
            <div className="flex py-2 justify-around md:py-5">
              <p>{recipe.mealType}</p>
              <p>{recipe.cuisineType}</p>
              <p>{recipe.dishType}</p>
            </div>
            <hr />
            <div className="flex py-2 justify-around md:py-5">
              <div className="flex items-center">
                <p className="text-2xl">{enercKcal}</p>
                <p className="font-bold pl-2 text-center">
                  {recipe.totalNutrients.ENERC_KCAL.unit}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-2xl">{fat}</p>
                <p className="font-bold pl-2 text-center">
                  {recipe.totalNutrients.FAT.unit}
                </p>
              </div>
            </div>
            <h3 className="w-full text-2xl pb-4 text-center">Ingredients</h3>
            <hr className=" pb-2 w-1/2 mx-auto" />
            <ul className=" overflow-auto">
              {recipe.ingredients.map((item) => (
                <li className="flex my-1 ">
                  <img
                    className="h-6 rounded-md mr-2"
                    src={item.image}
                    alt=""
                  />
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            <hr className="w-1/2 pb-2 mx-auto" />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalRecipeDetails;
