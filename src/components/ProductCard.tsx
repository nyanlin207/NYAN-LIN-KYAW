import { useState, type MouseEvent } from 'react';
import { Eye, ShoppingBag, Check } from 'lucide-react';
import { ProductItem } from '../types';

export interface ProductCardProps {
  key?: string;
  product: ProductItem;
  onQuickView: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem, size: string) => void;
}

export default function ProductCard({ product, onQuickView, onAddToCart }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [added, setAdded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleAdd = (e: MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={() => onQuickView(product)}
      className="group relative bg-[#0A0A0A] border border-red-950/50 hover:border-red-600/80 rounded-[18px] sm:rounded-[28px] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.95),0_0_25px_rgba(229,9,20,0.25)] hover:-translate-y-1.5 cursor-pointer"
    >
      {/* Product Image Stage */}
      <div
        className="relative w-full aspect-[3/4] overflow-hidden bg-[#050508]"
        onMouseEnter={() => product.images.length > 1 && setImageIndex(1)}
        onMouseLeave={() => setImageIndex(0)}
      >
        <img
          src={product.images[imageIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 filter brightness-95 contrast-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Dark subtle gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2 left-2 right-2 sm:top-3.5 sm:left-3.5 sm:right-3.5 flex items-center justify-between pointer-events-none">
          <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-black uppercase tracking-[0.15em] sm:tracking-[0.25em] px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#000000]/80 border border-red-900/60 text-white backdrop-blur-md truncate max-w-[70%]">
            {product.tag}
          </span>
          {product.isLimited && (
            <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-extrabold uppercase tracking-[0.1em] sm:tracking-[0.2em] px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full bg-[#E50914] text-white shadow-[0_0_12px_rgba(229,9,20,0.8)] shrink-0">
              VAULT
            </span>
          )}
        </div>

        {/* Quick View Button overlay (Desktop) */}
        <div className="absolute inset-0 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="pointer-events-auto bg-[#000000]/90 hover:bg-[#E50914] text-white px-4 py-2 rounded-full border border-red-900/60 flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl"
          >
            <Eye className="w-3.5 h-3.5" />
            QUICK VIEW
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-2.5 xs:p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-4">
        <div className="space-y-1 sm:space-y-1.5">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[7px] xs:text-[8px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-[0.3em] text-[#E50914] truncate">
              {product.category}
            </span>
            <span className="font-cinzel text-xs xs:text-sm sm:text-xl font-bold text-white group-hover:text-[#E50914] transition-colors shrink-0">
              {product.formattedPrice}
            </span>
          </div>

          <h4 className="font-cinzel text-[11px] xs:text-xs sm:text-base font-bold text-zinc-100 group-hover:text-white line-clamp-1 transition-colors leading-tight">
            {product.name}
          </h4>
        </div>

        {/* Size Selection Chips */}
        <div className="space-y-1 sm:space-y-1.5 pt-0.5 sm:pt-1">
          <div className="flex items-center justify-between text-[8px] sm:text-[10px] text-zinc-400 font-semibold">
            <span>SIZES:</span>
            <span className="text-[#E50914] font-bold">{selectedSize}</span>
          </div>
          <div className="flex flex-wrap gap-1" onClick={(e) => e.stopPropagation()}>
            {product.sizes.map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={() => setSelectedSize(sz)}
                className={`px-1.5 py-0.5 text-[8px] sm:text-[10px] font-bold rounded sm:rounded-md border transition-all ${
                  selectedSize === sz
                    ? 'bg-[#E50914] border-[#E50914] text-white shadow-[0_0_8px_rgba(229,9,20,0.5)]'
                    : 'bg-black/40 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleAdd}
          className={`w-full py-1.5 xs:py-2 sm:py-2.5 rounded-full text-[9px] xs:text-[10px] sm:text-xs font-black tracking-wider sm:tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer active:scale-98 ${
            added
              ? 'bg-zinc-100 text-black border border-white'
              : 'bg-[#000000] border border-red-950/80 hover:border-[#E50914] text-white hover:bg-[#E50914] hover:shadow-[0_0_20px_rgba(229,9,20,0.6)]'
          }`}
        >
          {added ? (
            <>
              <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
              <span className="truncate">ADDED</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E50914] group-hover:text-white shrink-0" />
              <span className="truncate">
                <span className="xs:hidden">ADD</span>
                <span className="hidden xs:inline">ADD TO CART</span>
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
