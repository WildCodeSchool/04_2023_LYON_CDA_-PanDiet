// import { Button, TextField, Typography } from "@mui/material";
// import React, { useState } from "react";
// import "../App.css";
// import CardRecipe from "../components/CardRecipe";

// const style = {
//   title: {
//     color: "white",
//     textAlign: "center",
//     fontFamily: "BioRhyme",
//     fontSize: "32px",
//     fontWeight: "bold",
//     padding: "5% 10% ",
//   },
// };
// function Results() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const articlesPerPage = 6;
//   const indexOfLastArticle = currentPage * articlesPerPage;
//   const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
//   const currentArticles = recipes.slice(
//     indexOfFirstArticle,
//     indexOfLastArticle
//   );
//   const nextPage = () => {
//     const totalPages = Math.ceil(recipes.length / articlesPerPage);
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const prevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };
//   return (
//     <div style={{ backgroundColor: "#242325" }}>
//       <Typography variant="h3" sx={style.title}>
//         Voici ce que PanDiet vous conseille
//       </Typography>
//       <div
//         style={{ display: "flex", justifyContent: "center", padding: "8% 0%" }}
//       >
//         <TextField
//           sx={{
//             backgroundColor: "white",
//             margin: "0 auto",
//             borderRadius: "20px",
//           }}
//           id="filled-search"
//           label="Search field"
//           type="search"
//           variant="filled"
//         />
//       </div>
//       {currentArticles.map((item) => (
//         <div key={item.recipe.uri}>
//           <CardRecipe item={item} />
//         </div>
//       ))}
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           variant="outlined"
//         >
//           Précédent
//         </Button>
//         <Button
//           onClick={nextPage}
//           disabled={currentArticles.length < articlesPerPage}
//           variant="outlined"
//         >
//           Suivant
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Results;
