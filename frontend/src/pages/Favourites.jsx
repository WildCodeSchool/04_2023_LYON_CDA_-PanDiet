import React from "react";
import NavBar from "../components/NavBar";
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
      <NavBar />
      <HeaderChoose />
      <div className="flex justify-between w-full mt-4 mb-10">
        <div className="w-1/5 font-bold text-2xl">
          <h2>Favourites</h2>
        </div>
        {favouriteRecipes.map((itemFavourites) => (
          <FavouriteCard
            key={itemFavourites.uri}
            itemFavourites={itemFavourites}
            handleClick={() => handleClick(itemFavourites)}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
