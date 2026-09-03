import { useState } from 'react';
import { X, ShoppingBag, Zap, Shield, Sparkles, Truck, RefreshCw, Ruler, Check } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: ProductItem, size: string, quantity: number) => void;
  onBuyNow: (product: ProductItem, size: string, quantity: number) => void;
  onOpenSizeGuide: () => void;
}

export default function ProductModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onBuyNow,
  onOpenSizeGuide,
}: ProductModalProps) {
  if (!isOpen || !product) return null;

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'material' | 'fit' | 'care' | 'shipping'>('desc');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuy = () => {
    onBuyNow(product, selectedSize, quantity);
  };

  return (
    <div
      id="product-detail-modal-overlay"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn overflow-y-auto"
    >
      <div
        id="product-detail-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl bg-[#0A0A0A] border border-red-900/70 rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(229,9,20,0.3)] relative my-auto max-h-[92vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 border border-red-950/80 hover:border-[#E50914] text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
        >
          <X className="w-5 h-5 text-[#E50914]" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT: Image Gallery with Multiple Views */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              {/* Primary Selected Image */}
              <div className="relative aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#050508] border border-red-950/60 shadow-xl">
                <img
                  src={product.images[activeImageIdx] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full bg-black/80 border border-red-900/70 text-white backdrop-blur-md">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Thumbnails Row */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {product.images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        activeImageIdx === idx
                          ? 'border-[#E50914] shadow-[0_0_15px_rgba(229,9,20,0.6)] scale-105'
                          : 'border-zinc-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Product Information & Purchase Panel */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              {/* Header Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E50914] animate-pulse" />
                  <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#E50914]">
                    {product.category}
                  </span>
                </div>

                <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  {product.name}
                </h2>

                <div className="flex items-baseline gap-4 pt-1">
                  <span className="font-cinzel text-3xl font-black text-[#E50914]">
                    {product.formattedPrice}
                  </span>
                  <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                    IN STOCK // COMPLIMENTARY VAULT PACKAGING
                  </span>
                </div>

                <p className="text-sm text-[#A0A0A0] leading-relaxed pt-2">
                  {product.description}
                </p>
              </div>

              {/* Size Selector */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    SELECT SIZE: <span className="text-[#E50914] font-black">{selectedSize}</span>
                  </span>
                  <button
                    type="button"
                    onClick={onOpenSizeGuide}
                    className="text-xs text-[#E50914] hover:text-white flex items-center gap-1.5 font-bold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    SIZE GUIDE
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-all ${
                        selectedSize === sz
                          ? 'bg-[#E50914] border-[#E50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.6)]'
                          : 'bg-[#000000] border-zinc-800 text-zinc-400 hover:border-zinc-500 hover:text-white'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & CTA Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    QUANTITY:
                  </span>
                  <div className="flex items-center bg-[#000000] border border-zinc-800 rounded-full px-3 py-1 gap-3">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-zinc-400 hover:text-white font-bold text-sm px-1"
                    >
                      -
                    </button>
                    <span className="text-sm font-black text-white min-w-[20px] text-center font-mono-tech">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-zinc-400 hover:text-white font-bold text-sm px-1"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {/* ADD TO CART */}
                  <button
                    type="button"
                    onClick={handleAdd}
                    className="w-full py-3.5 rounded-full bg-[#000000] border border-red-900/80 hover:border-[#E50914] text-white text-xs font-black tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg hover:shadow-[0_0_25px_rgba(229,9,20,0.5)] cursor-pointer"
                  >
                    {added ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        ADDED TO BAG
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-[#E50914]" />
                        ADD TO CART
                      </>
                    )}
                  </button>

                  {/* BUY NOW */}
                  <button
                    type="button"
                    onClick={handleBuy}
                    className="w-full py-3.5 rounded-full bg-[#E50914] hover:bg-white text-white hover:text-black text-xs font-black tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(229,9,20,0.7)] cursor-pointer active:scale-98"
                  >
                    <Zap className="w-4 h-4" />
                    BUY NOW
                  </button>
                </div>
              </div>

              {/* Tabbed Product Details */}
              <div className="border-t border-red-950/60 pt-4 space-y-3">
                <div className="flex flex-wrap gap-2 border-b border-zinc-900 pb-2">
                  {(['desc', 'material', 'fit', 'care', 'shipping'] as const).map((tabKey) => (
                    <button
                      key={tabKey}
                      type="button"
                      onClick={() => setActiveTab(tabKey)}
                      className={`text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-lg transition-all ${
                        activeTab === tabKey
                          ? 'bg-[#E50914]/20 text-[#E50914] border border-[#E50914]/40'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {tabKey === 'desc' && 'DESCRIPTION'}
                      {tabKey === 'material' && 'MATERIAL'}
                      {tabKey === 'fit' && 'FIT GUIDE'}
                      {tabKey === 'care' && 'CARE'}
                      {tabKey === 'shipping' && 'SHIPPING'}
                    </button>
                  ))}
                </div>

                <div className="text-xs text-zinc-400 leading-relaxed min-h-[50px]">
                  {activeTab === 'desc' && <p>{product.description}</p>}
                  {activeTab === 'material' && <p>{product.details?.material || '100% Custom-milled heavy cotton.'}</p>}
                  {activeTab === 'fit' && <p>{product.details?.fit || 'Engineered oversized streetwear fit.'}</p>}
                  {activeTab === 'care' && <p>{product.details?.care || 'Cold hand wash inside out.'}</p>}
                  {activeTab === 'shipping' && (
                    <div className="space-y-1">
                      <p>{product.details?.shipping || 'Worldwide express dispatch within 24h.'}</p>
                      <p className="text-zinc-500">Free 30-day returns on unworn items with security tag intact.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
