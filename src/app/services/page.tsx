import type { Metadata } from "next";
import { Phone, Mail, ArrowUpRight, Cog, ShieldCheck, Settings2, ClipboardList, Activity, Truck, Hotel, Hospital, GraduationCap, Building2, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Laundry Services | Installation, AMC & Repair India",
  description: "Comprehensive laundry services for hotels & hospitals. Expert installation, AMC plans, and genuine spare parts across India.",
};

export default function Services() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Laundry Equipment Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sunshine Equipment Co Inc",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "304, 3rd Floor, Gupta Palace, Rajouri Garden",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110027",
        "addressCountry": "IN"
      }
    },
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Laundry Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installation & Commissioning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Maintenance & Repair Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Annual Maintenance Contracts"
          }
        }
      ]
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background Blobs */}
      <div className="blob top-[-5%] left-[-10%] transform-gpu scale-75 opacity-20"></div>
      <div className="blob bottom-[20%] right-[-10%] rotate-90 transform-gpu opacity-30 scale-75"></div>

      <main>
        {/* Services Hero Section */}
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl animate-fade-in mb-16">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="h-px w-10 bg-brand-orange"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange">Excellence in Engineering</span>
              </div>
              <h1 className="text-5xl font-black leading-[1.1] tracking-tighter text-brand-blue lg:text-7xl mb-8">
                Bring Innovation <br />
                <span className="text-gradient-orange italic text-4xl lg:text-6xl lowercase">to Your Company.</span>
              </h1>
              <p className="text-lg font-medium leading-relaxed text-brand-blue/70">
                Keep your operations running smoothly with our certified technicians, genuine spare parts, and fast after-sales support across India.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                icon={<Settings2 size={24} />} 
                title="Installation & Commissioning" 
                desc="Our certified technicians ensure proper installation, testing, and calibration of equipment for safe operation, maximum efficiency, and long-term reliability."
              />
              <ServiceCard 
                icon={<Activity size={24} />} 
                title="Maintenance & Repair Services" 
                desc="We offer fast diagnostics, on-site repairs, and preventive maintenance to reduce breakdowns and keep your laundry running smoothly."
              />
              <ServiceCard 
                icon={<Truck size={24} />} 
                title="Genuine Spare Parts Supply" 
                desc="We stock and supply original manufacturer-approved spare parts to ensure optimal performance, safety, and extended machine life."
              />
              <ServiceCard 
                icon={<ClipboardList size={24} />} 
                title="Laundry Setup Consultation" 
                desc="End-to-end guidance for planning new laundry setups, optimizing workflow, selecting the right machines, and reducing operational costs."
              />
              <ServiceCard 
                icon={<ShieldCheck size={24} />} 
                title="Annual Maintenance Contracts" 
                desc="Customised service plans with regular inspections, priority support, and scheduled servicing to avoid unexpected downtime."
              />
              <ServiceCard 
                icon={<Cog size={24} />} 
                title="Rapid Fault Diagnosis & PM" 
                desc="We implement proactive inspection schedules to detect and resolve potential issues early, preventing unexpected breakdowns."
              />
            </div>
          </div>
        </section>

        {/* Workflow/Process Section */}
        <section className="bg-brand-blue py-20 rounded-[3.5rem] mx-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-full w-1/4 bg-brand-orange/10 clip-path-slant opacity-30"></div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="mb-16">
              <div className="flex flex-col items-center justify-center gap-1 mb-6">
                {"Simple Reliable Ontime everytime".split(" ").map((word, i) => (
                  <span key={i} className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-orange leading-tight">{word}</span>
                ))}
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight">Our Four-Step Delivery Process</h3>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <ProcessStep 
                num="01" 
                title="Consultation & Analysis" 
                desc="Understanding your requirements" 
              />
              <ProcessStep 
                num="02" 
                title="Product Selection" 
                desc="Tailored equipment solutions" 
              />
              <ProcessStep 
                num="03" 
                title="Delivery & Installation" 
                desc="Timely, expert setup" 
              />
              <ProcessStep 
                num="04" 
                title="After-Sales Support" 
                desc="Reliable ongoing service" 
              />
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="mb-16 flex flex-col items-center text-center">
              <span className="mb-4 inline-block font-black uppercase tracking-[0.3em] text-brand-orange text-[10px]">Market Presence</span>
              <h3 className="text-4xl font-black text-brand-blue tracking-tight">Industries We Serve</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <IndustryBox icon={<Hotel size={32} />} name="Hotels & Resorts" />
              <IndustryBox icon={<Hospital size={32} />} name="Hospitals & Healthcare" />
              <IndustryBox icon={<GraduationCap size={32} />} name="Educational Institutions" />
              <IndustryBox icon={<Building2 size={32} />} name="Laundromats" />
              <IndustryBox icon={<Building size={32} />} name="Government Bodies" />
            </div>
          </div>
        </section>

        {/* Bottom Conversion Section */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="container mx-auto px-6">
             <div className="glass p-12 lg:p-16 rounded-[3rem] shadow-premium flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/40 border border-slate-100">
                <div className="max-w-xl text-center lg:text-left">
                  <h4 className="text-3xl lg:text-4xl font-black text-brand-blue mb-4 tracking-tighter">Reliable Commercial Laundry Support</h4>
                  <p className="text-lg font-medium text-brand-blue/60">Expert Installation, Service & Maintenance for Your Laundry Equipment</p>
                </div>
                <button className="whitespace-nowrap px-10 py-5 bg-brand-orange text-white rounded-2xl font-black text-lg shadow-orange hover:-translate-y-1 transition-all active:scale-95">
                  Connect with an Expert
                </button>
             </div>
          </div>
        </section>

        {/* Contact Strip */}
        <section className="bg-brand-blue py-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 h-full w-1/3 bg-brand-orange/20 clip-path-slant z-0"></div>
          <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-white text-center lg:text-left">
               <h4 className="text-3xl font-black mb-3 tracking-tighter">Ready to Scale Your Operations?</h4>
               <p className="text-lg opacity-60 font-medium">Get a personalized audit of your current laundry facility.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="tel:+919711112950" className="flex items-center gap-3.5 bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white group hover:bg-brand-orange hover:border-brand-orange transition-all">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-brand-orange group-hover:text-white transition-colors"><Phone size={20} /></div>
                <div>
                  <span className="block text-[9px] uppercase font-black opacity-50 tracking-widest">Call Our Office</span>
                  <span className="text-base font-bold">+91 9711112950</span>
                </div>
              </a>
              <a href="mailto:info@sunshine-laundry.com" className="flex items-center gap-3.5 bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white group hover:bg-brand-orange hover:border-brand-orange transition-all">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-brand-orange group-hover:text-white transition-colors"><Mail size={20} /></div>
                <div>
                  <span className="block text-[9px] uppercase font-black opacity-50 tracking-widest">Email Inquiry</span>
                  <span className="text-base font-bold">info@sunshine-laundry.com</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-premium transition-all hover:-translate-y-1.5 duration-300">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
        {icon}
      </div>
      <h4 className="text-xl font-black text-brand-blue mb-3 group-hover:text-brand-orange transition-colors">{title}</h4>
      <p className="text-sm font-medium text-brand-blue/50 leading-relaxed group-hover:text-brand-blue/70 transition-colors">{desc}</p>
    </div>
  );
}

function ProcessStep({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-left flex flex-col justify-end min-h-[160px]">
      <span className="absolute top-6 right-6 text-2xl font-black text-brand-orange/40">{num}</span>
      <h4 className="text-lg font-black mb-1.5 leading-tight">{title}</h4>
      <p className="text-xs font-medium opacity-50">{desc}</p>
    </div>
  );
}

function IndustryBox({ icon, name }: { icon: React.ReactNode, name: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-premium hover:-translate-y-1 transition-all group cursor-default">
      <div className="mb-4 text-brand-blue group-hover:text-brand-orange transition-colors">
        {icon}
      </div>
      <span className="text-xs font-black text-brand-blue text-center uppercase tracking-tighter opacity-70 group-hover:opacity-100">{name}</span>
    </div>
  );
}
