import { PhotoCamera } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState, useRef } from "react";

export default function ModalePostRecipe({
  recipes,
  handleClose,
  setReload,
  reaload,
}) {
  const [ingredients, setIngredients] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);
  const [dataPostRecipe, setDataPostRecipe] = useState({
    name: "",
    description: "",
    cuisineType: "",
    image: "",
    mealType: "",
    cook_time: "",
    user_id: "",
    instructions: "",
  });

  const inputRef = useRef(null);

  // met à jour une partie de l'objet (DataPostRecipe)
  // avec les données saisies par l'utilisateur dans un champ de saisie.
  const onChange = (e) => {
    const { name, value } = e.target;
    setDataPostRecipe((prevData) => ({ ...prevData, [name]: value }));
  };

  //  met à jour l'état de l'application avec une nouvelle valeur pour la propriété "mealType".
  const handleMealTypeChange = (e) => {
    setDataPostRecipe((newDataPostRecipe) => ({
      ...newDataPostRecipe,
      mealType: e.target.value,
    }));
  };
  const handleIngredientsChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleAddIngredient = () => {
    setIngredientsList([...ingredientsList, ingredients]);
    setIngredients("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataPostRecipe.name && dataPostRecipe.mealType) {
      const recipe = JSON.stringify(dataPostRecipe);
      const myHeaders = new Headers();
      const formData = new FormData();
      formData.append("recipe", recipe);
      formData.append("image", inputRef.current.files[0]);
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
      };
      // On appelle le back. Si tous les middleware placé sur la route ci-dessous, je pourrais être renvoyé à la route login
      fetch(`http://localhost:5000/api/my-recipes`, requestOptions)
        .then((response) => response.text())
        .then(() => console.warn("bravo", ingredientsList));
      handleClose(false);
      setReload(!reaload).catch(console.error);
    }
  };
  return (
    <div
      className="absolute top-1/2 left-1/2 w-[90vw] transform -translate-x-1/2
    -translate-y-1/2 md:w-[1000px] md:h-[600px]
   bg-white border-2  shadow-md block md:flex"
    >
      <div className="w-full bg-uplaod bg-center ">
        <div className="backdrop-blur-sm bg-white/30 flex w-1/2 h-1/2 mx-auto my-[25%] text-center items-center ">
          <div className="mx-auto">
            <h3 className="text-xl ">Telechargez votre photo</h3>
            <IconButton
              size="large"
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                onChange={onChange}
                ref={inputRef}
                name="image"
                value={dataPostRecipe.image}
                type="file"
              />
              <PhotoCamera fontSize="inherit" />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="p-7 md:flex mx-auto md:p-10 flex-col">
        <h2 className="text-center text-2xl font-bold underline mb-3">
          Create a new recipe
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={dataPostRecipe.name}
            onChange={onChange}
            placeholder="Name"
            className="w-80  my-2 flex flex-col justify-center rounded-md placeholder:text-gray-400 border border-black py-2 pl-4 text-lg placeholder-black"
          />
          <input
            type="text"
            name="description"
            value={dataPostRecipe.description}
            onChange={onChange}
            placeholder="Description"
            className="w-80 my-2 rounded-md placeholder:text-gray-400 border border-black py-2 pl-4 text-lg placeholder-black"
          />
          <div className="flex items-center">
            <select
              className="border h-[46px] border-black rounded-md"
              value={dataPostRecipe.mealType}
              label="MealType"
              onChange={handleMealTypeChange}
            >
              <option value="">🍴MealType</option>
              <option value="Snack">Snack</option>
              <option value="Tea Time">Tea Time</option>
              <option value="Break Fast">Break Fast</option>
              <option value="Dinner">Dinner</option>
            </select>
            <input
              type="text"
              name="cuisineType"
              value={dataPostRecipe.cuisineType}
              onChange={onChange}
              placeholder="🌎 Type"
              className="w-[30%] m-2 rounded-md placeholder:text-gray-400 border border-black py-2 pl-4 text-lg placeholder-black"
            />
            <input
              type="text"
              name="cook_time"
              value={dataPostRecipe.cook_time}
              onChange={onChange}
              placeholder="🕝 Time"
              className="w-[30%] my-2 rounded-md placeholder:text-gray-400 border border-black py-2 pl-4 text-lg placeholder-black"
            />
          </div>
          <div className="flex my-2 h-10 justify-around items-center">
            <input
              type="text"
              name="user_id"
              value={dataPostRecipe.user_id}
              onChange={onChange}
              placeholder="userId"
              className="w-1/4 my-2 rounded-md placeholder:text-gray-400 border border-black py-2 pl-4 text-lg placeholder-black"
            />
            <br />
            <input
              className="w-1/3 my-2 rounded-md placeholder:text-gray-400 border border-black py-2 pl-4 text-lg placeholder-black"
              type="text"
              placeholder="Ingrédients"
              value={ingredients}
              onChange={handleIngredientsChange}
            />
            <button
              className="mx-5 border rounded-md bg-red-200 hover:bg-red-400 border-black py-2 px-3 "
              type="button"
              value={dataPostRecipe.ingredients}
              onClick={handleAddIngredient}
            >
              Add
            </button>
          </div>
          <ul className="flex flex-wrap">
            {ingredientsList.map((ingredient) => (
              <li className=" bg-gray-300 px-2 rounded-md" key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>
          <input
            aria-multiline
            type="text"
            name="instructions"
            value={dataPostRecipe.instructions}
            onChange={onChange}
            placeholder="instructions"
            className="w-80 my-2 rounded-md placeholder:text-gray-400 border border-black  py-2 pl-4 text-lg placeholder-black"
          />
          <br />
          <div className="flex justify-center">
            <button
              className="border border-black px-4 py-2 hover:bg-gray-100 rounded-md "
              type="submit"
              onClick={() => console.warn(recipes)}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
