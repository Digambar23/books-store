import React from 'react';
import './SelectBoxStyle.css';
const SelectBox = (props) => {
  return (
    <div className='select-box'>
      <ul>
        {props.list.map((option, index) => (
        <li key={index}>{option.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectBox;
