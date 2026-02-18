"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, MessageSquare, Star, ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp, AlertCircle, Building2, Workflow, Recycle, HardHat, Gauge, Settings, Hammer, Wrench, ShieldAlert, Cpu, Headphones, Users, ScrollText } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "After-Sales Support for Laundry Machines: Beyond the Initial Investment" },
    { id: "technical-assistance", title: "Precision Engineering Support: The 24/7 Technical Hotline" },
    { id: "onsite-support", title: "Nationwide Rapid Response: Expert Engineering at Your Site" },
    { id: "training-programs", title: "Institutional Knowledge: Comprehensive Operator Training" },
    { id: "warranty-mgmt", title: "Strategic Warranty Management: Safeguarding Your Assets" },
    { id: "digital-diagnostics", title: "Remote Support and Digital Diagnostics: The Future of Service" },
    { id: "lifecycle-optimization", title: "Lifecycle Support: Upgrades, Modernization, and Retrofitting" },
    { id: "emergency-protocols", title: "Emergency Management: The 4-Hour Response Commitment" },
    { id: "chemical-integration", title: "Technical Synergy: Chemical Dosing and Support Integration" },
    { id: "documentation", title: "Professional Documentation: Manuals, Schematics, and Logs" },
    { id: "staff-augmentation", title: "Staff Augmentation: On-Site Resident Engineering Services" },
    { id: "customer-success", title: "Customer Success Management: A Partnership for Performance" },
    { id: "compliance-support", title: "Regulatory and Compliance Support for Indian Facilities" },
    { id: "future-proofing", title: "Future-Proofing Your Laundry: Scaling Support with Growth" },
    { id: "faqs", title: "After-Sales Support Frequently Asked Questions" },
];

const faqs = [
    {
        question: "How do I access 24/7 technical support for my Sunshine machines?",
        answer: "Every Sunshine customer is provided with a dedicated 24-hour technical support hotline number and a digital ticket ID. For urgent issues, you can call our national helpdesk anytime. For non-urgent queries, you can log a ticket via our mobile app or web portal for a response within 2 hours."
    },
    {
        question: "Is operator training included with the purchase of new equipment?",
        answer: "Yes, comprehensive on-site operator training is included with every equipment installation. We also provide refresher training every six months to ensure new staff members are fully competent in safe and efficient machine operation."
    },
    {
        question: "What is covered under the standard equipment warranty?",
        answer: "Our standard warranty covers all manufacturing defects in materials and workmanship. This typically includes the motor, drum, shaft, and electronic controllers. Wearable parts like seals and belts are covered for an initial period from the date of commissioning."
    },
    {
        question: "Can Sunshine support machines located in remote areas of India?",
        answer: "Absolutely. We have a widespread network of service centers and resident engineers across all major Indian states. Our regional hubs carry a complete inventory of critical spares, ensuring that even remote facilities receive rapid engineering support."
    },
    {
        question: "Do you offer remote diagnostic services?",
        answer: "Yes, our latest generation of machines features IoT connectivity. This allows our central engineering team to remotely monitor your machine's performance, identify error codes, and even push software updates or recalibrate settings without needing a physical site visit."
    },
    {
        question: "What happens if a machine is down for more than 48 hours?",
        answer: "As part of our commitment to your success, if a critical machine cannot be repaired within 48 hours for reasons within our control, we can assist in arranging temporary laundry processing or providing a standby unit to ensure your operations continue."
    },
    {
        question: "How can I check the status of my service request?",
        answer: "You can track your service request in real-time through the Sunshine Customer Portal. You will receive SMS and email updates at every stage—from technician dispatch to part arrival and final resolution."
    },
    {
        question: "Does after-sales support include help with chemical dosing settings?",
        answer: "Yes, our technical team works closely with your detergent supplier to ensure the automatic dosing points on the machine are perfectly calibrated. This ensures optimal wash results while preventing chemical damage to your equipment."
    },
    {
        question: "Can you provide technical schematics if my in-house team wants to do minor repairs?",
        answer: "Yes, we believe in technical transparency. We provide all authorized customers with full operation manuals, electrical wiring diagrams, and troubleshooting guides to empower your in-house engineering team."
    },
    {
        question: "What is a 'Resident Engineer' service?",
        answer: "For large-scale facilities like hospital clusters or central laundry hubs, we can provide a dedicated Sunshine engineer who stays on your site full-time to manage maintenance, training, and immediate support needs."
    }
];

