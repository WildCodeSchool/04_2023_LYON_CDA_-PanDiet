/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ModalRecipeDetail from "./ModalRecipeDetail";

function NewCardRecipe({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div>
      <div
        style={{
          height: "1px",
          backgroundColor: "#7CB342",
          margin: "5% auto",
          width: "70%",
        }}
      />
      <Card
        sx={{ maxWidth: 345, margin: "0 auto" }}
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={item.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography>
            <p>Temps : {item.time}min</p>
            <p>{item.mealType}</p>
          </Typography>
          <Typography variant="h5" component="div">
            <ul>
              {item.ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <ModalRecipeDetail
        handleClose={handleClose}
        handleOpen={handleOpen}
        recipe={item}
      />
    </div>
  );
}

export default NewCardRecipe;
