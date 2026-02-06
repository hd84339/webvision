import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Our Product', path: '/products' },
    { name: 'Client', path: '/clients' },
    { name: 'Contact', path: '/contact' },
    { name: 'Term', path: '/terms' },
  ];

  const handleNavigation = (path) => {
    setIsOpen(false);
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // h-24 sets a consistent height to accommodate the larger logo.
      className="sticky top-0 z-50 h-24 bg-white/80 backdrop-blur-lg shadow-md px-6 flex justify-between items-center transition duration-300"
    >
      {/* Logo */}
      {/* --- CHANGE 2: The logo wrapper is back to being a simple flex item --- */}
      <div className="cursor-pointer flex items-center gap-3" onClick={() => handleNavigation('/')}>
        <img
          className="h-20 w-auto object-contain"
          src="/logo_v2.png"
          alt="Webvision Infotech Logo"
          loading="lazy"
        />
        <div className="flex flex-col justify-center">
          <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-slate-900 font-['Poppins'] leading-none">
            Web<span className="text-blue-600">vision</span>
          </span>
          <span className="text-[0.65rem] md:text-xs font-bold tracking-[0.3em] text-slate-500 uppercase mt-1">
            Softech Pvt. Ltd.
          </span>
        </div>
      </div>

      {/* Desktop Menu (No changes needed) */}
      <div className="hidden md:flex space-x-3">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-1 border rounded-full cursor-pointer text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                ? 'bg-black text-white shadow-md'
                : 'text-black border-black hover:bg-gray-100'
                }`}
            >
              {link.name}
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button (No changes needed, now works correctly) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown (Positioned relative to the fixed-height navbar) */}
      {isOpen && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-24 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-2 py-4 md:hidden z-50"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="w-full flex justify-center"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                whileTap={{ scale: 0.95 }}
                className={`w-11/12 py-2 border rounded-full text-center text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                  ? 'bg-black text-white shadow'
                  : 'text-black border-black hover:bg-gray-100'
                  }`}
              >
                {link.name}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;