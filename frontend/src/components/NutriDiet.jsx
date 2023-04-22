import React from "react";

function NutriDiet({ namePage }) {
  return (
    <div>
      <div className=" bg-customGreen rounded-br-full mb-3 rounded-bl-full md:rounded-none md:mb-0 ">
        <h2 className="font-bold text-white text-2xl text-center py-4">
          {namePage}
        </h2>
      </div>
    </div>
  );
}

export default NutriDiet;
