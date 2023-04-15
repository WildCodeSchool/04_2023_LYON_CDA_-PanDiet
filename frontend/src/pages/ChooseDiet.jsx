import React, { useContext, useState } from "react";
import axios from "axios";
import MediaCard from "../components/MediaCard";
import DialogFilters from "../components/DialogFilters";
import { FilterContext } from "../Context/FilterContext";

function ChooseDiet() {
  const [selectedLabels, setSelectedLabels] = useState(new Set());
  const [queryText, setQueryText] = useState("");
  const [recipes, setRecipes] = useState([]);
  const { healthLabels, mealTypes, dishTypes, cuisinesTypes, dietTypes } =
    useContext(FilterContext);

  const handleSelectedLabelsChange = (updatedSelectedLabels) => {
    setSelectedLabels(updatedSelectedLabels);
  };

  const handleQueryTextChange = (event) => {
    setQueryText(event.target.value);
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

      const response = await axios.get(url.toString());
      setRecipes(response.data.hits);
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={queryText}
        onChange={handleQueryTextChange}
        placeholder="Enter search query"
      />
      <p>Affiner ma recherche :</p>
      <DialogFilters onSelectedLabelsChange={handleSelectedLabelsChange} />
      <button type="button" onClick={fetchData}>
        Rechercher
      </button>

      {recipes
        ? recipes.map((recette) => (
            <div key={recette.recipe.uri}>
              <MediaCard recette={recette} />
              <button
                type="button"
                onClick={() => console.warn(recette.recipe.uri)}
              >
                SHOW MY URI
              </button>
            </div>
          ))
        : null}
    </div>
  );
}

export default ChooseDiet;
