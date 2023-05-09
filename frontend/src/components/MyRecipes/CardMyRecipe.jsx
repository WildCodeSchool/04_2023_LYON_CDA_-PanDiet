import React from "react";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import ModalMyRecipeDetails from "./ModalMyRecipeDetails";

const { VITE_BACKEND_URL } = import.meta.env;

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  borderRadius: 20,
  marginRight: 10,
  [theme.breakpoints.down("sm")]: {
    borderRadius: 20,
    zIndex: 0,
  },
  "&:hover, &.Mui-focusVisible": {
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  borderRadius: 20,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  borderRadius: 20,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  borderRadius: 20,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

function CardMyRecipe({
  recipe,
  handleDelete,
  handleCloseRecipeCard,
  handleOpenRecipeCard,
  openRecipeCard,
}) {
  return (
    <div>
      <button type="button" key={recipe.title}>
        <ImageButton onClick={handleOpenRecipeCard} focusRipple>
          <img
            className="max-h-[200px] min-h-[200px] max-w-[250px] min-w-[260px] rounded-xl "
            src={`${VITE_BACKEND_URL}/uploads/${recipe.image}`}
            alt=""
          />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {recipe.name}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
        <ModalMyRecipeDetails
          handleOpenRecipeCard={handleOpenRecipeCard}
          recipe={recipe}
          openRecipeCard={openRecipeCard}
          handleCloseRecipeCard={handleCloseRecipeCard}
          handleDelete={handleDelete}
        />
      </button>
    </div>
  );
}

export default CardMyRecipe;
