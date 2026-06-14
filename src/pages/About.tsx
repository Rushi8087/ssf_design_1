import React from 'react';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';

export default function About() {
  const pillars = [
    { title: "IP Creation & Management", desc: "Developing global sports properties like Soccer 60 and DOTA Open from the ground up." },
    { title: "Commercial Strategy", desc: "Driving revenue through sophisticated broadcast rights, sponsorships, and ticketing models." },
    { title: "Media Production", desc: "In-house broadcasting via SportsCast Global, ensuring world-class viewership experiences." },
    { title: "Athlete Representation", desc: "Holistic career management and commercial optimization for elite global talent." }
  ];

  return (
    <>
      <PageHeader 
         title="About SSF" 
         subtitle="Headquartered in Dubai, SSF is a premium sports marketing, media, and investment collective shaping the next era of global entertainment."
      />
      
      <section className="py-24 px-8 bg-deep-navy relative border-t-2 border-royal-blue/20">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:ml-64">
           <div className="w-full md:w-1/2">
             <h2 className="text-3xl md:text-5xl font-bebas text-pure-white uppercase mb-8">Our Story</h2>
             <p className="font-barlow text-mid-grey text-lg leading-relaxed mb-6">
                Sport Spirit Fed (SSF) was built to challenge the traditional boundaries of sports administration and commercialization. By integrating IP creation, rights management, and media production under one roof, we eliminate fragmentation and create highly lucrative ecosystems.
             </p>
             <p className="font-barlow text-mid-grey text-lg leading-relaxed">
                Operating out of the UAE, we sit at the crossroads of global wealth and sporting passion, enabling us to bridge Eastern resources with Western market dynamics.
             </p>
           </div>
           <div className="w-full md:w-1/2 bg-black/40 p-10 border border-pure-white/10 flex flex-col justify-center">
             <div className="mb-10">
                <span className="text-royal-blue font-bebas text-2xl uppercase tracking-widest block mb-2">The Vision</span>
                <p className="font-barlow text-pure-white text-xl">To be the undisputed architectural force behind the world’s most culturally and commercially significant sporting ecosystems by 2030.</p>
             </div>
             <div>
                <span className="text-royal-blue font-bebas text-2xl uppercase tracking-widest block mb-2">The Mission</span>
                <p className="font-barlow text-pure-white text-xl">To relentlessly innovate across event creation, media dissemination, and fan engagement, maximizing value for investors, athletes, and audiences alike.</p>
             </div>
           </div>
         </div>
      </section>

      <section className="py-24 px-8 bg-pure-white w-full border-t border-pale-blue">
         <div className="max-w-7xl mx-auto lg:ml-64">
             <h2 className="text-4xl md:text-6xl font-bebas text-royal-blue uppercase mb-16">Ecosystem Pillars</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {pillars.map((pillar, i) => (
                  <motion.div 
                    key={pillar.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex flex-col border-l-4 border-royal-blue pl-6"
                  >
                     <h3 className="text-2xl md:text-3xl font-bebas text-deep-navy uppercase mb-4">{pillar.title}</h3>
                     <p className="font-barlow text-deep-navy/70 text-lg leading-relaxed max-w-sm">{pillar.desc}</p>
                  </motion.div>
               ))}
             </div>
         </div>
      </section>

      <section className="py-24 px-8 bg-royal-blue overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:24px_24px]" />
         <div className="max-w-7xl mx-auto lg:ml-64 relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
               <h2 className="text-5xl md:text-7xl font-bebas text-pure-white uppercase mb-8">The Dubai<br/>Advantage</h2>
               <p className="font-barlow text-pure-white/90 text-xl leading-relaxed font-bold tracking-tight mb-8">
                 Strategic geography meets unbridled ambition.
               </p>
               <p className="font-barlow text-pure-white/80 text-lg leading-relaxed">
                 Headquartered in the UAE, SSF benefits from a 100% tax-free enterprise environment, world-leading infrastructure, and a strategic time zone spanning Asian and European broadcast markets. Dubai provides us the agility to scale IPs faster with unparalleled governmental support for sports-based tourism and media.
               </p>
            </div>
         </div>
      </section>

      <Footer />
    </>
  );
}
