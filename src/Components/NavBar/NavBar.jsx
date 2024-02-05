import { Link, Routes, Route } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container d-flex">
        <Link className="navbar-brand" to="/">
          <img src="bluelogo.png" alt="iTech Logo" width="140" height="70" />
        </Link>
        <div className="navbar-nav d-flex">
          <Link className="nav-link" to="/listings">
            Listings
          </Link>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}

