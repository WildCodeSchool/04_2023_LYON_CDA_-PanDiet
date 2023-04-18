import React from "react";
import "../App.css";
import "../components/Home/css/Home.css";
import HeaderHome from "../components/Home/HeaderHome";
import BodyHome from "../components/Home/BodyHome";
import HomeDescription from "./HomeDescription";

function Home() {
  return (
    <div className="containerHome_HomeDescription">
      <div className="containerHome">
        <HeaderHome />
        <BodyHome />
      </div>
      <div className="divContainerHomeDescription">
        <HomeDescription />
      </div>
    </div>
  );
}

export default Home;
