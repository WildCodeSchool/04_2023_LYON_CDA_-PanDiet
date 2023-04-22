import React, { useEffect } from "react";
import "../App.css";
import axios from "axios";
import Categories from "../components/Home/Categories";
import RandomRecipes from "../components/Home/RandomRecipes";
import useLocalStorage from "../components/UseLocalStorage";
import Search from "../components/Search";
import NutriDiet from "../components/NutriDiet";

function Home({ handleClickCategory, namePage }) {
  const [dataRandom, setDataRandom] = useLocalStorage("randomFood", []);
  useEffect(() => {
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&app_id=5f89fe95&app_key=6ad057a2b3ba66c9cd5aae24f720dcf1&mealType=snack&mealType=teaTime&mealType=dinner&mealType=breakfast&random=true"
      )
      .then((response) => setDataRandom(response.data.hits));
  }, []);

  const handleRandom = () => {
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&app_id=5f89fe95&app_key=6ad057a2b3ba66c9cd5aae24f720dcf1&mealType=snack&mealType=teaTime&mealType=dinner&mealType=breakfast&random=true"
      )
      .then((response) => setDataRandom(response.data.hits));
  };
  return (
    <div>
      <NutriDiet namePage={namePage} />
      <div className="px-6">
        <h3>
          Hello, <br />{" "}
          <span className="text-xl font-bold">
            What would you like <br />
            to cook today ?
          </span>
        </h3>
        <Search />
        <div className="md:mx-14 shadow-sm">
          <Categories handleClickCategory={handleClickCategory} />
          <RandomRecipes handleRandom={handleRandom} dataRandom={dataRandom} />
        </div>
      </div>
    </div>
  );
}

export default Home;
