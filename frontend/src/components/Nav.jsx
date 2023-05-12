import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Avatar from "../assets/photo-avatar-profil.png";
import { useCurrentUserContext } from "../Context/userContext";
import { DarkModeContext } from "../Context/DarkModeContext";
import LogOut from "../assets/deconnexion.png";

function Nav() {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser, token } = useCurrentUserContext();

  const Links = [
    { name: "Home", link: "/" },
    { name: "My recipes", link: "/my-recipes" },
    { name: "Favourites", link: "/favourites" },
  ];

  const handleProfileClick = () => {
    if (token === "") {
      navigate("/login");
    } else {
      navigate("/my-profile");
    }
  };

  const logOut = () => {
    localStorage.clear();
    setUser({});
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
  }, [location]);
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);

  return (
    <div className="flex justify-center">
      <div
        className={`w-full items-center  md:pb-4 top-0 px-3 md:px-10  shadow-md md:shadow-none relative ${
          darkMode ? "dark" : "light"
        }`}
      >
        <ul className="flex items-center md:px-10 justify-between rounded-md md:pr-20">
          <h2
            className={`text-3xl hidden font-bold text-[#E58A2F] md:block ${
              darkMode ? "first-letter:text-white" : "first-letter:text-black"
            }`}
          >
            NUTRIDIET
          </h2>
          {Links.map((item) => (
            <li key={item.name} className="text-sm my-2">
              <NavLink to={item.link} className=" font-bold">
                <p>{item.name}</p>
                {activeLink === item.link && (
                  <div className="w-full  border-b-2  border-[#E58A2F]" />
                )}
              </NavLink>
            </li>
          ))}
          <IconButton onClick={() => toggleDarkMode()} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <div className=" flex items-center rounded-full ">
            <button type="button" onClick={handleProfileClick}>
              <img
                src={token === "" ? Avatar : user.avatar}
                alt="My profile avatar"
                className="rounded-full object-cover w-9 h-9 border-4 border-violet md:h-9 md:w-9 md:mr-0 md:-mb-2"
              />
            </button>
            {token === "" ? (
              ""
            ) : (
              <button type="button" onClick={logOut}>
                <img
                  src={LogOut}
                  alt="Log out"
                  className="h-[25px] md:mt-2 ml-4 w-[25px]"
                />
              </button>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
