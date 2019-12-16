import React from 'react';
import './sign-up.styles.scss';
import  FormInput from '../form-input/form-input.component';
import CustomButton from '../cutom-button/custom-button.component';


class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      displayName : {
        name: 'displayName',
        type: 'text',
        value : '',
        label: 'Display Name',
        required: true
      },
      email: {
        name: 'email',
        type: 'email',
        value : '',
        label: 'Email',
        required: true
      },
      password: {
        name: 'password',
        type: 'password',
        value : '',
        label: 'Password',
        required: true
      },
      confirmPassword: {
        name: 'confirmPassword',
        type: 'password',
        value : '',
        label: 'Confirm password',
        required: true
      }
    };
  }
  handleChange = ({target:{name, value}})=>{
    this.setState({
      [name]:{
        ...this.state[name],
        value
      }
    });
  }
  handleSubmit = (e)=>{
    e.preventDefault();
  }

  render(){
    return (
      <div className="SignUp">
        <h2 className="'title"> I do not have a account</h2>
        <span> Sign up with your email and password</span>
        <form  className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            {...this.state.displayName}
          />
          <FormInput
            handleChange={this.handleChange}
            {...this.state.email}
          />
          <FormInput
            handleChange={this.handleChange}
            {...this.state.password}
          />
          <FormInput
            handleChange={this.handleChange}
            {...this.state.confirmPassword}
          />
          <CustomButton type="submit"> Sign up </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;