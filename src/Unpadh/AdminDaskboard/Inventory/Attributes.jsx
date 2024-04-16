import React, {useState} from "react";
 
import "../Inventory/Attibutes.css";

function Attributes() {
  return (
    <div className="attr-main">
      <div className="attr-h2">
        <h2>Attributes</h2>
      </div>
      <div className="attr">
        <input type="checkbox" id="check" name="box" />
        <label for="check">Fragile Product</label>
      </div>

      <div className="attr">
        <input type="checkbox" id="check" name="box" />
        <label for="check">Biodegradable </label>
      </div>

      <div className="attr">
        <input type="checkbox" id="check" name="box" />
        <label for="check">Frozen Product</label>
      </div>
      <div className="max">
      <input type="" placeholder="Max.allowed Temperature"/>
      </div>

      <div className="attr">
        <input type="checkbox" id="check" name="box" />
        <label for="check">Frozen Product</label>
        </div>

        <label htmlFor="datetime" > </label>

        <input type="datetime" placeholder="dd tt year" id="datetime"/>


      
    </div>
  );
}

export default Attributes;
