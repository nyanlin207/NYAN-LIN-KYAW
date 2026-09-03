import { useState } from 'react';
import { Globe, Sparkles, Shield, Flame, Compass, Edit3, Check, RefreshCcw } from 'lucide-react';
import { SupportedLanguage, LanguageContent } from '../types';
import { DOMAIN_TRANSLATIONS } from '../data/domainTranslations';
import { MODEL_MOCK_PHOTOS } from '../data/mockPhotos';

export default function DomainPage() {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>('en');
  const [translations, setTranslations] = useState<Record<SupportedLanguage, LanguageContent>>(DOMAIN_TRANSLATIONS);
  const [isEditing, setIsEditing] = useState(false);

  const langData = translations[currentLang];
  const isMyanmar = currentLang === 'my';

  const handleUpdateHeadline = (val: string) => {
    setTranslations((prev) => ({
      ...prev,
      [currentLang]: {
        ...prev[currentLang],
        heroHeadline: val,
      },
    }));
  };

  const handleUpdateSubheadline = (val: string) => {
    setTranslations((prev) => ({
      ...prev,
      [currentLang]: {
        ...prev[currentLang],
        heroSubheadline: val,
      },
    }));
  };

  return (
    <div id="page-domain" className="space-y-16 sm:space-y-24 lg:space-y-32">
      {/* ========================================================
          1. DOMAIN HERO & 4-LANGUAGE SELECTOR BAR
         ======================================================== */}
      <section id="domain-hero" className="relative pt-4 sm:pt-8">
        <div className="rounded-[32px] sm:rounded-[44px] bg-[#0A0A0A] border border-red-950/70 p-6 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)]">
          {/* Subtle Crimson Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E50914]/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Bar with 4-Language Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-red-950/60">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
              <Globe className="w-4 h-4 text-[#E50914]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#E50914] font-black">
                BRAND BIOGRAPHY ARCHIVE
              </span>
            </div>

            {/* 4-Language Selector */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#000000] border border-red-950/80 rounded-full p-1.5 shadow-lg">
              {(['en', 'zh', 'ja', 'my'] as SupportedLanguage[]).map((l) => {
                const isActive = currentLang === l;
                const labels: Record<SupportedLanguage, string> = {
                  en: 'EN',
                  zh: '中文',
                  ja: '日本語',
                  my: 'မြန်မာ',
                };
                return (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setCurrentLang(l)}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs transition-all cursor-pointer select-none ${
                      l === 'my' ? 'font-myanmar font-medium leading-normal' : 'font-bold'
                    } ${
                      isActive
                        ? 'bg-[#E50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.6)] font-black'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {labels[l]}
                  </button>
                );
              })}

              {/* Editable CMS Toggle button */}
              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                title="Toggle Live Content Editing"
                className={`ml-1 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                  isEditing
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                    : 'bg-black border-zinc-800 text-zinc-500 hover:text-white'
                }`}
              >
                {isEditing ? <Check className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Hero Content */}
          <div className="pt-8 sm:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#E50914]" />
                <span className="text-[#E50914] font-black text-xs tracking-[0.4em] uppercase font-sans-main">
                  THE DOMAIN
                </span>
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <span className="text-[10px] text-emerald-400 font-mono-tech">[EDITING {langData.label} HEADLINE]</span>
                  <textarea
                    value={langData.heroHeadline}
                    onChange={(e) => handleUpdateHeadline(e.target.value)}
                    className={`w-full bg-black/80 border border-emerald-500/50 rounded-2xl p-4 text-xl sm:text-2xl text-white focus:outline-none ${
                      isMyanmar ? 'font-myanmar font-semibold leading-[1.6]' : 'font-cinzel'
                    }`}
                    rows={3}
                  />
                  <textarea
                    value={langData.heroSubheadline}
                    onChange={(e) => handleUpdateSubheadline(e.target.value)}
                    className={`w-full bg-black/80 border border-emerald-500/50 rounded-2xl p-4 text-sm text-zinc-300 focus:outline-none ${
                      isMyanmar ? 'font-myanmar font-normal leading-[1.85]' : ''
                    }`}
                    rows={3}
                  />
                </div>
              ) : (
                <>
                  <h1
                    className={
                      isMyanmar
                        ? 'font-myanmar text-2xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.6] sm:leading-[1.65] tracking-normal drop-shadow-sm'
                        : 'font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.05] tracking-tight'
                    }
                  >
                    {langData.heroHeadline}
                  </h1>
                  <p
                    className={
                      isMyanmar
                        ? 'font-myanmar text-zinc-300 text-sm sm:text-base font-normal leading-[1.85] sm:leading-[1.95] tracking-normal pt-2'
                        : 'text-[#A0A0A0] text-base sm:text-lg leading-relaxed'
                    }
                  >
                    {langData.heroSubheadline}
                  </p>
                </>
              )}
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-red-900/60 bg-black aspect-[4/5] shadow-2xl">
                <img
                  src={MODEL_MOCK_PHOTOS.domainY2kRedRoom}
                  alt="Devil's Domain Manifesto"
                  className="w-full h-full object-cover filter brightness-90 contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914]">
                    LANGUAGE ACTIVE: {langData.label}
                  </span>
                  <h4 className="font-cinzel text-base font-bold text-white">
                    NOT MADE TO FIT IN.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. BRAND MANIFESTO
         ======================================================== */}
      <section id="domain-manifesto" className="max-w-4xl mx-auto space-y-8 px-4">
        <div className="space-y-3 text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#E50914]">
            MANIFESTO
          </span>
          <h2
            className={
              isMyanmar
                ? 'font-myanmar text-2xl sm:text-4xl font-semibold text-white leading-[1.6] tracking-normal'
                : 'font-cinzel text-3xl sm:text-5xl font-black text-white uppercase'
            }
          >
            {langData.manifestoTitle}
          </h2>
        </div>

        <div
          className={`p-8 sm:p-12 rounded-3xl bg-[#0A0A0A] border border-red-950/70 shadow-xl ${
            isMyanmar ? 'space-y-7 sm:space-y-8 text-zinc-300' : 'space-y-6 text-zinc-300 leading-relaxed'
          }`}
        >
          <p
            className={
              isMyanmar
                ? 'font-myanmar text-base sm:text-lg font-semibold text-white border-l-2 border-[#E50914] pl-4 sm:pl-5 leading-[1.8] sm:leading-[1.85] tracking-normal'
                : 'text-lg sm:text-xl font-medium text-white border-l-2 border-[#E50914] pl-4 italic'
            }
          >
            "{langData.manifestoLead}"
          </p>
          {langData.manifestoBody.map((paragraph, pIdx) => (
            <p
              key={pIdx}
              className={
                isMyanmar
                  ? 'font-myanmar text-sm sm:text-base font-normal text-zinc-300 leading-[1.85] sm:leading-[1.95] tracking-normal'
                  : 'text-sm sm:text-base text-zinc-400'
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ========================================================
          3. BRAND HISTORY / IMMERSIVE TIMELINE
         ======================================================== */}
      <section id="domain-timeline" className="space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#E50914]">
            ARCHIVAL CHRONOLOGY
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white uppercase">
            OUR STORY
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
            From secret subterranean gatherings to global streetwear drops. An evolving history of independence and craft.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto space-y-12 sm:space-y-16">
          {/* Vertical Red Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#E50914] via-red-900 to-zinc-900 -translate-x-1/2 hidden sm:block shadow-[0_0_12px_rgba(229,9,20,0.5)]" />

          {langData.timeline.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.stage}
                className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Stage Badge in Center (Desktop) */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#000000] border-2 border-[#E50914] text-[#E50914] text-xs font-black items-center justify-center shadow-[0_0_15px_rgba(229,9,20,0.8)] z-20">
                  {item.stage}
                </div>

                {/* Content Box */}
                <div className="w-full sm:w-1/2 p-6 sm:p-8 rounded-3xl bg-[#0A0A0A] border border-red-950/60 hover:border-red-600/70 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(229,9,20,0.2)] space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black tracking-widest text-[#E50914] uppercase">
                      STAGE {item.stage}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span
                      className={
                        isMyanmar
                          ? 'font-myanmar text-xs text-zinc-400 font-medium tracking-normal'
                          : 'text-xs text-zinc-400 font-semibold'
                      }
                    >
                      {item.subtitle}
                    </span>
                  </div>

                  <h3
                    className={
                      isMyanmar
                        ? 'font-myanmar text-lg sm:text-xl font-semibold text-white leading-[1.6] tracking-normal'
                        : 'font-cinzel text-xl sm:text-2xl font-black text-white'
                    }
                  >
                    {item.title}
                  </h3>

                  <p
                    className={
                      isMyanmar
                        ? 'font-myanmar text-xs sm:text-sm font-normal text-zinc-300 leading-[1.85] sm:leading-[1.9] tracking-normal pt-1'
                        : 'text-xs sm:text-sm text-zinc-400 leading-relaxed'
                    }
                  >
                    {item.content}
                  </p>
                </div>

                {/* Supporting Image Box */}
                <div className="w-full sm:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden border border-zinc-800 aspect-[16/10] bg-zinc-950 shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover filter brightness-90 contrast-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono-tech text-zinc-400">
                      // {item.title}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          4. BRAND PHILOSOPHY
         ======================================================== */}
      <section id="domain-philosophy" className="space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#E50914]">
            CORE CREED
          </span>
          <h2
            className={
              isMyanmar
                ? 'font-myanmar text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-[1.6] tracking-normal max-w-3xl mx-auto'
                : 'font-cinzel text-3xl sm:text-5xl font-black text-white uppercase max-w-2xl mx-auto'
            }
          >
            {langData.philosophyTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {langData.philosophyPoints.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#0A0A0A] border border-red-950/60 hover:border-red-600/70 transition-all duration-300 space-y-3 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914]">
                  PILLAR 0{idx + 1}
                </span>
                <div className="w-8 h-8 rounded-full bg-red-950/40 border border-red-900/60 text-[#E50914] flex items-center justify-center text-xs font-bold">
                  {idx === 0 && <Shield className="w-4 h-4" />}
                  {idx === 1 && <Flame className="w-4 h-4" />}
                  {idx === 2 && <Compass className="w-4 h-4" />}
                  {idx === 3 && <Sparkles className="w-4 h-4" />}
                </div>
              </div>

              <h3
                className={
                  isMyanmar
                    ? 'font-myanmar text-base sm:text-lg font-semibold text-white leading-[1.6] tracking-normal'
                    : 'font-cinzel text-lg sm:text-xl font-bold text-white'
                }
              >
                {pt.title}
              </h3>

              <p
                className={
                  isMyanmar
                    ? 'font-myanmar text-xs sm:text-sm font-normal text-zinc-300 leading-[1.85] sm:leading-[1.9] tracking-normal pt-1'
                    : 'text-xs sm:text-sm text-zinc-400 leading-relaxed'
                }
              >
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
