import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import '../../components/sign-in/sign-in.component';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = ()=>(
  <div className="SignInAndSignUp">
    <SignIn/>
    <SignUp/>
  </div>
);

export default SignInAndSignUp;