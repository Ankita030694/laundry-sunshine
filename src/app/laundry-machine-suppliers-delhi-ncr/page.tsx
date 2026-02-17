"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck, Zap, Droplets, TrendingUp, Settings, Wrench, Activity, BarChart3, ChevronRight, Star, MapPin, Search } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import CTA from "@/components/CTA";

const sections = [
    { id: "delhi-ncr-landscape", title: "The Delhi NCR Laundry Landscape" },
    { id: "supply-chain-logistics", title: "Supply Chain & Logistics" },
    { id: "noida-corridor", title: "Noida & Greater Noida Industrial Corridor" },
    { id: "okhla-bawana-hubs", title: "Okhla & Bawana Manufacturing Hubs" },
    { id: "ghaziabad-growth", title: "Ghaziabad Commercial Growth" },
    { id: "pricing-dynamics", title: "Wholesale Pricing Dynamics 2025" },
    { id: "technical-superiority", title: "Direct Drive vs. Belt Drive" },
    { id: "steam-ironing", title: "Steam Ironing Infrastructure" },
    { id: "water-basin-management", title: "Yamuna Basin Water Management" },
    { id: "chemical-automation", title: "Chemical Automation & Dispensing" },
    { id: "after-sales-network", title: "Regional After-Sales Infrastructure" },
    { id: "bulk-procurement", title: "Bulk Procurement Strategies" },
    { id: "mobile-service-vans", title: "NCR Mobile Response Strategy" },
    { id: "environmental-policy", title: "Pollution Control & Regulations" },
    { id: "global-vs-indian", title: "Global Standards vs. Indian Builds" },
    { id: "smart-city-laundry", title: "Smart Cities & Smart Laundry" },
    { id: "faqs", title: "Service FAQs" },
];

const faqs = [
    {
        question: "Who are the top laundry machine suppliers in Delhi NCR?",
        answer: "Sunshine Equipments stands as a premier supplier, providing comprehensive industrial solutions across Delhi, Noida, and Gurgaon. We specialize in high-capacity washers, moisture-sensing dryers, and automated flatwork ironers with localized service support."
    },
    {
        question: "What is the price of a 60kg industrial washing machine in Delhi?",
        answer: "As of 2025, a heavy-duty 60kg industrial washing machine typically ranges from ₹1.65 Lakh to ₹3.20 Lakh depending on the extraction speed (G-factor) and the inclusion of PLC-based automation features."
    },
    {
        question: "Do you supply laundry equipment in Noida Extension and Greater Noida?",
        answer: "Yes, we have a dedicated logistics channel for Greater Noida and Noida Extension, serving the booming residential and hospitality sectors in these regions with same-day site visits for technical consultations."
    },
    {
        question: "Can I get AMC services for third-party laundry machines in Ghaziabad?",
        answer: "While we prioritize Sunshine customers, we do offer specialized Multi-Brand AMC (Annual Maintenance Contracts) for large scale facilities in Ghaziabad's industrial zones, provided the machines meet our safety audit standards."
    },
    {
        question: "What power supply is required for a commercial washer-extractor?",
        answer: "Most industrial washer-extractors in the 25kg+ range require a 3-phase, 415V electrical connection. Smaller commercial machines (up to 15kg) can often run on a standard 230V single-phase supply with a 16A socket."
    },
    {
        question: "How do your machines handle the hard water of Faridabad?",
        answer: "Faridabad's water has high mineral content. Our equipment comes with pre-integrated ports for water softeners and our 316-grade stainless steel drums are highly resistant to the pitting and scaling common in hard water areas."
    },
    {
        question: "What is the warranty period for Sunshine industrial machines in NCR?",
        answer: "We provide a standard 12-month comprehensive warranty on all moving parts and electronics, with an extended 5-year warranty option for the stainless steel drum and structural frame for all Delhi NCR clients."
    },
    {
        question: "Are there government subsidies for energy-efficient laundry machines in India?",
        answer: "Under the MSME schemes and certain state industrial policies in Haryana and UP, businesses can benefit from capital subsidies and interest subvention for investing in green, energy-efficient manufacturing equipment."
    },
    {
        question: "How long does a typical industrial ironer take to heat up?",
        answer: "Our modern steam and electric heated ironers reach operational temperature (approx. 165-180°C) within 15 to 25 minutes, optimized specifically to minimize morning energy surges in hotel laundries."
    },
    {
        question: "Do you offer buy-back or exchange for old laundry machines?",
        answer: "Yes, we have a structured trade-in program where we evaluate your old industrial machinery and provide a competitive valuation that can be adjusted against the purchase of new, IoT-enabled Sunshine equipment."
    }
];

