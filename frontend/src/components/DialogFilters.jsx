import React, { useState, useContext } from "react";
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

  return (
    <div className="flex flex-col  ">
      {buttons.map(({ label, dialogType, filterLabels }) => (
        <div className="py-1 text-left" key={label}>
          <button
            type="button"
            className="text-[#E58A2F]  "
            onClick={handleClickOpen(dialogType)}
          >
            {label}
            <hr className="w-full" />
          </button>
          <FilterDialog
            open={open[dialogType]}
            title={label}
            filterLabels={filterLabels}
            handleClose={handleClose(dialogType)}
            handleToggle={handleToggle}
          />
        </div>
      ))}
    </div>
  );
}

export default DialogFilters;
