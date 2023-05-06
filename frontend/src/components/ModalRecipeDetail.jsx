/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-self-compare */
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import useLocalStorage from "./LocalStorage/UseLocalStorage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ModalRecipeDetails({ item, open, handleClose }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isFilled, setIsFilled] = useState(false);
  const [favouriteRecipes, setFavouriteRecipes] = useLocalStorage(
    "favouriteRecipes",
    []
  );
  const handleClick = () => {
    setIsFilled(!isFilled);

    if (!isFilled) {
      setFavouriteRecipes([...favouriteRecipes, item]);
    } else {
      setFavouriteRecipes(
        favouriteRecipes.filter((recipes) => recipes.uri !== recipes.uri)
      );
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="absolute top-1/2 left-1/2 w-[90vw] transform -translate-x-1/2
           -translate-y-1/2 md:w-[1000px] md:h-[600px]
           border-2  shadow-md block md:flex bg-white"
        >
          <img
            className=" w-full md:w-[496px] md:h-[596px]"
            src={item.image}
            alt=""
          />
          <div className=" p-7 md:flex mx-auto md:p-10 flex-col md:min-w-[500px]">
            <h3 className="text-xl w-full text-bold md:text-3xl pb-4 text-center">
              {item.label}
            </h3>
            <hr />
            <div className="flex py-2 justify-around md:py-5">
              <p>{item.mealType}</p>
              <p>{item.cuisineType}</p>
              <p>{item.dishType}</p>
            </div>
            <hr />
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Ingredients" {...a11yProps(0)} />
                  <Tab label="Total Nutrients" {...a11yProps(1)} />
                  <Tab label="Links" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel
                component="div"
                sx={{ overflow: "auto", height: "100px" }}
                value={value}
                index={0}
              >
                <ul className="h-32 md:h-60 overflow-auto ">
                  {item.ingredients.map((itemIngredient) => (
                    <li className="flex my-1 ">
                      <img
                        className="h-6 rounded-md mr-2 "
                        src={itemIngredient.image}
                        alt=""
                      />
                      <li>{itemIngredient.text}</li>
                    </li>
                  ))}
                </ul>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="h-32 md:h-56 overflow-auto ">
                  <h2 className="text-orange-500 text-xl">
                    {item.totalNutrients.FAT.label}
                  </h2>
                  <div className="pl-4">
                    <div className="flex">
                      <p className="p-1">{item.totalNutrients.FAPU.label}</p>
                      <p className="p-1">{`${
                        (item.totalNutrients.FAPU.quantity * 100).toFixed(0) /
                        100
                      }`}</p>
                      <p className="p-1">{item.totalNutrients.FAPU.unit}</p>
                    </div>
                    <div className="flex">
                      <p className="p-1">{item.totalNutrients.FASAT.label}</p>
                      <p className="p-1">{`${
                        (item.totalNutrients.FASAT.quantity * 100).toFixed(0) /
                        100
                      }`}</p>
                      <p className="p-1">{item.totalNutrients.FASAT.unit}</p>
                    </div>
                    <div className="flex">
                      <p className="p-1">{item.totalNutrients.FAMS.label}</p>
                      <p className="p-1">{`${
                        (item.totalNutrients.FAMS.quantity * 100).toFixed(0) /
                        100
                      }`}</p>
                      <p className="p-1">{item.totalNutrients.FAMS.unit}</p>
                    </div>
                    <div className="flex">
                      <p className="p-1">{item.totalNutrients.FATRN.label}</p>
                      <p className="p-1">{`${
                        (item.totalNutrients.FATRN.quantity * 100).toFixed(0) /
                        100
                      }`}</p>
                      <p className="p-1">{item.totalNutrients.FATRN.unit}</p>
                    </div>
                  </div>
                  <h2 className="text-orange-500 text-xl">
                    {item.totalNutrients.PROCNT.label}
                  </h2>
                  <div className="pl-4">
                    <div className="flex">
                      <p className="p-1">{item.totalNutrients.CHOLE.label}</p>
                      <p className="p-1">{`${
                        (item.totalNutrients.CHOLE.quantity * 100).toFixed(0) /
                        100
                      }`}</p>
                      <p className="p-1">{item.totalNutrients.CHOLE.unit}</p>
                    </div>
                    <div className="flex">
                      <p className="p-1">{item.totalNutrients.NA.label}</p>
                      <p className="p-1">{`${
                        (item.totalNutrients.NA.quantity * 100).toFixed(0) / 100
                      }`}</p>
                      <p className="p-1">{item.totalNutrients.NA.unit}</p>
                    </div>
                    <div className="flex">
                      <p className="p-1">{item.totalNutrients.CA.label}</p>
                      <p className="p-1">{`${
                        (item.totalNutrients.CA.quantity * 100).toFixed(0) / 100
                      }`}</p>
                      <p className="p-1">{item.totalNutrients.CA.unit}</p>
                    </div>
                    <div className="flex">
                      <p className="p-1">{item.totalNutrients.MG.label}</p>
                      <p className="p-1">{`${
                        (item.totalNutrients.MG.quantity * 100).toFixed(0) / 100
                      }`}</p>
                      <p className="p-1">{item.totalNutrients.MG.unit}</p>
                    </div>
                    <div className="flex">
                      <p className="p-1">{item.totalNutrients.K.label}</p>
                      <p className="p-1">{`${
                        (item.totalNutrients.K.quantity * 100).toFixed(0) / 100
                      }`}</p>
                      <p className="p-1">{item.totalNutrients.K.unit}</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className="flex flex-col">
                  <a
                    className="text-blue-500 underline"
                    href={item.shareAs}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link to recipe on Edamam
                  </a>
                  <a
                    className="text-blue-500 underline"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link to recipe on original website
                  </a>
                </div>
              </TabPanel>
            </Box>
            <div className="flex justify-between md:justify-around">
              <IconButton
                onClick={handleClick}
                color={isFilled ? "error" : "inherit"}
                disableRipple
              >
                {isFilled ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <button type="button" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalRecipeDetails;
