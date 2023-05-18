import React from "react";
import './login.scss';
import logo from '../../images/logo.png';

const Login = () => {

    return (
        <div className="login">
            <div className="loginContainer">
                <div className="top">
                    <div className="topLeft">
                       <img src={logo} alt="logo" />
                    </div>
                    <div className="topRight">
                       <h1>Türkmenistanyň bilim merkezi</h1>
                    </div>
                </div>
                <form className="bottom">
                    <div className="inputs">
                        <label htmlFor="phone">Telefon</label>
                        <input type="tel"/>
                    </div>
                    <div className="inputs">
                        <label htmlFor="password">Parol</label>
                        <input type="password"/>
                    </div>
                    <div className="addButton">
                        <button>Girmek</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;