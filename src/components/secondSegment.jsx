import React, { Component } from "react";
import Toni from "../images/toni.jpg";
import Logo from "../images/gordian.svg";
const SecondSegment = () => {
  return (
    <div className="container mt-lg-5 pt-lg-5">
      <div className="row">
        <div className="col-md">
          <div
            className=" mb-5 p-5 text-light fw-bold bg-dark "
            style={{ borderRadius: "10%" }}
          >
            <img
              className=" mb-3 img-fluid mb-5"
              src={Logo}
              style={{ maxWidth: "160px" }}
            />
            <img
              src={Toni}
              className="mb-3 img-fluid"
              style={{ borderRadius: "20%" }}
            />

            <p className="">
              Since we moved our servers to the managed cloud services at Nebula
              we stopped worrying about our server infrastructure and
              connectivity, we are now focused only on our services and
              applications. Even our clients noticed that we can now dedicate
              all of our attention to our core business and provide the best
              possible service.
            </p>
            <p>Toni Bachvarovski, CEO at Gordian Technology</p>
          </div>
        </div>
        <div className="col-md">
          <h2
            className="mb-5"
            style={{ textAlign: "left", fontWeight: "800", fontSize: "36px" }}
          >
            Why Nebula?
          </h2>

          <div
            className=" text-left"
            style={{ textAlign: "left", color: "grey", fontSize: "18px" }}
          >
            <p class="text-lg">
              Nebula offers cloud consulting expertise to companies that want to
              ensure security, increase scalability and save costs. Opting for
              Nebula Cloud Consulting gives us the opportunity to analyze your
              current systems and requirements, and based on the results, we
              will help you find the most efficient cloud-based solutions.
            </p>
            <p class="text-lg">
              We love assisting companies that want to grow and secure their
              online presence.
            </p>
            <p class="text-lg">
              Know what is best for your company - empower your business and
              obtain maximum value! We will take you on the journey to refine
              your company’s workflow, save costs, and ensure flexibility.
            </p>
            <p class="text-lg">
              Dive into the opportunities of the future and make the first move
              towards improving your business today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSegment;
