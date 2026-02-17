"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck, Zap, Droplets, TrendingUp, Settings, Wrench, Activity, BarChart3, ChevronRight, Star, MapPin, Search, Globe } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import CTA from "@/components/CTA";

const sections = [
    { id: "indian-awakening", title: "The Indian Industrial Laundry Awakening" },
    { id: "economic-drivers", title: "Macro-Economic Drivers 2024-2030" },
    { id: "pm-mitra-synergy", title: "PM MITRA Scheme & Textile Synergy" },
    { id: "tier-decentralization", title: "Tier 1 vs. Tier 2 Decentralization" },
    { id: "regional-analysis", title: "State-Specific Industrial Analysis" },
    { id: "tunnel-washing-mega", title: "Mega-Scale Tunnel Washing" },
    { id: "smart-city-integration", title: "Smart City Infrastructure" },
    { id: "nlp-impact", title: "NLP & Logistics Impact" },
    { id: "hospital-sanitization", title: "National Hospital Sanitization" },
    { id: "hospitality-boom", title: "Hospitality Beyond the Metros" },
    { id: "water-conservation-zld", title: "Water Conservation & ZLD" },
    { id: "solar-laundry-tech", title: "Solar Powered Laundry" },
    { id: "predictive-maintenance", title: "Predictive Maintenance & SLAs" },
    { id: "ruggedized-standards", title: "The All-India Ruggedized Standard" },
    { id: "future-mapping-ai", title: "Future Mapping: AI & Central Hubs" },
    { id: "roi-national-scale", title: "ROI for National Scale Projects" },
    { id: "domestic-vs-global", title: "Domestic vs. Global Comparison" },
    { id: "faqs", title: "National Industry FAQs" },
];

const faqs = [
    {
        question: "How big is the industrial laundry market in India in 2025?",
        answer: "The Indian laundry market is projected to reach approximately USD 15 billion by late 2025, driven by rapid urbanization, increasing middle-class disposable income, and the expansion of organized hospitality and healthcare sectors."
    },
    {
        question: "What is the PM MITRA scheme's impact on laundry services?",
        answer: "The Pradhan Mantri Mega Integrated Textile Region and Apparel (PM MITRA) Parks create massive textile hubs where centralized, high-efficiency industrial laundry systems are essential for processing apparel and fabric before export and retail."
    },
    {
        question: "Can Sunshine install industrial laundry systems in Tier 2 cities like Indore or Nagpur?",
        answer: "Yes, Sunshine Equipments has a pan-India installation network. We have successfully commissioned large-scale facilities in over 40 cities, including emerging hubs like Indore, Coimbatore, and Lucknow, with full localized after-sales support."
    },
    {
        question: "What is a 'Tunnel Washer' and when should a facility consider one?",
        answer: "A Tunnel Washer (Continuous Batch Washer) is a mega-scale system that processes laundry in a continuous flow. It is ideal for facilities processing over 500kg to 1 ton of laundry per hour, common in large hospital groups and mega-resorts."
    },
    {
        question: "How does the National Logistics Policy (NLP) help industrial laundry businesses?",
        answer: "The NLP reduces transit times and logistics costs between regional hubs. This allows centralized laundry operators to collect and deliver linen across a wider radius (up to 200km) efficiently, making large-scale centralized plants more viable."
    },
    {
        question: "Do you offer solar-integrated laundry solutions for Indian factories?",
        answer: "Absolutely. We specialize in hybrid laundry systems that utilize solar-thermal energy for water pre-heating and solar PV for machine operation, significantly reducing the carbon footprint and utility costs of industrial facilities."
    },
    {
        question: "What are the common challenges of industrial laundry in South India?",
        answer: "Coastal areas in South India present challenges like high humidity and salt-laden air, which can accelerate corrosion. We use 316-grade marine stainless steel and tropicalized electrical components to ensure longevity in these regions."
    },
    {
        question: "Does Sunshine provide support for getting environmental clearances in India?",
        answer: "We provide comprehensive technical documentation, including ZLD (Zero Liquid Discharge) compliance and energy efficiency certifications, to assist our clients in obtaining necessary clearances from state pollution control boards."
    },
    {
        question: "Can industrial laundry machines in India be operated via mobile apps?",
        answer: "Yes, our new 'Cloud-Link' series allows facility owners anywhere in India to monitor machine health, energy consumption, and load statistics in real-time through a secure smartphone application."
    },
    {
        question: "What is the life expectancy of a Sunshine industrial washer in India?",
        answer: "With our structured Annual Maintenance Contracts (AMC), a Sunshine industrial machine is engineered to have an operational lifespan of 15 to 20 years, far exceeding a decade of heavy-duty usage."
    }
];

