import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { Link } from "react-router-dom";

const Header = ()=>(
  <div className="Header">
    <Link className="Header-Option" to="/">
      <Logo className="Header-Logo" />
    </Link>
    <div className="Header-Options">
      <Link className="Header-Option" to="/shop"> Shop </Link>
      <Link className="Header-Option" to="/contact"> Contact </Link>
      <Link className="Header-Option" to="/signIn"> Sign In </Link>
    </div>
  </div>
);

export default Header;