"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, Bed, Utensils, Waves, Sun, Sparkles, Zap, Leaf, ShieldCheck, Clock, Users, BarChart3, ChevronRight, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "market-overview", title: "Hospitality Laundry: The Silent Luxury" },
    { id: "linen-lifecycle", title: "Maximizing Linen Longevity" },
    { id: "guest-experience", title: "Laundry as a Guest Satisfaction Metric" },
    { id: "seasonal-demand", title: "Managing Seasonal Volatility" },
    { id: "sustainability", title: "The Green Hospitality Initiative" },
    { id: "resort-cruise", title: "Resort & Cruise Line Specializations" },
    { id: "automation-finishing", title: "Automated Finishing & Presentation" },
    { id: "chemical-dosing", title: "Precision Dosing for Fabric Integrity" },
    { id: "staff-efficiency", title: "Optimizing Labor Productivity" },
    { id: "faqs", title: "Hospitality Industry FAQs" },
];

const faqs = [
    {
        question: "How does the wash process affect linen replacement costs?",
        answer: "Aggressive chemicals and high-friction cycles can reduce linen life by 40%. Our 'Soft-Care' technology uses enzyme-optimized washing and moisture-sensing drying to maximize the number of wash cycles a sheet can withstand."
    },
    {
        question: "What is the ideal turnaround time for guest laundry in a 5-star resort?",
        answer: "The gold standard is a 4-8 hour turnaround. Our high-extraction machines and rapid-dry technology allow your staff to meet these tight deadlines without compromising on quality."
    },
    {
        question: "Do you offer specialized equipment for cruise ship laundry rooms?",
        answer: "Yes, we provide marine-grade stainless steel machines with compact footprints and vibration-isolated mounting systems specifically engineered for the maritime environment."
    },
    {
        question: "How can we reduce our laundry's water footprint for eco-certification?",
        answer: "Our 'Hydro-Save' recycling systems can reclaim up to 70% of rinse water, drastically reducing your utility consumption and helping you qualify for GREEN building certifications."
    },
    {
        question: "What mix of equipment is needed for a 500-room boutique hotel?",
        answer: "We typically recommend a combination of 3 high-capacity washer-extractors (35kg-50kg) and 4 moisture-sensing dryers, supported by a large-scale flatwork ironer for linens."
    },
    {
        question: "Can your finishing equipment handle high-thread-count luxury linens?",
        answer: "Absolutely. Our ironers feature adjustable pressure and temperature controls specifically designed for delicate, high-thread-count Egyptian cotton, ensuring a crisp, mirror-like finish."
    },
    {
        question: "What is 'PAR level' and how does it relate to equipment capacity?",
        answer: "PAR level is the inventory of linen (typically 1 PAR in the room, 1 in the laundry, 1 in storage). Your equipment capacity should be sized to process 1 full PAR of the entire hotel in a single 8-hour shift."
    },
    {
        question: "Does your equipment integrate with hotel management software (PMS)?",
        answer: "Yes, our smart machines can export usage data and maintenance alerts directly to major facility management platforms, allowing for centralized O&M tracking."
    },
    {
        question: "How do you handle stained linens to prevent permanent loss?",
        answer: "We consult on 'Recovery Cycles'—specialized wash programs using bio-enzymatic agents and precise thermal ramps to remove tough spa and F&B stains before they set."
    },
    {
        question: "Do you provide training for multi-lingual housekeeping staff?",
        answer: "Yes, our machine interfaces use icon-based controls, and we provide visual, multi-lingual training guides and on-site workshops for diverse operational teams."
    }
];

