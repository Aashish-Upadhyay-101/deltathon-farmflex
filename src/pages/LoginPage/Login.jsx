import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useGlobalContext } from "../../StateManagement/Context.js";
import axios from "axios";


const Login = () => {
  const {URL} = useGlobalContext();
  const [loginData, setLoginData] = useState({
    email:"",
    password:"",
    rememberme: false,
  })

  const changeHandler =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setLoginData((data) => {
      return { ...loginData, [name]: value };
    });
  }
  
  const submitHandler = async(e)=>{
    e.preventDefault();
    const instance = await axios.create({
      withCredentials: true
    })
    instance.post(`${URL}api/user/login/`,loginData ).then((data)=>{
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    })
    
  }

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
            onChange={(e)=> changeHandler(e)}
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
            onChange={(e)=> changeHandler(e)}
            name="password"
            id="password"
            type="password"
            className="form-group-input"
            placeholder="8 digit password"
          />
        </div>
        <div className="form-remember">
          <div className="remember-me">
            <input 
            onChange={(e)=> changeHandler(e)}
            name="rememberme" 
            type="checkbox" 
            value={loginData.rememberme} /> 
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
            Didn't have an account? <Link  to="/signup">create here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
