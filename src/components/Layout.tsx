import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Layout() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    // Check if device is touch capable to hide custom cursor
    const isTouch = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
    
    if (!isTouch) {
      window.addEventListener('mousemove', handleMouseMove);
      
      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a' || target.closest('button') || target.closest('a')) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };
      window.addEventListener('mouseover', handleMouseOver);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseover', handleMouseOver);
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col pt-[72px] bg-[#080B08]">
      
      {/* Desktop Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference hidden md:block"
        animate={{
          x: mousePos.x - (isHovering ? 16 : 3),
          y: mousePos.y - (isHovering ? 16 : 3),
          width: isHovering ? 32 : 6,
          height: isHovering ? 32 : 6,
          backgroundColor: isHovering ? 'transparent' : '#D4882A',
          border: isHovering ? '1px solid #D4882A' : 'none'
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />

      <Navbar />
      <main className="flex-1 w-full relative z-10 transition-opacity duration-300">
        <Outlet />
      </main>
      <Footer />
      
      {/* Fixed bottom-right on screens < md */}
      <a href="https://wa.me/919880478034"
         className="fixed bottom-6 right-6 z-50 md:hidden bg-[#25D366] rounded-full p-4 shadow-[0_0_24px_rgba(37,211,102,0.4)] transition-transform active:scale-95">
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  );
}
