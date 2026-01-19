import React from 'react'
import '../CSS/Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">

<nav className="navbar navbar-expand-lg bg-body-light" data-bs-theme="dark">
    <Link className="navbar-brand" to="#">HulkGYM</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div className="collapse navbar-collapse nav-desktop" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link" to="/membership">Membership</Link>
        </li>
      </ul>
    </div>
</nav>

    </div>
  )
}

export default Nav;