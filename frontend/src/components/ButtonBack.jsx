import React from "react";
import { useNavigate } from "react-router-dom";
import arrowReturn from "../assets/arrowReturn.png";

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        className="border border-black py-2 px-5 rounded-xl shadow-md"
        onClick={() => navigate(-1)}
      >
        <div className="flex items-center">
          <img src={arrowReturn} alt="" />
          <p className="font-bold text-xl">Back</p>
        </div>
      </button>
    </div>
  );
}

export default ButtonBack;
