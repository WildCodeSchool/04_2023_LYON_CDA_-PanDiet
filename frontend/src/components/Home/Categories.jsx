import React from "react";
import breakFast from "../../assets/home/breakFast.png";
import snack from "../../assets/home/snack.png";
import dinner from "../../assets/home/dinner.svg";
import tea from "../../assets/home/tea.svg";
import CardCategory from "./CardCategory";

function Categories({ handleClickCategory }) {
  const categories = [
    { id: 1, name: "breakfast", img: breakFast },
    { id: 2, name: "snack", img: snack },
    { id: 3, name: "dinner", img: dinner },
    { id: 4, name: "teaTime", img: tea },
  ];

  return (
    <div>
      <h2 className="font-bold pl-3 pb-5 text-xl shadow-sm">Catégories</h2>
      <div className="flex md:justify-around overflow-auto">
        {categories.map((item) => (
          <CardCategory item={item} handleClickCategory={handleClickCategory} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
