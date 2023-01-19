import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupFormData } from "../../features/farmSlice";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const [detail, setDetail] = useState({
    country: "",
    city: "",
    zip_code: "",
    phone_number: "",
    profile_type: "",
  });

  useEffect(() => {
    dispatch(signupFormData(detail));
  }, [detail]);
  return (
    <form className="signup-form">
      <div className="form-group">
        <label htmlFor="username" className="form-group-label">
          Country
        </label>
        <select
          className="signup-select"
          onChange={(e) => setDetail({ ...detail, country: e.target.value })}
        >
          <option>Select one</option>
          <option value="Nepal">Nepal</option>
          <option value="India">India</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Srilanka">Srilanka</option>
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
          onChange={(e) => setDetail({ ...detail, city: e.target.value })}
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
          onChange={(e) => setDetail({ ...detail, zip_code: e.target.value })}
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
          onChange={(e) =>
            setDetail({ ...detail, phone_number: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="whoAreYou" className="form-group-label">
          Who are you?
        </label>
        <select
          className="signup-select"
          name="whoareyou"
          onChange={(e) =>
            setDetail({ ...detail, profile_type: e.target.value })
          }
        >
          <option>Select one</option>
          <option value="Farmer">Farmer</option>
          <option value="Cold Store">Cold Store</option>
          <option value="Consumer">Consumer</option>
        </select>
      </div>
    </form>
  );
};

export default ProfileForm;
