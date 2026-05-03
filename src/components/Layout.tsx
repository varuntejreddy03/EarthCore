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
    <div className="relative min-h-screen flex flex-col bg-bg-base">
      
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
      
      {/* Floating WhatsApp removed as requested */}
    </div>
  );
}
