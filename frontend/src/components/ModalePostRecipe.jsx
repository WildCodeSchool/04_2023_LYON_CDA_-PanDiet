import React, { useState } from "react";
import {
  TextField,
  IconButton,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormControl,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

export default function ModalePostRecipe({ setOpen, setRecipes, recipes }) {
  const [title, setTitle] = useState("");
  const [mealType, setMealType] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [time, setTime] = useState(0);
  const [image, setImage] = useState(null);
  const [newIngredient, setNewIngredient] = useState("");

  const handleIngredientsChange = (event) => {
    setNewIngredient(event.target.value);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, newIngredient]);
    setNewIngredient("");
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      title,
      ingredients,
      time,
      image,
      mealType,
    };
    // Ajouter la nouvelle recette au tableau
    setRecipes([...recipes, newRecipe]);
    // Fermer la modal
    setOpen(false);
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold underline mb-3">
        Add a new recipe
      </h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          variant="outlined"
          color="primary"
          label="Name Of Recipe"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          fullWidth
          required
        />
        <div className="flex items-center justify-around">
          <Box>
            <FormControl sx={{ minWidth: 200, marginTop: 5 }}>
              <InputLabel id="demo-simple-select-label">MealType</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={mealType}
                label="Age"
                onChange={(e) => setMealType(e.target.value)}
              >
                <MenuItem value="Snack">Snack</MenuItem>
                <MenuItem value="TeaTime">Tea Time</MenuItem>
                <MenuItem value="Break Fast">Break fast</MenuItem>
                <MenuItem value="Dinner">Dinner</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br />
          <IconButton
            onChange={(e) => setImage(e.target.files[0])}
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </div>

        <br />
        <label className="bg-red-800">
          Ingrédients :
          <input
            className="border border-black"
            type="text"
            value={newIngredient}
            onChange={handleIngredientsChange}
          />
          <button
            className="bg-green-800"
            type="button"
            onClick={handleAddIngredient}
          >
            Ajouter
          </button>
          <ul className="flex flex-wrap">
            {ingredients.map((ingredient) => (
              <li className="bg-gray-500 m-2 p-1" key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>
        </label>
        <br />
        <label className="bg-red-800">
          Temps :
          <input
            className="border border-black"
            type="number"
            value={time}
            onChange={handleTimeChange}
          />
        </label>
        <br />
        <button
          className="bg-green-800"
          type="submit"
          onClick={() => console.warn(recipes)}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("ingredients", JSON.stringify(ingredients));
//     formData.append("time", time);
//     formData.append("image", image);
//     fetch("/api/recipe", {
//       method: "POST",
//       body: formData,
//     }).then(() => {
//       // fermer la modal
//     });
//   };
