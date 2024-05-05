import React, { useState } from "react";
import "../AdminDaskboard/coursetitle.css";

import { FaGlobe } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { PiNotePencilLight } from "react-icons/pi";
  
import Hello from "./../AdminDaskboard/Inventory/Hello";

import { TbFileUpload } from "react-icons/tb";

import Shipping from "./Inventory/Shipping";
import Global from "./Inventory/Global";
import Attributes from "./Inventory/Attributes";
import Advanced from "./Inventory/Advanced";

function Display() {

    const [selectedComponent, setSelectedComponent] = useState(<Hello />);

  const renderComponent = (component) => {
    setSelectedComponent(component);
  };


  return (
    <div className="dis-main">
    <div className="dis">
        <h2>Display images</h2>
      </div>

    <div className="upload">
        {/* Hidden file input */}
        <input type="file" id="fileInput" style={{ display: "none" }} />

        {/* Custom button with icon */}
        <label htmlFor="fileInput" className="upload-text">
          <span>
            Drag your image here or{" "}
            <span className="spcl-text">Browse from device</span>
          </span>
        </label>
        <label htmlFor="fileInput" className="upload-icon">
          <span>
            <TbFileUpload />
          </span>
        </label>
      </div>

      <div className="inven">
        <h2>Inventory</h2>
      </div>
      <div className="buttonMain">
        <div className="buttons">
          <div className="one">
            <PiNotePencilLight />
            <button onClick={() => setSelectedComponent(<Hello />)}>
              Pricing
            </button>
          </div>
          
          <div className="two">
            <PiShoppingCartLight />
            <button onClick={() => setSelectedComponent(<Shipping />)}>
              Shipping
            </button>
          </div>
          <div className="two">
            <FaGlobe />
            <button onClick={() => setSelectedComponent(<Global />)}>
              Global Delivery
            </button>
          </div>
          <div className="two">
            <PiShoppingCartLight />
            <button onClick={() => setSelectedComponent(<Attributes />)}>
              Attributes
            </button>
          </div>
          <div className="two">
            <IoLockClosedOutline />
            <button onClick={() => selectedComponent(<Advanced/>)}>
            Advanced</button>
          </div>
        </div>
        <div className="component">{selectedComponent}</div>
      </div>

    </div>
  )
}

export default Display