import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar bg-ebfbee">
      <div className="container text-center d-flex flex-column align-items-center justify-content-center vh-10 mt-3">
        <div>
          <Link to="/" className="navbar-title fs-10 title-style" style={{ textDecoration: 'none', color: 'black', fontSize: '7vmin' }}>
            💻 inTech
          </Link>
          <div className="d-flex links">
            <Link
              id="link"
              className="nav-link mx-3 link-style"
              style={{ color: '#1971c2', transition: 'color 0.3s' }}
              to="/"
              activeClassName="active-link"
            >
              Listings
            </Link>
            <Link
              id="link"
              className="nav-link mx-3 link-style"
              style={{ color: '#1971c2', transition: 'color 0.3s' }}
              to="/tips"
              activeClassName="active-link"
            >
              Tips
            </Link>
            <Link
              id="link"
              className="nav-link mx-3 link-style"
              style={{ color: '#1971c2', transition: 'color 0.3s' }}
              to="/profile"
              activeClassName="active-link"
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}