const reviews = [
    {
        name: "Vikrant Chauhan",
        role: "Director, Premium Wash Delhi",
        content: "Navigating the supplier market in Delhi was exhausting until we found Sunshine. Their transparency regarding spare parts availability in Okhla changed everything for our chain of dry cleaners.",
        rating: 5
    },
    {
        name: "Ananya Bhardwaj",
        role: "Facility Manager, Noida Corporate Suites",
        content: "The level of technical detail Sunshine provides is unmatched. Their team mapped out our entire drain and steam line layout in Greater Noida before a single machine was delivered. Truly a professional experience.",
        rating: 5
    },
    {
        name: "Prakash Jha",
        role: "Operational Head, Ghaziabad Medical Hub",
        content: "In a hospital setting, we cannot compromise. Sunshine's barrier machines have been running 18 hours a day for two years without a single major breakdown. Their NCR service network is very responsive.",
        rating: 5
    },
    {
        name: "Rohan Vashisht",
        role: "Project Consultant, NCR Hospitality Group",
        content: "Value for money and technical superiority. Their high-extraction technology has saved our clients significantly on LPG costs for dryers. Highly recommended for any new commercial project in Delhi.",
        rating: 5
    },
    {
        name: "Sonia Gupta",
        role: "Owner, Green Laundry Faridabad",
        content: "Their water recycling modules helped us get our environmental clearances much faster. The machines are energy-efficient and the ROI was exactly what they promised in the initial audit.",
        rating: 5
    }
];

