/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Plus } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Footer } from '../components/Footer';

/** GLOBAL PINNED BRAND OVERLAY */
function SharedBrandOverlay() {
  const { scrollY } = useScroll();
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const progress = useTransform(scrollY, [0, dimensions.height * 0.7], [0, 1]);

  const weAreOpacity = useTransform(progress, [0, 0.4], [1, 0]);
  const arrowOpacity = useTransform(progress, [0, 0.1], [1, 0]);

  const isMobile = dimensions.width < 768;

  const targetTop = isMobile ? 32 : 40;
  const targetLeft = isMobile ? 32 : 48;

  // Fix Framer Motion interpolation by using purely numeric (pixel) values for top/left
  const startTop = dimensions.height / 2;
  const startLeft = dimensions.width / 2;

  const top = useTransform(progress, [0, 1], [startTop, targetTop]);
  const left = useTransform(progress, [0, 1], [startLeft, targetLeft]);
  const x = useTransform(progress, [0, 1], ["-50%", "0%"]);
  const y = useTransform(progress, [0, 1], ["-50%", "0%"]);
  const scale = useTransform(progress, [0, 1], [1, isMobile ? 0.2 : 0.25]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[75]">
      <motion.div 
         style={{ top, left, x, y, scale }} 
         className="absolute flex flex-col items-center justify-center whitespace-nowrap origin-top-left"
      >
        <motion.h2 
           className="text-4xl md:text-6xl font-barlow font-light tracking-widest text-transparent bg-clip-text mb-2 pl-1"
           style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.7)', opacity: weAreOpacity }}
        >
          WE ARE
        </motion.h2>

        <div className="flex flex-col items-center relative drop-shadow-md">
           <h1 className="text-[6rem] md:text-[9rem] lg:text-[11rem] font-bebas font-normal tracking-wider text-pure-white leading-none uppercase m-0 p-0">
             SSF
           </h1>
           <motion.h2 style={{ opacity: weAreOpacity }} className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-bebas font-normal tracking-wider text-pure-white leading-none uppercase m-0 p-0 -mt-2 md:-mt-4">
             SPORT SPIRIT FED
           </motion.h2>
           <motion.div 
              style={{ opacity: weAreOpacity }}
              className="absolute -bottom-2 md:-bottom-3 right-0 h-2 md:h-3 bg-[#e61c24]" 
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
           />
        </div>
      </motion.div>

      <motion.div 
        style={{ opacity: arrowOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center pointer-events-auto"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
         <ArrowDown className="text-pure-white w-8 h-8 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
      </motion.div>
    </div>
  )
}

/** PINNED HERO SCROLL SPACER */
function PinnedHero() {
  return (
    <div className="relative w-full bg-black z-0 h-[150vh]">
      <div className="sticky top-0 h-screen w-full bg-black flex items-center justify-center flex-col overflow-hidden" />
    </div>
  );
}


/** MAIN CONTENT COMPONENTS */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] w-full flex items-end justify-center pb-24 md:pb-32 px-8 z-0 overflow-hidden bg-deep-navy border-t-2 border-royal-blue/20">
      <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-full origin-center">
         <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2805&auto=format&fit=crop" 
              alt="Sports Stadium" 
              className="w-full h-full object-cover opacity-60" 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/30 to-transparent" />
      </motion.div>
      
      <div className="relative z-10 text-center flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bebas font-normal mb-10 leading-[1.1] max-w-5xl drop-shadow-2xl text-pure-white uppercase">
          We Are Leaders In Sports Marketing
        </h2>
        <button className="border-2 border-pure-white hover:bg-pure-white hover:text-royal-blue text-pure-white transition-all bg-deep-navy/30 backdrop-blur-sm rounded-full px-10 py-5 text-sm uppercase tracking-widest font-bold flex items-center justify-center font-barlow">
          Watch Our Brand Film
        </button>
      </div>
    </section>
  )
}

