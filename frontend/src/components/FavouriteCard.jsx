import React, { useState } from "react";
import HeartFilled from "../assets/Favourite/heart-1.png";
import ModalRecipeDetails from "./ModalRecipeDetail";

function FavouriteCard({ item, handleClick }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="border-2 border-solid border-green-500 rounded-md m-4">
      <div className="flex items-center">
        <div className="relative">
          <div className="cursor-pointer">
            <button type="button" onClick={openModal}>
              <img
                src={item.image}
                alt={item.label}
                className="h-[10rem] w-[12rem] rounded-md"
              />
            </button>
          </div>
          <div className="absolute bottom-0 w-full bg-gray-700 bg-opacity-50 h-[3rem]">
            <h2 className="text-center py-2 text-white font-bold text-[1.1rem]">
              {item.label}
            </h2>
          </div>
        </div>
        <div className=" ml-[5rem]">
          <button type="button" onClick={handleClick}>
            <img src={HeartFilled} alt="" className="" />
          </button>
        </div>
      </div>
      <ModalRecipeDetails
        isOpen={modalOpen}
        onClose={closeModal}
        recipe={item}
      />
    </div>
  );
}

export default FavouriteCard;
