import { useState, useMemo } from 'react';
import { Sparkles, SlidersHorizontal, ArrowUpDown, Check, Filter } from 'lucide-react';
import { ProductCategory, ProductItem } from '../types';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';

interface ShopPageProps {
  onQuickView: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem, size: string) => void;
}

const CATEGORIES: ProductCategory[] = [
  'ALL',
  'NEW ARRIVALS',
  'T-SHIRTS',
  'HOODIES',
  'PANTS',
  'JACKETS',
  'ACCESSORIES',
  'LIMITED EDITION',
];

const SIZES = ['ALL SIZES', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function ShopPage({ onQuickView, onAddToCart }: ShopPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('ALL');
  const [selectedSize, setSelectedSize] = useState<string>('ALL SIZES');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((prod) => {
      // Category filter
      if (selectedCategory === 'NEW ARRIVALS' && !prod.isNew) return false;
      if (selectedCategory === 'LIMITED EDITION' && !prod.isLimited) return false;
      if (
        selectedCategory !== 'ALL' &&
        selectedCategory !== 'NEW ARRIVALS' &&
        selectedCategory !== 'LIMITED EDITION' &&
        prod.category !== selectedCategory
      ) {
        return false;
      }

      // Size filter
      if (selectedSize !== 'ALL SIZES' && !prod.sizes.includes(selectedSize)) {
        return false;
      }

      // Search query
      if (
        searchQuery &&
        !prod.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !prod.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, selectedSize, sortBy, searchQuery]);

  return (
    <div id="page-shop" className="space-y-10 sm:space-y-14">
      {/* Shop Header */}
      <div className="text-center space-y-4 pt-4">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#E50914]" />
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#E50914]">
            OFFICIAL CATALOG ARCHIVE
          </span>
        </div>

        <h1 className="font-cinzel text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
          SHOP THE <span className="text-[#E50914]">DOMAIN.</span>
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
          Heavyweight textiles, architectural silhouettes, and gothic hardware designed for those who refuse ordinary.
        </p>
      </div>

      {/* Category Pills Navigation Bar */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 rounded-full bg-[#0A0A0A] border border-red-950/70 max-w-full shadow-lg">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#E50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.6)] font-black'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary Filter Bar: Size, Price, Search */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#0A0A0A] border border-red-950/60 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Size Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
          <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400 shrink-0">
            SIZE:
          </span>
          <div className="flex items-center gap-1">
            {SIZES.map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={() => setSelectedSize(sz)}
                className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all whitespace-nowrap ${
                  selectedSize === sz
                    ? 'bg-[#E50914] border-[#E50914] text-white shadow-sm'
                    : 'bg-black/50 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Search & Sorting */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          {/* Search Box */}
          <input
            type="text"
            placeholder="FILTER CATALOG..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-3 py-1.5 text-xs text-white uppercase placeholder:text-zinc-600 focus:outline-none w-36 sm:w-44"
          />

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1 bg-[#000000] border border-zinc-800 rounded-xl px-2 py-1">
            <ArrowUpDown className="w-3.5 h-3.5 text-zinc-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-xs text-white font-bold uppercase focus:outline-none cursor-pointer py-1"
            >
              <option value="featured" className="bg-black text-white">FEATURED</option>
              <option value="price-asc" className="bg-black text-white">PRICE: LOW TO HIGH</option>
              <option value="price-desc" className="bg-black text-white">PRICE: HIGH TO LOW</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Results Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center space-y-4 rounded-3xl bg-[#0A0A0A] border border-red-950/60">
          <p className="font-cinzel text-xl font-bold text-white">NO PIECES MATCH YOUR CURRENT FILTER</p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('ALL');
              setSelectedSize('ALL SIZES');
              setSearchQuery('');
            }}
            className="px-6 py-2 rounded-full bg-[#E50914] text-white text-xs font-bold uppercase tracking-wider"
          >
            RESET ALL FILTERS
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {filteredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}
