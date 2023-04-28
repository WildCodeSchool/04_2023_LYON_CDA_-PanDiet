import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import ContainerFilterChoose from "../components/ChooseDiet/ContainerFilterChoose";
import Buttons from "../components/ChooseDiet/Buttons";
import CardRecipe from "../components/ChooseDiet/CardRecipe";
import DialogFilters from "../components/DialogFilters";
import { FilterContext } from "../Context/FilterContext";
import HeaderChoose from "../components/ChooseDiet/HeaderChoose";
import NutriDiet from "../components/NutriDiet";
import BodyChoose from "../components/ChooseDiet/BodyChoose";

function ChooseDiet({ namePage }) {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLabels, setSelectedLabels] = useState(new Set());
  const [queryText, setQueryText] = useState("");
  const [queryExclued, setQueryExclued] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ingredientInput = useRef(null);
  const { healthLabels, mealTypes, dishTypes, cuisinesTypes, dietTypes } =
    useContext(FilterContext);

  const handleSelectedLabelsChange = (updatedSelectedLabels) => {
    setSelectedLabels(updatedSelectedLabels);
  };

  const handleQueryTextChange = (event) => {
    setQueryText(event.target.value);
  };

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
    setShowFilters(false);
  };

  const articlesPerPage = 6;
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
    <div className="text-black">
      <NutriDiet namePage={namePage} />
      <div className="text-center mr-4 mt-4">
        <HeaderChoose />
      </div>

      <BodyChoose
        setShowFilters={setShowFilters}
        queryText={queryText}
        showFilters={showFilters}
        handleQueryTextChange={handleQueryTextChange}
        fetchData={fetchData}
      />
      <br />
      {showFilters ? (
        <div>
          <DialogFilters onSelectedLabelsChange={handleSelectedLabelsChange} />
          <ContainerFilterChoose
            ingredientInput={ingredientInput}
            addExcludedIngredient={addExcludedIngredient}
            queryExclued={queryExclued}
            removeExcludedIngredient={removeExcludedIngredient}
          />
        </div>
      ) : (
        ""
      )}
      {currentArticles.map((item) => (
        <div key={item.recipe.uri}>
          <CardRecipe item={item} />
        </div>
      ))}
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

export default ChooseDiet;
