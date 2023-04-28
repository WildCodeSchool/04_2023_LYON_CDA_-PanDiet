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
    { name: "MyFridge", link: "/my-fridge", imgSrc: Fridge },
    { name: "Favourites", link: "/favourites", imgSrc: Favourite },
  ];

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
  }, [location]);

  return (
    <div className="flex justify-center">
      <div className="w-[95vw] items-center fixed bottom-0 rounded-full md:w-full md:rounded-none md:relative mb-2 md:mb-0">
        <ul className="flex items-center justify-between rounded-md pr-20">
          <h2 className="text-3xl font-bold text-[#E58A2F]">NUTRIDIET</h2>
          {Links.map((item) => (
            <li key={item.name} className="text-sm my-2">
              <NavLink
                to={item.link}
                className="text-black font-bold"
                onClick={() => handleClickNavigate(item.name, item.link)}
              >
                {item.name && <p>{item.name}</p>}
                {activeLink === item.link && (
                  <div className="w-full  border-b-2 mt-1 border-[#E58A2F]" />
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
