import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

function HomeDescription() {
  const style = {
    span: {
      color: "#DC965A",
      fontWeight: "bold",
      fontSize: "38px",
    },
    barGreen: {
      height: "28px",
      width: "250px",
      borderRadius: "0 20px 20px 0",
      backgroundColor: "#7CB342",
    },
    barOrange: {
      marginLeft: "auto",
      height: "28px",
      width: "250px",
      borderRadius: "20px 0 0 20px",
      backgroundColor: "#DC965A",
    },
  };
  return (
    <div style={{ backgroundColor: "#242325" }}>
      <div style={{ display: "flex", padding: "2% 7% 10% 7%" }}>
        <h2 style={{ color: "#F3F3F3", margin: "0 auto", fontSize: "34" }}>
          <span style={style.span}>P</span>an
          <span style={style.span}>D</span>iet
        </h2>
      </div>
      <div style={style.barGreen} />
      <p style={{ color: "#F3F3F3", fontSize: "20px", padding: "11% 10%" }}>
        Remplissez vos critères pour obtenir des recettes saines et équilibrées
        adaptées à vos préférences et à vos besoins nutritionnels.
      </p>
      <div style={style.barOrange} />
      <p style={{ color: "#F3F3F3", fontSize: "20px", padding: "11% 10%" }}>
        Utiliser aussi notre fonction "Mon Frigo" pour indiquer les ingrédients
        que vous avez sous la main, afin de recevoir des suggestions de recettes
        qui utilisent ces ingrédients.
      </p>
      <NavLink style={{ display: "flex" }} to="/choose-your-diet">
        <Button
          sx={{
            height: "55px",
            width: "165px",
            margin: "9% auto",
            bgcolor: "#F3F3F3",
            color: "#242325",
          }}
          variant="contained"
        >
          Continuer
        </Button>
      </NavLink>
    </div>
  );
}

export default HomeDescription;
