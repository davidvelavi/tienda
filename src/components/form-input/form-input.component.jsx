import React from 'react';
import './form-input.scss';

const FormInput = ({label,handleChange, ...otherProps})=> (
  <div className="FormInput">
    <input  
      className="FormInput-Field"
      onChange={handleChange} 
      {...otherProps}/>
    {
      label 
      ?  <label className={`${ otherProps.value.length ?'shrink' : ''  } FormInput-Label ` }  >{label}</label>
      : null 
    }
  </div>
);

export default FormInput;