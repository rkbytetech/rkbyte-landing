// src/pages/About.js
import React from "react";

export default function About() {
  const focusAreas = [
    {
      icon: "🧬",
      title: "Biotech & Labs",
      description:
        "Automation and monitoring systems for laboratories, research, and bioprocess applications.",
    },
    {
      icon: "🌱",
      title: "Smart Agriculture",
      description:
        "Intelligent systems for microgreens, controlled cultivation, irrigation, and environmental monitoring.",
    },
    {
      icon: "🦐",
      title: "Aquaculture",
      description:
        "Connected monitoring and automation solutions for water quality, feeding, and aquaculture operations.",
    },
    {
      icon: "⚙️",
      title: "IoT & Smart Systems",
      description:
        "Custom sensors, controllers, connected devices, dashboards, and intelligent automation systems.",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900">

      {/* Hero */}
      <div className="container mx-auto px-6 pt-28 pb-20">
        <div className="max-w-5xl mx-auto">

          <p className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-rkaccent mb-6">
            About RKbyte
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
            Engineering smarter.
            <br />
            <span className="text-rkaccent">Building what matters.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed">
            RKbyte designs and builds intelligent automation systems that turn
            complex processes into simpler, smarter, and more efficient
            workflows.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">

            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-rkaccent mb-4">
                Who We Are
              </p>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Technology with a purpose.
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2025, RKbyte was built around a simple idea:
                automation should be practical, accessible, and designed around
                the people who use it.
              </p>

              <p>
                We combine IoT, embedded systems, sensors, automation,
                software, and intelligent monitoring to create solutions for
                real operational needs.
              </p>

              <p>
                From biotech laboratories and smart agriculture to aquaculture
                and connected systems, we focus on reducing manual effort,
                improving monitoring, increasing consistency, and giving users
                better control.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* What We Build */}
      <div className="container mx-auto px-6 py-24">

        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-rkaccent mb-4">
            What We Build
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Built around real applications.
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Our solutions are developed around specific workflows, challenges,
            and environments rather than one-size-fits-all automation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl mb-6">{area.icon}</div>

              <h3 className="text-xl font-bold mb-3">
                {area.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Approach */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-24">

          <div className="max-w-5xl mx-auto">

            <p className="text-sm font-semibold tracking-widest uppercase text-rkaccent mb-4">
              Our Approach
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-14">
              Understand. Design. Build. Automate.
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                ["01", "Understand", "We start by understanding the workflow and the actual problem."],
                ["02", "Design", "We engineer the hardware, software, and system architecture around the application."],
                ["03", "Build", "We prototype, integrate, test, and refine the solution."],
                ["04", "Automate", "We deliver systems that make operations smarter, simpler, and more connected."],
              ].map(([number, title, description]) => (
                <div key={number}>
                  <span className="text-rkaccent font-bold text-sm">
                    {number}
                  </span>

                  <h3 className="text-xl font-bold mt-3 mb-3">
                    {title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* Final Statement */}
      <div className="bg-rkaccent text-black">
        <div className="container mx-auto px-6 py-20 text-center">

          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-5">
            The RKbyte Philosophy
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold max-w-4xl mx-auto leading-tight">
            Affordable technology.
            <br />
            Practical engineering.
            <br />
            Intelligent automation.
          </h2>

        </div>
      </div>

    </section>
  );
}