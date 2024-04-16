import React from "react";
import "../Inventory/hello.css";

function Hello() {
  return (
    <div className="price">
      <div className="reg second">
        <h2>Regular price</h2>
        <input type="text" placeholder="$$$" id="regul" />
      </div>
      <div className="reg">
        <h2>Sale price</h2>
        <input type="text" placeholder="$$$" id="regul" />
      </div>
    </div>
  );
}

export default Hello;
