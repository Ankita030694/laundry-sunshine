"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck, Zap, Droplets, TrendingUp, Settings, Wrench, Activity, BarChart3, ChevronRight, Star, MapPin, Search, HardHat } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import CTA from "@/components/CTA";

const sections = [
    { id: "installation-precision", title: "The Precision of Industrial Installation" },
    { id: "pre-installation-audit", title: "The Pre-Installation Engineering Audit" },
    { id: "workflow-optimization", title: "Workflow & Layout Strategy" },
    { id: "foundation-engineering", title: "Foundation & Structural Integrity" },
    { id: "electrical-infrastructure", title: "Electrical Load & 3-Phase Planning" },
    { id: "plumbing-hydraulics", title: "Plumbing & Hydraulic Efficiency" },
    { id: "steam-line-engineering", title: "Steam Lines & Boiler Economics" },
    { id: "ventilation-hvac", title: "HVAC & Air Exchange Standards" },
    { id: "lint-fire-safety", title: "Lint Management & Fire Safety" },
    { id: "chemical-automation-setup", title: "Chemical Automation Integration" },
    { id: "commissioning-validation", title: "Commissioning & Validation" },
    { id: "staff-training", title: "Operator Training Workshops" },
    { id: "regional-nuances", title: "Delhi Regional Installation Nuances" },
    { id: "environmental-compliance", title: "DPCC & Environmental Compliance" },
    { id: "post-installation-support", title: "Transition Management" },
    { id: "roi-of-installation", title: "ROI of Professional Installation" },
    { id: "turnkey-advantage", title: "The Turnkey Advantage" },
    { id: "faqs", title: "Installation FAQs" },
];

const faqs = [
    {
        question: "How much space is needed for a 500kg/day industrial laundry in Delhi?",
        answer: "For a facility of this scale, we recommend a minimum of 1200 to 1500 square feet. This allows for the equipment, necessary clearances for maintenance, utility rooms (boilers/softeners), and dedicated soiled/clean linen storage zones."
    },
    {
        question: "What kind of foundation is required for a high-speed washer-extractor?",
        answer: "High-speed washers generate significant centrifugal forces. We require a reinforced concrete foundation (M30 grade) with a minimum thickness of 150-200mm, often isolated from the main building slab with vibration-dampening materials."
    },
    {
        question: "Can Sunshine handle the electrical load upgrade for my facility in Noida?",
        answer: "While we don't directly perform external grid upgrades, our project team provides the full 'Load Chart' and technical submittals required by UPCL/NPCL to help you secure the necessary 3-phase power increment."
    },
    {
        question: "How many air changes per hour are needed in a commercial laundry?",
        answer: "In a standard laundry area, 20-25 air changes per hour are required. However, near the industrial dryers and flatwork ironers, this must increase to 35-40 air changes per hour to maintain a safe and productive working temperature."
    },
    {
        question: "What material is best for industrial laundry plumbing in Delhi?",
        answer: "We recommend CPVC (Schedule 80) or high-grade Stainless Steel for hot water and chemical lines. For main drain lines, HDPE or UPVC with a minimum 4-inch diameter is standard to handle high-volume discharge without clogging."
    },
    {
        question: "How long does a turnkey industrial laundry installation take?",
        answer: "A typical medium-scale installation (2-4 washers, 2-4 dryers, 1 ironer) takes approximately 10 to 14 days from the point the site is utility-ready. Large-scale tunnel systems can take 4 to 6 weeks for full commissioning."
    },
    {
        question: "Do you install laundry equipment in basement facilities in Delhi?",
        answer: "Yes, we specialize in basement installations, which are common in Delhi. This requires specialized ventilation design and high-lift sump pumps for drainage to ensure the facility meets municipal and fire safety codes."
    },
    {
        question: "What is the standard clearance needed between machines for service?",
        answer: "We maintain a mandatory 24-inch (600mm) clearance behind machines for technical access and a 12-inch (300mm) side-to-side gap to prevent heat build-up and ease routine cleaning."
    },
    {
        question: "Do your installation services include DPCC compliance setups?",
        answer: "Yes, our installation packages in Delhi include 'Grease & Lint Traps' and water metering points that are required for DPCC (Delhi Pollution Control Committee) inspections and environmental certifications."
    },
    {
        question: "Is staff training included in your installation package?",
        answer: "Absolutely. We provide a 3-day on-site training intensive for your operators, covering machine safety, load optimization, chemical handling, and basic preventative maintenance protocols."
    }
];

