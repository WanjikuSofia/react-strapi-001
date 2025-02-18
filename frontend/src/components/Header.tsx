import { Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">George Contractor LTD</div>
      <nav>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link  to="/services">Services</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
