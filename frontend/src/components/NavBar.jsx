import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

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

  return (
    <div className="flex justify-center">
      <div className="w-[95vw] items-center fixed bottom-0 mb-5 rounded-full border border-black shadow-md bg-white md:w-full md:rounded-none md:border-none md:shadow-none md:relative ">
        <ul className="flex items-center px-10 justify-between rounded-md md:pr-20">
          <h2 className="text-3xl hidden font-bold text-[#E58A2F] md:block">
            NUTRIDIET
          </h2>
          {Links.map((item) => (
            <li key={item.name} className="text-sm my-2">
              <NavLink
                to={item.link}
                className="text-black font-bold"
                onClick={() => handleClickNavigate(item.link)}
              >
                <p>{item.name}</p>
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
