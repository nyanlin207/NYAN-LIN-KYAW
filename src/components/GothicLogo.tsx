export const BRAND_LOGO_URL = 'https://res.cloudinary.com/m6akgouf/image/upload/v1788182820/Red.png';

interface GothicLogoProps {
  showText?: boolean;
  size?: number;
  className?: string;
  onClick?: () => void;
}

export default function GothicLogo({
  showText = true,
  size = 40,
  className = '',
  onClick,
}: GothicLogoProps) {
  return (
    <div
      id="brand-logo"
      onClick={onClick}
      className={`flex items-center gap-3.5 select-none cursor-pointer group ${className}`}
    >
      {/* Brand Red Logo Mark */}
      <div
        className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <img
          src={BRAND_LOGO_URL}
          alt="Devil's Domain"
          className="w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(229,9,20,0.7)]"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Name Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-black text-white text-[16px] sm:text-[17px] tracking-[0.25em] uppercase font-sans-main group-hover:text-red-100 transition-colors">
            DEVIL'S
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="font-black text-white text-[16px] sm:text-[17px] tracking-[0.32em] uppercase font-sans-main group-hover:text-red-100 transition-colors">
              DOMAIN
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-[#E50914] font-bold">
              EST.24
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
