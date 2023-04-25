import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ModalRecipeDetails from "../ModalRecipeDetail";

function CardRecipe({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          image={item.recipe.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.recipe.label}
          </Typography>
        </CardContent>
      </Card>
      <ModalRecipeDetails
        handleOpen={handleOpen}
        recipe={item.recipe}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}

export default CardRecipe;