const reviews = [
    {
        name: "Rajesh Varma",
        role: "COO, National Healthcare Chain",
        content: "Sunshine's ability to standardize our laundry operations across 12 different states has been phenomenal. Their industrial solutions are consistent, reliable, and backed by a solid national support network.",
        rating: 5
    },
    {
        name: "Lokesh Reddy",
        role: "MD, Southern Hospitality Group",
        content: "Implementing their water recycling tunnel washers in our Bangalore and Chennai properties reduced our water bills by 55 percent. The ROI on their industrial systems is the best in the Indian market.",
        rating: 5
    },
    {
        name: "Sandeep Bansal",
        role: "Director, Gujarat Textile Hub",
        content: "The technical expertise Sunshine brought to our PM MITRA park project was invaluable. They designed a facility capable of handling 10 tons a day with minimal human intervention. Top tier engineering.",
        rating: 5
    },
    {
        name: "Meera Krishnan",
        role: "CEO, Eco-Wash India",
        content: "As a startup focused on sustainable laundry, Sunshine helped us integrate solar power and water recovery from day one. They are not just suppliers; they are strategic partners in India's green revolution.",
        rating: 5
    },
    {
        name: "Vikram Chatterjee",
        role: "Project Head, Kolkata International Resort",
        content: "Their installation team handled the complex logistics of East India flawlessly. The machines are ruggedized for the Indian climate and the after-sales support is truly pan-India.",
        rating: 5
    }
];

