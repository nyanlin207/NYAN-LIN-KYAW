import { useState, useRef, MouseEvent } from 'react';
import { ArrowUpRight, Volume2, VolumeX, Play, Pause, Sparkles, Shield, Flame, Compass } from 'lucide-react';
import { NavTab } from '../types';

interface HeroShowcaseProps {
  onNavigate: (tab: NavTab) => void;
}

const BG_VIDEO_URL =
  'https://res.cloudinary.com/m6akgouf/video/upload/v1788165354/kling_20260831_VIDEO_Create_a_c_4006_0.mp4';

export default function HeroShowcase({ onNavigate }: HeroShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleSound = (e: MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = (e: MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="hero-showcase" className="relative w-full pt-4 pb-12 sm:pb-16 lg:pb-20">
      {/* Subtle Red Ambient Glow behind the hero frame */}
      <div className="absolute top-10 right-10 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#E50914]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-5 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#8B0000]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Hero Grid: Left Content + Right Video Fashion Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
        {/* ========================================================
            LEFT COLUMN: Editorial Typography & Actions
           ======================================================== */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
          {/* Small Red Editorial Label */}
          <div id="hero-label" className="flex items-center gap-3">
            <div className="h-[2px] w-8 sm:w-12 bg-[#E50914] shadow-[0_0_10px_rgba(229,9,20,0.8)]" />
            <span className="text-[#E50914] font-black text-[11px] sm:text-xs tracking-[0.4em] uppercase font-sans-main">
              DEVIL'S DOMAIN
            </span>
          </div>

          {/* Giant Main Headline */}
          <h1
            id="hero-headline"
            className="font-cinzel font-black uppercase tracking-tight text-white text-5xl sm:text-7xl lg:text-[5.4rem] xl:text-[6.2rem] leading-[0.92] select-none"
          >
            <span>DRESS LIKE A</span>
            <br />
            <span className="text-[#E50914] inline-block mt-1 drop-shadow-[0_4px_35px_rgba(229,9,20,0.7)]">
              DEVIL.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            id="hero-tagline"
            className="text-[#A0A0A0] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl"
          >
            Premium streetwear for the rebels, the dreamers, and the different. Not made to fit in. Made to rule your own domain.
          </p>

          {/* Hero Buttons Row: Compact two buttons in one line on mobile */}
          <div id="hero-buttons" className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-4 pt-2 w-full sm:w-auto">
            {/* Primary Button: EXPLORE THE BRAND */}
            <button
              id="btn-hero-explore"
              type="button"
              onClick={() => onNavigate('The Domain')}
              className="bg-[#000000] border border-red-900/70 hover:border-[#E50914] rounded-full px-3 sm:pl-7 sm:pr-2 py-1.5 sm:py-2 flex items-center justify-between sm:justify-start gap-1.5 sm:gap-4 group cursor-pointer transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.95)] hover:shadow-[0_0_30px_rgba(229,9,20,0.5)] active:scale-98 select-none w-full sm:w-auto"
            >
              <span className="text-white text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.08em] sm:tracking-[0.2em] uppercase font-sans-main group-hover:text-red-100 transition-colors truncate">
                <span className="xs:hidden">EXPLORE</span>
                <span className="hidden xs:inline sm:hidden">EXPLORE BRAND</span>
                <span className="hidden sm:inline">EXPLORE THE BRAND</span>
              </span>
              <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[#E50914] text-white flex items-center justify-center group-hover:scale-105 group-hover:bg-white group-hover:text-[#000000] transition-all shadow-[0_0_12px_rgba(229,9,20,0.7)] shrink-0">
                <ArrowUpRight className="w-3 h-3 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
              </div>
            </button>

            {/* Secondary Button: SHOP THE COLLECTION */}
            <button
              id="btn-hero-shop"
              type="button"
              onClick={() => onNavigate('Shop')}
              className="bg-[#0A0A0A] border border-white/20 hover:border-red-600/70 hover:shadow-[0_0_20px_rgba(229,9,20,0.3)] rounded-full px-3 sm:pl-7 sm:pr-2 py-1.5 sm:py-2 flex items-center justify-between sm:justify-start gap-1.5 sm:gap-4 group cursor-pointer transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.9)] active:scale-98 select-none w-full sm:w-auto"
            >
              <span className="text-[#A0A0A0] group-hover:text-white text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.08em] sm:tracking-[0.2em] uppercase font-sans-main transition-colors truncate">
                <span className="xs:hidden">SHOP NOW</span>
                <span className="hidden xs:inline sm:hidden">SHOP CATALOG</span>
                <span className="hidden sm:inline">SHOP THE COLLECTION</span>
              </span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-zinc-700 bg-[#121218] text-white flex items-center justify-center group-hover:border-[#E50914] group-hover:bg-[#E50914] group-hover:scale-105 transition-all shrink-0">
                <ArrowUpRight className="w-3 h-3 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: Compact Promotional Fashion Video Card (Mobile Optimized)
           ======================================================== */}
        <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
          <div
            id="hero-promotional-card"
            className="relative w-full max-w-[310px] xs:max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] rounded-[22px] sm:rounded-[36px] border border-red-900/60 hover:border-red-600/80 bg-[#0A0A0A] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.95),0_0_30px_rgba(229,9,20,0.25)] transition-all duration-500 group"
          >
            {/* Top Fashion Badge */}
            <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-4 sm:left-4 sm:right-4 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-[#000000]/80 backdrop-blur-md border border-red-900/50 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#E50914] animate-pulse" />
                <span className="text-[8px] sm:text-[10px] font-extrabold tracking-[0.15em] sm:tracking-[0.2em] text-white uppercase font-sans-main">
                  NEW DROP // OUT NOW
                </span>
              </div>

              {/* Video Controls (Play/Pause & Sound) */}
              <div className="flex items-center gap-1 sm:gap-1.5 pointer-events-auto">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#000000]/80 border border-white/20 hover:border-[#E50914] text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  {isPlaying ? <Pause className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" /> : <Play className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#E50914]" />}
                </button>
                <button
                  type="button"
                  onClick={toggleSound}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#000000]/80 border border-white/20 hover:border-[#E50914] text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  {isMuted ? (
                    <VolumeX className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-zinc-400" />
                  ) : (
                    <Volume2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#E50914] animate-pulse" />
                  )}
                </button>
              </div>
            </div>

            {/* Video Container (Compact Height on Mobile) */}
            <div className="relative w-full aspect-[4/3] xs:aspect-[4/3.8] sm:aspect-[3.8/5] overflow-hidden bg-[#050508]">
              <video
                ref={videoRef}
                src={BG_VIDEO_URL}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 filter brightness-95 contrast-110"
              />

              {/* Ambient Red Lighting behind overlays */}
              <div className="absolute -bottom-10 -right-10 w-36 sm:w-48 h-36 sm:h-48 bg-[#E50914]/30 rounded-full blur-3xl pointer-events-none" />

              {/* Gradient Dark Overlay on bottom for typography contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/30 to-transparent pointer-events-none" />

              {/* Card Content Overlay: CLAIM YOUR DOMAIN */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-7 z-20 space-y-1.5 sm:space-y-3">
                <div className="space-y-0.5 sm:space-y-1">
                  <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#E50914]">
                    CAPSULE EDITION 05
                  </span>
                  <h3 className="font-cinzel text-base xs:text-lg sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight leading-tight">
                    CLAIM YOUR{' '}
                    <span className="text-white drop-shadow-[0_2px_15px_rgba(229,9,20,0.7)]">
                      DOMAIN.
                    </span>
                  </h3>
                  <p className="text-[9px] sm:text-xs text-[#A0A0A0] tracking-wider uppercase font-semibold hidden xs:block">
                    LIMITED PIECES. UNLIMITED ATTITUDE.
                  </p>
                </div>

                {/* Card CTA Action */}
                <button
                  type="button"
                  onClick={() => onNavigate('Shop')}
                  className="w-full bg-[#E50914] hover:bg-white text-white hover:text-black py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-black tracking-[0.15em] sm:tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 shadow-[0_0_20px_rgba(229,9,20,0.6)] cursor-pointer active:scale-98"
                >
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          BELOW HERO: Brand Information Cards (3 In One Line Smaller Sizes)
         ======================================================== */}
      <div
        id="hero-brand-cards"
        className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-5 mt-6 sm:mt-12 lg:mt-20 pt-4 sm:pt-6 border-t border-red-950/40"
      >
        {/* Card 1: THE DOMAIN */}
        <div
          onClick={() => onNavigate('The Domain')}
          className="p-2.5 xs:p-3 sm:p-5 md:p-6 rounded-2xl sm:rounded-[24px] bg-[#0A0A0A] border border-red-950/50 hover:border-red-600/70 transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,9,20,0.2)] group cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-1.5 sm:mb-4">
              <span className="text-[7px] xs:text-[8px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-[0.3em] text-[#E50914] truncate">
                01 // PURPOSE
              </span>
              <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-red-950/40 border border-red-900/50 flex items-center justify-center text-[#E50914] group-hover:scale-110 transition-transform shrink-0">
                <Compass className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
              </div>
            </div>
            <h3 className="font-cinzel text-[11px] xs:text-xs sm:text-xl md:text-2xl font-black text-white group-hover:text-[#E50914] transition-colors leading-tight truncate sm:whitespace-normal">
              THE DOMAIN
            </h3>
          </div>
          <p className="text-[9px] xs:text-[10px] sm:text-sm text-[#A0A0A0] mt-1 sm:mt-2 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
            A world built around identity and attitude.
          </p>
        </div>

        {/* Card 2: THE COLLECTION */}
        <div
          onClick={() => onNavigate('Shop')}
          className="p-2.5 xs:p-3 sm:p-5 md:p-6 rounded-2xl sm:rounded-[24px] bg-[#0A0A0A] border border-red-950/50 hover:border-red-600/70 transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,9,20,0.2)] group cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-1.5 sm:mb-4">
              <span className="text-[7px] xs:text-[8px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-[0.3em] text-[#E50914] truncate">
                02 // CRAFT
              </span>
              <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-red-950/40 border border-red-900/50 flex items-center justify-center text-[#E50914] group-hover:scale-110 transition-transform shrink-0">
                <Flame className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
              </div>
            </div>
            <h3 className="font-cinzel text-[11px] xs:text-xs sm:text-xl md:text-2xl font-black text-white group-hover:text-[#E50914] transition-colors leading-tight truncate sm:whitespace-normal">
              COLLECTION
            </h3>
          </div>
          <p className="text-[9px] xs:text-[10px] sm:text-sm text-[#A0A0A0] mt-1 sm:mt-2 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
            Heavyweight textiles & precision hardware.
          </p>
        </div>

        {/* Card 3: THE ATTITUDE */}
        <div
          onClick={() => onNavigate('Lookbook')}
          className="p-2.5 xs:p-3 sm:p-5 md:p-6 rounded-2xl sm:rounded-[24px] bg-[#0A0A0A] border border-red-950/50 hover:border-red-600/70 transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,9,20,0.2)] group cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-1.5 sm:mb-4">
              <span className="text-[7px] xs:text-[8px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-[0.3em] text-[#E50914] truncate">
                03 // SYNDICATE
              </span>
              <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-full bg-red-950/40 border border-red-900/50 flex items-center justify-center text-[#E50914] group-hover:scale-110 transition-transform shrink-0">
                <Shield className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
              </div>
            </div>
            <h3 className="font-cinzel text-[11px] xs:text-xs sm:text-xl md:text-2xl font-black text-white group-hover:text-[#E50914] transition-colors leading-tight truncate sm:whitespace-normal">
              ATTITUDE
            </h3>
          </div>
          <p className="text-[9px] xs:text-[10px] sm:text-sm text-[#A0A0A0] mt-1 sm:mt-2 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
            Wear what defines you without apology.
          </p>
        </div>
      </div>
    </section>
  );
}
