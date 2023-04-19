/* eslint-disable camelcase */
import React, { useState } from "react";
import axios from "axios";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "../App.css";

// import desserts from "../assets/desserts.jpg";
// import meals from "../assets/repas.jpeg";
// import aperitifs from "../assets/apero.jpg";

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
    position: "relative",
  },
  cards: {
    minWidth: 275,
    backgroundColor: "#242325",
    margin: "5% auto",
    width: "70%",
  },
};

function Fridge() {
  const [recipes, setRecipes] = useState([]);
  const [reciepeType, setReciepeType] = useState("");
  const url = "https://api.edamam.com/api/recipes/v2";
  const app_id = "app_id=f4034abb";
  const app_key = "app_key=44fe06272cb8fed56c9622f7031624c7";
  const type = "type=public";

  const getReciepe = (e) => {
    const URL_Final = `${url}?${app_id}&${app_key}&${type}&mealType=${reciepeType}`;
    setReciepeType(e);
    axios.get({ URL_Final }).then((response) => {
      setRecipes(response);
      console.warn(recipes);
    });
  };

  return (
    <div style={style.global}>
      <Typography variant="h3" sx={style.title}>
        My Fridge
      </Typography>

      <Card sx={style.cards}>
        <CardActionArea id="snack">
          <CardContent>
            <CardMedia
              sx={style.cardMedia}
              component="img"
              height="140"
              // image={aperitifs}
              alt="Snack"
            />
            <button
              onClick={(e) => getReciepe(e.target.innerHTML)}
              type="button"
              value="Snack"
              style={style.cardText}
            >
              Snack
            </button>
          </CardContent>
        </CardActionArea>

        <CardActionArea id="meals">
          <CardContent>
            <div style={{ position: "relative" }}>
              <CardMedia
                sx={style.cardMedia}
                component="img"
                height="140"
                // image={meals}
                alt="meals"
              />
              <div style={style.cardText}>Meals</div>
            </div>
          </CardContent>
        </CardActionArea>

        <CardActionArea>
          <CardContent>
            <div style={{ position: "relative" }} id="desserts">
              <CardMedia
                sx={style.cardMedia}
                component="img"
                height="140"
                // image={desserts}
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
