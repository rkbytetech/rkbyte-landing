// src/pages/Contact.js

import React, { useRef, useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby7s_m39qbx1B2y5OOTpAk9ZtM0b3IryWxy00u6WQdriZcSRSo_ztILNeCvCBMobBnL/exec";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const successRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const valid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!valid) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        successRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 200);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/rkbyte-tech-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/55" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">

          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-rkaccent" />

            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-rkaccent">
              Contact RKbyte
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] max-w-4xl">
            Let's build something{" "}
            <span className="text-rkaccent">smarter.</span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Have an idea, a technical challenge, or a project in mind?
            Tell us what you're working on and let's explore how RKbyte
            can help.
          </p>

        </div>
      </section>


      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-12 xl:gap-20 items-start">

          {/* =================================================
              FORM
          ================================================== */}

          <div className="min-w-0 max-w-2xl">

            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-rkaccent mb-4">
              Start a conversation
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Tell us what you're building.
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl">
              Whether you're looking for a custom automation system,
              IoT solution, laboratory technology, or a new product
              concept, send us the details below.
            </p>


            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              {/* NAME */}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 outline-none transition focus:border-rkaccent focus:ring-2 focus:ring-rkaccent/20"
                />
              </div>


              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 outline-none transition focus:border-rkaccent focus:ring-2 focus:ring-rkaccent/20"
                />
              </div>


              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Tell us about your project
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  placeholder="Describe your idea, requirement, problem, or project..."
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 outline-none resize-none transition focus:border-rkaccent focus:ring-2 focus:ring-rkaccent/20"
                />
              </div>


              {/* BUTTON */}

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">

                <button
                  type="submit"
                  disabled={status === "loading" || !valid}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-rkaccent text-black font-semibold transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading"
                    ? "Sending..."
                    : "Send Enquiry"}
                </button>


                {status === "success" && (
                  <p
                    ref={successRef}
                    className="text-sm font-medium text-green-600"
                  >
                    ✓ Thanks — your message was received.
                  </p>
                )}


                {status === "error" && (
                  <p className="text-sm font-medium text-red-600">
                    Unable to send. Please try again or email{" "}
                    <a
                      href="mailto:founder@rkbyte.com"
                      className="underline"
                    >
                      founder@rkbyte.com
                    </a>
                  </p>
                )}

              </div>

            </form>

          </div>


          {/* =================================================
              RIGHT CONTACT CARD
          ================================================== */}

          <div className="w-full min-w-0 lg:sticky lg:top-24">

            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

              <div className="p-8 md:p-9">

                <p className="text-sm font-semibold tracking-[0.25em] uppercase text-rkaccent mb-3">
                  Reach us directly
                </p>

                <h2 className="text-3xl font-bold">
                  Let's talk.
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Prefer to reach us directly? We're always open to
                  discussing new ideas, partnerships, and technical
                  requirements.
                </p>


                {/* EMAIL */}

                <a
                  href="mailto:founder@rkbyte.com"
                  className="flex items-center gap-4 mt-8 group min-w-0"
                >

                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-rkaccent/10 flex items-center justify-center text-rkaccent">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="w-5 h-5"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />
                      <path d="m3 7 9 6 9-6" />
                    </svg>

                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Email
                    </p>

                    <p className="mt-1 text-gray-800 font-medium break-all group-hover:text-rkaccent transition">
                      founder@rkbyte.com
                    </p>
                  </div>

                </a>


                {/* PHONE */}

                <a
                  href="tel:+919080215015"
                  className="flex items-center gap-4 mt-6 group"
                >

                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-rkaccent/10 flex items-center justify-center text-rkaccent">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="w-5 h-5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>

                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Phone
                    </p>

                    <p className="mt-1 text-gray-800 font-medium group-hover:text-rkaccent transition">
                      +91 90802 15015
                    </p>
                  </div>

                </a>


                {/* LOCATION */}

                <div className="flex items-start gap-4 mt-6">

                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-rkaccent/10 flex items-center justify-center text-rkaccent">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="w-5 h-5"
                    >
                      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>

                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Location
                    </p>

                    <p className="mt-1 text-gray-800 font-medium">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>

                </div>

              </div>


              {/* DEMO */}

              <div className="bg-gray-950 px-8 md:px-9 py-8">

                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-rkaccent">
                  Looking for a demo?
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-white mt-3">
                  See RKbyte in action.
                </h3>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  Have a specific requirement? Let's discuss your
                  project and explore what we can build together.
                </p>

                <a
                  href="mailto:founder@rkbyte.com?subject=RKbyte%20Demo%20Request"
                  className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-lg bg-rkaccent text-black font-semibold hover:opacity-90 transition"
                >
                  Request a Demo
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM STATEMENT
      ====================================================== */}

      <section className="border-t border-gray-100 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 text-center">

          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-rkaccent">
            RKbyte
          </p>

          <h2 className="mt-3 text-2xl md:text-3xl font-bold">
            Affordable technology. Practical engineering.
          </h2>

          <p className="mt-3 text-gray-500">
            Intelligent solutions built around real-world problems.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Contact;