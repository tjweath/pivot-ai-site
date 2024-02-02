import { Link } from "react-router-dom"

export default function NavBar(){
    return (
      <nav className="nav">
        <Link>Listings</Link>
        &nbsp; | &nbsp;
        <Link>My Profile</Link>
      </nav>
    );
}