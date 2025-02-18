import { useState } from "react";
import "../index.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Fill out the form below or reach out to us directly.</p>

      {submitted ? (
        <p className="success-message">Thank you for contacting us! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </label>
          <button type="submit" className="btn">Send Message</button>
        </form>
      )}

      <div className="contact-details">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> georgegithui60@gmail.com</p>
        <p><strong>Phone:</strong> 0111208744</p>
        <p><strong>Address:</strong> MOMBASA</p>
      </div>
    </div>
  );
};

export default Contact;
