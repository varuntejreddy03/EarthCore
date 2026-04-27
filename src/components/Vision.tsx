import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Section from './Section';

export default function Vision() {
  const commitments = [
    'Building long-term partnerships',
    'Ethical and transparent practices',
    'Consistent value delivery',
    'Adapting to global market dynamics'
  ];

  return (
    <Section id="vision" className="bg-bg-base py-32 border-b border-border-subtle">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Vision Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-bg-surface to-bg-elevated p-12 md:p-16 rounded-sm shadow-xl flex flex-col justify-center min-h-[400px]"
        >
          <div className="absolute top-0 left-0 w-[4px] h-full bg-accent-primary"></div>
          
          <p className="font-mono text-accent-primary text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-8">
            ✦ Our Vision
          </p>
          
          <h3 className="font-heading font-[700] text-[20px] sm:text-[24px] md:text-[30px] text-text-primary leading-[1.4] tracking-[-0.01em]">
            Trusted Global Partner in Commodities Trading—Delivering Value, Reliability, and Transparency Across the Supply Chain.
          </h3>
        </motion.div>

        {/* Commitment Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-bg-elevated p-12 md:p-16 rounded-sm shadow-xl flex flex-col justify-center min-h-[400px]"
        >
          <div className="absolute top-0 left-0 w-[4px] h-full bg-accent-primary"></div>
          
          <h3 className="font-heading font-[600] text-2xl text-text-primary mb-8">Our Commitment</h3>
          
          <ul className="flex flex-col gap-6">
            {commitments.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="mt-0.5 min-w-[24px]">
                  <CheckCircle2 className="text-accent-green w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-body text-text-primary text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </Section>
  );
}
