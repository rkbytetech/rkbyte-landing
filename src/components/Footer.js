import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-6">
        
        {/* Logo + Branding */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="RKbyte Logo" className="h-8 w-auto" />
          <span className="font-semibold text-white">RKbyte</span>
        </div>
        
        {/* Navigation Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-rkaccent">Home</Link>
          <Link to="/category/biotech" className="hover:text-rkaccent">Biotech</Link>
          <Link to="/category/agriculture" className="hover:text-rkaccent">Agriculture</Link>
          <Link to="/category/industrial" className="hover:text-rkaccent">Industrial</Link>
          <Link to="/category/home-automation" className="hover:text-rkaccent">Home Automation</Link>
          <Link to="/contact" className="hover:text-rkaccent">Contact</Link>
          <Link to="/privacy" className="hover:text-rkaccent">Privacy</Link>
          <Link to="/terms" className="hover:text-rkaccent">Terms</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
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

      {/* Bottom Note */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} RKbyte. Smart Automation. Real Impact.
      </div>
    </footer>
  );
}
