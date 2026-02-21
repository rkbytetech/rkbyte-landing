// src/pages/About.js
import React from "react";

export default function About() {
  return (
    <section className="bg-gray-50 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-10">
          About <span className="text-rkaccent">RKbyte</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
          At RKbyte, we’re building the next generation of smart automation
          systems — tailored for biotech labs, agriculture, industries, and
          smart homes. Our mission is to make automation affordable, scalable,
          and impactful.
        </p>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Founded in 2025, RKbyte is committed to integrating IoT, AI, and
          modern control systems into practical, real-world solutions. Whether
          it’s biotech research, industrial monitoring, or smart farming, our
          solutions are designed to save time, reduce costs, and empower
          innovation.
        </p>
      </div>

      {/* Mission Statement Banner */}
      <div className="bg-rkaccent text-black mt-16 py-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Smart Automation. Real Impact.
          </h2>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Driving innovation across biotech, agriculture, industry, and smart
            homes with intelligent, affordable automation.
          </p>
        </div>
      </div>
    </section>
  );
}
