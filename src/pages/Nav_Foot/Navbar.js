import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css'; // Import custom styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand " href="/">Kind Meal Connect</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home &nbsp;</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus">About Us &nbsp;</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/colab">Colab &nbsp;</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactus">Contact Us &nbsp;</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
