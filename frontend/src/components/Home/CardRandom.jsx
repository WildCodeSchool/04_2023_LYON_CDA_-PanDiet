import React from "react";

function CardRandom({ item }) {
  return (
    <div>
      <div className=" min-w-[150px] max-h-[100px] inline-block mt-3 mr-3 shadow-lg border border-black rounded-2xl">
        <img className=" rounded-2xl" src={item.recipe.image} alt="" />
      </div>
    </div>
  );
}

export default CardRandom;
