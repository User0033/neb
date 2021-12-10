import React, { Component } from "react";
import cover from "../images/cover.svg";

const OpeningSegment = () => {
  return (
    <div className="bg-grad">
      <div className="container">
        <div className="row">
          <div
            className="col-lg"
            style={{ maxWidth: "500px", textAlign: "left" }}
          >
            <div className="pt-5 pb-lg-5">
              <div style={{ textAlign: "left", marginBottom: "18px" }}>
                <a href="https://nebula.mk/jobs/" style={{ textAlign: "left" }}>
                  <span
                    className="badge rounded-pill bg-black "
                    style={{
                      padding: "5px",
                      fontSize: "18px",
                      fontWeight: "300",
                    }}
                  >
                    <span
                      className=" badge rounded-pill bg-info outline"
                      style={{
                        paddingLeft: "8px",
                        paddingRight: "8px",
                        fontWeight: "500",
                        marginRight: "5px",
                      }}
                    >
                      WE'RE HIRING
                    </span>
                    Visit our careers page
                    <svg
                      style={{ width: "20px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>

              <h1>
                <span
                  className="d-block text-light font-weight-bold "
                  style={{ fontSize: "64px", fontWeight: "800" }}
                >
                  Step up your
                </span>
                <span
                  className="d-block text-info font-weight-bold "
                  style={{ fontSize: "64px", fontWeight: "800" }}
                >
                  cloud game!
                </span>
              </h1>

              <p
                className=" text-muted"
                style={{
                  fontWeight: "600",
                  marginTop: "5px",
                  fontSize: "19px",
                  color: "grey",
                }}
              >
                We take your Cloud journey to the next level
              </p>

              <br />
              <a
                href="https://outlook.office365.com/owa/calendar/Nebula1@nebula.mk/bookings/s/vhN7O747QkCCVsG-2258LA2"
                style={{ textAlign: "left" }}
              >
                <button
                  type="button"
                  className="btn btn-info  fw-bold outline"
                  style={{ color: "white" }}
                >
                  Get in touch
                </button>
              </a>

              <p className="mt-3" style={{ color: "grey" }}>
                Schedule an initial consultation.
              </p>
            </div>
          </div>

          <div className="col-lg">
            <div>
              <img src={cover} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningSegment;
