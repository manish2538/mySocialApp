import React from 'react'
import "./register.css"
export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MySocialApp</h3>
                    <span className="loginDesc">
                        Connect with friends
                    </span>
                </div>
                <div className="loginRight">




                    <div className="loginBox">
                        <input placeholder="Username" type="Email" className="loginInput" />
                        <input placeholder="Email" type="Email" className="loginInput" />
                        <input placeholder="Password" type="password" className="loginInput" />
                        <input placeholder="Password Again" type="password" className="loginInput" />
                        <button className="loginButton">Sign up</button>
                        
                        <button className="loginRegisterButton">Login Into account</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
