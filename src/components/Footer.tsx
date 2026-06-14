import React from 'react';
import { Plus } from 'lucide-react';

export function Footer() {
  const sections = ["News & Insights", "Partnership Opportunities", "Our Sports", "Our Locations"];

  return (
    <>
    <footer className="bg-deep-navy text-pure-white py-24 md:py-32 px-8 md:px-12 relative z-10 border-t border-royal-blue/20">
       <div className="max-w-[80rem] mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-32">
          <div className="w-full lg:w-1/3 flex flex-col gap-10">
             <h2 className="text-5xl md:text-7xl font-bebas font-normal uppercase">Stay Up-To-Date</h2>
             <div className="flex flex-wrap gap-4 font-barlow">
               <button className="border-2 border-pure-white text-pure-white hover:bg-royal-blue hover:border-royal-blue transition-colors rounded-full px-10 py-5 w-max text-sm font-bold tracking-widest uppercase">Contact</button>
               <button className="border-2 border-pure-white bg-pure-white text-royal-blue hover:bg-transparent hover:text-pure-white transition-colors rounded-full px-10 py-5 w-max text-sm font-bold tracking-widest uppercase">Newsletter</button>
             </div>
          </div>
          
          <div className="w-full lg:w-2/3 flex flex-col w-full">
             {sections.map((section, idx) => (
               <div key={section} className={`flex justify-between items-center py-8 ${idx !== 0 ? 'border-t border-royal-blue/20' : ''} cursor-pointer hover:text-royal-blue transition-colors group`}>
                  <span className="text-2xl md:text-4xl font-bebas font-normal">{section}</span>
                  <Plus className="w-8 h-8 md:w-10 md:h-10 text-pure-white/50 group-hover:text-royal-blue group-hover:rotate-90 transition-all duration-300" />
               </div>
             ))}
          </div>
       </div>
    </footer>
    <footer className="bg-black text-pure-white py-16 px-8 relative z-20 border-t border-pure-white/10 border-b-[16px] border-b-royal-blue">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bebas font-normal mb-6 leading-none">SSF<br/>SPORT SPIRIT FED</h2>
            <p className="text-pure-white/60 font-barlow text-sm font-bold tracking-widest uppercase">© {new Date().getFullYear()} SSF. All Rights Reserved.</p>
          </div>
          <div className="flex gap-16 font-barlow text-sm font-bold tracking-widest uppercase">
             <div className="flex flex-col gap-4">
                <span className="cursor-pointer hover:text-royal-blue transition-colors">Instagram</span>
                <span className="cursor-pointer hover:text-royal-blue transition-colors">LinkedIn</span>
                <span className="cursor-pointer hover:text-royal-blue transition-colors">Twitter</span>
             </div>
             <div className="flex flex-col gap-4">
                <span className="cursor-pointer hover:text-royal-blue transition-colors">Imprint</span>
                <span className="cursor-pointer hover:text-royal-blue transition-colors">Privacy Policy</span>
                <span className="cursor-pointer hover:text-royal-blue transition-colors">Terms of Service</span>
             </div>
          </div>
       </div>
    </footer>
    </>
  );
}
