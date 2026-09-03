import { X, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div
      id="size-guide-modal-overlay"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
    >
      <div
        id="size-guide-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-[#0A0A0A] border border-red-900/70 rounded-[28px] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(229,9,20,0.25)] relative max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between pb-4 border-b border-red-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-950/40 border border-red-900/60 text-[#E50914] flex items-center justify-center">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#E50914]">
                DEVIL'S DOMAIN
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-black text-white">
                OFFICIAL SIZE GUIDE
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close size guide"
            className="w-9 h-9 rounded-full bg-black/60 border border-zinc-800 hover:border-[#E50914] text-zinc-400 hover:text-white flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-6 pt-6">
          <p className="text-sm text-zinc-400 leading-relaxed">
            All Devil's Domain garments feature an engineered, luxury streetwear silhouette with intentional dropped shoulders and structured drape. If you prefer a tailored fit, choose one size down.
          </p>

          {/* Size Chart Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans-main border-collapse">
              <thead>
                <tr className="border-b border-red-950/70 bg-[#121218] text-[#E50914] font-black uppercase tracking-wider">
                  <th className="p-3">SIZE</th>
                  <th className="p-3">CHEST (IN/CM)</th>
                  <th className="p-3">LENGTH (IN/CM)</th>
                  <th className="p-3">SHOULDER (IN/CM)</th>
                  <th className="p-3">SLEEVE (IN/CM)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 text-zinc-300">
                <tr className="hover:bg-white/5">
                  <td className="p-3 font-bold text-white">XS</td>
                  <td className="p-3">40" / 102cm</td>
                  <td className="p-3">27" / 69cm</td>
                  <td className="p-3">21" / 53cm</td>
                  <td className="p-3">23" / 58cm</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-3 font-bold text-white">S</td>
                  <td className="p-3">43" / 109cm</td>
                  <td className="p-3">28" / 71cm</td>
                  <td className="p-3">22" / 56cm</td>
                  <td className="p-3">24" / 61cm</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-3 font-bold text-white">M</td>
                  <td className="p-3">46" / 117cm</td>
                  <td className="p-3">29" / 74cm</td>
                  <td className="p-3">23" / 58cm</td>
                  <td className="p-3">25" / 63cm</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-3 font-bold text-white">L</td>
                  <td className="p-3">49" / 124cm</td>
                  <td className="p-3">30" / 76cm</td>
                  <td className="p-3">24" / 61cm</td>
                  <td className="p-3">26" / 66cm</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-3 font-bold text-white">XL</td>
                  <td className="p-3">52" / 132cm</td>
                  <td className="p-3">31" / 79cm</td>
                  <td className="p-3">25" / 64cm</td>
                  <td className="p-3">27" / 68cm</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-3 font-bold text-white">XXL</td>
                  <td className="p-3">55" / 140cm</td>
                  <td className="p-3">32" / 81cm</td>
                  <td className="p-3">26" / 66cm</td>
                  <td className="p-3">27.5" / 70cm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-2xl bg-[#000000] border border-red-950/60 flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#E50914] mt-1.5 shrink-0" />
            <p className="text-xs text-zinc-400 leading-relaxed">
              <strong className="text-white">Model Specs:</strong> Male model is 6'1" (185cm) wearing Size Large. Female model is 5'9" (175cm) wearing Size Medium for an intentional oversized boyfriend silhouette.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
