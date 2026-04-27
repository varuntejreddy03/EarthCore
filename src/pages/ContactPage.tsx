import { Helmet } from 'react-helmet-async';
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';


export default function ContactPage() {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      commodity: formData.get('commodity') || 'General',
      message: formData.get('message'),
    };
    
    const text = `*New Trading Enquiry*\n\n*Name:* ${data.name}\n*Company:* ${data.company}\n*Email:* ${data.email}\n*Commodity:* ${data.commodity}\n\n*Message:*\n${data.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919550478034?text=${encodedText}`, '_blank');
  };

  return (
    <div className="w-full flex flex-col pt-[72px]">
      <Helmet>
        <title>Contact | EarthCore Resources</title>
      </Helmet>

      {/* Split layout: left info, right form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-72px)]">
        
        {/* Left Side */}
        <div className="bg-bg-section-alt p-12 lg:p-24 flex flex-col justify-between relative overflow-hidden">
          {/* Copper Glow */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-accent-primary/5 blur-[150px] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 w-full max-w-[500px] mx-auto lg:mx-0">
            <h1 className="font-heading font-[800] text-5xl md:text-[64px] text-text-primary leading-[1] mb-12">
              Let's Trade<br/>Together.
            </h1>
            
            <p className="font-heading italic text-[24px] text-text-secondary mb-16 border-l-2 border-accent-primary pl-6 hover:border-l-[4px] transition-all">
              "Partner with EarthCore Resources for reliable quality, competitive pricing, and unbreakable supply chain solutions that keep your business moving forward."
            </p>

            <div className="flex flex-col gap-8 mb-16">


              <div className="flex items-start gap-4">
                <Phone className="text-accent-primary w-6 h-6 mt-0.5" />
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-text-primary font-mono text-lg">+91 95504 78034</p>
                    <span className="bg-[#25D366]/20 text-[#25D366] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">WhatsApp</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-accent-primary w-6 h-6 mt-0.5" />
                <div>
                  <a href="mailto:info@earthcore.co.in" className="text-text-primary font-body text-lg hover:text-accent-primary transition-colors">info@earthcore.co.in</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-accent-primary w-6 h-6 mt-0.5" />
                <div>
                  <p className="text-text-primary font-body text-lg">Mon–Sat · 10:00 AM – 5:00 PM</p>
                  <p className="text-text-muted font-body text-sm mt-1">Indian Standard Time (IST)</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919550478034"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-[#080B08] font-bold text-lg py-4 rounded-sm flex items-center justify-center gap-3 hover:bg-[#20bd5a] hover:shadow-[0_0_24px_rgba(37,211,102,0.4)] transition-all"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Connect on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-bg-surface p-12 lg:p-24 flex items-center justify-center relative border-l border-border-subtle">
          <div className="w-full max-w-[600px] border border-border-accent/30 bg-bg-elevated p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <h3 className="font-heading font-[700] text-3xl text-text-primary mb-2">Send an Enquiry</h3>
            <p className="text-text-muted text-sm font-body mb-8">Fill the form below and it will instantly map your requirements to WhatsApp.</p>
            
            <form onSubmit={submitHandler} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-text-secondary text-sm font-medium uppercase tracking-wider">Full Name</label>
                  <input type="text" id="name" name="name" required className="bg-bg-base border border-border-subtle rounded-none p-4 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all font-body" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-text-secondary text-sm font-medium uppercase tracking-wider">Company</label>
                  <input type="text" id="company" name="company" required className="bg-bg-base border border-border-subtle rounded-none p-4 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all font-body" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-text-secondary text-sm font-medium uppercase tracking-wider">Email Address</label>
                <input type="email" id="email" name="email" required className="bg-bg-base border border-border-subtle rounded-none p-4 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all font-body" placeholder="john@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="commodity" className="text-text-secondary text-sm font-medium uppercase tracking-wider">Commodity of Interest</label>
                <select id="commodity" name="commodity" className="bg-bg-base border border-border-subtle rounded-none p-4 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all font-body appearance-none">
                  <option value="" disabled selected>Select a commodity...</option>
                  <option value="Coal">Coal</option>
                  <option value="Iron Ore">Iron Ore</option>
                  <option value="Petroleum Products">Petroleum Products</option>
                  <option value="Agricultural Commodities">Agricultural Commodities</option>
                  <option value="Other">Other / General</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-text-secondary text-sm font-medium uppercase tracking-wider">Message</label>
                <textarea id="message" name="message" required rows={4} className="bg-bg-base border border-border-subtle rounded-none p-4 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all font-body resize-none" placeholder="We are looking to source..."></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full font-bold text-lg py-4 mt-6 flex items-center justify-center gap-2 group text-[#080B08] transition-all hover:scale-[1.01]"
                style={{
                  background: 'var(--gradient-cta)',
                  boxShadow: '0 4px 24px rgba(212,136,42,0.3)'
                }}
              >
                Send Enquiry <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Map Embed */}
      <div className="w-full h-[250px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226388.940561574!2d70.93291244585973!3d21.05607380126782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sus!4v1714081015682!5m2!1sen!2sus" 
          className="w-full h-full border-0 filter grayscale invert-[.9] hue-rotate-[180deg] opacity-80" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
}
