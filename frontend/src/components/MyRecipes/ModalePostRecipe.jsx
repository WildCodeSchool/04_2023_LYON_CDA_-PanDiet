import { PhotoCamera } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useRef } from "react";
import { useCurrentUserContext } from "../../Context/userContext";

export default function ModalePostRecipe({ handleClose, setReload, reaload }) {
  const { user } = useCurrentUserContext();
  const [ingredients, setIngredients] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [instructionsList, setInstructionsList] = useState([]);
  const [dataPostRecipe, setDataPostRecipe] = useState({
    name: "",
    cuisineType: "",
    image: "",
    mealType: "",
    cook_time: "",
    user_id: user.id,
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
  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };
  const handleAddInstructions = () => {
    setInstructionsList([...instructionsList, instructions]);
    setInstructions("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      dataPostRecipe.name &&
      dataPostRecipe.cuisineType &&
      dataPostRecipe.mealType &&
      dataPostRecipe.cook_time &&
      dataPostRecipe.image &&
      ingredientsList &&
      instructionsList
    ) {
      const recipe = JSON.stringify({
        ...dataPostRecipe,
        ingredients: ingredientsList,
        instructions: instructionsList,
      });
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
      fetch(`http://localhost:5000/api/my-recipes`, requestOptions).then(
        (response) => {
          if (response.ok) {
            toast.success(`Recette ${dataPostRecipe.name} a bien été créée`);
          } else {
            toast.error(
              "Une erreur est survenue lors de la création de votre recette."
            );
          }
          return response.text();
        }
      );
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
      <div className="w-full bg-upload bg-center bg-cover ">
        <div className="backdrop-blur-sm bg-white/30 flex w-1/2 h-1/2 mx-auto my-[25%] text-center items-center ">
          <div className="mx-auto">
            <h3 className="text-xl ">Download The Picture</h3>
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
        <form className=" max-w-[30vw]" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={dataPostRecipe.name}
            onChange={onChange}
            placeholder="Name"
            className="w-full  my-2 flex flex-col justify-center rounded-md placeholder:text-gray-400 border border-black py-2 pl-4 text-lg placeholder-black"
          />
          <div className="flex items-center">
            <select
              className="w-1/3 border h-[46px] border-black rounded-md"
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
              className="w-1/3 m-2 rounded-md placeholder:text-gray-400 border border-black py-2 pl-4 text-lg placeholder-black"
            />
            <input
              type="text"
              name="cook_time"
              value={dataPostRecipe.cook_time}
              onChange={onChange}
              placeholder="🕝 Time"
              className="w-1/3 my-2 rounded-md placeholder:text-gray-400 border border-black py-2 pl-4 text-lg placeholder-black"
            />
          </div>
          <div className="flex my-2 h-10 justify-around items-center">
            <br />
            <input
              className="w-full my-2 rounded-md placeholder:text-gray-400 border border-black py-2 pl-4 text-lg placeholder-black"
              type="text"
              placeholder="Ingrédients"
              value={ingredients}
              onChange={handleIngredientsChange}
            />
            <button
              className=" border rounded-md bg-red-200 hover:bg-red-400 border-black py-2 ml-1 px-3 "
              type="button"
              onClick={() => handleAddIngredient()}
            >
              Add
            </button>
          </div>
          <ul className="flex flex-wrap overflow-auto max-h-24 mb-4">
            {ingredientsList.map((ingredient) => (
              <li className=" bg-gray-100 px-1 m-2 rounded-md" key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>
          <div className="flex my-5 h-10 justify-around items-center">
            <textarea
              aria-multiline
              type="text"
              name="instructions"
              value={instructions}
              onChange={handleInstructionsChange}
              placeholder="instructions"
              className="w-80 my-2 rounded-md placeholder:text-gray-400 border border-black  py-2 pl-4 text-lg placeholder-black"
            />
            <button
              className=" border rounded-md bg-red-200 hover:bg-red-400 border-black py-2 ml-1 px-3 "
              type="button"
              onClick={() => handleAddInstructions()}
            >
              Add
            </button>
          </div>
          <ul className="flex flex-wrap overflow-auto max-h-24">
            {instructionsList.map((instruction) => (
              <li
                className=" bg-gray-100 px-1 m-1 rounded-md"
                key={instruction}
              >
                {instruction}
              </li>
            ))}
          </ul>
          <div className=" mt-1 flex justify-center">
            <button
              className="border border-black px-4 py-2 hover:bg-gray-100 rounded-md "
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
