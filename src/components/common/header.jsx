import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-item nav-link active" to="/">
          Home
          {' '}
          <span className="sr-only">(current)</span>
        </Link>
        <Link className="nav-item nav-link" to="/about">Features</Link>
        <Link className="nav-item nav-link" to="/">Contact</Link>
        <Link className="nav-item nav-link " to="/">Disabled</Link>
      </div>
    </div>
  </nav>
);


export default Header;
