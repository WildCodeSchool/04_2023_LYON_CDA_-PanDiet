import React from "react";

function NutriDiet({ namePage }) {
  return (
    <div className="md:hidden">
      <div className=" bg-customGreen md:bg-green-800 rounded-br-full mb-3 rounded-bl-full md:rounded-none md:mb-0 ">
        <h2 className="font-bold text-white text-2xl text-center py-4">
          {namePage}
        </h2>
      </div>
    </div>
  );
}

export default NutriDiet;
