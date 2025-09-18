import React from "react";
import Contact from "../components/Contact";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT: Contact Form */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 mb-8 max-w-lg">
            Have questions about RKbyte’s automation solutions or want a demo? 
            Fill out the form and our team will get back to you shortly.
          </p>
          <Contact /> {/* your existing form component */}
        </div>

        {/* RIGHT: Contact Info */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-6">Reach us directly</h2>
          <ul className="space-y-5 text-gray-700">
            <li className="flex items-center gap-3">
              <Mail className="text-rkaccent" size={20} />
              <a href="mailto:founder@rkbyte.com" className="hover:text-rkaccent">
                founder@rkbyte.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-rkaccent" size={20} />
              <span>+91-90802-15015</span> {/* replace with your number */}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-rkaccent" size={20} />
              <span>Chennai, Tamil Nadu, India</span> {/* replace with your office location */}
            </li>
          </ul>

          {/* Call-to-action box */}
          <div className="mt-10 bg-rkbg text-white rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Looking for a demo?</h3>
            <p className="text-gray-300 mb-4">We’d love to show you RKbyte in action.</p>
            <a
              href="/contact#contact"
              className="bg-rkaccent text-black px-5 py-2 rounded shadow hover:bg-teal-400"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
