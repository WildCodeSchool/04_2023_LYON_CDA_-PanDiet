import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import FilterDialog from "./ChooseDiet/FiltersDialog";
import { FilterContext } from "../Context/FilterContext";

function DialogFilters({ onSelectedLabelsChange }) {
  const [open, setOpen] = useState({
    allergies: false,
    mealTypes: false,
    dishTypes: false,
    cuisinesTypes: false,
    dietTypes: false,
  });
  const [checked, setChecked] = useState(new Set());
  const { healthLabels, mealTypes, dishTypes, cuisinesTypes, dietTypes } =
    useContext(FilterContext);

  const handleClickOpen = (dialogType) => () => {
    setOpen({ ...open, [dialogType]: true });
  };

  const handleClose = (dialogType) => () => {
    setOpen({ ...open, [dialogType]: false });
  };

  const handleToggle = (value) => () => {
    const newChecked = new Set(checked);

    if (checked.has(value)) {
      newChecked.delete(value);
    } else {
      newChecked.add(value);
    }

    setChecked(newChecked);
    onSelectedLabelsChange(newChecked);
  };

  const createFilterLabels = (source, labelKeys) => {
    return labelKeys.map((label) => ({
      id: label,
      label: source[label],
      isChecked: checked.has(label),
    }));
  };

  const buttons = [
    {
      label: "Allergies",
      dialogType: "allergies",
      filterLabels: createFilterLabels(
        healthLabels,
        Object.keys(healthLabels).filter((label) => label.includes("free"))
      ),
    },
    {
      label: "Meal Types",
      dialogType: "mealTypes",
      filterLabels: createFilterLabels(mealTypes, Object.keys(mealTypes)),
    },
    {
      label: "Diets",
      dialogType: "dietTypes",
      filterLabels: createFilterLabels(dietTypes, Object.keys(dietTypes)),
    },
    {
      label: "Dish Types",
      dialogType: "dishTypes",
      filterLabels: createFilterLabels(dishTypes, Object.keys(dishTypes)),
    },
    {
      label: "Cuisines Types",
      dialogType: "cuisinesTypes",
      filterLabels: createFilterLabels(
        cuisinesTypes,
        Object.keys(cuisinesTypes)
      ),
    },
  ];

  const style = {
    button: {
      backgroundColor: "white",
      color: "black",
      margin: "2% 2%",
    },
  };

  return (
    <div>
      {buttons.map(({ label, dialogType, filterLabels }) => (
        <React.Fragment key={label}>
          <Button
            sx={style.button}
            variant="outlined"
            onClick={handleClickOpen(dialogType)}
          >
            {label}
          </Button>
          <FilterDialog
            open={open[dialogType]}
            title={label}
            filterLabels={filterLabels}
            handleClose={handleClose(dialogType)}
            handleToggle={handleToggle}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default DialogFilters;
