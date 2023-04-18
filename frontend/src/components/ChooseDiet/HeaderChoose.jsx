import React from "react";

function HeaderChoose() {
  const style = {
    hrOrange: {
      marginLeft: "auto",
      height: "28px",
      width: "250px",
      margin: "2% 0 2% auto",
      borderRadius: "20px 0 0 20px",
      backgroundColor: "#DC965A",
    },
    div: {
      display: "flex",
      justifyContent: "center",
      color: "white",
    },
    h2: { textAlign: "center", marginTop: "2%" },
    h3: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "2%",
    },
  };
  return (
    <div>
      <div style={style.div}>
        <h2 style={style.h2}>
          Hungry <br /> and <br /> healthy ?
        </h2>
      </div>
      <hr style={style.hrOrange} />
      <h3 style={style.h3}>Choose your Diet !</h3>
    </div>
  );
}

export default HeaderChoose;
