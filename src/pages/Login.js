import React from "react";
import LoginForm from '../components/Auth/Login'
import '../styles/login.css'

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="logo">Bookk<br />Bookk
        </h1>
        <LoginForm></LoginForm>
      </div>
    </div>
  )
}

export default LoginPage;