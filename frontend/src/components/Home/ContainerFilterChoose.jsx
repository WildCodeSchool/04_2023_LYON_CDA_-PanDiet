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
          display: "none",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "10vw",
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
      <button
        className="bg-black text-white rounded-xl mt-2 px-8 py-1"
        type="button"
      >
        Search
      </button>
    </div>
  );
}

export default ContainerFilterChoose;
