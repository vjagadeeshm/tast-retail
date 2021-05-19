import React, { Component } from 'react';
import GoogleLogin from "react-google-login";

export class login extends Component {

    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }
    render() {
        return (
            <div>
                <GoogleLogin
                clientId="700469934266-47nhm2094bglfrf0t3ld4tpmicfak39c.apps.googleusercontent.com"
                buttonText="Sign in with Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
                />
                
            </div>
        )
    }
}

export default login
