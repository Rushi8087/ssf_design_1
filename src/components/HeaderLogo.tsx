import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export function HeaderLogo() {
  const { pathname } = useLocation();
  
  if (pathname === '/') return null;

  return (
    <div className="fixed top-8 left-8 md:top-10 md:left-12 z-[70] pointer-events-none">
       <div className="flex flex-col items-start origin-top-left drop-shadow-md lg:scale-100 scale-75">
         <h1 className="text-[6rem] md:text-[9rem] lg:text-[11rem] font-bebas font-normal tracking-wider text-pure-white leading-none uppercase m-0 p-0 hover:text-royal-blue transition-colors">
           <a href="/" className="pointer-events-auto">SSF</a>
         </h1>
       </div>
    </div>
  );
}
