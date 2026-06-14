import React from 'react';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';

export default function SportsCast() {
  return (
    <>
      <PageHeader 
         title="SportsCast Global" 
         subtitle="The broadcast and media production arm of SSF, engineered to deliver cinematic, multi-platform storytelling."
      />
      
      <section className="h-[70vh] w-full relative bg-black overflow-hidden flex items-center justify-center border-t-2 border-royal-blue/20">
         <motion.div 
           initial={{ scale: 1.1, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           className="absolute inset-0"
         >
           <img 
             src="https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&q=80&w=2800" 
             alt="Broadcast Camera" 
             className="w-full h-full object-cover opacity-50"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
         </motion.div>

         <div className="relative z-10 text-center max-w-4xl px-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bebas text-pure-white uppercase drop-shadow-2xl mb-8">
              Capturing the <span className="text-royal-blue">Spirit</span> of the Game
            </h2>
            <p className="font-barlow text-pure-white/80 text-xl md:text-2xl font-light">
              End-to-end production capabilities, from live OB operations to premium shoulder programming and global OTT distribution.
            </p>
         </div>
      </section>

      <section className="py-24 px-8 bg-deep-navy">
         <div className="max-w-7xl mx-auto lg:ml-64">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "Live Host Broadcasting", desc: "Tier-1 multi-camera operations for live venue feeds." },
                 { title: "Cloud Workflows", desc: "Remote production architecture minimizing carbon footprint." },
                 { title: "Data Integration", desc: "Live biometric and tactical AR graphics overlay." },
                 { title: "OTT Syndication", desc: "Direct distribution to regional and global broadcast networks." }
               ].map((svc, i) => (
                  <motion.div 
                    key={svc.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-black/30 p-8 border-t-4 border-royal-blue"
                  >
                     <h3 className="text-2xl font-bebas text-pure-white uppercase mb-4">{svc.title}</h3>
                     <p className="font-barlow text-mid-grey text-base">{svc.desc}</p>
                  </motion.div>
               ))}
             </div>
         </div>
      </section>

      <Footer />
    </>
  );
}
