import React from "react";
import "../AdminDaskboard/coursetitle.css";
import { FiCornerUpLeft } from "react-icons/fi";
import { FiCornerUpRight } from "react-icons/fi";
import { FiBold } from "react-icons/fi";
import { FiItalic } from "react-icons/fi";

import { FaUnderline } from "react-icons/fa6";
import { FaStrikethrough } from "react-icons/fa6";
import { FaAlignLeft } from "react-icons/fa6";
import { FaAlignCenter } from "react-icons/fa6";
import { FaAlignRight } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { FaListOl } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";



function Coursetitle() {
  
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
        <FiCornerUpLeft />

        <FiCornerUpRight />
        </div>

        <div className="b-icon">
        <FiBold />

        <FiItalic />

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

      
      

      
    </div>
  );
}

export default Coursetitle;
