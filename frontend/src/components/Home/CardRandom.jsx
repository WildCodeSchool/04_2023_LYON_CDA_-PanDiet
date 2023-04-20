import React from "react";

function CardRandom({ item }) {
  return (
    <div>
      <div className=" min-w-[250px] max-h-[200px] inline-block mt-6 mx-3 shadow-lg border border-black rounded-2xl">
        <img className=" rounded-2xl" src={item.recipe.image} alt="" />
        <h3 className="font-bold border border-b-black py-2 pl-2">
          {`${item.recipe.label.substring(0, 22)}...`}
        </h3>
        <p className="text-center py-2">See the Recipe</p>
      </div>
    </div>
  );
}

export default CardRandom;
