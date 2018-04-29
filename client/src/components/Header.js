import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav style={{borderBottom: '1px solid gray', backgroundColor: '#ffffff'}}
        className="navbar sticky-top navbar-expand-lg navbar-light"
      >
        <a className="navbar-brand" href="/">
          Ho Property, LLC
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/property" className="nav-link">
                Properties
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/application" className="nav-link">
                Application
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href=""
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Subscribe
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/subscribe">
                  New Subscribers
                </Link>
                <Link className="dropdown-item" to="/update_preference">
                  Change my Preference
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
