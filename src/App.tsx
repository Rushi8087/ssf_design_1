import { useState } from 'react';
import { motion, AnimatePresence, useAnimate } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const EASE = [0.76, 0, 0.24, 1] as const;
const SHRINK_DURATION = 0.5;
const SLIDE_DURATION = 0.45;
const EXPAND_DURATION = 0.55;
const EXPAND_DELAY = 0.35;

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=2000",
    date: "Nov '26", navTitle: "HOME", type: "hero",
    tagline: "01 ", taglineSuffix: " FORWARD",
    description: "From Al Ahly's academy and Egypt U-17 football to the FC Barcelona pathway. Joined the Blaugrana setup on loan until June 2026 with an option to buy.",
    stat1Label: "Loan Until", stat1Value: "30 Jun '26",
    stat2Label: "Status", stat2Value: "Juvenil A - No. 9",
    heroText: "HAMZA", heroSub1Prefix: "From", heroSub1: "Cairo",
    heroSub2Prefix: "To", heroSub2: "Barça", signature: "Abdelkarim", prefix: ""
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&q=80&w=2000",
    date: "May '26", navTitle: "ABOUT SSF", type: "right",
    tagline: "ROOTS ", taglineSuffix: " 02", prefix: "From Cairo",
    heroText: "AL AHLY\nACADEMY",
    description: "Developed in Al Ahly's youth system before earning senior exposure across the Egyptian Cup and the CAF Champions League.",
    stat1Label: "Continental", stat1Value: "CAF Champions League",
    stat2Label: "Founder", stat2Value: "1907",
    heroSub1Prefix: "", heroSub1: "", heroSub2Prefix: "", heroSub2: "", signature: ""
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1510566337590-2fc1f2110fa3?auto=format&fit=crop&q=80&w=2000",
    date: "May '25", navTitle: "PROPERTIES", type: "left",
    tagline: "03 ", taglineSuffix: " PROPERTIES", prefix: "Pharaohs",
    heroText: "EGYPT U-17",
    description: "A decisive strike against Angola on 12 April 2025 sealed Egypt's place at the FIFA U-17 World Cup Qatar 2025. Named in Egypt's senior preliminary World Cup squad.",
    stat1Label: "Qualifier / 09 Apr '25", stat1Value: "EGYPT 2 - 1\nAngola",
    stat2Label: "Achievement", stat2Value: "U-17 World Cup berth",
    heroSub1Prefix: "", heroSub1: "", heroSub2Prefix: "", heroSub2: "", signature: ""
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1517649712541-2e50cea5ce49?auto=format&fit=crop&q=80&w=2000",
    date: "2025", navTitle: "INVEST", type: "right",
    tagline: "FUTURE ", taglineSuffix: " 04", prefix: "Opportunities",
    heroText: "INVEST",
    description: "Strategic investment opportunities in high-growth sports sectors. Partner with us to shape the future of global athletics and performance.",
    stat1Label: "Model", stat1Value: "Strategic",
    stat2Label: "Returns", stat2Value: "Long-term",
    heroSub1Prefix: "", heroSub1: "", heroSub2Prefix: "", heroSub2: "", signature: ""
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=2000",
    date: "2024", navTitle: "LEADERSHIP", type: "hero",
    tagline: "05 ", taglineSuffix: " GUIDANCE",
    description: "Our board comprises industry veterans, elite former athletes, and visionary business leaders committed to excellence and sustainable growth.",
    stat1Label: "Experience", stat1Value: "Decades",
    stat2Label: "Vision", stat2Value: "Unlimited",
    heroText: "EXECUTIVE", heroSub1Prefix: "Our", heroSub1: "Leadership",
    heroSub2Prefix: "The", heroSub2: "Board", signature: "Directors", prefix: ""
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&q=80&w=2000",
    date: "Live", navTitle: "SPORTSCAST", type: "left",
    tagline: "06 ", taglineSuffix: " MEDIA", prefix: "Broadcast",
    heroText: "SPORTSCAST",
    description: "Exclusive behind-the-scenes content, expert analysis, and live updates. The ultimate destination for premium digital sports media.",
    stat1Label: "Content", stat1Value: "Exclusive",
    stat2Label: "Format", stat2Value: "Digital Media",
    heroSub1Prefix: "", heroSub1: "", heroSub2Prefix: "", heroSub2: "", signature: ""
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1526778548025-fa2fbf84cf61?auto=format&fit=crop&q=80&w=2000",
    date: "Global", navTitle: "GLOBAL", type: "right",
    tagline: "PRESENCE ", taglineSuffix: " 07", prefix: "Worldwide",
    heroText: "GLOBAL",
    description: "An interconnected network spanning continents. Operating at the highest levels in Europe, Africa, Asia, and the Americas.",
    stat1Label: "Continents", stat1Value: "Five",
    stat2Label: "Network", stat2Value: "Unified",
    heroSub1Prefix: "", heroSub1: "", heroSub2Prefix: "", heroSub2: "", signature: ""
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000",
    date: "Now", navTitle: "CONTACT", type: "hero",
    tagline: "08 ", taglineSuffix: " CONNECT",
    description: "Reach out to our global headquarters to explore partnerships, media inquiries, or investment opportunities.",
    stat1Label: "Response", stat1Value: "24h Turnaround",
    stat2Label: "Location", stat2Value: "London HQ",
    heroText: "CONTACT", heroSub1Prefix: "Get", heroSub1: "In Touch",
    heroSub2Prefix: "Reach", heroSub2: "Out", signature: "Welcome", prefix: ""
  }
];

