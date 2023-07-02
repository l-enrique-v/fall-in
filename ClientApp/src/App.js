import React from "react";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import RegisterForm from "./components/register/Register";
import UserProfile from "./components/userProfile/UserProfile";
import FindVeterans from "./components/ShowVeterans/FindVeterans";
function App() {
  return (
    <React.Fragment>
      <Router>
        <NavMenu />
        <div className="container mt-5" style={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Register" element={<RegisterForm />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/FindVeterans" element={<FindVeterans/>} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
