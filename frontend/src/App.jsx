import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ChooseDiet from "./pages/ChooseDiet";
import Fridge from "./pages/Fridge";
import Favourites from "./pages/Favourites";
import Team from "./pages/Team";
import HomeDescription from "./pages/HomeDescription";
import Home from "./pages/Home";
import { FilterContextProvider } from "./Context/FilterContext";

function App() {
  return (
    <FilterContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-description" element={<HomeDescription />} />
          <Route path="/choose-your-diet" element={<ChooseDiet />} />
          <Route path="/my-fridge" element={<Fridge />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/the-team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </FilterContextProvider>
  );
}

export default App;
