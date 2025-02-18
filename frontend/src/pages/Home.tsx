import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services"; // Now used correctly
import Testimonials from "../components/Testimonials";
import Posts from "../components/posts";
import "../index.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="services-overview">
        <h2>Our Services</h2>
        <p>From excavators to cranes, we supply a wide range of heavy machinery for all construction needs.</p>
        <Link to="/services" className="btn">View More</Link>
      </section>

      {/* Render Services Component */}
      <Services /> 

      {/* Posts Section */}
      <section className="latest-posts">
        <h2>Latest Updates</h2>
        <Posts />
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;
