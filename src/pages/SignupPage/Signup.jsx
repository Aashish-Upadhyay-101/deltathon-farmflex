import React, {useState} from "react";
import "./Signup.css";
import { Button, Input, message, Steps, theme, Checkbox } from "antd";
import axios from "axios";

const options = ["Nepal", "India", "Pakistan"];

const steps = [
  {
    title: "Signup",
    content: (
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username" className="form-group-label">
            Username
          </label>
          <input
            name="username"
            id="username"
            type="text"
            className="form-group-input"
            placeholder="john123"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-group-label">
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            className="form-group-input"
            placeholder="8 digit password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstname" className="form-group-label">
            First name
          </label>
          <input
            name="firstname"
            id="text"
            type="text"
            className="form-group-input"
            placeholder="first name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname" className="form-group-label">
            Last name
          </label>
          <input
            name="lastname"
            id="text"
            type="text"
            className="form-group-input"
            placeholder="last name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-group-label">
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            className="form-group-input"
            placeholder="8 digit password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-group-label">
            Confirm password
          </label>
          <input
            name="confirmpassword"
            id="password"
            type="password"
            className="form-group-input"
            placeholder="8 digit password"
          />
        </div>
      </form>
    ),
  },
  {
    title: "Verify",
    content: (
      <p
        style={{ textAlign: "center", marginTop: "4.4rem", fontSize: "2.4rem" }}
      >
        An verification email is send to your account please check it.
      </p>
    ),
  },
  {
    title: "Create Profile",
    content: (
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="username" className="form-group-label">
            Country
          </label>
          <select className="signup-select">
            <option value="nepal">Nepal</option>
            <option value="india">India</option>
            <option value="bangladesh">Bangladesh</option>
            <option value="srilanka">Srilanka</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city" className="form-group-label">
            City
          </label>
          <input
            name="city"
            id="city"
            type="city"
            className="form-group-input"
            placeholder="Dharan"
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipcode" className="form-group-label">
            Zip code
          </label>
          <input
            name="zipcode"
            id="text"
            type="text"
            className="form-group-input"
            placeholder="zip code"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-group-label">
            Phone number
          </label>
          <input
            name="phonenumber"
            id="text"
            type="text"
            className="form-group-input"
            placeholder="include country code"
          />
        </div>
        <div className="form-group">
          <label htmlFor="whoAreYou" className="form-group-label">
            Who are you?
          </label>
          <select className="signup-select" name="whoareyou">
            <option>Farmer</option>
            <option>Cold Store</option>
            <option>Consumer</option>
          </select>
        </div>
      </form>
    ),
  },
];
const Signup = () => {
  const [stepOneSignUp, setStepOneSignUp] = useState({
    username:"",
    email:"",
    firstname:"",
    lastname:"",
    password:"",
    confirmpassword:""
  })
  const [stepTwoSignUp, setStepTwoSignUp] = useState({
    country:"",
    city:"",
    zipCode:"",
    phonenumber: "",
    whoareyou:""
  })


  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const changeOneHandler=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setStepOneSignUp((data) => {
      return { ...stepOneSignUp, [name]: value };
    });
  }

  const changeTwoHandler=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setStepTwoSignUp((data) => {
      return { ...stepTwoSignUp, [name]: value };
    });
  }

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    // color: token.colorTextTertiary,
    padding: "2.4rem",
    FontSize: "1.6rem",
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };
  return (
    <div className="signup">
      <Steps changeOneHandler={changeOneHandler} changeTwoHandler={changeTwoHandler}  current={current} items={items} stepOneSignUp={stepOneSignUp} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
      </div>
    </div>
  );
};
export default Signup;
