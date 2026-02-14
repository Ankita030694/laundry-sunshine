import Image from "next/image";

export default function WhatsAppWidget() {
  return (
    <a 
      href="https://wa.me/919711112950" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group active:scale-90 transition-transform"
    >
      <div className="relative">
        <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-20"></div>
        <div className="relative flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-premium border border-slate-100">
           <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width={20} height={20} />
           <span className="text-[11px] font-black text-brand-blue uppercase tracking-tight">Support</span>
        </div>
      </div>
    </a>
  );
}
