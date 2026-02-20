"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, Star, ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp, Settings, Wrench, HardHat, Beaker, FlaskConical, Gauge, ShieldAlert, Award, Activity, Repeat } from "lucide-react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "The Science of Automated Dosing" },
    { id: "dosing-logic", title: "Precision Chemistry & Fabric Longevity" },
    { id: "pump-engineering", title: "Peristaltic Pump Mechanical Care" },
    { id: "calibration-science", title: "The Physics of Calibration" },
    { id: "chemical-compatibility", title: "Chemical-Resistant Material Science" },
    { id: "tubing-lifecycle", title: "Squeeze Tube Fatigue & Replacement" },
    { id: "injector-performance", title: "Check Valve & Injector Maintenance" },
    { id: "electronic-logic", title: "Digital Control & Signal Synchronization" },
    { id: "programming-optimization", title: "Wash Formula Programming Logic" },
    { id: "safety-protocols", title: "Hazardous Chemical Safety & Containment" },
    { id: "environmental-impact", title: "Eco-Friendly Dosing & Effluent Control" },
    { id: "water-quality-impact", title: "Water Hardness & Buffer Calibration" },
    { id: "remote-monitoring", title: "IoT & Remote Chemical Data Analysis" },
    { id: "staff-chemical-safety", title: "Staff Safety Training for Liquid Systems" },
    { id: "pre-rinse-mechanics", title: "Pre-Rinse & Alkali Break Mechanics" },
    { id: "bleach-neutralization", title: "Bleach Carryover & Neutralizer Care" },
    { id: "enzyme-stability", title: "Low-Temperature Enzyme Management" },
    { id: "cost-per-load", title: "Optimizing Your Cost-Per-Load (CPL)" },
    { id: "system-audit", title: "Full System Audit & Restoration" },
    { id: "faqs", title: "Chemical Dosing FAQ Section" },
];

const faqs = [
    {
        question: "Why is automated dosing better than manual chemical addition?",
        answer: "Automated dosing eliminates human error, ensuring the exact amount of chemical is delivered at the precise moment in the cycle. This guarantees consistent results, prevents fabric damage from overdosing, and reduces chemical waste by up to 30%."
    },
    {
        question: "How often should chemical pumps be calibrated?",
        answer: "We recommend professional calibration every 3 to 6 months. Over time, peristaltic tubes stretch (fatigue), which changes the flow rate. Regular calibration ensures your '100ml' dose is actually 100ml."
    },
    {
        question: "What are the signs of a failing squeeze tube?",
        answer: "The most obvious sign is chemical leaking from the pump housing. However, before it leaks, the tube will often look flattened or discolored. In high-volume sites, tubes should be replaced every 6 months as a preventative measure."
    },
    {
        question: "Can incorrect dosing damage my washing machines?",
        answer: "Yes. Overdosing of alkali or bleach can corrode stainless steel drums and destroy rubber seals. Under-dosing of softeners can lead to fabric friction that increases mechanical stress on the machine drum."
    },
    {
        question: "What is 'Check Valve' failure and why is it dangerous?",
        answer: "A check valve prevents chemicals from siphoning back into the water line or mixing in the supply manifold. If it fails, chemicals can mix prematurely, creating toxic fumes or causing skin irritation for the end-user."
    },
    {
        question: "Do you support all major chemical dispenser brands?",
        answer: "Yes, we are technical experts in Knight, Brightwell, SEKO, and Hydro dispensing systems. We provide parts, programming, and mechanical repair for all these platforms."
    },
    {
        question: "How does water hardness affect chemical dosing?",
        answer: "Hard water neutralizes detergents, requiring a higher dose to achieve the same cleaning result. We test your water hardness and adjust your 'buffer' chemicals and detergent doses to compensate, ensuring perfect cleaning without wasting money."
    },
    {
        question: "Can I monitor my chemical usage remotely?",
        answer: "Modern dosing systems include IoT connectivity. We can set up a dashboard for you that shows real-time chemical consumption, cost-per-load data, and even sends alerts if a chemical drum is nearly empty."
    },
    {
        question: "What is an 'Alkali Break' and why is it important?",
        answer: "The alkali break is the first stage of the wash where the pH is raised to open the fabric fibers. Maintenance ensures the dosing system delivers this promptly to maximize soil removal before the surfactant is added."
    },
    {
        question: "Why choose Sunshine for chemical system maintenance?",
        answer: "We bring a unique blend of mechanical engineering and chemical knowledge. We don't just fix the pump; we ensure the entire chemical 'logic' of your facility is optimized for quality and cost."
    }
];

