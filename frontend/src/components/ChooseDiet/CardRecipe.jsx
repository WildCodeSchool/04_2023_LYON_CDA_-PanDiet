import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function CardRecipe({ item }) {
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
      <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
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
    </div>
  );
}

export default CardRecipe;
