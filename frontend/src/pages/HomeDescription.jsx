import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import HeaderDescription from "../components/HomeDescription/HeaderDescription";
import BodyDescription from "../components/HomeDescription/BodyDescription";
import "../components/HomeDescription/css/HomeDescription.css";

const style = {
  span: {
    color: "#DC965A",
    fontWeight: "bold",
    fontSize: "38px",
  },
  button: {
    height: "55px",
    width: "165px",
    margin: "10px auto 0 auto",
    bgcolor: "#F3F3F3",
    color: "#242325",
  },
  hrOrange: {
    marginLeft: "auto",
    height: "28px",
    width: "250px",
    borderRadius: "20px 0 0 20px",
    backgroundColor: "#DC965A",
  },
};
function HomeDescription() {
  return (
    <div className="containerHomeDescription">
      <div>
        <h2 style={{ color: "#F3F3F3", margin: "0 auto", fontSize: "34" }}>
          <span style={style.span}>P</span>an
          <span style={style.span}>D</span>iet
        </h2>
      </div>
      <div className="container_Header_body">
        <HeaderDescription />
        <BodyDescription />
      </div>
      <div className="footerHomeDescription">
        <hr style={style.hrOrange} />
        <NavLink style={{ display: "flex" }} to="/choose-your-diet">
          <Button sx={style.button} variant="contained">
            Continue
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default HomeDescription;
