import React, { Component } from "react";
import Logo from "../images/altius.svg";
import Boban from "../images/boban.jpg";

const Altius = () => {
  return (
    <section className="bg-rad">
      <div className="container">
        <div className="text-light row">
          <div className="d-block">
            <img
              className="mb-4 pt-lg-5 mx-auto d-block"
              style={{ maxWidth: "130px", textAlign: "cneter" }}
              src={Logo}
            />
          </div>

          <div className="d-block">
            <p
              className="fs-4 mx-auto d-block"
              style={{ maxWidth: "670px", textAlign: "center" }}
            >
              “We have been using Nebula's DevOps services for more than a year
              and they have been a valuable partner of our company. Our
              development teams can focus on developing the best possible
              applications while Nebula takes care of everything else.”
            </p>
          </div>

          <div className=" d-inline pb-lg-5">
            <img
              className=" me-3"
              style={{ maxWidth: "48px", borderRadius: "70%" }}
              src={Boban}
            />
            <span>Boban Milosavleski</span>
            <svg
              class="text-info"
              fill="currentColor"
              viewBox="0 0 20 20"
              style={{ maxWidth: "24px" }}
            >
              <path d="M11 0h3L9 20H6l5-20z"></path>
            </svg>
            <span>CEO, Altius.mk</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Altius;
