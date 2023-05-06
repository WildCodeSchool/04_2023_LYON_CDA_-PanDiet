import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CardRecipe from "./CardRecipe";

function ContainerRightHome({
  setQueryText,
  fetchData,
  handleNumberPerPage,
  recipes,
  dataRandom,
  currentArticles,
}) {
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full justify-center mb-10 h-10  md:h-15">
        <input
          type="text"
          className="border border-black rounded-xl w-[80%] md:w-[50%] md:mr-2 px-2"
          placeholder="Search your food..."
          onChange={(event) => setQueryText(event.target.value)}
        />
        <button
          onClick={fetchData}
          type="button"
          className="px-4 py-2 md:mr-10 text-white bg-[#FF9A62] rounded-full "
        >
          <SearchIcon />
        </button>
        {recipes.length === 0 ? (
          ""
        ) : (
          <div className="flex justify-end items-center">
            <p className="w-[5vw] text-[#FF9A62] font-bold">Try By :</p>
            <select
              className="border border-black rounded-sm"
              onChange={(e) =>
                handleNumberPerPage(parseInt(e.target.value, 10))
              }
              name=""
              id=""
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>
          </div>
        )}
      </div>
      <div className="flex justify-around flex-wrap">
        {recipes.length === 0
          ? dataRandom.map((item) => (
              <div key={item.uri}>
                <CardRecipe item={item} />
              </div>
            ))
          : currentArticles.map((item) => (
              <div key={item.uri}>
                <CardRecipe item={item} />
              </div>
            ))}
      </div>
    </div>
  );
}

export default ContainerRightHome;
