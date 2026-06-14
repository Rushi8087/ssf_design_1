import React from 'react';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';

export default function Invest() {
  const opportunities = [
    { title: "Franchise Ownership", desc: "Acquire founding rights in closed-league IPs like the upcoming Pickleball League or Soccer 60." },
    { title: "IP Incubation Fund", desc: "Direct capital injection into early-stage sports formats with high broadcast multiples." },
    { title: "Media Rights Syndication", desc: "Co-invest in the acquisition of tier-1 broadcast rights for emerging markets." },
    { title: "Venture Capital", desc: "Strategic equity in sports-tech platforms and fan engagement tools managed by SSF." },
    { title: "Real Estate & Venue", desc: "Public-Private partnerships for sports infrastructure development in the UAE." },
    { title: "Athlete Impact Funds", desc: "Investing alongside tier-1 athletes into sustainable and commercial brand vehicles." },
  ];

  return (
    <>
      <PageHeader 
         title="Invest" 
         subtitle="Access exclusive, high-yield alternative assets within the global sports ecosystem alongside institutional partners."
      />
      
      <section className="py-24 px-8 bg-deep-navy relative border-t-2 border-royal-blue/20">
         <div className="max-w-7xl mx-auto lg:ml-64 flex flex-col md:flex-row gap-16">
            <div className="w-full lg:w-1/2">
               <h2 className="text-4xl md:text-5xl font-bebas text-pure-white uppercase mb-8">The Sports Asset Class</h2>
               <p className="font-barlow text-mid-grey text-lg leading-relaxed mb-6">
                 Sports franchises and IP rights have consistently outperformed traditional equities over the last decade. They represent highly defensive, non-correlated assets driven by structural tailwinds in media consumption and live experiences.
               </p>
               <p className="font-barlow text-mid-grey text-lg leading-relaxed">
                 SSF offers private equity, sovereign wealth funds, and UHNWIs curated access to this asset class, applying institutional rigor to sports investing.
               </p>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="bg-black/50 p-8 border border-pure-white/10">
                  <h3 className="font-bebas text-3xl text-royal-blue mb-6 uppercase">Investment Criteria</h3>
                  <ul className="space-y-4 font-barlow text-pure-white/80">
                    <li className="flex gap-4">
                      <span className="text-royal-blue font-bold">»</span> 
                      Proprietary or highly defensible IP rights
                    </li>
                    <li className="flex gap-4">
                      <span className="text-royal-blue font-bold">»</span> 
                      Clear path to global broadcast syndication
                    </li>
                    <li className="flex gap-4">
                      <span className="text-royal-blue font-bold">»</span> 
                      Gen-Z audience capture mechanics
                    </li>
                    <li className="flex gap-4">
                      <span className="text-royal-blue font-bold">»</span> 
                      Geographic scalability outside origin market
                    </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      <section className="py-24 px-8 bg-pure-white w-full border-t border-pale-blue">
         <div className="max-w-7xl mx-auto lg:ml-64">
             <h2 className="text-4xl md:text-6xl font-bebas text-royal-blue uppercase mb-16">Opportunity Types</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {opportunities.map((opp, i) => (
                  <motion.div 
                    key={opp.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                    className="flex flex-col"
                  >
                     <div className="h-1 w-12 bg-deep-navy mb-6" />
                     <h3 className="text-2xl font-bebas text-deep-navy uppercase mb-4 tracking-wide">{opp.title}</h3>
                     <p className="font-barlow text-deep-navy/70 text-base leading-relaxed">{opp.desc}</p>
                  </motion.div>
               ))}
             </div>
         </div>
      </section>

      <section className="py-24 px-8 bg-black">
         <div className="max-w-7xl mx-auto lg:ml-64 bg-deep-navy/40 border border-pure-white/10 p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bebas text-pure-white uppercase mb-8">Initiate Dialogue</h2>
            <p className="font-barlow text-mid-grey mb-10 max-w-2xl text-lg">
               To view current prospectuses and perform due diligence on active assets, please submit a mutual Non-Disclosure Agreement (NDA) request.
            </p>
            <form className="flex flex-col gap-6 max-w-xl font-barlow">
               <div className="flex flex-col gap-2">
                 <label className="text-xs font-bold tracking-widest uppercase text-pure-white/70">Institutional / Individual Name</label>
                 <input type="text" className="bg-black/50 border border-pure-white/20 p-4 text-pure-white focus:outline-none focus:border-royal-blue transition-colors" />
               </div>
               <div className="flex flex-col gap-2">
                 <label className="text-xs font-bold tracking-widest uppercase text-pure-white/70">Corporate Email</label>
                 <input type="email" className="bg-black/50 border border-pure-white/20 p-4 text-pure-white focus:outline-none focus:border-royal-blue transition-colors" />
               </div>
               <div className="flex flex-col gap-2">
                 <label className="text-xs font-bold tracking-widest uppercase text-pure-white/70">Investment Focus</label>
                 <select className="bg-black/50 border border-pure-white/20 p-4 text-pure-white/80 focus:outline-none focus:border-royal-blue transition-colors appearance-none">
                    <option>Select Focus...</option>
                    <option>Franchise M&A</option>
                    <option>Venture Capital</option>
                    <option>Media Rights</option>
                 </select>
               </div>
               <button type="button" className="bg-royal-blue text-pure-white hover:bg-pure-white hover:text-royal-blue transition-colors font-bold uppercase tracking-widest py-5 mt-4">
                 Request Prospectus
               </button>
            </form>
         </div>
      </section>

      <Footer />
    </>
  );
}
