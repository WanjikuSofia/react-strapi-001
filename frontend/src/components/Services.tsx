
import "../index.css";

const services = [
  {
    id: 1,
    title: "Excavators",
    description: "High-performance excavators for all construction needs.",
    image: "src/image/excavator.jpg",
  },
  {
    id: 2,
    title: "Cranes",
    description: "Reliable cranes for heavy lifting and high-rise construction.",
    image: "src/image/crane.jpg",
  },
  {
    id: 3,
    title: "Bulldozers",
    description: "Strong and durable bulldozers for land clearing.",
    image: "src/image/bulldozer.jpg",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <img src={service.image} alt={service.title} className="service-image" />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
