import React, { useState } from "react";
import "./Share.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Share() {
  return (
    <div className="share-main">
      <div className="share-h">
        <h1>Share your Knowledge</h1>
      </div>
      <div className="share-p">
        <p>
          Uredx offers video-based courses designed to equip students with
          practical skills. Whether you're a seasoned educator or new to
          teaching, we'll assist you in crafting an online course that enhances
          student learning experiences, empowering you to share your expertise
          effectively and positively impact lives.
        </p>
      </div>
      <div className="share-form">
        <div className="left">
          <div className="share-h3">
            <p>what kind of teaching have you done before?</p>
          </div>
          <div className="form-main">
            <div className="box">
              <input type="radio" id="input1" name="form" />

              <label for="input1">In person, informally</label>
            </div>
            <div className="box">
              <input type="radio" id="input2" name="form" />
              <label for="input2">In person, professionally </label>
            </div>
            <div className="box">
              <input type="radio" id="input3" name="form" />
              <label cl for="input3">
                online
              </label>
            </div>
            <div className="box">
              <input type="radio" id="input4" name="form" />
              <label for="input4">Other</label>
            </div>
          </div>
        </div>

        <div className="right">
          <img
            src="WhatsApp_Image_2024-03-06_at_16.30.10_aca390e8-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Share;
