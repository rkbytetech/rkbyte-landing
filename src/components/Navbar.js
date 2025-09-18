import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Menu, X, Instagram, Linkedin } from "lucide-react";

export default function Navbar(){
  const [open,setOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="RKbyte" className="h-8 w-auto"/>
          <div className="font-semibold">RKbyte</div>
        </Link>

        <nav className="hidden md:flex gap-4 items-center text-sm">
          <Link to="/category/biotech" className="hover:text-rkaccent">Biotech</Link>
          <Link to="/category/agriculture" className="hover:text-rkaccent">Agriculture</Link>
          <Link to="/category/industrial" className="hover:text-rkaccent">Industrial</Link>
          <Link to="/category/home-automation" className="hover:text-rkaccent">Home</Link>
          <Link to="/contact" className="bg-rkaccent text-black px-4 py-2 rounded ml-2">Contact</Link>
          <div className="flex items-center gap-2 ml-3">
            <a href="https://instagram.com/rkbyte" target="_blank" rel="noopener noreferrer" className="hover:text-rkaccent">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com/company/rkbyte" target="_blank" rel="noopener noreferrer" className="hover:text-rkaccent">
              <Linkedin size={18} />
            </a>
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <a href="https://instagram.com/rkbyte" target="_blank" rel="noopener noreferrer" className="hover:text-rkaccent">
            <Instagram size={18} />
          </a>
          <button onClick={()=>setOpen(!open)} aria-label="menu" className="p-2 rounded border">
            {open ? <X/> : <Menu/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 gap-3">
            <Link to="/" onClick={()=>setOpen(false)} className="py-2">Home</Link>
            <Link to="/category/biotech" onClick={()=>setOpen(false)} className="py-2">Biotech</Link>
            <Link to="/category/agriculture" onClick={()=>setOpen(false)} className="py-2">Agriculture</Link>
            <Link to="/category/industrial" onClick={()=>setOpen(false)} className="py-2">Industrial</Link>
            <Link to="/category/home-automation" onClick={()=>setOpen(false)} className="py-2">Home Automation</Link>
            <Link to="/contact" onClick={()=>setOpen(false)} className="py-2 bg-rkaccent text-black px-4 py-2 rounded inline-block w-full text-center">Contact</Link>
            <div className="pt-2 border-t mt-2 flex gap-4">
              <a href="https://instagram.com/rkbyte" target="_blank" rel="noopener noreferrer" className="hover:text-rkaccent">Instagram</a>
              <a href="https://linkedin.com/company/rkbyte" target="_blank" rel="noopener noreferrer" className="hover:text-rkaccent">LinkedIn</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
