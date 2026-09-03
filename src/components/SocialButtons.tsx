import { Instagram, Youtube } from 'lucide-react';

interface SocialButtonsProps {
  onSocialClick?: (platform: string) => void;
}

export default function SocialButtons({ onSocialClick }: SocialButtonsProps) {
  const handleClick = (platform: string, url: string) => {
    if (onSocialClick) {
      onSocialClick(platform);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div id="social-links-container" className="flex items-center gap-2 sm:gap-2.5">
      {/* Instagram Button */}
      <button
        id="btn-social-instagram"
        type="button"
        aria-label="Instagram"
        onClick={() => handleClick('Instagram', 'https://instagram.com')}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#101015] border border-red-900/40 hover:border-[#E50914] text-white hover:text-white hover:bg-[#E50914] active:scale-95 flex items-center justify-center transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.8)] hover:shadow-[0_0_18px_rgba(229,9,20,0.6)] cursor-pointer group"
      >
        <Instagram className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2] group-hover:scale-110 transition-transform" />
      </button>

      {/* TikTok Button */}
      <button
        id="btn-social-tiktok"
        type="button"
        aria-label="TikTok"
        onClick={() => handleClick('TikTok', 'https://tiktok.com')}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#101015] border border-red-900/40 hover:border-[#E50914] text-white hover:text-white hover:bg-[#E50914] active:scale-95 flex items-center justify-center transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.8)] hover:shadow-[0_0_18px_rgba(229,9,20,0.6)] cursor-pointer group"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:scale-110 transition-transform"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.83 4.46V11.2a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-2.4-.63z" />
        </svg>
      </button>

      {/* YouTube Button */}
      <button
        id="btn-social-youtube"
        type="button"
        aria-label="YouTube"
        onClick={() => handleClick('YouTube', 'https://youtube.com')}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#101015] border border-red-900/40 hover:border-[#E50914] text-white hover:text-white hover:bg-[#E50914] active:scale-95 flex items-center justify-center transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.8)] hover:shadow-[0_0_18px_rgba(229,9,20,0.6)] cursor-pointer group"
      >
        <Youtube className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current stroke-none group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}
