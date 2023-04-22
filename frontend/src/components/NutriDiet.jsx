import React from "react";

function NutriDiet({ namePage }) {
  return (
    <div>
      <div className="bg-green-500 rounded-br-full mb-3 rounded-bl-full">
        <h2 className="font-bold text-white text-2xl text-center py-4">
          {namePage}
        </h2>
      </div>
    </div>
  );
}

export default NutriDiet;
