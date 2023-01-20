import React from "react";
import "./Payment.css";
import Image from "../../images/khalti.webp";
import { Button, notification } from "antd";
import { useNavigate } from "react-router";

const Payment = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    // navigate("/my-storage");
    notification.open({
      message: "Store booked",
      description: "Check my storages to see what you have on your store.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
    window.location.href = "http://localhost:3000/my-storage";
  };

  return (
    <div className="payment_container">
      <form className="payment_sub_container" onSubmit={submitHandler}>
        <div className="khaltilogo_container">
          <img src={Image} />
        </div>
        <div className="khalti_detail_container">
          <div>
            <label>Mobile*</label>
            <input
              name=""
              type="text"
              placeholder="please enter your mobile number"
            />
          </div>
          <div>
            <label>Khalti Pin*</label>
            <input
              type="text"
              placeholder="please enter your mobile Pin number"
            />
          </div>
        </div>
        <div className="payment_submit">
          <button className="payment_button">Pay Rs.1000</button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
