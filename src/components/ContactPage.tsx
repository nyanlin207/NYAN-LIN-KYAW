import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Instagram, Youtube, Sparkles, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'VIP Capsule Inquiries',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="page-contact" className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 pt-4">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#E50914]" />
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#E50914]">
            DIRECT INQUIRIES & SANCTUARY
          </span>
        </div>

        <h1 className="font-cinzel text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
          ENTER THE <span className="text-[#E50914]">DOMAIN.</span>
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto">
          LET'S CONNECT. For bespoke capsule requests, private atelier fittings, or syndication collaborations.
        </p>
      </div>

      {/* Main Grid: Form + Direct Contact Information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Form Panel */}
        <div className="lg:col-span-7 bg-[#0A0A0A] border border-red-950/70 rounded-[32px] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#E50914]/20 border border-[#E50914] text-[#E50914] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(229,9,20,0.6)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-cinzel text-2xl font-black text-white uppercase">
                TRANSMISSION RECEIVED
              </h3>
              <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                Your message has entered our encrypted network. An atelier liaison will contact you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', subject: 'VIP Capsule Inquiries', message: '' });
                }}
                className="px-6 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-white text-xs font-bold uppercase hover:border-[#E50914] transition-all"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alexander Black"
                    className="w-full bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rebel@domain.style"
                    className="w-full bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                    SUBJECT *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="VIP Capsule Inquiries">VIP Capsule Inquiries</option>
                    <option value="Custom Bespoke Commission">Custom Bespoke Commission</option>
                    <option value="Order & Dispatch Inquiries">Order & Dispatch Inquiries</option>
                    <option value="Press & Editorial Syndicate">Press & Editorial Syndicate</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  MESSAGE *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your inquiry or custom request..."
                  className="w-full bg-[#000000] border border-zinc-800 focus:border-[#E50914] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#E50914] hover:bg-white text-white hover:text-black font-black text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(229,9,20,0.6)] cursor-pointer active:scale-98"
              >
                SEND MESSAGE →
              </button>
            </form>
          )}
        </div>

        {/* Right Information Details */}
        <div className="lg:col-span-5 space-y-6">
          {/* Contact Direct Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0A] border border-red-950/70 space-y-6 shadow-xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E50914]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914]">
                DIRECT CHANNELS
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-red-950/40 border border-red-900/60 text-[#E50914] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-zinc-500 uppercase font-mono-tech block">DIRECT INQUIRIES</span>
                  <a href="mailto:contact@devilsdomain.com" className="text-white font-bold hover:text-[#E50914] transition-colors text-sm">
                    contact@devilsdomain.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-red-950/40 border border-red-900/60 text-[#E50914] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-zinc-500 uppercase font-mono-tech block">CONCIERGE HOTLINE</span>
                  <p className="text-white font-bold text-sm">+1 (800) 666-VOID</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-red-950/40 border border-red-900/60 text-[#E50914] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-zinc-500 uppercase font-mono-tech block">STUDIO HUBS</span>
                  <p className="text-white font-bold text-xs leading-relaxed">
                    Tokyo (Shinjuku) • London (Mayfair) • Berlin (Kreuzberg)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-red-950/60 flex items-center justify-between">
              <span className="text-[10px] text-zinc-500 font-mono-tech uppercase">SOCIAL SYNDICATE</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-black border border-zinc-800 text-zinc-400 hover:text-[#E50914] hover:border-[#E50914] flex items-center justify-center transition-all"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-black border border-zinc-800 text-zinc-400 hover:text-[#E50914] hover:border-[#E50914] flex items-center justify-center transition-all"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
