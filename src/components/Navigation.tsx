import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export function Navigation({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (b: boolean) => void }) {
  return (
    <>
      <div className="fixed top-0 right-0 w-[18px] h-full bg-royal-blue z-[60] border-l border-pure-white/20 shadow-lg" />

      <div 
        className="fixed top-6 right-10 md:top-8 md:right-12 z-[100] cursor-pointer bg-deep-navy/40 backdrop-blur-sm p-2 rounded-md hover:bg-royal-blue transition-colors border border-pure-white/10"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
           {isOpen ? <X className="text-pure-white" size={28} /> : <Menu className="text-pure-white" size={28} />}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
           <div className="fixed inset-0 z-[55] flex">
              <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 exit={{ opacity: 0 }}
                 className="flex-1 bg-deep-navy/60 backdrop-blur-sm cursor-pointer" 
                 onClick={() => setIsOpen(false)} 
              />
              
              <motion.div 
                 initial={{ x: '100%' }} 
                 animate={{ x: 0 }} 
                 exit={{ x: '100%' }}
                 transition={{ type: 'tween', ease: [0.25, 1, 0.5, 1], duration: 0.5 }}
                 className="w-full md:w-[60vw] lg:w-[45vw] xl:w-[40vw] h-full bg-royal-blue text-pure-white overflow-y-auto pt-24 px-8 md:px-16 pb-12 flex flex-col justify-between absolute right-[18px] shadow-2xl border-l border-pure-white/20"
              >
                 <div>
                   <p className="text-sm font-barlow font-bold mb-8 uppercase tracking-widest text-pure-white/60">SPORT SPIRIT FED</p>
                   <ul className="text-4xl md:text-5xl font-bebas font-normal flex flex-col gap-6 mb-16 uppercase">
                      <li><Link to="/" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-deep-navy hover:translate-x-2 transition-all duration-300 block">Home</Link></li>
                      <li><Link to="/about" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-deep-navy hover:translate-x-2 transition-all duration-300 block">About SSF</Link></li>
                      <li><Link to="/services" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-deep-navy hover:translate-x-2 transition-all duration-300 block">What We Do</Link></li>
                      <li><Link to="/properties" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-deep-navy hover:translate-x-2 transition-all duration-300 block">Properties</Link></li>
                      <li><Link to="/invest" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-deep-navy hover:translate-x-2 transition-all duration-300 block">Invest</Link></li>
                   </ul>

                   <ul className="text-xl md:text-2xl font-barlow font-bold tracking-tight flex flex-col gap-4 text-pure-white/90">
                      <li><Link to="/leadership" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-deep-navy transition-colors block">Leadership</Link></li>
                      <li><Link to="/sportscast" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-deep-navy transition-colors block">SportsCast Global</Link></li>
                      <li><Link to="/contact" onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-deep-navy transition-colors block">Contact</Link></li>
                   </ul>
                 </div>

                 <div className="mt-16">
                   <div className="flex flex-wrap gap-4 mb-12 font-barlow">
                      <Link to="/invest" onClick={() => setIsOpen(false)} className="bg-pure-white hover:bg-deep-navy text-royal-blue hover:text-pure-white rounded-full px-10 py-5 text-sm font-bold uppercase tracking-widest transition-colors">
                        Invest Now
                      </Link>
                      <Link to="/contact" onClick={() => setIsOpen(false)} className="border-2 border-pure-white hover:bg-deep-navy hover:border-deep-navy text-pure-white rounded-full px-10 py-5 text-sm font-bold uppercase tracking-widest transition-colors">
                        Contact
                      </Link>
                   </div>
                 </div>
              </motion.div>
           </div>
        )}
      </AnimatePresence>
    </>
  )
}
