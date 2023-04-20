import React from "react";

function HeaderChoose() {
  const style = {
    div: {
      display: "flex",
      justifyContent: "center",
    },
    h2: { textAlign: "center", marginTop: "2%" },
    h3: {
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "2%",
    },
  };
  return (
    <div>
      <div style={style.div}>
        <h2 style={style.h2}>Hungry and healthy ?</h2>
      </div>
      <h3 style={style.h3}>Choose your Diet !</h3>
    </div>
  );
}

export default HeaderChoose;
