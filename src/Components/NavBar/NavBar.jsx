import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/listings">Listings</Link>
      &nbsp; | &nbsp;
      <Link to="/profile">My Profile</Link>
    </nav>
  );
}


