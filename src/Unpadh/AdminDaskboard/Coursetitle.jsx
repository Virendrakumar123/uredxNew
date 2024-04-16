import React, { useState } from "react";
import "../AdminDaskboard/coursetitle.css";
import { FaReply } from "react-icons/fa6";
import { FaShare } from "react-icons/fa6";
import { FaB } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa6";
import { FaUnderline } from "react-icons/fa6";
import { FaStrikethrough } from "react-icons/fa6";
import { FaAlignLeft } from "react-icons/fa6";
import { FaAlignCenter } from "react-icons/fa6";
import { FaAlignRight } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { FaListOl } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

import { FaGlobe } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { PiNotePencilLight } from "react-icons/pi";

import Hello from "./../AdminDaskboard/Inventory/Hello";

import { TbFileUpload } from "react-icons/tb";

import Shipping from "./Inventory/Shipping";
import Global from "./Inventory/Global";
import Attributes from "./Inventory/Attributes";

function Coursetitle() {
  const [selectedComponent, setSelectedComponent] = useState(<Hello />);

  const renderComponent = (component) => {
    setSelectedComponent(component);
  };
  return (
    <div className="title-main">
      <div className="title-h2">
        <h2> Course Title</h2>
      </div>
      <div className="write">
        <input type="textarea" placeholder="Write title here....." />
      </div>
      <div className="desc">
        <h2>Course Description</h2>
      </div>
      <div className="icon-main">
        <div className="left-icon">
          <FaReply />

          <FaShare />
        </div>

        <div className="b-icon">
          <FaB />

          <FaItalic />

          <FaUnderline />

          <FaStrikethrough />
        </div>
        <div className="ligncenter">
          <FaAlignLeft />

          <FaAlignCenter />

          <FaAlignRight />

          <FaAlignJustify />
        </div>
        <div className="list0">
          <FaListOl />

          <FaListUl />
        </div>

        <div className="fal">
          <FaLink />
        </div>
      </div>

      <div className="write2">
        <textarea type="text" placeholder="Write title here....." />
      </div>

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
            <button>Advanced</button>
          </div>
        </div>
        <div className="component">{selectedComponent}</div>
      </div>

      <div className="footer">
      <p>Thank you for creating with Phoenix React|2024 </p>
      </div>
    </div>
  );
}

export default Coursetitle;
