
import { Droplets, Recycle, Sprout, Gem, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';

const commodities = [
  { id: 'minerals', name: 'Minerals', desc: 'Coal, iron ore, manganese and essential industrial minerals.', icon: Gem, cssClass: 'card-coal', hoverImg: '/iron-ore.png' },
  { id: 'petroleum', name: 'Petroleum Products', desc: 'Refined fuels and industrial lubricants.', icon: Droplets, cssClass: '', hoverImg: '/petroleum.png' },
  { id: 'scrap', name: 'Ferrous & Non-Ferrous Scrap', desc: 'Sustainable recycling globally.', icon: Recycle, cssClass: '', hoverImg: '/ferrous-scrap.png' },
  { id: 'agri', name: 'Agricultural Commodities', desc: 'Grains, pulses, and edible oils securing food chains.', icon: Sprout, cssClass: 'card-agri flex-row items-center justify-between', hoverImg: '/agricultural.png' },
  { id: 'chemicals', name: 'Chemicals', desc: 'Industrial and specialty chemicals for diverse applications.', icon: FlaskConical, cssClass: '', hoverImg: '/chemicals.png' },
];

export default function Commodities() {
  return (
    <section id="commodities" className="bg-bg-base pt-24 pb-32 border-b border-border-subtle">
      <div className="flex flex-col items-center mb-16 px-6 relative z-10">
        <h2 className="font-heading font-[700] text-[52px] text-text-primary mb-4">What We Trade</h2>
        <div className="w-[60px] h-[2px] bg-accent-primary"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="commodity-grid shadow-2xl">
          {commodities.map((item) => (
            <Link 
              to={`/commodities#${item.id}`}
              key={item.id}
              className={`relative bg-bg-elevated p-8 md:p-12 flex flex-col group overflow-hidden border border-transparent hover:border-accent-earth/30 transition-all hover:shadow-xl hover:-translate-y-1 ${item.cssClass}`}
            >
              <div className="relative z-10 mb-auto">
                <item.icon className="text-accent-primary w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
              </div>
              <div className="relative z-10 mt-8">
                <h3 className="font-heading font-[600] text-3xl mb-2 group-hover:text-accent-primary transition-colors text-[#1B2A3B]">{item.name}</h3>
                <p className="font-body text-[#4A4A4A] text-sm md:text-base leading-[1.6] max-w-sm">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
