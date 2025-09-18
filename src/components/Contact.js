import React, { useState, useRef } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby7s_m39qbx1B2y5OOTpAk9ZtM0b3IryWxy00u6WQdriZcSRSo_ztILNeCvCBMobBnL/exec";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const successRef = useRef(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const valid = () => formData.name.trim() && formData.email.trim() && formData.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!valid()) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type":"application/json" }, body: JSON.stringify(formData) });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(()=> successRef.current && successRef.current.scrollIntoView({ behavior: "smooth" }), 250);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-md space-y-3">
        <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full p-3 border rounded" />
        <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="Your email" className="w-full p-3 border rounded" />
        <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your message" rows={4} className="w-full p-3 border rounded"></textarea>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <button disabled={status==="loading" || !valid()} type="submit" className="btn bg-rkaccent text-black px-4 py-2 rounded">
            {status==="loading" ? "Sending..." : "Send Message"}
          </button>
          {status==="success" && <p ref={successRef} className="text-green-600">Thanks — your message was received.</p>}
          {status==="error" && <p className="text-red-600">Submission failed. Try again or email founder@rkbyte.com</p>}
        </div>
      </form>
    </section>
  );
}

export default Contact;
