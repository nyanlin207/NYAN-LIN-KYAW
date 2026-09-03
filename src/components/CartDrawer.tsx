import { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, ShoppingBag, Sparkles, Tag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onProceedToCheckout: () => void;
  onContinueShopping: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onContinueShopping,
}: CartDrawerProps) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const finalSubtotal = Math.max(0, rawSubtotal - discountAmount);
  const freeShippingThreshold = 200;
  const distanceToFreeShipping = Math.max(0, freeShippingThreshold - finalSubtotal);

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'DOMAIN' || promoCode.trim().toUpperCase() === 'REBEL20') {
      setDiscountPercent(20);
      setPromoError('');
    } else if (promoCode.trim().toUpperCase() === 'FIRSTDROP') {
      setDiscountPercent(15);
      setPromoError('');
    } else {
      setPromoError('Invalid cipher code. Try "DOMAIN"');
    }
  };

  return (
    <div
      id="cart-drawer-overlay"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex justify-end animate-fadeIn"
    >
      <div
        id="cart-drawer-panel"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#0A0A0A] border-l border-red-900/60 h-full flex flex-col justify-between shadow-[0_0_80px_rgba(0,0,0,0.95),0_0_40px_rgba(229,9,20,0.25)] animate-slideLeft"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-red-950/70 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-950/40 border border-red-900/60 text-[#E50914] flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#E50914]">
                DEVIL'S DOMAIN
              </span>
              <h3 className="font-cinzel text-xl font-black text-white">
                YOUR BAG ({items.reduce((sum, it) => sum + it.quantity, 0)})
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="w-9 h-9 rounded-full bg-black/60 border border-zinc-800 hover:border-[#E50914] text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 sm:px-6 py-3 bg-[#050508] border-b border-red-950/50">
          <div className="flex items-center justify-between text-[11px] font-semibold mb-1.5">
            <span className="text-zinc-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
              {distanceToFreeShipping === 0 ? (
                <span className="text-[#E50914] font-bold">FREE EXPRESS SHIPPING UNLOCKED</span>
              ) : (
                <span>
                  Add <strong className="text-white">${distanceToFreeShipping.toFixed(0)}</strong> for Free Express Shipping
                </span>
              )}
            </span>
            <span className="font-mono-tech text-zinc-500 text-[10px]">$200 THRESHOLD</span>
          </div>
          <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-800 to-[#E50914] transition-all duration-500 shadow-[0_0_10px_rgba(229,9,20,0.8)]"
              style={{ width: `${Math.min(100, (finalSubtotal / freeShippingThreshold) * 100)}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full bg-red-950/30 border border-red-900/40 flex items-center justify-center text-zinc-600">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-cinzel text-lg font-bold text-white">YOUR BAG IS EMPTY</h4>
                <p className="text-xs text-zinc-400 max-w-xs">
                  The domain awaits. Explore the new collection and claim your armor.
                </p>
              </div>
              <button
                type="button"
                onClick={onContinueShopping}
                className="px-6 py-2.5 rounded-full bg-[#E50914] text-white text-xs font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(229,9,20,0.5)] cursor-pointer"
              >
                START SHOPPING
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="p-3.5 rounded-2xl bg-[#000000] border border-red-950/60 flex gap-4 items-center transition-all hover:border-red-900/80"
              >
                <div className="w-16 h-20 rounded-xl overflow-hidden bg-zinc-900 shrink-0 border border-zinc-800">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="font-cinzel text-xs font-bold text-white truncate">
                      {item.product.name}
                    </h5>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.product.id, item.size)}
                      aria-label="Remove item"
                      className="text-zinc-600 hover:text-[#E50914] p-1 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                    <span>SIZE: <strong className="text-white">{item.size}</strong></span>
                    <span>•</span>
                    <span className="text-[#E50914] font-bold">${item.product.price} EACH</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center bg-[#0A0A0A] border border-zinc-800 rounded-full px-2 py-0.5 gap-2">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                        className="text-zinc-400 hover:text-white font-bold text-xs px-1"
                      >
                        -
                      </button>
                      <span className="text-xs font-mono-tech text-white min-w-[14px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                        className="text-zinc-400 hover:text-white font-bold text-xs px-1"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-cinzel text-sm font-bold text-white">
                      ${item.product.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Checkout Actions */}
        {items.length > 0 && (
          <div className="p-5 sm:p-6 bg-[#000000] border-t border-red-950/70 space-y-4">
            {/* Promo Code Input */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="ENTER CIPHER CODE (e.g. DOMAIN)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-zinc-800 focus:border-[#E50914] rounded-xl pl-9 pr-3 py-2 text-xs text-white uppercase placeholder:text-zinc-600 focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="button"
                  onClick={applyPromo}
                  className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-[#E50914] text-white text-xs font-bold uppercase transition-colors"
                >
                  APPLY
                </button>
              </div>
              {promoError && <p className="text-[10px] text-red-500 font-mono-tech">{promoError}</p>}
              {discountPercent > 0 && (
                <p className="text-[10px] text-emerald-400 font-mono-tech flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> {discountPercent}% REBEL DISCOUNT APPLIED
                </p>
              )}
            </div>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-zinc-400">
              <div className="flex justify-between">
                <span>SUBTOTAL</span>
                <span className="font-mono-tech text-white">${rawSubtotal.toFixed(2)}</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>DISCOUNT ({discountPercent}%)</span>
                  <span className="font-mono-tech">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>ESTIMATED SHIPPING</span>
                <span className="font-mono-tech text-white">
                  {distanceToFreeShipping === 0 ? 'FREE' : '$15.00'}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-zinc-900 text-sm font-black text-white">
                <span className="font-cinzel">TOTAL</span>
                <span className="font-cinzel text-lg text-[#E50914]">
                  ${(finalSubtotal + (distanceToFreeShipping === 0 ? 0 : 15)).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              id="proceed-checkout-btn"
              type="button"
              onClick={onProceedToCheckout}
              className="w-full py-4 rounded-full bg-[#E50914] hover:bg-white text-white hover:text-black font-black text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(229,9,20,0.6)] cursor-pointer active:scale-98"
            >
              PROCEED TO SECURE CHECKOUT
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 font-mono-tech">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E50914]" />
              256-BIT ENCRYPTED LUXURY CHECKOUT
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
