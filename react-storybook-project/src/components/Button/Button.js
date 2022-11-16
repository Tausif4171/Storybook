import React from 'react';
import './Button.css'

function Button(props) {
    const { variant, children } = props
    // console.log(children)
    return (
        <div className={`button ${variant}`} >
            {children}
        </div >
    );
}

export default Button;