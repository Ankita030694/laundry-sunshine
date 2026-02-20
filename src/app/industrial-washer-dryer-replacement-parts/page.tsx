"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, Star, ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp, Settings, Wrench, HardHat, Package, Box, ShieldAlert, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "The Industrial Parts Ecosystem" },
    { id: "oem-vs-generic", title: "OEM vs. Generic: The Engineering Logic" },
    { id: "washer-critical-parts", title: "Critical Washer-Extractor Components" },
    { id: "dryer-thermal-parts", title: "Industrial Dryer Thermal Assemblies" },
    { id: "bearing-seal-kits", title: "Precision Bearing & Seal Engineering" },
    { id: "vfd-controls", title: "Frequency Inverters & Digital Control" },
    { id: "heating-elements", title: "Immersion Heaters & Ignition Modules" },
    { id: "belts-pulleys", title: "Drive Train & Transmission Logistics" },
    { id: "valves-sensors", title: "Water Inlets, Drains & Flow Sensors" },
    { id: "door-interlocks", title: "Safety Interlocks & Gasket Integrity" },
    { id: "chemical-pump-parts", title: "Dosing System Diaphragms & Tubes" },
    { id: "motor-assemblies", title: "Industrial Motor & Brush Restoration" },
    { id: "inventory-logistics", title: "Just-In-Time Inventory Management" },
    { id: "part-identification", title: "Scientific Part Identification Service" },
    { id: "warranty-compliance", title: "Warranty & Manufacturing Standards" },
    { id: "preventative-stocking", title: "Strategic Spare Part Stocking Logic" },
    { id: "hospitality-priority", title: "Parts Priority for 5-Star Hospitality" },
    { id: "laundromat-bulk-orders", title: "Wholesale Parts for Laundromat Chains" },
    { id: "global-sourcing", title: "Global Sourcing of Rare Components" },
    { id: "faqs", title: "Industrial Parts FAQ Section" },
];

const faqs = [
    {
        question: "Why should I use OEM parts instead of cheaper generic alternatives?",
        answer: "OEM (Original Equipment Manufacturer) parts are designed to the exact tolerances and material specifications of the machine. Generic parts often use sub-standard materials that can fail prematurely, potentially causing catastrophic damage to other expensive components like motors or shafts."
    },
    {
        question: "How do I identify the correct part number for my older machine?",
        answer: "Every industrial machine has a data plate (usually on the rear or inside the door). You need the Model Number and Serial Number. Our technical team uses these to access the manufacturer's original exploded-view diagrams to identify the precise part version for your specific unit."
    },
    {
        question: "What is the typical lead time for rare industrial parts in India?",
        answer: "At Sunshine, we maintain a massive inventory of common wear-and-tear parts for immediate dispatch. For rare or specialized components that need to be imported, our global logistics network typically delivers within 10 to 14 business days."
    },
    {
        question: "Do you provide installation support for the parts you sell?",
        answer: "Yes, we providing full-service technical support. You can either buy the part for your own in-house team to install, or you can book one of our certified technicians to perform the replacement on-site, ensuring it is calibrated correctly."
    },
    {
        question: "What are 'Critical Spares' and why should I stock them?",
        answer: "Critical spares are parts that are likely to fail over time and will cause a total machine shutdown (e.g., drain valves, door gaskets, heater elements). Keeping these on-site reduces your downtime from days to minutes."
    },
    {
        question: "Do you offer bulk discounts for laundromat chains?",
        answer: "Absolutely. We provide wholesale pricing structures for multi-unit operators and laundromat chains that require consistent supplies of consumables and wear-parts across multiple locations."
    },
    {
        question: "Are there warranties on replacement electronic boards?",
        answer: "Yes, all our electronic control boards come with a 90-day manufacturer's warranty. However, please note that electrical parts must be installed by a certified professional to prevent damage from power surges or incorrect wiring."
    },
    {
        question: "Can you source parts for discontinued laundry brands?",
        answer: "In many cases, yes. We have a vast network of international suppliers and can often find 'new old stock' or high-quality certified refurbished parts for brands that are no longer in active production."
    },
    {
        question: "How do I know if a bearing kit is genuine?",
        answer: "Genuine industrial bearing kits come in branded packaging with holographic security seals and include the specific high-temperature seals and lubricants required for that machine's torque profile."
    },
    {
        question: "Why choose Sunshine as my primary parts supplier?",
        answer: "We are the authorized parts partner for the world's leading brands in India. When you buy from us, you get technical certainty, genuine quality, and the backing of our 20-year engineering heritage."
    }
];

