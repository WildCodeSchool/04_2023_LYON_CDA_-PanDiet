import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import NavBar from "../components/NavBar";
import ContainerFilterChoose from "../components/ChooseDiet/ContainerFilterChoose";
import Buttons from "../components/ChooseDiet/Buttons";
import CardRecipe from "../components/ChooseDiet/CardRecipe";
import DialogFilters from "../components/DialogFilters";
import { FilterContext } from "../Context/FilterContext";
import HeaderChoose from "../components/ChooseDiet/HeaderChoose";

function ChooseDiet() {
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
        app_id: "f4034abb",
        app_key: "44fe06272cb8fed56c9622f7031624c7",
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

  const style = {
    hrGreen: {
      height: "1px",
      backgroundColor: "#7CB342",
      margin: "5vh auto",
      width: "70%",
    },
    button: {
      backgroundColor: "#7CB342",
      display: "flex",
      margin: "5vh auto",
    },
    p: { textAlign: "center", margin: "2%" },
    textField: {
      backgroundColor: "white",
      borderRadius: "10px",
    },
  };
  return (
    <div className="text-black">
      <NavBar />
      <HeaderChoose />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={style.textField}
          variant="filled"
          size="small"
          label="Enter search query"
          value={queryText}
          onChange={handleQueryTextChange}
        />
      </div>

      <br />
      <p style={style.p}>Refine my search :</p>
      <DialogFilters onSelectedLabelsChange={handleSelectedLabelsChange} />
      <hr style={style.hrGreen} />
      <ContainerFilterChoose
        ingredientInput={ingredientInput}
        addExcludedIngredient={addExcludedIngredient}
        queryExclued={queryExclued}
        removeExcludedIngredient={removeExcludedIngredient}
      />
      <Button sx={style.button} onClick={fetchData} variant="contained">
        Search
      </Button>
      {currentArticles.map((item) => (
        <div key={item.recipe.uri}>
          <CardRecipe item={item} />
        </div>
      ))}
      <Buttons
        prevPage={prevPage}
        currentPage={currentPage}
        nextPage={nextPage}
        currentArticles={currentArticles}
        articlesPerPage={articlesPerPage}
      />
    </div>
  );
}

export default ChooseDiet;
