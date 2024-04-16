import React from 'react'
import { Link } from 'react-router-dom';
import "../AdminDaskboard/Adminavbar.css"

function Adminavbar() {
  return (
    <div className="Business_nav_container">
      <div className="Business_col1">
      <img src="./uredx_logo-1.png" alt="" />
      </div>
      <div className="Business_col2">
        <div className="Business_content1">
          <div className="Business_content_link">
            <Link to="/" className="Business_nav_link">What we do</Link>
          </div>
        </div>

        <div className="Business_content1">
          <div className="Business_content_link">
            <Link to="/" className="Business_nav_link">How we do it</Link>
          </div>
        </div>

        <div className="Business_content1">
          <div className="Business_content_link">
            <Link to="/" className="Business_nav_link">Resources</Link>
          </div>
        </div>
        <div className="Business_content1">
          <div className="Business_content_link">
            <Link to="/" className="Business_nav_link">Plan</Link>
          </div>
        </div>
      </div>

      <div className="Business_col3">
        <button id="Business_login_btn">
          <Link to="/login" className="Business_login_signup_link">Login</Link>
        </button>

        <button id="Business_signup_btn">
          <Link to="/signup" className="Business_login_signup_link">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}

  


export default Adminavbar