function Brands() {
  const brands1 = ['KitKat', 'asos', 'EA SPORTS', 'Volkswagen', 'Santander', 'PANDORA', 'Skoda'];
  const brands2 = ['LEGO', 'Shopee', 'Panasonic', 'adidas', 'CAPAROL', 'Fiverr', 'BMW', 'eon'];

  const containerStagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="min-h-screen bg-pure-white text-royal-blue flex flex-col justify-center items-center py-32 px-8 overflow-hidden relative z-10 border-t-2 border-pale-blue">
       <motion.div 
         initial="hidden"
         whileInView="show"
         viewport={{ once: true, margin: "-100px" }}
         variants={containerStagger}
         className="w-full flex-col flex items-center justify-center gap-12 mb-32 md:mb-40 opacity-80 max-w-7xl mx-auto"
       >
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-16 lg:gap-x-20">
            {brands1.map(brand => (
               <motion.div variants={itemAnim} key={brand} className="flex flex-col items-center gap-4 saturate-0 hover:saturate-100 transition-all mix-blend-multiply hover:opacity-100 cursor-pointer">
                   <span className="text-2xl md:text-4xl font-bebas font-normal whitespace-nowrap">{brand}</span>
                   <span className="text-royal-blue text-2xl font-black leading-none">+</span>
               </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-16 lg:gap-x-20 mt-4">
            {brands2.map(brand => (
               <motion.div variants={itemAnim} key={brand} className="flex flex-col items-center gap-4 saturate-0 hover:saturate-100 transition-all mix-blend-multiply hover:opacity-100 cursor-pointer">
                   <span className="text-2xl md:text-3xl font-bebas font-normal uppercase whitespace-nowrap">{brand}</span>
                   <span className="text-royal-blue text-2xl font-black leading-none">+</span>
               </motion.div>
            ))}
          </div>
       </motion.div>

       <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8 }}
         className="text-center mt-auto"
       >
         <h2 className="text-4xl md:text-6xl font-bebas font-normal mb-10 leading-[1.1] uppercase">Working With<br/>The Bravest Brands</h2>
         <button className="border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-pure-white transition-colors rounded-full px-10 py-5 text-sm uppercase tracking-widest font-bold font-barlow">
           Our Work For Brands
         </button>
       </motion.div>
    </section>
  );
}

