import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycby7s_m39qbx1B2y5OOTpAk9ZtM0b3IryWxy00u6WQdriZcSRSo_ztILNeCvCBMobBnL/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="container">
      <h2>Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#00d4a8",
            border: "none",
            cursor: "pointer",
          }}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>
        {status === "success" && <p style={{ color: "green" }}>Message saved to RKbyte Google Sheet ✅</p>}
        {status === "error" && <p style={{ color: "red" }}>Failed. Try again.</p>}
      </form>
    </section>
  );
}

export default Contact;