const reviews = [
    {
        name: "Arjun Mehra",
        role: "Project Consultant, NCR Buildwell",
        content: "Sunshine's engineering team is top-notch. They caught a structural vibration issue in our foundation design that would have saved us lakhs in future repairs. Their attention to detail during installation is unmatched.",
        rating: 5
    },
    {
        name: "Sarfraz Ahmed",
        role: "Production Mgr, Okhla Exports",
        content: "We needed our finishing line moved and re-installed within 48 hours to meet a shipment deadline. Sunshine's installation crew worked overnight to make it happen. Professional and highly skilled.",
        rating: 5
    },
    {
        name: "Dr. Pallavi Rai",
        role: "Medical Superintendent, South Delhi Hospital",
        content: "The barrier laundry installation they did for us followed every WHO and NABH guideline perfectly. The workflow separation they designed has drastically improved our hygiene scores.",
        rating: 5
    },
    {
        name: "Karan Johar",
        role: "Facility Director, High-Rise Living Noida",
        content: "Installing an industrial laundry on the 22nd floor of a residential tower was a logistical nightmare. Sunshine handled the crane lifting and sound-proofing perfectly. Remarkable execution.",
        rating: 5
    },
    {
        name: "Simran Kaur",
        role: "Owner, Velvet Wash Services",
        content: "Their turnkey service meant I didn't have to talk to five different contractors. They handled the plumbing, electrical, and ducting. My facility was operational exactly on the day they promised.",
        rating: 5
    }
];

