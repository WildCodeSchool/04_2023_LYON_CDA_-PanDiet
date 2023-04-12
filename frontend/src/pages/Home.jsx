import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import pandaBamboo from "../assets/pandaBamboo.png";
import bamboo from "../assets/bamboo.svg";
import "../App.css";

const style = {
  span: {
    color: "#DC965A",
    fontWeight: "bold",
  },
  p: {
    color: "#F3F3F3",
    fontSize: "36px",
    textAlign: "center",
    margin: "0 auto",
  },
  button: {
    height: "55px",
    width: "165px",
    margin: "100% auto 0 auto",
    bgcolor: "#F3F3F3",
    color: "#242325",
    textDecoration: "none",
  },
  containerButton: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    paddingRight: "5%",
  },
};
function Home() {
  return (
    <div style={{ backgroundColor: "#242325" }}>
      <div style={{ display: "flex" }}>
        <img style={{ margin: "0 auto" }} src={pandaBamboo} alt="" />
      </div>
      <div style={{ display: "flex", padding: "6% 0 20% 0" }}>
        <p style={style.p}>
          Bienvenue <br /> sur <br />
          <span style={style.span}>P</span>an <span style={style.span}>D</span>
          iet
        </p>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "-12%",
          justifyContent: "space-between",
        }}
      >
        <img style={{ width: "18vh" }} src={bamboo} alt="" />
        <div style={style.containerButton}>
          <NavLink to="/home-description">
            <Button sx={style.button} variant="contained">
              Continuer
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
