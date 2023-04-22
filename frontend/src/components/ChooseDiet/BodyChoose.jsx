import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import { styled } from "@mui/material/styles";

function BodyChoose({
  handleQueryTextChange,
  fetchData,
  queryText,
  setShowFilters,
  showFilters,
}) {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "green",
      borderRadius: 20,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "green",
        borderRadius: 20,
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
        borderRadius: 20,
      },
    },
  });
  return (
    <div>
      <div className="px-6 py-3 flex items-center justify-around">
        <CssTextField
          size="small"
          label="Search your food..."
          value={queryText}
          sx={{ marginRight: 2 }}
          onChange={handleQueryTextChange}
        />
        <button
          onClick={fetchData}
          type="button"
          className="px-4 py-2 text-white bg-green-500 rounded-full "
        >
          <SearchIcon />
        </button>
        <button
          onClick={() => setShowFilters(!showFilters)}
          type="button"
          className="py-2 ml-3 px-4 text-white bg-green-500 rounded-full "
        >
          <TuneRoundedIcon />
        </button>
      </div>
    </div>
  );
}

export default BodyChoose;
