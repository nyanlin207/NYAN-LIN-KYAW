import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { LookbookItem } from '../types';

interface LookbookLightboxProps {
  item: LookbookItem | null;
  items: LookbookItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (item: LookbookItem) => void;
}

export default function LookbookLightbox({
  item,
  items,
  isOpen,
  onClose,
  onSelect,
}: LookbookLightboxProps) {
  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const prev = () => {
    const nextIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[nextIdx]);
  };

  const next = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
  };

  return (
    <div
      id="lookbook-lightbox-overlay"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn select-none"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-40 w-11 h-11 rounded-full bg-black/70 border border-zinc-800 hover:border-[#E50914] text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
      >
        <X className="w-5 h-5 text-[#E50914]" />
      </button>

      {/* Prev Navigation Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous Look"
        className="absolute left-4 sm:left-8 z-40 w-12 h-12 rounded-full bg-black/70 border border-zinc-800 hover:border-[#E50914] text-white flex items-center justify-center transition-all cursor-pointer shadow-2xl"
      >
        <ChevronLeft className="w-6 h-6 text-[#E50914]" />
      </button>

      {/* Next Navigation Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next Look"
        className="absolute right-4 sm:right-8 z-40 w-12 h-12 rounded-full bg-black/70 border border-zinc-800 hover:border-[#E50914] text-white flex items-center justify-center transition-all cursor-pointer shadow-2xl"
      >
        <ChevronRight className="w-6 h-6 text-[#E50914]" />
      </button>

      {/* Main Image Stage */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden border border-red-900/60 bg-[#000000] flex flex-col shadow-[0_0_80px_rgba(229,9,20,0.35)]"
      >
        <div className="relative overflow-hidden max-h-[70vh] flex items-center justify-center bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[70vh] filter brightness-95 contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer Details */}
        <div className="p-5 sm:p-6 bg-[#0A0A0A] border-t border-red-950/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914]">
              {item.collection} // ARCHIVE {item.year || '2026'}
            </span>
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
              {item.title}
            </h3>
            <p className="text-xs text-zinc-400 font-sans-main">{item.subtitle}</p>
          </div>

          {item.location && (
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono-tech self-start sm:self-auto bg-black/60 px-3 py-1.5 rounded-full border border-zinc-800">
              <MapPin className="w-3.5 h-3.5 text-[#E50914]" />
              {item.location}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
