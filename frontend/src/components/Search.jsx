import React from "react";

function Search({ setFilterSearch, axiosData }) {
  return (
    <div className="flex items-center">
      <div className="flex space-x-1 py-4 mx-auto">
        <input
          type="text"
          className="block w-full px-4 py-2 mr-2  bg-white border border-black rounded-full focus:border-[#FF9A62] focus:ring-[#FFB084] focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search your food..."
          onChange={(e) => setFilterSearch(e.target.value)}
        />
        <button
          type="button"
          onClick={axiosData}
          className="px-4 text-white bg-[#f7c5a8] rounded-full "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Search;
