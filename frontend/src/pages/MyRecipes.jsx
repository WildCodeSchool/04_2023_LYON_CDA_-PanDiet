import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import CardMyRecipe from "../components/MyRecipes/CardMyRecipe";

function MyRecipes({ reaload }) {
  const [dataMyRecipes, setDetaMyRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/my-recipes")
      .then((response) => setDetaMyRecipes(response.data));
  }, [reaload]);

  return (
    <div className="px-40">
      <h2 className="inline-block bg-customGreen rounded-[10rem] text-white py-2 px-4 mb-6 text-xl shadow-sm my-4">
        My Recipes
      </h2>
      <div className="grid grid-cols-3 ">
        {dataMyRecipes.reverse().map((recipe) => (
          <div className="mb-5">
            <CardMyRecipe recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyRecipes;