export default function LaundrySuppliersDelhiNCR() {
    const { openContactModal } = useModal();
    const websiteUrl = "https://sunshine-laundry.com/laundry-machine-suppliers-delhi-ncr";
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
                "name": "Laundry Machine Suppliers in Delhi NCR | Sunshine Equipments",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Premium laundry machine suppliers in Delhi NCR. Wholesale industrial washers, dryers, and ironing systems for Noida, Gurgaon, and Ghaziabad.",
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
                        "name": "Laundry Machine Suppliers Delhi NCR",
                        "item": websiteUrl
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Laundry Machine Suppliers in Delhi NCR: Industrial & Commercial Guide",
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
                "name": "Commercial Laundry Equipment Delhi NCR",
                "description": "Professional-grade laundry machines for Delhi, Noida, Gurgaon, and Ghaziabad. High-performance industrial washers and dryers with local support.",
                "brand": {
                    "@type": "Brand",
                    "name": brandName
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "310"
                },
                "review": reviews.map(review => ({
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": review.name
                    },
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": review.rating.toString()
                    },
                    "reviewBody": review.content
                }))
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
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/hero-bg.jpg" alt="Laundry Machine Suppliers Delhi NCR" fill className="object-cover" priority />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-sm font-bold mb-8 uppercase tracking-widest leading-none">
                        <MapPin size={16} className="text-brand-orange" /> Delhi, Noida, Gurgaon &amp; Beyond
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Laundry Machine <br /><span className="text-brand-orange italic">Suppliers in Delhi NCR</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium transition-all duration-300">
                        Strategically located to serve the National Capital Region&apos;s booming industrial corridors. Premium wholesale distribution of washer-extractors, dryers, and flatwork ironers with unmatched local technical support.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={openContactModal}
                            className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3 group"
                        >
                            Request Regional Quote <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="tel:+919711112950"
                            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all flex items-center gap-3"
                        >
                            <Phone size={24} /> +91 97111 12950
                        </a>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[
                    { label: "Delhi NCR Suppliers", href: "/laundry-machine-suppliers-delhi-ncr" }
                ]} />
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-6 py-12">
                <div className="grid grid-cols-12 gap-12">
                    {/* Left: Table of Contents */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} title="NCR Master Guide" orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle: Main Content */}
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">

                        <section id="delhi-ncr-landscape" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">The Delhi NCR Laundry Landscape</h2>
                            <p>
                                The National Capital Region (NCR) represents one of the most complex yet vibrant commercial landscapes in the world. Encompassing New Delhi and its satellite cities like Noida, Gurgaon, Ghaziabad, and Faridabad, the region acts as the commercial heartbeat of Northern India. Within this massive urban sprawl, the demand for sophisticated <strong>laundry machine suppliers in Delhi NCR</strong> has seen a parabolic rise. This isn't just about selling a washing machine; it's about powering the services that keep a megacity running.
                            </p>
                            <p>
                                From the heritage hotels of South Delhi to the cutting edge IT parks of Noida Sector 62, every business requires a specific laundry solution tailored to its operational throughput. The variety of garments being processed is vast: corporate uniforms, high-end guest linens, industrial overalls, and medical scrubs. Each requires a different thermal profile and mechanical action. Sunshine Equipments has spent decades mapping this landscape, ensuring that our supply chain is as robust as our machines.
                            </p>
                            <p>
                                The regional landscape is also characterized by its environmental challenges. Water scarcity in certain pockets and varying power grid stability mean that an industrial laundry in Okhla might need a very different setup than one in Gurgaon. As a local leader, we provide the localized engineering knowledge that global catalog-sellers simply cannot match. We don't just supply hardware; we supply regional operational certainty.
                            </p>
                        </section>

                        <section id="supply-chain-logistics" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange italic">Supply Chain & Logistics</h2>
                            <p>
                                Logistics in a city as dense as Delhi is a specialized discipline. Delivering a 500kg washer extractor to a 10th-floor laundry facility in a Connaught Place hotel requires more than just a truck; it requires precision rigging, crane coordination, and deep knowledge of old Delhi's architectural constraints. Our <strong>laundry machine suppliers in Delhi NCR</strong> network is built on a "Logistics First" philosophy.
                            </p>
                            <p>
                                We maintain a central warehouse in New Delhi that serves as the hub for the entire NCR region. This allows us to offer "Just-in-Time" delivery for spare parts and critical electrical components. Our fleet of specialized delivery vehicles is equipped with hydraulic tail-lifts and non-marking rollers, ensuring that your equipment arrives in pristine condition regardless of the site's accessibility.
                            </p>
                            <p>
                                Furthermore, we have pre-cleared logistics routes for the industrial zones of Greater Noida and Manesar, allowing us to bypass typical commercial traffic bottlenecks. This operational efficiency is passed on to our clients in the form of lower delivery costs and faster installation timelines. When you partner with Sunshine, you are partnering with a logistics powerhouse that understands the rhythm of the National Capital.
                            </p>
                        </section>

                        <section id="noida-corridor" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Noida & Greater Noida Industrial Corridor</h2>
                            <p>
                                The Noida-Greater Noida Expressway has become the primary industrial corridor for Northern India. With the upcoming Jewar International Airport, this region is slated to become a global manufacturing and hospitality hub. For businesses here, the scale of operations is massive. A typical "Linen Management System" for a Greater Noida resort might handle upwards of 5 tons of laundry per day.
                            </p>
                            <p>
                                Our presence in the Noida corridor focuses on high-capacity automation. We provide tunnel washers and large-scale industrial dryers that are designed for continuous 24/7 operation. The focus here is on "Throughput per Square Foot." Our machines are designed to be modular, allowing a growing hospitality chain to start with a standard setup and add capacity as their room count increases.
                            </p>
                            <p>
                                We also work closely with the specialized "Institutional" sector in Noida, including boarding schools and university campuses. For these clients, we design high-volume laundries that can process 500 bedsheets in a single morning shift, allowing the facility to maintain a small staff footprint while meeting massive logistical demands.
                            </p>
                        </section>

                        <section id="okhla-bawana-hubs" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">Okhla & Bawana Manufacturing Hubs</h2>
                            <p>
                                Okhla Industrial Area and Bawana are the traditional manufacturing hubs of New Delhi. These areas house thousands of garment exporters and small-to-medium industrial units. For these businesses, laundry is part of the manufacturing process itself. Garment washing, stone-washing, and enzyme treatments require machines that are virtually indestructible.
                            </p>
                            <p>
                                Our "Industrial Workhorse" series, popular in the Okhla belt, features extra-thick stainless steel shells and heavy-duty V-belt drives that can survive the constant vibration and chemical exposure of a garment processing unit. We understand that in Bawana, a machine breakdown doesn't just halt laundry; it can halt an entire export shipment. That's why we maintain a high concentration of technical staff specifically for these zones.
                            </p>
                        </section>

                        <section id="ghaziabad-growth" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Ghaziabad Commercial Growth</h2>
                            <p>
                                Ghaziabad has evolved from an industrial satellite to a massive residential and commercial center. The growth of healthcare facilities and high-rise apartment complexes along the Hindon elevated road has created a new market for commercial laundry. Our installations in Ghaziabad often focus on "Multi-Housing Laundries" and commercial dry-cleaning hubs.
                            </p>
                            <p>
                                We provide coin-operated and app-managed machines for the residential sector, allowing builders to provide premium amenities to their residents. In the commercial dry-cleaning space, our hydrocarbon and Perc-free machines are the top choice for entrepreneurs looking to open a premium retail outlet in Indirapuram or Raj Nagar Extension.
                            </p>
                        </section>

                        <section id="pricing-dynamics" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter italic text-brand-blue">Wholesale Pricing Dynamics 2025</h2>
                            <p>
                                Pricing for <strong>industrial laundry solutions India</strong> has historically been opaque. Sunshine Equipments is changing that with transparent, wholesale-driven pricing modules for the NCR region. By leveraging our massive volume, we are able to provide pricing that is 15 to 20 percent lower than typical retail agents in Delhi.
                            </p>
                            <p>
                                Our pricing models factor in the "Total Cost of Ownership." This means we don't just look at the initial sticker price; we look at utility consumption, expected spare parts lifespan, and residual value. For a commercial laundry start-up in Delhi, this financial transparency is the difference between a successful business plan and a failed venture. In 2025, we are also introducing flexible lease-to-own models for verified corporate entities in NCR.
                            </p>
                        </section>

                        <section id="technical-superiority" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Direct Drive vs. Belt Drive</h2>
                            <p>
                                One of the most common technical debates we have with our Delhi NCR clients is the choice between Direct Drive and Belt Drive systems. Most modern <strong>laundry machine suppliers in Delhi NCR</strong> are moving toward Direct Drive technology for its energy efficiency and reduced noise levels, which is crucial for hotel laundries located near guest areas.
                            </p>
                            <p>
                                Our Direct Drive washers eliminate the need for belts, pulleys, and complex transmission systems. This means fewer moving parts to fail and a measurable reduction in vibrations. For an older building in central Delhi where structural vibration can be a concern, our vibration-isolated Direct Drive machines are the only viable solution.
                            </p>
                        </section>

                        <section id="steam-ironing" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">Steam Ironing Infrastructure</h2>
                            <p>
                                Delhi is the capital of fashion and corporate power, and that means a high demand for perfectly ironed garments. Industrial steam ironing is the core of this service. We provide high-pressure steam generators and vacuum finishing tables that can be integrated into any existing facility.
                            </p>
                            <p>
                                Our "Form Finisher" units are particularly popular with corporate laundry hubs in Gurgaon and Noida. These machines use a heated "bust" to finish jackets and shirts in seconds, providing a symmetrical, high-quality finish that is impossible to achieve with a manual hand-iron. This level of automation allows one operator to do the work of four, dramatically reducing labor costs in high-rent NCR districts.
                            </p>
                        </section>

                        <section id="water-basin-management" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Yamuna Basin Water Management</h2>
                            <p>
                                Operating a laundry in the Yamuna basin requires a deep respect for water resources. Regional water often presents challenges ranging from high salinity to heavy mineral deposits. Our <strong>laundry machine suppliers in Delhi NCR</strong> strategy include the mandated use of magnetic descalers and specialized chemical feeders to protect the machines.
                            </p>
                            <p>
                                We also provide specialized "Water Audits" for our clients in Faridabad and Ghaziabad. Our chemical engineers analyze your local water supply and create a custom "Wash Recipe" that ensures maximum cleanliness with minimum water wastage. This data-driven approach is what allows our clients to maintain 5-star linen quality even in areas with difficult water chemistry.
                            </p>
                        </section>

                        <section id="chemical-automation" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter italic text-brand-orange">Chemical Automation & Dispensing</h2>
                            <p>
                                Over-dosing of chemicals is the leading cause of linen damage and environmental pollution in Indian laundries. Our machines in the NCR region are fitted with 8-port digital chemical injection systems. These pumps deliver the exact amount of detergent, bleach, and softener at precisely the right moment in the cycle, down to the milliliter.
                            </p>
                            <p>
                                By removing the "human element" from chemical handling, we ensure consistent results and eliminate the risk of chemical burns or spills. For a large hospital in South Delhi, this level of automation ensures that every load is perfectly sanitized every single time, without exception.
                            </p>
                        </section>

                        <section id="after-sales-network" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Regional After-Sales Infrastructure</h2>
                            <p>
                                The true value of a supplier is revealed after the sale. We have established a "Regional Service Hub" in Okhla, New Delhi, that serves as a central dispatch for our 40+ field technicians. Every Sunshine tech in the NCR region is equipped with a digital service kit and a direct link to our factory engineering team.
                            </p>
                            <p>
                                We guarantee that 95 percent of spare parts for our machines are stocked within the NCR at all times. This means that if a heater element fails in a Gurgaon hotel at 8:00 AM, we can have it replaced before the afternoon shift begins. This is the "Sunshine Speed" that has made us the trusted partner for NCR's hospitality icons.
                            </p>
                        </section>

                        <section id="bulk-procurement" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Bulk Procurement Strategies</h2>
                            <p>
                                For large developers and hospital groups managing multiple sites in Noida, Gurgaon, and Delhi, we offer specialized bulk procurement strategies. This involves creating a "Standard Equipment Spec" for all your properties, which simplifies maintenance, staff training, and spare parts management.
                            </p>
                            <p>
                                When you standardize on Sunshine equipment across your NCR portfolio, you benefit from cumulative volume discounts and a single point of failure management. Our corporate account managers provide monthly "Facility Health Reports" for your entire fleet, allowing you to predict expenditure and manage your CAPEX with 100 percent accuracy.
                            </p>
                        </section>

                        <section id="mobile-service-vans" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-blue">NCR Mobile Response Strategy</h2>
                            <p>
                                Traffic in Delhi is unpredictable, but your maintenance shouldn't be. We have pioneered the "Mobile Service Van" concept for the NCR. Each van is a moving workshop, carrying a full selection of common spares and specialized diagnostic tools.
                            </p>
                            <p>
                                These vans are strategically stationed at Okhla, Manesar, and Noida, allowing for rapid deployment to any site. This localized presence ensures that we can beat the traffic and keep your laundry operational, no matter how congested the Ring Road may be.
                            </p>
                        </section>

                        <section id="environmental-policy" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Pollution Control & Regulations</h2>
                            <p>
                                Compliance with the Delhi Pollution Control Committee (DPCC) and UPPCB norms is mandatory for any commercial laundry. We help our clients navigate these complex waters by providing environmental-grade machines and support in filing the necessary documentation.
                            </p>
                            <p>
                                Our "Zero-Emission" dryer range and water recycling loops are specifically designed to help facilities stay within their permissible discharge limits. We don't just sell machines; we sell legal and operational peace of mind.
                            </p>
                        </section>

                        <section id="global-vs-indian" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Global Standards vs. Indian Builds</h2>
                            <p>
                                While many <strong>laundry machine suppliers in Delhi NCR</strong> import generic machines from China, Sunshine follows a "Global Standards, Indian Soul" philosophy. Our equipment is designed to European standards of safety and efficiency but is built with "Heavy-Duty Indian Hardware."
                            </p>
                            <p>
                                This means our electrical components are designed to handle the voltage fluctuations common in the North Indian grid, and our mechanical parts are "Over-Engineered" to handle 16-hour workdays. You get the efficiency of a German machine with the ruggedness needed for an Indian industrial environment.
                            </p>
                        </section>

                        <section id="smart-city-laundry" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">Smart Cities & Smart Laundry</h2>
                            <p>
                                As Noida and Gurgaon evolve into "Smart Cities," the laundry room is also becoming smart. We are currently integrating RFID-based garment tracking for several high-end corporate hostels in NCR. This allows for 100 percent visibility into the laundry cycle, from collection to delivery.
                            </p>
                            <p>
                                Future integrations include AI-driven "Predictive Load Balancing," which uses machine learning to suggest the most energy-efficient sequence for your daily laundry loads. At Sunshine, we are not just supplying machines; we are building the digital future of the NCR's commercial laundry industry.
                            </p>
                        </section>

                        <section id="faqs">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Service FAQs</h2>
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
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Industry Feedback NCR</h2>
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
                    </article>

                    {/* Right Column: Sticky CTA & Related */}
                    <aside className="col-span-12 lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            {/* Sidebar CTA */}
                            <div className="bg-brand-blue text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <TrendingUp size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight text-red-400 uppercase text-[10px] tracking-[0.2em]">Live Operation Audit</h3>
                                <p className="text-white mb-6 relative z-10 font-bold text-2xl">
                                    Is your laundry losing money?
                                </p>
                                <button
                                    onClick={openContactModal}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg"
                                >
                                    Book Free Energy Audit <ArrowRight size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Explore More</h3>
                                <nav className="space-y-4">
                                    <Link href="/commercial-laundry-equipment-gurgaon" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <MapPin size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Gurgaon Solutions</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/industrial-laundry-solutions-india" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">All-India Industrial</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/healthcare-laundry-equipment-maintenance" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Wrench size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Maintenance Support</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Direct Procurement</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Phone size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">24/7 Priority Hotline</p>
                                            <a href="tel:+919711112950" className="text-sm font-bold text-gray-800 hover:text-brand-orange tracking-tight">+91 97111 12950</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Mail size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Corporate Email</p>
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
