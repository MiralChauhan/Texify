import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary py-3"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <b>{props.title}</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            {/* switch button */}
            {/* <div className="form-check form-switch mx-3 text-light">
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={props.toggleMode}>
               Enable DarkMode
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div> */}
            {/*  */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Navbar.PropTypes = {
//     title: PropTypes.string,
//     about: PropTypes.string
// }

// Navbar.defaultProps = {
//   title: 'titleText',
//   about: "aboutText"
// }
