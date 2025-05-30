import React from "react";
import LapseHead from "./LapseHead";
import LapseBody from "./LapseBody";

function LapseMain() {
  return (
    <div className="main-content app-content " id="m-content" style={{background:"linear-gradient(to left, #004e92, #000428)"}}>
      <div className="container-fluid ">
        <LapseHead />
        <LapseBody />
      </div>
    </div>
  );
}

export default LapseMain;
