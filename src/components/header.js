import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
        <Link to="/feature" className="nav-link">Feature</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signout" className="nav-link">Sign Out</Link>
        </li>
      ];
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-link">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNavbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Redux Starter</Link>
          </div>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="nav navbar-nav navbar-right">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
