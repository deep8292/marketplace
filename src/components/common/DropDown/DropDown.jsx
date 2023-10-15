import React, { useState } from 'react';
import classes from './DropDown.module.css';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('CAD'); // Initial selected option

  const options = ['CAD', 'USD'];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={classes.roundedDropdown}>
      <select className={classes.roundedSelect} value={selectedOption} onChange={handleSelectChange}>
        {options.map((name, key) => 
            <option  key={key} value={key}>{name}</option>
        )}
      </select>
    </div>
  );
}

export default Dropdown;