type Slide = typeof slides[0];

function SlideContent({ slide }: { slide: Slide }) {
  if (slide.type === "hero") {
    return (
      <div className="w-full h-full flex flex-col justify-end pb-[20vh]">
        <div className="absolute left-8 md:left-20 top-1/4 max-w-sm">
          <h3 className="text-xs tracking-[0.2em] font-medium text-white mb-6 uppercase flex items-center">
            {slide.tagline} <span className="w-6 h-[1px] bg-red-600 mx-4"></span> {slide.taglineSuffix}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-8 font-light">{slide.description}</p>
          <div className="flex gap-10 items-end">
            <div>
              <div className="text-[10px] text-gray-500 tracking-wider mb-2 uppercase">{slide.stat1Label}</div>
              <div className="text-2xl font-semibold tracking-tight whitespace-pre-line">{slide.stat1Value}</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 tracking-wider mb-2 uppercase">{slide.stat2Label}</div>
              <div className="text-xl font-medium tracking-tight text-red-500 whitespace-pre-line">{slide.stat2Value}</div>
            </div>
          </div>
        </div>
        <div className="w-full relative flex flex-col items-center justify-center">
          <div className="relative inline-block mt-32">
            <h1 className="text-[18vw] leading-none font-anton tracking-wider text-red-800/90 mix-blend-screen drop-shadow-2xl select-none whitespace-pre-line text-center">
              {slide.heroText}
            </h1>
            <div className="absolute inset-0 flex justify-between items-center px-[8%] pointer-events-none">
              <div className="text-[0.7vw] font-bold tracking-[0.3em] uppercase leading-relaxed text-gray-300 text-left">
                <span className="block mb-[-2px] text-red-500">{slide.heroSub1Prefix}</span>
                <span className="block text-xl">{slide.heroSub1}</span>
              </div>
              <div className="text-[0.7vw] font-bold tracking-[0.3em] uppercase leading-relaxed text-gray-300 text-right mt-16">
                <span className="block mb-[-2px] text-red-500">{slide.heroSub2Prefix}</span>
                <span className="block text-xl">{slide.heroSub2}</span>
              </div>
            </div>
          </div>
          {slide.signature && (
            <h2 className="font-marker text-5xl md:text-7xl lg:text-8xl text-white -mt-16 md:-mt-24 z-10 rotate-[-4deg] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] select-none">
              {slide.signature}
            </h2>
          )}
        </div>
      </div>
    );
  }

  if (slide.type === "right") {
    return (
      <div className="w-full h-full flex items-center justify-end px-8 md:px-24">
        <div className="max-w-xl text-right flex flex-col items-end">
          <div className="text-xs tracking-[0.2em] font-medium text-gray-400 mb-6 uppercase flex items-center justify-end w-full">
            {slide.tagline} <span className="w-8 h-[1px] bg-red-600 ml-4"></span> {slide.taglineSuffix}
          </div>
          <div className="text-2xl font-medium mb-1 text-white tracking-tight">{slide.prefix}</div>
          <h1 className="text-[7rem] font-anton leading-[0.9] text-white uppercase mb-8 drop-shadow-xl text-right whitespace-pre-line">
            {slide.heroText}
          </h1>
          <p className="text-gray-300 font-light text-right max-w-sm mb-12 text-sm md:text-base leading-relaxed">
            {slide.description}
          </p>
          <div className="flex gap-12 text-right">
            <div>
              <div className="text-[10px] text-red-500 tracking-[0.2em] uppercase mb-2">{slide.stat1Label}</div>
              <div className="font-semibold text-lg whitespace-pre-line">{slide.stat1Value}</div>
            </div>
            <div>
              <div className="text-[10px] text-red-500 tracking-[0.2em] uppercase mb-2">{slide.stat2Label}</div>
              <div className="font-semibold text-lg whitespace-pre-line">{slide.stat2Value}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-start px-8 md:px-24">
      <div className="max-w-xl text-left flex flex-col items-start">
        <div className="text-xs tracking-[0.2em] font-medium text-gray-400 mb-6 uppercase flex items-center justify-start w-full">
          {slide.tagline} <span className="w-8 h-[1px] bg-red-600 mr-4 ml-4"></span> {slide.taglineSuffix}
        </div>
        <div className="text-2xl font-medium mb-1 text-white tracking-tight">{slide.prefix}</div>
        <h1 className="text-[7rem] font-anton leading-[0.9] text-white uppercase mb-8 drop-shadow-xl text-left whitespace-pre-line">
          {slide.heroText}
        </h1>
        <p className="text-gray-300 font-light text-left max-w-sm mb-12 text-sm md:text-base leading-relaxed">
          {slide.description}
        </p>
        <div className="flex gap-12 text-left">
          <div>
            <div className="text-[10px] text-red-500 tracking-[0.2em] uppercase mb-2">{slide.stat1Label}</div>
            <div className="font-semibold text-lg leading-tight whitespace-pre-line">{slide.stat1Value}</div>
          </div>
          <div>
            <div className="text-[10px] text-red-500 tracking-[0.2em] uppercase mb-2">{slide.stat2Label}</div>
            <div className="font-semibold text-lg mt-1 text-white whitespace-pre-line">{slide.stat2Value}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [containerScope, animateContainer] = useAnimate();

  const triggerTransition = async (nextIndex: number, dir: number) => {
    if (isAnimating || nextIndex === currentIndex) return;
    setIsAnimating(true);
    setDirection(dir);

    // Phase 1 — SHRINK: scale down + round corners
    await animateContainer(containerScope.current, {
      scale: 0.6,
      borderRadius: '32px',
    }, {
      duration: SHRINK_DURATION,
      ease: EASE,
    });

    // Phase 2 — SWAP: update content (AnimatePresence handles the x-slide)
    setCurrentIndex(nextIndex);

    // Wait for the full slide animation to complete before expanding
    await new Promise(r => setTimeout(r, SLIDE_DURATION * 1000 + EXPAND_DELAY * 1000));

    // Phase 3 — EXPAND: scale back up + remove border radius
    await animateContainer(containerScope.current, {
      scale: 1,
      borderRadius: '0px',
    }, {
      duration: EXPAND_DURATION,
      ease: EASE,
    });

    setIsAnimating(false);
  };

  const nextSlide = () => {
    const next = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    triggerTransition(next, 1);
  };

  const prevSlide = () => {
    const next = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    triggerTransition(next, -1);
  };

  const navigateToSlide = (index: number) => {
    const dir = index > currentIndex ? 1 : -1;
    triggerTransition(index, dir);
  };

  const currentSlide = slides[currentIndex];

  // Content x-slide variants (inner AnimatePresence)
  const contentVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 1,
    }),
    center: {
      x: '0%',
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 1,
    }),
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans selection:bg-red-800 selection:text-white">

      {/* Outer container — scale & borderRadius animated imperatively */}
      <motion.div
        ref={containerScope}
        className="absolute inset-0 w-full h-full overflow-hidden bg-black"
        style={{
          scale: 1,
          borderRadius: '0px',
          transformOrigin: 'center center',
          willChange: 'transform, border-radius',
        }}
      >
        {/* Background image layer (fades between slides) */}
        <AnimatePresence initial={false}>
          <motion.div
            key={`bg-${currentIndex}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: SLIDE_DURATION, ease: EASE }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${currentSlide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
            <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Inner content — x-slide via AnimatePresence */}
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={`content-${currentIndex}`}
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: SLIDE_DURATION, ease: EASE }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <SlideContent slide={currentSlide} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ── Static UI overlays (always on top, unaffected by scale) ── */}

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full z-50 p-8 md:p-12 flex justify-between items-center pointer-events-auto">
        <div className="select-none font-bold tracking-widest text-sm text-white w-32">SSF</div>

        <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-10 pl-8 lg:pl-16 xl:pl-32 pr-8 lg:pr-16">
          {slides.map((item, i) => (
            <button
              key={item.id}
              onClick={() => navigateToSlide(i)}
              disabled={isAnimating}
              className={`text-[11px] xl:text-[13px] font-bold tracking-[0.15em] hover:text-white transition-colors uppercase whitespace-nowrap disabled:cursor-not-allowed ${currentIndex === i ? 'text-white' : 'text-gray-400'
                }`}
            >
              {item.navTitle}
            </button>
          ))}
        </nav>

        <div className="flex justify-end items-center space-x-4 xl:space-x-6 select-none w-48 xl:w-64 pr-4">
          <div className="text-xs font-bold tracking-[0.2em] text-white">
            0{currentIndex + 1} / 0{slides.length}
          </div>
          <div className="h-4 w-[1px] bg-white/30 hidden md:block"></div>
          <div className="text-xs font-bold tracking-[0.1em] text-gray-400 min-w-[3rem] text-right hidden md:block">
            {slides[currentIndex].date}
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 z-50 flex items-center justify-between select-none">
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="flex items-center gap-4 group cursor-pointer text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <motion.div whileHover={{ x: -4 }} className="flex items-center gap-3">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden md:block">
              {currentIndex === 0 ? 'SCROLL' : slides[currentIndex - 1].navTitle}
            </span>
          </motion.div>
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 text-[10px] tracking-widest text-white/50 pb-2">
          SSF
        </div>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="flex items-center gap-4 group cursor-pointer text-xs font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <motion.div whileHover={{ x: 4 }} className="flex items-center gap-3">
            <span className="hidden md:block">
              {currentIndex === slides.length - 1 ? slides[0].navTitle : slides[currentIndex + 1].navTitle}
            </span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </button>
      </div>

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-40 mix-blend-overlay"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, #FFF 1px, #FFF 2px)' }}
      />
    </div>
  );
}