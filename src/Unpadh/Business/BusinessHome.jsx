import React from "react";
import BusinessNavbar from "./Businessnav";
import GetDemo from "./GetDemo";
// import Trusted from './Trusted'
import Businessfrom from "./Businessfrom";

function BusinessHome() {
  return (
    <div>
      <BusinessNavbar />

      <div className="rohit">
        <div>
          <GetDemo />
        </div>

        <div> 
          <Businessfrom />
        </div>
      </div>
    </div>
  );
}

export default BusinessHome;
