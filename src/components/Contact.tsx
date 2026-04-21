import { motion } from 'framer-motion';
import { User, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Section from './Section';

export default function Contact() {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Section id="contact" className="bg-bg-surface relative overflow-hidden py-32">
      {/* Copper Radial Glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-earth/6 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading font-bold text-5xl text-white mb-6">Let's Trade Together</h2>
            <p className="font-body text-text-secondary text-lg">
              Partner with EarthCore Resources to secure consistent quality, competitive pricing, and robust supply chain solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8 mb-12"
          >
            <div className="flex items-start gap-4">
              <User className="text-accent-primary w-6 h-6 mt-1" />
              <div>
                <p className="text-white font-medium text-lg">Raghav Reddy</p>
                <p className="text-text-muted text-sm">Relationship Manager</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-accent-primary w-6 h-6 mt-1" />
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-white font-medium text-lg font-mono">+91 98804 78034</p>
                  <span className="bg-[#25D366]/20 text-[#25D366] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">WhatsApp</span>
                </div>
                <p className="text-text-muted text-sm">Available for immediate inquiries</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-accent-primary w-6 h-6 mt-1" />
              <div>
                <a href="mailto:info@earthcore.co.in" className="text-white font-medium text-lg hover:text-accent-glow transition-colors">info@earthcore.co.in</a>
                <p className="text-text-muted text-sm">General inquiries and proposals</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-accent-primary w-6 h-6 mt-1" />
              <div>
                <p className="text-white font-medium text-lg">Mon–Sat · 10:00 AM – 5:00 PM</p>
                <p className="text-text-muted text-sm">Indian Standard Time (IST)</p>
              </div>
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href="https://wa.me/919880478034"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white font-bold text-lg py-4 rounded-sm flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all transform hover:-translate-y-1 active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Connect on WhatsApp
          </motion.a>
        </div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="bg-bg-elevated p-8 md:p-12 rounded-sm border border-border-subtle shadow-2xl relative overflow-hidden">
            <h3 className="font-heading font-semibold text-2xl text-white mb-8">Send an Enquiry</h3>
            
            <form onSubmit={submitHandler} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-text-muted text-sm font-medium">Full Name <span className="text-accent-primary">*</span></label>
                  <input type="text" id="name" required className="bg-[#0F1419] border border-border-subtle rounded-sm p-4 text-white placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(37,99,235,0.2)] transition-all font-body" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-text-muted text-sm font-medium">Company Name <span className="text-accent-primary">*</span></label>
                  <input type="text" id="company" required className="bg-[#0F1419] border border-border-subtle rounded-sm p-4 text-white placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(37,99,235,0.2)] transition-all font-body" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-text-muted text-sm font-medium">Email Address <span className="text-accent-primary">*</span></label>
                  <input type="email" id="email" required className="bg-[#0F1419] border border-border-subtle rounded-sm p-4 text-white placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(37,99,235,0.2)] transition-all font-body" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-text-muted text-sm font-medium">Phone Number</label>
                  <input type="tel" id="phone" className="bg-[#0F1419] border border-border-subtle rounded-sm p-4 text-white placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(37,99,235,0.2)] transition-all font-body" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="commodity" className="text-text-muted text-sm font-medium">Commodity of Interest <span className="text-accent-primary">*</span></label>
                <select id="commodity" required className="bg-[#0F1419] border border-border-subtle rounded-sm p-4 text-white focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(37,99,235,0.2)] transition-all font-body appearance-none cursor-pointer">
                  <option value="" disabled selected className="text-text-muted">Select a commodity...</option>
                  <option value="coal">Coal</option>
                  <option value="iron-ore">Iron Ore</option>
                  <option value="manganese">Manganese</option>
                  <option value="petroleum">Petroleum Products</option>
                  <option value="scrap">Ferrous & Non-Ferrous Scrap</option>
                  <option value="minerals">Minerals</option>
                  <option value="agricultural">Agricultural Commodities</option>
                  <option value="chemicals">Chemicals</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-text-muted text-sm font-medium">Message <span className="text-accent-primary">*</span></label>
                <textarea id="message" required rows={4} className="bg-[#0F1419] border border-border-subtle rounded-sm p-4 text-white placeholder-text-muted/50 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_0_2px_rgba(37,99,235,0.2)] transition-all font-body resize-none" placeholder="How can we assist you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-accent-primary to-[#4F46E5] text-white font-medium text-lg py-4 rounded-sm flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all group relative overflow-hidden mt-2">
                <span className="relative z-10 flex items-center gap-2">Send Enquiry <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
              </button>

              <p className="text-center text-[11px] text-text-muted mt-2">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
