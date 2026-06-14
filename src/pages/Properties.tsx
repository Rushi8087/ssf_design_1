import React from 'react';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';

export default function Properties() {
  const properties = [
    { title: "Soccer 60", type: "Owned IP", launch: "2027", desc: "A revolutionary 60-minute football format designed for the TikTok generation, featuring high-intensity rules and live biometrics." },
    { title: "DOTA Open", type: "Partner IP", launch: "Active", desc: "Premium esports tournament series executed across the MENA region with multi-million dollar prize pools." },
    { title: "Camp With The Champ", type: "Owned IP", launch: "Active", desc: "Exclusive masterclasses bringing fans and amateur athletes into direct training camps with global sporting icons." },
    { title: "Champions United", type: "Owned IP", launch: "2026", desc: "An elite pre-season exhibition tournament bringing Europe's top football clubs to the Middle East." },
    { title: "International Kabaddi League", type: "Managed IP", launch: "Active", desc: "Commercial & broadcast management for the rapidly growing contact sport, driving expansion into Western markets." },
    { title: "Pickleball League", type: "Acquired IP", launch: "2026", desc: "A premium franchised league capitalizing on the world's fastest-growing racket sport with celebrity ownership." },
    { title: "Dubai Sports Expo", type: "Owned IP", launch: "Annual", desc: "The premier B2B summit connecting global sports technology, investors, and rightsholders in the UAE." }
  ];

  return (
    <>
      <PageHeader 
         title="Properties" 
         subtitle="Our portfolio of owned, operated, and managed intellectual properties redefining modern sports consumption."
      />
      
      <section className="py-24 px-8 bg-black relative border-t-2 border-royal-blue/20 min-h-screen">
         <div className="max-w-7xl mx-auto lg:ml-64 flex flex-col gap-12">
            {properties.map((prop, i) => (
               <motion.div 
                 key={prop.title}
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.6 }}
                 className="flex flex-col md:flex-row border border-pure-white/10 bg-deep-navy/30 overflow-hidden group cursor-pointer hover:border-royal-blue/40 transition-colors"
               >
                 <div className="w-full md:w-2/5 bg-deep-navy p-8 flex flex-col justify-between border-r border-pure-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-royal-blue/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    <div className="relative z-10 flex gap-4 mb-16">
                       <span className="bg-pure-white text-royal-blue text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-sm">{prop.type}</span>
                       <span className="border border-pure-white/30 text-pure-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-sm">Launch: {prop.launch}</span>
                    </div>
                    <h2 className="relative z-10 text-4xl md:text-5xl font-bebas text-pure-white uppercase tracking-wide">{prop.title}</h2>
                 </div>
                 <div className="w-full md:w-3/5 p-8 md:p-12 flex items-center justify-start bg-black/20">
                    <p className="font-barlow text-mid-grey text-lg md:text-xl leading-relaxed max-w-2xl group-hover:text-pure-white transition-colors">
                      {prop.desc}
                    </p>
                 </div>
               </motion.div>
            ))}
         </div>
      </section>

      <Footer />
    </>
  );
}
