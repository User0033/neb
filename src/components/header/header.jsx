import React from "react";
import logo from "../../images/Logo_white.png";

const Header = () => {
  return (
    <div className="bg-grad" style={{ padding: "1%" }}>
      <nav class="navbar navbar-expand-lg static-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={logo} height="26" />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  href="https://outlook.office365.com/owa/calendar/Nebula1@nebula.mk/bookings/s/vhN7O747QkCCVsG-2258LA2"
                  className="btn btn-info border border-dark text-light outline"
                  style={{ fontWeight: "500" }}
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
