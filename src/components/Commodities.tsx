
import { Pickaxe, Flame, Droplets, Recycle, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const commodities = [
  { id: 'coal', name: 'Coal', desc: 'Thermal and metallurgical coal.', icon: Flame, cssClass: 'card-coal', hoverImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { id: 'iron-ore', name: 'Iron Ore', desc: 'High-grade primary components.', icon: Pickaxe, cssClass: '', hoverImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80' },
  { id: 'petroleum', name: 'Petroleum Products', desc: 'Refined fuels and industrial lubricants.', icon: Droplets, cssClass: '', hoverImg: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&q=80' },
  { id: 'scrap', name: 'Ferrous & Non-Ferrous Scrap', desc: 'Sustainable recycling globally.', icon: Recycle, cssClass: '', hoverImg: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80' },
  { id: 'agri', name: 'Agricultural Commodities', desc: 'Grains, pulses, and edible oils securing food chains.', icon: Sprout, cssClass: 'card-agri flex-row items-center justify-between', hoverImg: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80' },
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
              to="/commodities"
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
