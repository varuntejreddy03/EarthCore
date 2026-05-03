import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <img 
        src="/heroo1.png" 
        alt="Industrial shipping port" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Dark overlay — preserves image colors, makes white text pop */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.6) 40%, rgba(10,22,40,0.2) 70%, transparent 100%)'
        }}
      />

      <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-16 z-10 relative">
        
        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-accent-primary"></span>
            <h2 className="font-mono text-accent-primary text-[10px] md:text-sm tracking-[0.2em] uppercase">
              Global Trading · Logistics
            </h2>
          </motion.div>

          <h1 className="font-heading font-[800] text-5xl md:text-6xl leading-[1] tracking-tight text-white">
            The World's<br />Resources.<br />Delivered.
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-[18px] font-medium leading-[1.7] text-white/80 pr-4 max-w-lg"
          >
            <span className="text-accent-primary font-bold">EarthCore Resources</span> connects global markets with expertise in metals, minerals, energy, and agricultural commodities.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <Link 
              to="/commodities"
              className="text-white px-6 py-3 rounded-sm font-bold flex items-center gap-2 transition-all group"
              style={{
                background: 'var(--gradient-cta)',
                boxShadow: '0 4px 24px rgba(212,136,42,0.3)'
              }}
            >
              Explore Commodities
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
