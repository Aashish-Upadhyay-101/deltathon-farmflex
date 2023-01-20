import React, { useEffect, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import "./Login.css";
import { useLoginMutation } from "../../api/farmApi";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [Login, { data }] = useLoginMutation();

  const submitHandler = (e) => {
    e.preventDefault();
    Login(loginData);
    navigate('/store');
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("access", data.access);
      console.log(data);
    }
  });

  return (
    <div className="login">
      <div className="login__header">
        <h1>Login</h1>
      </div>
      <form className="login__form" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email" className="form-group-label">
            Email
          </label>
          <input
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            name="email"
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
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            name="password"
            id="password"
            type="password"
            className="form-group-input"
            placeholder="8 digit password"
          />
        </div>
        <div className="form-remember">
          <div className="remember-me">
            <input name="rememberme" type="checkbox" />
            <span>Remember me</span>
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
