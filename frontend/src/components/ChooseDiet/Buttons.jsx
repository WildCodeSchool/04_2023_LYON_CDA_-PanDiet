import React from "react";
import { Button } from "@mui/material";

function Buttons({
  prevPage,
  currentPage,
  nextPage,
  currentArticles,
  articlesPerPage,
}) {
  return (
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
  );
}

export default Buttons;
