import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import Backdrop from "@mui/material/Backdrop";
import { Box, Fade, Modal } from "@mui/material";
import ModalePostRecipe from "./components/MyRecipes/ModalePostRecipe";
import { FilterContextProvider } from "./Context/FilterContext";
import Home from "./pages/Home";
import MyRecipes from "./pages/MyRecipes";
import Favourites from "./pages/Favourites";
import NavBar from "./components/NavBar";
import iconAdd from "./assets/iconAdd.png";
import Footer from "./components/Footer";

const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: " ",
        },
      },
    },
  },
});

function App() {
  const [recipes, setRecipes] = useState([]);
  const [reaload, setReload] = useState(true);
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ThemeProvider theme={theme}>
      <FilterContextProvider>
        <div className="md:px-20">
          <NavBar
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            handleOpen={handleOpen}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/my-fridge"
              element={<MyRecipes reaload={reaload} />}
            />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
        <Footer />
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box>
              <ModalePostRecipe
                reaload={reaload}
                recipes={recipes}
                handleClose={handleClose}
                setRecipes={setRecipes}
                setOpen={setOpen}
                setReload={setReload}
              />
            </Box>
          </Fade>
        </Modal>
        <button
          onClick={handleOpen}
          type="button"
          className="fixed hidden right-10 bottom-10  h-20 w-20 bg-white rounded-full "
        >
          <img src={iconAdd} alt="" />
        </button>
      </FilterContextProvider>
    </ThemeProvider>
  );
}

export default App;
