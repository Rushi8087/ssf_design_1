import React from 'react';
import { Footer } from '../components/Footer';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <PageHeader 
         title="Contact" 
         subtitle="Connect with our global hubs to explore commercial partnerships, investment opportunities, or media syndication."
      />
      
      <section className="py-24 px-8 bg-black relative border-t-2 border-royal-blue/20 min-h-screen">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:ml-64">
           
           <div className="w-full lg:w-1/2 flex flex-col gap-16 relative">
              <div>
                <span className="text-royal-blue font-barlow font-bold tracking-widest uppercase text-sm mb-4 block">Global Headquarters</span>
                <h3 className="text-4xl md:text-5xl font-bebas text-pure-white uppercase mb-4">Dubai, UAE</h3>
                <p className="font-barlow text-mid-grey text-lg leading-relaxed max-w-sm mb-8">
                  SSF Tower, Media City<br/>
                  PO Box 12345<br/>
                  Dubai, United Arab Emirates
                </p>
                <div className="flex flex-col gap-4 font-barlow text-sm font-bold tracking-widest uppercase text-pure-white/70">
                   <a href="mailto:info@sportspiritfed.com" className="hover:text-royal-blue transition-colors w-max">info@sportspiritfed.com</a>
                   <a href="tel:+97100000000" className="hover:text-royal-blue transition-colors w-max">+971 00 000 000</a>
                </div>
              </div>

              <div>
                <span className="text-royal-blue font-barlow font-bold tracking-widest uppercase text-sm mb-4 block">Social Ecosystem</span>
                <div className="flex gap-8 font-barlow text-sm font-bold tracking-widest uppercase text-pure-white/70">
                   <a href="#" className="hover:text-royal-blue transition-colors">LinkedIn</a>
                   <a href="#" className="hover:text-royal-blue transition-colors">Instagram</a>
                   <a href="#" className="hover:text-royal-blue transition-colors">Twitter (X)</a>
                </div>
              </div>
           </div>

           <div className="w-full lg:w-1/2">
              <div className="bg-deep-navy/40 border border-pure-white/10 p-10 md:p-14">
                 <h2 className="text-3xl font-bebas text-pure-white uppercase mb-8">Send an Enquiry</h2>
                 <form className="flex flex-col gap-6 font-barlow">
                    <div className="flex flex-col gap-2">
                       <label className="text-xs font-bold tracking-widest uppercase text-pure-white/70">Enquiry Type</label>
                       <div className="relative">
                         <select className="w-full bg-black/50 border border-pure-white/20 p-4 text-pure-white focus:outline-none focus:border-royal-blue transition-colors appearance-none cursor-pointer">
                            <option>Commercial Partnership / Sponsorship</option>
                            <option>Investment & Acquisitions</option>
                            <option>Media Rights & Broadcasting</option>
                            <option>Careers</option>
                            <option>General Enquiry</option>
                         </select>
                         <ArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-pure-white/50 w-5 h-5 pointer-events-none" />
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="flex flex-col gap-2">
                         <label className="text-xs font-bold tracking-widest uppercase text-pure-white/70">First Name</label>
                         <input type="text" className="bg-black/50 border border-pure-white/20 p-4 text-pure-white focus:outline-none focus:border-royal-blue transition-colors" />
                       </div>
                       <div className="flex flex-col gap-2">
                         <label className="text-xs font-bold tracking-widest uppercase text-pure-white/70">Last Name</label>
                         <input type="text" className="bg-black/50 border border-pure-white/20 p-4 text-pure-white focus:outline-none focus:border-royal-blue transition-colors" />
                       </div>
                    </div>

                    <div className="flex flex-col gap-2">
                       <label className="text-xs font-bold tracking-widest uppercase text-pure-white/70">Email Address</label>
                       <input type="email" className="bg-black/50 border border-pure-white/20 p-4 text-pure-white focus:outline-none focus:border-royal-blue transition-colors" />
                    </div>

                    <div className="flex flex-col gap-2">
                       <label className="text-xs font-bold tracking-widest uppercase text-pure-white/70">Message</label>
                       <textarea rows={4} className="bg-black/50 border border-pure-white/20 p-4 text-pure-white focus:outline-none focus:border-royal-blue transition-colors resize-none" />
                    </div>

                    <button type="button" className="bg-pure-white text-royal-blue hover:bg-royal-blue hover:text-pure-white transition-colors font-bold uppercase tracking-widest py-5 mt-4">
                      Submit Enquiry
                    </button>
                 </form>
              </div>
           </div>

         </div>
      </section>

      <Footer />
    </>
  );
}
