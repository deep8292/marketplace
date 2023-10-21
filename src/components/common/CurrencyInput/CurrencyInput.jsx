import React from 'react';

import classes from './CurrencyInput.module.css';
import { NumericFormat } from 'react-number-format';

function CurrencyInput({ value, onValueChange, isDisabled }) {

  return (
    <NumericFormat
      disabled={isDisabled}
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
