import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-48 md:pt-64 pb-24 px-8 bg-black w-full relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-start px-4 md:px-0 lg:ml-64">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
         >
           <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bebas font-normal text-pure-white leading-[0.9] uppercase tracking-wide">
             {title}
             <div className="h-2 md:h-3 w-32 bg-royal-blue mt-4" />
           </h1>
           {subtitle && (
              <p className="font-barlow text-mid-grey text-lg md:text-xl md:text-2xl mt-8 max-w-2xl font-bold tracking-tight">
                {subtitle}
              </p>
           )}
         </motion.div>
      </div>
    </section>
  );
}
