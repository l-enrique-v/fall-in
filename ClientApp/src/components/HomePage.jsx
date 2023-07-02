import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="mb-5">
        <div className="card">
          <img className="card-img-top" src="..." alt="something" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="card col-4 px-2">
          <img className="card-img-top" src="..." alt="something" />
          <div className="card-body">
            <h5 className="card-title">Find Veterans</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/FindVeterans">
              <button className="mt-3 btn btn-primary">Find Veterans</button>
            </a>
          </div>
        </div>
        <div className="card col-4 px-2">
          <img className="card-img-top" src="..." alt="something" />
          <div className="card-body">
            <h5 className="card-title">Veteran Resources</h5>
            <p className="card-text">
              Something about veteran resources
              <a href="https://www.va.gov/resources/">
                <button className="mt-3 btn btn-primary">
                  Veteran Resources
                </button>
              </a>
            </p>
          </div>
        </div>
        <div className="card col-4 px-2">
          <img className="card-img-top" src="..." alt="something" />
          <div className="card-body">
            <h5 className="card-title">My Profile</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default HomePage;
