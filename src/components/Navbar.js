import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Instagram, Linkedin } from "lucide-react";

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="RKbyte Logo" className="h-10 w-auto" />
          <span className="font-semibold text-xl text-gray-900">RKbyte</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link to="/category/biotech" className="hover:text-rkaccent">Biotech</Link>
          <Link to="/category/agriculture" className="hover:text-rkaccent">Agriculture</Link>
          <Link to="/category/industrial" className="hover:text-rkaccent">Industrial</Link>
          <Link to="/category/home-automation" className="hover:text-rkaccent">Home</Link>
          <a href="#contact" className="bg-rkaccent text-white px-4 py-2 rounded">Contact</a>

          {/* Social Icons */}
          <a href="https://instagram.com/rkbyte.tech" target="_blank" rel="noopener noreferrer" className="hover:text-rkaccent">
            <Instagram size={18} />
          </a>
          <a href="https://linkedin.com/company/rkbyte" target="_blank" rel="noopener noreferrer" className="hover:text-rkaccent">
            <Linkedin size={18} />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 gap-3">
            <Link to="/category/biotech" onClick={()=>setOpen(false)}>Biotech</Link>
            <Link to="/category/agriculture" onClick={()=>setOpen(false)}>Agriculture</Link>
            <Link to="/category/industrial" onClick={()=>setOpen(false)}>Industrial</Link>
            <Link to="/category/home-automation" onClick={()=>setOpen(false)}>Home</Link>
            <a href="#contact" className="mt-2 bg-rkaccent text-white px-4 py-2 rounded">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
