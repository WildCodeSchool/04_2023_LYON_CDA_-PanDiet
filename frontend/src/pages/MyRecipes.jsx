import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Fade, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { useNavigate } from "react-router-dom";
import ModalePostRecipe from "../components/MyRecipes/ModalePostRecipe";
import CardMyRecipe from "../components/MyRecipes/CardMyRecipe";
import HeaderChoose from "../components/Home/HeaderChoose";
import { useCurrentUserContext } from "../Context/userContext";

function MyRecipes() {
  const { token } = useCurrentUserContext();
  const navigate = useNavigate();
  const [reload, setReload] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openRecipeCard, setOpenRecipeCard] = React.useState(false);
  const handleOpenRecipeCard = () => setOpenRecipeCard(true);
  const handleCloseRecipeCard = () => setOpenRecipeCard(false);
  const [dataMyRecipes, setDataMyRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/my-recipes")
      .then((response) => setDataMyRecipes(response.data));
  }, [reload]);

  const handleDelete = (id, name) => {
    axios.delete(`http://localhost:5000/api/my-recipes/${id}`).then(() => {
      toast.success(`Recipe ${name} deleted ✅`);
      handleCloseRecipeCard(!openRecipeCard);
      setReload(!reload);
    });
  };

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

  console.warn(user.id);

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
    if (dataPostRecipe.name) {
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
            setReload(!reload);
          } else {
            toast.error(
              "Une erreur est survenue lors de la création de votre recette."
            );
          }
          return response.text();
        }
      );
      handleClose(false);
    }
  };

  const handleEnterIngredients = (e) => {
    if (e.key === "Enter") {
      handleAddIngredient();
    }
  };
  const handleEnterInstructions = (e) => {
    if (e.key === "Enter") {
      handleAddInstructions();
    }
  };
  return (
    <div className="mx-5 md:mx-20 h-screen md:overflow-hidden ">
      <HeaderChoose />
      <div className="w-full mt-4">
        {token ? (
          <>
            <div className=" flex justify-between mb-2  w-full">
              <h2 className="font-bold text-2xl">My Recipes</h2>
              <button
                className="border border-black p-1 md:ml-3 rounded-md "
                onClick={handleOpen}
                type="button"
              >
                <p className="text-[#FF9A62]">Add a new Recipe</p>
              </button>
            </div>
            <div className="flex flex-col  md:grid md:grid-cols-3 ">
              {dataMyRecipes.map((recipe) => (
                <div className="flex justify-center md:justify-between ">
                  <CardMyRecipe
                    openRecipeCard={openRecipeCard}
                    handleCloseRecipeCard={handleCloseRecipeCard}
                    handleOpenRecipeCard={handleOpenRecipeCard}
                    recipe={recipe}
                    handleDelete={handleDelete}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-xl">
              You must be logged in to view your recipes.
            </p>
            <button
              type="button"
              className="bg-[#FF9A62] text-white px-4 py-2 rounded-md mt-4"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        )}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box>
            <ModalePostRecipe
              inputRef={inputRef}
              dataPostRecipe={dataPostRecipe}
              handleInstructionsChange={handleInstructionsChange}
              onChange={onChange}
              handleAddIngredient={handleAddIngredient}
              handleAddInstructions={handleAddInstructions}
              ingredients={ingredients}
              ingredientsList={ingredientsList}
              instructions={instructions}
              instructionsList={instructionsList}
              handleIngredientsChange={handleIngredientsChange}
              handleSubmit={handleSubmit}
              handleMealTypeChange={handleMealTypeChange}
              reload={reload}
              handleClose={handleClose}
              setReload={setReload}
              handleEnterInstructions={handleEnterInstructions}
              handleEnterIngredients={handleEnterIngredients}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default MyRecipes;
