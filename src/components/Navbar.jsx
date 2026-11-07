import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">DEV@Deakin</Link>
      <input
        type="text"
        className="navbar-search"
        placeholder="Search..."
      />
      <div className="navbar-links">
<Link to="/post" className="navbar-post">Post</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
