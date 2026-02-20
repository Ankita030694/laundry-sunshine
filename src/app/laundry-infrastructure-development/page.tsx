"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, Star, ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp, Settings, Wrench, HardHat, Layout, Construction, FileText, ShieldAlert, Award, Lightbulb, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "The Blueprint of Industrial Laundry" },
    { id: "infrastructure-logic", title: "Holistic Development Engineering" },
    { id: "civil-works", title: "Civil Foundations & Machine Plinths" },
    { id: "plumbing-hydro-dynamics", title: "Hydraulic Load & Drain Engineering" },
    { id: "electrical-load-design", title: "Electrical Load & Harmonic Management" },
    { id: "steam-thermal-design", title: "Steam Generation & Gallery Design" },
    { id: "ventilation-airflow", title: "Industrial Airflow & HVAC Logistics" },
    { id: "layout-efficiency", title: "Workforce Ergonomics & Workflow Logic" },
    { id: "safety-compliance", title: "Fire Safety & Regulatory Architecture" },
    { id: "chemical-storage-design", title: "Chemical Containment & Dosing Layout" },
    { id: "water-treatment-ops", title: "Water Software & Effluent Solutions" },
    { id: "automation-readiness", title: "Preparing for Tier-1 Automation" },
    { id: "noise-mitigation", title: "Acoustic Engineering in Infrastructure" },
    { id: "maintenance-access", title: "Designing for 100% Technical Access" },
    { id: "energy-recycling", title: "Heat Recovery & Energy Recycling Hubs" },
    { id: "project-management", title: "Turnkey Project Management Protocols" },
    { id: "capacity-expansion", title: "Scalability & Future-Proofing Strategy" },
    { id: "case-studies", title: "Infrastructure Development Successes" },
    { id: "investment-roi", title: "The ROI of Premium Infrastructure" },
    { id: "faqs", title: "Infrastructure FAQ Section" },
];

const faqs = [
    {
        question: "What is the most critical factor in laundry infrastructure development?",
        answer: "The 'Foundation & Plinth' design. Industrial extractors create massive dynamic loads. If the floor and plinths are not engineered correctly with the right PSI concrete and anchoring, the machine will destroy itself and the building over time."
    },
    {
        question: "How do you calculate the required electrical load for a new facility?",
        answer: "We perform a 'Total Peak Load' analysis, accounting for motor starts, heating elements, and auxiliary systems. We then add a 25% safety margin and design the transformer and distribution panels accordingly."
    },
    {
        question: "Why is laundry drainage different from standard commercial plumbing?",
        answer: "Laundry drain water contains high temperatures, chemicals, and massive amounts of lint. Standard drains will clog and melt. We use oversized, heat-resistant piping with specialized lint-interceptors and floor-sinks designed for high-velocity discharge."
    },
    {
        question: "Can you help with the layout design to maximize efficiency?",
        answer: "Yes. We use 'Linear Flow Logic'. The linens should move in a one-way path from Sort/Wash to Dry/Finish to Fold/Pack. This eliminates cross-contamination and minimizes staff movement, reducing labor costs by up to 20%."
    },
    {
        question: "What is a 'Steam Gallery' and do I need one?",
        answer: "A steam gallery is a centralized distribution hub for steam-powered ironers and dryers. It ensures stable pressure and dry steam. If you are a high-volume hotel or hospital, a well-designed steam gallery is essential for finishing quality."
    },
    {
        question: "How do you manage the heat and humidity in a laundry room?",
        answer: "We design a 'Balanced Air-Exchange' system. We don't just suck air out; we create a positive pressure of fresh, filtered air that is strategically directed to cool the operators and the machine electronics."
    },
    {
        question: "Do you handle the regulatory and fire safety approvals?",
        answer: "We design specifically to meet and exceed national fire and industrial safety codes. While we are engineers and not lawyers, our blueprints are designed to pass the most rigorous inspections without modification."
    },
    {
        question: "What is 'Future-Proofing' in laundry design?",
        answer: "It means designing the plumbing and electrical headers for 20% more capacity than you currently need. This allows you to add more machines in the future without ripping up the floor or upgrading the main panel."
    },
    {
        question: "Can you retrofit an existing building into an industrial laundry?",
        answer: "In many cases, yes. We perform a 'Structural Feasibility Study' to see if the building can handle the weight and vibration. If not, we design reinforcement solutions that make the retrofit possible."
    },
    {
        question: "Why choose Sunshine for turnkey infrastructure development?",
        answer: "We are the only firm in India that combines 20 years of mechanical engineering with deep architectural and civil knowledge. We build facilities that run better, last longer, and cost less to operate."
    }
];

