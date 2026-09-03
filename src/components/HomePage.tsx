import { ArrowRight, ArrowUpRight, Sparkles, Flame, Shield } from 'lucide-react';
import { NavTab, ProductItem } from '../types';
import { PRODUCTS } from '../data/products';
import { LOOKBOOK_ITEMS } from '../data/lookbook';
import { MODEL_MOCK_PHOTOS } from '../data/mockPhotos';
import HeroShowcase from './HeroShowcase';
import ProductCard from './ProductCard';
import BrandStatementVideo from './BrandStatementVideo';

interface HomePageProps {
  onNavigate: (tab: NavTab) => void;
  onQuickView: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem, size: string) => void;
}

export default function HomePage({ onNavigate, onQuickView, onAddToCart }: HomePageProps) {
  const featuredProducts = PRODUCTS.slice(0, 6);
  const lookbookHighlights = LOOKBOOK_ITEMS.slice(0, 4);

  return (
    <div id="page-home" className="space-y-20 sm:space-y-28 lg:space-y-36">
      {/* 1. HERO SECTION (With clean right-aligned video card & brand info cards) */}
      <HeroShowcase onNavigate={onNavigate} />

      {/* ========================================================
          2. BRAND STATEMENT SECTION
         ======================================================== */}
      <section id="home-brand-statement" className="relative py-8 sm:py-12">
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#0A0A0A] border border-red-950/60 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.95)]">
          {/* Subtle Red Ambient Orb in corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E50914]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Statement Typography */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-6 bg-[#E50914]" />
                <span className="text-[#E50914] font-black text-xs tracking-[0.4em] uppercase font-sans-main">
                  THE DOMAIN
                </span>
              </div>

              <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-[0.95] tracking-tight">
                NOT MADE
                <br />
                <span className="text-[#E50914] drop-shadow-[0_4px_25px_rgba(229,9,20,0.5)]">
                  TO BELONG.
                </span>
              </h2>

              <p className="text-[#A0A0A0] text-base sm:text-lg font-normal leading-relaxed">
                Devil's Domain is more than clothing. It is a statement of identity, confidence, and individuality. We do not manufacture garments for the crowd—we construct modern armor for those who define their own reality.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('The Domain')}
                  className="group inline-flex items-center gap-3 text-xs sm:text-sm font-black tracking-[0.25em] text-white hover:text-[#E50914] uppercase transition-colors cursor-pointer"
                >
                  <span>DISCOVER THE PHILOSOPHY</span>
                  <ArrowRight className="w-4 h-4 text-[#E50914] group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Brand Video Fashion Showcase with Controls & Video Switcher */}
            <div className="lg:col-span-6 flex justify-center">
              <BrandStatementVideo />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. FEATURED COLLECTION: LATEST FROM THE DOMAIN
         ======================================================== */}
      <section id="home-featured-collection" className="space-y-8 sm:space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-red-950/60">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#E50914]">
                CURATED CAPSULE
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              LATEST FROM THE DOMAIN
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('Shop')}
            className="self-start md:self-auto group inline-flex items-center gap-3 text-xs font-black tracking-[0.25em] text-zinc-300 hover:text-white uppercase transition-colors cursor-pointer"
          >
            <span>VIEW ALL COLLECTIONS</span>
            <div className="w-8 h-8 rounded-full bg-[#0A0A0A] border border-red-900/60 group-hover:border-[#E50914] group-hover:bg-[#E50914] text-white flex items-center justify-center transition-all">
              <ArrowRight className="w-3.5 h-3.5 text-[#E50914] group-hover:text-white" />
            </div>
          </button>
        </div>

        {/* 6 Featured Products Grid - 2 per line on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {featuredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="pt-6 flex justify-center">
          <button
            type="button"
            onClick={() => onNavigate('Shop')}
            className="px-8 sm:px-10 py-4 rounded-full bg-[#0A0A0A] border border-red-900/70 hover:border-[#E50914] text-white hover:bg-[#E50914] text-xs font-black tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(229,9,20,0.25)] flex items-center gap-3 cursor-pointer"
          >
            EXPLORE COMPLETE CATALOG ({PRODUCTS.length} PIECES)
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ========================================================
          4. CAMPAIGN / LOOKBOOK HORIZONTAL STRIP
         ======================================================== */}
      <section id="home-campaign-lookbook" className="space-y-8 sm:space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#E50914]">
              EDITORIAL CAMPAIGN
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              WEAR YOUR DOMAIN.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('Lookbook')}
            className="group flex items-center gap-2 text-xs font-black tracking-[0.25em] text-[#E50914] hover:text-white uppercase transition-colors"
          >
            <span>VIEW LOOKBOOK</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Cinematic Grid - 2 per line on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {lookbookHighlights.map((look) => (
            <div
              key={look.id}
              onClick={() => onNavigate('Lookbook')}
              className="group relative rounded-[18px] sm:rounded-[24px] overflow-hidden border border-red-950/60 hover:border-red-600/70 bg-[#0A0A0A] aspect-[3/4] cursor-pointer transition-all duration-500 hover:shadow-[0_10px_30px_rgba(229,9,20,0.3)]"
            >
              <img
                src={look.image}
                alt={look.title}
                className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 space-y-0.5 sm:space-y-1">
                <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#E50914] block truncate">
                  {look.collection}
                </span>
                <h4 className="font-cinzel text-xs sm:text-base font-bold text-white group-hover:text-red-100 transition-colors truncate">
                  {look.title}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 font-sans-main line-clamp-1 hidden xs:block">{look.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. BRAND STORY TEASER
         ======================================================== */}
      <section id="home-brand-story" className="relative">
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#050508] border border-red-950/70 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Story Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-red-900/50 aspect-[4/5] bg-black">
                <img
                  src={MODEL_MOCK_PHOTOS.redMotionModel}
                  alt="The Story Behind The Domain"
                  className="w-full h-full object-cover filter brightness-90 contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white bg-[#E50914] px-3 py-1 rounded-full">
                    FOUNDING SOVEREIGNTY
                  </span>
                </div>
              </div>
            </div>

            {/* Story Typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-6 bg-[#E50914]" />
                <span className="text-[#E50914] font-black text-xs tracking-[0.4em] uppercase font-sans-main">
                  ORIGIN ARCHIVES
                </span>
              </div>

              <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight">
                THE STORY
                <br />
                <span className="text-[#E50914]">BEHIND THE DOMAIN.</span>
              </h2>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                Every domain begins with an idea. Frustrated by the homogenization of disposable fast-fashion and tame luxury houses, Devil's Domain was forged in the nocturnal underground of Tokyo and London.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Available in 4 official languages—English, 中文, 日本語, and မြန်မာ—our brand biography chronicles the rebellion, craftsmanship, and identity that powers every single garment.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('The Domain')}
                  className="px-7 py-3 rounded-full bg-[#0A0A0A] border border-red-900/60 hover:border-[#E50914] text-white hover:bg-[#E50914] text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  READ OUR STORY & 4-LANG ARCHIVE →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. HOME FINAL CTA
         ======================================================== */}
      <section id="home-final-cta" className="relative text-center py-12 sm:py-20">
        <div className="max-w-4xl mx-auto space-y-6 rounded-[36px] bg-[#000000] border border-red-950/70 p-8 sm:p-14 shadow-[0_0_80px_rgba(229,9,20,0.2)]">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#E50914]">
            NOT MADE TO FIT IN. MADE TO DEFINE YOUR OWN DOMAIN.
          </span>

          <h2 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight">
            ENTER THE <span className="text-[#E50914]">DOMAIN.</span>
          </h2>

          <p className="text-[#A0A0A0] text-sm sm:text-base max-w-xl mx-auto">
            Discover the new collection. Limited pieces milled from heavyweight textiles. Secure your armor today before capsule retirement.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              type="button"
              onClick={() => onNavigate('Shop')}
              className="px-10 sm:px-14 py-4 rounded-full bg-[#E50914] hover:bg-white text-white hover:text-black font-black text-xs sm:text-sm tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_0_35px_rgba(229,9,20,0.8)] cursor-pointer active:scale-98 flex items-center gap-3"
            >
              SHOP NOW →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
