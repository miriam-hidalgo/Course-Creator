import React, { Component } from "react";
import Pagecontainer from "../components/pageContainer/index"
import API from "../utils/API"

class Login extends Component{
    render(){
        return(
            <Pagecontainer>
        <div>
        <nav>
            <ul>
                <li><a href="/auth/logout">Logout</a></li>
                <li><a href="/auth/login">Login</a></li>
                <li><a href="/">Homepage</a></li>
            </ul>
        </nav>
        <header>
            <h1>Login using...</h1>
        </header>
        <a class="google-btn" href="/auth/google">Google+</a>
        </div>
            </Pagecontainer>
        )
    }
}

export default Login;