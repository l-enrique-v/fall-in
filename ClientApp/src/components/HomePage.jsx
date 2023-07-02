import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faHandshakeAngle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    return (
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="text-center">
          <h1>Error: You are not logged in</h1>
          <p>
            Please <Link to={"/Login"}>Log In</Link> to access the Dashboard.
          </p>
          <p>
            not Signed Up? <Link to={"/Register"}>Register Now!</Link>
          </p>
        </div>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="mb-5">
        <h1>Hello {user.firstName}, let's get social!</h1>
        <div className="card">
          {/* <img className="card-img-top" src="..." alt="something" /> */}
          <div className="card-body">
            <h2>Connect with Fellow Veterans</h2>
            <p>
              Sometimes you need someone there who understands your experiences
              and mindset. Connect with fellow veterans who can relate to your
              journey.
            </p>
            <p>
              Share your stories, discuss common interests, and build a strong
              network within the veteran community.
            </p>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="card col-3 mx-1 px-1">
          <FontAwesomeIcon icon={faPeopleGroup} size="3x" className="mt-3" />
          <div className="card-body text-center ">
            <h5 className="card-title">Find Veterans</h5>
            <p className="card-text">
              Search and discover veterans with similar interests, backgrounds,
              or locations. Expand your network and connect with new individuals
              who share your experiences.
            </p>
            <a href="/FindVeterans">
              <button className="mt-3 btn btn-success">Find Veterans</button>
            </a>
          </div>
        </div>
        <div className="card col-3 mx-1 px-1">
          <FontAwesomeIcon icon={faHandshakeAngle} size="3x" className="mt-3" />
          <div className="card-body text-center">
            <h5 className="card-title">Veteran Resources</h5>
            <p className="card-text">
              Explore valuable resources specifically tailored for veterans.
              Access information, programs, and support services to help you
              thrive in your post-military life.
            </p>
            <a
              href="https://www.va.gov/resources/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-3 btn btn-success">
                Veteran Resources
              </button>
            </a>
          </div>
        </div>
        <div className="card col-3 mx-1 px-1">
          <FontAwesomeIcon icon={faUser} size="3x" className="mt-3" />
          <div className="card-body text-center">
            <h5 className="card-title">My Profile</h5>
            <p className="card-text">
              Customize your profile, add information about your military
              service, and interests. Connect with other veterans and showcase
              your unique experiences.
            </p>
            <a href="/UserProfile">
              <button className="mt-3 btn btn-success">Go To Profile</button>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
