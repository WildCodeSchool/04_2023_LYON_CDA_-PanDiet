import { TextField, Typography } from "@mui/material";
import React from "react";
import "../App.css";
import CardRecipe from "../components/CardRecipe";

const style = {
  title: {
    color: "white",
    textAlign: "center",
    fontFamily: "BioRhyme",
    fontSize: "32px",
    fontWeight: "bold",
    padding: "5% 10% ",
  },
};
function Results() {
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [articlesPerPage, setArticlesPerPage] = useState(4);
  //   const indexOfLastArticle = currentPage * articlesPerPage;
  //   const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  //   const currentArticles = "nom du tableau".slice(
  //     indexOfFirstArticle,                         // mapé currentArticles
  //     indexOfLastArticle
  //   );
  //   const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //   const pageNumbers = [];
  //   for (
  //     let i = 1;
  //     i <= Math.ceil("nom du tableau".length / articlesPerPage);
  //     i++
  //   ) {
  //     pageNumbers.push(i);
  //   }
  return (
    <div style={{ backgroundColor: "#242325" }}>
      <Typography variant="h3" sx={style.title}>
        Voici ce que PanDiet vous conseille
      </Typography>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "8% 0%" }}
      >
        <TextField
          sx={{
            backgroundColor: "white",
            margin: "0 auto",
            borderRadius: "20px",
          }}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
      </div>
      TODO:{/* MAP LE TABLEAU ICI */}
      <CardRecipe />
      <CardRecipe />
      <CardRecipe />
      <CardRecipe />
      <CardRecipe />
      TODO: {/* MAP pageNumbers ici */}
      {/* <div className="flex justify-center">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={
              currentPage === number
                ? "text-red-500 font-bold underline pr-2 text-3xl"
                : "text-black font-bold pr-2 text-2xl"
            }
          >
            {number}
          </button>
        ))}
      </div> */}
    </div>
  );
}

export default Results;
