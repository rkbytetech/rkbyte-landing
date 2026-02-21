// src/components/HeroSection.js
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gray-950 text-white">
      <div className="container mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Smart Automation for <span className="text-rkaccent">Biotech, Agri & Industry</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl mx-auto md:mx-0">
            RKbyte builds scalable IoT-enabled automation systems to boost
            efficiency, safety, and innovation across labs, industries, and
            homes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/contact"
              className="px-6 py-3 bg-rkaccent text-black font-semibold rounded-lg shadow hover:bg-rkaccent/90 transition"
            >
              Get Early Access
            </a>
            <a
              href="#solutions"
              className="px-6 py-3 border border-gray-600 bg-gray-900 hover:border-rkaccent hover:text-rkaccent rounded-lg transition"
            >
              Explore Products
            </a>
          </div>
        </div>

        {/* RIGHT: Bigger Placeholder Mockup (16:9 ratio) */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl p-2">
            <div className="rounded-xl aspect-video overflow-hidden">
              <video
                className="w-full h-full object-cover rounded-xl"
                src="/demo.mp4"   // place demo.mp4 inside /public folder
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
