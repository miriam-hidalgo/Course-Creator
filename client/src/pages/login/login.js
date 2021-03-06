import React, { Component } from "react";
import NewLoginForm from "../../components/newLoginForm/newLoginForm"
import styles from "./login.css";
const $ = window.$;


class Login extends Component{

    componentDidMount=()=>{
        $('body').css('background-image','url(https://www.jitterbit.com/wp-content/uploads/2018/11/higher-ed-background-blue.jpg)');
        $('body').css('background-size','cover')
    }

    componentWillUnmount=()=>{
        $('body').css('background-image','none');
    }
    
    render(){
        return(
        <div className="container">

            <header>
                <h1 className='logintext center-align'>Course Creator</h1>
                <h3 className='logintext center-align'>Your Learning Managment Resource</h3>
                <h6 className='logintext center-align'>Access to this site requires a login</h6>
            </header>
            <br></br>
            <div className="scale-out">
                <NewLoginForm setSessionToken={this.props.setSessionToken}/>
            </div>
        </div>
        )
    }
}

export default Login;