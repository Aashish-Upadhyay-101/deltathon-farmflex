import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__header">
        <h1>Login</h1>
      </div>
      <form className="login__form">
        <div className="form-group">
          <label htmlFor="email" className="form-group-label">
            Email
          </label>
          <input
            id="email"
            type="text"
            className="form-group-input"
            placeholder="someone@email.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-group-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-group-input"
            placeholder="8 digit password"
          />
        </div>
        <div className="form-remember">
          <div className="remember-me">
            <input type="checkbox" /> <span>Remember me</span>
          </div>
          <div className="form-extra">
            <span>forgot password?</span>
          </div>
        </div>
        <div className="form-submit">
          <button className="primary-btn w-100">Login</button>
        </div>
        <div className="form-extra">
          <p>
            Didn't have an account? <Link to="/signup">create here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
