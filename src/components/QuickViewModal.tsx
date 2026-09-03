import { X, ArrowRight, ShieldCheck, Flame, Sparkles, CheckCircle2, ShoppingBag, Eye } from 'lucide-react';
import { NavTab, ProductItem } from '../types';
import { PRODUCTS } from '../data/products';
import { MODEL_MOCK_PHOTOS } from '../data/mockPhotos';
import GothicLogo from './GothicLogo';

interface QuickViewModalProps {
  activeModal: NavTab | null;
  onClose: () => void;
  onShopItem?: (product: ProductItem) => void;
}

export default function QuickViewModal({
  activeModal,
  onClose,
  onShopItem,
}: QuickViewModalProps) {
  if (!activeModal || activeModal === 'Home') return null;

  return (
    <div
      id="quick-view-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="quick-view-dialog"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#08080C] border border-red-900/60 p-6 sm:p-8 md:p-10 shadow-[0_0_80px_rgba(229,9,20,0.35)] space-y-6"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/80 border border-red-900/50 hover:border-[#E50914] text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
        >
          <X className="w-5 h-5 text-[#E50914]" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-red-900/30 pb-4">
          <GothicLogo />
          <span className="text-[10px] sm:text-xs font-mono-tech tracking-widest text-[#E50914] uppercase">
            // {activeModal.toUpperCase()}
          </span>
        </div>

        {/* Dynamic Modal Content */}
        {activeModal === 'The Domain' && (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914]">
                THE MANIFESTO
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-black text-white uppercase">
                THE DOMAIN REBELLION
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Devil’s Domain was forged for the non-conformists. In a world saturated with generic fashion, we craft heavy-gauge armor for modern souls. Every stitch, distressed edge, and gothic emblem is made to empower individuality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-black/60 border border-red-950/60 space-y-1.5">
                <ShieldCheck className="w-5 h-5 text-[#E50914]" />
                <h4 className="font-bold text-white text-sm">Couture Streetwear</h4>
                <p className="text-xs text-zinc-400">Custom milled luxury fabrics from 300 to 600 GSM.</p>
              </div>
              <div className="p-4 rounded-2xl bg-black/60 border border-red-950/60 space-y-1.5">
                <Flame className="w-5 h-5 text-[#E50914]" />
                <h4 className="font-bold text-white text-sm">Archival Drops</h4>
                <p className="text-xs text-zinc-400">Limited runs. Once archived, never reproduced.</p>
              </div>
              <div className="p-4 rounded-2xl bg-black/60 border border-red-950/60 space-y-1.5">
                <Sparkles className="w-5 h-5 text-[#E50914]" />
                <h4 className="font-bold text-white text-sm">Global Rebellion</h4>
                <p className="text-xs text-zinc-400">Worn across underground subcultures worldwide.</p>
              </div>
            </div>
          </div>
        )}

        {activeModal === 'Shop' && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914]">
                EXCLUSIVE ARCHIVE
              </span>
              <h2 className="font-cinzel text-3xl font-black text-white uppercase">
                FEATURED CAPSULE
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRODUCTS.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="group rounded-2xl bg-black/60 border border-red-950/60 hover:border-red-600/70 p-4 transition-all duration-300 flex flex-col justify-between space-y-3"
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-950 relative">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2 left-2 text-[9px] font-bold tracking-widest bg-black/80 px-2 py-0.5 rounded text-white border border-red-900/40">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono-tech text-[#E50914] uppercase">{item.category}</span>
                    <h4 className="font-cinzel font-bold text-sm text-white">{item.name}</h4>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{item.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-red-950/40">
                    <span className="font-cinzel text-base font-bold text-white">{item.formattedPrice}</span>
                    <button
                      type="button"
                      onClick={() => onShopItem?.(item)}
                      className="px-3.5 py-1.5 rounded-full bg-[#E50914] hover:bg-white text-white hover:text-black text-xs font-bold uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      ACQUIRE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeModal === 'Lookbook' && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914]">
                EDITORIAL CAMPAIGN
              </span>
              <h2 className="font-cinzel text-3xl font-black text-white uppercase">
                LOOKBOOK V // SHADOW NOIR
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-red-950/60 relative group">
                <img
                  src={MODEL_MOCK_PHOTOS.sataPlatformBackBlonde}
                  alt="Look 01 / Sata Phenomeness"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="font-cinzel text-xs font-bold text-white uppercase">Look 01 / Sata Phenomeness</span>
                </div>
              </div>

              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-red-950/60 relative group">
                <img
                  src={MODEL_MOCK_PHOTOS.satanCrossBlonde}
                  alt="Look 02 / Satan Phenomenon"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="font-cinzel text-xs font-bold text-white uppercase">Look 02 / Satan Phenomenon</span>
                </div>
              </div>

              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-red-950/60 relative group">
                <img
                  src={MODEL_MOCK_PHOTOS.bannerStudio}
                  alt="Look 03 / Studio Monolith"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="font-cinzel text-xs font-bold text-white uppercase">Look 03 / Studio Monolith</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeModal === 'Contact' && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914]">
                SANCTUARY & PRESS
              </span>
              <h2 className="font-cinzel text-3xl font-black text-white uppercase">
                JOIN THE DOMAIN
              </h2>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-red-950/60 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E50914]" />
                <div>
                  <h4 className="text-white font-bold text-sm">Direct Concierge</h4>
                  <p className="text-xs text-zinc-400">concierge@devilsdomain.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E50914]" />
                <div>
                  <h4 className="text-white font-bold text-sm">Vault Location</h4>
                  <p className="text-xs text-zinc-400">Underground Studios — Tokyo • London • Berlin</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-red-900/30 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-[#E50914] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            CLOSE ARCHIVE
          </button>
        </div>
      </div>
    </div>
  );
}
