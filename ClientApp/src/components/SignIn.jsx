import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const SignIn = () => {
  const [signIn, setSignIn] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignIn((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    fetch("https://localhost:7293/api/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signIn),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Signed In successfully:", data);

        // Reset the form fields after signing in
        setSignIn({
          userName: "",
          password: "",
        });

        // Update the user data in the context
        updateUser(data);

        // Navigate to the dashboard page
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
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
            placeholder="Ex. CrayonEater123"
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
        <button
          type="submit"
          className="m-2 btn btn-primary"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
