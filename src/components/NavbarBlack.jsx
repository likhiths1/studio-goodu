import { useState } from 'react';
import GooduLogo from '../assets/images/herosection/goodu-logoblue.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '#' },
  { name: 'Services', href: '#' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FFF6ED] font-inter z-20 px-4 md:px-12 py-2 flex items-center justify-between relative">
      <img src={GooduLogo} alt="Studio Goodu Logo" className="h-16 md:h-20 w-auto" />

      {/* Hamburger Icon Mobile */}
      <button
        className="bg-transparent md:hidden flex flex-col justify-center items-center p-2 z-50"
        aria-label="Open main menu"
        onClick={() => setOpen(!open)}
      >
        <span className={`block h-0.5 w-7 rounded-full my-1 transition bg-black ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block h-0.5 w-7 rounded-full my-1 transition bg-black ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block h-0.5 w-7 rounded-full my-1 transition bg-black ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-12 ml-[-60px] mr-24 text-lg font-inter font-medium">
        {navLinks.map(link => (
          <li key={link.name}>
            <a href={link.href} className="text-black">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 w-full bg-[#1e1c1a] transition-all duration-300 ease-in-out overflow-hidden ${
          open ? 'max-h-[100vh] py-10 visible' : 'max-h-0 py-0 invisible'
        } md:hidden z-50`}
      >
        {/* Close Icon */}
        <button
          className="absolute top-5 right-5 text-[#EDE1D5] text-3xl"
          aria-label="Close main menu"
          style={{ background: "none", border: "none", outline: "none" }}
          onClick={() => setOpen(false)}
        >
          &times;
        </button>
        <ul className="flex flex-col items-center gap-7 text-xl font-inter uppercase font-semibold">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[#EDE1D5] px-4 py-2 block"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
