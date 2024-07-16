import React from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">News Feast</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-center">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
         
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
