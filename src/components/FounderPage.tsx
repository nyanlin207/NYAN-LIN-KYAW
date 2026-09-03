import { useState } from 'react';
import { Quote, Edit3, Check, Calendar, Users, Briefcase, Compass, Sparkles, Flame, ShieldAlert, Radio, Camera, TrendingUp, Eye, Disc } from 'lucide-react';
import { MODEL_MOCK_PHOTOS } from '../data/mockPhotos';
import regeneratedFounderImg from '../assets/images/regenerated_image_1788441918593.png';

export default function FounderPage() {
  const [isEditing, setIsEditing] = useState(false);

  const [founderData, setFounderData] = useState({
    name: 'Kozon',
    photoUrl: 'https://res.cloudinary.com/m6akgouf/image/upload/v1788421583/Domain2.jpg',
    quote: 'A DOMAIN IS NOT A PLACE. IT IS AN IDENTITY.',
    bioP1:
      "is a creative entrepreneur and visionary behind DEVIL'S DOMAIN. His journey is built on ambition, creativity, culture, and the desire to create something beyond the ordinary.",
    bioP2:
      'Working across events, fashion, talent management, and business, he continues to build opportunities and experiences that connect people, creativity, and culture.',
    bioP3:
      "DEVIL'S DOMAIN represents his vision — a world where identity, individuality, ambition, and creativity have no boundaries.",
    journeyP1:
      'From ideas to experiences, from ambition to reality — every journey begins with a vision.',
    journeyP2:
      'continues to build his path through creativity, entrepreneurship, fashion, events, and culture. His goal is not simply to build a successful brand, but to create a lasting identity and community.',
    visionText:
      "DEVIL'S DOMAIN is more than a brand.\n\nIt is a world built for people who create their own identity instead of following someone else's.\n\nThis is about freedom, ambition, creativity, and building something that belongs to you.",
  });

  const careerRoles = [
    {
      number: '01',
      title: 'EVENT ORGANIZER',
      tag: 'LIVE PRODUCTION',
      badge: 'EVENTS & NIGHTLIFE',
      description:
        'Creating unforgettable events and experiences that bring people, culture, music, fashion, and creativity together.',
      icon: Calendar,
      subIcon: Disc,
      image: MODEL_MOCK_PHOTOS.domainY2kRedRoom,
      telemetry: '138 BPM // 105 dB',
      graphicType: 'audio',
    },
    {
      number: '02',
      title: 'MODELS AGENCY',
      tag: 'TALENT MANAGEMENT',
      badge: 'HIGH FASHION ROSTER',
      description:
        'Discovering, developing, and managing talented individuals while creating opportunities within the fashion and entertainment industry.',
      icon: Users,
      subIcon: Camera,
      image: MODEL_MOCK_PHOTOS.sataPlatformBackBlonde,
      telemetry: '4K EDITORIAL // ISO 400',
      graphicType: 'viewfinder',
    },
    {
      number: '03',
      title: 'ENTREPRENEUR',
      tag: 'BRAND INCUBATION',
      badge: 'VENTURES & COMMERCE',
      description:
        'Building businesses, developing brands, and transforming creative ideas into meaningful opportunities.',
      icon: Briefcase,
      subIcon: TrendingUp,
      image: MODEL_MOCK_PHOTOS.bannerStudio,
      telemetry: 'VENTURE MESH // 4X DEV',
      graphicType: 'network',
    },
    {
      number: '04',
      title: 'CREATIVE VISIONARY',
      tag: 'AVANT-GARDE DIRECTION',
      badge: 'IDENTITY & CULTURE',
      description:
        'Creating concepts, experiences, and platforms that challenge boundaries and inspire a new generation.',
      icon: Compass,
      subIcon: Eye,
      image: MODEL_MOCK_PHOTOS.redMotionModel,
      telemetry: 'DISRUPTION 360° // CREED',
      graphicType: 'compass',
    },
  ];

  return (
    <div id="page-founder" className="space-y-16 sm:space-y-24 lg:space-y-32">
      {/* ========================================================
          1. FOUNDER HERO & EDITORIAL ASYMMETRIC HEADER
         ======================================================== */}
      <section id="founder-hero" className="relative pt-4 sm:pt-8">
        <div className="rounded-[32px] sm:rounded-[44px] bg-[#0A0A0A] border border-red-950/70 p-6 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)]">
          {/* Ambient Lighting */}
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-[#E50914]/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Editorial Label & Edit Toggle */}
          <div className="flex items-center justify-between pb-8 border-b border-red-950/60">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#E50914]" />
              <span className="text-[#E50914] font-black text-xs tracking-[0.4em] uppercase font-sans-main">
                PROFILE // THE FOUNDER
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer ${
                isEditing
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                  : 'bg-black border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {isEditing ? (
                <>
                  <Check className="w-3.5 h-3.5" /> DONE EDITING
                </>
              ) : (
                <>
                  <Edit3 className="w-3.5 h-3.5 text-[#E50914]" /> EDIT PROFILE COPY
                </>
              )}
            </button>
          </div>

          {/* Asymmetrical Layout: Left Photo + Right Story */}
          <div className="pt-8 sm:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left: Founder Portrait Photography */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-red-900/60 bg-black aspect-[3/4] shadow-[0_15px_50px_rgba(0,0,0,0.95),0_0_30px_rgba(229,9,20,0.2)] group">
                <img
                  src={founderData.photoUrl || regeneratedFounderImg || MODEL_MOCK_PHOTOS.founderPortrait}
                  onError={(e) => {
                    e.currentTarget.src = MODEL_MOCK_PHOTOS.founderPortrait;
                  }}
                  alt={founderData.name}
                  className="w-full h-full object-cover filter brightness-90 contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914]">
                    DEVIL'S DOMAIN CREATIVE LEAD
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-white">
                    {founderData.name}
                  </h3>
                  <p className="text-xs text-zinc-400">VISIONARY & FOUNDER</p>
                </div>
              </div>
            </div>

            {/* Right: Asymmetric Editorial Profile */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs text-zinc-500 font-mono-tech uppercase tracking-widest">
                THE PERSON BEHIND THE DOMAIN
              </span>

              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] text-zinc-400 font-bold uppercase">FOUNDER NAME</label>
                    <input
                      type="text"
                      value={founderData.name}
                      onChange={(e) => setFounderData({ ...founderData, name: e.target.value })}
                      placeholder="Kozon"
                      className="w-full bg-black border border-emerald-500/60 rounded-xl p-3 text-xl font-cinzel text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-zinc-400 font-bold uppercase">PHOTO URL</label>
                    <input
                      type="text"
                      value={founderData.photoUrl}
                      onChange={(e) => setFounderData({ ...founderData, photoUrl: e.target.value })}
                      placeholder="https://..."
                      className="w-full bg-black border border-emerald-500/60 rounded-xl p-3 text-xs text-zinc-300"
                    />
                  </div>
                </div>
              ) : (
                <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-[1.05] tracking-tight">
                  {founderData.name}
                </h1>
              )}

              {/* Biography content */}
              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                {isEditing ? (
                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] text-zinc-400 font-bold uppercase">BIO PARAGRAPH 1</label>
                      <textarea
                        value={founderData.bioP1}
                        onChange={(e) => setFounderData({ ...founderData, bioP1: e.target.value })}
                        className="w-full bg-black border border-emerald-500/60 rounded-xl p-3 text-xs text-zinc-300"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-zinc-400 font-bold uppercase">BIO PARAGRAPH 2</label>
                      <textarea
                        value={founderData.bioP2}
                        onChange={(e) => setFounderData({ ...founderData, bioP2: e.target.value })}
                        className="w-full bg-black border border-emerald-500/60 rounded-xl p-3 text-xs text-zinc-300"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-zinc-400 font-bold uppercase">BIO PARAGRAPH 3</label>
                      <textarea
                        value={founderData.bioP3}
                        onChange={(e) => setFounderData({ ...founderData, bioP3: e.target.value })}
                        className="w-full bg-black border border-emerald-500/60 rounded-xl p-3 text-xs text-zinc-300"
                        rows={3}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <p>
                      <strong className="text-white font-semibold">{founderData.name}</strong> {founderData.bioP1}
                    </p>
                    <p>{founderData.bioP2}</p>
                    <p className="text-zinc-400">{founderData.bioP3}</p>
                  </>
                )}
              </div>

              {/* Editorial Pull Quote */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#000000] border-l-4 border-[#E50914] border-y border-r border-red-950/60 shadow-xl space-y-3">
                <Quote className="w-6 h-6 text-[#E50914] opacity-80" />
                {isEditing ? (
                  <textarea
                    value={founderData.quote}
                    onChange={(e) => setFounderData({ ...founderData, quote: e.target.value })}
                    className="w-full bg-black border border-emerald-500/60 rounded-xl p-3 text-base font-cinzel text-white"
                    rows={2}
                  />
                ) : (
                  <p className="font-cinzel text-lg sm:text-2xl font-black text-white uppercase tracking-wide leading-snug">
                    "{founderData.quote}"
                  </p>
                )}
                <span className="text-xs font-mono-tech text-zinc-400 block uppercase tracking-wider">
                  — {founderData.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CAREER ROLES (01 - 04)
         ======================================================== */}
      <section id="founder-biography-details" className="space-y-8">
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#E50914]" />
          <span className="text-[#E50914] font-black text-xs tracking-[0.4em] uppercase font-sans-main">
            CAREER ROLES // PILLARS OF DISRUPTION
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerRoles.map((role) => {
            const Icon = role.icon;
            const SubIcon = role.subIcon;
            return (
              <div
                key={role.number}
                className="rounded-3xl bg-gradient-to-b from-[#0E0A0A] via-[#090808] to-[#050505] border border-red-950/70 hover:border-[#E50914] transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_50px_rgba(229,9,20,0.25)] flex flex-col justify-between overflow-hidden group relative"
              >
                {/* Visual Graphic Header */}
                <div className="relative h-44 w-full overflow-hidden border-b border-red-950/60 bg-black">
                  {/* Photo Layer */}
                  <img
                    src={role.image}
                    alt={role.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.65] group-hover:brightness-90 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Crimson & Dark Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090808] via-red-950/45 to-black/75" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(229,9,20,0.35),transparent_70%)]" />

                  {/* Large Stylized Ghost Number Watermark */}
                  <span className="font-cinzel text-7xl font-black text-white/5 absolute -right-2 -bottom-4 select-none group-hover:text-red-500/15 transition-colors pointer-events-none">
                    {role.number}
                  </span>

                  {/* Role-Specific High-Impact Vector Graphics */}
                  {role.graphicType === 'audio' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
                      {/* Audio frequency visualizer bars */}
                      <div className="flex items-end gap-1.5 h-16 opacity-80 group-hover:opacity-100 transition-opacity">
                        {[24, 48, 36, 62, 28, 54, 40, 58, 32, 46, 20].map((h, i) => (
                          <span
                            key={i}
                            style={{ height: `${h}%` }}
                            className="w-1.5 bg-gradient-to-t from-red-600 to-red-400 rounded-full shadow-[0_0_8px_rgba(229,9,20,0.8)]"
                          />
                        ))}
                      </div>
                      {/* Soundwave circle motif */}
                      <div className="absolute w-24 h-24 rounded-full border border-red-500/30 animate-ping opacity-25" />
                    </div>
                  )}

                  {role.graphicType === 'viewfinder' && (
                    <div className="absolute inset-0 pointer-events-none p-3">
                      {/* Camera Viewfinder Reticle */}
                      <div className="w-full h-full border border-red-500/20 relative">
                        {/* Corner Brackets */}
                        <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#E50914]" />
                        <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#E50914]" />
                        <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#E50914]" />
                        <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#E50914]" />
                        {/* Center Target Box */}
                        <div className="absolute inset-0 m-auto w-10 h-10 border border-dashed border-red-500/50 flex items-center justify-center">
                          <span className="w-2 h-[1px] bg-[#E50914]" />
                          <span className="h-2 w-[1px] bg-[#E50914] absolute" />
                        </div>
                      </div>
                    </div>
                  )}

                  {role.graphicType === 'network' && (
                    <div className="absolute inset-0 pointer-events-none p-4 flex items-center justify-center">
                      {/* Isometric Grid & Network Mesh */}
                      <svg viewBox="0 0 160 90" className="w-full h-full opacity-60 group-hover:opacity-90 transition-opacity">
                        <line x1="20" y1="70" x2="80" y2="25" stroke="#E50914" strokeWidth="1.5" strokeDasharray="3 3" />
                        <line x1="80" y1="25" x2="140" y2="70" stroke="#E50914" strokeWidth="1.5" strokeDasharray="3 3" />
                        <line x1="20" y1="70" x2="140" y2="70" stroke="#E50914" strokeWidth="1" opacity="0.4" />
                        <circle cx="20" cy="70" r="4" fill="#E50914" className="filter drop-shadow-[0_0_6px_rgba(229,9,20,0.9)]" />
                        <circle cx="80" cy="25" r="5" fill="#FFFFFF" stroke="#E50914" strokeWidth="2" />
                        <circle cx="140" cy="70" r="4" fill="#E50914" className="filter drop-shadow-[0_0_6px_rgba(229,9,20,0.9)]" />
                        <path d="M 50,47 L 80,60 L 110,47" stroke="#E50914" strokeWidth="1.2" fill="none" opacity="0.7" />
                      </svg>
                    </div>
                  )}

                  {role.graphicType === 'compass' && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                      {/* Radiant Celestial Reticle */}
                      <div className="relative w-24 h-24 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-red-500/30 border-dashed animate-[spin_30s_linear_infinite]" />
                        <div className="absolute w-16 h-16 rounded-full border border-red-600/50" />
                        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-70" />
                        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#E50914] to-transparent opacity-70" />
                        <div className="w-4 h-4 rotate-45 border-2 border-white bg-[#E50914] shadow-[0_0_12px_rgba(229,9,20,1)]" />
                      </div>
                    </div>
                  )}

                  {/* Top HUD Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-red-900/50 text-[10px] font-mono-tech font-bold text-[#E50914] flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse" />
                      {role.tag}
                    </span>
                    <span className="text-[10px] font-mono-tech text-zinc-400 bg-black/60 px-2 py-0.5 rounded border border-white/5">
                      {role.telemetry}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-2xl font-black text-[#E50914] tracking-wider drop-shadow-[0_0_10px_rgba(229,9,20,0.5)]">
                        {role.number}
                      </span>
                      <div className="p-2.5 rounded-2xl bg-red-950/40 border border-red-900/50 group-hover:border-red-500/80 group-hover:bg-red-950/70 transition-all shadow-md">
                        <Icon className="w-5 h-5 text-[#E50914]" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-cinzel text-lg sm:text-xl font-black text-white uppercase tracking-wide group-hover:text-red-50 transition-colors">
                        {role.title}
                      </h3>
                      <span className="text-[10px] font-mono-tech text-red-400/90 tracking-widest uppercase block mt-0.5">
                        {role.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                      {role.description}
                    </p>
                  </div>

                  {/* Card Bottom Readout */}
                  <div className="pt-4 mt-2 border-t border-red-950/40 flex items-center justify-between text-[10px] font-mono-tech uppercase tracking-widest text-zinc-400">
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <SubIcon className="w-3.5 h-3.5 text-[#E50914]" />
                      DOMAIN CORE
                    </span>
                    <span className="text-red-400 group-hover:text-red-300 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> ACTIVE
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          3. NEW SECTIONS: THE JOURNEY & THE VISION
         ======================================================== */}
      <section id="founder-journey-vision" className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* THE JOURNEY */}
          <div className="p-8 sm:p-12 rounded-[32px] bg-[#0A0A0A] border border-red-950/70 hover:border-red-900/80 transition-all relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E50914]/5 rounded-full blur-[90px] pointer-events-none" />

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-6 bg-[#E50914]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914]">
                SECTION 01 // EVOLUTION
              </span>
            </div>

            <h2 className="font-cinzel text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              THE JOURNEY
            </h2>

            {isEditing ? (
              <div className="space-y-3">
                <textarea
                  value={founderData.journeyP1}
                  onChange={(e) => setFounderData({ ...founderData, journeyP1: e.target.value })}
                  className="w-full bg-black border border-emerald-500/60 rounded-xl p-3 text-xs text-zinc-300"
                  rows={2}
                />
                <textarea
                  value={founderData.journeyP2}
                  onChange={(e) => setFounderData({ ...founderData, journeyP2: e.target.value })}
                  className="w-full bg-black border border-emerald-500/60 rounded-xl p-3 text-xs text-zinc-300"
                  rows={3}
                />
              </div>
            ) : (
              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                <p>{founderData.journeyP1}</p>
                <p className="text-zinc-400">
                  <strong className="text-white font-semibold">{founderData.name}</strong> {founderData.journeyP2}
                </p>
              </div>
            )}
          </div>

          {/* THE VISION */}
          <div className="p-8 sm:p-12 rounded-[32px] bg-[#0A0A0A] border border-red-950/70 hover:border-red-900/80 transition-all relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E50914]/5 rounded-full blur-[90px] pointer-events-none" />

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-6 bg-[#E50914]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E50914]">
                SECTION 02 // MANIFESTO
              </span>
            </div>

            <h2 className="font-cinzel text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              THE VISION
            </h2>

            {isEditing ? (
              <textarea
                value={founderData.visionText}
                onChange={(e) => setFounderData({ ...founderData, visionText: e.target.value })}
                className="w-full bg-black border border-emerald-500/60 rounded-xl p-3 text-xs text-zinc-300"
                rows={6}
              />
            ) : (
              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-cinzel">
                <p className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                  "DEVIL'S DOMAIN is more than a brand.
                </p>
                <p className="text-zinc-300 font-sans-main text-sm sm:text-base font-normal">
                  It is a world built for people who create their own identity instead of following someone else's.
                </p>
                <p className="text-zinc-400 font-sans-main text-sm sm:text-base font-normal">
                  This is about freedom, ambition, creativity, and building something that belongs to you."
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. FINAL TEXT MANIFESTO CALLOUT
         ======================================================== */}
      <section id="founder-manifesto-final" className="relative pt-4 pb-8 text-center">
        <div className="max-w-4xl mx-auto rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#0F0505] to-[#050000] border border-red-950/80 p-8 sm:p-14 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,9,20,0.12),transparent_70%)] pointer-events-none" />

          <div className="relative space-y-4">
            <div className="flex items-center justify-center gap-2 text-[#E50914]">
              <Sparkles className="w-4 h-4" />
              <span className="text-[11px] font-mono-tech uppercase tracking-[0.4em] font-bold">
                DEVIL'S DOMAIN CREED
              </span>
              <Sparkles className="w-4 h-4" />
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                ENTER THE DOMAIN.
              </h2>
              <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-black text-[#E50914] uppercase tracking-[0.15em] sm:tracking-[0.2em] drop-shadow-[0_0_25px_rgba(229,9,20,0.4)]">
                CREATE YOUR IDENTITY.
              </h2>
              <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                LEAVE YOUR MARK.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
