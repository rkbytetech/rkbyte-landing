import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left: Logo + tagline */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="RKbyte" className="h-8 w-auto" />
          <div>
            <div className="font-semibold">RKbyte</div>
            <div className="text-sm text-gray-400">
              Smart Automation. Real Impact.
            </div>
          </div>
        </div>

        {/* Center: Nav Links */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-8 text-sm text-center md:text-left">
          <Link to="/" className="hover:text-rkaccent">Home</Link>
          <Link to="/category/biotech" className="hover:text-rkaccent">Biotech</Link>
          <Link to="/category/agriculture" className="hover:text-rkaccent">Agriculture</Link>
          <Link to="/category/industrial" className="hover:text-rkaccent">Industrial</Link>
          <Link to="/category/home-automation" className="hover:text-rkaccent">Home Automation</Link>
          <Link to="/contact" className="hover:text-rkaccent">Contact</Link>
          <Link to="/privacy" className="hover:text-rkaccent">Privacy</Link>
          <Link to="/terms" className="hover:text-rkaccent">Terms</Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-5">
          <a href="https://instagram.com/rkbyte" target="_blank" rel="noopener noreferrer" className="hover:text-rkaccent">
            <Instagram size={20} />
          </a>
          <a href="https://linkedin.com/company/rkbyte" target="_blank" rel="noopener noreferrer" className="hover:text-rkaccent">
            <Linkedin size={20} />
          </a>
          <a href="mailto:founder@rkbyte.com" className="hover:text-rkaccent">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-gray-500 text-xs mt-8">
        © {new Date().getFullYear()} RKbyte. All rights reserved.
      </div>
    </footer>
  );
}
