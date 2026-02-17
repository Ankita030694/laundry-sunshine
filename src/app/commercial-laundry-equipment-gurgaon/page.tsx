"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck, Zap, Droplets, TrendingUp, Settings, Wrench, Activity, BarChart3, ChevronRight, Star, MapPin, Search } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import CTA from "@/components/CTA";

const sections = [
    { id: "gurgaon-revolution", title: "Gurgaon's Commercial Laundry Revolution" },
    { id: "hospitality-excellence", title: "Hospitality & Hotel Laundry Gurugram" },
    { id: "healthcare-sanitization", title: "Medical Laundry Excellence" },
    { id: "industrial-manesar", title: "Industrial Laundry Manesar & Sohna" },
    { id: "tech-specifications", title: "Technical Specifications" },
    { id: "extraction-tech", title: "High-Extraction Technology" },
    { id: "climate-drying", title: "Gurgaon Climate Drying Solutions" },
    { id: "textile-finishing", title: "Luxury Textile Finishing" },
    { id: "iot-management", title: "IOT & Smart Management" },
    { id: "haryana-sustainability", title: "Haryana Sustainability Initiatives" },
    { id: "energy-recovery", title: "Energy Recovery Systems" },
    { id: "safety-compliance", title: "Operational Safety" },
    { id: "maintenance-support", title: "Preventative Maintenance" },
    { id: "installation-ncr", title: "Site Installation Delhi NCR" },
    { id: "roi-economics", title: "Facility Economics & ROI" },
    { id: "future-automation", title: "Automation & The Future" },
    { id: "faqs", title: "Technical FAQs" },
];

const faqs = [
    {
        question: "Why is Gurgaon a hub for commercial laundry equipment?",
        answer: "Gurgaon's massive concentration of luxury hotels, corporate headquarters, and multi-specialty hospitals creates a primary demand for high-volume, medical-grade laundry infrastructure. The city's status as a global business hub demands international standards of linen hygiene and fabric longevity."
    },
    {
        question: "What is the typical lead time for equipment installation in Delhi NCR?",
        answer: "For standard industrial setups, we offer a 7 to 10 day turnaround from site ready status. Large scale tunnel washers or specialized medical barrier laundries may take 4 to 6 weeks depending on custom engineering requirements."
    },
    {
        question: "How do you handle the high TDS water in Gurgaon?",
        answer: "Gurgaon's ground water often exceeds 1000 ppm TDS. We integrate heavy-duty industrial water softeners and RO filtration units with our washing systems to prevent mineral scaling on heating elements and ensure chemical efficacy."
    },
    {
        question: "Are your machines compliant with Haryana pollution control standards?",
        answer: "Yes, all Sunshine industrial systems feature water recovery loops and eco-drain technologies that comply with the Haryana State Pollution Control Board (HSPCB) norms for zero liquid discharge (ZLD) in specific zones."
    },
    {
        question: "What is the average energy saving with your IoT dryers?",
        answer: "Our moisture-sensing technology reduces cycle times by 20 to 30 percent. In a typical Gurugram commercial laundry, this translates to monthly utility savings of approximately ₹45,000 to ₹80,000 depending on volume."
    },
    {
        question: "Do you provide on-site training for laundry staff in Gurgaon?",
        answer: "Absolutely. We provide comprehensive on-site workshops covering machine operations, chemical safety, ergonomic loading, and basic troubleshooting for all local hospitality and healthcare staff."
    },
    {
        question: "Can I upgrade my existing facility with newer energy recovery systems?",
        answer: "Yes, we specialize in retrofitting heat exchangers and VFD (Variable Frequency Drive) controllers to legacy industrial machines, allowing older facilities to achieve modern efficiency standards without a full replacement."
    },
    {
        question: "What is the response time for service calls in Gurgaon?",
        answer: "We maintain a dedicated service hub in Sector 34, Gurgaon. For Tier-1 maintenance partners, we guarantee a 4-hour on-site response time for critical equipment failures."
    },
    {
        question: "Does your equipment support mobile app payments for staff laundries?",
        answer: "Yes, our commercial range includes fully integrated QR-code and RFID payment systems compatible with all major Indian digital wallets and corporate ID cards."
    },
    {
        question: "What is the ROI on a 100kg washer extractor system?",
        answer: "With current utility and labor costs in the NCR region, most hospitality clients see a full return on investment through utility savings and linen replacement reduction within 18 to 24 months."
    }
];

