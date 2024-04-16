import React from "react";
import "../AdminDaskboard/Addcourse.css";

function AddCourse() {
  return (
    <div className="container-main">
      
      <ul className="page">
      <li className="page-item">
    <a href="#">Page 1</a>
      </li>

      <li className="page-item">
      <a href="#">Page 2</a>
      </li>

      
      <li className="page-active">
      default
      </li>
      </ul>

      <div className="Add-course">
      <div className="course">
      <h2> Add a Course</h2>
      <h5>Orders placed across your store</h5>
      </div>

      <div className="course-button">
              <div><button type="button" className="discard"> discard</button></div>
            
             <div>  <button type="button" className="save"> Save draft</button></div>

      
          <div><button type="button" className="Publish"> Publish Course</button> </div>
      </div>

      </div>  

      
    </div>
  );
}

export default AddCourse;
