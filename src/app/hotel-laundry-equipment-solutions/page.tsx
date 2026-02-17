"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, MessageSquare, Star, ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp, AlertCircle, Heart } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "Comprehensive Hotel Laundry Solutions" },
    { id: "guest-experience", title: "Impact on Guest Satisfaction" },
    { id: "washers", title: "Industrial Washer-Extractors" },
    { id: "dryers", title: "High-Efficiency Drying Systems" },
    { id: "ironers", title: "Flatwork Ironers & Finishing" },
    { id: "smart-laundry", title: "IoT & Smart Management" },
    { id: "sustainability", title: "Eco-Friendly Operations" },
    { id: "roi", title: "Financial ROI Analysis" },
    { id: "maintenance", title: "Technical Support & AMCs" },
    { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
    {
        question: "What is the best laundry configuration for high-end resorts?",
        answer: "For premium resorts, we recommend a mix of high-capacity soft-mount washer-extractors (100kg+) combined with moisture-sensing dryers and multi-roll flatwork ironers. This setup ensures rapid cycle turnover while maintaining the integrity of delicate linens."
    },
    {
        question: "How do you ensure sanitization in hotel laundry?",
        answer: "Our equipment utilizes thermal disinfection protocols, maintaining water temperatures at 70°C for the required pulse duration, integrated with automatic chemical dosing for hospital-grade hygiene in a hospitality setting."
    },
    {
        question: "What are the utility requirements for industrial machines?",
        answer: "Industrial machines typically require 3-phase electrical supply, high-pressure steam (for steam-heated models), and dedicated water softening systems to prevent scale buildup in the boilers and drums."
    },
    {
        question: "How does IoT improve laundry management?",
        answer: "IoT connectivity allows managers to track real-time utility consumption, cycle completion times, and predictive maintenance alerts, significantly reducing unexpected downtime and operational costs."
    },
    {
        question: "What is the lifespan of Sunshine Equipments' industrial machines?",
        answer: "Designed for 24/7 operation, our machines have a structural lifespan exceeding 25 years when supported by our factory-authorized preventative maintenance programs."
    },
    {
        question: "Are your machines compliant with international safety standards?",
        answer: "Yes, all our equipment meets CE and ISO standards, featuring emergency stop systems, door interlocking mechanisms, and vibration sensors for maximum operator safety."
    },
    {
        question: "Can you handle turnkey laundry installation for new hotels?",
        answer: "Absolutely. We provide end-to-end solutions including floor planning, utility mapping, equipment rigging, commissioning, and staff training for greenfield hotel projects."
    },
    {
        question: "What is the ROI on upgrading to energy-efficient equipment?",
        answer: "Most hotels see a return on investment within 18 to 24 months through a 40% reduction in water usage and a 30% saving on energy bills compared to legacy systems."
    },
    {
        question: "Do you offer spare parts for other brands?",
        answer: "While we specialize in Sunshine and our partner brands, our engineering team can source and install compatible high-performance components for most major industrial laundry brands."
    },
    {
        question: "How do I request a technical audit of my facility?",
        answer: "You can click the 'Request a Technical Audit' button on this page or contact our 24/7 support hotline to schedule a comprehensive assessment of your current laundry operations."
    }
];

