import React from "react";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import UserProfile from "./components/userProfile/UserProfile";
function App() {
  return (
    <React.Fragment>
      <Router>
        <NavMenu />
        <div className="container mt-5" style={{ width: 1000 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/User" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
