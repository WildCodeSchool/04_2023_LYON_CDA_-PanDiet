import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import RecipePDFGenerator from "./RecipePDFGenerator";

const { VITE_BACKEND_URL } = import.meta.env;

function ModalMyRecipeDetails({ recipe, open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          class="absolute top-1/2 left-1/2 w-[90vw] transform -translate-x-1/2
           -translate-y-1/2 h-[90vh] md:w-[80vw] md:h-[90vh]
          bg-white border-2 md:rounded-md  shadow-md block md:flex"
        >
          <img
            className=" w-full md:w-[40vw] md:mx-auto md:h-[60vh] my-auto rounded-lg shadow-md"
            src={`${VITE_BACKEND_URL}/uploads/${recipe.image}`}
            alt=""
          />
          <div className="md:flex md:w-2/5 flex-col border-l border-black">
            <div className="flex">
              <h3 className="text-xl w-full text-bold md:text-3xl py-4 text-center">
                {recipe.name}
              </h3>
              <RecipePDFGenerator recipe={recipe} />
            </div>

            <div className="flex p-2 justify-around md:py-5 border-y border-black">
              <p className="border-r border-black pr-10">
                🍴 {recipe.mealType}
              </p>
              <p className="border-r border-black pr-10">
                🌎 {recipe.cuisineType}
              </p>
              <p>🕝 {recipe.cook_time}</p>
            </div>

            <h3 className="w-full text-2xl pb-4 text-center">Ingredients</h3>
            <hr className=" pb-2 w-1/2 mx-auto" />
            <ul className="h-32 px-10  md:h-auto overflow-auto">
              {recipe.ingredients.map((item) => (
                <div key={item.id}>
                  <p>{item}</p>
                </div>
              ))}
            </ul>
            <h3 className="w-full text-2xl pb-4 text-center">Instructions</h3>
            <div className="px-10 overflow-auto">
              <p>{recipe.instructions}</p>
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 mx-4 rounded"
              type="button"
              onClick={() => console.warn("coucou")}
            >
              Supprimer
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalMyRecipeDetails;
