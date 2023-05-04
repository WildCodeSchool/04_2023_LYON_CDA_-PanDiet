/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box, IconButton } from "@mui/material";
import Home from "./Home";
import MyRecipes from "./MyRecipes";
import Favourites from "./Favourites";
import { DarkModeContext } from "../Context/DarkModeContext";

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
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function NavigateWebSite() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            boxShadow: 3,
            display: "flex",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab sx={{ color: "#FF9A62" }} label="Home" {...a11yProps(0)} />
            <Tab
              sx={{ color: "#FF9A62" }}
              label="MyRecipes"
              {...a11yProps(1)}
            />
            <Tab
              sx={{ color: "#FF9A62" }}
              label="Favourites"
              {...a11yProps(2)}
            />
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => toggleDarkMode()}
              color="inherit"
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MyRecipes />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Favourites />
        </TabPanel>
      </Box>
    </div>
  );
}

export default NavigateWebSite;
