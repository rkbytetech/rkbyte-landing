import React from "react";
import { Cpu, Settings, Activity } from "lucide-react";

const features = [
  { icon: Cpu, title: "IoT-Enabled", desc: "Smart systems with real-time data and control." },
  { icon: Settings, title: "Customizable", desc: "Tailored automation to match your workflow." },
  { icon: Activity, title: "Scalable", desc: "From labs to industries, scale effortlessly." },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose RKbyte?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <f.icon size={36} className="mx-auto text-rkaccent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
