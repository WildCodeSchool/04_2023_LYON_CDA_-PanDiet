import React from "react";
import { NavLink } from "react-router-dom";
import next from "../assets/next.png";

function WelcomePage() {
  return (
    <div className="bg-welcomePage h-[100vh] bg-cover">
      <div className="mx-auto ">
        <h1 className="text-center text-white text-4xl font-bold">
          <span className="text-[#FF9A62]">N</span>utri
          <span className="text-[#FF9A62]">D</span>iet
        </h1>
        <p className="text-center py-3  text-white text-xl font-bold">
          Pour une meilleure <br /> nutrition
        </p>
        <NavLink to="/home" className="w-full">
          <img className="mx-auto" src={next} alt="bouton next" />
        </NavLink>
      </div>
    </div>
  );
}

export default WelcomePage;
