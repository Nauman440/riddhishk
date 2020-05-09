import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../../images/menu-logo.jpg';

const Navbar = styled.div`
.nav-item {
  padding-right:50px !important;
  font-family: ${(props) => props.theme.btn_font} !important;
  color:#333 !important;
  font-weight:700;
  text-transform: uppercase;
}
`;

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <img src={logo} alt=" Logo added" />
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <Navbar className="navbar-nav">
        <Link className="nav-item nav-link active" to="/">
          Home
          {' '}
          <span className="sr-only">(current)</span>
        </Link>
        <Link className="nav-item nav-link" to="/about">About</Link>
        <Link className="nav-item nav-link" to="/services">Services</Link>
        <Link className="nav-item nav-link " to="/">Projects</Link>
        <Link className="nav-item nav-link " to="/contact">Contact</Link>
      </Navbar>
    </div>
  </nav>
);


export default Header;
