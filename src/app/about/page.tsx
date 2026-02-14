import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, Award, Users, Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Sunshine Equipments Co Inc - 25 Years of Laundry Excellence",
  description: "Learn about Sunshine Equipment's 25-year journey in providing industrial laundry solutions across India. Founded by Rraj Kumar Nangia.",
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sunshine Equipment Co Inc",
    "url": "https://sunshine-laundry.com/",
    "logo": "https://sunshine-laundry.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/sunshineequipments",
      "https://www.instagram.com/sunshineequipments"
    ],
    "founder": {
      "@type": "Person",
      "name": "Rraj Kumar Nangia"
    },
    "foundingDate": "2000",
    "description": "Authorized dealer of global laundry brands like Girbau, Electrolux, and Maxi. Expert installation, AMC, and spare parts across India since 2000."
  };

  return (
    <div className="relative min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background Blobs */}
      <div className="blob top-[-5%] right-[-5%] transform-gpu scale-75 opacity-30"></div>
      <div className="blob bottom-[10%] left-[-5%] rotate-12 transform-gpu opacity-20 scale-75"></div>

      <main>
        {/* About Hero Section */}
        <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16 animate-fade-in">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="h-px w-10 bg-brand-orange"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange">Trust & Heritage</span>
              </div>
              <h1 className="text-5xl font-black leading-[1.1] tracking-tighter text-brand-blue lg:text-7xl mb-10">
                Trusted Laundry <br />
                <span className="text-gradient-orange italic">Partner Since 2000.</span>
              </h1>
              <p className="text-lg font-medium leading-relaxed text-brand-blue/70">
                Founded in 2000, Sunshine Equipment Co. Inc. has become a trusted name in commercial laundry solutions across India. Our mission is simple: to deliver premium equipment, expert installation, and dependable after-sales support while building lasting client relationships based on trust and quality.
              </p>
            </div>

            {/* Asymmetrical Image/Stats Grid */}
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-12 xl:col-span-7">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-premium aspect-[16/9] bg-slate-100 border-[10px] border-white">
                  <Image 
                    src="/hero_laundry_1770031915184.png" 
                    alt="Industrial Excellence" 
                    fill 
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 text-white">
                    <span className="text-4xl font-black block mb-1">2,500+</span>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Installations Nationwide</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-12 xl:col-span-5 grid grid-cols-2 gap-5">
                <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-orange transition-all hover:-translate-y-1">
                  <Award className="text-brand-orange mb-3" size={32} />
                  <span className="text-xl font-black text-brand-blue block leading-tight">Elite Partner</span>
                  <span className="text-[9px] uppercase font-black tracking-widest text-brand-blue/40">Authorized Dealer</span>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-brand-blue text-white flex flex-col items-center text-center group hover:bg-slate-900 shadow-premium transition-all hover:-translate-y-1">
                  <Users className="text-brand-orange mb-3" size={32} />
                  <span className="text-xl font-black block leading-tight">Expert Support</span>
                  <span className="text-[9px] uppercase font-black tracking-widest opacity-40">On-Call Engineers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Brands Integration */}
        <section className="bg-slate-50 py-20 rounded-[3.5rem] mx-4 border border-slate-200/50">
          <div className="container mx-auto px-6 text-center">
            <span className="mb-4 inline-block font-black uppercase tracking-[0.3em] text-brand-orange text-[10px]">Global Excellence</span>
            <h3 className="text-3xl font-black text-brand-blue mb-12 tracking-tight">Authorized Dealers of World-Class Technology</h3>
            <div className="flex flex-wrap justify-center gap-10 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
               {["Girbau", "Electrolux", "Maxi", "Lapaow", "Pros Parts"].map((brand) => (
                 <span key={brand} className="text-2xl font-black tracking-tighter text-brand-blue px-6">{brand}</span>
               ))}
            </div>
            <p className="max-w-3xl mx-auto mt-12 text-base font-medium text-brand-blue/60 leading-relaxed">
              As an authorized dealer of global brands like <b>Lapaow, Pros Parts, Girbau, Electrolux, and Maxi</b>, we bring world-class technology to businesses of all sizes—from hotels and hospitals to laundromats—helping them boost efficiency, minimize downtime, and maximize productivity.
            </p>
          </div>
        </section>

        {/* CEO Founder Message Section */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 relative">
                 <div className="rounded-[3rem] overflow-hidden shadow-premium relative z-10 border-[12px] border-white">
                    <div className="aspect-[4/5] bg-slate-200 relative">
                       <div className="absolute inset-0 flex items-center justify-center">
                          <Image 
                            src="/hero_laundry_1770031915184.png" 
                            alt="Mr. Rraj Kumar Nangia" 
                            fill 
                            className="object-cover grayscale"
                          />
                       </div>
                    </div>
                 </div>
                 <div className="absolute top-[15%] left-[-10%] h-[110%] w-[110%] rounded-[4rem] bg-brand-orange/5 -z-10 rotate-3"></div>
                 <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl shadow-premium border border-slate-100 max-w-[240px]">
                    <h4 className="text-lg font-black text-brand-blue mb-1">Rraj Kumar Nangia</h4>
                    <span className="text-[10px] uppercase font-black tracking-widest text-brand-orange">Founder & Visionary</span>
                    <div className="mt-4 flex gap-1">
                       {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-brand-orange text-brand-orange" />)}
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-7 pt-10">
                <Quote size={48} className="text-brand-orange mb-8 opacity-20" />
                <h3 className="text-3xl lg:text-4xl font-black text-brand-blue mb-10 tracking-tight leading-tight">
                  "Our goal was simple: to make commercial laundry solutions <span className="text-brand-orange italic underline decoration-brand-orange/20 decoration-4">stress-free and reliable.</span>"
                </h3>
                
                <div className="space-y-8 text-base font-medium text-brand-blue/70 leading-relaxed">
                  <p>
                    When I founded this company, my goal was simple: to make commercial laundry solutions stress-free, reliable, and accessible for every business. Over the years, I’ve seen how the right equipment and consistent after-sales support can transform operations for hotels, hospitals, laundromats, and institutions.
                  </p>
                  <p>
                    What sets us apart is our commitment to partnership, not just supply. We don’t stop at selling machines; we walk alongside our clients through installation, maintenance, spare parts, and ongoing improvements. This approach has helped us build relationships based on trust and performance rather than transactions.
                  </p>
                  <p className="font-bold text-brand-blue italic p-6 bg-slate-50 rounded-2xl border-l-4 border-brand-orange">
                    As we continue to grow, my promise to you remains the same: quality equipment, expert support, and service that truly cares about your success.
                  </p>
                </div>
              </div>
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
