import React from "react";

const style = {
  span: {
    color: "#DC965A",
    fontWeight: "bold",
    fontSize: "38px",
  },
  hrGreen: {
    height: "28px",
    width: "250px",
    borderRadius: "0 20px 20px 0",
    backgroundColor: "#7CB342",
  },
};
function HeaderDescription() {
  return (
    <div>
      <hr style={style.hrGreen} />
      <p style={{ color: "#F3F3F3", fontSize: "20px", padding: "11% 10%" }}>
        Meet your criteria for healthy and balanced recipes tailored to your
        preferences and nutritional needs.
      </p>
    </div>
  );
}

export default HeaderDescription;
