import React, { useState } from "react";
import "./Signup.css";
import { Button, Input, message, Steps, theme, Checkbox } from "antd";
import SignupForm from "./SignupForm";
import ProfileForm from "./ProfileForm";
import {
  useProfileUpdateMutation,
  useSendVerificationEmailMutation,
  useSignupMutation,
} from "../../api/farmApi";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const options = ["Nepal", "India", "Pakistan"];

const steps = [
  {
    title: "Signup",
    content: <SignupForm />,
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
    content: <ProfileForm />,
  },
];
const Signup = () => {
  const detail = useSelector((state) => state.signupState.data);

  const [signup, { data }] = useSignupMutation();
  const [sendVerificationEmail] = useSendVerificationEmailMutation();
  const [profileUpadte, { isError, error }] = useProfileUpdateMutation();

  useEffect(() => {
    if (data) {
      sendVerificationEmail(detail.username);
    }
  }, [data, detail.username, sendVerificationEmail]);

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    if (current == 0) {
      signup(detail);
      localStorage.setItem("username", detail.username);
    }

    setCurrent(current + 1);
  };

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [error, isError]);

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    padding: "2.4rem",
    FontSize: "1.6rem",
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };

  const updateProfileHandler = () => {
    profileUpadte({ ...detail, username: localStorage.getItem("username") });
    message.success("Processing complete!");
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
          <Button type="primary" onClick={updateProfileHandler}>
            Done
          </Button>
        )}
      </div>
    </div>
  );
};
export default Signup;
