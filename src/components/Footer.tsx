import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-accent-earth/30 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <Link to="/" className="flex flex-col mb-6">
              <div className="flex items-baseline gap-0.5">
                <span className="font-heading font-bold text-xl text-text-primary tracking-[0.08em]">
                  EarthCore
                </span>
              </div>
            </Link>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed">
              Global commodities. Strategic trading. Integrated logistics.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-border-subtle rounded hover:border-accent-earth text-text-secondary hover:text-text-primary transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://wa.me/919550478034" className="p-2 border border-border-subtle rounded hover:border-[#25D366] text-text-secondary hover:text-text-primary transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary mb-6 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Commodities', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`} className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary mb-6 tracking-wide">Commodities</h4>
            <ul className="flex flex-col gap-3">
              {['Coal', 'Iron Ore', 'Manganese', 'Petroleum Products', 'Ferrous Scrap', 'Minerals', 'Agricultural', 'Chemicals'].map((item) => (
                <li key={item}>
                  <span className="font-mono text-xs text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-heading font-semibold text-text-primary mb-6 tracking-wide">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-text-secondary">
              <li className="flex flex-col">
                <span className="text-text-muted mb-1 text-xs uppercase">Phone</span>
                <span className="text-text-primary">+91 95504 78034</span>
              </li>
              <li className="flex flex-col">
                <span className="text-text-muted mb-1 text-xs uppercase">Email</span>
                <span className="text-text-primary">info@earthcore.co.in</span>
              </li>
              <li className="flex flex-col">
                <span className="text-text-muted mb-1 text-xs uppercase">Business Hours</span>
                <span>Mon–Sat · 10:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            ©2025 EarthCore Resources Private Limited. All rights reserved.
          </p>
          <a href="#" className="text-xs text-text-muted hover:text-text-primary transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
