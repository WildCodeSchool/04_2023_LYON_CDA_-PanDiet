import React from "react";

function CardCategory({ handleClickCategory, item }) {
  return (
    <div>
      <button
        onClick={() => handleClickCategory(item.name)}
        type="button"
        key={item.id}
        className="inline-block mt-6 ml-3 p-6 shadow-lg border border-black rounded-md"
      >
        <img
          className="max-w-none h-[84px] w-[84px]"
          src={item.img}
          alt={item.name}
        />
        <p className="text-center font-bold">{item.name}</p>
      </button>
    </div>
  );
}

export default CardCategory;