const reviews = [
    {
        name: "Vikram Seth",
        role: "Director, WhiteLinen Laundries",
        body: "Sunshine overhauled our old dosing systems. Our chemical costs dropped by 22% in the first month because of their precise calibration. Their technical knowledge is world-class.",
        rating: 5
    },
    {
        name: "Aditi Rao",
        role: "GM, Heritage Hotel & Spa",
        body: "The quality of our towels has improved noticeably since Sunshine took over the dosing maintenance. No more yellowing or 'bleach smell'. They really understand fabric care chemistry.",
        rating: 5
    },
    {
        name: "Sanjay Gupta",
        role: "Operations Manager, CityHospital",
        body: "Safety is critical for us. Sunshine's weekly audit of our check valves and secondary containment gives me peace of mind. A very diligent and professional team.",
        rating: 5
    },
    {
        name: "Meera Nair",
        role: "Owner, EcoWash Gurgaon",
        body: "Their IoT dashboard for chemical tracking is a game-changer. I can see my cost-per-load from my phone. It helped me identify an overnight leakage that would have cost me thousands.",
        rating: 5
    },
    {
        name: "Rahul Khanna",
        role: "Laundry Consultant",
        body: "I always specify Sunshine for dosing infrastructure. They are the only vendor I've found who actually understands how to program complex multi-stage wash formulas correctly.",
        rating: 5
    }
];

