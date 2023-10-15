import React from 'react';

import classes from './CurrencyInput.module.css';
import { NumericFormat } from 'react-number-format';

function CurrencyInput({ value, onValueChange }) {
  return (
    <NumericFormat
      className={classes.currentInputStyle}
      value={value}
      thousandSeparator={true}
      onValueChange={(values) => {
        onValueChange(values.value);
      }}
    />
  );
}

export default CurrencyInput;
