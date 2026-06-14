import React from 'react';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';

export default function Leadership() {
  const leaders = [
    {
      name: "Mohammad Saif",
      role: "Co-Founder & CEO",
      bio: "A visionary architect of global sports ecosystems, Mohammad has spent over two decades engineering commercial frameworks that bridge Middle Eastern capital with Western sports IPs. His expertise lies in identifying undervalued assets and transforming them into globally syndicated broadcast products.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Adil Memon",
      role: "Co-Founder & President",
      bio: "Adil brings institutional rigor to sports investing and operational execution. With a background in M&A restructuring within the entertainment sector, he leads SSF's proprietary IP incubation, driving rapid monetization and scaling formats like Soccer 60 and the DOTA Open.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <>
      <PageHeader 
         title="Leadership" 
         subtitle="Decades of collective experience driving commercial outcomes at the absolute pinnacle of global sports and entertainment."
      />
      
      <section className="py-24 px-8 bg-black relative border-t-2 border-royal-blue/20 min-h-screen">
         <div className="max-w-7xl mx-auto lg:ml-64 flex flex-col gap-24">
            {leaders.map((leader, i) => (
               <motion.div 
                 key={leader.name}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2, duration: 0.8 }}
                 className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
               >
                 <div className="w-full lg:w-5/12 aspect-[4/5] relative overflow-hidden group">
                    <img 
                       src={leader.img} 
                       alt={leader.name} 
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 border-4 border-royal-blue/30 scale-95 group-hover:scale-100 transition-transform duration-500" />
                 </div>
                 <div className="w-full lg:w-7/12 flex flex-col justify-center">
                    <span className="text-royal-blue font-barlow font-bold tracking-widest uppercase text-sm mb-4">{leader.role}</span>
                    <h2 className="text-5xl md:text-7xl font-bebas text-pure-white uppercase tracking-wide mb-8">{leader.name}</h2>
                    <p className="font-barlow text-mid-grey text-xl leading-relaxed">
                      {leader.bio}
                    </p>
                    
                    <div className="mt-12 flex gap-6">
                      <button className="border border-pure-white text-pure-white hover:bg-pure-white hover:text-black transition-colors rounded-full px-8 py-3 text-xs uppercase tracking-widest font-bold font-barlow">
                        Full Biography
                      </button>
                    </div>
                 </div>
               </motion.div>
            ))}
         </div>
      </section>

      <Footer />
    </>
  );
}
