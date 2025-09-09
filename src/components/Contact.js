import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting RKbyte! We’ll get back to you soon.");
  };

  return (
    <section className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit" style={{ padding: "10px", background: "#00d4a8", border: "none", cursor: "pointer" }}>Send</button>
      </form>
    </section>
  );
}

export default Contact;