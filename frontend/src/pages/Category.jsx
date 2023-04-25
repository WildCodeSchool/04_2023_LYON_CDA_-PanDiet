import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import ButtonBack from "../components/ButtonBack";
import Search from "../components/Search";
import CardRecipe from "../components/ChooseDiet/CardRecipe";

function Category({ categorySelected }) {
  const [dataCategory, setDataCategory] = useState([]);
  const [filterSearch, setFilterSearch] = useState("");
  const appId = "app_id=5f89fe95";
  const appKey = "app_key=6ad057a2b3ba66c9cd5aae24f720dcf1";
  const type = "type=public";
  useEffect(() => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?${appId}&${appKey}&${type}&mealType=${categorySelected}`
      )
      .then((response) => {
        // setDataCategory(response.data.hits);
        setDataCategory(response.data.hits);
      });
  }, []);
  const axiosData = () => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?${appId}&${appKey}&${type}&mealType=${categorySelected}&q=${filterSearch}`
      )
      .then((response) => {
        // setDataCategory(response.data.hits);
        setDataCategory(response.data.hits);
      });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = dataCategory.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const nextPage = () => {
    const totalPages = Math.ceil(dataCategory.length / articlesPerPage);
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="md:px-8">
      <Search axiosData={axiosData} setFilterSearch={setFilterSearch} />
      <ButtonBack />
      <h2 className="text-center text-3xl font-bold">{categorySelected}</h2>
      <div>
        {currentArticles.map((item) => (
          <div>
            <CardRecipe item={item} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          variant="outlined"
        >
          Précédent
        </Button>
        <Button
          onClick={nextPage}
          disabled={currentArticles.length < articlesPerPage}
          variant="outlined"
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}

export default Category;
