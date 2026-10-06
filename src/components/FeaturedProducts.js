import React from "react";

const featured = [
  {
    title: "PTC Rack Lighting Automation",
    desc: "Programmable lighting control for plant tissue culture racks.",
    img: "/products/ptc-rack-lighting.png",
    link: "/category/biotech/ptc-rack-lighting",
  },
  {
    title: "Automated Laminar Air Flow",
    desc: "Smart airflow control with automated UV and environmental monitoring.",
    img: "/products/laminar-air-flow.png",
    link: "/category/biotech/automated-laminar-air-flow",
  },
  {
    title: "Smart Fertigation Controller",
    desc: "Automated irrigation and fertilizer dosing with real-time monitoring.",
    img: "/products/fertigation.png",
    link: "/category/agriculture/smart-fertigation",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Solutions</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Hand-picked RKbyte solutions designed to showcase practical automation use cases.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="h-40 flex items-center justify-center mb-4">
                <img
                  src={f.img}
                  alt={f.title}
                  className="object-contain h-full"
                />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <a href={f.link} className="text-rkaccent font-medium">
                  View
                </a>
                <a
                  href="/contact#contact"
                  className="bg-rkaccent text-black px-3 py-2 rounded"
                >
                  Request Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
