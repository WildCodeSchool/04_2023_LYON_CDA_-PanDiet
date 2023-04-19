import React from "react";
import { NavLink } from "react-router-dom";
import bamboo from "../../assets/bamboo.svg";
import "./css/BodyHome.css";

const style = {
  containerButton: {
    display: "flex",
    alignItems: "center",
    paddingRight: "5%",
  },
};
function BodyHome() {
  return (
    <div>
      <div style={style.containerButton}>
        <img className="bamboo" src={bamboo} alt="" />
        <NavLink to="/home-description">
          <button className="button" type="button">
            Continuer
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default BodyHome;
