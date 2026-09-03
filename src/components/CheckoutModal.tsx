import { useState, useId, type FormEvent } from 'react';
import { X, ShieldCheck, CheckCircle2, CreditCard, Wallet, Building2, Smartphone, ArrowRight, Lock, Sparkles, ChevronLeft } from 'lucide-react';
import { CartItem, CheckoutCustomerInfo, OrderRecord } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: (order: OrderRecord) => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  items,
  onOrderCompleted,
}: CheckoutModalProps) {
  if (!isOpen) return null;

  const [step, setStep] = useState<'info' | 'review' | 'confirmed'>('info');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderRecord | null>(null);

  const [customer, setCustomer] = useState<CheckoutCustomerInfo>({
    fullName: 'Alexander Black',
    phone: '+1 (555) 392-8819',
    email: 'rebel@domain.style',
    address: '44 Noir Avenue, Suite 13',
    city: 'Los Angeles',
    state: 'CA',
    postalCode: '90013',
    country: 'United States',
    deliveryInstructions: 'Leave in secure vault drop / call upon arrival',
    paymentMethod: 'card',
  });

  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 9921');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('888');

  const rawSubtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shippingFee = rawSubtotal >= 200 ? 0 : 15;
  const total = rawSubtotal + shippingFee;

  const generatedId = useId();

  const handleGoToReview = (e: FormEvent) => {
    e.preventDefault();
    if (!customer.fullName || !customer.email || !customer.address || !customer.city) {
      alert('Please fill in required shipping fields.');
      return;
    }
    setStep('review');
  };

  const handleConfirmAndPay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const orderId = `DOM-${Math.floor(100000 + Math.random() * 900000)}`;
      const order: OrderRecord = {
        orderId,
        items: [...items],
        subtotal: rawSubtotal,
        shippingFee,
        total,
        customer,
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        status: 'CONFIRMED & PREPARING DISPATCH',
      };
      setCompletedOrder(order);
      setIsProcessing(false);
      setStep('confirmed');
      onOrderCompleted(order);
    }, 1600);
  };

  return (
    <div
      id="checkout-modal-overlay"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn overflow-y-auto"
    >
      <div
        id="checkout-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl bg-[#0A0A0A] border border-red-900/70 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(229,9,20,0.3)] relative my-auto max-h-[92vh] overflow-y-auto"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-6 border-b border-red-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-950/40 border border-red-900/60 text-[#E50914] flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#E50914]">
                DEVIL'S DOMAIN ENCRYPTED CHECKOUT
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-white">
                {step === 'info' && '1. SHIPPING & PAYMENT'}
                {step === 'review' && '2. ORDER REVIEW & FINAL CONFIRMATION'}
                {step === 'confirmed' && 'ORDER CONFIRMED'}
              </h3>
            </div>
          </div>
          {step !== 'confirmed' && (
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/60 border border-zinc-800 hover:border-[#E50914] text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* ========================================================
            STEP 1: CUSTOMER INFORMATION & PAYMENT METHOD SELECTION
           ======================================================== */}
        {step === 'info' && (
          <form onSubmit={handleGoToReview} className="space-y-6 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={customer.fullName}
                  onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                  className="w-full bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  PHONE NUMBER *
                </label>
                <input
                  type="tel"
                  required
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  className="w-full bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  EMAIL FOR ORDER TRACKING *
                </label>
                <input
                  type="email"
                  required
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  className="w-full bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  STREET ADDRESS *
                </label>
                <input
                  type="text"
                  required
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  className="w-full bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  CITY *
                </label>
                <input
                  type="text"
                  required
                  value={customer.city}
                  onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                  className="w-full bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    STATE / REGION *
                  </label>
                  <input
                    type="text"
                    required
                    value={customer.state}
                    onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                    className="w-full bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    POSTAL CODE *
                  </label>
                  <input
                    type="text"
                    required
                    value={customer.postalCode}
                    onChange={(e) => setCustomer({ ...customer, postalCode: e.target.value })}
                    className="w-full bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  DELIVERY INSTRUCTIONS (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={customer.deliveryInstructions}
                  onChange={(e) => setCustomer({ ...customer, deliveryInstructions: e.target.value })}
                  placeholder="Gate code, safe place, secret drop spot..."
                  className="w-full bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3 pt-4 border-t border-red-950/60">
              <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                SELECT PAYMENT METHOD
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'card', label: 'CREDIT / DEBIT', icon: CreditCard },
                  { id: 'apple_pay', label: 'DIGITAL WALLET', icon: Wallet },
                  { id: 'local_bank', label: 'LOCAL BANK', icon: Building2 },
                  { id: 'Kpay', label: 'KPAY', icon: Smartphone },
                ].map((m) => {
                  const Icon = m.icon;
                  const isSelected = customer.paymentMethod === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setCustomer({ ...customer, paymentMethod: m.id as any })}
                      className={`p-3 rounded-2xl border flex flex-col items-center gap-2 text-center transition-all ${
                        isSelected
                          ? 'bg-red-950/30 border-[#E50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.5)]'
                          : 'bg-[#000000] border-zinc-800 text-zinc-400 hover:border-zinc-600'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-[#E50914]' : 'text-zinc-500'}`} />
                      <span className="text-[10px] font-black uppercase tracking-wider">{m.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Card Inputs if Card chosen */}
              {customer.paymentMethod === 'card' && (
                <div className="p-4 rounded-2xl bg-[#000000] border border-zinc-800 grid grid-cols-3 gap-3 animate-fadeIn">
                  <div className="col-span-3 space-y-1">
                    <label className="text-[10px] text-zinc-400 font-bold uppercase">CARD NUMBER</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="col-span-2 space-y-1">
                    <label className="text-[10px] text-zinc-400 font-bold uppercase">EXPIRY (MM/YY)</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-zinc-400 font-bold uppercase">CVC</label>
                    <input
                      type="text"
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Step 1 Action -> Goes to explicit review stage */}
            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono-tech">
                STAGE 1 OF 2 // NO CHARGE YET
              </span>
              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-[#E50914] hover:bg-white text-white hover:text-black font-black text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center gap-3 shadow-[0_0_25px_rgba(229,9,20,0.6)] cursor-pointer"
              >
                CONTINUE TO ORDER REVIEW
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* ========================================================
            STEP 2: EXPLICIT ORDER REVIEW & CONFIRMATION BEFORE PAYMENT
           ======================================================== */}
        {step === 'review' && (
          <div className="space-y-6 pt-6 animate-fadeIn">
            {/* Safety Notice preventing accidental charge */}
            <div className="p-4 rounded-2xl bg-red-950/20 border border-red-900/60 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#E50914] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-white">
                  FINAL ORDER REVIEW
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                  Please inspect your selected items, sizes, and destination address. Your payment will only be processed when you click <strong>CONFIRM & PAY</strong> below.
                </p>
              </div>
            </div>

            {/* Items Summary Table */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                SELECTED PIECES ({items.length})
              </h4>
              <div className="divide-y divide-zinc-900 border border-zinc-900 rounded-2xl bg-[#000000] overflow-hidden">
                {items.map((it) => (
                  <div key={`${it.product.id}-${it.size}`} className="p-3.5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={it.product.images[0]}
                        alt={it.product.name}
                        className="w-12 h-14 object-cover rounded-lg border border-zinc-800"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h5 className="font-cinzel text-xs font-bold text-white">{it.product.name}</h5>
                        <p className="text-[11px] text-zinc-400">
                          SIZE: <strong className="text-white">{it.size}</strong> × QTY: {it.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="font-cinzel text-sm font-bold text-white">
                      ${it.product.price * it.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping & Billing Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#000000] border border-zinc-900 space-y-1.5 text-xs">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#E50914]">
                  SHIPPING DESTINATION
                </span>
                <p className="text-white font-bold">{customer.fullName}</p>
                <p className="text-zinc-400">{customer.address}, {customer.city}, {customer.state} {customer.postalCode}</p>
                <p className="text-zinc-500">{customer.email} • {customer.phone}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#000000] border border-zinc-900 space-y-2 text-xs">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#E50914]">
                  PAYMENT SUMMARY
                </span>
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span className="font-mono-tech text-white">${rawSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Express Dispatch</span>
                  <span className="font-mono-tech text-white">{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-zinc-800 text-base font-black text-white">
                  <span className="font-cinzel">TOTAL</span>
                  <span className="font-cinzel text-[#E50914] text-lg">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Actions: Back or Confirm & Pay */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep('info')}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 uppercase font-bold tracking-wider transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                EDIT SHIPPING / PAYMENT INFO
              </button>

              <button
                id="btn-confirm-and-pay"
                type="button"
                disabled={isProcessing}
                onClick={handleConfirmAndPay}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#E50914] hover:bg-white text-white hover:text-black font-black text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(229,9,20,0.8)] cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    AUTHORIZING SECURE VAULT...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    CONFIRM & PAY ${total.toFixed(2)}
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            STEP 3: ORDER CONFIRMED — WELCOME TO THE DOMAIN
           ======================================================== */}
        {step === 'confirmed' && completedOrder && (
          <div className="space-y-6 pt-6 text-center animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-[#E50914]/20 border-2 border-[#E50914] text-[#E50914] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(229,9,20,0.6)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#E50914]">
                ORDER CONFIRMED
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                WELCOME TO THE DOMAIN.
              </h2>
              <p className="text-sm text-zinc-400 max-w-md mx-auto">
                Your order is secured in our vault and currently undergoing quality inspection before dispatch.
              </p>
            </div>

            {/* Order Receipt Box */}
            <div className="p-6 rounded-3xl bg-[#000000] border border-red-950/70 text-left max-w-xl mx-auto space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-900">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-mono-tech">ORDER NUMBER</span>
                  <p className="font-mono-tech text-base font-bold text-white tracking-widest text-[#E50914]">
                    {completedOrder.orderId}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-zinc-500 uppercase font-mono-tech">ORDER DATE</span>
                  <p className="text-xs text-zinc-300 font-semibold">{completedOrder.createdAt}</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-zinc-400">
                <div className="flex justify-between">
                  <span>DISPATCH DESTINATION:</span>
                  <span className="text-white font-bold">{completedOrder.customer.address}, {completedOrder.customer.city}</span>
                </div>
                <div className="flex justify-between">
                  <span>ESTIMATED DELIVERY:</span>
                  <span className="text-emerald-400 font-bold">2–4 BUSINESS DAYS</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-zinc-900 text-sm font-bold text-white">
                  <span>AMOUNT PAID:</span>
                  <span className="text-[#E50914] font-cinzel text-base">${completedOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-10 py-4 rounded-full bg-[#E50914] hover:bg-white text-white hover:text-black font-black text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_0_30px_rgba(229,9,20,0.6)] cursor-pointer"
            >
              CONTINUE EXPLORING THE DOMAIN
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
