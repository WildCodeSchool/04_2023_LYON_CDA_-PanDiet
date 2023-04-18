import React from "react";
import pandaBamboo from "../../assets/pandaBamboo.png";
import "./css/HeaderHome.css";

const styles = {
  span: {
    color: "#DC965A",
    fontWeight: "bold",
  },
};

function HeaderHome() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img className="imgPandaBamboo" src={pandaBamboo} alt="" />
      </div>
      <div className="containerTitle">
        <p className="title">
          Bienvenue <br /> sur <br />
          <span style={styles.span}>P</span>an{" "}
          <span style={styles.span}>D</span>
          iet
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      />
    </div>
  );
}

export default HeaderHome;