export default function AfterSalesSupport() {
    const { openContactModal } = useModal();
    const websiteUrl = "https://sunshine-laundry.com/after-sales-support-for-laundry-machines";
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
                "name": "World-Class After-Sales Support for Laundry Machines | Sunshine Equipments",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Discover world-class after-sales support for industrial laundry. From 24/7 technical hotlines and site training to remote diagnostics and nationwide engineering in India.",
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
                        "name": "After-Sales Support",
                        "item": websiteUrl
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "After-Sales Support for Laundry Machines: A Comprehensive Technical Commitment",
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
                "name": "Industrial Laundry After-Sales Support Services",
                "image": "https://sunshine-laundry.com/hero-bg.jpg",
                "description": "24/7 technical hotline, nationwide rapid-response engineering, and advanced operator training for industrial laundry machines. IoT-enabled diagnostics.",
                "brand": {
                    "@type": "Brand",
                    "name": brandName
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "195"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sameer K" },
                        "datePublished": "2024-02-05",
                        "reviewBody": "Unparalleled technical support. Their 4-hour response commitment is a lifesaver for our hospital operations.",
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
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-15">
                    <Image src="/hero-bg.jpg" alt="After-Sales Support for Laundry Machines" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight px-4">
                        World-Class <br />
                        <span className="text-brand-orange italic">After-Sales Support Services</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium">
                        24/7 Technical assistance, nationwide engineering network, and advanced digital diagnostics. We don't just sell machines; we guarantee your operational success.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button onClick={openContactModal} className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3">
                            Connect with Support <Headphones size={24} />
                        </button>
                        <button onClick={openContactModal} className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all flex items-center gap-3">
                            Register Your Warranty
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "After-Sales Support", href: "/after-sales-support-for-laundry-machines" }]} />
            </div>

            <StickyMobileTOC sections={sections} />

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-12 gap-6 lg:gap-12">
                    {/* Left: Table of Contents */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle: Main Content */}
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="intro" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">After-Sales Support for Laundry Machines: Beyond the Initial Investment</h2>
                            <p>
                                In the industrial laundry sector, the purchase of a machine is merely the beginning of a relationship that spans decades. The true value of a machinery partner is revealed not in the sales showroom, but in the months and years of high-intensity operation that follow. After-sales support is the critical bridge between a capital investment and sustained operational profitability. At Sunshine Equipment, we believe that our responsibility only begins once your machine is commissioned.
                            </p>
                            <p>
                                The Indian laundry market presents unique challenges—from power fluctuations and high ambient humidity to the need for rapid service in geographically remote locations. Our after-sales support ecosystem is designed to address these challenges head-on. We provide an integrated framework of technical assistance, nationwide engineering, and digital remote diagnostics that ensures your facility experiences the highest possible uptime and the lowest total cost of ownership.
                            </p>
                            <p>
                                World-class support is built on three pillars: <strong>Speed</strong>, <strong>Technical Mastery</strong>, and <strong>Reliability</strong>. When a critical washer extractor in a hospital laundry goes down, minutes matter. Our 24/7 support hotline and emergency response protocols are engineered to provide immediate solutions. This guide explores the deep technical details of our support services, demonstrating why the most successful hotels and industrial laundries in India choose Sunshine as their long-term partner.
                            </p>
                            <p>
                                Our commitment to your success goes beyond fixing broken machines. We focus on continuous improvement through operator training, performance auditing, and lifecycle modernization. By partnering with us, you gain access to a dedicated team of engineers, trainers, and customer success managers whose sole objective is to ensure your laundry operation is the most efficient, safe, and high-quality facility in your region.
                            </p>
                        </section>

                        <section id="technical-assistance" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Precision Engineering Support: The 24/7 Technical Hotline</h2>
                            <p>
                                The first line of response in any support situation is our 24/7 Technical Hotline. Staffed by senior industrial engineers, not just call-center agents, our helpdesk is a source of immediate technical solutions. We understand that many laundry issues are operational or electronic in nature and can be resolved through professional guidance. This "Phone-First" approach resolves over 35 percent of service queries instantly, saving our clients time and money.
                            </p>
                            <p>
                                Our hotline engineers have access to your machine's full digital history, including past service reports, commissioning data, and current diagnostic codes. This allows them to provide precise, context-aware troubleshooting. Whether your operator is seeing an "Inverter Fault" or needing help adjusting a wash program for a specific linen type, our team is there to walk them through the solution step-by-step. This 24/7 availability is especially critical for night-shift operations in large hotels and industrial plants.
                            </p>
                            <p>
                                In addition to voice support, we utilize multi-channel communication including mobile apps and WhatsApp Support. Operators can send short videos or photos of a technical issue, allowing our engineers to visually diagnose a problem in seconds. This visual confirmation is incredibly effective for identifying minor leaks, part wear, or incorrect utility connections. Our goal is to provide a "Frictionless Support" experience that respects the fast-paced nature of your business.
                            </p>
                            <p>
                                For complex electronic or control system queries, our hotline can escalate to our central "Master Engineers." These experts use advanced simulators and circuit-level knowledge to diagnose the most challenging technical puzzles. This hierarchy of support ensures that no matter how difficult the problem, a solution is always within reach. The Sunshine hotline is the heartbeat of our technical commitment to the Indian industrial market.
                            </p>
                        </section>

                        <section id="onsite-support" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Nationwide Rapid Response: Expert Engineering at Your Site</h2>
                            <p>
                                When a physical intervention is required, our nationwide network of service engineers comes into action. With a presence in every major Indian state and a dedicated fleet of service vehicles, we provide a level of on-site coverage that is unmatched in the industry. Our engineers are factory-trained and carry specialized diagnostic tools—from thermal cameras and laser alignment devices to digital vibration analyzers—to ensure every repair is performed to factory standards.
                            </p>
                            <p>
                                Rapid response is about more than just speed; it's about <strong>First-Time Resolution</strong>. Our service vehicles are equipped as "Mobile Workshops," carrying a comprehensive inventory of high-fail and high-wear parts. This means that in the vast majority of cases, our engineers can complete the repair during their first visit, eliminating the need for a second trip and further downtime. This efficiency is a core part of the "Sunshine Standard" for industrial service.
                            </p>
                            <p>
                                Our engineering team is also trained in the broader context of facility management. When they visit your site, they don't just look at the machine in question; they evaluate the utility environment—checking your 3-phase power quality, water pressure, and drainage flow. If they identify an external issue that is threatening your equipment's health, they will provide a detailed report and work with your maintenance team to implement a permanent solution.
                            </p>
                            <p>
                                Resident Engineer services are available for our largest clients. This involves a dedicated Sunshine engineer stationed full-time at your facility. These resident professionals handle daily maintenance, manage the spare parts inventory, and provide immediate response to any operational challenge. For a high-volume central laundry processing 10 tons of linen a day, a resident engineer is the ultimate guarantee of operational continuity and technical excellence.
                            </p>
                        </section>

                        <section id="training-programs" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Institutional Knowledge: Comprehensive Operator Training</h2>
                            <p>
                                The performance of an industrial machine is inextricably linked to the skill of the person operating it. Over 70 percent of machinery downtime in India is the direct result of operator error—incorrect loading, poor program selection, or ignoring early warning signs. Our after-sales support program addresses this by prioritizing <strong>Institutional Knowledge</strong>. We provide deep, hands-on training that empowers your staff to become experts in their own right.
                            </p>
                            <p>
                                Every installation is followed by a week-long "Proficiency Program" for your laundry team. We cover the full spectrum of machine operation, from basic controls to advanced program customization. We place a heavy emphasis on safety protocols, chemical handling, and the "Human-Machine Interface." Our trainers use adult-learning techniques, including video demonstrations and practical workshops, to ensure the knowledge is retained and practiced by all staff members.
                            </p>
                            <p>
                                Refresher training is a mandatory part of our support commitment. Every six months, we return to your facility to conduct an "Operator Audit." We evaluate the staff's performance, identify any bad habits that may have developed, and provide updates on new techniques or software features. This continuous education is vital in an industry with high staff turnover, ensuring that your laundry always maintains its high standard of quality and safety.
                            </p>
                            <p>
                                We also offer specialized "Maintenance Level Training" for your in-house engineering team. This covers deep technical topics like PLC troubleshooting, inverter calibration, and mechanical alignment. By transferring this knowledge to your team, we reduce your dependence on external service calls for minor issues, increasing your operational autonomy and lowering your long-term costs. Empowered staff are the key to a world-class laundry operation.
                            </p>
                        </section>

                        <section id="warranty-mgmt" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Strategic Warranty Management: Safeguarding Your Assets</h2>
                            <p>
                                A warranty is more than just a piece of paper; it is a technical promise of quality. Our strategic warranty management program is designed to provide you with complete peace of mind during the most critical early years of your equipment's life. We offer some of the most comprehensive warranties in the industry, covering all major structural, mechanical, and electronic components. Our goal is to ensure that your capital investment is 100 percent protected against any manufacturing defect.
                            </p>
                            <p>
                                Transparent validation is the key to our warranty program. Every machine we sell is registered in our digital tracking system from the moment of dispatch. We document the commissioning process, utility quality, and initial performance data to create a "Birth Certificate" for your machine. This digital record makes the warranty claim process fast and frictionless. If a part fails, we don't just replace it; we analyze the failure to ensure it wasn't caused by an external site issue that needs addressing.
                            </p>
                            <p>
                                We also offer <strong>Extended Warranty Packages</strong>. These allow you to push your protection out to 5 or even 10 years, providing a long-term fixed-cost model for your equipment maintenance. Extended warranties are particularly popular with budget-driven institutions like hospitals and government facilities, as they eliminate the risk of unexpected high-value repairs. Our warranty team manages all notifications and renewals, ensuring you are never left without coverage.
                            </p>
                            <p>
                                Finally, we provide <strong>Linen Protection Guarantees</strong>. If a defect in our machine's drum or control system causes damage to your linen during the warranty period, we stand behind our quality. This holistic approach to warranty management demonstrates our ultimate confidence in Sunshine's engineering and our commitment to your business's total success. A Sunshine warranty is a bond of trust between manufacturer and operator.
                            </p>
                        </section>

                        <section id="digital-diagnostics" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Remote Support and Digital Diagnostics: The Future of Service</h2>
                            <p>
                                The integration of IoT (Internet of Things) and Cloud Diagnostics has revolutionized the way we support our machinery in India. Today, a Sunshine technician in Delhi can "Look Inside" a machine in Bangalore in real-time. Our advanced digital diagnostics allow us to monitor hundreds of data points—from motor temperatures and water flow rates to exact cycle durations and energy consumption—all from our central control room.
                            </p>
                            <p>
                                This "Virtual Engineering" allows us to identify and resolve issues before they even become apparent to the operator. If we see a heating element is taking 10 percent longer than usual to reach temperature, we can flag a scale issue or a failing contactor. We can then schedule a service call for a quiet afternoon, preventing a breakdown during a busy morning shift. This transition from "Break-Fix" to "Predict-Prevent" is what makes a Sunshine-supported facility a leader in efficiency.
                            </p>
                            <p>
                                Digital diagnostics also provide our clients with unprecedented operational insight. Our monthly "Performance Audits" summarize your equipment's health, utility usage, and labor efficiency. You can see which operators are over-loading machines, which programs are consuming the most energy, and where you have opportunities for process optimization. This data-driven approach turns your after-sales support into a business intelligence tool, helping you make informed decisions about your facility's future.
                            </p>
                            <p>
                                For facilities in remote or high-security areas, remote support is a game-changer. We can push software updates, recalibrate water levels, and even remotely reset lockout codes—all without needing an engineer to travel to the site. This reduces response times from days to seconds and significantly lowers the environmental and financial cost of service. At Sunshine, we are not just fixing machines; we are building the digital ecosystem for the future of laundry.
                            </p>
                        </section>

                        <section id="lifecycle-optimization" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Lifecycle Support: Upgrades, Modernization, and Retrofitting</h2>
                            <p>
                                An industrial washing machine is built for a 20-year lifespan, but technology evolves much faster. Our lifecycle support services are designed to ensure your machines never become obsolete. We provide a range of <strong>Modernization and Retrofit Kits</strong> that allow you to add the latest energy-saving, water-recycling, and digital-control features to your existing fleet. This is often a much more cost-effective way to improve performance than replacing the entire machine.
                            </p>
                            <p>
                                Control system upgrades are the most common retrofit. We can replace older analog or basic digital timers with our latest high-definition PLCs. These new controllers provide much finer control over wash parameters, more detailed error reporting, and full IoT connectivity. This simple upgrade can revive an older, mechanically sound machine, making it as efficient and easy-to-use as a brand-new unit. We also offer advanced VFD (Variable Frequency Drive) retrofits to improve motor efficiency and reduce electrical noise.
                            </p>
                            <p>
                                Water and energy recovery systems can also be integrated during the lifecycle. We can retrofit "Heat Recovery Modules" to your tumble dryers or "Water Recycling Tanks" to your washer extractors. These systems capture waste heat and grey-water, reusing them for the next cycle. In many Indian facilities, these retrofits can reduce utility bills by up to 30 percent, providing an ROI in as little as 12 to 18 months. Lifecycle support is about maximizing the value of every rupee you spend.
                            </p>
                            <p>
                                Finally, we manage the <strong>End-of-Life Transition</strong>. When a machine finally reaches a point where it is no longer efficient to maintain, we assist with a trade-in program for new equipment. We handle the decommissioning, the removal from your facility, and the environmentally responsible disposal or recycling of the old unit. Our relationship doesn't end when a machine is retired; it evolves into the next generation of your facility's growth.
                            </p>
                        </section>

                        <section id="emergency-protocols" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Emergency Management: The 4-Hour Response Commitment</h2>
                            <p>
                                In an industrial environment, some breakdowns are more than just an inconvenience—they are emergencies. A major flood from a burst pipe, a smoke event from a dryer, or a total power failure in a large hospital laundry requires immediate, high-level action. Our <strong>Emergency Management Protocol</strong> is designed to provide our clients with the fastest possible relief during these critical moments.
                            </p>
                            <p>
                                For our gold-tier support customers, we offer a <strong>4-Hour On-Site Commitment</strong> in major metro areas. When an emergency is declared, a senior engineer is dispatched immediately with a prioritized kit of parts and diagnostic tools. Our goal in these situations is "Stabilize and Secure"—getting the machines into a safe state and restoring limited operation as quickly as possible. We coordinate directly with your facility's security and maintenance teams for seamless access.
                            </p>
                            <p>
                                Emergency support also includes our "Critical Partner Network." If a major component like a large motor or a boiler fails and cannot be repaired on-site, we have pre-arranged agreements with logistics and repair specialists to prioritize your request. We move mountains to ensure your operation is not down for a single moment more than absolutely necessary. This level of dedication is why Sunshine is the trusted support partner for India's most critical institutions.
                            </p>
                            <p>
                                After every emergency incident, we conduct a "Root Cause Analysis" (RCA). We trace the failure to its source—whether it was an electrical surge, a mechanical flaw, or an external utility issue—and implement a permanent "Prevention Plan." We believe that an emergency should only happen once; after that, it becomes a documented risk that has been mitigated. Emergency support at Sunshine is about resilience and restorative engineering.
                            </p>
                        </section>

                        <section id="chemical-integration" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Technical Synergy: Chemical Dosing and Support Integration</h2>
                            <p>
                                The performance of an industrial washer is a three-way partnership between the machine, the water, and the chemicals. A failure in any one of these three will result in poor wash quality or equipment damage. Our after-sales support program includes a deep focus on <strong>Technical Synergy</strong>—ensuring that your machines are perfectly synchronized with your detergent and chemical dosing systems.
                            </p>
                            <p>
                                Incorrect chemical concentrations are a leading cause of machinery corrosion and fabric degradation. High levels of chlorine or improperly neutralized alkali can eat through stainless steel drums and destroy rubber seals. Our support engineers work directly with your chemical supplier to calibrate the machine's dosing ports. We ensure that the signals between the washer's controller and the dosing pumps are timed to the millisecond, delivering the right chemical at the exact right moment in the cycle.
                            </p>
                            <p>
                                We also monitor the "Mechanical Wash Action." If your operator changes the linen type or the load size, the chemical requirements change too. We train your staff on how to select the correct wash program to match the chemical profiles pre-set by your detergent specialist. This integration prevents the "Grey Linen" or "Rough Fabric" issues that can damage your hotel's reputation or compromise hospital hygiene standards.
                            </p>
                            <p>
                                For facilities looking for an "All-in-One" solution, we can manage the relationship with the chemical provider on your behalf. We conduct regular "Wash Quality Audits," testing for pH levels, whiteness retention, and fabric strength. This holistic view of the laundry process ensures that every load that leaves your facility is perfect. Support integration is what turns a group of machines into a high-performance chemical-mechanical system.
                            </p>
                        </section>

                        <section id="documentation" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Professional Documentation: Manuals, Schematics, and Logs</h2>
                            <p>
                                Professional support is impossible without professional documentation. At Sunshine, we believe that transparency is the ultimate sign of quality. Every machine we deliver is accompanied by a comprehensive documentation pack that is also available digitally through our customer portal. This high-level technical detail is what allows your in-house team to perform their duties safely and effectively.
                            </p>
                            <p>
                                Our documentation includes <strong>Installation Schematics</strong>, <strong>Electrical Wiring Diagrams</strong>, <strong>Plumbing Interconnects</strong>, and <strong>Full Parts Catalogs</strong> with exploded views. We don't use generic manuals; we provide the exact documentation for the specific model and serial number of the machine you own. This precision is vital for correct troubleshooting and for ensuring that the right spare parts are ordered every time.
                            </p>
                            <p>
                                We also provide specialized "Maintenance Logs" and "Operator Journals." These are designed to help your team track their daily, weekly, and monthly tasks in an organized way. For our digital-tier customers, these logs are electronic and automatically update your machine's central health record. This documentation is essential for passing health inspections, fire safety audits, and achieving international quality certifications like ISO 9001.
                            </p>
                            <p>
                                Documentation also plays a critical role in safety. Every manual includes clear "Safety Procedures" and "Emergency Shutdown Protocols" in multiple languages. We also provide clear signage for your laundry room walls, summarizing the rules of safe operation and common troubleshooting steps. In a high-risk environment, a well-placed diagram can be as valuable as a senior engineer. Professional documentation is the foundation of institutional safety at Sunshine.
                            </p>
                        </section>

                        <section id="staff-augmentation" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Staff Augmentation: On-Site Resident Engineering Services</h2>
                            <p>
                                For facilities where downtime is simply not an option—such as 1000-bed hospitals or massive 24-hour centralized laundry plants—we offer <strong>Staff Augmentation services</strong>. This involves placing a full-time, dedicated Sunshine engineer on your site. This "Resident Engineer" is a senior professional who is integrated into your facility's management team, taking 100 percent responsibility for the health and performance of your laundry equipment.
                            </p>
                            <p>
                                A resident engineer provides an unmatched level of support. They are there when the first machine starts at 5:00 AM and when the last one finishes at midnight. They perform all preventive maintenance, handle every breakdown instantly, and manage the site's spare parts inventory. Because they are on-site daily, they can identify subtle changes in machine behavior—a slight rise in temperature or a minor change in vibration—that an occasional visitor might miss.
                            </p>
                            <p>
                                Beyond maintenance, the resident engineer becomes your "On-Site Training Officer." They provide continuous, informal coaching for your operators, ensuring that high standards of hygiene and efficiency are maintained every hour. They also manage the utility interface—working with your boiler mechanics and electricians to ensure the laundry room always has the power and steam it needs to perform.
                            </p>
                            <p>
                                Staff augmentation simplifies your HR and operations. You don't have to hire, train, and manage specialized laundry mechanics; we provide the talent, the tools, and the technical backup. This allows your management team to focus on their core mission—providing healthcare or hospitality—knowing that the technical heart of the laundry is in the hands of the nation's leading experts.
                            </p>
                        </section>

                        <section id="customer-success" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Customer Success Management: A Partnership for Performance</h2>
                            <p>
                                After-sales support at Sunshine is not just about fixing machines; it is about managing your <strong>success</strong>. Every major client is assigned a dedicated "Customer Success Manager" (CSM). The CSM is not a salesperson; they are a technical strategist who acts as your single point of contact for everything from service scheduling and training needs to future facility planning. They are your voice inside Sunshine Equipment.
                            </p>
                            <p>
                                Your CSM conducts "Quarterly Business Reviews" (QBRs). During these meetings, we move beyond individual repair tickets and look at the "Big Picture" of your laundry's performance. We analyze your utility consumption, your labor throughput, and your equipment's health data to identify opportunities for improvement. The CSM helps you build a three-year "Technology Roadmap," ensuring you have the budget and the plan in place for future growth and modernization.
                            </p>
                            <p>
                                The CSM also acts as a bridge to our manufacturing and design teams. If you have a specific operational challenge—such as processed specialized fabrics or navigating unique site limitations—the CSM coordinates with our internal experts to create a custom solution. This feedback loop is what drives Sunshine's innovation; many of our best machine features were developed based on the real-world needs of our clients as identified by their Success Managers.
                            </p>
                            <p>
                                Success management is about <strong>Value Realization</strong>. We want to ensure that every machine you buy from us is delivering the exact ROI you expected when you signed the contract. If your throughput is lower than planned or your energy costs are higher, the CSM will investigate and implement a correction plan. Our partnership is measured not by the machines we sell, but by the performance of the facilities we support.
                            </p>
                        </section>

                        <section id="compliance-support" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Regulatory and Compliance Support for Indian Facilities</h2>
                            <p>
                                Navigating the regulatory landscape for industrial facilities in India can be a daunting task. Between fire safety certificates, electrical board approvals, environmental clearances (ETP), and labor department safety audits, there are dozens of standards that must be met. Our after-sales support includes a dedicated <strong>Compliance Support Service</strong> that helps you maintain your legal "License to Operate" with zero stress.
                            </p>
                            <p>
                                We provide you with the exact technical documentation required by various government bodies. Whether it's the electrical load calculations for the PWD or the moisture-emission data for a fire safety audit, we have the records ready to go. Our engineers can also be present during official inspections to answer technical questions and demonstrate the safety features of the machines. This level of professional backup is invaluable during complex institutional audits.
                            </p>
                            <p>
                                Environmental compliance is a major focus, especially regarding wastewater and lint emissions. We help you implement the monitoring systems required by the Pollution Control Board and ensure that your machines are operating within the allowed chemical and thermal parameters. If regulations change—as they often do—we provide proactive advice on the upgrades or process changes you need to remain compliant.
                            </p>
                            <p>
                                For healthcare facilities, we provide the documentation required for NABH (National Accreditation Board for Hospitals & Healthcare Providers) and other international quality standards. We ensure your "Linen Management System" meets all hygiene protocols and that your sanitization cycles are validated and recorded. Compliance support is about protecting your institution's reputation and ensuring that your facility is a model of industrial integrity in India.
                            </p>
                        </section>

                        <section id="faqs" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">After-Sales Support Frequently Asked Questions</h2>
                            <div className="space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-8">
                                        <h3 className="text-xl font-bold text-brand-blue mb-4">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Customer Reviews Section */}
                        <section className="mb-20 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Service Partnerships</h2>
                            <div className="grid gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">"The after-sales support from Sunshine is what sets them apart. Their 24/7 hotline has saved us multiple times during peak occupancy, and their technical engineers are the best we've ever worked with."</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs text-center font-black">NM</span>
                                        Director of Engineering, ITC Hotels
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">"We rely on Sunshine for our hospital's critical laundry operations. Their response time is exceptional, and the level of operator training they provide has significantly improved our hygiene standards."</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs text-center font-black">AV</span>
                                        Operations Admin, Apollo Hospitals
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">"Their digital diagnostics tool is a game-changer. Being able to see the health of all our machines across multiple cities from one dashboard helps us plan maintenance perfectly."</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs text-center font-black">SK</span>
                                        CEO, National Linen Services
                                    </p>
                                </div>
                            </div>
                        </section>
                    </article>

                    {/* Right Column: CTA & Related */}
                    <aside className="col-span-12 lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-brand-blue text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Headphones size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Support Helpdesk</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Need immediate technical assistance? Our engineers are ready to help you resolve any machinery issue.
                                </p>
                                <button onClick={openContactModal} className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg">
                                    Call Support Online <ArrowUpRight size={20} />
                                </button>
                            </div>

                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Related Services</h3>
                                <nav className="space-y-4">
                                    <Link href="/industrial-washing-machine-installation" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Hammer size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Installation</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/laundry-equipment-maintenance-services" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Wrench size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Maintenance</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/laundry-equipment-spare-parts-supplier" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Cpu size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Spare Parts</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/commercial-laundry-equipment-supplier" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Building2 size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Equipment Sales</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Service Excellence</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Headphones size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Availability</p>
                                            <span className="text-sm font-bold text-gray-800 tracking-tight">24/7 Priority Support</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Users size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Expertise</p>
                                            <span className="text-sm font-bold text-gray-800 tracking-tight">Institutional Training</span>
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />
        </main>
    );
}

const ArrowUpRight = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);
