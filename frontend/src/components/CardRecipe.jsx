/* eslint-disable react/self-closing-comp */
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import gateauChocolat from "../assets/gateauChocolat.jpeg";

function CardRecipe() {
  return (
    <div>
      <div
        style={{
          height: "1px",
          backgroundColor: "#7CB342",
          margin: "5% auto",
          width: "70%",
        }}
      ></div>

      <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={gateauChocolat}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            TITLE
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardRecipe;
