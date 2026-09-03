import { useState } from 'react';
import { Eye, Sparkles, MapPin } from 'lucide-react';
import { LookbookItem } from '../types';
import { LOOKBOOK_ITEMS } from '../data/lookbook';
import LookbookLightbox from './LookbookLightbox';

export default function LookbookPage() {
  const [selectedCollection, setSelectedCollection] = useState<string>('ALL');
  const [activeLightboxItem, setActiveLightboxItem] = useState<LookbookItem | null>(null);

  const collections = ['ALL', 'COLLECTION 01', 'COLLECTION 02', 'AFTER DARK', 'THE CAMPAIGN'];

  const filteredItems = LOOKBOOK_ITEMS.filter((item) => {
    if (selectedCollection === 'ALL') return true;
    return item.collection === selectedCollection;
  });

  return (
    <div id="page-lookbook" className="space-y-12 sm:space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 pt-4">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#E50914]" />
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#E50914]">
            EDITORIAL ARCHIVE
          </span>
        </div>

        <h1 className="font-cinzel text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
          LOOKBOOK // <span className="text-[#E50914]">WEAR YOUR DOMAIN</span>
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
          High-contrast visual poetry captured across the subterranean undergrounds of Tokyo, Berlin, and London.
        </p>
      </div>

      {/* Collection Category Filter Pills */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 rounded-full bg-[#0A0A0A] border border-red-950/70 max-w-full shadow-lg">
          {collections.map((col) => {
            const isActive = selectedCollection === col;
            return (
              <button
                key={col}
                type="button"
                onClick={() => setSelectedCollection(col)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#E50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.6)] font-black'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {col}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial Masonry Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxItem(item)}
            className={`group relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-red-950/60 hover:border-red-600/80 bg-[#0A0A0A] cursor-pointer transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_30px_rgba(229,9,20,0.3)] hover:-translate-y-1 ${
              idx % 3 === 1 ? 'md:translate-y-4' : ''
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-black">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-105"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Top Collection Badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white bg-black/80 border border-red-900/60 px-3 py-1 rounded-full backdrop-blur-md">
                  {item.collection}
                </span>
              </div>

              {/* View Fullscreen Overlay Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-[#E50914] text-white flex items-center justify-center shadow-[0_0_20px_rgba(229,9,20,0.8)] scale-90 group-hover:scale-100 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1.5 z-20">
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-red-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 font-sans-main line-clamp-1">{item.subtitle}</p>

                {item.location && (
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-mono-tech pt-1">
                    <MapPin className="w-3 h-3 text-[#E50914]" />
                    {item.location}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Component */}
      <LookbookLightbox
        item={activeLightboxItem}
        items={filteredItems}
        isOpen={Boolean(activeLightboxItem)}
        onClose={() => setActiveLightboxItem(null)}
        onSelect={(it) => setActiveLightboxItem(it)}
      />
    </div>
  );
}
