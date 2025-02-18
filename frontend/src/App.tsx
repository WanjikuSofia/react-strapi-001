import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Posts from "./components/posts";
import About from "./pages/About";
import Home from "./pages/Home";
import Testimonials from "./components/Testimonials";
import "./index.css";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/Servicespage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