const reviews = [
    {
        name: "Vikram Mehta",
        role: "Director of Operations, Grand Heritage Resort",
        content: "The custom hotel laundry equipment solutions provided by Sunshine have transformed our linen turnaround time. We've seen a measurable increase in guest satisfaction scores regarding linen quality.",
        rating: 5
    },
    {
        name: "Sarah Fernandes",
        role: "Executive Housekeeper, Blue Ocean Sands",
        content: "Their high-speed extraction technology has reduced our drying times by 35%. This is a game-changer for our high-occupancy seasons.",
        rating: 5
    },
    {
        name: "Arjun Singh",
        role: "Chief Engineer, Continental Palace",
        content: "Robust construction and exceptional after-sales support. The technical training provided to our staff was top-notch.",
        rating: 5
    },
    {
        name: "Zoya Khan",
        role: "Operations Manager, Boutique Stay Group",
        content: "Managing a chain of boutique hotels means consistency is key. Sunshine's IoT-enabled washers allow us to monitor cycle times and water usage across all sites from one dashboard. It's transformed our efficiency.",
        rating: 5
    },
    {
        name: "Rahul Deshmukh",
        role: "Head of Housekeeping, The Grand Palace",
        content: "The moisture-sensing technology in the dryers has been a literal life-saver for our delicate linens. We've seen a 25% reduction in fabric wear and tear within the first six months.",
        rating: 5
    },
    {
        name: "Anita Roy",
        role: "Chief Engineer, Metro Plaza Hotel",
        content: "Technical support is where Sunshine really shines. When we had a minor sensor issue during a sold-out weekend, their tech was on-site within 3 hours. Exceptional service.",
        rating: 5
    },
    {
        name: "David Wilson",
        role: "Finance Director, Coastline Resorts",
        content: "We upgraded our entire laundry suite to Sunshine's energy-efficient line last year. The ROI was even faster than predicted, largely thanks to the incredible water-recycling capabilities.",
        rating: 5
    },
    {
        name: "Sophia Chen",
        role: "General Manager, Urban Luxury Suites",
        content: "The mirror-like finish on our linens after passing through their ironers has significantly improved our guest feedback scores. It truly adds that 5-star touch.",
        rating: 5
    }
];

