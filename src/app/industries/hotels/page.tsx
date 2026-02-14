import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Laundry Solutions for Hotels & Resorts | Sunshine Equipments",
  description: "Specialized high-capacity laundry setups for hotels and resorts. Certified installation, maintenance, and OEM parts to ensure five-star service quality.",
};

export default function HotelsLaundry() {
  return (
    <div className="relative min-h-screen bg-white pt-24 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <span className="mb-4 inline-block font-black uppercase tracking-[0.3em] text-brand-orange text-xs text-center w-full">Industries We Serve</span>
          <h1 className="text-5xl lg:text-7xl font-black text-brand-blue text-center mb-8 tracking-tighter">
            Premium Laundry <br />
            <span className="text-gradient-orange italic">for Hotels & Resorts.</span>
          </h1>
          <p className="text-xl text-brand-blue/70 text-center mb-16 max-w-2xl mx-auto font-medium">
            In the hospitality industry, clean linens are non-negotiable. We provide robust, high-efficiency laundry systems designed to handle the heavy demands of luxury hotels.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="rounded-[2.5rem] overflow-hidden shadow-premium border-[12px] border-white ring-1 ring-slate-100">
              <Image 
                src="/service_installation_1770032188025.png" 
                alt="Hotel Laundry Setup" 
                width={800} 
                height={600} 
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-brand-blue tracking-tight">Why Choose Our Hotel Solutions?</h2>
              <div className="space-y-4">
                <Feature text="High-capacity washers & dryers (up to 100kg)" />
                <Feature text="Energy and water-saving technologies" />
                <Feature text="Whisper-quiet operation for guest comfort" />
                <Feature text="24/7 priority emergency support" />
                <Feature text="Authorized spare parts for Girbau & Electrolux" />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 mb-24">
            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Optimized Workflow for Five-Star Efficiency</h2>
            <p className="text-brand-blue/60 mb-8 leading-relaxed text-center max-w-3xl mx-auto font-medium">
              We don't just supply machines; we design layouts that minimize labor costs and maximize linen life. Our experts ensure your laundry team can process thousands of items daily without bottlenecks.
            </p>
            <div className="flex justify-center">
              <button className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-orange hover:-translate-y-1 transition-all">
                Request a Facility Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="text-brand-orange mt-1 shrink-0" size={20} />
      <span className="text-lg font-bold text-brand-blue/70 italic">{text}</span>
    </div>
  );
}
