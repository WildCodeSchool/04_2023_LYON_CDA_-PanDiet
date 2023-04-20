import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const style = {
  title: {
    backgroundColor: "#000",
    padding: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    fontFamily: "BioRhyme",
  },
  titleAccordion: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "BioRhyme",
  },
  accordion: {
    marginLeft: "110px",
    fontFamily: "BioRhyme",
    color: "#000",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

function ModalRecipeDetails({ isOpen, onClose, recipe }) {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  if (!isOpen) {
    return null;
  }

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return (
      <IconButton
        aria-expanded={props["aria-expanded"]}
        onClick={props.onClick}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...other}
      />
    );
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          maxWidth: "95vw",
          maxHeight: "95vh",
          overflowY: "auto",
          padding: "20px",
          position: "relative",
        }}
      >
        <button
          type="button"
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#333",
          }}
          onClick={onClose}
        >
          &times;
        </button>
        <Card sx={{ maxWidth: 404 }}>
          <Typography variant="h2" style={style.title}>
            {recipe.label}
          </Typography>

          <CardMedia component="img" image={recipe.image} alt={recipe.label} />

          <CardContent variant="div" sx={{ display: "flex" }}>
            <Typography style={style.titleAccordion}>
              Stir Fried Noodles with vegetables
            </Typography>

            <IconButton
              onClick={handleClick}
              color={isFilled ? "error" : "inherit"}
            >
              {isFilled ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </CardContent>

          <CardActions disableSpacing>
            <CardMedia
              sx={{ width: "Auto" }}
              component="img"
              image="src/assets/ion_list-circle-outline.svg"
              alt="icon"
            />
            <Typography style={style.accordion}>Ingrédients :</Typography>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <div className="flex justify-center flex-col">
                  {recipe.ingredientLines.map((ingredient, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index} className="text-red-500 mb-1">
                      {ingredient}
                    </li>
                  ))}
                </div>
              </Typography>
            </CardContent>
          </Collapse>
          <CardActions disableSpacing>
            <CardMedia
              sx={{ width: "Auto" }}
              component="img"
              image="src/assets/ion_list-circle-outline.svg"
              alt="icon"
            />
            <Typography style={style.accordion}>Preparation :</Typography>

            <ExpandMore
              expand={expanded1}
              onClick={handleExpandClick1}
              aria-expanded={expanded1}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded1} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>
                1. Rinse snow peas, trim and remove the strings, if desired.
                Rinse bell peppers, trim and cut into strips. Rinse the bok choy
                and cut into narrow strips. Peel carrots and cut into
                matchsticks. Rinse the sprouts and drain well. Cook noodles
                according to package directions and drain. 2. Heat oil in the
                wok and add the vegetables. Stir-fry for 3-4 minutes. Add the
                noodles, sprinkle with the curry powder and stir-fry for about 1
                minute. Then add the sprouts and season with salt, pepper, sugar
                and lemon juice. Serve garnished with soy sauce, if desired.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}

export default ModalRecipeDetails;
