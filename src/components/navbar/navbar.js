
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import "./navbar.css";
import logo from '../../assets/logo.png';
import { jwtDecode } from 'jwt-decode';
const Navbar = () => {
  const navlinks = [
    { name: "Home", to: "/" },
    { name: "About us", to: "/about" },
    { name: "Ewaste Request", to: "/ewasteRequest" },
    { name: "Contact us", to: "/contact" }
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState();
  useEffect(() => {

    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken = jwtDecode(token);
      setUserName(decodedToken.name);
      setIsLoggedIn(true);
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a class="navbar-brand d-flex justify-content-center align-items-center" href="#">
        <img src={logo} width="60" height="60" class="d-inline-block align-top" alt="Image not found" />
        <span className="brand-name">UP Cycle</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {navlinks.map((link, index) => (
            <li className="nav-item" key={index}>
              <NavLink className="nav-link" id="navlink" to={link.to}>{link.name}</NavLink>
            </li>
          ))}
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Important Links
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

          {isLoggedIn &&
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i>Hello,</i> <span id='username'>{userName}</span>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link class="dropdown-item" to="/#" onClick={handleLogout}>Logout</Link>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>}
          {!isLoggedIn && <button className="btn login-btn" >
            <Link className='text-light text-decoration-none' to="/login">Login</Link>
          </button>}

        </ul>

      </div>
    </nav>
  )
}

export default Navbar;
