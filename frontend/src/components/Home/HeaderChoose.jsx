/* eslint-disable react/self-closing-comp */
import React from "react";
import headerChoose from "../../assets/home/headerChoose.jpg";

function HeaderChoose() {
  return (
    <div>
      <div className="relative">
        <img
          src={headerChoose}
          alt=""
          className=" rounded-2xl h-[20vh] mx-auto w-full md:h-[40vh]"
        />
        <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-transparent to-orange-400 md:w-full"></div>
      </div>
    </div>
  );
}

export default HeaderChoose;
