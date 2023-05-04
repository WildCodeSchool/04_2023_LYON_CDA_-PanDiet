import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { DarkModeContext } from "../Context/DarkModeContext";

function Nav({ handleClickNavigate }) {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  const Links = [
    { name: "Home", link: "/" },
    { name: "MyRecipes", link: "/my-Recipes" },
    { name: "Favourites", link: "/favourites" },
  ];

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
  }, [location]);
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);

  return (
    <div className="flex justify-center">
      <div
        className={`px-5 items-center mt-2 md:mt-none z-10 fixed top-0 
        shadow-md  w-full 
      md:shadow-none md:relative`}
      >
        <ul className="flex items-center justify-between rounded-md md:pr-20">
          <h2 className="text-3xl hidden font-bold text-[#E58A2F] md:block">
            NUTRIDIET
          </h2>
          {Links.map((item) => (
            <li key={item.name} className="text-sm my-2">
              <NavLink
                to={item.link}
                className=" font-bold"
                onClick={() => handleClickNavigate(item.link)}
              >
                <p>{item.name}</p>
                {activeLink === item.link && (
                  <div className="w-full  border-b-2  border-[#E58A2F]" />
                )}
              </NavLink>
            </li>
          ))}
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => toggleDarkMode()}
            color="inherit"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
