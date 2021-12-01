import React from "react";

import './form-input.styles.scss'


const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange}  {...otherProps} />
        {
            // ternary operator for if there is label to  render and set a css class shrink
            label ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
            : null    
        }
    </div>
)

export default FormInput;