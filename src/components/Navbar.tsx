import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Commodities', path: '/commodities' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'h-16 backdrop-blur-[20px] bg-bg-base/90 border-b border-border-accent/15'
          : 'h-[72px] bg-transparent'
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 relative z-50 group">
          <img
            src="/EarthCore Logo Clean.webp?v=6"
            alt="EarthCore Logo"
            className="h-[44px] w-[44px] block object-contain flex-shrink-0"
          />
          <div className="flex flex-col justify-center">
            <span className="font-heading font-semibold text-[21px] text-[#4A3728] tracking-[0.01em] leading-[1.05]">
              EarthCore
            </span>
            <span className="font-heading font-semibold text-[21px] text-[#634D3D] tracking-[0.01em] leading-[1.05]">
              Resources
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-base font-medium transition-colors relative py-1',
                  isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent-primary"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 text-text-primary p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-bg-base/95 backdrop-blur-2xl px-6 pt-24 pb-8 flex flex-col"
            >
              <div className="flex flex-col gap-6 text-xl">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="font-heading font-medium text-text-secondary hover:text-text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}