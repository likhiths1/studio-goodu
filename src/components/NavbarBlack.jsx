import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GooduLogo from '../assets/images/herosection/goodu-logoblue.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Design Archive', href: '/portfolio' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  const handlePricingClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/#pricing');
    }
  };

  return (
    <nav className="w-full bg-[#FFF6ED] font-inter z-20 px-4 md:px-0 py-2 flex items-center justify-between relative">
      <Link to="/">
        <img src={GooduLogo} alt="Studio Goodu Logo" className="h-16 md:h-20 md:ml-20 w-auto" />
      </Link>

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
      <ul className="hidden md:flex gap-12 ml-[-60px] mr-20 text-lg font-inter font-medium">
        {navLinks.map(link => (
          <li key={link.name}>
            {link.name === 'Pricing' ? (
              <a href="#pricing" onClick={handlePricingClick} className="text-black hover:text-black hover:underline underline-offset-4 decoration-current">
                {link.name}
              </a>
            ) : link.href.startsWith('/') ? (
              <Link to={link.href} className="text-black hover:text-black hover:underline underline-offset-4 decoration-current">
                {link.name}
              </Link>
            ) : (
              <a href={link.href} className="text-black hover:text-black hover:underline underline-offset-4 decoration-current">
                {link.name}
              </a>
            )}
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
              {link.name === 'Pricing' ? (
                <a
                  href="#pricing"
                  className="text-[#EDE1D5] px-4 py-2 block hover:underline underline-offset-4 decoration-current"
                  onClick={(e) => { handlePricingClick(e); setOpen(false); }}
                >
                  {link.name}
                </a>
              ) : link.href.startsWith('/') ? (
                <Link
                  to={link.href}
                  className="text-[#EDE1D5] px-4 py-2 block hover:text-[#EDE1D5] hover:underline underline-offset-4 decoration-current"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-[#EDE1D5] px-4 py-2 block"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
