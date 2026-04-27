import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" className="bg-bg-base border-b border-border-subtle pt-24 font-body pb-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Image (Bleeding slightly left on desktop) */}
        <motion.div 
          className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-xl overflow-hidden ml-0 lg:ml-[-40px] shadow-2xl order-2 lg:order-1 w-full"
          whileHover={{ x: 10 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img 
            src="/about-home.png" 
            alt="Global Logistics Operations"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-earth/20 to-transparent mix-blend-multiply pointer-events-none"></div>
        </motion.div>

        {/* Right: Text Content */}
        <div className="flex flex-col gap-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <h3 className="font-mono text-accent-earth uppercase tracking-[0.2em] text-sm">
              About Earthcore
            </h3>
          </div>

          <h2 className="font-heading font-[700] text-4xl md:text-5xl text-text-primary leading-tight">
            Built on Deep Market Intelligence
          </h2>

          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            EarthCore Resources Private Limited is a dynamic and forward-looking company founded by seasoned professionals with extensive expertise in metals and minerals trading, global commodities, and international logistics. Our leadership brings deep insight into global markets, economic trends, and international trade dynamics.
          </p>

          <div className="flex flex-col gap-3 mb-6">
            <span className="font-heading text-sm text-text-muted uppercase tracking-wider font-semibold">Key Commodities</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1.5 bg-bg-surface border border-border-subtle text-text-primary text-sm font-medium rounded-sm">Iron Ore</span>
              <span className="px-4 py-1.5 bg-bg-surface border border-border-subtle text-text-primary text-sm font-medium rounded-sm">Manganese</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 py-6 border-y border-border-subtle mb-4">
            <div className="flex flex-col gap-1">
              <span className="font-heading font-bold text-[56px] leading-none text-accent-primary">Global</span>
              <span className="text-text-muted text-sm font-medium">Reach</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-heading font-bold text-[56px] leading-none text-accent-primary">8+</span>
              <span className="text-text-muted text-sm font-medium">Commodity Categories</span>
            </div>
          </div>

          <a href="#" className="inline-flex items-center gap-2 text-accent-primary font-medium hover:text-text-primary transition-colors group relative self-start">
            Our Story <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent-primary origin-left scale-x-100 transition-transform group-hover:scale-x-0"></span>
          </a>
        </div>
      </div>
    </Section>
  );
}
