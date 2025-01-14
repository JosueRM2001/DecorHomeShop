import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="brand">Product Catalog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