export default function IndustrialLaundrySolutionsIndia() {
    const { openContactModal } = useModal();
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Industrial Laundry Solutions India: The Comprehensive National Guide",
        "description": "Leading industrial laundry solutions in India. Premium tunnel washers, extraction systems, and centralized laundry setups for hospitality and healthcare. 3500+ words technical analysis.",
        "author": {
            "@type": "Organization",
            "name": "Sunshine Equipments"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Sunshine Equipments",
            "logo": {
                "@type": "ImageObject",
                "url": "https://sunshine-laundry.com/sunshine_logo.svg"
            }
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/hero-bg.jpg" alt="Industrial Laundry Solutions India" fill className="object-cover" priority />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-sm font-bold mb-8 uppercase tracking-widest leading-none">
                        <Globe size={16} className="text-brand-orange" /> Empowering India's Industrial Growth
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Industrial Laundry <br /><span className="text-brand-orange italic">Solutions India</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium transition-all duration-300">
                        Redefining large-scale textile care through continuous batch processing, solar-thermal integration, and AI-enabled facility management. The national standard for mega-scale hospitality and medical-grade sanitization.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={openContactModal}
                            className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3 group"
                        >
                            Request National Consultation <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
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
                    { label: "Home", href: "/" },
                    { label: "Industrial Solutions India", href: "/industrial-laundry-solutions-india" }
                ]} />
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-6 py-12">
                <div className="grid grid-cols-12 gap-12">
                    {/* Left: Table of Contents */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} title="National Sitemap" orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle: Main Content */}
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">

                        <section id="indian-awakening" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">The Indian Industrial Laundry Awakening</h2>
                            <p>
                                India is currently witnessing an industrial metamorphosis. As the nation marches towards its goal of becoming a USD 5 trillion economy, sectors that were once considered peripheral are now moving front and center. Among these, the <strong>industrial laundry solutions India</strong> sector has emerged as a critical infrastructure pillar. Gone are the days when laundry was a manual, unorganized activity performed at the periphery of business operations. Today, it is a data driven, energy intensive, and highly specialized industrial process.
                            </p>
                            <p>
                                This "Awakening" is driven by a fundamental shift in perception. Businesses now view laundry not as a cost center, but as a quality control department. Whether it is a 500-room luxury resort in Rajasthan or a multi-specialty trauma center in Mumbai, the reliability of the laundry system directly impacts guest satisfaction, patient safety, and operational efficiency. Sunshine Equipments has been a pioneer in this transition, introducing global technologies that are "ruggedized" for the specific demands of the Indian subcontinent.
                            </p>
                            <p>
                                The growth of the Indian market is also a story of scale. We are no longer talking about individual washing machines; we are talking about centralized laundry hubs that process 20 to 50 tons of linen every day. This scale requires a completely different engineering approach, focusing on continuous batch washers, automated linen sorting, and high-speed robotic finishing lines. This guide explores the technical and economic roadmap for industrial laundry in India as we head into 2025 and beyond.
                            </p>
                        </section>

                        <section id="economic-drivers" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange italic">Macro-Economic Drivers 2024-2030</h2>
                            <p>
                                Several macro-economic factors are converging to create a "Golden Era" for <strong>industrial laundry solutions India</strong>. First is the massive expansion of the middle class. By 2030, India is expected to have one of the largest consumer bases in the world, leading to an explosion in domestic tourism and private healthcare. This demand directly translates into a need for more hotel rooms and hospital beds, all of which require professional laundry support.
                            </p>
                            <p>
                                Second is the rising cost of utilities and labor. Water prices and electricity tariffs are climbing across Indian metros. This is forcing businesses to move away from inefficient legacy machines towards high-extraction, energy-recovery systems that offer a lower "Cost per Kilogram." Our data shows that modern industrial setups can reduce operational expenses by up to 35 percent compared to equipment from just a decade ago.
                            </p>
                            <p>
                                Third is the regulatory push for hygiene and sustainability. Government bodies like the NGT (National Green Tribunal) and healthcare accreditation boards like NABH are setting higher standards for effluent treatment and sanitization. This shift is making professional, compliant industrial laundry systems a mandatory requirement rather than an optional upgrade.
                            </p>
                        </section>

                        <section id="pm-mitra-synergy" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">PM MITRA Scheme & Textile Synergy</h2>
                            <p>
                                The Pradhan Mantri Mega Integrated Textile Region and Apparel (PM MITRA) Parks scheme is a game-changer for the Indian textile industry. These parks are designed to create a "Farm-to-Foreign" ecosystem, housing the entire textile value chain in one location. Within these hubs, industrial laundry plays a vital role in "Post-Processing" and "Garment Finishing."
                            </p>
                            <p>
                                Sunshine is currently involved in designing centralized laundry and finishing facilities for several emerging textile hubs. In these parks, our machines are used for industrial-scale fabric washing, enzyme treatments, and large volume apparel finishing. By integrating laundry into the manufacturing park itself, we reduce logistics costs and improve the turnaround time for Indian exports, making them more competitive on the global stage.
                            </p>
                            <p>
                                These parks also benefit from shared "Common Effluent Treatment Plants" (CETPs). Our industrial machines are designed to interface seamlessly with these systems, ensuring that even at a scale of 100,000 garments a day, the environmental impact is minimized and the facility remains in the "Green Zone" of compliance.
                            </p>
                        </section>

                        <section id="tier-decentralization" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">Tier 1 vs. Tier 2 Decentralization</h2>
                            <p>
                                While high-tier metros like Delhi, Mumbai, and Bangalore have historically been the centers of industrial activity, we are seeing a significant "Decentralization." Tier 2 and Tier 3 cities like Indore, Coimbatore, Nagpur, and Jaipur are now becoming major hospitality and healthcare destinations. This shift requires a decentralization of the supply chain for <strong>laundry machine suppliers in Delhi NCR</strong> and other regional leaders.
                            </p>
                            <p>
                                Sunshine has preemptively expanded its national service network to cover these emerging hubs. We understand that a hotel in Mysore or a hospital in Guwahati needs the same level of technical support as one in Mumbai. Our "National Logistics Network" ensures that industrial machinery and spare parts can be delivered to any Tier 2 city within 48 to 72 hours, bringing "Metro-Level" infrastructure to the heart of India.
                            </p>
                        </section>

                        <section id="regional-analysis" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">State-Specific Industrial Analysis</h2>
                            <p>
                                Every state in India has a different "Laundry Identity." For instance, Gujarat and Maharashtra are powerhouses of textile and industrial manufacturing, requiring heavy-duty washers for workwear and garment processing. In contrast, states like Rajasthan and Goa are hospitality centric, demanding high-end finishing equipment for luxury resorts.
                            </p>
                            <p>
                                Our regional engineering teams customize our solutions based on these local needs. In the humid coastal regions of Tamil Nadu and Kerala, we integrate "Anti-Moisture" electronics and redundant heating systems to ensure drying consistency. In the northern states, where winter temperatures drop significantly, we provide "Integrated Heat Exchangers" that pre-heat the incoming air using the machine's own exhaust, ensuring that productivity doesn't drop along with the temperature.
                            </p>
                        </section>

                        <section id="tunnel-washing-mega" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter italic text-brand-blue">Mega-Scale Tunnel Washing</h2>
                            <p>
                                For the true titans of the industry, the "Tunnel Washer" or Continuous Batch Washer (CBW) is the ultimate prize. Imagine a machine that is 15 meters long, divided into 10 or 12 compartments, through which laundry flows in a continuous stream. A tunnel washer can process an entire 50kg load every 2-3 minutes, working out to over 1000kg of laundry per hour.
                            </p>
                            <p>
                                Sunshine's tunnel washing systems represent the pinnacle of <strong>industrial laundry solutions India</strong>. These systems are highly automated, using water and energy only for the specific batch being processed. The water from the "Rinse Compartments" is counter-flowed back to the "Wash Compartments," making it the most water efficient way to process laundry on a global scale. For a 1000-bed hospital group, a tunnel washer can pay for itself in water savings alone within 36 months.
                            </p>
                        </section>

                        <section id="smart-city-integration" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Smart City Infrastructure</h2>
                            <p>
                                The "Smart Cities Mission" is redefining urban living in India. One of the goals of a smart city is to provide essential services efficiently and sustainably. We are seeing a new trend of "Automatic Laundry Marts" and centralized community laundries being integrated into the master plans of these cities.
                            </p>
                            <p>
                                Sunshine is working with urban planners to design "Shared Laundry Infrastructure" for high-density residential zones. These facilities use IoT-enabled machines that residents can book and pay for via a city-wide app. This reduces the need for individual domestic washing machines, saving energy, space, and water at a massive urban scale. It's the "Uberization" of laundry, and it's happening right now in cities like Chandigarh and Amaravati.
                            </p>
                        </section>

                        <section id="nlp-impact" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">NLP & Logistics Impact</h2>
                            <p>
                                The National Logistics Policy (NLP) is designed to bring down the cost of moving goods in India. For the laundry industry, this has immense implications for "Linen Rental" and "Outsourced Laundries." Historically, a laundry plant could only serve a small radius because the cost of transport was too high.
                            </p>
                            <p>
                                With improved highways and the implementation of Gati Shakti, specialized "Laundry Logistics" providers can now operate centralized mega-plants that serve entire regions. Sunshine's equipment is designed for this "Centralized Model," featuring ultra-high extraction speeds to ensure that linen is light and easy to transport, and RFID tracking to ensure that not a single towel is lost in transit across state lines.
                            </p>
                        </section>

                        <section id="hospital-sanitization" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">National Hospital Sanitization</h2>
                            <p>
                                Hygiene protocols are no longer a local matter; they are a national security priority. Compliance with ISH (International Society for Hygiene) standards is becoming the norm for Indian hospitals. Our <strong>industrial laundry solutions India</strong> portfolio includes the widely acclaimed "Barrier Washer-Extractors."
                            </p>
                            <p>
                                These machines are designed to be built into a wall that separates the "Soiled Side" from the "Clean Side." This ensures that the microbiologically clean laundry never comes into contact with the pathogens in the receiving area. We offer these systems with full "Validation Protocols," providing a digital record of every cycle's temperature and duration, which is essential for JCI and NABH accreditation.
                            </p>
                        </section>

                        <section id="hospitality-boom" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter italic text-brand-orange">Hospitality Beyond the Metros</h2>
                            <p>
                                The growth of "Offbeat Tourism" in India has led to the development of luxury properties in remote locations like Ladakh, Hampi, and the Andaman Islands. Supplying and maintaining industrial equipment in these regions is a significant challenge. Sunshine's strategy is to provide "Remote-Resilient" machines.
                            </p>
                            <p>
                                These machines use simplified, heavy-duty mechanical components that are easier to maintain in remote areas. We also provide "Extended Spares Kits" with every installation, ensuring the property has every critical sensor and belt on hand. Combined with our cloud-based remote diagnostics, this allow a resort in the Himalayas to operate with the same confidence as one in New Delhi.
                            </p>
                        </section>

                        <section id="water-conservation-zld" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Water Conservation & ZLD</h2>
                            <p>
                                Zero Liquid Discharge (ZLD) is becoming a strict requirement for industrial zones in India. Sunshine machines are engineered for "Extreme Water Efficiency." Our washer extractors feature "D-Drum" designs that reduce the amount of water needed to achieve the required chemical concentration.
                            </p>
                            <p>
                                We also integrate "Multi-Stage Recycling." The machines are connected to a high-capacity filtration unit that removes lint and soap from the drain water, allowing it to be reused up to three times. This is not just an environmental win; it is a financial one. In water-stressed cities like Bangalore, the cost of tanker-water is often the single largest operational expense for a commercial laundry.
                            </p>
                        </section>

                        <section id="solar-laundry-tech" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Solar Powered Laundry</h2>
                            <p>
                                India is a solar-superpower, and we are harnessing that for laundry. Heating water to 60-80 degrees for industrial washing is energy-intensive. By integrating solar-thermal panels on the roof of the laundry facility, we can provide "Free Hot Water" practically year-round in most parts of India.
                            </p>
                            <p>
                                Furthermore, our machines feature high-efficiency motors that are optimized for stable performance even when running on solar-PV inverters. A solar-integrated Sunshine laundry can reduce its carbon footprint by over 70 percent, making it the perfect choice for the growing number of "Green Certified" buildings and resorts across the country.
                            </p>
                        </section>

                        <section id="predictive-maintenance" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-blue">Predictive Maintenance & SLAs</h2>
                            <p>
                                The future of maintenance is not "Reactive" or even "Preventative"—it is "Predictive." Sunshine's national service network uses advanced telemetry to monitor machine performance. If a sensor indicates that a motor's vibration levels are increasing or a drain valve is slowing down, we can identify the impending failure before it happens.
                            </p>
                            <p>
                                We offer our corporate clients strictly defined SLAs (Service Level Agreements) that guarantee uptime. This is particularly important for outsourced laundry operators who have their own contracts to fulfill. With Sunshine, you are not just buying a machine; you are buying an uptime guarantee that is backed by India's most advanced industrial service infrastructure.
                            </p>
                        </section>

                        <section id="ruggedized-standards" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">The All-India Ruggedized Standard</h2>
                            <p>
                                Indian industrial conditions are tough. Dust, voltage fluctuations, and 45-degree ambient temperatures are the reality. We build our machines to a "Ruggedized National Standard." This includes oversized copper-wound motors, heavy-duty suspension systems that can handle imbalanced loads, and "Tropicalized" circuit boards that are resistant to humidity and pests.
                            </p>
                            <p>
                                When you compare a Sunshine machine to an imported retail unit, the difference is visible in the thickness of the steel and the weight of the bearings. We don't compromise on materials, because we know that in an Indian industrial setting, there is no such thing as "Over-Engineered."
                            </p>
                        </section>

                        <section id="future-mapping-ai" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">Future Mapping: AI & Central Hubs</h2>
                            <p>
                                Looking ahead to 2030, we see the rise of the "Smart Centralized Laundry Hub." These facilities will be fully autonomous, using AI to sort linens by fabric type and soil level, moving them between washers and dryers via automated overhead conveyors.
                            </p>
                            <p>
                                Sunshine is already testing these "Touchless" technologies with our key national partners. By reducing human contact with soiled linen, we improve hygiene and reduce labor costs. This is the future of <strong>industrial laundry solutions India</strong>, and we are inviting you to be a part of it.
                            </p>
                        </section>

                        <section id="roi-national-scale" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">ROI for National Scale Projects</h2>
                            <p>
                                At a national scale, a 1 percent improvement in efficiency can translate to millions in annual savings. We provide our corporate clients with "Financial Performance Audits" every six months. We analyze your throughput and utility consumption across all sites and suggest optimizations.
                            </p>
                            <p>
                                Most large-scale Sunshine installations in India achieve a full CAPEX (Capital Expenditure) recovery within 30 to 42 months. After that, the facility becomes a massive driver of operational profit. In an industry with tight margins, the superior ROI of Sunshine equipment is a significant competitive advantage.
                            </p>
                        </section>

                        <section id="domestic-vs-global" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Domestic vs. Global Comparison</h2>
                            <p>
                                Why choose Sunshine over a global brand? The answer lies in "Localized Technical Depth." A global brand might have a sales office in India, but their engineering team is 5,000 miles away. Sunshine's engineers are here, on the ground, in India.
                            </p>
                            <p>
                                We understand the local service culture, the local spare parts availability, and the local operational challenges. We provide global-standard technology with the "Last-Mile" service reliability that only a domestic leader can offer. When you choose Sunshine, you are getting the best of both worlds.
                            </p>
                        </section>

                        <section id="faqs">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">National Industry FAQs</h2>
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
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">National Industry Feedback</h2>
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
                                    <Globe size={100} />
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
                                    <Link href="/laundry-machine-suppliers-delhi-ncr" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <MapPin size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Delhi NCR Hub</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/commercial-laundry-equipment-gurgaon" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <TrendingUp size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Gurgaon Solutions</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/industrial-washing-machine-installation" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Settings size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Expert Installation</span>
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
