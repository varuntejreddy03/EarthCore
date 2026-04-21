import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col pt-[72px]">
      <Helmet>
        <title>About | EarthCore Resources</title>
      </Helmet>

      {/* Hero Banner */}
      <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden bg-bg-base">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1800&q=80')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-bg-base via-bg-base/80 to-transparent" />
        
        <div className="relative z-10 text-center flex flex-col items-center max-w-[1280px] px-6 lg:px-16 w-full mt-12">
          <h1 className="font-heading font-[700] text-5xl md:text-[72px] text-text-primary leading-[1.05] tracking-tighter">
            About EarthCore
          </h1>
          <div className="mt-8 w-16 h-[2px] bg-accent-primary"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-bg-surface border-y border-border-subtle">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Industrial Image */}
          <motion.div 
            initial={{ opacity: 0, rotate: -2 }}
            whileInView={{ opacity: 1, rotate: -1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative p-2"
          >
            <div className="absolute inset-0 border-2 border-accent-primary/50 transform -rotate-2 -translate-x-4 -translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1000&q=80" 
              alt="Industrial shipping port"
              className="w-full h-auto object-cover grayscale mix-blend-luminosity hover:grayscale-[50%] transition-all duration-700" 
            />
          </motion.div>

          {/* Right: Company Story */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="font-heading font-[700] text-4xl leading-[1.1] text-text-primary">
              Forging Global Connections
            </h2>
            <p className="font-body text-text-secondary text-lg leading-[1.7]">
              EarthCore Resources is a premier commodities trading and logistics firm. Founded by seasoned professionals, we bring robust expertise to the table, facilitating the seamless flow of vital resources across global markets. 
            </p>
            <p className="font-body text-text-secondary text-lg leading-[1.7]">
              Our integrated approach ensures reliability, transparency, and value at every stage of the supply chain. We understand that in commodities, trust is the ultimate currency.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-border-subtle pt-8 mt-4">
              <div className="flex flex-col gap-1">
                <span className="font-heading font-[800] text-[48px] text-accent-primary leading-none">20+</span>
                <span className="font-body text-text-muted text-sm uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-heading font-[800] text-[48px] text-accent-primary leading-none">360°</span>
                <span className="font-body text-text-muted text-sm uppercase tracking-wider">Logistics Scope</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Leadership Section */}
      <section className="py-24 bg-bg-base">
        <div className="max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">
          <div className="w-[80px] h-[80px] rounded-full border border-accent-primary flex items-center justify-center bg-bg-surface shadow-[0_0_30px_rgba(212,136,42,0.15)] mb-8">
            <span className="font-heading font-bold text-2xl text-accent-primary">RR</span>
          </div>
          
          <h2 className="font-heading font-[700] text-[32px] text-text-primary mb-2">Raghav Reddy</h2>
          <p className="font-mono text-accent-primary text-[11px] uppercase tracking-[0.2em] mb-8">Founder & Director</p>
          
          <p className="font-body text-text-secondary text-lg leading-[1.7] max-w-2xl">
            With over two decades operating across volatile global markets, Raghav established EarthCore to bring an unprecedented level of transparency and operational excellence to bulk commodities trading. His philosophy emphasizes long-term partnerships over transactional velocity.
          </p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Timeline Bar */}
      <section className="py-24 bg-bg-elevated overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12">
            
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-[12px] left-[10%] right-[10%] h-[1px] bg-border-accent z-0"></div>
            
            {[
              { year: '2005', label: 'Founded' },
              { year: '2010', label: 'First Global Trade' },
              { year: '2018', label: 'Expanded Network' },
              { year: '2025', label: 'Present Scale' }
            ].map((node, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center group bg-bg-elevated px-4">
                <div className="w-6 h-6 rounded-full bg-bg-base border-2 border-accent-primary mb-4 flex items-center justify-center shadow-[0_0_15px_rgba(212,136,42,0.5)] group-hover:bg-accent-primary transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-primary group-hover:bg-bg-base"></div>
                </div>
                <span className="font-mono text-text-primary text-[14px] mb-2">{node.year}</span>
                <span className="font-body text-text-muted text-sm">{node.label}</span>
              </div>
            ))}
            
          </div>
        </div>
      </section>
    </div>
  );
}
