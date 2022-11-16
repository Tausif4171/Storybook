import React from 'react';
import './Input.css'

function Input(props) {
    const { size, ...rest } = props
    // console.log(rest)
    return (
        <input className={`input ${size}`} {...rest} />
    );
}

export default Input;