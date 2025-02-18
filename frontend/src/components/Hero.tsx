import { Link } from "react-router-dom";

const Hero = () => {
    return (
      <section className="hero">
        <div className="hero-text">
          <h1>Building the Future, One Project at a Time</h1>
          <p>High-quality machinery for construction, mining, and infrastructure projects.</p>
          <Link to="/services" className="btn">Explore Our Services</Link>
        </div>
        <div className="hero-image">
          <img src="/construction-hero.jpg" alt="Construction site" />
        </div>
      </section>
    );
  };
  
  export default Hero;
  