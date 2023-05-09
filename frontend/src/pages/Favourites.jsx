import React from "react";
import FavouriteCard from "../components/Favourites/FavouriteCard";
import useLocalStorage from "../components/LocalStorage/UseLocalStorage";
import HeaderChoose from "../components/Home/HeaderChoose";

function Favourites() {
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
    <div className="mx-20 ">
      <HeaderChoose />
      <div className="w-full mt-4 mb-10">
        <div className="w-1/5 font-bold text-2xl">
          <h2>Favourites</h2>
        </div>
        <div className="flex ">
          {favouriteRecipes.map((itemFavourites) => (
            <FavouriteCard
              key={itemFavourites.uri}
              itemFavourites={itemFavourites}
              handleClick={() => handleClick(itemFavourites)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favourites;
