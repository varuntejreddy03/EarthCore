import { motion } from 'framer-motion';
import { Globe2, Ship, BarChart3 } from 'lucide-react';
import Section from './Section';

export default function Services() {
  const pillars = [
    {
      icon: Globe2,
      title: 'Global Trading',
      desc: 'Sourcing and trading commodities across international markets with precision.'
    },
    {
      icon: Ship,
      title: 'Shipping & Logistics',
      desc: 'Vessel chartering, shipping management, and end-to-end logistics.'
    },
    {
      icon: BarChart3,
      title: 'Market Intelligence',
      desc: 'Combining economic trends with supply chain capabilities to unlock value.'
    }
  ];

  return (
    <Section id="services" className="bg-bg-elevated relative overflow-hidden pb-24 border-y border-border-subtle">
      {/* Grain texture */}
      <div className="absolute inset-0 grain"></div>

      <div className="relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="font-heading font-[700] text-4xl md:text-5xl text-text-primary mb-4">What We Do</h2>
          <p className="text-text-secondary max-w-2xl font-body text-lg leading-relaxed">
            We provide a comprehensive suite of services that connect producers and consumers across the globe, ensuring efficiency, reliability, and scale.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-[20px] left-[10%] right-[10%] h-[1px] bg-border-subtle z-0"></div>

          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative z-10 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-[80px] h-[80px] bg-bg-base border border-border-subtle group-hover:border-accent-primary transition-colors rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-[0_0_20px_rgba(201,134,42,0.2)]">
                <pillar.icon size={32} className="text-accent-primary" />
              </div>
              <h3 className="font-heading font-[600] text-xl text-text-primary mb-3">{pillar.title}</h3>
              <p className="text-text-secondary font-body px-4 text-base leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Integrated Approach Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent-primary/5 mix-blend-overlay"></div>
          <div className="relative border border-border-subtle bg-bg-base/80 backdrop-blur-sm p-8 md:p-12 pl-10 md:pl-16 shadow-xl">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-accent-primary"></div>
            
            <h4 className="font-heading font-[600] text-xl text-text-primary mb-4">An Integrated Approach</h4>
            <p className="font-body text-text-secondary text-base leading-relaxed max-w-4xl">
              Mastering supply chain segments, EarthCore slashes disruptions and drives efficiency. Our strategic edge enables rapid adaptation to market shifts, delivering lasting value beyond transactions.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
