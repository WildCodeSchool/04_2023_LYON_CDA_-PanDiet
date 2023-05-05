/* eslint-disable react/no-array-index-key */
import { NavLink } from "react-router-dom";

function Nav() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Recipes", link: "/recipes" },
    { name: "Favourites", link: "/favourites" },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full items-center fixed top-0 px-10  shadow-md bg-white md:w-full md:shadow-none md:relative ">
        <ul className="flex items-center px-10 justify-between rounded-md md:pr-20">
          <h2 className="text-3xl hidden font-bold text-[#E58A2F] md:block first-letter:text-black">
            NUTRIDIET
          </h2>
          {Links.map((item, index) => (
            <li key={index} className="text-sm my-2">
              <NavLink to={item.link}>
                <p className="text-black font-bold">{item.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
