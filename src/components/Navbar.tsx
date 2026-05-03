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
  const isHomePage = location.pathname === '/';
  const isDarkHero = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrolled
          ? 'h-16 backdrop-blur-xl bg-bg-base/90 border-b border-border-accent/15 shadow-sm'
          : 'h-[72px] bg-transparent'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 relative z-50 group">
          <div className="relative">
            <img
              src="/EarthCore Logo Clean.webp?v=6"
              alt="EarthCore Logo"
              className="h-12 w-12 block object-contain transition-all duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className={cn("font-heading font-bold text-xl tracking-tight leading-none transition-colors", isDarkHero ? 'text-white' : 'text-[#1B2A3B]')}>
              EarthCore
            </span>
            <span className={cn("font-heading font-bold text-xl tracking-tight leading-none transition-colors", isDarkHero ? 'text-accent-primary' : 'text-[#C9862A]')}>
              Resources
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 relative py-2',
                  isDarkHero
                    ? (isActive ? 'text-white' : 'text-white/80 hover:text-white')
                    : (isActive ? 'text-accent-primary' : 'text-text-primary hover:text-accent-primary')
                )}
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 -mr-2 text-text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 w-full h-screen bg-bg-base z-[40] px-8 pt-32 pb-12 flex flex-col"
            >
              <div className="flex flex-col gap-8 text-3xl">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "font-heading font-bold tracking-tighter",
                        location.pathname === link.path ? "text-accent-primary" : "text-text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-auto pt-12 border-t border-border-subtle">
                <p className="text-text-muted font-mono text-sm uppercase tracking-widest mb-4">Contact us</p>
                <p className="text-text-primary text-lg font-bold">info@earthcoreresources.com</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}