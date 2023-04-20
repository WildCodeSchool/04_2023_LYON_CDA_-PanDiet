import React from "react";
import DetailRecipeCard from "../components/DetailRecipeCards";
import BackButton from "../components/backbutton/BackButton";

function RandomRecipe() {
  const style = {
    main: {
      backgroundColor: "#000",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "BioRhyme",
      minHeight: "100vh",
    },
  };

  return (
    <div style={style.main}>
      <DetailRecipeCard />
      <BackButton />
    </div>
  );
}

export default RandomRecipe;
