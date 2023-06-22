import React from "react";

const Navbar = ({ gotoNextPage, gotoPrevPage }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand">Pokemon name generator</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {gotoPrevPage && (
                  <button className="btn btn-dark m-1" onClick={gotoPrevPage}>
                    Previous
                  </button>
                )}
              </li>
              <li className="nav-item">
                {gotoNextPage && (
                  <button className="btn btn-dark m-1" onClick={gotoNextPage}>
                    Next
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
