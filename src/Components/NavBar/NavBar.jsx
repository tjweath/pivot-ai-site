import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar bg-ebfbee">
      <div className="container text-center d-flex flex-column align-items-center justify-content-center vh-10 mt-3">
        <div>
          <NavLink to="/" className="navbar-title fs-10 title-style" style={{ textDecoration: 'none', color: 'black', fontSize: '7vmin' }}>
            Pivot-AI
          </NavLink>
          <br/>
          <div className="d-flex links">
            {/* <NavLink
              className="nav-link mx-3 link-style"
              style={{ color: '#1971c2', transition: 'color 0.3s' }}
              to="/"
              activeclassname="active-link"
            >
              Home
            </NavLink> */}
            {/* <NavLink
              className="nav-link mx-3 link-style"
              style={{ color: '#1971c2', transition: 'color 0.3s' }}
              to="/about-us"
              activeclassname="active-link"
            >
               Contact
            </NavLink> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
