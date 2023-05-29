import React, { useState } from "react";
import './login.scss';
import logo from '../../images/logo.png';
import axios from "axios";
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        
        try {
            const res = await axios.post("http://127.0.0.1:8000/api/login", data);
            let token = res.data.token;
            console.log(token);
            navigate('/home');
        } catch (err) {
            console.log(err);
            alert('Bular ýaly ulanyjy tapylmady. Täzeden synanyşyň!')
        }
    }


    return (
        <div className="login">
            <div className="blur">
            <div className="loginContainer">
                <div className="top">
                    <img src={logo} alt="logo" />
                </div>
                <h1>Giriş</h1>
                <form className="bottom" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <label htmlFor="username">Ulanyjy ady</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            required
                            value={data.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="inputs">
                        <label htmlFor="password">Parol</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="addButton">
                        <button>Girmek</button>
                    </div>
                </form>
            </div>
         </div>
        </div>
    )
}

export default Login;