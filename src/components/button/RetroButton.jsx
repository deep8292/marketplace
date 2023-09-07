import '../../components/button/RetroButton.css';
import React from 'react';

export const RetroButtonType = {
  WHITE: 'retroButton white',
  BLUE: 'retroButton blue',
  GREEN: 'retroButton green',
};

 function RetroButton({ children, type = 'button', buttonType, ...attributes }) {
  const buttonClass = `retroButton ${buttonType || ''}`;
    return (
      <button type={type} {...attributes} className={buttonClass}>
        {children}
      </button>
    );
  }

export default RetroButton;
