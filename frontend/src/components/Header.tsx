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
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
