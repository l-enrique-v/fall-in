import React, { useState } from "react";
import "./registerStyles.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    location: {
      state: "",
      city: "",
      zip: "",
    },
    hobbies: [],
    newHobby: "",
    branchOfService: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLocationChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      location: {
        ...prevFormData.location,
        [name]: value,
      },
    }));
  };

  const handleServiceSelection = (event) => {
    const selectedService = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      branchOfService: selectedService,
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

  const hobbies = [
    "Weightlifting",
    "Hunting",
    "Fishing",
    "Woodworking",
    "Martial arts",
    "Automotive restoration",
    "Archery",
    "Motorcycling",
    "BBQ grilling and smoking",
    "Home brewing",
    "Camping",
    "Competitive shooting",
    "Hiking and mountaineering",
    "Playing sports",
    "DIY projects",
    "Leatherworking",
    "Survival skills training",
    "Metalworking",
    "Golfing",
    "Boxing",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const stateOptions = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

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
            <div className="form-group col-3 m-2">
              <label htmlFor="state">State:</label>
              <select
                className="form-control"
                id="state"
                name="state"
                value={formData.location.state}
                onChange={handleLocationChange}
              >
                <option value="">Select a state</option>
                {stateOptions.map((state) => (
                  <option key={state} value={state}>
                    {state}
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
                value={formData.location.city}
                onChange={handleLocationChange}
              />
            </div>
            <div className="form-group col-3 m-2">
              <label htmlFor="zip">Zip:</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                name="zip"
                placeholder="Ex. 87106"
                value={formData.location.zip}
                onChange={handleLocationChange}
              />
            </div>
          </div>
          <div>
            <label className="mx-2">Please select your interests:</label>
            <div className="form-group d-flex">
              <div className="hobbies-container col-9">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby}
                    className={`hobby ${
                      formData.hobbies.includes(hobby) ? "selected" : ""
                    }`}
                    onClick={() => handleHobbyToggle(hobby)}
                  >
                    {hobby}
                  </div>
                ))}{" "}
                <div>
                  <div className="hobby new-hobby-input">
                    <input
                      type="text"
                      placeholder="Add your own"
                      className="hobby-input"
                      id="hobby-input"
                      value={formData.newHobby}
                      onChange={(event) =>
                        setFormData((prevFormData) => ({
                          ...prevFormData,
                          newHobby: event.target.value,
                        }))
                      }
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          handleHobbyToggle(formData.newHobby.trim());
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            newHobby: "",
                          }));
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <label className="mx-2">Your selected interests:</label>
            <ul>
              {formData.hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))}
            </ul>
          </div>
          <div className="d-flex">
            <div className="form-group m-2 col-4">
              <label htmlFor="branchOfService">Branch Of Service:</label>
              <select
                className="form-control"
                id="branchOfService"
                name="branchOfService"
                value={formData.branchOfService}
                onChange={handleServiceSelection}
              >
                <option>Please select an option</option>
                <option value="Marine">Marine Corps</option>
                <option value="Army">Army</option>
                <option value="Navy">Navy</option>
                <option value="Air Force">Air Force</option>
                <option value="Coast Guard">Coast Guard</option>
                <option value="National Guard">National Guard</option>
                <option value="Other">Other</option>
              </select>
            </div>
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
