import React from 'react';
import './InputStyle.css';
export const InputField = (props) => {
    console.log(props);
  return (
    <input className='input-container' type={props.type} name={props.name} placeholder={props.placeholder} />
  )
}
