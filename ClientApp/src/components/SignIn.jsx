import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [signIn, setSignIn] = useState({
    userName: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignIn((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div>
      <h2>Sign In</h2>
      <p className="text-secondary">
        Not signed up? <Link to="/register">Register Now</Link>
      </p>
      <div className="">
        <div className="form-group col-4 m-2">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            placeholder="CrayonEater123"
            value={signIn.userName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group col-4 m-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="••••••••"
            value={signIn.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="m-2 btn btn-primary">
          Sign In
        </button>
      </div>
    </div>
  );
};
export default SignIn;
