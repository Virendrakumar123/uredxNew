import React from "react";
import "../Pages/Navbar.css";

function Navbar({ step }) {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="uredx_logo-1.png" alt="" />
        </div>
        <div className="step-main">
          <div className="step">
            <p>Step {step} of 3</p>
          </div>
          <div className="exit">
            <p>Exit</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
