import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="right">Home</Link>
          <Link to="/property" className="right">Properties</Link>
          <Link to="/application" className="right">Application</Link>
          <Link to="/tenant" className="right">Tenant Login</Link>
          <Link to="/contact" className="right">Contact</Link>
        </div>
      </nav>
    );
  }
}

export default Header;