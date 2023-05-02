import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function BodyChoose({ handleQueryTextChange, fetchData, queryText }) {
  return (
    <div className="flex justify-between w-full mt-4 mb-10">
      <div className="w-1/5 font-bold text-2xl">
        <h2>Filters</h2>
      </div>
      <div className="flex ">
        <input
          type="text"
          className="block  px-4 py-2 mr-2  bg-white border border-black rounded-full focus:border-[#FF9A62] focus:ring-[#FFB084] focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search your food..."
          value={queryText}
          onChange={handleQueryTextChange}
        />
        <button
          onClick={fetchData}
          type="button"
          className="px-4 py-2 text-white bg-customOrange rounded-full "
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default BodyChoose;
