import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from "react-router-dom";
import Login from '../components/Login';
import "./Signup.css";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
  
export class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            formErrors: {
              firstName: "",
              lastName: "",
              email: "",
              password: ""
            }
          };
    }

    handleSubmit = e => {

        e.preventDefault();
        if(this.state.email === "hruday123@gmail.com" && this.state.password === "123456"){
          this.props.history.push("/Homepage");
        }else{
          alert("Invalid email or password");
        }

        axios.post(`https://api.jsonbin.io/b/60a3c075afdfa5309c8b5a4e`).then(res=>{
          console.log(res);
          console.log(res.data);
        })
        
    
        if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}
          `);

        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
        
      };
    
      handleChange = e => {
        e.preventDefault();
        
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "firstName":
            this.setState({
              firstName:value
            })
            formErrors.firstName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "lastName":
            this.setState({
              lastName:value
            })
            formErrors.lastName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "email":
            this.setState({
              email:value
            })
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "password":
            this.setState({
              password:value
            })
            formErrors.password =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value });
      };

    render() {
        const { formErrors } = this.state;

        return (
            <div>
                <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                value={this.state.firstName}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={this.state.lastName}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.email}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already Have an Account?</small>
            <Login />
            </div>
          </form>
        </div>
      </div>
    </div>
        )
    }
}

export default withRouter(Signup)
