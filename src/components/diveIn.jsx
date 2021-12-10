import React, { Component } from "react";

const DiveIn = () => {
  return (
    <div className="bg-grad-inv pt-lg-5 pb-lg-5 mb-lg-5">
      <div className="container">
        <div className="row pb-lg-5 pt-lg-5">
          <div class="d-flex bd-highlight">
            <div
              class="p-2 flex-grow-1 bd-highlight"
              style={{ textAlign: "left" }}
            >
              <h2 class="">
                <span class=" d-block fw-bolder text-light">
                  Ready to dive in?
                </span>
                <span class=" d-block fw-bolder text-info">
                  We know your priorities.
                </span>
              </h2>
            </div>
            <br />
            <br />
            <div class="p-2 bd-highlight">
              <a
                href="https://outlook.office365.com/owa/calendar/Nebula1@nebula.mk/bookings/s/vhN7O747QkCCVsG-2258LA2"
                className="btn btn-info fw-bold text-light outline"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiveIn;
