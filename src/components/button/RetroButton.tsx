import '../../components/button/RetroButton.css';
import React from 'react';

export enum RetroButtonType {
    white = 'retroButton white',
    blue = 'retroButton blue',
    green = 'retroButton green',
}

 function RetroButton ({ title, onClick, color }) {
    return (
        <div className={color} onClick={onClick}>
            <label>{title}</label>
        </div>
    );
}

export default RetroButton;
