import React, { useState, useContext } from "react";
import FilterDialog from "./Home/FiltersDialog";
import { FilterContext } from "../Context/FilterContext";
import ContainerFilterChoose from "./Home/ContainerFilterChoose";

function DialogFilters({
  onSelectedLabelsChange,
  fetchData,
  ingredientInput,
  addExcludedIngredient,
  queryExclued,
  removeExcludedIngredient,
}) {
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
    <div className="w-full md:w-1/5 px-2">
      <div className="flex flex-col space-y-5">
        <div className="hidden font-bold text-2xl mb-10 md:block">
          <h2>Filters</h2>
        </div>
        {buttons.map(({ label, dialogType, filterLabels }) => (
          <div key={label}>
            <button
              type="button"
              className="text-[#E58A2F] font-bold w-full text-left"
              onClick={handleClickOpen(dialogType)}
            >
              {label}
            </button>
            <hr className="w-full" />
            <FilterDialog
              open={open[dialogType]}
              title={label}
              filterLabels={filterLabels}
              handleClose={handleClose(dialogType)}
              handleToggle={handleToggle}
            />
          </div>
        ))}
        <button
          onClick={fetchData}
          className="bg-black text-white w-full rounded-xl py-1"
          type="button"
        >
          Search
        </button>
        <ContainerFilterChoose
          ingredientInput={ingredientInput}
          addExcludedIngredient={addExcludedIngredient}
          queryExclued={queryExclued}
          removeExcludedIngredient={removeExcludedIngredient}
        />
      </div>
    </div>
  );
}

export default DialogFilters;
