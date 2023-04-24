import React from "react";
import Search from "../Search";
import arrowDown from "../../assets/arrowDown.png";

function Header({ setFilterSearch, axiosData }) {
  return (
    <div className="md:h-[93vh] md:bg-black opacity-90 md:bg-homePage  md:bg-cover md:mb-3">
      <div className="my-auto md:h-full px-4 md:px-0 md:flex md:flex-col">
        <h2 className="md:text-center md:text-white md:m-auto md:p-10 md:bg-black md:rounded-xl md:w-max md:bg-opacity-70 md:inline-block">
          Hello, <br />{" "}
          <span className="text-2xl font-bold">
            What would you like <br />
            to cook today ?
          </span>
          <Search axiosData={axiosData} setFilterSearch={setFilterSearch} />
        </h2>
        <div className="hidden md:block md:mx-auto md:pb-1 bounce">
          <img className=" md:block md:w-32" src={arrowDown} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