function Rightsholders() {
  const rh1 = ['NY JETS', 'McLaren', 'NBA', 'LA LAKERS', 'Chicago Bulls'];
  const rh2 = ['BVB Dortmund', 'USA Basketball', 'World Netball', 'CONCACAF'];

  const containerStagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemAnim = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="min-h-screen bg-pale-blue text-royal-blue flex flex-col justify-center items-center py-32 px-8 overflow-hidden relative z-10 border-t border-pure-white">
       <motion.div 
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8 }}
         className="text-center mb-32 md:mb-40"
       >
         <h2 className="text-4xl md:text-6xl font-bebas font-normal mb-10 leading-[1.1] uppercase">Working With<br/>The Biggest Rightsholders</h2>
         <button className="border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-pure-white transition-colors rounded-full px-10 py-5 text-sm uppercase tracking-widest font-bold font-barlow">
           Our Work For Rightsholders
         </button>
       </motion.div>

       <motion.div 
         initial="hidden"
         whileInView="show"
         viewport={{ once: true, margin: "-100px" }}
         variants={containerStagger}
         className="w-full flex-col flex items-center justify-center gap-12 opacity-80 max-w-7xl mx-auto"
       >
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 lg:gap-x-16">
            {rh1.map(rh => (
               <motion.div variants={itemAnim} key={rh} className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                   <div className="h-16 flex items-center justify-center px-4 border border-royal-blue/20 rounded-lg bg-pure-white hover:bg-pure-white/80 transition-colors">
                      <span className="text-lg md:text-2xl font-bebas font-normal whitespace-nowrap uppercase">{rh}</span>
                   </div>
               </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 lg:gap-x-16 mt-4">
            {rh2.map(rh => (
               <motion.div variants={itemAnim} key={rh} className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                   <div className="h-16 flex items-center justify-center px-4 border border-royal-blue/20 rounded-lg bg-pure-white hover:bg-pure-white/80 transition-colors">
                      <span className="text-lg md:text-2xl font-bebas font-normal whitespace-nowrap uppercase">{rh}</span>
                   </div>
               </motion.div>
            ))}
          </div>
       </motion.div>
    </section>
  );
}

function Athletes() {
  return (
    <section className="min-h-screen bg-deep-navy text-pure-white flex items-center w-full py-24 px-8 md:px-12 border-t border-royal-blue/20 overflow-hidden relative z-10">
      <div className="flex flex-col lg:flex-row w-full max-w-[90rem] mx-auto items-center gap-12 lg:gap-24">
        <motion.div 
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="w-full lg:w-1/2 relative bg-deep-navy group overflow-hidden aspect-[4/3] md:aspect-square flex-shrink-0 border border-royal-blue/30"
        >
           <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop" alt="Athlete" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
           <div className="absolute top-8 left-8 md:top-12 md:left-12">
             <h3 className="text-xl md:text-2xl font-barlow font-bold tracking-widest text-gold-accent drop-shadow-2xl uppercase">SAM KERR</h3>
           </div>
           <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-end gap-3 md:gap-4">
             <span className="text-5xl md:text-7xl font-light text-pure-white drop-shadow-lg leading-none text-gold-accent">+</span>
             <h3 className="text-5xl md:text-8xl font-bebas font-normal text-pure-white drop-shadow-2xl leading-none">LEGO</h3>
           </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="w-full lg:w-1/2 flex flex-col items-start gap-10"
        >
          <h2 className="text-5xl md:text-7xl font-bebas font-normal leading-[1.1] uppercase">Working With The <br className="hidden lg:block"/> Best Athletes & <br className="hidden lg:block"/> Personalities</h2>
          <button className="border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-royal-blue transition-colors rounded-full px-10 py-5 text-sm font-bold uppercase tracking-widest font-barlow">
            How we work with athletes & personalities
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function Results() {
  return (
    <section className="min-h-screen bg-pure-white text-royal-blue flex items-center w-full py-24 px-8 md:px-12 border-t border-pale-blue overflow-hidden relative z-10">
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-[90rem] mx-auto items-center gap-12 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-start gap-10"
        >
          <h2 className="text-5xl md:text-7xl font-bebas font-normal leading-[1.1] uppercase">To Deliver Results</h2>
          <h3 className="text-2xl md:text-3xl font-barlow font-bold tracking-tight text-mid-grey leading-snug">SPORTFIVE & EA SPORTS: a new era of gaming</h3>
          <button className="border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-pure-white transition-colors rounded-full px-10 py-5 text-sm uppercase tracking-widest font-bold font-barlow">
            Find out more
          </button>
          <a href="#" className="font-barlow font-bold border-b-2 border-royal-blue pb-1 mt-4 hover:text-deep-navy hover:border-deep-navy transition-colors uppercase tracking-widest text-sm">
             Show All Success Stories
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative bg-deep-navy aspect-video lg:aspect-[4/3] group overflow-hidden flex-shrink-0 border border-pale-blue"
        >
           <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" alt="Gaming" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-deep-navy/40 backdrop-blur-md flex items-center justify-center border-2 border-pure-white cursor-pointer hover:scale-110 hover:bg-royal-blue hover:border-royal-blue transition-all duration-300 group/play">
                 <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-pure-white border-b-[10px] border-b-transparent ml-2 group-hover/play:scale-110 transition-transform"></div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  )
}

function Magazine() {
  return (
    <section className="min-h-[70vh] bg-pale-blue text-royal-blue flex flex-col items-center justify-center py-32 px-8 border-t border-pure-white relative z-10 overflow-hidden">
      <motion.div 
         initial={{ opacity: 0, scale: 0.9 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         className="flex items-center justify-center w-full mb-20 gap-4 md:gap-8 flex-wrap"
      >
         <span className="text-6xl md:text-8xl lg:text-[10rem] font-bebas font-normal whitespace-nowrap">BEYOND</span>
         <span className="text-royal-blue text-5xl md:text-7xl lg:text-9xl font-black mt-[-0.1em]">»</span>
         <span className="text-6xl md:text-8xl lg:text-[10rem] font-bebas font-normal whitespace-nowrap">THE MATCH</span>
      </motion.div>
      <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8, delay: 0.2 }}
         className="text-center"
      >
         <h2 className="text-3xl md:text-5xl font-barlow font-bold mb-12 tracking-tight leading-loose text-mid-grey">
           Explore More In The SPORTFIVE<br/>Magazine
         </h2>
         <button className="border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-pure-white transition-colors rounded-full px-10 py-5 text-sm font-bold tracking-widest uppercase font-barlow">
           Explore the Magazine
         </button>
      </motion.div>
    </section>
  )
}



export default function Home() {
  return (
    <>
      <SharedBrandOverlay />
      
      <PinnedHero />
      <Hero />
      <Brands />
      <Rightsholders />
      <Athletes />
      <Results />
      <Magazine />
      <Footer />
    </>
  );
}
