import React, { useState } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby7s_m39qbx1B2y5OOTpAk9ZtM0b3IryWxy00u6WQdriZcSRSo_ztILNeCvCBMobBnL/exec"; // <- replace with your Web App /exec URL

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // no-cors so response is opaque; if request succeeds, we assume it was delivered
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // success UX
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact submit error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full p-3 border rounded" />
        <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="Your email" className="w-full p-3 border rounded" />
        <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your message" rows={5} className="w-full p-3 border rounded"></textarea>

        <div className="flex items-center gap-4">
          <button disabled={status === "loading"} type="submit" className="px-5 py-3 bg-rkaccent text-black rounded">
            {status === "loading" ? "Sending..." : "Send"}
          </button>

          {status === "success" && <p className="text-green-600">Thanks — your message was received. We’ll be in touch shortly.</p>}
          {status === "error" && <p className="text-red-600">Submission failed. Try again or email founder@rkbyte.com</p>}
        </div>
      </form>
    </section>
  );
}

export default Contact;
