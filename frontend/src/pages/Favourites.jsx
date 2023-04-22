import React from "react";
import FavouriteCard from "../components/FavouriteCard";
import NavBar from "../components/NavBar";
import useLocalStorage from "../components/UseLocalStorage";

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
    <>
      <NavBar />
      <div className="">
        <h1 className=" text-3xl">Favourites</h1>
        {favouriteRecipes.map((item) => (
          <FavouriteCard
            key={item.uri}
            item={item}
            handleClick={() => handleClick(item)}
          />
        ))}
      </div>
    </>
  );
}

export default Favourites;
