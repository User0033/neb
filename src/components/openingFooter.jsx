import React, { Component } from "react";
import Python from "../images/python.png";
import Docker from "../images/docker.png";
import Node from "../images/node.png";
import K8 from "../images/k8.png";
import Pythorch from "../images/pytorch.png";

const OpeningFooter = () => {
  const images = [Python, Docker, Node, K8, Pythorch];

  return (
    <div className="bg-grad mb-5">
      <div className="container">
        <div className="mb-lg-4 pb-lg-5" style={{ textAlign: "left" }}>
          {images.map((im) => (
            <div className="d-inline" style={{ marginRight: "6%" }}>
              <img style={{ maxWidth: "180px" }} src={im} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OpeningFooter;
