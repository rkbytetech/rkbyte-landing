// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Instagram, Linkedin } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler: toggle `scrolled` when window.pageYOffset > threshold
  useEffect(() => {
    const threshold = 16; // px scrolled before navbar changes
    const onScroll = () => {
      if (window.pageYOffset > threshold) setScrolled(true);
      else setScrolled(false);
    };

    // run once to set initial state (in case page loaded scrolled)
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // classes adjusted by scrolled state
  const baseClasses = "sticky top-0 z-50 backdrop-blur-md transition-colors duration-200";
  const topStyle = "bg-white/60";                 // at top: lighter glass
  const scrolledStyle = "bg-white/95 shadow-md";  // after scroll: more opaque + shadow

  return (
    <header className={`${baseClasses} ${scrolled ? scrolledStyle : topStyle}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="RKbyte" className="h-8 w-auto" />
              <span className="font-semibold text-lg text-gray-900 hidden sm:inline">
                RKbyte
              </span>
            </Link>
          </div>

          {/* RIGHT: Nav + socials (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/category/biotech" className="text-sm text-gray-700 hover:text-rkaccent">
              Biotech
            </Link>
            <Link to="/category/agriculture" className="text-sm text-gray-700 hover:text-rkaccent">
              Agriculture
            </Link>
            <Link to="/category/industrial" className="text-sm text-gray-700 hover:text-rkaccent">
              Industrial
            </Link>
            <Link to="/category/home-automation" className="text-sm text-gray-700 hover:text-rkaccent">
              Home
            </Link>
            <Link
              to="/contact"
              className="text-sm bg-rkaccent text-black px-4 py-2 rounded shadow-sm hover:shadow-md transition"
            >
              Contact
            </Link>
            <a
              href="https://instagram.com/rkbyte.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-rkaccent"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com/company/rkbyte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-rkaccent"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://instagram.com/rkbyte.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-rkaccent"
            >
              <Instagram size={16} />
            </a>
            <button
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
              className={`p-2 rounded-md text-gray-700 border ${scrolled ? "bg-white/95" : "bg-white/60"} backdrop-blur-md`}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className={`md:hidden ${scrolled ? "bg-white/95 backdrop-blur-md" : "bg-white/90 backdrop-blur-md"} border-t`}>
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link to="/" onClick={() => setOpen(false)} className="block py-2 text-gray-700">
              Home
            </Link>
            <Link to="/category/biotech" onClick={() => setOpen(false)} className="block py-2 text-gray-700">
              Biotech
            </Link>
            <Link to="/category/agriculture" onClick={() => setOpen(false)} className="block py-2 text-gray-700">
              Agriculture
            </Link>
            <Link to="/category/industrial" onClick={() => setOpen(false)} className="block py-2 text-gray-700">
              Industrial
            </Link>
            <Link to="/category/home-automation" onClick={() => setOpen(false)} className="block py-2 text-gray-700">
              Home Automation
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block mt-2 bg-rkaccent text-black text-center py-2 rounded shadow hover:shadow-md transition"
            >
              Contact
            </Link>

            <div className="pt-3 border-t flex items-center justify-between">
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/rkbyte.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-rkaccent"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://linkedin.com/company/rkbyte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-rkaccent"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              <a
                href="mailto:founder@rkbyte.com"
                className="text-sm text-gray-700 hover:text-rkaccent"
              >
                founder@rkbyte.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
