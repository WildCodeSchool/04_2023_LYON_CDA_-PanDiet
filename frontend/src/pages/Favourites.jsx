import React from "react";
import FavouriteCard from "../components/FavouriteCard";
import useLocalStorage from "../components/useLocalStorage";
import NutriDiet from "../components/NutriDiet";

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
      <h1 className=" text-3xl">Favourites</h1>
      {favouriteRecipes.map((itemFavourites) => (
        <FavouriteCard
          key={itemFavourites.uri}
          itemFavourites={itemFavourites}
          handleClick={() => handleClick(itemFavourites)}
        />
      ))}
    </>
  );
}

export default Favourites;
