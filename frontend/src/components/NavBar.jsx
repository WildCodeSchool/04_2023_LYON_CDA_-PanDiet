import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Nav({ setActiveLink, activeLink, handleClickNavigate }) {
  const location = useLocation();

  const Links = [
    { name: "Home", link: "/" },
    { name: "MyFridge", link: "/my-fridge" },
    { name: "Favourites", link: "/favourites" },
    { name: "", link: "/login" },
  ];

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
  }, [location]);

  return (
    <div className="flex justify-center">
      <div className="w-[95vw] items-center fixed bottom-0 rounded-full bg-white md:w-full md:rounded-none md:relative ">
        <ul className="flex items-center justify-between rounded-md mx-auto ">
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
