import React from "react";
import HeartFilled from "../../assets/Favourite/heart-1.png";
import ModalRecipeDetails from "../ModalRecipeDetail";

function FavouriteCard({ itemFavourites, handleClick }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="border-2 border-solid border-green-500 rounded-md m-4">
      <div className="flex items-center">
        <div className="relative">
          <div className="cursor-pointer">
            <button type="button" onClick={() => handleOpen()}>
              <img
                src={itemFavourites.image}
                alt={itemFavourites.label}
                className="h-[10rem] w-[12rem] rounded-md"
              />
            </button>
          </div>
          <div className="absolute bottom-0 w-full bg-gray-700 bg-opacity-50 h-[3rem]">
            <h2 className="text-center py-2 text-white font-bold text-[1.1rem]">
              {itemFavourites.label}
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
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
        item={itemFavourites}
      />
    </div>
  );
}

export default FavouriteCard;
