import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Posts from "./components/posts";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./components/Services";
import "./index.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