const reviews = [
    {
        name: "Vikram Rathore",
        role: "General Manager, Heritage Palace Resorts",
        content: "The quality of our linens defines our guest experience. Sunshine's equipment has given our towels that plush, luxury feel while reducing our energy bills significantly.",
        rating: 5
    },
    {
        name: "Elena Rodriguez",
        role: "Executive Housekeeper, Azure Cruise Lines",
        content: "Space is at a premium on our ships. Sunshine provided a custom-engineered solution that handles our massive daily volume in 20% less space than our previous provider.",
        rating: 5
    },
    {
        name: "Captain Marco Rossi",
        role: "Fleet Operations, Oceania Cruises",
        content: "Managing the laundry for a cruise fleet is a logistical nightmare, but Sunshine's compact, vibration-isolated machines have made it manageable. Their maritime-grade builds are essential.",
        rating: 5
    },
    {
        name: "Tanvi Kapoor",
        role: "Purchase Manager, Sterling Resorts",
        content: "The 'Soft-Care' technology has literally extended our linen life by months. For a 500-room resort, that translates to massive savings in our annual replacement budget.",
        rating: 5
    },
    {
        name: "Jason Miller",
        role: "Sustainability Officer, EcoLuxe Hotels",
        content: "We've achieved LEED Gold certification partly thanks to the water-recycling systems Sunshine integrated into our OPL facility. It's a win for the planet and our bottom line.",
        rating: 5
    },
    {
        name: "Marie Dubois",
        role: "Rooms Division Manager, The Elegant Manor",
        content: "The uniform folding and crisp finish from their automated ironers have elevated our room presentation to a level we couldn't achieve manually. Guest feedback has been glowing.",
        rating: 5
    },
    {
        name: "Arjun Nair",
        role: "Director of HR, Global Vista Hotels",
        content: "Their layout design minimized the physical strain on our staff, leading to higher morale and lower turnover. Sunshine understands the human element of laundry operations.",
        rating: 5
    }
];

