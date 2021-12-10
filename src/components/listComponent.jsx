import React, { Component } from "react";

const ListComponent = ({ firstCol, secondCol, thirdCol }) => {
  return (
    <div className=" container mt-lg-5 mb-lg-5 pt-lg-5 pb-lg-3">
      <div className="row">
        <div className="col-md" style={{ textAlign: "left" }}>
          <h5 className=" text-info">{firstCol[0]}</h5>

          <h3 className=" fw-bolder" style={{ fontWeight: "800" }}>
            {firstCol[1]}
          </h3>

          <p style={{ color: "grey" }} className=" fs-5">
            {firstCol[2]}
          </p>
        </div>

        <div className="col-md" style={{ textAlign: "left" }}>
          <ul class="list-group list-group-flush">
            {secondCol.map((col2) => (
              <li class="list-group-item mb-3">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  style={{ maxWidth: "24px", color: "green" }}
                  className=" me-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className=" d-inline-block">{col2}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md" style={{ textAlign: "left" }}>
          <ul class="list-group list-group-flush">
            {thirdCol.map((thrd) => (
              <li class="list-group-item mb-3">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  style={{ maxWidth: "24px", color: "green" }}
                  className=" me-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>{thrd}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ListComponent;