const reviews = [
    {
        name: "Arun Shourie",
        role: "Maintenance Head, Imperial Hotel",
        body: "Sunshine is our most reliable partner. When our main washer's brain died, they had the OEM control board delivered and installed within 24 hours. Their inventory depth is unmatched in NCR.",
        rating: 5
    },
    {
        name: "Deepak Chopra",
        role: "Owner, SpinKing Laundromats",
        body: "I save thousands by using their bulk spare parts program. Their heater elements actually last twice as long as the cheap ones I used to buy. Quality pays for itself in the long run.",
        rating: 5
    },
    {
        name: "Sneha Kapoor",
        role: "Facility Manager, GreenHospital",
        body: "The technical team helped us identify a rare seal for a 15-year-old machine that other vendors said was impossible to fix. Truly expert knowledge of industrial laundry history.",
        rating: 5
    },
    {
        name: "Rajiv Bajaj",
        role: "Operations Director, Manufacturing Hub",
        body: "Transparent pricing and fast shipping. Their parts website is easy to navigate, and their support staff actually understands the engineering, not just the part numbers.",
        rating: 5
    },
    {
        name: "Prakash Jha",
        role: "Technician, Urban Dry Cleaners",
        body: "I only buy my bearing kits from Sunshine. The tolerances are perfect, and the included instruction sheets help my team perform the replacement faster. 10/10 service.",
        rating: 5
    }
];

