import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const commoditiesData = [
  {
    id: 'coal',
    title: 'Coal',
    specs: 'Thermal • Metallurgical',
    desc: 'High-grade thermal and metallurgical coal catering to distinct energy and industrial needs globally. Sourced from premier basins with strict quality control.',
    image: '/coal-new.png',
    align: 'left'
  },
  {
    id: 'iron-ore',
    title: 'Iron Ore',
    specs: 'Fines • Lumps • Pellets',
    desc: 'Primary components for steel production. We deliver consistent Fe content optimized for blast furnace and direct reduction operations.',
    image: '/iron-ore.png',
    align: 'right'
  },
  {
    id: 'manganese',
    title: 'Manganese',
    specs: 'Lumps • Fines • Alloys',
    desc: 'Crucial for modern steelmaking and emerging battery technologies. We source premium manganese ore with optimal Mn content.',
    image: '/alumini.png',
    align: 'left'
  },
  {
    id: 'bauxite',
    title: 'Bauxite',
    specs: 'Ore • Alumina • Laterite',
    desc: 'Primary source of aluminium, essential for aerospace, automotive, and construction industries. We supply high-quality bauxite with consistent Al₂O₃ content from trusted global sources.',
    image: '/mangannese.png',
    align: 'right'
  },
  {
    id: 'metal',
    title: 'Metal',
    specs: 'Ferrous Alloys • Non-Ferrous Base Metals',
    desc: 'Premium metals including ferrous alloys, steel, and high-quality non-ferrous base metals for global manufacturing and infrastructure.',
    image: '/metals-grid.png',
    align: 'left'
  },
  {
    id: 'petroleum',
    title: 'Petroleum Products',
    specs: 'Crude • Refined • Lubricants',
    desc: 'A comprehensive suite of energy solutions powering modern industry. Handled with world-class maritime logistics.',
    image: '/petroleum.png',
    align: 'right'
  },
  {
    id: 'agri',
    title: 'Agricultural',
    specs: 'Grains • Oilseeds • Pulses',
    desc: 'Securing global food chains through reliable sourcing, bulk transportation, and rigorous compliance with international standards.',
    image: '/rice-harvest.png',
    align: 'left'
  },
  {
    id: 'chemicals',
    title: 'Chemicals',
    specs: 'Polymers • Industrial Compounds',
    desc: 'Specialized industrial grade chemicals pivotal for manufacturing, seamlessly delivered with specialized safety protocols.',
    image: '/chemicals.png',
    align: 'right'
  },
  {
    id: 'scrap',
    title: 'Ferrous & Non-Ferrous Scrap',
    specs: 'Recycled Metals • Industrial Scrap',
    desc: 'Ferrous Metal: Ferro Alloys, Steel.\nNon Ferrous Metal: Magnesium, Cerium, Titanium, Vanadium, Graphite, Zinc, Lead, Silver.',
    image: '/ferrous-scrap.png',
    align: 'left'
  }
];

export default function CommoditiesPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="w-full flex flex-col pt-[72px]">
      <Helmet>
        <title>Commodities | EarthCore Resources</title>
      </Helmet>

      {/* Hero Banner */}
      <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden bg-bg-base">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('/commodities-hero.png')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-bg-base via-bg-base/60 to-bg-base/30" />
        
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
          <section key={index} id={item.id} className="py-24 even:bg-bg-surface odd:bg-bg-section-alt border-y border-border-subtle relative scroll-mt-[72px]">
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
                <p className="font-body text-text-secondary text-lg leading-[1.7] max-w-lg whitespace-pre-line">
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
