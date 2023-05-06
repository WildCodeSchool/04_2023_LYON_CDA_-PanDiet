import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useCurrentUserContext } from "../Context/userContext";
import { DarkModeContext } from "../Context/DarkModeContext";

function Nav() {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser, token } = useCurrentUserContext();

  const Links = [
    { name: "Home", link: "/" },
    { name: "MyRecipes", link: "/my-Recipes" },
    { name: "Favourites", link: "/favourites" },
    { name: "", link: "/login" },
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
              <NavLink to={item.link} className=" font-bold">
                <p>{item.name}</p>
                {activeLink === item.link && (
                  <div className="w-full  border-b-2  border-[#E58A2F]" />
                )}
              </NavLink>
            </li>
          ))}

          <div className="rounded-full md:mr-5">
            <button type="button" onClick={handleProfileClick}>
              <img
                src="src/assets/photo-avatar-profil.png"
                alt="My profile avatar"
                className="rounded-full object-cover w-9 h-9  border-4 border-violet md:h-14 md:w-14 md:mr-0 md:mt-2 md:-mb-2"
              />
            </button>

            <button type="button" onClick={logOut}>
              LOGOUT
            </button>
          </div>

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
