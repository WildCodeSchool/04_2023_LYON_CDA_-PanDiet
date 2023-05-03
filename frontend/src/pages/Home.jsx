import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import ContainerFilterChoose from "../components/ChooseDiet/ContainerFilterChoose";
import Buttons from "../components/ChooseDiet/Buttons";
import CardRecipe from "../components/ChooseDiet/CardRecipe";
import DialogFilters from "../components/DialogFilters";
import { FilterContext } from "../Context/FilterContext";
import HeaderChoose from "../components/ChooseDiet/HeaderChoose";
import NutriDiet from "../components/NutriDiet";
import BodyChoose from "../components/ChooseDiet/BodyChoose";

const apiId = import.meta.env.VITE_API_ID;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [selectedLabels, setSelectedLabels] = useState(new Set());
  const [queryText, setQueryText] = useState("");
  const [queryExclued, setQueryExclued] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { healthLabels, mealTypes, dishTypes, cuisinesTypes, dietTypes } =
    useContext(FilterContext);

  const [dataRandom, setDataRandom] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${apiId}&app_key=${apiKey}&mealType=snack&mealType=teaTime&mealType=dinner&mealType=breakfast&random=true`
      )
      .then((response) => setDataRandom(response.data.hits));
  }, []);

  const handleSelectedLabelsChange = (updatedSelectedLabels) => {
    setSelectedLabels(updatedSelectedLabels);
  };

  const handleQueryTextChange = (event) => {
    setQueryText(event.target.value);
  };

  const ingredientInput = useRef(null);
  const addExcludedIngredient = () => {
    // la fonction trim() permet de supprimer les espaces en début et fin de chaîne de caractères
    const newIngredient = ingredientInput.current.value.trim();
    if (newIngredient !== "" && !queryExclued.includes(newIngredient)) {
      setQueryExclued([...queryExclued, newIngredient]);
    }
    ingredientInput.current.value = "";
  };
  const removeExcludedIngredient = (ingredient) => {
    setQueryExclued(queryExclued.filter((item) => item !== ingredient));
  };

  const [recipes, setRecipes] = useState([]);
  const fetchData = async () => {
    try {
      const url = new URL("https://api.edamam.com/api/recipes/v2");

      const params = {
        q: queryText,
        app_id: `5f89fe95`,
        app_key: `6ad057a2b3ba66c9cd5aae24f720dcf1`,
        type: "public",
      };

      Object.keys(params).forEach(
        (key) => params[key] && url.searchParams.append(key, params[key])
      );

      Array.from(selectedLabels).forEach((label) => {
        switch (true) {
          case Object.prototype.hasOwnProperty.call(healthLabels, label):
            url.searchParams.append("health", label);
            break;
          case Object.prototype.hasOwnProperty.call(mealTypes, label):
            url.searchParams.append("mealType", label);
            break;
          case Object.prototype.hasOwnProperty.call(dishTypes, label):
            url.searchParams.append("dishType", label);
            break;
          case Object.prototype.hasOwnProperty.call(cuisinesTypes, label):
            url.searchParams.append("cuisineType", label);
            break;
          case Object.prototype.hasOwnProperty.call(dietTypes, label):
            url.searchParams.append("diet", label);
            break;
          default:
            break;
        }
      });

      queryExclued.forEach((ingredient) => {
        url.searchParams.append("excluded", ingredient);
      });

      const response = await axios.get(url.toString());
      setRecipes(response.data.hits);
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  };

  console.warn("les recettes :", recipes);

  const articlesPerPage = 9;
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = recipes.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const nextPage = () => {
    const totalPages = Math.ceil(recipes.length / articlesPerPage);
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <NutriDiet />
      <HeaderChoose />
      <BodyChoose
        queryText={queryText}
        handleQueryTextChange={handleQueryTextChange}
        fetchData={fetchData}
      />
      <div className="flex">
        <div className="w-1/5 hidden md:block ">
          <DialogFilters onSelectedLabelsChange={handleSelectedLabelsChange} />
          <ContainerFilterChoose
            ingredientInput={ingredientInput}
            addExcludedIngredient={addExcludedIngredient}
            queryExclued={queryExclued}
            removeExcludedIngredient={removeExcludedIngredient}
          />
        </div>
        <div className="w-4/5 flex flex-col mx-auto md:grid md:grid-cols-3 ">
          {recipes.length === 0
            ? dataRandom.splice(0, 9).map((item, index) => (
                <div key={index.id}>
                  <CardRecipe item={item} />
                </div>
              ))
            : currentArticles.map((item, index) => (
                <div key={index.id}>
                  <CardRecipe item={item} />
                </div>
              ))}
        </div>
      </div>
      {currentArticles.length > 0 && (
        <Buttons
          prevPage={prevPage}
          currentPage={currentPage}
          nextPage={nextPage}
          currentArticles={currentArticles}
          articlesPerPage={articlesPerPage}
        />
      )}
    </div>
  );
}

export default Home;
