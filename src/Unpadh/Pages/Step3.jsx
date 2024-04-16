import React from "react";
import "../Pages/Share.css";
import { Link } from "react-router-dom";

function Step3() {
  return (
    <div>
      <div className="share-main">
        <div className="share-h">
          <h1>Expand your reach</h1>
        </div>
        <div className="share-p">
          <p>
            Udemy courses are video-based experiences that give students the
            chance to learn actionable skills. Whether you have experiences
            teaching, or it's your first time , we'll help you package your
            Knowledge into an online course that improves student lives.
          </p>
        </div>
        <div className="share-form">
          <div className="left">
            <div className="share-h3">
              <p>Do you an audience to share your course with?</p>
            </div>
            <div className="form-main">
              <div className="box">
                <input type="radio" id="input1" name="form" />

                <label for="input1">Not at the moment</label>
              </div>
              <div className="box">
                <input type="radio" id="input2" name="form" />
                <label for="input2">I have a small following </label>
              </div>
              <div className="box">
                <input type="radio" id="input3" name="form" />
                <label cl for="input3">
                  I have a sizeable following
                </label>
              </div>
              <div className="box">
                <input type="radio" id="input4" name="form" />
                <label for="input4">I have videos ready to upload</label>
              </div>
            </div>
          </div>

          <div className="right">
            <img src="Step3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Step3;
