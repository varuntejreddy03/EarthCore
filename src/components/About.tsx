import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" className="bg-bg-base border-b border-border-subtle pt-24 font-body pb-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image (Bleeding slightly left) */}
        <motion.div 
          className="relative h-[600px] rounded-lg overflow-hidden ml-[-20px] lg:ml-[-40px] shadow-2xl"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Faux image background since we don't have assets yet */}
          <div className="absolute inset-0 bg-[#0d131f]">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 to-transparent mix-blend-overlay"></div>
            <div className="absolute inset-0 grain"></div>
            {/* Abstract representation of port */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(37,99,235,0.3)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect x="20%" y="40%" width="30%" height="60%" fill="rgba(37,99,235,0.2)" />
              <rect x="55%" y="60%" width="20%" height="40%" fill="rgba(194,129,58,0.2)" />
            </svg>
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <h3 className="font-mono text-accent-earth uppercase tracking-[0.2em] text-sm">
              About Earthcore
            </h3>
          </div>

          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight">
            Two Decades of Market Intelligence
          </h2>

          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            EarthCore Resources is a premier commodities trading and logistics firm. Founded by seasoned professionals, we bring over 20 years of robust expertise to the table, facilitating the seamless flow of vital resources across global markets. Our integrated approach ensures reliability, transparency, and value at every stage of the supply chain.
          </p>

          <div className="grid grid-cols-2 gap-8 py-6 border-y border-border-subtle mb-4">
            <div className="flex flex-col gap-1">
              <span className="font-heading font-bold text-[56px] leading-none text-accent-earth">20+</span>
              <span className="text-text-muted text-sm font-medium">Years Experience</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-heading font-bold text-[56px] leading-none text-accent-earth">8+</span>
              <span className="text-text-muted text-sm font-medium">Commodity Categories</span>
            </div>
          </div>

          <a href="#" className="inline-flex items-center gap-2 text-accent-glow font-medium hover:text-white transition-colors group relative self-start">
            Our Story <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent-glow origin-left scale-x-100 transition-transform group-hover:scale-x-0"></span>
          </a>
        </div>
      </div>
    </Section>
  );
}
