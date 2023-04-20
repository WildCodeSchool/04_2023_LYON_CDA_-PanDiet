import React from "react";

import CardRandom from "./CardRandom";

function RandomRecipes({ dataRandom }) {
  return (
    <div>
      <h2 className="py-5 pl-3 font-bold text-xl shadow-sm">Random Food</h2>
      <div className="flex overflow-scroll md:overflow-y-hidden">
        {dataRandom.map((item) => (
          <CardRandom item={item} />
        ))}
      </div>
    </div>
  );
}

export default RandomRecipes;
