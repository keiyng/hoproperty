import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Header extends PureComponent {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
      >
        <a className="navbar-brand" href="/">
        <img src="https://drive.google.com/uc?export=view&id=1Z257Go1bkV2YfDSThhY7MhlxItJxaXDm" alt="Ho Property LLC"/>
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
            <li className="nav-item">
              <Link to="/subscribe" className="nav-link">
                Subscribe
              </Link>
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