const reviews = [
    {
        name: "Abhishek Kapoor",
        role: "Property Manager, Cyber City Commercial Center",
        content: "Sunshine's commercial laundry solutions in Gurgaon have been pivotal for our occupancy services. Their equipment is robust enough for 24/7 operations and the local support team is incredibly professional.",
        rating: 5
    },
    {
        name: "Dr. Ritu Singhal",
        role: "Medical Director, Medanta Region Support",
        content: "The barrier washers installed by Sunshine have revolutionized our infection control metrics. Their technical understanding of medical-grade sanitization is superior to any other supplier in Delhi NCR.",
        rating: 5
    },
    {
        name: "Siddharth Malhotra",
        role: "Chief Engineer, Hyatt Regency Gurgaon",
        content: "Managing a large scale hotel laundry requires absolute reliability. Sunshine's 50kg washer extractors have handled our peak wedding season volume without a single glitch. Their energy recovery systems are the real deal.",
        rating: 5
    },
    {
        name: "Meenakshi Iyer",
        role: "Owner, Elite Laundromat Chain",
        content: "As a multi-store owner in Gurgaon, I value the IoT integration. Being able to track water and soap consumption remotely has allowed me to optimize my margins by 15 percent this year.",
        rating: 5
    },
    {
        name: "Karan Sethi",
        role: "Facility Lead, Manesar Industrial Estate",
        content: "Professional, timely, and technically sound. Their installation team handled our industrial workwear laundry setup with precision. The machines are built like tanks.",
        rating: 5
    }
];

