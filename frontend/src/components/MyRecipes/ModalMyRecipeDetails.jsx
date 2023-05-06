/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-self-compare */
import React from "react";
import Box from "@mui/material/Box";
import { Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import RecipePDFGenerator from "./RecipePDFGenerator";

const { VITE_BACKEND_URL } = import.meta.env;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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
function ModalMyRecipeDetails({
  recipe,
  openRecipeCard,
  handleCloseRecipeCard,
  handleDelete,
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const handleOpenConfirm = () => setOpenConfirm(true);
  const handleCloseConfirm = () => setOpenConfirm(false);
  return (
    <div>
      <Modal
        open={openRecipeCard}
        onClose={handleCloseRecipeCard}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          class="absolute top-1/2 left-1/2 w-[90vw] transform -translate-x-1/2
           -translate-y-1/2 h-[90vh] md:w-[80vw] md:h-[94vh]
           border-2  shadow-md block md:flex bg-white"
        >
          <img
            className=" w-full h-[30vh] md:w-[100vw] md:mx-5 md:h-[60vh] my-auto rounded-lg shadow-md"
            src={`${VITE_BACKEND_URL}/uploads/${recipe.image}`}
            alt=""
          />
          <div className=" w-full md:border-l border-black  md:flex flex-col md:mx-auto md:min-w-[30vw]">
            <h3 className="text-xl w-full text-bold md:text-3xl py-4 text-center">
              {recipe.name}
            </h3>
            <hr />
            <div className="flex md:px-1 justify-center py-3 md:py-5 border-y border-black">
              <p className="md:border-r md:border-black px-1 md:px-0  md:pr-6 md:uppercase">
                🍴 {recipe.mealType}
              </p>
              <p className="md:border-r md:border-black px-1 md:px-0 md:pr-6 md:uppercase">
                🌎 {recipe.cuisineType}
              </p>
              <p>🕝 {recipe.cook_time}min</p>
            </div>
            <hr />
            <div className="min-h-[30vh] md:min-h-[55vh] border-b border-black ">
              <Box>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <Tabs
                    sx={{ margin: "0 auto" }}
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                      }}
                      label="Ingredients"
                      {...a11yProps(0)}
                    />
                    <Tab
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                      }}
                      label="Instructions"
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </Box>
                <TabPanel component="div" value={value} index={0}>
                  <ul className="max-h-[19vh] md:max-h-[40vh] overflow-auto">
                    {recipe.ingredients.map((itemIngredient) => (
                      <li className="flex my-1 ">
                        <li>{itemIngredient}</li>
                      </li>
                    ))}
                  </ul>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="max-h-[19vh] md:max-h-[40vh] overflow-auto ">
                    <ul className="max-h-[19vh] md:max-h-[40vh] overflow-auto">
                      {recipe.instructions.map((instruction) => (
                        <li className="mb-2">{instruction}</li>
                      ))}
                    </ul>
                  </div>
                </TabPanel>
              </Box>
            </div>
            <div className="flex pt-5 items-center md:pt-0 justify-center my-auto">
              <div>
                <RecipePDFGenerator recipe={recipe} />
              </div>
              <button
                onClick={handleOpenConfirm}
                type="button"
                className="bg-red-500  hover:bg-red-700 text-white font-bold mx-5 px-5 py-2 rounded"
              >
                Delete
              </button>
              <Modal
                open={openConfirm}
                onClose={handleCloseConfirm}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Are you sure you want to delete this recipe?
                  </Typography>
                  <div className="flex justify-center ">
                    <button
                      className="bg-green-500  hover:bg-green-700 text-white font-bold mx-5 px-5 py-2 rounded"
                      type="button"
                      onClick={() => handleDelete(recipe.id, recipe.name)}
                    >
                      Yes
                    </button>
                    <button
                      onClick={handleCloseConfirm}
                      type="button"
                      className="bg-red-500  hover:bg-red-700 text-white font-bold mx-5 px-5 py-2 rounded"
                    >
                      Close
                    </button>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalMyRecipeDetails;
