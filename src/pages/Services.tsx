import React from 'react';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';

export default function Services() {
  const verticals = [
    { num: "01", title: "Media Rights Sales", desc: "Monetizing broadcast footprints globally across linear and OTT." },
    { num: "02", title: "Sponsorship & Naming Rights", desc: "Brokering high-value brand partnerships and stadium naming." },
    { num: "03", title: "IP Development", desc: "Creating net-new tournament formats and leagues." },
    { num: "04", title: "Ticketing & Hospitality", desc: "Premium matchday experiences and global ticketing strategy." },
    { num: "05", title: "Talent Management", desc: "Commercial representation for elite athletes." },
    { num: "06", title: "Broadcast Production", desc: "End-to-end live match production via SportsCast Global." },
    { num: "07", title: "Digital & Social Strategy", desc: "Audience growth and short-form content syndication." },
    { num: "08", title: "Esports Integration", desc: "Bridging traditional sports IPs into the gaming ecosystem." },
    { num: "09", title: "Licensing & Merchandising", desc: "Global retail distribution and digital collectibles." },
    { num: "10", title: "Venue Management", desc: "Optimizing stadium operations and commercial output." },
    { num: "11", title: "Investor Advisory", desc: "Consulting PE and sovereign funds on sports acquisitions." },
    { num: "12", title: "Sports Tourism", desc: "Integrating sports IPs with regional tourism boards." },
  ];

  return (
    <>
      <PageHeader 
         title="What We Do" 
         subtitle="12 specialized business verticals engineered to extract maximum commercial value from the global sports ecosystem."
      />
      
      <section className="py-24 px-8 bg-deep-navy relative border-t-2 border-royal-blue/20 min-h-screen">
         <div className="max-w-7xl mx-auto lg:ml-64">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {verticals.map((vert, i) => (
                  <motion.div 
                    key={vert.num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                    className="bg-black/40 border border-pure-white/10 p-8 hover:bg-royal-blue/10 hover:border-royal-blue/50 transition-all group flex flex-col h-full"
                  >
                     <span className="text-royal-blue font-bebas text-4xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">{vert.num}</span>
                     <h3 className="text-2xl font-bebas text-pure-white uppercase mb-4 tracking-wide">{vert.title}</h3>
                     <p className="font-barlow text-mid-grey text-base leading-relaxed mt-auto">{vert.desc}</p>
                  </motion.div>
               ))}
             </div>
         </div>
      </section>

      <Footer />
    </>
  );
}
