/*  eslint-disable react/prop-types */
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="up" ref={ref} {...props} />;
});
const healthLabels = {
  "alcohol-cocktail": "Alcohol Cocktail",
  "alcohol-free": "Alcohol-Free",
  "celery-free": "Celery-Free",
  "crustacean-free": "Crustacean-Free",
  "dairy-free": "Dairy-Free",
  DASH: "DASH",
  "egg-free": "Egg-Free",
  "fish-free": "Fish-Free",
  "fodmap-free": "FODMAP-Free",
  "gluten-free": "Gluten-Free",
  "immuno-supportive": "Immuno-Supportive",
  "keto-friendly": "Keto-Friendly",
  "kidney-friendly": "Kidney-Friendly",
  kosher: "Kosher",
  "low-potassium": "Low Potassium",
  "low-sugar": "Low Sugar",
  "lupine-free": "Lupine-Free",
  Mediterranean: "Mediterranean",
  "mollusk-free": "Mollusk-Free",
  "mustard-free": "Mustard-Free",
  "No-oil-added": "No oil added",
  paleo: "Paleo",
  "peanut-free": "Peanut-Free",
  pecatarian: "Pescatarian",
  "pork-free": "Pork-Free",
  "red-meat-free": "Red-Meat-Free",
  "sesame-free": "Sesame-Free",
  "shellfish-free": "Shellfish-Free",
  "soy-free": "Soy-Free",
  "sugar-conscious": "Sugar-Conscious",
  "sulfite-free": "Sulfite-Free",
  "tree-nut-free": "Tree-Nut-Free",
  vegan: "Vegan",
  vegetarian: "Vegetarian",
  "wheat-free": "Wheat-Free",
};

export default function DialogFilters() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([0]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const uniqueHealthLabels = () => {
    const healthLabelsSet = new Set();
    Object.keys(healthLabels)
      .filter((label) => label.includes("free"))
      .forEach((label) => healthLabelsSet.add(label));
    return Array.from(healthLabelsSet);
  };

  const allUniqueHealthLabels = uniqueHealthLabels();

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Allergies
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "black" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Allergies
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {allUniqueHealthLabels.map((label) => {
            const labelId = `checkbox-list-label-${label}`;

            return (
              <ListItem key={labelId} disablePadding>
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(label)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(label) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={healthLabels[label]} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Dialog>
    </div>
  );
}
