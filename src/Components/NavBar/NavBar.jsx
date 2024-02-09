import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar bg-ebfbee">
      <div className="container text-center d-flex flex-column align-items-center justify-content-center vh-10 mt-3">
        <div>
          <NavLink to="/" className="navbar-title fs-10 title-style" style={{ textDecoration: 'none', color: 'black', fontSize: '7vmin' }}>
            💻 inTech
          </NavLink>
          <br/>
          <p><strong>Kickstart Your Coding Career with inTech!</strong>
</p>
          <div className="d-flex links">
            <NavLink
              className="nav-link mx-3 link-style"
              style={{ color: '#1971c2', transition: 'color 0.3s' }}
              to="/"
              activeclassname="active-link"
            >
              Job Listings
            </NavLink>
            <NavLink
              className="nav-link mx-3 link-style"
              style={{ color: '#1971c2', transition: 'color 0.3s' }}
              to="/tips"
              activeclassname="active-link"
            >
              CV Templates
            </NavLink>
            <NavLink
              className="nav-link mx-3 link-style"
              style={{ color: '#1971c2', transition: 'color 0.3s' }}
              to="/profile"
              activeclassname="active-link"
            >
              My Jobs
            </NavLink>
            <NavLink
              className="nav-link mx-3 link-style"
              style={{ color: '#1971c2', transition: 'color 0.3s' }}
              to="/about-us"
              activeclassname="active-link"
            >
              About Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
