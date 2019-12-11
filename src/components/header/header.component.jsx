import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';


const Header = ()=>(
  <div className="Header">
    <Logo className="Header-Logo" />
    <div className="Header-Options">
      <span className="Header-Option"> Shop </span>
      <span className="Header-Option"> Contact </span>
    </div>
  </div>
);

export default Header;