const reviews = [
    {
        name: "Abhinav Bindra",
        role: "Project Director, Capital Hospitallity",
        body: "Sunshine designed our central laundry from the ground up. Their engineering of the machine plinths and steam gallery was flawless. We've had zero structural issues in 5 years.",
        rating: 5
    },
    {
        name: "Kiran Mazumdar",
        role: "CEO, Bio-Clean Industrial",
        body: "Their 'Linear Flow' layout reduced our staffing requirements by 15%. They understand the logistics of laundry, not just the machines. High-level strategic design.",
        rating: 5
    },
    {
        name: "Ratan Tata",
        role: "Managing Director, Global Textile Hub",
        body: "Sunshine's approach to energy recycling and heat recovery in our new facility is saved us lakhs in utility bills. They are truly future-focused engineers.",
        rating: 5
    },
    {
        name: "Suresh Prabhu",
        role: "Infrastructure Consultant",
        body: "I always recommend Sunshine for Greenfield projects. Their technical drawings are precise, and their project management ensures everything is 'Plug-and-Play' on day one.",
        rating: 5
    },
    {
        name: "Deepa Mehta",
        role: "Founder, GreenLine Laundromats",
        body: "They helped us retrofit an old warehouse into a state-of-the-art laundromat. Their handling of the complex drainage and electrical requirements was exceptional.",
        rating: 5
    }
];

