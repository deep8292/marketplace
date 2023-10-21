import React, { Component, useState } from 'react';
import './Checkbox.css'; // Import a CSS file for styling

function Checkbox(props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

      return (
        <div className="checkbox-container">
          <label className="custom-checkbox">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            {'Make this a donation'}
          </label>
        </div>
      );
}


export default Checkbox;
