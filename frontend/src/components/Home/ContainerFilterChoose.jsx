import React, { useContext } from "react";
import PlusButton from "../../assets/home/plus-3.png";
import { DarkModeContext } from "../../Context/DarkModeContext";

function ContainerFilterChoose({
  ingredientInput,
  addExcludedIngredient,
  queryExclued,
  removeExcludedIngredient,
}) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="hidden md:flex flex-col bg-white rounded-lg  max-w-md mx-auto">
      <div
        className={`${
          darkMode ? "flex items-center dark" : "flex items-center light"
        }`}
      >
        <input
          ref={ingredientInput}
          type="text"
          placeholder="Excluded"
          className="w-1/2 py-1 px-2 mr-1 border rounded-md"
        />
        <button type="button" onClick={addExcludedIngredient}>
          <img className="h-9 hover:color-orange-500" src={PlusButton} alt="" />
        </button>
      </div>
      <div className="flex flex-wrap">
        {queryExclued.map((ingredient) => (
          <div
            key={ingredient.id}
            className="flex items-center bg-gray-200 text-gray-700 rounded-full p-2 mr-2 mb-2"
          >
            <span>{ingredient}</span>
            <button
              type="button"
              onClick={() => removeExcludedIngredient(ingredient)}
              className="ml-2 text-gray-500 hover:text-gray-600"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContainerFilterChoose;
