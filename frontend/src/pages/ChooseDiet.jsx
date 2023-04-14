import React, { useContext, useState } from "react";
import axios from "axios";
import MediaCard from "@components/MediaCard";
import DialogFilters from "../components/DialogFilters";
import { FilterContext } from "../Context/FilterContext"; // Assurez-vous d'utiliser le bon chemin d'accès

function ChooseDiet() {
  const [selectedLabels, setSelectedLabels] = useState(new Set());
  const [queryText, setQueryText] = useState("");
  const [recipes, setRecipes] = useState([]);
  const { healthLabels, mealTypes, dishTypes } = useContext(FilterContext);

  const handleSelectedLabelsChange = (updatedSelectedLabels) => {
    setSelectedLabels(updatedSelectedLabels);
  };

  const handleQueryTextChange = (event) => {
    setQueryText(event.target.value);
  };

  const fetchData = async () => {
    try {
      const url = new URL("https://api.edamam.com/api/recipes/v2");

      const healthLabelsArray = Array.from(selectedLabels).filter((label) =>
        Object.prototype.hasOwnProperty.call(healthLabels, label)
      );
      const mealTypesArray = Array.from(selectedLabels).filter((label) =>
        Object.prototype.hasOwnProperty.call(mealTypes, label)
      );
      const dishTypesArray = Array.from(selectedLabels).filter((label) =>
        Object.prototype.hasOwnProperty.call(dishTypes, label)
      );

      const healthLabelsString = healthLabelsArray.join(",");
      const mealTypeLabelsString = mealTypesArray.join(",");
      const dishTypeLabelsString = dishTypesArray.join(",");

      const params = {
        q: queryText,
        app_id: "f4034abb",
        app_key: "44fe06272cb8fed56c9622f7031624c7",
        type: "public",
        health: healthLabelsString,
        mealType: mealTypeLabelsString,
        dishType: dishTypeLabelsString,
      };
      Object.keys(params).forEach(
        (key) => params[key] && url.searchParams.append(key, params[key])
      );

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
      <button type="button" onClick={() => console.log(recipes)}>
        CONSOLE MOI
      </button>
      {recipes &&
        recipes.map((recette, index) => (
          <MediaCard key={index} recette={recette} />
        ))}
    </div>
  );
}

export default ChooseDiet;
