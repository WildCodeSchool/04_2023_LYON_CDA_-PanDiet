import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";
import MediaCard from "../components/MediaCard";
import DialogFilters from "../components/DialogFilters";
import { FilterContext } from "../Context/FilterContext";

function ChooseDiet() {
  const [selectedLabels, setSelectedLabels] = useState(new Set());
  const [queryText, setQueryText] = useState("");
  const [queryExclued, setQueryExclued] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const ingredientInput = useRef(null);
  const { healthLabels, mealTypes, dishTypes, cuisinesTypes, dietTypes } =
    useContext(FilterContext);

  const handleSelectedLabelsChange = (updatedSelectedLabels) => {
    setSelectedLabels(updatedSelectedLabels);
  };

  const handleQueryTextChange = (event) => {
    setQueryText(event.target.value);
  };
  /*   const handleQueryEcluedChange = (event) => {
    setQueryExclued(event.target.value);
  };
  const getExcludedIngredientsArray = (excludedString) => {
    return excludedString.split(/\s+/);
  }; */

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

  /*   const newQueryEcluded = queryExclued.replace(/\s/g, "&excluded=");
   */
  /*   excluded = chicken & excluded=beef
       excluded = vinegar & excluded=pretzel
   */

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

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Hungry and healthy ?</h2>
      </div>
      <div>
        <h3>Choose your Diet !</h3>
      </div>
      <input
        type="text"
        value={queryText}
        onChange={handleQueryTextChange}
        placeholder="Enter search query"
      />
      <br />
      <input
        type="text"
        ref={ingredientInput}
        placeholder="Enter excluded ingredients"
      />
      <button type="button" onClick={addExcludedIngredient}>
        Ajouter
      </button>
      <div>
        {queryExclued.map((ingredient) => (
          <Chip
            label={ingredient}
            onDelete={() => removeExcludedIngredient(ingredient)}
            sx={{ width: "auto", margin: "0.5rem" }}
          />
        ))}
      </div>
      <p>Affiner ma recherche :</p>
      <DialogFilters onSelectedLabelsChange={handleSelectedLabelsChange} />
      <button type="button" onClick={fetchData}>
        Rechercher
      </button>

      {recipes
        ? recipes.map((recette) => (
            <div key={recette.recipe.uri}>
              <MediaCard recette={recette} />
              <div style={{ display: "flex" }}>
                <button
                  type="button"
                  onClick={() => console.log(recette.recipe.uri)}
                >
                  SHOW MY URI
                </button>
                <button type="button" onClick={() => console.log(recipes)}>
                  SHOW RECIPES
                </button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default ChooseDiet;