export default function LaundryInstallationServicesDelhi() {
    const { openContactModal } = useModal();
    const websiteUrl = "https://sunshine-laundry.com/laundry-equipment-installation-services-delhi";
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
                "name": "Laundry Equipment Installation Services in Delhi | Sunshine Equipments",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Professional laundry equipment installation services in Delhi. Turnkey industrial setups, foundation engineering, electrical load planning, and compliance for NCR.",
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
                        "name": "Installation Services Delhi",
                        "item": websiteUrl
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Laundry Equipment Installation Services Delhi: The Industrial Engineering Standard",
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
                "name": "Industrial Laundry Installation Delhi",
                "description": "Expert engineering and installation services for commercial laundry equipment in Delhi NCR. Foundation, electrical, and plumbing integration.",
                "brand": {
                    "@type": "Brand",
                    "name": brandName
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "195"
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
                    <Image src="/hero-bg.jpg" alt="Laundry Equipment Installation Delhi" fill className="object-cover" priority />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-sm font-bold mb-8 uppercase tracking-widest leading-none">
                        <HardHat size={16} className="text-brand-orange" /> Engineered for Operational Excellence
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Laundry Equipment <br /><span className="text-brand-orange italic">Installation Services Delhi</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium transition-all duration-300">
                        Beyond simple delivery—we provide full-cycle engineering from foundation structural analysis to 3-phase load balancing. Turnkey industrial setups for hotels, hospitals, and commercial hubs across the NCR.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={openContactModal}
                            className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3 group"
                        >
                            Get Technical Site Audit <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
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
                    { label: "Installation Services Delhi", href: "/laundry-equipment-installation-services-delhi" }
                ]} />
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-6 py-12">
                <div className="grid grid-cols-12 gap-12">
                    {/* Left: Table of Contents */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} title="Engineering Guide" orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle: Main Content */}
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">

                        <section id="installation-precision" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">The Precision of Industrial Installation</h2>
                            <p>
                                An industrial laundry is more than just a collection of machines; it is a complex, integrated system of fluid dynamics, thermal engineering, and mechanical power. The quality of your <strong>laundry equipment installation services Delhi</strong> will determine the operational efficiency of your facility for the next twenty years. A poorly installed machine will vibrate excessively, consume more energy, and suffer from premature component failure.
                            </p>
                            <p>
                                At Sunshine Equipments, we treat installation as a rigorous engineering discipline. We don't just "plug and play." We analyze the structural integrity of the flooring, the capacity of the electrical grid, and the ergonomics of the workflow. Our installation philosophy is built on the principle of "Zero Operational Bottlenecks." We ensure that every machine is positioned to allow for maximum throughput with minimum operator fatigue.
                            </p>
                        </section>

                        <section id="pre-installation-audit" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange italic">The Pre-Installation Engineering Audit</h2>
                            <p>
                                Every Sunshine installation begins with a comprehensive site audit. This is not just a measurement of the room; it is a technical evaluation of the building's vital signs. We check the incoming water pressure, the TDS (Total Dissolved Solids) levels of the local water, and the stability of the electrical supply. In Delhi NCR, where water and power quality can vary significantly between Sectors, this audit is critical.
                            </p>
                            <p>
                                Our engineers provide you with a documented "Pre-Installation Requirement (PIR)" report. This report outlines every modification needed—from leveling the floor to upgrading the circuit breakers—to ensure your new equipment operates at its peak rated efficiency. This transparency ensures there are no "surprise costs" during the actual installation phase.
                            </p>
                        </section>

                        <section id="workflow-optimization" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Workflow & Layout Strategy</h2>
                            <p>
                                Space in Delhi comes at a premium. Whether you are in a basement in Okhla or a high-rise in Gurgaon, maximizing "Output per Square Foot" is essential. Our layout experts use advanced modeling to design your facility for a unidirectional workflow. This means soiled linen enters through one door, moves in a logical sequence through washing, drying, and ironing, and exits through a separate "Clean Output" door.
                            </p>
                            <p>
                                By eliminating "Backtracking" (linen moving backwards through the process), we drastically reduce the risk of cross-contamination—a critical requirement for our hospital clients. We also optimize for "Operator Sightlines," ensuring that a single supervisor can monitor the entire production line from a central point, reducing management overhead.
                            </p>
                        </section>

                        <section id="foundation-engineering" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">Foundation & Structural Integrity</h2>
                            <p>
                                A 100kg washer-extractor spinning at 1000 RPM generates a force equivalent to several tons. If the floor is not engineered to handle these "Dynamic G-loads," the machine will "walk" across the room, damaging itself and potentially the building's structure. Our <strong>laundry equipment installation services Delhi</strong> include detailed foundation drawings.
                            </p>
                            <p>
                                In older Delhi buildings, we often specify a "Floating Inertia Base"—a massive concrete block isolated from the main floor with specialized spring-dampers or rubber vibration pads. This prevents the transfer of noise and vibration to the floors above or below, making industrial laundry possible even in commercial towers and residential complexes.
                            </p>
                        </section>

                        <section id="electrical-infrastructure" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter italic text-brand-blue">Electrical Load & 3-Phase Planning</h2>
                            <p>
                                Industrial laundry equipment is electrical-heavy. Dryers and flatwork ironers, in particular, require massive amounts of power for their heating elements. We provide full "Electrical Load Charts" that allow your electricians to size the cables, contactors, and breakers accurately.
                            </p>
                            <p>
                                We also insist on the installation of "Variable Frequency Drives (VFDs)" and surge protectors. In the NCR, where voltage spikes are common, these components act as a shield, protecting the sensitive electronic PLCs of your machines from expensive electrical damage. Our goal is to ensure your laundry stays powered, even during the peak summer months when the regional grid is under maximum stress.
                            </p>
                        </section>

                        <section id="plumbing-hydraulics" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Plumbing & Hydraulic Efficiency</h2>
                            <p>
                                Water is the lifeblood of laundry. An undersized water line will cause the machines to fill slowly, increasing the cycle time and reducing your daily output. We calculate the "Peak Instantaneous Flow Rate" required for your entire facility and size the main headers accordingly.
                            </p>
                            <p>
                                We also pay special attention to drainage. Industrial machines dump 200-300 liters of water in just 60 seconds. If the drains aren't large enough or don't have the correct "Fall," you will face frequent overflows and lint clogs. Our plumbing designs feature large, easy-access "Lint Traps" that can be cleaned in seconds, ensuring your drains stay clear and your facility stays dry.
                            </p>
                        </section>

                        <section id="steam-line-engineering" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">Steam Lines & Boiler Economics</h2>
                            <p>
                                For facilities processing more than 1000kg a day, steam is often the most economical heating medium. However, steam is also dangerous if handled incorrectly. Our installation teams are experts in steam-line engineering, calculating the correct "Pipe Expansion Loops" and "Steam Trap" placements to ensure dry, high-pressure steam reaches your machines.
                            </p>
                            <p>
                                We also design the "Condensate Return" system. This recovers the hot water created when the steam releases its heat, piping it back to the boiler. This "Thermal Recycling" can reduce your boiler's fuel consumption (typically LPG or Diesel in NCR) by up to 20 percent, making your facility both greener and more profitable.
                            </p>
                        </section>

                        <section id="ventilation-hvac" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">HVAC & Air Exchange Standards</h2>
                            <p>
                                Commercial laundries generate a lot of laundry room humidity. Without proper ventilation, this creates a working environment that is both uncomfortable for staff and damaging to the electronic components of the machines. We follow the "20/40 Rule"—20 air changes per hour for general areas, and 40 for hot-zones.
                            </p>
                            <p>
                                We design "Negative Pressure" exhaust systems that pull the hot, moist air directly from the source (the dryer exhaust) and vent it out of the building. We also calculate the "Make-up Air" requirements, ensuring the building has fresh air coming in to replace what's being exhausted. This prevents the building from becoming a "Vacuum," which can cause doors to stay shut and boilers to malfunction.
                            </p>
                        </section>

                        <section id="lint-fire-safety" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-blue">Lint Management & Fire Safety</h2>
                            <p>
                                Lint is the number one cause of fires in commercial laundries. It is highly flammable and can accumulate in hidden ceiling spaces and ducts. Our installation protocol includes the setup of secondary external lint collectors and high-velocity ducting designs that prevent lint from settling.
                            </p>
                            <p>
                                We also ensure all installations meet the local "Delhi Fire Services" norms. This includes proper placement of extinguishers, clear emergency exits, and integration of the laundry's central shut-off valves with the building's fire alarm system. Safety is not a feature at Sunshine; it is a foundational requirement.
                            </p>
                        </section>

                        <section id="chemical-automation-setup" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter italic text-brand-orange">Chemical Automation Integration</h2>
                            <p>
                                The final step of a technical installation is the integration of the chemical dispensing system. We provide dedicated "Chemical Mounting Boards" and pre-installed ports on our machines for multi-pump injectors. This ensures that detergents, alkalis, and softeners are delivered directly into the drum via a secure, closed-loop system.
                            </p>
                            <p>
                                This automation prevents chemical spills on the floor, which can be an "Oropharyngeal" and "Slip-and-Fall" hazard. It also ensures that the chemicals aren't being "under-used" or "over-used," maintaining the exact pH levels required for medical-grade sanitization.
                            </p>
                        </section>

                        <section id="commissioning-validation" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Commissioning & Validation</h2>
                            <p>
                                Once the last bolt is tightened, the "Commissioning Phase" begins. We don't just turn the machines on; we run them through their full range of programs under "Load Conditions." We check for leaks, verify the extraction speeds, and validate the heating times.
                            </p>
                            <p>
                                For our healthcare clients, we perform a "Temperature Validation Study." We use data-loggers inside the drum to prove that the water reached the required 71°C or 90°C for the mandated duration to kill pathogens. This documentation is your "Proof of Safety" for audits and accreditations.
                            </p>
                        </section>

                        <section id="staff-training" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">Operator Training Workshops</h2>
                            <p>
                                A machine is only as good as the person operating it. Our <strong>laundry equipment installation services Delhi</strong> always include a 3-day on-site training workshop for your staff. We cover ergonomics, safety, and basic troubleshooting.
                            </p>
                            <p>
                                We use a "Train-the-Trainer" approach, ensuring your supervisors have the knowledge to onboard new staff members in the future. We provide laminated "Cheat-Sheets" and video guides in both English and Hindi, ensuring that even entry-level operators can use our advanced PLC systems with confidence and safety.
                            </p>
                        </section>

                        <section id="regional-nuances" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">Delhi Regional Installation Nuances</h2>
                            <p>
                                Installing in Delhi requires local knowledge. For instance, in "South Delhi" residential zones, sound insulation is paramount due to strict noise ordinances. In "Old Delhi" areas like Chandni Chowk, the challenge is structural—many 100-year-old buildings cannot support the weight of industrial washers without a full steel-frame retrofit.
                            </p>
                            <p>
                                In "Noida Sector 62" or "Gurgaon Cyber City," the challenge is often logistically managing high-rise MEP (Mechanical, Electrical, and Plumbing) integration. Sunshine has successfully completed installations in all these environments, and we bring those years of practical, "On-the-Street" experience to your project.
                            </p>
                        </section>

                        <section id="environmental-compliance" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">DPCC & Environmental Compliance</h2>
                            <p>
                                The Delhi Pollution Control Committee (DPCC) has strict guidelines for commercial laundries. Our installation team ensures your facility is "Inspection Ready" from day one. We include water-meters on every line, grease-traps for wastewater, and low-dB silencers on all blower motors.
                            </p>
                            <p>
                                We also provide the "Design Calculation Sheets" your environmental consultants need to secure your "Consent to Establish (CTE)" and "Consent to Operate (CTO)." Choosing Sunshine means choosing a partner that respects the environment and understands the local law.
                            </p>
                        </section>

                        <section id="post-installation-support" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter italic text-brand-blue">Transition Management</h2>
                            <p>
                                Moving from a manual laundry or a legacy system to a modern Sunshine plant is a big change for any team. Our project managers stay on-site for the first week of operations to assist with "Transition Management."
                            </p>
                            <p>
                                We help you fine-tune your wash formulas based on your specific local water and linen types. We monitor your utility consumption and suggest "Production Schedule" changes to avoid peak-hour electricity tariffs. We are there to ensure that your "Go-Live" day is smooth, predictable, and successful.
                            </p>
                        </section>

                        <section id="roi-of-installation" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter">ROI of Professional Installation</h2>
                            <p>
                                Professional installation is an investment, not an expense. A correctly installed 100kg washer extractor can save you ₹50,000 a month in utility costs and prevent ₹2 Lakh in preventable repairs every year. When you multiply that across an entire facility, the ROI of choosing Sunshine's engineering team becomes clear.
                            </p>
                            <p>
                                We don't just install machines; we install "Profitability." By ensuring your machines run at their theoretical maximum efficiency, we shorten your "Payback Period" and maximize your long-term facility value.
                            </p>
                        </section>

                        <section id="turnkey-advantage" className="mb-20">
                            <h2 className="text-4xl font-black mb-8 tracking-tighter text-brand-orange">The Turnkey Advantage</h2>
                            <p>
                                Why manage five different contractors when you can have one? Our "Turnkey" solution for <strong>laundry equipment installation services Delhi</strong> covers everything: Planning, Supply, Installation, and Support.
                            </p>
                            <p>
                                This eliminates the "Finger-Pointing" that happens when the plumber blames the electrician and the electrician blames the equipment supplier. With Sunshine, there is only one throat to choke. We take full responsibility for the performance of your facility, giving you the peace of mind to focus on your core business.
                            </p>
                        </section>

                        <section id="faqs">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Installation FAQs</h2>
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
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Institutional Feedback</h2>
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
                                    <HardHat size={100} />
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
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Related Services</h3>
                                <nav className="space-y-4">
                                    <Link href="/laundry-equipment-maintenance-gurgaon" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Wrench size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Post-Install AMC</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/commercial-laundry-equipment-gurgaon" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <MapPin size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Gurgaon Projects</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/healthcare-laundry-equipment-maintenance" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Medical Standards</span>
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