export default function ReplacementPartsPage() {
    const router = useRouter();
    const websiteUrl = "https://sunshine-laundry.com/industrial-washer-dryer-replacement-parts";
    const brandName = "Sunshine Equipments";

    const schemaGraph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://sunshine-laundry.com/#organization",
                "name": brandName,
                "url": "https://sunshine-laundry.com/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://sunshine-laundry.com/sunshine_logo.svg",
                    "width": "300",
                    "height": "200"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9711112950",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": ["en", "hi"]
                },
                "sameAs": [
                    "https://www.facebook.com/sunshinelaundry",
                    "https://www.instagram.com/sunshinelaundry"
                ]
            },
            {
                "@type": "WebPage",
                "@id": websiteUrl,
                "url": websiteUrl,
                "name": "Industrial Washer & Dryer Replacement Parts | Genuine OEM Spares",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Authorized supplier of genuine replacement parts for commercial laundry equipment. We stock bearings, motors, valves, and boards for all major industrial brands.",
                "breadcrumb": { "@id": websiteUrl + "#breadcrumb" },
                "inLanguage": "en-US"
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunshine-laundry.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Replacement Parts", "item": websiteUrl }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Precision Parts Logistics | Genuine Spares, Expert Support",
                "datePublished": "2024-02-17",
                "dateModified": "2024-02-17",
                "publisher": { "@id": "https://sunshine-laundry.com/#organization" },
                "image": {
                    "@type": "ImageObject",
                    "url": "https://sunshine-laundry.com/hero-bg.jpg"
                }
            },
            {
                "@type": "Product",
                "@id": websiteUrl + "#product",
                "name": "Genuine Industrial Laundry Spare Parts",
                "description": "OEM replacement components for industrial washers and dryers, including Electrolux, Speed Queen, and Huebsch. Certified quality and technical support.",
                "brand": { "@type": "Brand", "name": brandName },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": reviews.length.toString()
                },
                "review": reviews.map(r => ({
                    "@type": "Review",
                    "author": { "@type": "Person", "name": r.name },
                    "reviewBody": r.body,
                    "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() }
                }))
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/hero-bg.jpg" alt="Industrial Replacement Parts" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-brand-orange px-4 py-2 rounded-full mb-8 shadow-lg">
                        <Package size={16} className="text-white" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Authorized OEM Parts Partner</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight px-4">
                        Precision Parts Logistics <br className="hidden md:block" />
                        <span className="text-brand-orange italic font-medium">Genuine Spares, Expert Support</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-4xl mx-auto font-medium">
                        Don't compromise your multi-million dollar infrastructure with sub-standard components. We supply certified OEM parts for the world's leading industrial laundry brands.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-brand-orange text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            Search Our Inventory <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Replacement Parts", href: "/industrial-washer-dryer-replacement-parts" }]} />
            </div>

            <StickyMobileTOC sections={sections} />

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="grid grid-cols-12 gap-6 lg:gap-12">
                    {/* Left: TOC */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle: Content */}
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-slate-700 leading-relaxed font-medium">
                        <section id="intro" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Industrial Parts Ecosystem: Why Quality is Non-Negotiable</h2>
                            <p>
                                In the industrial laundry world, the machine is the primary asset. It is a complex assembly of high-torque mechanics, high-voltage electrics, and sensitive digital logic. When a single component in this ecosystem fails, the entire asset becomes a liability. The temptation to use "cheaper" generic parts is a well-known pitfall for many operators. However, at Sunshine Equipments, we view this through the lens of engineering physics. A machine is only as strong as its weakest component.
                            </p>
                            <p>
                                Industrial machines operate under extreme conditions—high temperatures, chemical exposure, and massive centrifugal forces. A replacement part that looks "close enough" but uses a slightly lower grade of steel or a less heat-resistant compound will fail. Worse, it will often fail in a way that damages more expensive components. A sub-standard drain valve can lead to a flood; a generic belt can snap and destroy a motor fan; a cheap bearing can score a through-shaft, turning a 5,000 rupee repair into a 100,000 rupee disaster.
                            </p>
                            <p>
                                We are the authorized parts gateway for India's leading laundry facilities. Our mission is to provide the "Technical Certainty" that only comes with genuine OEM components. We don't just sell parts; we provide the logistical and engineering support required to keep your facility running at its peak design capacity. From 5-star hotels to massive commercial laundromats, we are the trusted supply chain for the professionals who understand that quality is the ultimate cost-saver.
                            </p>
                        </section>

                        <section id="oem-vs-generic" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">OEM vs. Generic: The Engineering Logic</h2>
                            <p>
                                The "logic" of the OEM part is rooted in the original design process. When a manufacturer like Electrolux or Speed Queen designs a machine, every component is stress-tested to match the specific duty-cycle of that unit. The metallurgy of the shaft, the chemical composition of the seals, and the electrical resistance of the coils are all harmonized. A generic manufacturer, by definition, is guessing. They lack the original engineering drawings and the proprietary material specs.
                            </p>
                            <p>
                                Furthermore, using non-OEM parts almost always voids your machine's remaining warranty and can even be a violation of industrial safety certifications. If a fire starts in a dryer because a generic high-limit thermostat failed, your insurance company will look for any reason to deny the claim. Genuine parts are your insurance. They provide the peace of mind that comes with knowing your machine is still operating within its original safety and performance envelope.
                            </p>
                        </section>

                        <section id="washer-critical-parts" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Critical Washer-Extractor Components</h2>
                            <p>
                                A washer-extractor is a mechanical beast. Its most critical "wear" components are the ones subject to the highest stress. This includes the suspension system—the large industrial shock absorbers and springs that keep the machine stable during a 1000 RPM spin. If these fatigue, the resulting vibration will destroy the frame and the bearings. We stock heavy-duty suspension kits for all major industrial models, designed to restore that "like-new" stability.
                            </p>
                            <p>
                                We also focus on the hydraulic components. Industrial drain valves are usually powered by electric motors or air pressure. They must provide a perfect, watertight seal thousands of times a day. Even a tiny leak represents a massive waste of water and heated energy over a year. Our inventory of genuine MDB and Depend-O-Drain valves ensures that your machine is as efficient as the day it was installed.
                            </p>
                        </section>

                        <section id="dryer-thermal-parts" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Industrial Dryer Thermal Assemblies</h2>
                            <p>
                                Dryers are all about thermal management. The most common failures occur in the ignition and heating sections. We supply genuine ignition modules, flame sensors, and spark igniters that are essential for safe, reliable operation. A failing flame sensor is not just a nuisance; it's a safety risk. Our OEM sensors are designed to respond with millisecond precision to any combustion anomaly.
                            </p>
                            <p>
                                We also stock the critical "Airflow Logic" parts—blower fans, drive belts, and moisture sensors. A lint-clogged blower fan or a slipping belt will cause the dryer to run longer, wasting gas and potentially scorching the linens. By replacing these with genuine components, you ensure the dryer's airflow is exactly at the design CFM (Cubic Feet per Minute), maximizing your throughput and minimizing your utility bills.
                            </p>
                        </section>

                        <section id="bearing-seal-kits" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Precision Bearing & Seal Engineering</h2>
                            <p>
                                The basket bearings are the single most important mechanical component of a washer-extractor. They must support a massive, unbalanced load rotating at high speeds. When a seal fails and allows soapy water into the bearings, the countdown to a total mechanical failure begins. We provide complete Bearing & Seal Kits that include the high-temperature grease, the specialized water-seals, and the precision-ground bearings required for an industrial rebuild.
                            </p>
                            <p>
                                Our kits are not just loose parts; they are engineered solutions. We match the bearing tolerances specifically to the machine's RPM profile. Installing these genuine kits—ideally with our professional technical support—can add another 10,000 cycles to your machine's life. It is the most impactful mechanical maintenance you can perform.
                            </p>
                        </section>

                        <section id="vfd-controls" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Frequency Inverters & Digital Control</h2>
                            <p>
                                Modern machines are digital. The Variable Frequency Drive (VFD) is the computer that manages the motor's power. These are expensive, sensitive electronic units that can be damaged by heat or electrical surges. We are authorized suppliers for the VFD brands used by major manufacturers (e.g., Mitsubishi, Schneider, Delta). We don't just send you the box; we can provide the pre-programmed parameters for your specific machine model.
                            </p>
                            <p>
                                We also stock the main control boards, the user-interface touchscreens, and the various I/O boards that manage the sensors and valves. Buying these digital parts from an unauthorized source is a recipe for software incompatibility. Our digital parts are guaranteed to communicate perfectly with your existing machine software, ensuring all features and safety protocols remain active.
                            </p>
                        </section>

                        <section id="heating-elements" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Immersion Heaters & Ignition Modules</h2>
                            <p>
                                For electrically heated machines, the immersion heater is the primary consumer of power. Scale buildup from hard water can cause these elements to overheat and burn out. We supply high-grade Incoloy heaters that are significantly more resistant to corrosion and scale than cheap copper alternatives. Replacing a failed heater with a genuine Sunshine unit ensures your water reaches target temperature as quickly as possible.
                            </p>
                            <p>
                                For gas machines, the ignition module is the "brain" of the burner. It manages the sequence of air-purge, ignition, and flame monitoring. Our OEM modules are built with industrial-grade relays that can withstand the thousands of cycles found in a professional laundry environment, unlike generic units that often fail within months.
                            </p>
                        </section>

                        <section id="belts-pulleys" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Drive Train & Transmission Logistics</h2>
                            <p>
                                The belts and pulleys transmit massive amounts of torque. An incorrectly sized or poor-quality belt will slip, causing heat buildup and eventually melting the rubber. This can further lead to pulley wear and motor damage. We stock specific industrial-grade "V-Belts" and "Poly-V" belts from the world's top manufacturers, matched to your machine's exact pulley profile.
                            </p>
                            <p>
                                We also stock replacement pulleys and bushed hubs. If a pulley becomes "polished" from years of use, it will lose its grip even with a new belt. We help you identify these subtle wear patterns and provide the correct mechanical solution before it causes a motor failure.
                            </p>
                        </section>

                        <section id="valves-sensors" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Water Inlets, Drains & Flow Sensors</h2>
                            <p>
                                Precision is key to wash quality. If your water inlet valves are sluggish, your cycle times will increase; if your flow sensors are inaccurate, your water levels will be wrong, leading to poor cleaning or wasted chemicals. We supply industrial-grade solenoid valves and flow meters that are designed for the high-volume environment of a commercial laundry.
                            </p>
                            <p>
                                These components are often built with chemical-resistant seals to withstand the concentrated detergents used in industrial machines. By using genuine valves, you prevent the "ghost leaks" that often plague older facilities, saving you thousands on your annual utility spend.
                            </p>
                        </section>

                        <section id="door-interlocks" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Safety Interlocks & Gasket Integrity</h2>
                            <p>
                                Safety is the highest priority in our engineering logic. The door interlock is a critical safety component that prevents the machine from starting if the door is open, and from opening until the basket has stopped rotating. These interlocks use sensitive microswitches and solenoids that can fail over time. We supply genuine, certified interlocks that are guaranteed to fail-safe, protecting your staff and your business from liability.
                            </p>
                            <p>
                                We also focus on door gaskets. A leaking door gasket is not just a mess; it's a loss of heat and water. We stock high-performance EPDM and silicone gaskets that provide a perfect seal across a wide range of temperatures and chemical exposures. Replacing a worn gasket is the easiest way to improve your facility's operational hygiene and efficiency.
                            </p>
                        </section>

                        <section id="chemical-pump-parts" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Dosing System Diaphragms & Tubes</h2>
                            <p>
                                Automated dosing systems rely on peristaltic pumps. The most common wear component here is the "squeeze tube" and the internal diaphragm. If these are not replaced regularly, they will eventually split, leaking concentrated chemicals onto your machines or the floor. We supply high-grade Viton and Santoprene tubing that is designed for maximum lifespan in contact with industrial laundry chemistry.
                            </p>
                            <p>
                                We also stock the check valves and dosing injectors that prevent chemicals from siphoning back into the water supply. Keeping these small parts in top condition is essential for maintaining the "Precision Chemistry" that defines high-quality industrial laundry.
                            </p>
                        </section>

                        <section id="motor-assemblies" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Industrial Motor & Brush Restoration</h2>
                            <p>
                                The motor is the prime mover of the machine. While many modern motors are brushless, many older units still require regular brush maintenance. We supply the high-conductivity carbon brushes required for these motors, ensuring they run cool and efficient. For brushless AC motors, we stock replacement internal wind assemblies and high-grade motor bearings.
                            </p>
                            <p>
                                If a motor failure is catastrophic, we can supply complete, brand-new replacement motor assemblies. Because we source these directly from the OEM, they are guaranteed to have the correct mounting patterns and shaft sizes, making the installation a simple "plug-and-play" operation.
                            </p>
                        </section>

                        <section id="inventory-logistics" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Just-In-Time Inventory Management</h2>
                            <p>
                                Part availability is as important as part quality. We maintain a multi-million rupee inventory in our NCR warehouse hub. We use advanced inventory management software that tracks "burn rates" for common parts, ensuring we never run out of critical items like belts, valves, and gaskets. This "Just-In-Time" logic means that when you need a part, it is usually already on our shelf, ready for immediate dispatch.
                            </p>
                            <p>
                                For our contract clients, we even maintain "Shadow Stock" at their facility—a locked cabinet of critical spares that you only pay for once you use them. This eliminates lead times entirely for the most common failures, providing the ultimate in business continuity.
                            </p>
                        </section>

                        <section id="part-identification" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Scientific Part Identification Service</h2>
                            <p>
                                Identifying the correct part for an industrial machine can be incredibly complex. A machine built in 2012 might use a different drain valve than the same model built in 2014. We provide a scientific identification service. Send us a photo of the machine's data plate and the part itself, and our technical team will verify the correct OEM part number using the manufacturer's official database.
                            </p>
                            <p>
                                This service eliminates the risk of ordering the wrong part and the subsequent delays and restocking fees. We pride ourselves on getting it right the first time, every time.
                            </p>
                        </section>

                        <section id="warranty-compliance" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Warranty & Manufacturing Standards</h2>
                            <p>
                                Every part we sell is backed by a manufacturer's warranty. This is your guarantee that the part has passed rigorous quality control inspections and meets international ISO manufacturing standards. If a part fails during the warranty period, we handle the replacement process for you, providing a level of support that you will never find in the "local market" or through unauthorized vendors.
                            </p>
                        </section>

                        <section id="preventative-stocking" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Strategic Spare Part Stocking Logic</h2>
                            <p>
                                We help our clients move from "Reactive Maintenance" to "Strategic Stocking." Based on our 20 years of repair data, we provide a "Recommended Spare Parts List" (RSPL) for your specific facility. We help you identify which parts are "Show-Stoppers"—if they fail, the machine is dead—and which are "Consumables." By stocking a few thousand rupees worth of critical components, you can save lakhs in lost revenue during a breakdown.
                            </p>
                        </section>

                        <section id="hospitality-priority" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Parts Priority for 5-Star Hospitality</h2>
                            <p>
                                For our hotel and hospital partners, every minute counts. We provide a "White Glove" parts service where we handle everything from identification to same-day delivery for urgent items. We understand the pressure of hospitality deadlines, and we treat your parts request with the urgency it deserves.
                            </p>
                        </section>

                        <section id="laundromat-bulk-orders" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Wholesale Parts for Laundromat Chains</h2>
                            <p>
                                If you operate a chain of laundromats, your parts needs are predictable. We offer wholesale contract pricing for bulk orders of common wear-parts across all your locations. We can even manage the distribution for you, ensuring that each of your sites has the necessary supplies to maintain their uptime.
                            </p>
                        </section>

                        <section id="global-sourcing" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">Global Sourcing of Rare Components</h2>
                            <p>
                                For imported European or American brands, finding parts locally can be impossible. We have direct accounts with the global logistics hubs of all major manufacturers. We handle the currency exchange, the customs clearance, and the international shipping, delivering the part to your door with a single local invoice. We are your bridge to the global parts market.
                            </p>
                        </section>

                        <section id="faqs" className="mb-12 md:mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Industrial Parts FAQ Section</h2>
                            <div className="space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-8">
                                        <h3 className="text-xl font-bold text-brand-blue mb-4">{faq.question}</h3>
                                        <p className="text-slate-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-12 md:mb-20 p-6 md:p-10 bg-slate-50 rounded-2xl md:rounded-[3rem] border border-slate-100">
                            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mb-8 text-center italic">Service Review Highlights</h2>
                            <div className="grid gap-8">
                                {reviews.map((r, i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="flex gap-1 text-brand-orange mb-4">
                                            {[...Array(r.rating)].map((_, s) => <Star key={s} size={20} fill="currentColor" />)}
                                        </div>
                                        <p className="italic text-slate-700 text-lg">"{r.body}"</p>
                                        <p className="mt-6 font-bold text-slate-900 flex items-center gap-2">
                                            <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs font-black">
                                                {r.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                            {r.name}, {r.role}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </article>

                    {/* Right Column */}
                    <aside className="col-span-12 lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            {/* Sidebar CTA */}
                            <div className="bg-brand-blue text-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Box size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Parts Hotline</h3>
                                <p className="text-slate-400 mb-6 relative z-10 font-medium">
                                    Need help identifying a part? Speak to our technical inventory experts.
                                </p>
                                <button
                                    onClick={() => router.push("/contact")}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg"
                                >
                                    WhatsApp Your Part Photo <TrendingUp size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Support Infrastructure</h3>
                                <nav className="space-y-4">
                                    <Link href="/on-site-laundry-equipment-repair-gurgaon" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Wrench size={18} className="text-brand-orange" />
                                            <span className="font-bold text-slate-600 group-hover:text-blue-600 transition-colors">On-Site Repair</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/technical-support-for-laundromat-operations" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={18} className="text-brand-orange" />
                                            <span className="font-bold text-slate-600 group-hover:text-blue-600 transition-colors">Technical Support</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/high-usage-laundromat-maintenance" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Settings size={18} className="text-brand-orange" />
                                            <span className="font-bold text-slate-600 group-hover:text-blue-600 transition-colors">High-Usage Maint.</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Global Parts Desk</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Package size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Direct Parts Line</p>
                                            <a href="tel:+919711112950" className="text-sm font-bold text-slate-800 hover:text-blue-600 tracking-tight">+91 97111 12950</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Mail size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Parts Email</p>
                                            <a href="mailto:parts@sunshine-laundry.com" className="text-sm font-bold text-slate-800 hover:text-blue-600 leading-none break-all">parts@sunshine-laundry.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <CTA />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
            />
        </main>
    );
}
