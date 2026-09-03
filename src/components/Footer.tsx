import { useState, type FormEvent } from 'react';
import { Instagram, Youtube, ArrowRight, Check, Sparkles } from 'lucide-react';
import { NavTab } from '../types';
import GothicLogo from './GothicLogo';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
  onOpenSizeGuide: () => void;
}

export default function Footer({ onNavigate, onOpenSizeGuide }: FooterProps) {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setJoined(true);
      setTimeout(() => {
        setEmail('');
        setJoined(false);
      }, 3000);
    }
  };

  return (
    <footer
      id="main-site-footer"
      className="w-full bg-[#050508] border-t border-red-950/70 pt-16 sm:pt-20 pb-12 mt-20 sm:mt-28 relative overflow-hidden"
    >
      {/* Ambient Red Glow in center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#E50914]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
        {/* Main Grid: Brand + Nav + Customer Care + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-4 space-y-4">
            <GothicLogo onClick={() => onNavigate('Home')} />
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Not made to fit in. Made to define your own domain. Heavyweight dark streetwear, gothic editorial craft, and non-conformist rebellion.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#0A0A0A] border border-zinc-800 text-zinc-400 hover:text-[#E50914] hover:border-[#E50914] flex items-center justify-center transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-[#0A0A0A] border border-zinc-800 text-zinc-400 hover:text-[#E50914] hover:border-[#E50914] flex items-center justify-center transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.32V8.65a8.3 8.3 0 0 0 4.92 1.6V6.8a4.8 4.8 0 0 1-1-.11z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#0A0A0A] border border-zinc-800 text-zinc-400 hover:text-[#E50914] hover:border-[#E50914] flex items-center justify-center transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Directory Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914] block">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
              {(['Home', 'The Domain', 'Founder', 'Shop', 'Lookbook', 'Contact'] as NavTab[]).map((tab) => (
                <li key={tab}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(tab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white hover:translate-x-1 transition-all cursor-pointer select-none"
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914] block">
              CUSTOMER CARE
            </span>
            <ul className="space-y-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenSizeGuide}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  SIZE GUIDE
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('Contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  SHIPPING & RETURNS
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('Contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ & VAULT AUTHENTICITY
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  PRIVACY POLICY
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  TERMS & CONDITIONS
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section: ENTER THE DOMAIN */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" /> VIP INNER CIRCLE
              </span>
              <h4 className="font-cinzel text-lg font-black text-white uppercase">
                ENTER THE DOMAIN
              </h4>
              <p className="text-xs text-zinc-400">
                Join for new collections, secret capsule drops, and priority archive access.
              </p>
            </div>

            <form onSubmit={handleJoin} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="YOUR EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-xs text-white uppercase placeholder:text-zinc-600 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#E50914] hover:bg-white text-white hover:text-black text-xs font-black tracking-wider uppercase transition-all duration-300 shrink-0 flex items-center gap-1 shadow-md cursor-pointer"
                >
                  {joined ? <Check className="w-3.5 h-3.5" /> : <>JOIN <ArrowRight className="w-3 h-3" /></>}
                </button>
              </div>
              {joined && (
                <p className="text-[10px] text-emerald-400 font-mono-tech">
                  WELCOME TO THE SYNDICATE. CHECK YOUR INBOX.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-red-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono-tech">
          <span>© 2026 DEVIL'S DOMAIN. ALL RIGHTS RESERVED.</span>
          <span className="text-zinc-600">NOT MADE TO FIT IN. MADE TO DEFINE YOUR OWN DOMAIN.</span>
        </div>
      </div>
    </footer>
  );
}
