import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { Link } from "react-router-dom";
import {auth} from '../../firebase/firebase.utilis';

const Header = ({currentUser})=>(
  <div className="Header">
    <Link className="Header-Option" to="/">
      <Logo className="Header-Logo" />
    </Link>
    <div className="Header-Options">
      <Link className="Header-Option" to="/shop"> Shop </Link>
      <Link className="Header-Option" to="/contact"> Contact </Link>
      {
        currentUser
        ? <span className="Header-Option" onClick={()=> auth.signOut()} > Sign Up  </span>
        : <Link className="Header-Option" to="/signIn"> Sign In </Link>
      }
    </div>
  </div>
);

export default Header;