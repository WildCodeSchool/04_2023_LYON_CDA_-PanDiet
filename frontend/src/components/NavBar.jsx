import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import homeNav from "../assets/navbar/home-1.png";
import Fridge from "../assets/navbar/refrigerateur-1.png";
import Favourite from "../assets/navbar/star.png";
import Foods from "../assets/navbar/nourriture-saine.png";

function Nav({ setActiveLink, activeLink, handleClickNavigate }) {
  const location = useLocation();

  const Links = [
    { name: "Home", link: "/home", imgSrc: homeNav },
    { name: "MyDiet", link: "/choose-your-diet", imgSrc: Foods },
    { name: "MyFridge", link: "/", imgSrc: Fridge },
    { name: "Favourites", link: "/favourites", imgSrc: Favourite },
  ];

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
  }, [location]);

  return (
    <div className="flex justify-center">
      <div className="w-[95vw] fixed bottom-0 bg-gray-900 rounded-full md:w-full md:rounded-none md:relative mb-2 md:mb-0">
        <ul className="flex items-center justify-around rounded-md">
          {Links.map((item) => (
            <li key={item.name} className="text-sm my-2">
              <NavLink
                to={item.link}
                className="text-black font-bold"
                onClick={() => handleClickNavigate(item.name, item.link)}
              >
                {item.imgSrc && (
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className={`w-10 h-10 mx-auto ${
                      activeLink === item.link ? "opacity-100" : "opacity-50"
                    } transition-opacity duration-200 ease-in-out cursor-pointer`}
                  />
                )}
                {activeLink === item.link && (
                  <div className="w-full  border-b-4 mt-1 border-[#65a30d]" />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
