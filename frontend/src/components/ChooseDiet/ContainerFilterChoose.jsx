import React from "react";
import { Button } from "@mui/material";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";

function ContainerFilterChoose({
  ingredientInput,
  addExcludedIngredient,
  queryExclued,
  removeExcludedIngredient,
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          margin: "5% 0",
        }}
      >
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
          }}
          variant="filled"
          size="small"
          label="Enter excluded ingredients"
          inputRef={ingredientInput}
        />
        <Button onClick={addExcludedIngredient} variant="contained">
          Add
        </Button>
      </div>
      {queryExclued.map((ingredient, index) => (
        <Chip
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          label={ingredient}
          onDelete={() => removeExcludedIngredient(ingredient)}
          sx={{ width: "auto", margin: "0.5rem" }}
        />
      ))}
    </div>
  );
}

export default ContainerFilterChoose;
