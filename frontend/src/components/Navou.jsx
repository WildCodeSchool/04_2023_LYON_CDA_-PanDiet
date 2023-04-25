import React from "react";

export default function Navou() {
  return (
    <div className="bg-green-500 fixed w-full">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="icon">Home</div>
          <div className="icon">Contact</div>
        </div>
        <button
          type="button"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 bg-white rounded-full border-2 border-transparent hover:border-current"
        >
          <div className="h-6 w-6">+</div>
          {/* background-color: blue;
    margin: 0 auto;
    border-radius: 25px;
    height: px;
    height: 40px;
    width: 40px; */}
        </button>
        <div className="flex space-x-4">
          <div className="icon">Home</div>
          <div className="icon">More</div>
        </div>
      </div>
    </div>
  );
}
