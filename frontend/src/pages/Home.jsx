import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import NavBar from "../components/NavBar";
import Categories from "../components/Home/Categories";
import RandomRecipes from "../components/Home/RandomRecipes";

function Home({ handleClickCategory }) {
  const [dataRandom, setDataRandom] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&app_id=5f89fe95&app_key=6ad057a2b3ba66c9cd5aae24f720dcf1&mealType=snack&mealType=teaTime&mealType=dinner&mealType=breakfast&random=true"
      )
      .then((response) => setDataRandom(response.data.hits));
  }, []);
  return (
    <div>
      <NavBar />
      <div className="md:mx-14 mt-6 shadow-sm">
        <Categories handleClickCategory={handleClickCategory} />
        <RandomRecipes dataRandom={dataRandom} />
      </div>
    </div>
  );
}

export default Home;
