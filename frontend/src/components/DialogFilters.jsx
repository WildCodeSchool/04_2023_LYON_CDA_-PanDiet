import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import FilterDialog from "./FiltersDialog";
import { FilterContext } from "../Context/FilterContext";

function DialogFilters({ onSelectedLabelsChange }) {
  const [open, setOpen] = useState({
    allergies: false,
    mealTypes: false,
    dishTypes: false,
  });
  const [checked, setChecked] = useState(new Set());
  const { healthLabels, mealTypes, dishTypes } = useContext(FilterContext);

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

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen("allergies")}>
        Allergies
      </Button>
      <FilterDialog
        open={open.allergies}
        title="Allergies"
        filterLabels={createFilterLabels(
          healthLabels,
          Object.keys(healthLabels).filter((label) => label.includes("free"))
        )}
        handleClose={handleClose("allergies")}
        handleToggle={handleToggle}
      />
      <Button variant="outlined" onClick={handleClickOpen("mealTypes")}>
        Meal Types
      </Button>
      <FilterDialog
        open={open.mealTypes}
        title="Meal Types"
        filterLabels={createFilterLabels(mealTypes, Object.keys(mealTypes))}
        handleClose={handleClose("mealTypes")}
        handleToggle={handleToggle}
      />
      <Button variant="outlined" onClick={handleClickOpen("dishTypes")}>
        Dish Types
      </Button>
      <FilterDialog
        open={open.dishTypes}
        title="Dish Types"
        filterLabels={createFilterLabels(dishTypes, Object.keys(dishTypes))}
        handleClose={handleClose("dishTypes")}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default DialogFilters;