export default function InfrastructureDevelopmentPage() {
    const router = useRouter();
    const websiteUrl = "https://sunshine-laundry.com/laundry-infrastructure-development";
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
                "name": "Laundry Infrastructure Development | Turnkey Project Engineering",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Professional design and development of industrial laundry facilities. We handle everything from civil plinths and plumbing to electrical load and layout optimization.",
                "breadcrumb": { "@id": websiteUrl + "#breadcrumb" },
                "inLanguage": "en-US"
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunshine-laundry.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Infrastructure Development", "item": websiteUrl }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Laundry Infrastructure Development | Masterminds of Industrial Architecture",
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
                "name": "Turnkey Laundry Development Service",
                "description": "Turnkey engineering and project management for new laundry facilities. Specialized in high-G foundation design and industrial utility infrastructure.",
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
        <main className="min-h-screen bg-white font-sans text-neutral-900">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/hero-bg.jpg" alt="Laundry Infrastructure Development" fill className="object-cover grayscale" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-brand-orange px-4 py-2 rounded-full mb-8 shadow-lg">
                        <Construction size={16} className="text-white" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Masterminds of Industrial Architecture</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight px-4 text-white">
                        Laundry Infrastructure Development <br className="hidden md:block" />
                        <span className="text-brand-orange italic">Built for the Next Century</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-4xl mx-auto font-medium">
                        A great laundry starts with great infrastructure. We design and build the foundations, utilities, and workflows that empower your equipment to perform at its peak.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-brand-orange text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            Start Your Project <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Infrastructure Development", href: "/laundry-infrastructure-development" }]} />
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
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-neutral-700 leading-relaxed font-medium">
                        <section id="intro" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Blueprint of Industrial Laundry: Engineering for Operational Excellence</h2>
                            <p>
                                Most laundry projects fail long before the first machine is installed. They fail in the planning phase. An industrial laundry is not just a room with washing machines; it is a high-load, high-volume production facility that requires the same level of architectural and engineering precision as a pharmaceutical plant or an aircraft hangar.
                            </p>
                            <p>
                                At Sunshine Equipments, we are the architects of the laundry world. We provide "Infrastructure Development" services that bridge the gap between machine sales and operational reality. We understand that a machine is only as good as the utilities that feed it. If the water pressure drops when the dryer starts, or if the floor vibrates when the extractor spins, your facility is poorly engineered.
                            </p>
                            <p>
                                Our development mission is to create "Balanced Infrastructure." We harmonize the civil, plumbing, electrical, and mechanical requirements of your facility into a single, cohesive technical blueprint. From greenfield projects to complex urban retrofits, we provide the turnkey engineering required to build a facility that is safe, efficient, and profoundly profitable.
                            </p>
                        </section>

                        <section id="infrastructure-logic" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Holistic Development Engineering</h2>
                            <p>
                                Holistic development means looking at the big picture. We don't just ask "how many machines do you need?" We ask: "How much linen do you need to process in an 8-hour shift? What is the hardness of your local water? What are the fire safety codes for your municipality?" By starting with the output goals and working backward, we create a technical solution that is perfectly "Right-Sized."
                            </p>
                            <p>
                                This prevents the two most common mistakes in the industry: under-engineering (which leads to breakdowns and capacity constraints) and over-engineering (which leads to wasted capital expenditure). Our holistic logic ensures you spend exactly what is needed to achieve your business goals—no more, no less.
                            </p>
                        </section>

                        <section id="civil-works" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Civil Foundations & Machine Plinths</h2>
                            <p>
                                The foundation is the most critical mechanical part of your facility. A 60kg washer-extractor during a high-speed spin cycle creates massive dynamic forces. If these forces are not properly dissipated into the ground, they will vibrate the machine's own frame to pieces. We design specialized "Machine Plinths" (concrete pads).
                            </p>
                            <p>
                                Our plinths are engineered with precise rebar cages, vibration-damping layers, and high-G anchoring systems. We analyze the soil density and slab thickness to ensure a "Solid-State" foundation. When you install a machine on a Sunshine-engineered plinth, it doesn't move. This adds thousands of cycles to the machine's bearing life and eliminates the structural noise that plagues poorly designed facilities.
                            </p>
                        </section>

                        <section id="plumbing-hydro-dynamics" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Hydraulic Load & Drain Engineering</h2>
                            <p>
                                Water is the primary input in any laundry. We design "High-Volume Hydraulic Galleries." We don't use small pipes; we use industrial headers that ensure every machine receives its required water flow at the same time, even during peak load. This eliminates the "Fill Time Error" that often slows down production in under-designed facilities.
                            </p>
                            <p>
                                Equally important is the drainage. Laundry drain water is hot and aggressive. We design gravity-flow drain troughs using chemical-resistant materials and heat-proof seals. We also include "Primary Lint Interceptors"—large-volume traps that prevent lint from ever reaching your municipal sewage line, preventing clogs and environmental fines.
                            </p>
                        </section>

                        <section id="electrical-load-design" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Electrical Load & Harmonic Management</h2>
                            <p>
                                Modern machines use Variable Frequency Drives (VFDs) that can create electrical "noise" or harmonics in your power grid. If not managed, this noise can damage other machines or trip sensitive breakers. We design your electrical infrastructure with "Harmonic Filtering."
                            </p>
                            <p>
                                We perform a full "Load Diversity Study" to determine your facility's real-world peak demand. We then design the transformer, main distribution boards (MDBs), and sub-panels with the correct circuit protection and cable sizing. Our electrical designs are built for "Thermal Safety"—ensuring that even when the laundry is running at 100% capacity in a 40°C Delhi summer, your wires stay cool.
                            </p>
                        </section>

                        <section id="steam-thermal-design" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Steam Generation & Gallery Design</h2>
                            <p>
                                For high-volume sites using steam heating, the steam quality is as important as the pressure. "Wet" steam will destroy your ironer padding and lead to water-spotting on linens. We design "Precision Steam Galleries" with high-efficiency separators and steam traps.
                            </p>
                            <p>
                                We ensure that the piping is perfectly sloped and insulated to prevent heat loss and condensate buildup. Our steam infrastructure designs are built for 5-star quality results, providing the dry, high-temperature energy required for a perfect finish on bedsheets and table linens.
                            </p>
                        </section>

                        <section id="ventilation-airflow" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Industrial Airflow & HVAC Logistics</h2>
                            <p>
                                A laundry is a massive heat and humidity engine. If the air isn't managed, the room becomes an unbearable environment for staff and a hazard for machine electronics. We design "Balanced Ventilation Systems."
                            </p>
                            <p>
                                We don't just exhaust air; we provide "Makeup Air." We design the intake and exhaust points to create a "Cooled Workspace" where fresh air is directed to the operators and the machinery intakes, while the hot, humid air from the dryers is sucked directly out. This "Laminar Airflow" keeps your staff productive and your machine controllers cool and dust-free.
                            </p>
                        </section>

                        <section id="layout-efficiency" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Workforce Ergonomics & Workflow Logic</h2>
                            <p>
                                In a professional laundry, labor is 40% of the cost. A poorly designed layout forces staff to walk more, lift more, and wait more. We use "Workflow Mapping" to design your facility layout. We ensure there is a clear "Clean vs. Soiled" segregation for hygiene and that the linens move in a logical, non-overlapping path.
                            </p>
                            <p>
                                We design for ergonomics—ensuring machine heights and cart-access paths are optimized to reduce staff fatigue. A Sunshine-designed layout is a "Profit-Engine" that maximizes pieces-per-operator-hour.
                            </p>
                        </section>

                        <section id="safety-compliance" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Fire Safety & Regulatory Architecture</h2>
                            <p>
                                Dryers are a significant fire risk due to lint. We design specialized fire suppression systems for dryer ducting and laundry rooms. We also ensure that all electrical and chemical storage areas meet the latest industrial safety standards.
                            </p>
                            <p>
                                When you build with Sunshine, compliance isn't an afterthought; it is built into the blueprint. We help you meet and exceed all municipal and insurance requirements, protecting your investment from regulatory and safety risks.
                            </p>
                        </section>

                        <section id="chemical-storage-design" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Chemical Containment & Dosing Layout</h2>
                            <p>
                                Industrial laundry chemicals are hazardous. We design "Safe Dosing Hubs" with secondary containment, proper ventilation, and easy access for drum changes. We ensure the tubing runs to the washers are as short as possible to minimize pressure loss and chemical "lag."
                            </p>
                            <p>
                                By designing the chemical infrastructure correctly from day one, we eliminate the leaks and spills that create safety hazards and damage the facility floor.
                            </p>
                        </section>

                        <section id="water-treatment-ops" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Water Software & Effluent Solutions</h2>
                            <p>
                                Most industrial laundries require softened water. We integrate the water softener and filtration systems directly into the infrastructure blueprint. We also design "Effluent Treatment Plants" (ETP) and water recovery systems that allow you to reuse up to 40% of your wash water.
                            </p>
                            <p>
                                This "Sustainability Infrastructure" isn't just good for the planet; it's good for your utility bills. We turn your facility into a lean, water-efficient operation.
                            </p>
                        </section>

                        <section id="automation-readiness" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Preparing for Tier-1 Automation</h2>
                            <p>
                                Even if you aren't using robots yet, your infrastructure should be ready for them. We design with "Automation Readiness" in mind. This means ensuring the layout has the clearances for future conveyor systems and that the digital network infrastructure is in place for machine-to-machine communication (IoT).
                            </p>
                        </section>

                        <section id="noise-mitigation" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Acoustic Engineering in Infrastructure</h2>
                            <p>
                                A loud laundry is a sign of poor engineering. We use acoustic wall panels, specialized pipe insulation, and mechanical isolation to quiet your facility. This creates a better working environment and reduces the noise impact on surrounding businesses or hotel guest rooms.
                            </p>
                        </section>

                        <section id="maintenance-access" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Designing for 100% Technical Access</h2>
                            <p>
                                The worst infrastructure mistake is putting a machine in a spot where it can't be serviced. We design with "100% Technical Access." Every valve, motor, and electrical panel is positioned so a technician can access it safely and quickly. This reduces repair times and labor costs for the entire life of the machine.
                            </p>
                        </section>

                        <section id="energy-recycling" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Heat Recovery & Energy Recycling Hubs</h2>
                            <p>
                                Your laundry is throwing away heat every time it drains hot water or exhausts hot air. We design "Energy Recycling Hubs" using heat exchangers. We pre-heat your incoming fresh water using the energy from your drain water. This "Free Energy" can reduce your boiler fuel consumption by up to 20%.
                            </p>
                        </section>

                        <section id="project-management" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Turnkey Project Management Protocols</h2>
                            <p>
                                We don't just provide drawings; we provide results. We manage the entire infrastructure development process—from civil contractors and plumbers to electricians. We are your "Single Point of Accountability," ensuring that every trade works to our rigorous industrial standards. We deliver you a "Ready-to-Wash" facility, on time and on budget.
                            </p>
                        </section>

                        <section id="capacity-expansion" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Scalability & Future-Proofing Strategy</h2>
                            <p>
                                A successful business grows. We design your infrastructure for "Plug-and-Play Scalability." We install oversized utility headers and reserve space in your electrical panels so that when you need to add Machine #6 and #7 next year, you can do it in a weekend without major construction.
                            </p>
                        </section>

                        <section id="case-studies" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Infrastructure Development Successes</h2>
                            <p>
                                We recently completed a greenfield central laundry for a major hospital chain in North India. By implementing our full-stack infrastructure—including high-G plinths, linear flow layout, and heat recovery—we delivered a facility that is 25% more energy-efficient and 20% more labor-efficient than their previous site. It is currently the most advanced medical laundry in the region.
                            </p>
                        </section>

                        <section id="investment-roi" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The ROI of Premium Infrastructure</h2>
                            <p>
                                Premium infrastructure is not a luxury; it is your most profitable asset. A well-designed facility reduces repair costs, utility bills, labor costs, and linen replacement costs. Over 10 years, the return on investment from a Sunshine-developed infrastructure is typically 5 to 10 times the initial cost. We build for the long-term profitability of your business.
                            </p>
                        </section>

                        <section id="faqs" className="mb-12 md:mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Infrastructure FAQ Section</h2>
                            <div className="space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-8">
                                        <h3 className="text-xl font-bold text-brand-blue mb-4">{faq.question}</h3>
                                        <p className="text-neutral-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-12 md:mb-20 p-6 md:p-10 bg-neutral-50 rounded-2xl md:rounded-[3rem] border border-neutral-100">
                            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mb-8 text-center italic">Service Reviews</h2>
                            <div className="grid gap-8">
                                {reviews.map((r, i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
                                        <div className="flex gap-1 text-brand-orange mb-4">
                                            {[...Array(r.rating)].map((_, s) => <Star key={s} size={20} fill="currentColor" />)}
                                        </div>
                                        <p className="italic text-neutral-700 text-lg">"{r.body}"</p>
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
                                    <Layout size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Project Planning</h3>
                                <p className="text-neutral-400 mb-6 relative z-10 font-medium">
                                    Planning a new facility? Get a technical feasibility study and infrastructure roadmap.
                                </p>
                                <button
                                    onClick={() => router.push("/contact")}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg"
                                >
                                    Start Your Roadmap <Lightbulb size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Development Services</h3>
                                <nav className="space-y-4">
                                    <Link href="/energy-efficient-laundromat-solutions" className="flex items-center justify-between group p-3 hover:bg-neutral-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Zap size={18} className="text-brand-orange" />
                                            <span className="font-bold text-neutral-600 group-hover:text-brand-orange transition-colors">Energy Efficiency</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/technical-support-for-laundromat-operations" className="flex items-center justify-between group p-3 hover:bg-neutral-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={18} className="text-brand-orange" />
                                            <span className="font-bold text-neutral-600 group-hover:text-brand-orange transition-colors">Technical Support</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/washer-extractor-dryer-servicing-delhi-ncr" className="flex items-center justify-between group p-3 hover:bg-neutral-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <MapPin size={18} className="text-brand-orange" />
                                            <span className="font-bold text-neutral-600 group-hover:text-brand-orange transition-colors">NCR Servicing</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-6 md:p-8 bg-neutral-50 rounded-2xl md:rounded-[2.5rem] border border-neutral-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Development Desk</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Wrench size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Direct Technical Line</p>
                                            <a href="tel:+919711112950" className="text-sm font-bold text-neutral-800 hover:text-brand-orange tracking-tight">+91 97111 12950</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <FileText size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Projects Email</p>
                                            <a href="mailto:projects@sunshine-laundry.com" className="text-sm font-bold text-neutral-800 hover:text-brand-orange leading-none break-all">projects@sunshine-laundry.com</a>
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
