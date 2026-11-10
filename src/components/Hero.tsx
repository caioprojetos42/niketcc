import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowDown, RotateCw, Sparkles } from 'lucide-react';

const TOTAL_FRAMES = 239;

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesCache = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES + 1).fill(null));
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(1);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const animationFrameId = useRef<number | null>(null);

  // Pad frame numbers to 6 digits (e.g., frame_000001.png)
  const getFramePath = (index: number) => {
    const padded = String(index).padStart(6, '0');
    return `./frames/frame_${padded}.png`;
  };

  // Render a specific frame on canvas with proper scaling
  const renderFrame = useCallback((frameNum: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = framesCache.current[frameNum];
    if (img && img.complete && img.naturalWidth > 0) {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Maintain aspect ratio and center image
      const hRatio = canvas.width / img.naturalWidth;
      const vRatio = canvas.height / img.naturalHeight;
      const ratio = Math.min(hRatio, vRatio) * 0.85; // 85% scale for prominent presentation

      const centerShiftX = (canvas.width - img.naturalWidth * ratio) / 2;
      const centerShiftY = (canvas.height - img.naturalHeight * ratio) / 2;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(
        img,
        0,
        0,
        img.naturalWidth,
        img.naturalHeight,
        centerShiftX,
        centerShiftY,
        img.naturalWidth * ratio,
        img.naturalHeight * ratio
      );
    }
  }, []);

  // Preload frames progressively
  useEffect(() => {
    let isCancelled = false;
    let loadedCount = 0;

    // Load first frame immediately
    const firstImg = new Image();
    firstImg.src = getFramePath(1);
    firstImg.onload = () => {
      if (isCancelled) return;
      framesCache.current[1] = firstImg;
      loadedCount++;
      setIsLoaded(true);
      renderFrame(1);
    };
    firstImg.onerror = () => {
      if (!isCancelled) setHasError(true);
    };

    // Load remaining frames in batches to avoid network lockup
    const loadRemaining = async () => {
      // Priority keyframes (every 4th frame first for smooth low-bandwidth scrub)
      const priorityIndices: number[] = [];
      for (let i = 2; i <= TOTAL_FRAMES; i += 4) priorityIndices.push(i);
      for (let i = 2; i <= TOTAL_FRAMES; i++) {
        if (i % 4 !== 0) priorityIndices.push(i);
      }

      for (const idx of priorityIndices) {
        if (isCancelled) break;
        const img = new Image();
        img.src = getFramePath(idx);
        img.onload = () => {
          if (isCancelled) return;
          framesCache.current[idx] = img;
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        };
      }
    };

    const timer = setTimeout(loadRemaining, 100);
    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [renderFrame]);

  // Adjust canvas resolution to device pixel ratio
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      renderFrame(currentFrameIndex);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentFrameIndex, renderFrame]);

  // Scroll listener tied to container progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
      if (containerHeight <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / containerHeight));

      // Calculate frame index
      const targetFrame = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.round(progress * (TOTAL_FRAMES - 1)) + 1)
      );

      if (targetFrame !== currentFrameIndex) {
        setCurrentFrameIndex(targetFrame);
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = requestAnimationFrame(() => {
          renderFrame(targetFrame);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [currentFrameIndex, renderFrame]);

  const scrollToStudy = () => {
    const target = document.getElementById('introducao');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Rotation degrees for telemetry HUD
  const degrees = Math.round(((currentFrameIndex - 1) / (TOTAL_FRAMES - 1)) * 360);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-[250vh] bg-black text-white"
    >
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between overflow-hidden px-6 py-12 md:py-16">
        
        {/* Ambient Dark Glow Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF4600]/[0.05] rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black pointer-events-none" />
        </div>

        {/* Top Header / Classification Badge */}
        <div className="z-10 text-center pt-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest uppercase text-nike-gray mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Interactive 3D Study // Scroll Driven 360°</span>
          </div>
          <h2 className="text-xs md:text-sm tracking-monumental font-mono text-nike-gray uppercase">
            A Anatomia do Sucesso Global
          </h2>
        </div>

        {/* Center: 3D Canvas / Rotating Swoosh Display */}
        <div className="relative z-10 w-full max-w-4xl flex-1 flex items-center justify-center my-auto">
          {!hasError ? (
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-full max-w-[850px] object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.12)] cursor-ns-resize"
              />
              {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 bg-black/60 backdrop-blur-sm">
                  <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span className="font-mono text-xs text-nike-gray tracking-widest uppercase">
                    Carregando Swoosh 3D ({loadProgress}%)
                  </span>
                </div>
              )}
            </div>
          ) : (
            /* Elegant Fallback if local frames cannot be loaded */
            <div className="relative w-full h-80 flex flex-col items-center justify-center">
              <svg
                className="w-72 h-44 fill-white drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] animate-pulse"
                viewBox="0 0 24 24"
              >
                <path d="M21.707 5.293c-.266-.266-.694-.287-.984-.047C17.65 7.818 12.87 9.8 8.5 9.8c-2.45 0-4.5-.66-6.1-1.95a.75.75 0 0 0-1.19.78C2.5 13.5 6.5 17 12 17c4.66 0 8.7-2.6 10.15-7.85.12-.44-.06-.91-.44-1.15z" />
              </svg>
              <span className="font-mono text-xs text-nike-gray mt-4">Fallback 3D Vector Active</span>
            </div>
          )}

          {/* Telemetry HUD on corners */}
          <div className="absolute top-4 right-4 hidden md:flex items-center space-x-2 text-[10px] font-mono tracking-widest text-nike-gray bg-white/5 border border-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
            <RotateCw className="w-3 h-3 text-white animate-spin" style={{ animationDuration: '6s' }} />
            <span>ROTATION: {degrees.toString().padStart(3, '0')}°</span>
            <span className="text-white/30">|</span>
            <span>FRAME: {currentFrameIndex.toString().padStart(3, '0')} / {TOTAL_FRAMES}</span>
          </div>
        </div>

        {/* Bottom Hero Narrative & CTA */}
        <div className="z-10 w-full max-w-4xl text-center flex flex-col items-center space-y-6 pb-4">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-white select-none">
              NIKE
            </h1>
            <p className="font-display text-xl sm:text-2xl md:text-3xl tracking-widest text-white/90 mt-1 uppercase">
              The Power of a Brand.
            </p>
          </div>

          <p className="max-w-xl text-sm sm:text-base md:text-lg text-gray-400 font-normal leading-relaxed">
            "Mais do que vender produtos, a Nike vende uma ideia:{' '}
            <span className="text-white font-semibold">superar limites</span>."
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              onClick={scrollToStudy}
              className="group relative inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-white text-black font-bold uppercase text-xs sm:text-sm tracking-widest hover:bg-neutral-200 transition-all transform hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.25)]"
            >
              <span>Explorar o Estudo de Caso</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <a
              href="#problematizacao"
              className="inline-flex items-center space-x-2 px-6 py-4 rounded-full border border-white/20 text-white font-semibold uppercase text-xs tracking-widest hover:bg-white/10 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-nike-accent" />
              <span>A Tese Central</span>
            </a>
          </div>

          {/* Scroll Cue Indicator */}
          <div className="flex flex-col items-center space-y-1 text-nike-gray pt-2">
            <span className="text-[10px] font-mono tracking-widest uppercase">
              Role a página para girar o Swoosh
            </span>
            <div className="w-4 h-7 border border-white/30 rounded-full flex justify-center pt-1">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
