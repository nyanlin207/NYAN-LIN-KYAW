/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { NavTab, ProductItem, CartItem, OrderRecord } from './types';
import { PRODUCTS } from './data/products';
import Header from './components/Header';
import HomePage from './components/HomePage';
import DomainPage from './components/DomainPage';
import FounderPage from './components/FounderPage';
import ShopPage from './components/ShopPage';
import LookbookPage from './components/LookbookPage';
import ContactPage from './components/ContactPage';
import ProductModal from './components/ProductModal';
import SizeGuideModal from './components/SizeGuideModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('Home');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      size: 'L',
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (product: ProductItem, size: string, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((it) => it.product.id === product.id && it.size === size);
      if (existing) {
        return prev.map((it) =>
          it.product.id === product.id && it.size === size
            ? { ...it, quantity: it.quantity + quantity }
            : it
        );
      }
      return [...prev, { product, size, quantity }];
    });
    showToast(`Added ${quantity}x "${product.name}" (${size}) to bag`);
  };

  const handleBuyNow = (product: ProductItem, size: string, quantity = 1) => {
    handleAddToCart(product, size, quantity);
    setIsProductModalOpen(false);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, size: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((it) => {
          if (it.product.id === productId && it.size === size) {
            const nextQty = it.quantity + delta;
            return nextQty > 0 ? { ...it, quantity: nextQty } : null;
          }
          return it;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (productId: string, size: string) => {
    setCartItems((prev) => prev.filter((it) => !(it.product.id === productId && it.size === size)));
    showToast('Piece removed from bag');
  };

  const handleQuickView = (product: ProductItem) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleOrderCompleted = (order: OrderRecord) => {
    setCartItems([]);
    showToast(`Order ${order.orderId} Confirmed! Welcome to the Domain.`);
  };

  return (
    <div
      id="devil-domain-app"
      className="min-h-screen bg-[#000000] text-white flex flex-col selection:bg-[#E50914] selection:text-white relative overflow-x-hidden font-sans-main"
    >
      {/* Background Subtle Red Atmosphere Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#E50914]/10 rounded-full blur-[160px]" />
        <div className="absolute top-[40%] right-[-10%] w-[550px] h-[550px] bg-[#8B0000]/15 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#E50914]/10 rounded-full blur-[170px]" />
      </div>

      {/* Main Header / Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
        {activeTab === 'Home' && (
          <HomePage
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onQuickView={handleQuickView}
            onAddToCart={(prod, sz) => handleAddToCart(prod, sz, 1)}
          />
        )}

        {activeTab === 'The Domain' && <DomainPage />}

        {activeTab === 'Founder' && <FounderPage />}

        {activeTab === 'Shop' && (
          <ShopPage
            onQuickView={handleQuickView}
            onAddToCart={(prod, sz) => handleAddToCart(prod, sz, 1)}
          />
        )}

        {activeTab === 'Lookbook' && <LookbookPage />}

        {activeTab === 'Contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onContinueShopping={() => setIsCartOpen(false)}
      />

      {/* 2-Step Secure Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Toast Alert */}
      {toastMessage && (
        <div
          id="global-toast"
          className="fixed bottom-6 right-6 z-50 bg-[#0A0A0A] border border-[#E50914] text-white px-5 py-3.5 rounded-2xl shadow-[0_0_35px_rgba(229,9,20,0.6)] flex items-center gap-3 text-xs sm:text-sm font-bold animate-fadeIn"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
