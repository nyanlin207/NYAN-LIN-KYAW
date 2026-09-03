interface RebelsCounterProps {
  onClick?: () => void;
}

export default function RebelsCounter({ onClick }: RebelsCounterProps) {
  return (
    <div
      id="rebels-counter-badge"
      onClick={onClick}
      className="flex items-center gap-3.5 cursor-pointer select-none group"
    >
      {/* Overlapping Avatars */}
      <div className="flex items-center -space-x-3">
        {/* Avatar 1: Skull Punk */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#E50914] bg-[#0A0A0E] flex items-center justify-center overflow-hidden z-40 transition-transform group-hover:scale-105 shadow-[0_0_12px_rgba(229,9,20,0.4)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" className="w-5 h-5 opacity-90">
            <path d="M12 2a8 8 0 0 0-8 8c0 3 1.5 5.5 3 6.5V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3.5c1.5-1 3-3.5 3-6.5a8 8 0 0 0-8-8z" />
            <circle cx="9" cy="10" r="1.5" fill="#E50914" />
            <circle cx="15" cy="10" r="1.5" fill="#E50914" />
            <path d="M9 17h6" />
            <path d="M10 20v2" />
            <path d="M14 20v2" />
          </svg>
        </div>

        {/* Avatar 2: Hooded Rebel Silhouette */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#E50914] bg-[#121216] flex items-center justify-center overflow-hidden z-30 transition-transform group-hover:scale-105 shadow-[0_0_12px_rgba(229,9,20,0.4)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" className="w-5 h-5 opacity-90">
            <path d="M4 22v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" />
            <path d="M12 14a5 5 0 0 1-5-5c0-4 3-7 5-7s5 3 5 7a5 5 0 0 1-5 5z" fill="#0A0A0E" />
            <circle cx="10" cy="9" r="1" fill="#E50914" />
            <circle cx="14" cy="9" r="1" fill="#E50914" />
          </svg>
        </div>

        {/* Avatar 3: Gothic Cross / Monogram */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#E50914] bg-[#0e0e14] flex items-center justify-center overflow-hidden z-20 transition-transform group-hover:scale-105 shadow-[0_0_12px_rgba(229,9,20,0.4)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="#E50914" strokeWidth="1.8" className="w-5 h-5">
            <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" />
          </svg>
        </div>

        {/* Avatar 4: Crossbones & Crown Emblem */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#E50914] bg-[#1a1a22] flex items-center justify-center overflow-hidden z-10 transition-transform group-hover:scale-105 shadow-[0_0_12px_rgba(229,9,20,0.4)]">
          <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" className="w-5 h-5 opacity-90">
            <polygon points="5,8 8,4 12,7 16,4 19,8 18,12 6,12" stroke="#E50914" fill="#0A0A0E" />
            <circle cx="12" cy="16" r="3" />
            <path d="M8 20l8-8M16 20L8 12" />
          </svg>
        </div>
      </div>

      {/* Label Text */}
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-white text-sm sm:text-base font-sans-main tracking-tight group-hover:text-[#E50914] transition-colors">
          10K+ Rebels
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold">
          Worldwide Guild
        </span>
      </div>
    </div>
  );
}
