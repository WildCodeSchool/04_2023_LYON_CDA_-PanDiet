import React from "react";
import NutriDiet from "@components/NutriDiet";
import FavouriteCard from "../components/FavouriteCard";
import useLocalStorage from "../components/UseLocalStorage";

function Favourites({ namePage }) {
  const [favouriteRecipes, setFavouriteRecipes] = useLocalStorage(
    "favouriteRecipes",
    []
  );

  const handleClick = (recipe) => {
    setFavouriteRecipes(
      favouriteRecipes.filter((item) => item.uri !== recipe.uri)
    );
  };

  return (
    <>
      <NutriDiet namePage={namePage} />
      {favouriteRecipes.map((item) => (
        <FavouriteCard
          key={item.uri}
          item={item}
          handleClick={() => handleClick(item)}
        />
      ))}
    </>
  );
}

export default Favourites;
