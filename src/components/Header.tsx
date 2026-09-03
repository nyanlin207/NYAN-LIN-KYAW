import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Instagram, Youtube, Sparkles } from 'lucide-react';
import { NavTab } from '../types';
import GothicLogo from './GothicLogo';

interface HeaderProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const TABS: NavTab[] = ['Home', 'The Domain', 'Founder', 'Shop', 'Lookbook', 'Contact'];

export default function Header({ activeTab, onSelectTab, cartCount, onOpenCart }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-site-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#000000]/95 backdrop-blur-xl border-b border-red-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.9)] py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* LEFT: DEVIL'S DOMAIN Logo */}
          <div className="flex items-center">
            <GothicLogo onClick={() => handleTabClick('Home')} />
          </div>

          {/* CENTER: Floating Pill-Shaped Navigation (Desktop) */}
          <nav
            id="desktop-pill-nav"
            className="hidden lg:flex items-center gap-1 bg-[#0A0A0A]/90 border border-red-950/60 hover:border-red-600/50 rounded-full p-1.5 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.9),0_0_20px_rgba(229,9,20,0.12)] transition-all duration-300"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  id={`nav-link-${tab.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                  onClick={() => handleTabClick(tab)}
                  className={`relative px-4 xl:px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#E50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.65)] font-extrabold'
                      : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </nav>

          {/* RIGHT: Social Media & Cart Button */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Desktop Socials */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#0A0A0A] border border-red-950/50 hover:border-[#E50914] hover:text-[#E50914] text-zinc-400 flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-[#0A0A0A] border border-red-950/50 hover:border-[#E50914] hover:text-[#E50914] text-zinc-400 flex items-center justify-center transition-all duration-300"
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
                className="w-9 h-9 rounded-full bg-[#0A0A0A] border border-red-950/50 hover:border-[#E50914] hover:text-[#E50914] text-zinc-400 flex items-center justify-center transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Cart Icon Button */}
            <button
              id="header-cart-btn"
              type="button"
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              className="relative bg-[#0A0A0A] border border-red-900/60 hover:border-[#E50914] text-white hover:text-white px-3.5 sm:px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(229,9,20,0.25)] active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#E50914]" />
              <span className="hidden xs:inline">BAG</span>
              {cartCount > 0 && (
                <span
                  id="cart-badge-count"
                  className="w-5 h-5 rounded-full bg-[#E50914] text-white text-[10px] font-black flex items-center justify-center shadow-[0_0_10px_rgba(229,9,20,0.8)] animate-pulse"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden w-10 h-10 rounded-full bg-[#0A0A0A] border border-red-900/50 hover:border-[#E50914] text-white flex items-center justify-center transition-all active:scale-95"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#E50914]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex flex-col p-6 lg:hidden animate-fadeIn"
        >
          <div className="flex items-center justify-between pb-6 border-b border-red-950/60">
            <GothicLogo onClick={() => handleTabClick('Home')} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-red-900/60 text-white flex items-center justify-center"
            >
              <X className="w-5 h-5 text-[#E50914]" />
            </button>
          </div>

          {/* Navigation Links in Drawer */}
          <div className="flex-1 flex flex-col justify-center space-y-3 py-8">
            {TABS.map((tab, idx) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabClick(tab)}
                  className={`text-left px-5 py-3.5 rounded-2xl flex items-center justify-between text-base font-black tracking-[0.25em] uppercase transition-all ${
                    isActive
                      ? 'bg-[#E50914] text-white shadow-[0_0_25px_rgba(229,9,20,0.6)]'
                      : 'text-zinc-300 hover:text-white bg-[#0A0A0A]/70 border border-red-950/40'
                  }`}
                >
                  <span>{tab}</span>
                  <span className="font-mono-tech text-xs opacity-60">0{idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Drawer Footer Info */}
          <div className="pt-6 border-t border-red-950/60 space-y-4">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 text-[#E50914] font-bold">
                <Sparkles className="w-3.5 h-3.5" /> DEVIL'S DOMAIN
              </span>
              <span>EST. 2024</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-[#0A0A0A] border border-red-950/50 text-center text-xs font-bold text-zinc-300 hover:text-[#E50914] flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-[#0A0A0A] border border-red-950/50 text-center text-xs font-bold text-zinc-300 hover:text-[#E50914] flex items-center justify-center gap-2"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
