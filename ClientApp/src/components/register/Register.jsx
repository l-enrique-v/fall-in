import React, { useEffect, useState } from "react";
import "./registerStyles.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    locationId: "",
    hobbies: [],
    branchId: 0,
    coverImageUrl: "",
  });
  const [location, setLocation] = useState({
    stateId: "",
    zipCode: "",
    city: "",
  });
  const [states, setStates] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    Promise.all([
      fetch("https://localhost:7293/api/States", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      fetch("https://localhost:7293/api/Hobbies", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      fetch("https://localhost:7293/api/Branches", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
    ])
      .then(([statesResponse, hobbiesResponse, branchesResponse]) =>
        Promise.all([
          statesResponse.json(),
          hobbiesResponse.json(),
          branchesResponse.json(),
        ])
      )
      .then(([statesData, hobbiesData, branchesData]) => {
        setStates(statesData);
        setHobbies(hobbiesData);
        setBranches(branchesData);
      })
      .catch((error) => {
        console.log("Error Getting States, Hobbies, and Branches:", error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleLocation = (e) => {
    e.preventDefault();
    fetch("https://localhost:7293/api/Locations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(location),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Location created successfully:", data);
        // Extract the ID from the response
        const locationId = data.id; // Assuming the response object has an "id" property

        // Update formData with the locationId
        setFormData((prevFormData) => ({
          ...prevFormData,
          locationId: locationId,
        }));
        // then reset location back to blank
        setLocation({
          stateId: "",
          zipCode: "",
          city: "",
        });
      })
      .catch((error) => {
        console.log("Error creating new Location:", error);
      });
  };

  const handleLocationChange = (event) => {
    const { name, value } = event.target;
    setLocation((prevLocation) => ({
      ...prevLocation,
      [name]: value,
    }));
  };

  const handleBranchSelection = (event) => {
    const selectedBranch = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      branchId: parseInt(selectedBranch), // Convert selectedBranch to an integer
    }));
  };

  const handleHobbyToggle = (hobby) => {
    let selectedHobbies;
    if (formData.hobbies.includes(hobby)) {
      selectedHobbies = formData.hobbies.filter(
        (selectedHobby) => selectedHobby !== hobby
      );
    } else {
      selectedHobbies = [...formData.hobbies, hobby];
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      hobbies: selectedHobbies,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // This makes sure that email ends in .com and includes an @
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      console.log("Invalid email format");
      return;
    }

    // This makes sure password and password confirmation match
    if (formData.password !== formData.passwordConfirm) {
      console.log("Password and password confirmation do not match");
      return;
    }

    // Remove the passwordConfirm field from the form data
    const { passwordConfirm, ...dataWithoutPasswordConfirm } = formData;

    fetch("https://localhost:7293/api/Users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataWithoutPasswordConfirm),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User created successfully:", data);
        // then reset form back to blank
        setFormData({
          firstName: "",
          lastName: "",
          userName: "",
          email: "",
          password: "",
          locationId: "",
          hobbies: [],
          branchId: "",
        });
      })
      .catch((error) => {
        console.log("Error creating new user:", error);
      });
    console.log(dataWithoutPasswordConfirm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register Now</h2>
        <p className="text-secondary">
          Already signed up? <Link to={"/signin"}>Sign In</Link>
        </p>
        <div className=" ">
          <div className="d-flex">
            <div className="form-group col-4 m-2">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Ex. John"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-4 m-2">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Ex. Doe"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="form-group col-4 m-2">
              <label htmlFor="userName">User Name:</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                placeholder="Ex. Marine1775"
                value={formData.userName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-4 m-2">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Ex. CrayonEater123@mail.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="form-group col-4 m-2">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-4 m-2">
              <label htmlFor="passwordConfirm">Password Confirmation:</label>
              <input
                type="password"
                className="form-control"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="••••••••"
                value={formData.passwordConfirm}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="d-flex">
            <div className="form-group col-3 m-2">
              <label htmlFor="state">State:</label>
              <select
                className="form-control"
                id="state"
                name="stateId"
                value={location.stateId}
                onChange={handleLocationChange}
              >
                <option value="">Select a state</option>
                {states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.state_Name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-3 m-2">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="Ex. Albuquerque"
                value={location.city}
                onChange={handleLocationChange}
              />
            </div>
            <div className="form-group col-3 m-2">
              <label htmlFor="zip">Zip:</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                name="zipCode"
                placeholder="Ex. 87106"
                value={location.zipCode}
                onChange={handleLocationChange}
              />
            </div>
            <div className="form-group ">
              <label htmlFor="button" className="mt-2">
                &nbsp;
                <p>&nbsp; </p>
              </label>
              <button
                onClick={handleLocation}
                type="submit"
                className="m-2 btn btn-primary"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label className="mx-2">Please select your interests:</label>
            <div className="form-group d-flex">
              <div className="hobbies-container col-9">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.id} // Assuming each hobby has an "id" property
                    className={`hobby ${
                      formData.hobbies.includes(hobby.id) ? "selected" : ""
                    }`}
                    onClick={() => handleHobbyToggle(hobby.id)} // Assuming each hobby has an "id" property
                  >
                    {hobby.hobby_Name}{" "}
                    {/* Assuming each hobby has a "name" property */}
                  </div>
                ))}
                <div>{/* Existing code... */}</div>
              </div>
            </div>
            <label className="mx-2">Your selected interests:</label>
            <ul>
              {formData.hobbies.map((hobbyId) => {
                const selectedHobby = hobbies.find(
                  (hobby) => hobby.id === hobbyId
                ); // Assuming each hobby has an "id" property
                return selectedHobby ? (
                  <li key={selectedHobby.id}>{selectedHobby.hobby_Name}</li> // Assuming each hobby has a "name" property
                ) : null;
              })}
            </ul>
          </div>
          <div className="d-flex">
            <div className="form-group m-2 col-4">
              <label htmlFor="branchId">Branch Of Service:</label>
              <select
                className="form-control"
                id="branchId"
                name="branchId"
                value={formData.branchId}
                onChange={handleBranchSelection}
              >
                <option>Please select an option</option>
                {branches.map((branches) => (
                  <option key={branches.id} value={branches.id}>
                    {branches.branch}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group col-4 m-2">
            <label htmlFor="CoverImageUrl">Photo:</label>
            <input
              type="text"
              className="form-control"
              id="CoverImageUrl"
              name="CoverImageUrl"
              placeholder="Ex. google.com/picture"
              value={location.CoverImageUrl}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit" className="m-2 btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
