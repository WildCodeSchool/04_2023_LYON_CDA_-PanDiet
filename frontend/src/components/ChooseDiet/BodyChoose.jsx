import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function BodyChoose({
  recipes,
  handleQueryTextChange,
  fetchData,
  queryText,
  handleNumberPerPage,
}) {
  return (
    <div className="flex justify-center md:justify-start w-full mt-4 mb-10">
      <div className="hidden w-1/5 font-bold text-2xl md:block">
        <h2>Filters</h2>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex w-full">
          <input
            type="text"
            className="block px-4 py-2 mr-2  inset-0 bg-gradient-to-l from-transparent to-orange-200
         border border-black  rounded-full focus:border-[#FF9A62] focus:ring-[#FFB084] 
         focus:outline-none focus:ring focus:ring-opacity-40 md:w-2/5"
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
        {recipes.length === 0 ? (
          ""
        ) : (
          <div className="flex items-center">
            <p className="w-[10vw] text-[#FF9A62]">Number per page :</p>
            <select
              onChange={(e) =>
                handleNumberPerPage(parseInt(e.target.value, 10))
              }
              name=""
              id=""
            >
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
              <option value="15">15</option>
              <option value="18">18</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default BodyChoose;
