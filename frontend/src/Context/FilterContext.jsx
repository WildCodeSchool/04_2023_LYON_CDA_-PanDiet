import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const FilterContext = createContext();

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

const mealTypes = {
  breakfast: "Breakfast",
  lunch: "Lunch",
  brunch: "Brunch",
  "lunch/dinner": "Dinner",
  snack: "Snack",
  teatime: "Teatime",
};

const dishTypes = {
  "alcohol and cocktail": "Alcohol and Cocktail",
  "biscuits and cookies": "Biscuits and Cookies",
  bread: "Bread",
  cereals: "Cereals",
  "condiments and sauces": "Condiments",
  desserts: "Desserts",
  drinks: "Drinks",
  egg: "Egg",
  "ice cream and custard": "Ice cream and Custard",
  "main course": "Main course",
  pancake: "Pancake",
  pasta: "Pasta",
  pastry: "Pastry",
  "pies and tarts": "Pies and Tarts",
  pizza: "Pizza",
  preps: "Preps",
  preserve: "Preserve",
  salad: "Salad",
  sandwiches: "Sandwiches",
  seafood: "Seafood",
  "side dish": "Side dish",
  soup: "Soup",
  "special occasion": "Special Occasion",
  starter: "Starter",
  sweets: "Sweets",
};

const cuisinesTypes = {
  american: "American",
  asian: "Asian",
  british: "British",
  caribbean: "Caribbean",
  "central europe": "Central Europe",
  chinese: "Chinese",
  "eastern Europe": "Eastern Europe",
  french: "French",
  greek: "Greek",
  indian: "Indian",
  italian: "Italian",
  japanese: "Japanese",
  korean: "Korean",
  kosher: "Kosher",
  mediterranean: "Mediterranean",
  mexican: "Mexican",
  "middle eastern": "Middle Eastern",
  nordic: "Nordic",
  "south american": "South American",
  "south east asian": "South East Asian",
  spanish: "Spanish",
  world: "World",
};

const dietTypes = {
  balanced: "Balanced",
  "high-fiber": "High-Fiber",
  "high-protein": "High-Protein",
  "low-carb": "Low-Carb",
  "low-fat": "Low-Fat",
  "low-sodium": "Low-Sodium",
};

function FilterContextProvider({ children }) {
  const [selectedLabels, setSelectedLabels] = useState(new Set());

  const contextValue = useMemo(() => {
    return {
      selectedLabels,
      setSelectedLabels,
      healthLabels,
      mealTypes,
      dishTypes,
      cuisinesTypes,
      dietTypes,
    };
  }, [selectedLabels]);

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
}
FilterContextProvider.propTypes = {
  children: PropTypes.node,
};
FilterContextProvider.defaultProps = {
  children: null,
};
export { FilterContext, FilterContextProvider };
