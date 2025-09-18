import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Logo + Branding */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="RKbyte Logo" className="h-8 w-auto" />
          <span className="font-semibold text-white">RKbyte</span>
        </div>
        
        {/* Copyright */}
        <p className="mt-4 md:mt-0">© {new Date().getFullYear()} RKbyte. Smart Automation. Real Impact.</p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://instagram.com/rkbyte.tech" target="_blank" rel="noopener noreferrer" className="hover:text-rkaccent">
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
    </footer>
  );
}