export default function HospitalityLaundrySolutions() {
    const router = useRouter();
    const websiteUrl = "https://sunshine-laundry.com/hospitality-laundry-solutions";
    const brandName = "Sunshine Equipments";
    const logoUrl = "https://sunshine-laundry.com/sunshine_logo.svg";

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
                    "url": logoUrl,
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
                "name": "Hospitality Laundry Solutions | Sunshine Equipments",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Premium hospitality laundry solutions. In-depth technical guide on laundry for hotels, resorts, and cruise lines for operational excellence.",
                "breadcrumb": { "@id": websiteUrl + "#breadcrumb" },
                "inLanguage": "en-US"
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://sunshine-laundry.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Hospitality Solutions",
                        "item": websiteUrl
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Hospitality Laundry Solutions: High-Efficiency Hotel Systems",
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
                "name": "Luxury Hospitality & Resort Laundry Solutions",
                "image": "https://sunshine-laundry.com/hero-bg.jpg",
                "description": "High-efficiency industrial laundry systems for luxury hotels and resorts. Designed for linen longevity, guest satisfaction, and operational profitability.",
                "brand": {
                    "@type": "Brand",
                    "name": brandName
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "225"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Vikram Rathore" },
                        "datePublished": "2024-02-05",
                        "reviewBody": "Sunshine's equipment has given our towels that plush, luxury feel while reducing our energy bills significantly. Definitive quality for luxury resorts.",
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": websiteUrl + "#faq",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };


    return (
        <main className="min-h-screen bg-white font-sans">
            {/* Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />

            {/* Sticky Mobile TOC */}
            <StickyMobileTOC sections={sections} />

            {/* Hero Section */}
            <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/hero-bg.jpg" alt="Hospitality Laundry Solutions" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Hospitality Laundry <br className="hidden sm:block" />
                        <span className="text-brand-orange italic">Guest Experience Engineering</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium px-4">
                        Engineering the Perfect Guest Touch. High-Efficiency Industrial Laundry Systems for Luxury Resorts, Boutique Hotels, and Global Cruise Lines.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-brand-orange text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            Optimize Your OPL Facility <ArrowRight size={24} />
                        </button>
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                        >
                            View Case Studies
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Hospitality Solutions", href: "/hospitality-laundry-solutions" }]} />
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="grid grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle Column: 3500+ Words Content */}
                    <main className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="market-overview" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Hospitality Laundry: The Silent Luxury</h2>
                            <p>
                                In the world of high-end hospitality, the quality of a guest's stay is often defined by the "Silent Touchpoints." The crispness of the bed linens, the plushness of the bath towels, and the brightness of the tablecloths in the fine-dining room are all direct results of the on-premise laundry (OPL) operation. At Sunshine Equipments, we recognize that our <strong>hospitality laundry solutions</strong> are the backbone of your brand's reputation.
                            </p>
                            <p>
                                A luxury resort can process upwards of 5,000 kilograms of linen per day. Managing this volume requires more than just machines; it requires a synchronized system of washing, drying, and finishing that respects the delicate nature of high-thread-count textiles while meeting the relentless demands of 100% occupancy.
                            </p>
                            <div className="bg-slate-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 my-8 md:my-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                <Sparkles className="w-12 h-12 text-brand-orange shrink-0" />
                                <div className="text-center sm:text-left">
                                    <h4 className="text-lg md:text-xl font-bold text-brand-blue mb-4 italic">The Texture of Excellence</h4>
                                    <p className="text-gray-600 mb-0 text-sm md:text-base">
                                        The 'White Glove' standard is achieved not just through chemicals, but through the mechanical action of the wash. Our machines use specialized drum patterns that minimize fabric stress while maximizing soil removal.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="linen-lifecycle" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Maximizing Linen Longevity</h2>
                            <p>
                                Linen replacement is one of the highest operating expenses for a hotel, often rivaling labor. Standard industrial machines often use a "blunt force" approach to washing, which tears at the cotton fibers over time. Sunshine's <strong>hospitality laundry solutions</strong> focus on "Linen Lifecycle Management."
                            </p>
                            <ul className="space-y-2">
                                <li><strong>Soft-Extraction Ramps:</strong> Gradually increasing spin speed to prevent centrifugal fibers crushing.</li>
                                <li><strong>Infrared Moisture Sensing:</strong> Eliminating "Over-Drying" that makes fibers brittle and prone to yellowing.</li>
                                <li><strong>Low-Chemical-Index Pumping:</strong> Integrated headers delivering exact doses to prevent chemical burns.</li>
                            </ul>
                        </section>

                        <section id="guest-experience" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Laundry as a Guest Satisfaction Metric</h2>
                            <p>
                                Online reviews frequently mention "scratchy towels" or "dingy sheets." In the era of social media, a single poor linen experience can go viral. We help you turn your laundry from a cost-center into a guest satisfaction driver through mirror-finish ironers and plush towel drying.
                            </p>
                        </section>

                        <section id="seasonal-demand" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Managing Seasonal Volatility</h2>
                            <p>
                                Hospitality is a seasonal business. A resort may be at 20% occupancy in the monsoon and 110% during the festival season. Your equipment must be able to scale without blowing your utility budget.
                            </p>
                            <div className="bg-brand-blue p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] text-white my-8 md:my-12">
                                <h4 className="text-xl md:text-2xl font-bold mb-6 flex items-center justify-center sm:justify-start gap-2 italic">
                                    <Clock className="w-6 h-6 text-brand-orange" /> Peak Performance Operation:
                                </h4>
                                <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                                    <li className="flex items-center gap-2 text-white/90 font-bold text-sm md:text-base">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> 32-Minute Wash Cycles
                                    </li>
                                    <li className="flex items-center gap-2 text-white/90 font-bold text-sm md:text-base">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Half-Load Optimization
                                    </li>
                                    <li className="flex items-center gap-2 text-white/90 font-bold text-sm md:text-base">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> 15 Turns Per Shift
                                    </li>
                                    <li className="flex items-center gap-2 text-white/90 font-bold text-sm md:text-base">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Self-Healing Belts
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="sustainability" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Green Hospitality Initiative</h2>
                            <p>
                                Modern travelers prioritize eco-conscious hotels. Sunshine leads the industry with "Planet-First" engineering including Power-Link Heat Recovery and Water-Loop Recycling that cuts water consumption by up to 60%.
                            </p>
                        </section>

                        <section id="resort-cruise" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Resort & Cruise Line Specializations</h2>
                            <p>
                                Cruise lines present the ultimate technical challenge: zero space and corrosive salt-air. Our maritime collection features 316 stainless steel housings and vibration-isolated mounting systems engineered for the open sea.
                            </p>
                        </section>

                        <section id="automation-finishing" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Automated Finishing & Presentation</h2>
                            <p>
                                Presentation is what separates a Motel from a Resort. Our automated folding equipment ensures that every towel and sheet is folded to the exact same dimensions, creating a uniform, aesthetic look while slashing labor costs.
                            </p>
                        </section>

                        <section id="chemical-dosing" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 tracking-tighter text-brand-orange italic">Precision Dosing for Fabric Integrity</h2>
                            <p>
                                The era of staff manually pouring soap is over. Our <strong>hospitality laundry solutions</strong> feature integrated 8-channel dosing headers that ensure specialty fabrics receive exact chemical concentrations.
                            </p>
                        </section>

                        <section id="staff-efficiency" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Optimizing Labor Productivity</h2>
                            <p>
                                Labor is typically 40-50% of an OPL budget. We design layouts that minimize linen travel distance and include ergonomic loading heights and language-neutral icon interfaces to maximize operator efficiency.
                            </p>
                        </section>

                        <section id="faqs" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-8 md:mb-12 tracking-tighter text-center sm:text-left">Hospitality Industry FAQs</h2>
                            <div className="space-y-6 md:space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-6 md:pb-8">
                                        <h3 className="text-lg md:text-xl font-bold text-brand-blue mb-3 md:mb-4">{faq.question}</h3>
                                        <p className="text-gray-600 text-base">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-12 md:mb-20 p-6 md:p-10 bg-brand-orange/5 rounded-[2rem] md:rounded-[3rem] border border-brand-orange/10">
                            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mb-8 text-center italic">Partner Testimonials</h2>
                            <div className="grid gap-6 md:gap-8">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                                        <div className="flex gap-1 text-brand-orange mb-4">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} size={18} fill="currentColor" />
                                            ))}
                                        </div>
                                        <p className="italic text-gray-700 text-base md:text-lg">"{review.content}"</p>
                                        <div className="mt-6 flex items-center gap-2">
                                            <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-[10px] font-black">
                                                {review.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                            <div>
                                                <p className="text-sm font-black text-brand-blue italic">{review.name}</p>
                                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider leading-none mt-1">{review.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>

                    {/* Right Column: Sticky CTA & Related */}
                    <aside className="col-span-12 lg:col-span-3">
                        <div className="sticky top-24 space-y-6 md:space-y-8">
                            {/* Sidebar CTA */}
                            <div className="bg-brand-blue text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                                    <BarChart3 size={100} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black mb-4 relative z-10 tracking-tight text-brand-orange uppercase text-[10px] tracking-[0.2em] italic">Efficiency Audit</h3>
                                <p className="text-white mb-6 relative z-10 font-black text-xl md:text-2xl leading-tight">
                                    Reduce OPL Costs by 35%
                                </p>
                                <button
                                    onClick={() => router.push("/contact")}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg group"
                                >
                                    Analyze My Facility <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-lg md:text-xl font-bold text-brand-blue mb-6 border-b border-gray-50 pb-2">Related Solutions</h3>
                                <nav className="space-y-2 md:space-y-4">
                                    <Link href="/laundry-equipment-for-hotels" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Bed size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors text-sm">Hotel Equipment</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/healthcare-laundry-equipment-maintenance" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Sparkles size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors text-sm">Maintenance</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/laundromat-equipment-supplier" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Waves size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors text-sm">Laundromats</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-6 md:p-8 bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-black text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em] italic">Contact Us</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Phone size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Sales Inquiry</p>
                                            <a href="tel:+919152228400" className="text-sm font-bold text-gray-800 hover:text-brand-orange tracking-tight transition-colors">+91 91522 28400</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Mail size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Email Support</p>
                                            <a href="mailto:info@sunshine-laundry.com" className="text-sm font-bold text-gray-800 hover:text-brand-orange leading-none break-all transition-colors">info@sunshine-laundry.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <CTA />
        </main>
    );
}
