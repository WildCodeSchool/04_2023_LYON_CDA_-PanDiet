import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../App.css";

import desserts from "../assets/desserts.jpg";
import meals from "../assets/repas.jpeg";
import aperitifs from "../assets/apero.jpg";

const style = {
  global: {
    backgroundColor: "#242325",
    height: "100vh",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#242325",
    fontSize: 35,
  },
  cardText: {
    position: "absolute",
    color: "white",
    top: 45,
    left: "50%",
    transform: "translateX(-50%)",
    fontWeight: "bold",
    fontSize: 35,
  },
  cardMedia: {
    opacity: 0.3,
    borderRadius: 2.5,
  },
  cards: {
    minWidth: 275,
    backgroundColor: "#242325",
    margin: "5% auto",
    width: "70%",
  },
};

function Fridge() {
  return (
    <div style={style.global}>
      <Typography variant="h3" sx={style.title}>
        My Fridge
      </Typography>

      <Card sx={style.cards}>
        <CardActionArea>
          <CardContent>
            <div style={{ position: "relative" }}>
              <CardMedia
                sx={style.cardMedia}
                component="img"
                height="140"
                image={aperitifs}
                alt="aperitifs"
              />
              <div style={style.cardText}>Aperitifs</div>
            </div>
          </CardContent>
        </CardActionArea>

        <CardActionArea>
          <CardContent>
            <div style={{ position: "relative" }}>
              <CardMedia
                sx={style.cardMedia}
                component="img"
                height="140"
                image={meals}
                alt="meals"
              />
              <div style={style.cardText}>Meals</div>
            </div>
          </CardContent>
        </CardActionArea>

        <CardActionArea>
          <CardContent>
            <div style={{ position: "relative" }}>
              <CardMedia
                sx={style.cardMedia}
                component="img"
                height="140"
                image={desserts}
                alt="desserts"
              />
              <div style={style.cardText}>Desserts</div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Fridge;
