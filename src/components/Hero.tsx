import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const words = "The World's Resources. Delivered.".split(' ');

  return (
    <section className="relative w-full h-[100vh] min-h-[700px] flex items-center overflow-hidden bg-bg-base">
      
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 animate-scale-in opacity-50 mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1800&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'kenBurns 8s ease-out forwards',
        }}
      />
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Grain */}
      <div className="absolute inset-0 z-0 grain" />

      <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-16 flex items-center z-10 relative -mt-16">
        
        {/* Left Content */}
        <div className="max-w-[800px] flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-accent-primary"></span>
            <h2 className="font-mono text-accent-primary text-[11px] tracking-[0.2em] uppercase">
              Global Commodities · Strategic Trading · Integrated Logistics
            </h2>
          </motion.div>

          {/* H1 Fraunces */}
          <h1 className="font-heading font-[800] text-5xl md:text-6xl lg:text-[80px] leading-[0.95] tracking-tighter text-[#EEE8DC]">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="inline-block mr-[20px]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-[16px] leading-[1.7] text-text-secondary pr-4 max-w-[540px]"
          >
            EarthCore Resources connects global markets with 20+ years of expertise in metals, minerals, energy, and agricultural commodities.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <button 
              className="text-[#080B08] px-6 py-3 rounded-sm font-bold flex items-center gap-2 transition-all group"
              style={{
                background: 'var(--gradient-cta)',
                boxShadow: '0 4px 24px rgba(212,136,42,0.3)'
              }}
            >
              Explore Commodities
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-border-accent text-[#EEE8DC] px-6 py-3 rounded-sm font-bold hover:bg-white/5 transition-colors">
              Contact Raghav Reddy
            </button>
          </motion.div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-[#0F1410]/80 backdrop-blur-md border-t border-border-subtle h-12 flex items-center z-20">
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
