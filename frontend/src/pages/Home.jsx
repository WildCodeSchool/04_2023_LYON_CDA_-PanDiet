/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import Categories from "../components/Categories";
import RandomRecipes from "../components/Home/RandomRecipes";
import useLocalStorage from "../components/UseLocalStorage";
import NutriDiet from "../components/NutriDiet";
import Header from "../components/Home/Header";
import CardRecipe from "../components/ChooseDiet/CardRecipe";
import NewCardRecipe from "../components/NewCardRecipe";

const { VITE_APP_ID, VITE_APP_KEY } = import.meta.env;

function Home({ handleClickCategory, namePage, recipes }) {
  const [filterSearch, setFilterSearch] = useState("");
  const [showCategoryAndRandom, setShowCategoryAndRandom] = useState(true);
  const [dataFoodSearch, setDataFoodSearch] = useState([]);

  const [dataRandom, setDataRandom] = useLocalStorage("randomFood", []);
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${VITE_APP_ID}&app_key=${VITE_APP_KEY}&mealType=snack&mealType=teaTime&mealType=dinner&mealType=breakfast&random=true`
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

  const axiosData = () => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${VITE_APP_ID}&app_key=${VITE_APP_KEY}&q=${filterSearch}`
      )
      .then((response) => setDataFoodSearch(response.data.hits));
    setShowCategoryAndRandom(!showCategoryAndRandom);
  };
  return (
    <div>
      <NutriDiet namePage={namePage} />
      <Header setFilterSearch={setFilterSearch} axiosData={axiosData} />
      <div className="px-3 md:px-10">
        {showCategoryAndRandom ? (
          <div>
            <Categories handleClickCategory={handleClickCategory} />
            <RandomRecipes
              handleRandom={handleRandom}
              dataRandom={dataRandom}
            />
          </div>
        ) : (
          <div>
            {dataFoodSearch.map((item) => (
              <div key={item.name}>
                <CardRecipe item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
      {recipes.map((item, index) => (
        <div key={index}>
          <NewCardRecipe item={item} />
        </div>
      ))}
    </div>
  );
}

export default Home;
