import React from "react";
import Home from "./pages/Home";
import MyRecipes from "./pages/MyRecipes";
import Favourites from "./pages/Favourites";
import App from "./App";

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipes",
        element: <MyRecipes />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
    ],
  },
];

export default Routes;