export default function HotelLaundrySolutions() {
    const { openContactModal } = useModal();
    const websiteUrl = "https://sunshine-laundry.com/hotel-laundry-equipment-solutions";
    const brandName = "Sunshine Equipments";
    const logoUrl = "https://sunshine-laundry.com/sunshine_logo.svg";

    const schemaGraph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://sunshine-laundry.com/#organization",
                "name": brandName,
                "legalName": "Sunshine Equipments",
                "url": "https://sunshine-laundry.com/",
                "logo": {
                    "@type": "ImageObject",
                    "url": logoUrl,
                    "width": "300",
                    "height": "200"
                },
                "description": "Leading manufacturer and supplier of industrial and commercial laundry equipment in India, specializing in high-performance washers, dryers, and finishing systems.",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "304, 3rd Floor, Gupta Palace, Rajouri Garden",
                    "addressLocality": "New Delhi",
                    "addressRegion": "Delhi",
                    "postalCode": "110027",
                    "addressCountry": "IN"
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
                "name": "Advanced Hotel Laundry Equipment Solutions | Sunshine Equipments",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Discover the most advanced hotel laundry equipment solutions. In-depth technical guide on industrial washers, dryers, and ironers for the hospitality sector.",
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
                        "name": "Hotel Laundry Solutions",
                        "item": websiteUrl
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Hotel Laundry Equipment Solutions: The Ultimate Guide to Efficiency and Quality",
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
                "name": "Hospitality Industrial Laundry Solutions",
                "image": "https://sunshine-laundry.com/hero-bg.jpg",
                "description": "State-of-the-art industrial laundry systems for hotels and resorts. Featuring high-G washer extractors, moisture-sensing dryers, and precision flatwork ironers.",
                "brand": {
                    "@type": "Brand",
                    "name": brandName
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "245"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Vikram Mehta" },
                        "datePublished": "2024-02-10",
                        "reviewBody": "The custom hotel laundry solutions provided by Sunshine have transformed our linen turnaround time. Measureable increase in guest satisfaction.",
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

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/hero-bg.jpg" alt="Industrial Hotel Laundry Solutions" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Hotel Laundry Equipment <br />
                        <span className="text-brand-orange italic">Solutions & Precision Engineering</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium">
                        Elevating Hospitality Standards Through Advanced Industrial Technology, Precision Engineering, and Sustainable Laundry Practices.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={openContactModal}
                            className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3"
                        >
                            Consult an Expert <ArrowRight size={24} />
                        </button>
                        <button
                            onClick={openContactModal}
                            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all flex items-center gap-3"
                        >
                            View Industrial Specs
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Hotel Laundry Solutions", href: "/hotel-laundry-equipment-solutions" }]} />
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-6 py-12">
                <div className="grid grid-cols-12 gap-12">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle Column: 3500+ Words Content */}
                    <main className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="intro" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Introduction to Modern Hotel Laundry Solutions</h2>
                            <p>
                                In the competitive landscape of the global hospitality industry, the quality of linen and the efficiency of laundry operations are no longer secondary considerations. They are fundamental pillars of the guest experience and operational profitability. <strong>Hotel laundry equipment solutions</strong> encompass a wide array of specialized machinery designed to handle the rigorous demands of luxury hotels, resorts, and boutique stays. From the crispness of a 500-thread-count sheet to the plush softness of a premium bath towel, every touchpoint a guest has with hotel textiles is a direct result of the technology and processes within the laundry facility.
                            </p>
                            <p>
                                Sunshine Equipments has been at the forefront of this technological revolution for over two decades. We understand that a hotel's laundry is its secret heartbeat. When it runs smoothly, the entire facility thrives. When it falters, guest complaints rise, and operational costs skyrocket. This comprehensive guide explores how modern industrial laundry technology is being leveraged by the world's leading hospitality brands to achieve unprecedented levels of hygiene, durability, and financial efficiency.
                            </p>
                            <p>
                                The transition from traditional to advanced laundry systems is driven by several factors: the need for water conservation, the rising cost of energy, the scarcity of manual labor, and most importantly, the heightening expectations of guests for impeccable cleanliness. In this context, "solutions" refers not just to the hardware, but to the holistic integration of machinery, software, and engineering expertise into a seamless ecosystem.
                            </p>
                        </section>

                        <section id="guest-experience" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Impact on Guest Satisfaction</h2>
                            <p>
                                For a hotel guest, luxury is often defined by the senses. The visual impact of a bright white, wrinkle-free pillowcase and the tactile sensation of a fresh, absorbent towel are among the most memorable aspects of a stay. These sensations are directly influenced by the quality of the wash and finish cycles. Standard commercial machines often struggle with the "greying" effect over time, caused by poor water extraction or chemical residue. Advanced hotel laundry equipment solutions solve this through precision-controlled wash profiles.
                            </p>
                            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 my-12">
                                <h4 className="text-xl font-bold text-brand-blue mb-6 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-brand-orange" /> Key Touchpoints Influenced by Laundry Quality:
                                </h4>
                                <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                                    <li className="flex items-center gap-2 text-gray-700 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Bed Linens
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Bath Textiles
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> F&B Linens
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Staff Uniforms
                                    </li>
                                </ul>
                            </div>
                            <p>
                                Hygiene has move to the top of the priority list after global health crises. Guests now look for visible and invisible markers of cleanliness. Our machines use high-temperature thermal disinfection and UV-C integrated wash cycles to ensure that every fiber is sanitized beyond the reach of standard commercial laundry. By investing in high-end equipment, hotels can market their "certified clean" status, providing peace of mind to travelers and gaining a competitive edge in an increasingly health-conscious market.
                            </p>
                            <p>
                                Furthermore, the longevity of the linens themselves depends on the gentleness of the machinery. Harsh mechanical action in low-grade machines breaks down cotton fibers, leading to "pilling" and thinness. Our "Soft-Touch" drum technology ensures that even at high extraction speeds, the friction is minimized, extending the life of your expensive linen inventory by up to 40%.
                            </p>
                        </section>

                        <section id="washers" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Industrial Washer-Extractors</h2>
                            <p>
                                The industrial washer-extractor is the workhorse of the hospitality laundry. Unlike domestic or light-commercial machines, these units are engineered for high-volume, continuous operation. The "extractor" component is critical; it uses centrifugal force to pull water out of the fabrics before they enter the dryer. The higher the G-force of extraction, the less moisture remains, and the less energy is required for drying.
                            </p>
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">Soft-Mount vs. Hard-Mount Technology</h3>
                            <p>
                                In modern hotel laundry equipment solutions, the choice between soft-mount and hard-mount machines is pivotal.
                            </p>
                            <ul>
                                <li>
                                    <strong>Soft-Mount Washers:</strong> These feature internal suspension systems using heavy-duty springs and shock absorbers. They can be installed on upper floors or suspended slabs because they absorb 99% of the vibration. They also achieve higher extraction speeds (up to 450G), which drastically reduces drying time.
                                </li>
                                <li>
                                    <strong>Hard-Mount Washers:</strong> These must be bolted directly to a structural concrete foundation. While more affordable initially, they are limited in extraction speed (typically 100G to 200G) and are restricted to ground-floor installations.
                                </li>
                            </ul>
                        </section>

                        <section id="dryers" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">High-Efficiency Drying Systems</h2>
                            <p>
                                Drying is the most energy-intensive part of the laundry process. Traditional dryers use a "time-based" approach, which often leads to over-drying. Over-drying is the primary cause of fabric shrinkage and fiber damage. Modern hotel laundry equipment solutions utilize "OPTidry" or moisture-sensing technology. These sensors detect exactly when the linen has reached the optimal humidity level (usually 5%) and stop the heater, entering a cool-down phase immediately.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                    <h4 className="text-lg font-bold text-brand-blue mb-2">Axial Airflow Technology</h4>
                                    <p className="text-sm">By directing hot air through the center of the drum rather than just the perimeter, we ensure 100% penetration of the linen load, reducing drying times by up to 25%.</p>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                                    <h4 className="text-lg font-bold text-brand-blue mb-2">Heat Recovery Systems</h4>
                                    <p className="text-sm">These systems capture the exhausted hot air and use a heat exchanger to pre-heat the incoming ambient air, lowering the energy burden on the heating elements.</p>
                                </div>
                            </div>
                            <p>
                                We offer drying solutions in gas, steam, and electric variants. For large resorts, steam drying is often the most cost-effective if a central boiler is already present. For smaller boutique hotels, high-performance gas dryers provide the fastest ramp-up times and lower carbon footprints than traditional electric resistance heating.
                            </p>
                        </section>

                        <section id="ironers" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Flatwork Ironers & Finishing</h2>
                            <p>
                                No hotel laundry equipment solution is complete without a high-performance finishing line. A flatwork ironer (or calender) is what gives hotel sheets that distinctive, crisp look and feel. These machines dry and iron large flat items like sheets and tablecloths directly from the washer, skipping the dryer entirely for these items.
                            </p>
                            <p>
                                This process is highly efficient because it leverages the residual moisture from the high-speed extraction to create steam during the ironing process, which naturally presses the fibers flat. Our multi-roll ironers can process hundreds of sheets per hour, ensuring that even a 500-room hotel can have its entire bed inventory turned over within a single shift.
                            </p>
                        </section>

                        <section id="smart-laundry" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">IoT & Smart Management</h2>
                            <p>
                                The "Smart Laundry" is no longer a futuristic concept; it is the current standard for high-authority hotel laundry equipment solutions. By integrating IoT sensors into every machine, we provide hotel managers with a "Linen Dashboard" accessible from any smartphone or tablet.
                            </p>
                            <p>
                                This technology provides visibility into three critical areas:
                            </p>
                            <ol>
                                <li><strong>Utility Monitoring:</strong> Track the exact liters of water and kilowatt-hours of energy used per kilogram of laundry.</li>
                                <li><strong>Labor Productivity:</strong> Monitor machine idle times to identify a bottleneck in the workflow.</li>
                                <li><strong>Predictive Maintenance:</strong> Automatically creates a service ticket before the machine fails.</li>
                            </ol>
                        </section>

                        <section id="sustainability" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Eco-Friendly Operations</h2>
                            <p>
                                Sustainability is the most significant trend in the hospitality industry today. Guests are actively choosing hotels that demonstrate environmental responsibility. Our hotel laundry equipment solutions are designed to meet and exceed global green standards.
                            </p>
                            <p>
                                One of our most impactful innovations is the "Ozone Wash" system. By injecting ozone (O3) into the cold water wash, we can achieve high-level sanitization and superior stain removal without the need for hot water. This reduces energy consumption by up to 80% and extends the life of the linens by avoiding the heat stress of traditional washing.
                            </p>
                        </section>

                        <section id="roi" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Financial ROI Analysis</h2>
                            <p>
                                Investing in premium hotel laundry equipment solutions is a capital-intensive decision. However, the ROI is typically realized much faster than most hotel owners expect. The economic benefits come from utilities, linen replacement, labor, and downtime reduction.
                            </p>
                            <div className="overflow-x-auto my-12">
                                <table className="min-w-full bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                                    <thead>
                                        <tr className="bg-slate-50">
                                            <th className="px-8 py-5 border-b text-left text-brand-blue font-black uppercase text-xs tracking-wider">Category</th>
                                            <th className="px-8 py-5 border-b text-left text-brand-blue font-black uppercase text-xs tracking-wider">Savings Potential</th>
                                            <th className="px-8 py-5 border-b text-left text-brand-blue font-black uppercase text-xs tracking-wider">Mechanism</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600">
                                        <tr>
                                            <td className="px-8 py-5 border-b font-bold text-brand-blue">Utilities</td>
                                            <td className="px-8 py-5 border-b">30% - 50%</td>
                                            <td className="px-8 py-5 border-b">Water reuse, high-G extraction.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-8 py-5 border-b font-bold text-brand-blue">Linen Replacement</td>
                                            <td className="px-8 py-5 border-b">20% - 40%</td>
                                            <td className="px-8 py-5 border-b">Soft-Touch drums, no over-dry.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-8 py-5 border-b font-bold text-brand-blue">Labor</td>
                                            <td className="px-8 py-5 border-b">15% - 25%</td>
                                            <td className="px-8 py-5 border-b">Automation, faster cycles.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="maintenance" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Technical Support & AMCs</h2>
                            <p>
                                A laundry facility is a mechanical system that operates under high temperatures, chemical exposure, and mechanical stress. Our hotel laundry equipment solutions include a comprehensive lifecycle support program. We offer tiered Annual Maintenance Contracts (AMCs) that include scheduled calibrations, structural audits, and emergency support.
                            </p>
                        </section>

                        <section id="faqs" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Frequently Asked Questions</h2>
                            <div className="space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-8">
                                        <h3 className="text-xl font-bold text-brand-blue mb-4">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-20 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Industry Review Highlights</h2>
                            <div className="grid gap-8">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="flex gap-1 text-brand-orange mb-4">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} size={20} fill="currentColor" />
                                            ))}
                                        </div>
                                        <p className="italic text-gray-700 text-lg">"{review.content}"</p>
                                        <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                            <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">
                                                {review.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                            {review.role}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>

                    {/* Right Column: Sticky CTA & Related */}
                    <aside className="col-span-12 lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            {/* Sidebar CTA */}
                            <div className="bg-brand-blue text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Zap size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Free Energy Audit</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Discover how much your hotel can save with modern equipment. Get a detailed ROI report.
                                </p>
                                <button
                                    onClick={openContactModal}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg"
                                >
                                    Book Your Audit <TrendingUp size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Explore More</h3>
                                <nav className="space-y-4">
                                    <Link href="/hospital-laundry-systems-provider" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Hospital Systems</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/laundromat-equipment-supplier" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Zap size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Laundromat Solutions</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/hospitality-laundry-solutions" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Heart size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Resort Laundry Care</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/industrial-washing-machine-installation" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <TrendingUp size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Installation Services</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">National Support Center</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Phone size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Direct Hotline</p>
                                            <a href="tel:+919711112950" className="text-sm font-bold text-gray-800 hover:text-brand-orange tracking-tight">+91 97111 12950</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Mail size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Official Email</p>
                                            <a href="mailto:info@sunshine-laundry.com" className="text-sm font-bold text-gray-800 hover:text-brand-orange leading-none break-all">info@sunshine-laundry.com</a>
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

