import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import Categories from "../components/Home/Categories";
import RandomRecipes from "../components/Home/RandomRecipes";
import useLocalStorage from "../components/UseLocalStorage";
import Search from "../components/Search";
import NutriDiet from "../components/NutriDiet";
import arrowDown from "../assets/arrowDown.png";

const { VITE_API_ID, VITE_API_KEY } = import.meta.env;

function Home({ handleClickCategory, namePage }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [userSearch, setUserSearch] = useState([]);
  const [dataRandom, setDataRandom] = useLocalStorage("randomFood", []);
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${VITE_API_ID}&app_key=${VITE_API_KEY}&mealType=snack&mealType=teaTime&mealType=dinner&mealType=breakfast&random=true`
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

  const searchFood = () => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${VITE_API_ID}&app_key=${VITE_API_KEY}&q=${searchQuery}`
      )
      .then((response) => setUserSearch(response.data.hits));
  };
  return (
    <div>
      <NutriDiet namePage={namePage} />
      <div className="md:h-[93vh] md:bg-black opacity-90 md:bg-homePage  md:bg-cover md:mb-3">
        <div className="my-auto md:h-full md:flex md:flex-col">
          <h2 className="md:text-center md:text-white md:m-auto md:p-10 md:bg-black md:w-max md:bg-opacity-70 md:inline-block">
            Hello, <br />{" "}
            <span className="text-2xl font-bold">
              What would you like <br />
              to cook today ?
            </span>
            <Search setSearchQuery={setSearchQuery} searchFood={searchFood} />
          </h2>
          <div className="hidden md:block md:mx-auto md:pb-1 bounce">
            <img className=" md:block md:w-32" src={arrowDown} alt="" />
          </div>
        </div>
      </div>
      <div className="shadow-sm">
        <Categories handleClickCategory={handleClickCategory} />
        <RandomRecipes handleRandom={handleRandom} dataRandom={dataRandom} />
        {userSearch.length > 0 && (
          <div className="flex flex-col items-center">
            <h2 className="inline-block bg-customGreen rounded-[10rem] text-white py-2 px-4  text-xl shadow-sm">
              Search
            </h2>
            <div className="flex overflow-scroll min-h-[165px] md:overflow-y-hidden">
              {userSearch.map((item) => (
                <div className="flex flex-col items-center">
                  <img
                    className="w-32 h-32 rounded-full"
                    src={item.recipe.image}
                    alt=""
                  />
                  <h3 className="text-center">{item.recipe.label}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
