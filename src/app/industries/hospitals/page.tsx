import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Laundry Equipment for Hospitals & Healthcare | Sunshine Equipments",
  description: "Hygienic, high-capacity laundry solutions for hospitals and healthcare facilities. Certified installations, infection control, and AMC support in India.",
};

export default function HospitalsLaundry() {
  return (
    <div className="relative min-h-screen bg-white pt-24 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="mb-4 inline-block font-black uppercase tracking-[0.3em] text-brand-orange text-xs text-center w-full">Sanitized & Reliable</span>
          <h1 className="text-5xl lg:text-7xl font-black text-brand-blue text-center mb-8 tracking-tighter">
            Healthcare Laundry <br />
            <span className="text-gradient-orange italic text-4xl lg:text-6xl lowercase">Infrastructure.</span>
          </h1>
          <p className="text-xl text-brand-blue/70 text-center mb-16 max-w-2xl mx-auto font-medium">
            In healthcare, laundry isn't just about cleaning—it's about disinfection. We provide barrier washers and specialized equipment to prevent cross-contamination.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-black text-brand-blue tracking-tight text-right">Infection Control Standards</h2>
              <div className="space-y-4">
                <Feature text="Barrier washers for total hygiene" />
                <Feature text="Thermal disinfection cycles" />
                <Feature text="Programmable cycles for different linen types" />
                <Feature text="Reduced risk of cross-contamination" />
                <Feature text="Compliance with healthcare standards" />
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-premium border-[12px] border-white ring-1 ring-slate-100 order-1 md:order-2">
              <Image 
                src="/service_installation_1770032188025.png" 
                alt="Hospital Laundry Setup" 
                width={800} 
                height={600} 
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>

          <div className="bg-brand-blue p-12 rounded-[3.5rem] shadow-premium text-white mb-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 h-full w-1/4 bg-brand-orange/10 clip-path-slant"></div>
             <div className="relative z-10 grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 border-r border-white/10 last:border-0">
                  <Activity size={40} className="text-brand-orange mx-auto mb-4" />
                  <h3 className="text-xl font-black mb-2">99.9% Uptime</h3>
                  <p className="text-sm opacity-60">Critical care support</p>
                </div>
                <div className="text-center p-6 border-r border-white/10 last:border-0">
                  <ShieldCheck size={40} className="text-brand-orange mx-auto mb-4" />
                  <h3 className="text-xl font-black mb-2">CE Certified</h3>
                  <p className="text-sm opacity-60">Global safety standards</p>
                </div>
                <div className="text-center p-6 last:border-0">
                   <div className="h-10 w-10 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black">20</div>
                   <h3 className="text-xl font-black mb-2">Years Exp</h3>
                   <p className="text-sm opacity-60">Hospitality experts</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 justify-end">
      <span className="text-lg font-bold text-brand-blue/70 italic text-right">{text}</span>
      <CheckCircle2 className="text-brand-orange mt-1 shrink-0" size={20} />
    </div>
  );
}
