import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: '01',
      title: 'Global Trading',
      desc: 'Executing high-volume trades across international markets with precision and unparalleled scale. We bridge the gap between extraction and consumption.',
      points: [
        'Strategic sourcing from premier global basins',
        'Stringent quality verification and compliance',
        'Real-time physical hedging mechanisms'
      ],
      image: '/services-trading.png',
      align: 'left'
    },
    {
      id: '02',
      title: 'Shipping & Logistics',
      desc: 'End-to-end maritime and overland logistics ensuring timely deliveries regardless of global supply chain complexities.',
      points: [
        'Vessel chartering and fleet management',
        'Port handling and custom clearances',
        'Last-mile delivery integration'
      ],
      image: '/services-shipping.png',
      align: 'right'
    },
    {
      id: '03',
      title: 'Market Intelligence',
      desc: 'Combining macroeconomic trends with localized supply chain capabilities to unlock superior value and mitigate volatility risks.',
      points: [
        'Predictive supply & demand modeling',
        'Geopolitical risk assessment',
        'Customized procurement strategies'
      ],
      image: '/services-intelligence.png',
      align: 'left'
    }
  ];

  const processFlow = ['Source', 'Verify', 'Trade', 'Ship', 'Deliver'];

  return (
    <div className="w-full flex flex-col pt-[72px]">
      <Helmet>
        <title>Services | EarthCore Resources</title>
      </Helmet>

      {/* Hero Banner */}
      <section className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden bg-bg-base border-b border-border-subtle">
        <div className="absolute inset-0 z-0 grain" />
        
        <div className="relative z-10 text-center flex flex-col items-center max-w-[1280px] px-6 w-full">
          <h1 className="font-heading font-[700] text-5xl md:text-[72px] text-text-primary leading-[1.05] tracking-tighter">
            How We Operate
          </h1>
          <div className="mt-8 w-16 h-[2px] bg-accent-primary"></div>
        </div>
      </section>

      {/* Service Deep Dives */}
      <div className="flex flex-col">
        {services.map((item) => (
          <section key={item.id} className="py-32 even:bg-bg-surface odd:bg-bg-section-alt border-b border-border-subtle relative overflow-hidden">
            
            {/* Watermark Number */}
            <div className={`absolute top-1/2 -translate-y-1/2 ${item.align === 'left' ? '-left-8' : '-right-8'} z-0 font-heading font-[800] text-[300px] text-white opacity-[0.03] select-none pointer-events-none leading-none`}>
              {item.id}
            </div>

            <div className={`max-w-[1280px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 ${item.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Text Block */}
              <div className={`flex flex-col gap-6 ${item.align === 'right' ? 'lg:order-2' : ''}`}>
                <p className="font-mono text-[16px] text-accent-primary">/{item.id}</p>
                <h2 className="font-heading font-[700] text-[48px] text-text-primary leading-tight">
                  {item.title}
                </h2>
                <p className="font-body text-text-secondary text-lg leading-[1.7] mb-4">
                  {item.desc}
                </p>
                
                <ul className="flex flex-col gap-4">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <ArrowRight className="text-accent-primary mt-1 min-w-[20px]" size={20} />
                      <span className="font-body text-text-primary text-[17px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Block */}
              <div className={`relative ${item.align === 'right' ? 'lg:order-1' : ''}`}>
                <div className="border border-border-accent p-2">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full aspect-[4/3] object-cover filter grayscale-[20%]" 
                  />
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* Process Flow Strip */}
      <section className="py-24 bg-bg-elevated overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <h3 className="font-heading font-[700] text-3xl text-text-primary">The EarthCore Process</h3>
          </div>

          <div className="relative flex justify-between items-center z-10">
            {/* Dotted connector */}
            <div className="absolute top-1/2 left-[5%] right-[5%] h-[1px] border-t-2 border-dotted border-border-accent -z-10"></div>
            
            {processFlow.map((step, i) => (
              <div key={i} className="flex flex-col items-center bg-bg-elevated px-4">
                <div className="w-16 h-16 rounded-full border border-border-accent bg-bg-surface flex items-center justify-center mb-4 text-accent-primary font-heading font-bold text-xl shadow-[0_0_20px_rgba(212,136,42,0.1)]">
                  {i + 1}
                </div>
                <span className="font-body font-[600] text-[16px] text-text-primary tracking-wide uppercase">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
