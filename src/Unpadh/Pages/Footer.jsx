import React from "react";

const Footer = ({ step, handleNavigation }) => {
  return (
    <footer className="step-3-button">
      {step !== 1 && (<button onClick={() => handleNavigation(false)}>Previous</button>)}
      <button onClick={() => handleNavigation(true)}>Continue</button>
    </footer>
  );
};

export default Footer;
