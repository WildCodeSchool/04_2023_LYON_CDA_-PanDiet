import React from "react";

function ContainerFilterChoose({
  ingredientInput,
  addExcludedIngredient,
  queryExclued,
  removeExcludedIngredient,
}) {
  return (
    <div className="flex flex-col bg-white rounded-lg p-5 shadow-sm max-w-md mx-auto">
      <div className="flex flex-col mb-4">
        <input
          ref={ingredientInput}
          type="text"
          placeholder="Enter excluded ingredients"
          className="flex-grow mr-4 p-2 border rounded-md"
        />
        <button
          type="button"
          onClick={addExcludedIngredient}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Add
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
