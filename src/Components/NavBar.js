import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <div>

      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="general">WorldTopNews</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/general">Home</Link>
              </li>

              <li className="nav-item"><Link className="nav-link text-white" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/sports">Sports</Link></li>

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}
export default NavBar
