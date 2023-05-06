import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "./App.css";
import { FilterContextProvider } from "./Context/FilterContext";
import { DarkModeContext } from "./Context/DarkModeContext";
import NavBar from "./components/Nav";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <FilterContextProvider>
      <NavBar />
      <main className={`${darkMode ? "dark" : "light"}`}>
        <Outlet />
      </main>
      <ToastContainer />
    </FilterContextProvider>
  );
}

export default App;
