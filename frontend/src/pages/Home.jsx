import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import ContainerFilterChoose from "../components/Home/ContainerFilterChoose";
import Buttons from "../components/Home/Buttons";
import DialogFilters from "../components/DialogFilters";
import { FilterContext } from "../Context/FilterContext";
import HeaderChoose from "../components/Home/HeaderChoose";
import ContainerRightHome from "../components/Home/ContainerRightHome";

const appId = import.meta.env.VITE_APP_ID;
const appKey = import.meta.env.VITE_APP_KEY;

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
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}&mealType=snack&mealType=teaTime&mealType=dinner&mealType=breakfast&random=true`
      )
      .then((response) => setDataRandom(response.data.hits.splice(0, 10)));
  }, []);

  const handleSelectedLabelsChange = (updatedSelectedLabels) => {
    setSelectedLabels(updatedSelectedLabels);
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

  const [numberPerPage, setNumberPerPage] = useState(15);
  const handleNumberPerPage = (e) => {
    setNumberPerPage(e);
  };
  const articlesPerPage = numberPerPage;
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
    <div className=" mx-5 md:mx-20 ">
      <HeaderChoose />
      <div className="flex mt-5">
        <div className="w-[15%] px-2 hidden md:block ">
          <DialogFilters onSelectedLabelsChange={handleSelectedLabelsChange} />
          <ContainerFilterChoose
            ingredientInput={ingredientInput}
            addExcludedIngredient={addExcludedIngredient}
            queryExclued={queryExclued}
            removeExcludedIngredient={removeExcludedIngredient}
          />
        </div>
        <ContainerRightHome
          setQueryText={setQueryText}
          fetchData={fetchData}
          handleNumberPerPage={handleNumberPerPage}
          recipes={recipes}
          dataRandom={dataRandom}
          currentArticles={currentArticles}
        />
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
