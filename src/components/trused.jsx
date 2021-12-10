import React, { Component } from "react";
import Vecer from "../images/vecer.svg";
import Vendor from "../images/vendor.svg";
import Otw from "../images/otw.png";
import Gordian from "../images/gordian.svg";
import Altius from "../images/altius.svg";
const Trused = () => {
  const images = [
    [Otw, "https://openthewindows.org/en/homepage/"],
    [Vecer, "https://vecer.mk/"],
    [Vendor, "https://vendor.com.mk/"],
    [Gordian, "https://gordiantechnology.com/"],
    [Altius, "https://altius.mk/"],
  ];
  return (
    <div className=" bg-grad">
      <div className=" container">
        <h2 class="text-light pt-lg-5 fw-bolder" style={{ textAlign: "left" }}>
          Some of the companies that trust Nebula
        </h2>
        <div className="row pb-lg-5">
          <div className="mt-lg-4 mb-lg-4" style={{ textAlign: "left" }}>
            {images.map((im) => (
              <a href={im[1]}>
                <div className="d-inline" style={{ marginRight: "7%" }}>
                  <img style={{ maxWidth: "160px" }} src={im[0]} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trused;
