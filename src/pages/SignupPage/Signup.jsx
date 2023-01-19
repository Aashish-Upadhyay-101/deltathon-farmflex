import React from "react";
import "./Signup.css";
import { Button, Input, message, Steps, theme, Checkbox } from "antd";
import { useState } from "react";
import countryList from "react-select-country-list";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form } from "react-router-dom";

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
            <option>Nepal</option>
            <option>India</option>
            <option>Bangladesh</option>
            <option>Srilanka</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city" className="form-group-label">
            City
          </label>
          <input
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
          <select className="signup-select">
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
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

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
      <Steps current={current} items={items} />
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
