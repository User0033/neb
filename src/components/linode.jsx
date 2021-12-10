import React, { Component } from "react";
import Logo from "../images/linode.png";
const LiNode = () => {
  return (
    <div className=" container">
      <div className="row mt-lg-5" style={{ textAlign: "left" }}>
        <a href="https://www.linode.com/?r=083cf28035b64b323d3a3894b6e6705b6814d851">
          <img className=" mb-3" style={{ maxWidth: "255px" }} src={Logo} />
        </a>

        <p
          class=" mt-lg-3 mb-lg-5 pb-lg-5"
          style={{ maxWidth: "340px", color: "grey" }}
        >
          Accelerate digital innovation and get better business results through
          Nebula.
        </p>
      </div>
    </div>
  );
};

export default LiNode;
