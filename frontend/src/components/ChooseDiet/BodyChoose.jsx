import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

function BodyChoose({
  handleQueryTextChange,
  fetchData,
  queryText,
  setShowFilters,
  showFilters,
}) {
  return (
    <div>
      <div className="px-6 py-3 flex items-center justify-around">
        <input
          type="text"
          className="block w-full px-4 py-2 mr-2  bg-white border border-black rounded-full focus:border-[#FF9A62] focus:ring-[#FFB084] focus:outline-none focus:ring focus:ring-opacity-40"
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
        <button
          onClick={() => setShowFilters(!showFilters)}
          type="button"
          className="py-2 ml-3 px-4 text-white bg-customOrange rounded-full "
        >
          <TuneRoundedIcon />
        </button>
      </div>
    </div>
  );
}

export default BodyChoose;
