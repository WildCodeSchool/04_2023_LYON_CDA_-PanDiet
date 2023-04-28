/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import headerChoose from "../../assets/home/headerChoose.jpg";

function HeaderChoose() {
  return (
    <div>
      <div className="relative">
        <img
          src={headerChoose}
          alt="Votre photo"
          className=" rounded-2xl w-full h-[40vh]"
        />
        <div className="absolute rounded-2xl  inset-0 bg-gradient-to-r from-transparent to-orange-400"></div>
      </div>
    </div>
  );
}

export default HeaderChoose;
