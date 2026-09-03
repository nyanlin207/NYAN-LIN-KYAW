import { useState, useRef, MouseEvent, ChangeEvent, FormEvent } from 'react';
import { Play, Pause, Volume2, VolumeX, Video, Upload, Link2, Check, X, RotateCcw } from 'lucide-react';
import { MODEL_MOCK_PHOTOS } from '../data/mockPhotos';

export const DEFAULT_BRAND_STATEMENT_VIDEO =
  'https://res.cloudinary.com/m6akgouf/video/upload/v1788444864/VD2.mov';

export default function BrandStatementVideo() {
  const [videoSrc, setVideoSrc] = useState(DEFAULT_BRAND_STATEMENT_VIDEO);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showReplaceModal, setShowReplaceModal] = useState(false);
  const [customInputUrl, setCustomInputUrl] = useState('');
  const [uploadError, setUploadError] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const togglePlay = (e?: MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleSound = (e?: MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleApplyUrl = (e: FormEvent) => {
    e.preventDefault();
    if (!customInputUrl.trim()) return;
    setVideoSrc(customInputUrl.trim());
    setShowReplaceModal(false);
    setIsPlaying(true);
    setUploadError(null);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      setUploadError('Please select a valid video file (.mp4, .webm, .mov)');
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setVideoSrc(objectUrl);
    setShowReplaceModal(false);
    setIsPlaying(true);
    setUploadError(null);
  };

  const handleResetToDefault = () => {
    setVideoSrc(DEFAULT_BRAND_STATEMENT_VIDEO);
    setShowReplaceModal(false);
    setCustomInputUrl('');
    setUploadError(null);
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full max-w-[320px] xs:max-w-[380px] sm:max-w-lg mx-auto rounded-[22px] sm:rounded-[28px] overflow-hidden border border-red-900/60 p-1.5 sm:p-2.5 bg-[#000000] shadow-[0_10px_40px_rgba(229,9,20,0.2)] group">
      <div className="relative aspect-[4/3.2] xs:aspect-[4/3.8] sm:aspect-[4/5] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-zinc-950">
        {/* HTML5 Video Player */}
        <video
          ref={videoRef}
          src={videoSrc}
          poster={MODEL_MOCK_PHOTOS.sataPlatformBackBlonde}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
        />

        {/* Ambient Dark Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />

        {/* Top Control Bar */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
          {/* Status Badge */}
          <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-red-900/50 px-3 py-1.5 rounded-full shadow-md pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
            <span className="text-[10px] font-extrabold tracking-[0.2em] text-white uppercase font-sans-main flex items-center gap-1.5">
              <Video className="w-3 h-3 text-[#E50914]" />
              BRAND CINEMATIC
            </span>
          </div>

          {/* Action Buttons: Sound, Play/Pause, and Replace Video */}
          <div className="flex items-center gap-1.5 pointer-events-auto">
            {/* Play/Pause */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="w-8 h-8 rounded-full bg-black/80 border border-white/20 hover:border-[#E50914] text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#E50914]" />}
            </button>

            {/* Mute/Unmute */}
            <button
              type="button"
              onClick={toggleSound}
              aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
              className="w-8 h-8 rounded-full bg-black/80 border border-white/20 hover:border-[#E50914] text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
              title={isMuted ? 'Unmute sound' : 'Mute sound'}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-[#E50914] animate-pulse" />
              )}
            </button>

            {/* Replace / Change Video Button */}
            <button
              type="button"
              onClick={() => setShowReplaceModal(true)}
              aria-label="Change or replace video"
              className="px-2.5 h-8 rounded-full bg-black/80 border border-white/20 hover:border-[#E50914] text-white hover:text-[#E50914] text-[10px] font-mono-tech tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer shadow-md active:scale-95"
              title="Replace Video URL or Upload"
            >
              <Upload className="w-3 h-3 text-[#E50914]" />
              <span className="hidden sm:inline">REPLACE</span>
            </button>
          </div>
        </div>

        {/* Bottom Readout */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono-tech uppercase text-zinc-300 pointer-events-none z-10">
          <span className="text-[#E50914] font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
            AUTONOMY & ATTITUDE
          </span>
          <span className="bg-black/60 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
            ARCHIVE NO. 2026
          </span>
        </div>

        {/* Modal: Replace Video URL or Upload File */}
        {showReplaceModal && (
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md z-30 p-5 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-red-950 pb-3">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-[#E50914]" />
                <span className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
                  CHANGE BRAND VIDEO
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowReplaceModal(false)}
                className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 hover:border-[#E50914] text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-4 my-auto py-2">
              {/* Option A: Paste Video Link */}
              <form onSubmit={handleApplyUrl} className="space-y-2">
                <label className="text-[10px] text-zinc-400 font-mono-tech uppercase block">
                  PASTE VIDEO LINK (MP4 / WEBM)
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Link2 className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-3" />
                    <input
                      type="url"
                      value={customInputUrl}
                      onChange={(e) => setCustomInputUrl(e.target.value)}
                      placeholder="https://example.com/video.mp4"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#E50914] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-xl bg-[#E50914] hover:bg-white text-white hover:text-black text-xs font-bold uppercase transition-colors cursor-pointer flex items-center gap-1 shrink-0"
                  >
                    <Check className="w-3.5 h-3.5" />
                    SET
                  </button>
                </div>
              </form>

              <div className="flex items-center gap-3">
                <div className="h-[1px] flex-1 bg-zinc-800" />
                <span className="text-[10px] text-zinc-500 uppercase font-mono-tech">OR</span>
                <div className="h-[1px] flex-1 bg-zinc-800" />
              </div>

              {/* Option B: Choose Local Video File */}
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-900/90 border border-dashed border-red-900/60 hover:border-[#E50914] hover:bg-zinc-900 text-zinc-300 hover:text-white text-xs font-mono-tech uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5 text-[#E50914]" />
                  SELECT VIDEO FROM DEVICE
                </button>
              </div>

              {uploadError && (
                <p className="text-[11px] text-red-400 font-mono-tech">{uploadError}</p>
              )}
            </div>

            {/* Modal Bottom: Reset to Brand Default */}
            <div className="pt-3 border-t border-red-950/60 flex items-center justify-between">
              <button
                type="button"
                onClick={handleResetToDefault}
                className="text-[10px] font-mono-tech uppercase text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3 text-[#E50914]" />
                RESTORE BRAND VIDEO
              </button>
              <span className="text-[9px] text-zinc-500 uppercase font-mono-tech">
                1080P // STREAMING
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
