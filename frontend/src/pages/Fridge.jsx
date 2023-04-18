import React, { useState } from "react";
import axios from "axios";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "../App.css";

import TeaTime from "../assets/TeaTime.jpg";
import Dinner from "../assets/Dinner.jpg";
import Breakfast from "../assets/Breakfast.jpg";
import Snack from "../assets/Snack.jpg";

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
  const categories = [
    { id: 1, name: "breakfast", img: Breakfast },
    { id: 2, name: "snack", img: Snack },
    { id: 3, name: "teaTime", img: TeaTime },
    { id: 4, name: "dinner", img: Dinner },
  ];
  // eslint-disable-next-line no-unused-vars
  const [recipes, setRecipes] = useState([]);
  const [reciepeType, setReciepeType] = useState("");
  const url = "https://api.edamam.com/api/recipes/v2";
  const appId = "app_id=f4034abb";
  const appKey = "app_key=44fe06272cb8fed56c9622f7031624c7";
  const type = "type=public";

  const getReciepe = (e) => {
    setReciepeType(e);
    axios
      .get(`${url}?${appId}&${appKey}&${type}&mealType=${reciepeType}`)
      .then((response) => {
        setRecipes(response.data.hits);
        // console.warn(response.data.hits);
      });
  };

  return (
    <div style={style.global}>
      <Typography variant="h3" sx={style.title}>
        My Fridge
      </Typography>

      <Card sx={style.cards}>
        {categories.map((categorie) => (
          <CardActionArea
            key={categorie.id}
            onClick={() => getReciepe(categorie.name)}
          >
            <CardContent>
              <CardMedia
                sx={style.cardMedia}
                component="img"
                height="140"
                image={categorie.img}
                alt={categorie.name}
              />
              <div style={style.cardText}>{categorie.name}</div>
            </CardContent>
          </CardActionArea>
        ))}
      </Card>
    </div>
  );
}

export default Fridge;
