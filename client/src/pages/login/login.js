import React, { Component } from "react";
import API from "../../utils/API"
import NewLoginForm from "../../components/newLoginForm/newLoginForm"
import styles from "./login.css";
const $ = window.$;


class Login extends Component{
// function Login(props){
    // constructor(props){
    //     super(props)
    //     console.log("login props are "+JSON.stringify(this.props))
    // }

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
                <h1 className='white-text'>Course Creator</h1>
                <h3 className='white-text'>Your Learning Managment Resource</h3>
                <p className='white-text'>Access to this site requires a login</p>
            </header>
            <div className="scale-out">
                {/* <NewLoginForm /> */}
                <NewLoginForm setSessionToken={this.props.setSessionToken}/>
            </div>
            <br></br>
        </div>
        )
    }
}

export default Login;