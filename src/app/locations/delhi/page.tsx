import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Laundry Machine Repair & Service in Delhi-NCR | Sunshine Equipments",
  description: "Fast, reliable industrial laundry machine repair in Delhi, Gurgaon, Noida, and Faridabad. 24/7 emergency support and genuine OEM spare parts.",
};

export default function DelhiLaundryService() {
  return (
    <div className="relative min-h-screen bg-white pt-24 pb-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-orange font-black uppercase tracking-widest text-xs">
            <MapPin size={16} />
            <span>Serving Delhi-NCR</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-brand-blue text-center mb-8 tracking-tighter">
            Industrial Laundry <br />
            <span className="text-gradient-orange italic">Repair in Delhi.</span>
          </h1>
          <p className="text-xl text-brand-blue/70 text-center mb-16 max-w-2xl mx-auto font-medium">
            Don't let a breakdown halt your business. We offer the fastest response times for commercial laundry repair across the National Capital Region.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
             <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                <h2 className="text-2xl font-black text-brand-blue mb-6">Local Support Areas</h2>
                <ul className="grid grid-cols-2 gap-4">
                   <LocationItem name="New Delhi" />
                   <LocationItem name="Gurgaon" />
                   <LocationItem name="Noida" />
                   <LocationItem name="Faridabad" />
                   <LocationItem name="Ghaziabad" />
                   <LocationItem name="Manesar" />
                </ul>
             </div>
             <div className="flex flex-col gap-6">
                <ContactBox 
                  icon={<Phone size={24} />} 
                  title="Delhi Service Hotline" 
                  value="+91 97111 12950" 
                  sub="Available 9 AM - 6 PM"
                />
                <ContactBox 
                  icon={<Clock size={24} />} 
                  title="Emergency Support" 
                  value="24/7 Priority" 
                  sub="For AMC Clients"
                />
             </div>
          </div>

          <div className="rounded-[3rem] overflow-hidden shadow-premium relative h-[400px] mb-24 border-[12px] border-white ring-1 ring-slate-100">
             <Image 
               src="/hero_laundry_1770031915184.png" 
               alt="Sunshine Equipments Delhi Office" 
               fill 
               className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent"></div>
             <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-black mb-2">Our Rajouri Garden Hub</h3>
                <p className="opacity-70 max-w-sm">Strategically located to serve South, West, and Central Delhi within 2 hours.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationItem({ name }: { name: string }) {
  return (
    <li className="flex items-center gap-2 text-brand-blue/70 font-bold italic">
      <div className="h-2 w-2 rounded-full bg-brand-orange"></div>
      {name}
    </li>
  );
}

function ContactBox({ icon, title, value, sub }: { icon: React.ReactNode, title: string, value: string, sub: string }) {
  return (
    <div className="p-8 rounded-[2rem] bg-brand-blue text-white shadow-premium flex items-center gap-6">
       <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-brand-orange">
          {icon}
       </div>
       <div>
          <span className="block text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">{title}</span>
          <span className="block text-xl font-black leading-tight">{value}</span>
          <span className="block text-xs opacity-60 mt-1">{sub}</span>
       </div>
    </div>
  );
}
