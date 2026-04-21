import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const commoditiesData = [
  {
    title: 'Coal',
    specs: 'Thermal • Metallurgical',
    desc: 'High-grade thermal and metallurgical coal catering to distinct energy and industrial needs globally. Sourced from premier basins with strict quality control.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    align: 'left'
  },
  {
    title: 'Iron Ore',
    specs: 'Fines • Lumps • Pellets',
    desc: 'Primary components for steel production. We deliver consistent Fe content optimized for blast furnace and direct reduction operations.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    align: 'right'
  },
  {
    title: 'Petroleum Products',
    specs: 'Crude • Refined • Lubricants',
    desc: 'A comprehensive suite of energy solutions powering modern industry. Handled with world-class maritime logistics.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    align: 'left'
  },
  {
    title: 'Agricultural',
    specs: 'Grains • Oilseeds • Pulses',
    desc: 'Securing global food chains through reliable sourcing, bulk transportation, and rigorous compliance with international standards.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    align: 'right'
  },
  {
    title: 'Chemicals',
    specs: 'Polymers • Industrial Compounds',
    desc: 'Specialized industrial grade chemicals pivotal for manufacturing, seamlessly delivered with specialized safety protocols.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    align: 'left'
  }
];

export default function CommoditiesPage() {
  return (
    <div className="w-full flex flex-col pt-[72px]">
      <Helmet>
        <title>Commodities | EarthCore Resources</title>
      </Helmet>

      {/* Hero Banner */}
      <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden bg-bg-base">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-bg-base via-bg-base/80 to-transparent" />
        
        <div className="relative z-10 text-center flex flex-col items-center max-w-[1280px] px-6 lg:px-16 w-full mt-12">
          <h1 className="font-heading font-[700] text-5xl md:text-[72px] text-text-primary leading-[1.05] tracking-tighter">
            Our Commodity Portfolio
          </h1>
          <div className="mt-8 w-16 h-[2px] bg-accent-primary"></div>
        </div>
      </section>

      {/* Featured Rows */}
      <div className="flex flex-col">
        {commoditiesData.map((item, index) => (
          <section key={index} className="py-24 even:bg-bg-surface odd:bg-bg-section-alt border-y border-border-subtle relative">
            <div className={`max-w-[1280px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${item.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Block */}
              <div className={`relative ${item.align === 'right' ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 border border-border-accent translate-x-3 translate-y-3"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full aspect-[4/3] object-cover relative z-10 grayscale-[30%] hover:grayscale-0 transition-all duration-500" 
                />
              </div>

              {/* Text Block */}
              <div className={`flex flex-col gap-6 pl-8 relative ${item.align === 'right' ? 'lg:order-1' : ''}`}>
                <div className="absolute top-0 left-0 w-[2px] h-full bg-accent-primary"></div>
                
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
                  {item.specs}
                </p>
                <h2 className="font-heading font-[700] text-4xl text-text-primary">
                  {item.title}
                </h2>
                <p className="font-body text-text-secondary text-lg leading-[1.7] max-w-lg">
                  {item.desc}
                </p>

                <Link 
                  to="/contact" 
                  className="mt-4 flex items-center gap-2 text-accent-primary font-[600] font-body text-[16px] hover:text-accent-hover transition-colors group w-fit"
                >
                  Request Quote 
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </section>
        ))}
      </div>
      
    </div>
  );
}
