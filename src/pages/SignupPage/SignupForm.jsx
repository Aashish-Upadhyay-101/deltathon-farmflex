import React from "react";
import { useState } from "react";
import { useSignupMutation } from "../../api/farmApi";
import { useDispatch } from "react-redux";
import { signupFormData } from "../../features/farmSlice";
import { useEffect } from "react";

const SignupForm = () => {
  const dispatch = useDispatch();

  const [detail, setDetail] = useState({
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    dispatch(signupFormData(detail));
  }, [detail]);

  return (
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
          onChange={(e) => setDetail({ ...detail, username: e.target.value })}
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
          onChange={(e) => setDetail({ ...detail, email: e.target.value })}
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
          onChange={(e) => setDetail({ ...detail, first_name: e.target.value })}
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
          onChange={(e) => setDetail({ ...detail, last_name: e.target.value })}
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
          onChange={(e) => setDetail({ ...detail, password: e.target.value })}
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
          onChange={(e) => setDetail({ ...detail, password2: e.target.value })}
        />
      </div>
    </form>
  );
};

export default SignupForm;
