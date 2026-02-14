import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Toolbox, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Electrolux Commercial Laundry Repair & Spare Parts India | Sunshine Equipments",
  description: "Authorized Electrolux industrial laundry service provider in India. Genuine spare parts, certified technicians, and AMCs for Electrolux washers and dryers.",
};

export default function ElectroluxRepair() {
  return (
    <div className="relative min-h-screen bg-white pt-24 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="mb-4 inline-block font-black uppercase tracking-[0.3em] text-brand-orange text-xs text-center w-full underline decoration-brand-orange/20">Authorized Brand Specialist</span>
          <h1 className="text-5xl lg:text-7xl font-black text-brand-blue text-center mb-8 tracking-tighter">
            Electrolux <br />
            <span className="text-gradient-orange italic lowercase">Repair Experts.</span>
          </h1>
          <p className="text-xl text-brand-blue/70 text-center mb-16 max-w-2xl mx-auto font-medium">
            Maintain the integrity of your Electrolux professional equipment with our certified engineering team and 100% genuine spare parts.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
             <BrandFeature 
               icon={<ShieldCheck size={32} />} 
               title="Certified Engineering" 
               desc="Our team is trained in Electrolux global standards for diagnostics."
             />
             <BrandFeature 
               icon={<Toolbox size={32} />} 
               title="Genuine OEM Parts" 
               desc="Direct access to the Electrolux supply chain for original parts."
             />
             <BrandFeature 
               icon={<CheckCircle2 size={32} />} 
               title="Warranty Preserved" 
               desc="Our authorized services ensure your machine warranty stays intact."
             />
          </div>

          <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2">
                <h2 className="text-3xl font-black text-brand-blue mb-6">Electrolux Specialized Support</h2>
                <p className="text-brand-blue/60 mb-6 font-medium leading-relaxed">
                   We handle everything from the newest high-efficiency Electrolux Professional washers to legacy industrial units. Our technicians use proprietary diagnostic tools to pinpoint issues quickly.
                </p>
                <button className="bg-brand-blue text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-premium hover:bg-slate-900 transition-all">
                   Book Electrolux Service
                </button>
             </div>
             <div className="md:w-1/2 rounded-[2rem] overflow-hidden shadow-premium border-[8px] border-white">
                <Image 
                  src="/service_installation_1770032188025.png" 
                  alt="Electrolux Service" 
                  width={600} 
                  height={400} 
                  className="w-full object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandFeature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-premium hover:shadow-orange transition-all group text-center">
       <div className="mb-6 text-brand-orange group-hover:scale-110 transition-transform flex justify-center">
          {icon}
       </div>
       <h3 className="text-xl font-black text-brand-blue mb-3">{title}</h3>
       <p className="text-sm font-medium text-brand-blue/50">{desc}</p>
    </div>
  );
}
