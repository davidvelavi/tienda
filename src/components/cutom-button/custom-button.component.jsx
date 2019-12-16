import React from 'react'
import './cutom-button.styles.scss';



const CustomButton = ({children, isGoogleSignIn, ...otherCutomButtonProps})=>(
  <button className={`CustomButton   ${isGoogleSignIn ? 'is-google-sign-in' : ''}`} {...otherCutomButtonProps}>
      {children}
  </button>
);

export default CustomButton;