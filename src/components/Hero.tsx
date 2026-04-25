import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const words = "The World's Resources. Delivered.".split(' ');

  return (
    <section className="relative w-full min-h-screen flex lg:items-center overflow-hidden bg-bg-base pt-6 pb-24 lg:pt-0 lg:pb-0">
      
      {/* Background Image & Overlay */}
      {/* Grain */}
      <div className="absolute inset-0 z-0 grain pointer-events-none" />

      <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10 relative">
        
        {/* Left Content (Text - Below on Mobile, Left on Desktop) */}
        <div className="flex flex-col gap-6 relative z-10 order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-accent-primary"></span>
            <h2 className="font-mono text-accent-primary text-[11px] tracking-[0.2em] uppercase">
              Global Trading · Logistics
            </h2>
          </motion.div>

          {/* H1 Fraunces */}
          <h1 className="font-heading font-[800] text-5xl md:text-6xl leading-[1] tracking-tight text-text-primary">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="inline-block mr-[12px] mb-1"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-[18px] font-medium leading-[1.7] text-text-primary pr-4"
          >
            EarthCore Resources connects global markets with expertise in metals, minerals, energy, and agricultural commodities.
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

        {/* Right Content - Image (Above on Mobile, Right on Desktop) */}
        <div className="relative h-[280px] sm:h-[350px] md:h-[500px] lg:h-[600px] w-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(27,42,59,0.1)] order-1 lg:order-2">
          <img 
            src="/heroi.jpg" 
            alt="Global Shipping Port"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-bg-surface/80 backdrop-blur-md border-t border-border-subtle h-12 flex items-center z-20">
        <div className="flex w-max animate-marquee">
          {['COAL', 'IRON ORE', 'MANGANESE', 'PETROLEUM', 'FERROUS SCRAP', 'MINERALS', 'AGRICULTURAL', 'CHEMICALS', 'COAL', 'IRON ORE', 'MANGANESE', 'PETROLEUM', 'FERROUS SCRAP', 'MINERALS', 'AGRICULTURAL', 'CHEMICALS'].map((item, idx) => (
            <span key={idx} className="flex items-center text-text-muted font-mono text-[12px] tracking-wider whitespace-nowrap">
              <span className="mx-6 text-border-subtle">•</span>
              {item}
            </span>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}
