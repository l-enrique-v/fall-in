import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import "./userprofile.css";
import "../../fonts/fonts.css";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  const [states, setStates] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [branches, setBranches] = useState([]);
  const [location, setLocation] = useState(null);
  const [userState, setUserState] = useState(null);
  const [userBranch, setUserBranch] = useState(null);
  const hardcodedHobbies = [
    "Weightlifting, ",
    "Hunting, ",
    "Fishing, ",
    "Woodworking, ",
    "Martial arts ",
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          statesResponse,
          hobbiesResponse,
          branchesResponse,
          locationResponse,
        ] = await Promise.all([
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
          fetch(`https://localhost:7293/api/locations/${user.locationId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }),
        ]);

        if (
          !statesResponse.ok ||
          !hobbiesResponse.ok ||
          !branchesResponse.ok ||
          !locationResponse.ok
        ) {
          throw new Error("Failed to fetch data");
        }

        const [statesData, hobbiesData, branchesData, locationData] =
          await Promise.all([
            statesResponse.json(),
            hobbiesResponse.json(),
            branchesResponse.json(),
            locationResponse.json(),
          ]);

        setStates(statesData);
        setHobbies(hobbiesData);
        setBranches(branchesData);
        setLocation(locationData);

        // Find the state with the matching stateId
        const state = statesData.find(
          (state) => state.id === locationData.stateId
        );
        setUserState(state);

        // Find the branch with the matching branchId
        const branch = branchesData.find(
          (branch) => branch.id === (user && user.branchId)
        );
        setUserBranch(branch);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user && user.branchId, user && user.locationId]);
  console.log(userBranch);

  if (!user) {
    return (
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="text-center">
          <h1>Error: You are not logged in</h1>
          <p>
            Please <Link to={"/Login"}>Log In</Link> to access the User Profile.
          </p>
          <p>
            not Signed Up? <Link to={"/Register"}>Register Now!</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="profile-card mb-3 mt-2">
        <div className="profile-card-body">
          <img
            src={user.coverImageUrl}
            className="profile-image"
            alt="User Cover"
          />
          <div className="profile-name-container">
            <h1 className="profile-card-title m-2  logoletters underline">
              {user.userName}
            </h1>
            <h2 className="profile-card-text">
              <span className="logoletters" style={{ fontSize: 50 }}>
                {user.firstName}
              </span>{" "}
              <span className="logoletters" style={{ fontSize: 50 }}>
                {user.lastName}
              </span>
            </h2>
          </div>
          <div>
            <div>
              <h2 className="profile-card-text">Branch:</h2>
              <span className="logoletters" style={{ fontSize: 45 }}>
                {userBranch ? userBranch.branch : ""}
              </span>
            </div>
            <div>
              <h2 className="profile-card-text">Location:</h2>
              <span className="logoletters" style={{ fontSize: 45 }}>
                {location
                  ? `${location.city}, ${userState.state_Name}, ${location.zipCode}`
                  : ""}
              </span>
            </div>
          </div>
          <div>
            <h2 className="profile-card-text">Hobbies:</h2>
            {hardcodedHobbies.map((hobby, index) => (
              <span
                className="logoletters hobby"
                style={{ fontSize: 30 }}
                key={index}
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
