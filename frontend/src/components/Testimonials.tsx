const testimonials = [
    {
      name: "Sophia Wanjiku",
      company: "XYZ Constructions",
      feedback: "George Contractor LTD provided us with top-quality excavators. Highly recommend!",
    },
    {
      name: "George Karanja",
      company: "BuildWell Ltd.",
      feedback: "Excellent service and reliable machinery. A great partner for construction projects!",
    },
    {
      name: "Peter Kibara",
      company: "HeavyWorks Inc.",
      feedback: "Professional and efficient service. The cranes were in perfect condition.",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>"{testimonial.feedback}"</p>
              <h3>- {testimonial.name}, {testimonial.company}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  