export default function CommercialLaundryGurgaon() {
    const { openContactModal } = useModal();
    const websiteUrl = "https://sunshine-laundry.com/commercial-laundry-equipment-gurgaon";
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
                "name": "Commercial Laundry Equipment in Gurgaon | Sunshine Equipments",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Premium commercial laundry equipment in Gurgaon. Industrial washers, dryers, and ironing systems for hotels, hospitals, and laundries in NCR.",
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
                        "name": "Commercial Laundry Equipment Gurgaon",
                        "item": websiteUrl
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Commercial Laundry Equipment in Gurgaon: The High-Volume Roadmap",
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
                "name": "Industrial Laundry Equipment Systems Gurgaon",
                "description": "Professional-grade laundry systems for Gurgaon's industrial and hospitality sectors. High-extraction washers, energy-efficient dryers, and automated ironers.",
                "brand": {
                    "@type": "Brand",
                    "name": brandName
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "245"
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
                    <Image src="/hero-bg.jpg" alt="Commercial Laundry Gurgaon" fill className="object-cover" priority />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-sm font-bold mb-8 uppercase tracking-widest leading-none">
                        <MapPin size={16} className="text-brand-orange" /> Gurgaon & Delhi NCR Premier Supplier
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Commercial Laundry <br /><span className="text-brand-orange italic">Equipment in Gurgaon</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium transition-all duration-300">
                        The ultimate destination for industrial washers, moisture-sensing dryers, and automated finishing systems. Engineered for the high-volume demands of Millennium City's hospitality and healthcare icons.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={openContactModal}
                            className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3 group"
                        >
                            Request Technical Audit <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
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
                    { label: "Gurgaon Commercial Equipment", href: "/commercial-laundry-equipment-gurgaon" }
                ]} />
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-6 py-12">
                <div className="grid grid-cols-12 gap-12">
                    {/* Left: Table of Contents */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} title="Gurgaon Guide" orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle: Main Content */}
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">

                        <section id="gurgaon-revolution" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Gurgaon's Commercial Laundry Revolution</h2>
                            <p>
                                Gurugram, or Gurgaon as it is still widely known, has transitioned from a sleepy suburb to the "Millennium City" of India. This rapid transformation has brought with it an insatiable demand for world class infrastructure, and nowhere is this more evident than in the commercial laundry sector. As skyscrapers redefined the skyline, a parallel revolution was taking place in the basements and utility wings of these giants. The primitive, labor intensive laundry methods of the past were being replaced by localized, high efficiency <strong>commercial laundry equipment in Gurgaon</strong>.
                            </p>
                            <p>
                                Today, a typical luxury hotel or multi specialty hospital in Gurgaon cannot afford a single hour of downtime in its laundry operations. The sheer volume of linen, ranging from high thread count Egyptian cotton sheets to sterile surgical scrubs, requires a level of precision that only industrial grade machinery can provide. We at Sunshine Equipments have been at the forefront of this shift, providing the technical backbone for the city's most prestigious institutions.
                            </p>
                            <p>
                                The local market is unique due to several factors: the extreme climate variations of Northern India, the high mineral content in the regional water supply, and the incredibly fast paced business environment. Our solutions are not just imported machines; they are engineered ecosystems designed to thrive in the NCR's specific operational landscape. From Cyber City to Golf Course Road, our machines are quietly powering the back-of-house excellence that defines Gurgaon's premium lifestyle.
                            </p>
                        </section>

                        <section id="hospitality-excellence" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange italic">Hospitality & Hotel Laundry Gurugram</h2>
                            <p>
                                Gurgaon is home to one of the highest concentrations of luxury hotel rooms in South Asia. For these establishments, the quality of a guest's stay is often judged by the crispness of the pillowcase and the plushness of the towel. Achieving this level of "silent luxury" requires more than just soap and water; it requires controlled thermal ramps, precise chemical dosing, and humidity managed drying.
                            </p>
                            <p>
                                Our <strong>commercial laundry equipment in Gurgaon</strong> for the hospitality sector focuses on fabric integrity and operational speed. Our high-extraction washer extractors use G-forces of up to 450G to remove maximum moisture before the linen even hits the dryer. This reduces drying times by up to 40 percent, saving thousands in gas and electricity bills while ensuring that guests always have a fresh supply of towels, even during 100 percent occupancy periods.
                            </p>
                            <p>
                                Furthermore, we integrate flatwork ironers that use heated rollers to provide a mirror like finish on king size bedsheets and tablecloths. In a city where large scale weddings and corporate events are a daily occurrence, the ability to process 2000 napkins an hour is a necessity, not a luxury. Sunshine's ironers are the industry standard for the "Signature crisp" that Gurgaon's 5-star properties are known for.
                            </p>
                        </section>

                        <section id="healthcare-sanitization" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Medical Laundry Excellence</h2>
                            <p>
                                If the hospitality sector is about comfort, the healthcare sector is about survival. Gurgaon's world-class medical hubs, including Medanta, Fortis, and Max, operate some of the most advanced healthcare systems in the world. In these environments, laundry is a critical component of infection control. A failure to properly decontaminate a single surgical drape can have catastrophic consequences.
                            </p>
                            <p>
                                Our medical grade systems in Gurgaon are built around the concept of "Barrier Separation." Our barrier washers feature two doors on opposite sides of the machine. Contaminated linen enters through the "soiled side" door, and after a microprocessor controlled thermal disinfection cycle, the sanitized linen is removed through the "clean side" door in a separate room. This physical separation is the gold standard for preventing healthcare associated infections (HAIs).
                            </p>
                            <p>
                                We provide technicians with specialized training in medical laundry protocols, ensuring that every machine in a Gurgaon hospital is calibrated to provide 71 degrees Celsius for at least 3 minutes, as per international sanitization standards. This precision ensures that pathogens are eradicated while protecting the expensive medical textiles from premature degradation.
                            </p>
                        </section>

                        <section id="industrial-manesar" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">Industrial Laundry Manesar & Sohna</h2>
                            <p>
                                Extending beyond the corporate towers of Gurgaon are the massive industrial belts of Manesar and Sohna. These regions house some of the largest automotive and electronics manufacturing units in Asia. For these industries, laundry is about maintaining the safety and cleanliness of workwear and specialized clean-room garments.
                            </p>
                            <p>
                                Industrial laundry in Manesar requires machines that can handle heavy oils, greases, and metallic dust. Our industrial washer extractors are built with oversized bearings and reinforced frames to handle the violent mechanical action needed to break down industrial contaminants. We also provide customized chemical injection headers that can handle up to 10 different specialized detergents for different soil types.
                            </p>
                            <p>
                                For electronics manufacturers, we provide "Anti-Static" drying environments and lint free processing lines. Our engineering team designs the entire workflow for these industrial facilities, ensuring that the staff uniforms are returned to the production floor as clean as the day they were manufactured.
                            </p>
                        </section>

                        <section id="tech-specifications" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Technical Specifications</h2>
                            <p>
                                At the heart of our <strong>industrial laundry solutions India</strong> collection are the technical specifications that separate professional equipment from domestic grade appliances. Our washers are constructed using 304 or 316L grade stainless steel for all components in contact with the wash liquor. This ensures that even with the aggressive chemicals used in hospital laundries, the machines will not corrode over their 20 year lifespan.
                            </p>
                            <p>
                                The control systems are powered by industrial PLCs (Programmable Logic Controllers) that can store up to 99 unique wash programs. This allows a facility manager in Gurgaon to have one button programs for everything from "Premium Silk" to "Blood Stained Linen." The connectivity options allow for remote diagnostics, meaning our support center in Gurgaon can often fix a programming error before the client even notices it.
                            </p>
                        </section>

                        <section id="extraction-tech" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter italic text-brand-blue">High-Extraction Technology</h2>
                            <p>
                                The concept of high-extraction is the most critical factor in modern laundry economics. Every milliliter of water left in the fabric after the wash cycle must be evaporated in the dryer, which is the most energy intensive part of the process. Our <strong>laundry machine suppliers in Delhi NCR</strong> network prioritize machines with high G-factors.
                            </p>
                            <p>
                                By spinning the inner drum at speeds of over 1000 RPM, we create centrifugal force that physically pulls water out of the textile fibers. This "physical drying" is free, whereas "thermal drying" in a tumbler costs money in the form of gas or electricity. For a large scale corporate guest house in Gurgaon, moving from a 150G to a 450G extraction machine can reduce total facility energy costs by as much as 18 percent.
                            </p>
                        </section>

                        <section id="climate-drying" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Gurgaon Climate Drying Solutions</h2>
                            <p>
                                Gurgaon's climate is one of extremes, from the 48 degrees Celsius dry heat of May to the 95 percent humidity of the monsoon in August. A standard dryer will perform very differently in these two scenarios. Our moisture-sensing dryers use internal sensors to measure the air temperature and humidity at the exhaust, automatically ending the cycle the moment the linen reaches the perfect "Residual Moisture Content" (RMC).
                            </p>
                            <p>
                                This prevents "Over-Drying," which is the primary cause of linen shrinkage and fabric "yellowing" in Gurgaon's laundries. By stopping the heat at just the right time, we keep the fibers soft and extend the life of a typical hotel towel by at least 50 wash cycles. In the long run, this utility and linen saving often pays for the machine itself.
                            </p>
                        </section>

                        <section id="textile-finishing" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">Luxury Textile Finishing</h2>
                            <p>
                                Processing the linen is only half the battle; the presentation is the final 10 percent that counts for 90 percent of guest perception. Our finishing line in Gurgaon includes vacuum ironing tables, form finishers for uniforms, and large scale flatwork ironers. These machines use steam or electricity to apply precise pressure and heat, removing every wrinkle and creating that crisp "boutique" look.
                            </p>
                            <p>
                                For the burgeoning "Luxury PG" and corporate housing market in Gurgaon, we provide compact finishing solutions that allow small teams to produce professional results. Our "Chest-Heated" ironers ensure that heat is distributed even across the entire width of the roller, preventing cold spots and ensuring a consistent finish on every single sheet.
                            </p>
                        </section>

                        <section id="iot-management" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">IOT & Smart Management</h2>
                            <p>
                                The modern Gurgaon business leader wants data. Our smart machines provide it in real time. Our IoT-enabled controllers transmit data on water consumption, chemical usage, and cycle duration to a cloud based dashboard. This allows a property manager in Cyber Hub to see if the night shift is using the correct "Eco-Cycles" or if they are wasting water on half-empty loads.
                            </p>
                            <p>
                                This transparency leads to immediate behavioral changes in staff, further driving down costs. This level of oversight is particularly valuable for commercial laundry operators who manage multiple sites across Delhi NCR, allowing for centralized management of a decentralized operation.
                            </p>
                        </section>

                        <section id="haryana-sustainability" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter italic text-brand-orange">Haryana Sustainability Initiatives</h2>
                            <p>
                                Water is a precious resource in Haryana, and regulations regarding water usage and discharge are becoming increasingly stringent. Sunshine's 3-step water recovery system captures the rinse water from one load and stores it in a filtered tank to be used as the wash water for the next load. This reduces total water consumption by up to 60 percent.
                            </p>
                            <p>
                                We also advocate for the use of bio-degradable detergents and oxygen based bleaches. These chemistries are not only better for the environment but are also gentler on the machines and the fabrics. Our equipment is fully compatible with all modern green chemical formulations, helping your Gurgaon business achieve its ESG (Environmental, Social, and Governance) goals.
                            </p>
                        </section>

                        <section id="energy-recovery" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Energy Recovery Systems</h2>
                            <p>
                                Heating water and air takes a massive amount of energy. Our energy recovery units capture the heat from the hot drain water and use it to pre-heat the incoming cold water. Similarly, our dryers can be fitted with air-recirculation systems that reuse the warm exhaust air. In a city like Gurgaon where electricity prices are high, these systems are common sense investments.
                            </p>
                            <p>
                                We've seen cases where a large resort in Sohna was able to shut down its secondary boiler during the summer months simply by utilizing the waste heat recovered from its ironer line. This is the kind of engineering that makes Sunshine the preferred partner for "profitable" sustainability in Northern India.
                            </p>
                        </section>

                        <section id="safety-compliance" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Operational Safety</h2>
                            <p>
                                Safety is non negotiable in an industrial environment. Our <strong>commercial laundry equipment in Gurgaon</strong> features localized emergency stops, door interlocks that prevent opening while the drum is spinning, and fire suppression sensors in dryers. We also focus on ergonomics, ensuring that machines are at the correct height to prevent staff back injuries.
                            </p>
                            <p>
                                We conduct regular safety audits for our Gurgaon clients, checking for steam leaks, electrical hot-spots, and chemical storage violations. A safe laundry room has fewer accidents, lower insurance premiums, and a more motivated workforce.
                            </p>
                        </section>

                        <section id="maintenance-support" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">Preventative Maintenance</h2>
                            <p>
                                The "Buy and Forget" model does not work for industrial machinery. Gurgaon's dusty environment and hard water mean that machines require regular care. Our preventative maintenance center in Gurgaon provides scheduled visits to lubricate bearings, check belt tension, and descale heating elements.
                            </p>
                            <p>
                                This proactive approach ensures that a minor issue doesn't escalate into a catastrophic failure during a busy weekend. We maintain a local inventory of "Critical Spares" in Sector 34, Gurgaon, ensuring that if a part is needed, it's measured in hours, not weeks.
                            </p>
                        </section>

                        <section id="installation-ncr" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter italic">Site Installation Delhi NCR</h2>
                            <p>
                                Installing a 100kg washer is not like installing a home machine. It requires reinforced foundations, high-volume plumbing, and specialized electrical panels. Our project team in New Delhi handles the entire process, from structural consultation to final commissioning.
                            </p>
                            <p>
                                We provide full 2D and 3D CAD layouts for new facilities in Gurgaon, ensuring that the "Linen Flow" is optimized to prevent cross-contamination and minimize staff movement. A well-designed layout can improve total facility productivity by 25 percent.
                            </p>
                        </section>

                        <section id="roi-economics" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Facility Economics & ROI</h2>
                            <p>
                                At the end of the day, commercial laundry is a business. We provide our Gurgaon clients with a detailed ROI (Return on Investment) analysis before they even purchase a machine. We calculate the cost per kilogram of laundry, factoring in chemicals, utilities, labor, and equipment depreciation.
                            </p>
                            <p>
                                Most OPL (On-Premise Laundry) facilities in Gurgaon see a full payback within 24 months compared to outsourcing to a centralized plant. Once the equipment is paid for, the hotel or hospital effectively "profits" on every load of laundry they wash in-house.
                            </p>
                        </section>

                        <section id="future-automation" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-blue">Automation & The Future</h2>
                            <p>
                                The future of commercial laundry in Gurgaon is touchless. We are already talking to clients about robotic folding arms and AI powered vision systems for stain detection. As labor costs in Gurgaon continue to rise, automation will move from a "luxury" to a "survival" strategy.
                            </p>
                            <p>
                                Sunshine is committed to bringing these global technologies to the Indian market, ensuring that Gurgaon continues to be a leader in operational excellence and infrastructure innovation.
                            </p>
                        </section>

                        <section id="faqs">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Technical FAQs</h2>
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
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Industry Feedback Gurgaon</h2>
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
                                    <Link href="/hotel-laundry-equipment-solutions" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Zap size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Hotel Solutions</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
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
