import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../cutom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utilis';

class  SignIn extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email: {
        type: 'email',
        name: 'email',
        value: '',
        label: 'Email',
        required: true
      },
      password: {
        type: 'password',
        name: 'password',
        value: '',
        label: 'Password',
        required: true
      }
    }
  }

  handleSubmit = (e)=>{
   e.preventDefault(); 
  }
  handleChange = ({target:{name, value}})=>{
    this.setState({
      [name]:{
        ...this.state[name],
        value
      }
    });

  }
  render(){
    return (
      <div className="SignIn">
        <h2> I already have an account </h2>
        <span>Sign in with your email and password </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            {...this.state.email}
          />
          <FormInput
            handleChange={this.handleChange}
            {...this.state.password}
          />
          <div className="SignIn-Buttons">
            <CustomButton type="submit"> Sign In  </CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>  Sign in with Google </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}


export default SignIn;