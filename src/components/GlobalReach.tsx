import { motion } from 'framer-motion';
import { RefreshCcw, Anchor, MapPin } from 'lucide-react';
import Section from './Section';

export default function GlobalReach() {
  const stats = [
    {
      icon: RefreshCcw,
      title: 'Import & Export',
      desc: 'Seamless cross-border movements with stringent compliance and quality assurance protocols.'
    },
    {
      icon: Anchor,
      title: 'Vessel Chartering',
      desc: 'Strategic management of bulk carriers to optimize freight costs and transit times.'
    },
    {
      icon: MapPin,
      title: 'End-to-End Logistics',
      desc: 'Port handling, custom clearance, and last-mile delivery integrated into a single solution.'
    }
  ];

  return (
    <Section id="global-reach" className="bg-[#0A0C0F] relative overflow-hidden py-32 border-b border-border-subtle">
      {/* Background Map Placeholder */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cpath fill='none' stroke='%23ffffff' stroke-width='1' d='M100 250Q300 100 500 250T900 250'/%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-accent-earth text-sm uppercase tracking-[0.2em] mb-4">Our Global Network</p>
          <h2 className="font-heading font-bold text-[52px] text-white leading-tight mb-6">From Source to Shore</h2>
          <p className="font-body text-text-secondary text-lg max-w-2xl mx-auto">
            Our extensive network of global partners and localized logistics expertise ensures your resources arrive safely, efficiently, and precisely when required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-bg-surface border border-border-subtle hover:border-border-accent p-8 rounded-sm group transition-all text-center flex flex-col items-center hover:bg-[#15181f]"
            >
              <div className="mb-6 bg-accent-primary/10 p-4 rounded-full group-hover:scale-110 transition-transform">
                <stat.icon className="text-accent-primary w-8 h-8" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-white mb-3">{stat.title}</h3>
              <p className="font-body text-text-secondary text-[15px] leading-relaxed text-center">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
