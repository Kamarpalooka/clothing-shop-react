import React from "react";

import './custom-button.styles.scss'


const CustomButton = ({IsGoogleSignIn, children, ...otherProps}) => (
    <button className={` ${IsGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;