/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import headerChoose from "../../assets/home/headerChoose.jpg";

function HeaderChoose() {
  return (
    <div className="mt-4">
      <div className="relative">
        <img
          src={headerChoose}
          alt="Votre photo"
          className=" rounded-2xl h-[20vh] mx-auto w-4/5 md:w-full md:h-[40vh]"
        />
        <div className="absolute rounded-2xl w-[90%] inset-0 bg-gradient-to-r from-transparent to-orange-400 md:w-full"></div>
      </div>
    </div>
  );
}

export default HeaderChoose;
