/* eslint-disable react/no-array-index-key */
import React from "react";
import { NavLink } from "react-router-dom";
import iconMenuNav from "../assets/navbar/iconMenuNav.png";
import iconHomeNav from "../assets/navbar/iconHomeNav.png";
import iconFridgeNav from "../assets/navbar/iconFridgeNav.png";
import iconFavouritesNav from "../assets/navbar/iconFavouritesNav.png";

function Nav({ setNamePage }) {
  const Links = [
    { name: "Home", link: "/home", imgSrc: iconHomeNav },
    {
      name: "MyDiet",
      link: "/choose-your-diet",
      imgSrc: iconFridgeNav,
    },
    { name: "MyFridge", link: "/", imgSrc: iconMenuNav },
    { name: "Likes", link: "/", imgSrc: iconFavouritesNav },
  ];
  return (
    <div
      className="shadow-md w-full fixed bg-black bottom-0 border border-t-black rounded-2xl
     md:relative md:border-b-black"
    >
      <ul className="flex items-center justify-around">
        {Links.map((item, index) => (
          <li key={index} className="text-sm my-2">
            <NavLink
              to={item.link}
              onClick={() => setNamePage(item.name)}
              className="text-white"
            >
              {item.imgSrc && (
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="w-10 h-10 mx-auto"
                />
              )}

              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
