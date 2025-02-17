const About = () => {
  return (
    <div className="about">
      <h1>About George Contractor LTD</h1>
      <p>
        George Contractor LTD specializes in providing high-quality construction machinery for efficient and reliable project execution.
      </p>

      {/* Company History */}
      <div className="history">
        <h2>Our History</h2>
        <ul>
          <li><strong>2010:</strong> Company founded</li>
          <li><strong>2015:</strong> Expanded to major construction projects</li>
          <li><strong>2020:</strong> Became a leading supplier in Kenya</li>
          <li><strong>2025:</strong> Implemented cutting-edge technology</li>
        </ul>
      </div>

      {/* Vision and Mission */}
      <div className="vision-mission">
        <h2>Our Vision</h2>
        <p>To be the most trusted construction equipment provider in Africa.</p>

        <h2>Our Mission</h2>
        <p>To deliver high-quality and affordable construction machinery for all project sizes.</p>
      </div>
    </div>
  );
};

export default About;