export default function ChemicalDosingPage() {
    const router = useRouter();
    const websiteUrl = "https://sunshine-laundry.com/laundry-chemical-dosing-maintenance";
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
                "name": "Laundry Chemical Dosing Maintenance | Precision Calibration",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Professional maintenance and calibration for automated laundry chemical dispensing systems. Optimize costs, ensure fabric safety, and maintain perfect wash quality.",
                "breadcrumb": { "@id": websiteUrl + "#breadcrumb" },
                "inLanguage": "en-US"
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunshine-laundry.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Chemical Dosing", "item": websiteUrl }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Advanced Dosing Logic | Calibrated for Perfection",
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
                "name": "Precision Chemical Optimization Program",
                "description": "A comprehensive technical service for commercial laundry dosing systems. Includes pump calibration, formula programming, and safety valve audits.",
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
        <main className="min-h-screen bg-white font-sans text-gray-900">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 gap-4">
                        {[...Array(24)].map((_, i) => <FlaskConical key={i} size={40} className="text-blue-200" />)}
                    </div>
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-brand-orange px-4 py-2 rounded-full mb-8 shadow-lg">
                        <Droplets size={16} className="text-white animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Precision Chemistry Solutions</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight px-4 text-white">
                        Advanced Dosing Logic <br className="hidden md:block" />
                        <span className="text-brand-orange italic">Calibrated for Perfection</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100/70 mb-10 max-w-4xl mx-auto font-medium">
                        Automated dosing is the "brain" of your wash process. We provide the engineering precision required to ensure every drop of chemical delivers maximum results at minimum cost.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-brand-orange text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            Optimize Your Chemistry <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Chemical Dosing", href: "/laundry-chemical-dosing-maintenance" }]} />
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
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="intro" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Science of Automated Dosing: Beyond the Pump</h2>
                            <p>
                                In the high-stakes world of industrial laundry, chemistry is the ultimate differentiator. The difference between a grey, stiff towel and a bright, soft, premium linen is not just the machine; it is the precision of the chemical application. Automated dosing systems (ADS) are designed to deliver this precision, but they are highly sensitive mechanical and electronic units that operate in a corrosive environment.
                            </p>
                            <p>
                                At Sunshine Equipments, we view chemical dosing through the lens of pure engineering. It is a hydraulic challenge, a mechanical challenge, and a digital programming challenge. When a dosing system is neglected, it quickly loses its calibration. A pump that is supposed to deliver 150ml of detergent may only deliver 120ml due to a fatigued tube, leading to poor wash quality. Or worse, it may deliver 180ml, wasting your most expensive operational input and potentially damaging the linens.
                            </p>
                            <p>
                                We provide a "Holistic Dosing Audit" that ensures your entire chemical infrastructure is a source of profit, not a source of waste. From the metallurgy of the injectors to the digital synchronization with the washer's computer, we manage every variable. Our goal is to provide "Chemical Certainty"—the knowledge that every cycle is perfectly chemically balanced for hygiene, aesthetics, and cost-efficiency.
                            </p>
                        </section>

                        <section id="dosing-logic" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Precision Chemistry & Fabric Longevity</h2>
                            <p>
                                Every piece of linen in your facility has a finite lifecycle. The primary factor that determines this life is how you treat it in the wash. Over-alkalinity or excessive chlorine bleach carryover will "cook" the fibers, making them brittle and prone to tearing. This "chemical mechanical stress" is the leading cause of premature linen replacement for hotels and hospitals.
                            </p>
                            <p>
                                Our maintenance program focuses on "Fabric Preservation Logic." We use digital titrators to measure the pH and chemical activity at every stage of the wash. By ensuring the dosing system is perfectly calibrated and that the neutralizers are applied exactly as needed, we can extend your linen life by up to 30 percent. This represents a massive capital saving that far outweighs the cost of professional maintenance.
                            </p>
                        </section>

                        <section id="pump-engineering" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Peristaltic Pump Mechanical Care</h2>
                            <p>
                                The heart of almost every dosing system is the peristaltic pump. It works by "squeezing" a flexible tube with a rotating set of rollers. Mathematically, the flow rate depends on the tube's internal diameter and the rotation speed. However, as the tube is squeezed thousands of times, the rubber loses its elasticity (it "takes a set"). This radically changes the flow physics.
                            </p>
                            <p>
                                We perform a mechanical audit of the pump heads. We check for roller wear, motor heat, and gear-box noise. We use high-grade silicone lubricant to reduce friction between the rollers and the tube, which extends the tube life and ensures a linear flow rate. Professional pump care is the difference between a system that "guesses" and a system that "knows."
                            </p>
                        </section>

                        <section id="calibration-science" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Physics of Calibration</h2>
                            <p>
                                Calibration is not a one-time event; it is a recurring technical requirement. As chemical viscosity changes with temperature (detergent is thicker in the morning than in the afternoon), the pump's output changes. We use graduated cylinders and digital timers to perform "Volumetric Calibration."
                            </p>
                            <p>
                                We don't just trust the digital screen on the dispenser. We measure the *actual* output at the point of injection into the washer. This accounts for the resistance of the tubing runs and the "back pressure" of the washer. This scientific approach ensures that your wash formulas are actually being executed as the chemists intended.
                            </p>
                        </section>

                        <section id="chemical-compatibility" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Chemical-Resistant Material Science</h2>
                            <p>
                                Industrial laundry chemicals are high-octane liquids. Chlorine bleach will destroy standard rubber; surfactants will swell certain plastics. We use advanced material science to select the components for your system. We stock Viton and Santoprene tubes, PVDF injectors, and Hastelloy springs.
                            </p>
                            <p>
                                By matching the material to the chemical, we eliminate the frequent leaks and clogs that plague lower-quality installations. Our systems are built to thrive in a chemical environment, not just survive it.
                            </p>
                        </section>

                        <section id="tubing-lifecycle" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Squeeze Tube Fatigue & Replacement</h2>
                            <p>
                                The squeeze tube is the most critical consumable in your facility. A split tube is not just a mess; it is a major safety hazard. If a bleach tube splits, it can damage other equipment or cause chemical burns to staff. We implement a "Mandatory Lifecycle Replacement" program.
                            </p>
                            <p>
                                We track the "cycle count" of every pump and replace the tubes *before* they fail. We use premium-grade Tygon and Norprene tubing that offers the highest cycle-life in the industry. This predictive approach is the only way to operate a truly professional, high-volume laundry.
                            </p>
                        </section>

                        <section id="injector-performance" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Check Valve & Injector Maintenance</h2>
                            <p>
                                The injector is where the chemical meets the water. It contains a check valve—a small ball or diaphragm and a spring—that prevents water from back-flowing into the chemical lines. These valves frequently clog with chemical "crystallization" or lint. A clogged injector creates back-pressure that can snap your pump tubes.
                            </p>
                            <p>
                                We perform a "Flow Audit" on every injector. We deep-clean or replace the check-valve assemblies, ensuring a clear path for the chemical. This protects your pumps and ensure the chemicals are properly "atomized" as they enter the wash drum for maximum reactivity.
                            </p>
                        </section>

                        <section id="electronic-logic" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Digital Control & Signal Synchronization</h2>
                            <p>
                                The ADS (Automated Dosing System) must "hear" the signal from the washer. If the washer signals for "Detergent" but the ADS is slightly delayed, the chemical might be added after the water has already begun to drain. We use digital oscilloscopes to verify the signal integrity between the machine and the dispenser.
                            </p>
                            <p>
                                We ensure the "Signal Logic" is perfectly synchronized. This eliminates the "Chemical Lag" that causes poor wash results. We also verify the backup power systems for the ADS controllers, ensuring your wash formulas aren't lost during a power flicker.
                            </p>
                        </section>

                        <section id="programming-optimization" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Wash Formula Programming Logic</h2>
                            <p>
                                A wash formula is a recipe of time, temperature, mechanical action, and chemistry. Many facilities use "one size fits all" formulas. We provide "Custom Logic Programming." We create specific formulas for towels, bedsheets, F&B linens, and delicate garments.
                            </p>
                            <p>
                                We program "Flush" cycles to ensure one chemical is fully rinsed before the next is added (especially critical for bleach and neutralizer). This advanced programming is what produces the 5-star linen quality that our clients are known for.
                            </p>
                        </section>

                        <section id="safety-protocols" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Hazardous Chemical Safety & Containment</h2>
                            <p>
                                Safety is non-negotiable. Concentrated laundry liquid is hazardous. Our maintenance includes an audit of your secondary containment systems—the "Bundy" trays that catch leaks. We verify that all chemical lines are Properly labeled and that the safety data sheets (SDS) are current and accessible.
                            </p>
                            <p>
                                We also inspect the "Lock-Out/Tag-Out" systems for the dispensers, ensuring your staff can safely change drums without risk of a chemical spray event. A safe laundry is a productive laundry.
                            </p>
                        </section>

                        <section id="environmental-impact" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Eco-Friendly Dosing & Effluent Control</h2>
                            <p>
                                Most laundries discharge their effluent into municipal drains. Over-dosing chemicals leads to high COD (Chemical Oxygen Demand) levels, which can lead to fines and environmental damage. Our precision dosing reduces your "Chemical Footprint."
                            </p>
                            <p>
                                By using only exactly what is needed, we ensure your effluent is as clean as possible. We also help you transition to "Green Chemistry"—enzymatic detergents and oxygen-based bleaches—and optimize the ADS to handle these more sensitive formulations.
                            </p>
                        </section>

                        <section id="water-quality-impact" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Water Hardness & Buffer Calibration</h2>
                            <p>
                                Chemistry does not happen in a vacuum; it happens in water. If your water hardness changes, your chemical requirements change. We perform on-site water quality testing on every visit. If your water softener is failing, we detect it by the sudden drop in detergent efficacy.
                            </p>
                            <p>
                                We then adjust the ADS "Buffer" doses to compensate, ensuring that your wash quality remains perfect even as your utility inputs fluctuate. This "Dynamic Dosing" is the hallmark of a Sunshine-managed facility.
                            </p>
                        </section>

                        <section id="remote-monitoring" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">IoT & Remote Chemical Data Analysis</h2>
                            <p>
                                We bring the "Internet of Things" (IoT) to your laundry. Our advanced ADS units can be linked to a central server. We monitor your consumption patterns remotely. If we see a pump running for 30 seconds when the formula says 20, we know you have a partial blockage or a leaking tube before your staff even notices it.
                            </p>
                            <p>
                                This "Data-Driven Maintenance" allows us to be proactive. We often contact our clients to tell them they need a tube replacement before they experience any downtime. It is the ultimate in high-tech operational security.
                            </p>
                        </section>

                        <section id="staff-chemical-safety" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Staff Safety Training for Liquid Systems</h2>
                            <p>
                                We don't just fix machines; we train people. We provide comprehensive safety training for your staff on how to handle concentrated chemicals. We teach them the "Order of Operations" for changing drums and how to use the "Emergency Stop" features of the ADS.
                            </p>
                            <p>
                                This reduces the risk of chemical accidents and ensures your staff feels confident and safe in their working environment.
                            </p>
                        </section>

                        <section id="pre-rinse-mechanics" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Pre-Rinse & Alkali Break Mechanics</h2>
                            <p>
                                The first 5 minutes of the wash are critical. The "Pre-Rinse" removes loose soil; the "Alkali Break" prepares the fiber. If the ADS is poorly programmed, these stages are often rushed or missed. We optimize these mechanical/chemical steps to ensure the surfactant (detergent) can do its job in a "clean" and "ready" fiber.
                            </p>
                        </section>

                        <section id="bleach-neutralization" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Bleach Carryover & Neutralizer Care</h2>
                            <p>
                                Bleach is a powerful tool, but it must be fully neutralized. Any chlorine left in the fabric will yellow the linen over time and cause skin irritation for guests. We test for "Chlorine Carryover" using chemical indicators and ensure your "Sour/Neutralizer" dose is perfectly matched to the bleach dose. This is the secret to creating "Fresh, Not Chemical" smelling linens.
                            </p>
                        </section>

                        <section id="enzyme-stability" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Low-Temperature Enzyme Management</h2>
                            <p>
                                To save energy, many modern hotels use "Cold Water" detergents that rely on enzymes. Enzymes are fragile; they are destroyed by high heat or the wrong pH. We program the ADS to add enzymes at exactly the right temperature window (typically 35-45°C), ensuring you get the cleaning power you pay for while saving money on heating.
                            </p>
                        </section>

                        <section id="cost-per-load" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Optimizing Your Cost-Per-Load (CPL)</h2>
                            <p>
                                Ultimately, our work is about your bottom line. We perform a "CPL Analysis" for your facility. We calculate the exact cost of the chemicals used in every cycle. By optimizing the dosing and eliminating waste, we typically reduce a facility's total chemical spend by 15-25%. We turn your ADS into a profit-maximizing tool.
                            </p>
                        </section>

                        <section id="system-audit" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Full System Audit & Restoration</h2>
                            <p>
                                If your dosing system is old, leaking, and poorly programmed, don't buy a new one yet. We provide a full "Restoration Service." We strip the system down, replace all wear parts, re-program the logic, and perform a deep calibration. In many cases, we can restore an old ADS to better-than-new performance for a fraction of the cost of a replacement.
                            </p>
                        </section>

                        <section id="faqs" className="mb-12 md:mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Chemical Dosing FAQ Section</h2>
                            <div className="space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-8">
                                        <h3 className="text-xl font-bold text-brand-blue mb-4">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-12 md:mb-20 p-6 md:p-10 bg-slate-50 rounded-2xl md:rounded-[3rem] border border-slate-100">
                            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mb-8 text-center italic">Service Success Stories</h2>
                            <div className="grid gap-8">
                                {reviews.map((r, i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="flex gap-1 text-brand-orange mb-4">
                                            {[...Array(r.rating)].map((_, s) => <Star key={s} size={20} fill="currentColor" />)}
                                        </div>
                                        <p className="italic text-gray-700 text-lg">"{r.body}"</p>
                                        <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
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
                            <div className="bg-brand-blue text-white p-6 md:p-8 rounded-2xl md:rounded-[3rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Activity size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Chemical Audit</h3>
                                <p className="text-blue-100/80 mb-6 relative z-10 font-medium">
                                    Get an engineering audit of your dosing systems and wash results.
                                </p>
                                <button
                                    onClick={() => router.push("/contact")}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg"
                                >
                                    Book Technical Audit <Gauge size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Synergy Services</h3>
                                <nav className="space-y-4">
                                    <Link href="/lagoon-advanced-care-services" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Droplets size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Lagoon Advanced Care</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/energy-efficient-laundromat-solutions" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Zap size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Energy Efficiency</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/high-usage-laundromat-maintenance" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Repeat size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">High-Usage Care</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Technical Dosing Desk</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Beaker size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Direct Technical Line</p>
                                            <a href="tel:+919711112950" className="text-sm font-bold text-gray-800 hover:text-brand-orange tracking-tight">+91 97111 12950</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Settings size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Support Email</p>
                                            <a href="mailto:technical@sunshine-laundry.com" className="text-sm font-bold text-gray-800 hover:text-brand-orange leading-none break-all">technical@sunshine-laundry.com</a>
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
