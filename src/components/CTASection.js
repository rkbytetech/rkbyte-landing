import React from "react";

export default function CTASection() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Let’s build something smarter</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          From laboratories to farms and beyond, RKbyte builds connected automation systems designed for real-world impact
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-rkaccent text-black px-6 py-3 rounded shadow hover:shadow-md"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
