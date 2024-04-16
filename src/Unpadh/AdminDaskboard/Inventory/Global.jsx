import React, { useState } from "react";
import Select from "react-select";
import "../Inventory/global.css";

function Global() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "Canada", label: "Canada" },
    { value: "Mexico", label: "Mexico" },
    { value: "United", label: "United" },
    { value: "United Sates of America", label: "United Sates of America" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="global-main">
      <div>
        <h2>Global delivery</h2>
      </div>
      <div className="del-main">
        <div className="delivery">
          <input type="radio" id="wide1" name="world" />
          <label htmlFor="wide1">Worldwide delivery</label>
          <p>
            Only available with Shipping method:
            <span>Fullfilled by Phoenix</span>
          </p>
        </div>

        <div className="delivery">
          <input type="radio" id="wide2" name="world" />
          <label htmlFor="wide2">Worldwide delivery</label>

          <div style={{ margin: 20, width: 600 }}>
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={options}
              placeholder="Select your string"
              isSearchable
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Global;
