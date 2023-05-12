import React from "react";
import Home from "./pages/Home";
import MyRecipes from "./pages/MyRecipes";
import Profile from "./pages/Profile";
import Favourites from "./pages/Favourites";
import App from "./App";
import LoginPage from "./pages/LoginPage";

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
        path: "/my-recipes",
        element: <MyRecipes />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/my-profile",
        element: <Profile />,
      },
    ],
  },
];

export default Routes;
