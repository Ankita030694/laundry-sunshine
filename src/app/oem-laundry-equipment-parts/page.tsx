"use client";

import Image from "next/image";
import Link from "next/link";
import {
    CheckCircle2, Phone, Mail, ArrowRight, MessageSquare, Star,
    ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp,
    AlertCircle, Heart, Settings, Shield, Package, Truck
} from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import CTA from "@/components/CTA";

const sections = [
    { id: "strategic-value", title: "The Strategic Value of Genuine Components" },
    { id: "oem-vs-aftermarket", title: "OEM vs Aftermarket: A Technical Breakdown" },
    { id: "hidden-risks", title: "The Hidden Risks of Generic Replacements" },
    { id: "machine-life", title: "Maximizing Machine Life Through Genuine Parts" },
    { id: "economic-calculus", title: "The Economic Calculus of ROI" },
    { id: "safety-standards", title: "Safety Standards & Certifications" },
    { id: "warranty-protection", title: "Warranty Protection & Liability" },
    { id: "washer-parts", title: "Critical Washer Component Guide" },
    { id: "dryer-parts", title: "Essential Dryer Component Guide" },
    { id: "ironer-parts", title: "High-Precision Ironer Components" },
    { id: "electronics", title: "Electronics & Control Board Integrity" },
    { id: "gaskets-seals", title: "The Science of Gaskets & Seals" },
    { id: "drive-belts", title: "Drive Belts: The Unsung Heroes of Torque" },
    { id: "heating-elements", title: "Heating Elements & Thermal Precision" },
    { id: "valves-control", title: "Water & Steam Valves: Precision Control" },
    { id: "lubricants", title: "Lubricants as Part of the OEM Ecosystem" },
    { id: "counterfeit-id", title: "Identifying Genuine vs Counterfeit Parts" },
    { id: "logistics-india", title: "Logistics: Reliable Supply Chain in India" },
    { id: "regional-hubs", title: "Regional Strategy & Rapid Fulfillment" },
    { id: "future-trends", title: "The Future: Digital Inventory & 3D Printing" },
    { id: "reviews", title: "Industry Expert Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
    {
        question: "Why are OEM parts significantly more expensive than generic ones?",
        answer: "OEM parts are engineered with exact tolerances and superior materials to match the original factory specifications. Generic parts often use lower grade alloys and plastics that fail under the intense heat and mechanical stress of industrial operations."
    },
    {
        question: "Does using a non OEM part really void my machine warranty?",
        answer: "Yes, in most cases. Modern industrial machine warranties specifically require the use of genuine spare parts to ensure safety and performance. A generic part can cause cascading failures that the manufacturer cannot be held responsible for."
    },
    {
        question: "How can I tell if a laundry machine part is genuine OEM?",
        answer: "Check for the manufacturer hologram, laser etched serial numbers, and original factory packaging. Genuine parts also include technical documentation and often have a distinct weight and finish that generic clones lack."
    },
    {
        question: "Which parts should I never buy as generic/aftermarket?",
        answer: "Critical safety and functional components such as main bearings, electronic control boards, gas valves, and heating elements should always be OEM. A failure in these areas can lead to catastrophic damage or workplace injury."
    },
    {
        question: "What is the expected delivery time for OEM parts in India?",
        answer: "Through our network of regional hubs in Delhi, Mumbai, and Gurgaon, we provide same day or next day delivery for eighty percent of critical spare parts, minimizing your facility downtime."
    },
    {
        question: "Do OEM parts come with their own dedicated warranty?",
        answer: "Yes. All genuine Sunshine Equipments parts come with a manufacturer backed warranty that covers any material or manufacturing defects, providing peace of mind that generic parts simply cannot offer."
    },
    {
        question: "Can generic belts handle the torque of a 100kg washer?",
        answer: "Usually no. Industrial washer belts require specific fiber reinforcement and heat resistance profiles. Generic belts often stretch or smoke within days of installation, leading to slipped timing and poor extraction."
    },
    {
        question: "How do OEM gaskets differ from universal ones?",
        answer: "OEM gaskets are molded from chemical resistant polymers that don&apos;t degrade when exposed to industrial detergents and bleaches. Universal gaskets often swell or brittle, leading to leaks that damage the floor and machines."
    },
    {
        question: "Why is it important to use OEM lubricants?",
        answer: "Industrial laundry machines operate at temperatures that cause standard grease to liquefy and leak. OEM lubricants are engineered to maintain their viscosity under extreme thermal and mechanical pressure."
    },
    {
        question: "Is there a long term financial benefit to buying only OEM parts?",
        answer: "Absolutely. While the initial cost is higher, the total cost of ownership is much lower. OEM parts last three to five times longer than generic ones, reducing labor costs for repeated repairs and protecting your capital investment."
    }
];

export default function OEMPartsPage() {
    const { openContactModal } = useModal();
    const websiteUrl = "https://sunshine-laundry.com/oem-laundry-equipment-parts";
    const brandName = "Sunshine Equipments";

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
                    "url": "https://sunshine-laundry.com/sunshine_logo.svg",
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
                "name": "Genuine OEM Laundry Equipment Parts | Sunshine Equipments",
                "description": "Premium industrial laundry spare parts. Learn why genuine OEM components are critical for reliability, ROI, and warranty protection in your facility."
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunshine-laundry.com/" },
                    { "@type": "ListItem", "position": 2, "name": "OEM Parts", "item": websiteUrl }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "headline": "The Technical & Financial Superiority of Genuine OEM Laundry Parts",
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "datePublished": "2024-02-17",
                "image": "https://sunshine-laundry.com/oem-parts-hero.jpg"
            },
            {
                "@type": "Product",
                "name": "Industrial Laundry OEM Spare Parts",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "158"
                }
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
        <main className="min-h-screen bg-white font-sans">
            <section className="relative pt-32 pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/hero-bg.jpg" alt="OEM Parts Inventory" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-sm font-bold mb-8 uppercase tracking-widest leading-none">
                        <Shield size={16} className="text-brand-orange" /> 100% Genuine Certified
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Genuine OEM <br />
                        <span className="text-brand-orange italic">Laundry Equipment Parts</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium transition-all duration-300">
                        Protect your industrial investment with factory-certified components. The definitive guide to selecting genuine spare parts for absolute reliability and optimized facility performance.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button onClick={openContactModal} className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3">
                            Order Parts Now <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "OEM Parts", href: websiteUrl }]} />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 py-12">
                <div className="grid grid-cols-12 gap-12">
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} orientation="vertical" />
                        </div>
                    </aside>

                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="strategic-value" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">The Strategic Value of Genuine Components</h2>
                            <p>
                                In the industrial laundry sector, the quality of your spare parts defines the lifespan of your heavy machinery. Every machine is a complex ecosystem of thousands of individual components, each engineered to perform under specific loads, temperatures, and chemical environments. The strategic value of genuine Original Equipment Manufacturer (OEM) parts lies in their absolute compatibility. When you replace a part with an OEM equivalent, you are not just fixing a machine; you are restoring it to its original factory configuration.
                            </p>
                            <p>
                                At Sunshine Equipments, we emphasize that the true cost of a spare part is not its purchase price, but its performance over time. A genuine part is engineered for the exact stresses of the machine it belongs to. It has undergone rigorous testing that generic manufacturers simply cannot replicate. This reliability is the foundation of a successful laundry operation, ensuring that your facility can handle high-volume demands without the constant fear of component failure.
                            </p>
                            <p>
                                Using genuine parts also supports the technical integrity of the entire machine. A component as simple as a drive belt or a water solenoid is part of a larger chain of mechanical action. When one link in that chain is weak—as generic parts often are—it puts excessive strain on the surrounding components. This leads to a cascading failure effect, where a cheap part eventually causes the breakdown of expensive motors or control boards. Genuine parts protect your entire capital investment.
                            </p>
                            <p>
                                Furthermore, OEM parts ensure that your machine continues to operate at its highest efficiency levels. Generic parts often have slight deviations in weight, size, or resistance that can lead to increased energy consumption or reduced extraction quality. By sticking with factory-certified spares, you maintain the utility savings that were promised when you first purchased the machine. Excellence in parts selection is a direct path to excellence in operational profitability.
                            </p>
                            <p>
                                Finally, the use of genuine parts is a critical factor in workplace safety. Many industrial laundry components are points of high pressure or high temperature. A generic valve that fails under steam pressure can lead to dangerous leaks or even explosions. Choosing OEM is not just a financial decision; it is a commitment to the safety and well-being of your entire laundry staff. Safety is never an area where one should compromise for the sake of a few saved dollars.
                            </p>
                        </section>

                        <section id="oem-vs-aftermarket" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">OEM vs Aftermarket: A Technical Breakdown</h2>
                            <p>
                                To the untrained eye, a generic part may look identical to an OEM component. However, the technical differences are profound and usually hidden beneath the surface. Original Equipment Manufacturers specify the exact metallurgical composition of their parts. For example, a Sunshine main drive shaft is forged from a specific grade of stainless steel that balances strength with flexibility. A generic aftermarket copy is often cast from cheaper alloys that are prone to brittle failure under the torque of a 100kg load.
                            </p>
                            <p>
                                Manufacturing tolerances are another critical differentiator. OEM parts are machined to tolerances measured in microns. This precision ensures a perfect fit with neighboring parts, reducing friction and noise. Generic parts are often produced with looser tolerances to keep costs down. This "close enough" fit leads to premature wear, increased vibration, and eventually, the failure of the bearing or housing they are supposed to work within.
                            </p>
                            <p>
                                The materials used in seals and gaskets provide a clear example of OEM superiority. Genuine gaskets are molded from proprietary fluoropolymers that are specifically rated for the industrial detergents and high-heat water of a professional laundry. Aftermarket gaskets often use standard rubber or low-grade nitrile that swells, cracks, or dissolves within weeks of exposure to chlorine or alkaline builders. A leaking machine is a direct result of these hidden material compromises.
                            </p>
                            <p>
                                Testing protocols for OEM parts are extensive. Every batch of genuine Sunshine parts undergoes stress testing, thermal cycling, and chemical resistance audits before they are approved for sale. Generic manufacturers rarely invest in this level of quality control, often relying on the end customer to perform the "field testing." In an industrial environment where downtime costs hundreds of dollars per hour, you cannot afford to be a test subject for an unproven part.
                            </p>
                            <p>
                                Finally, we must consider the firmware and electronics. Modern laundry machines are computers on wheels. OEM control boards and sensors are designed to communicate perfectly with the central PLC. Aftermarket electronics often have "noise" or timing issues that lead to ghost error codes and erratic machine behavior. Maintaining the digital integrity of your equipment is only possible through the use of factory-original electronic components.
                            </p>
                        </section>

                        <section id="hidden-risks" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">The Hidden Risks of Generic Replacements</h2>
                            <p>
                                The most dangerous aspect of generic parts is the risk they pose that isn&apos;t immediately visible. When a generic part fails, it rarely does so in isolation. A snapped non-OEM belt can whip around and destroy sensitive sensors or cut electrical lines. A generic water valve that fails to close can lead to a machine flood that ruins the surrounding flooring and damages the motors of adjacent machines. These "secondary damages" often cost ten times as much as the initial savings on the part.
                            </p>
                            <p>
                                Liability is a significant hidden risk. If a generic part contributes to an accident, the machine manufacturer and your insurance provider may both deny coverage. You are essentially taking on a massive legal and financial liability for the sake of a small discount on a spare part. In a commercial environment, this is an unacceptable risk profile. Professional facilities protect their staff and their business by refusing to use uncertified components.
                            </p>
                            <p>
                                Operational inconsistency is another risk. Generic parts often vary in quality from batch to batch. One month you get a part that works reasonably well, and the next month you get one that fails instantly. This variability makes it impossible to build a reliable preventive maintenance schedule. You end up in a "firefighting" mode, constantly reacting to unexpected failures rather than following a planned operational roadmap. Reliability is the cornerstone of profit.
                            </p>
                            <p>
                                There is also the risk to your brand reputation. If an ironer with a generic padding leaves subtle grease marks on a five-star hotel&apos;s linens, the guests will notice. You will face complaints, re-washes, and potentially the loss of a major contract. The "savings" from the cheap padding become irrelevant when compared to the loss of a multi-million-rupee hospitality account. High-end clients demand perfection, and perfection starts with the quality of your machinery.
                            </p>
                            <p>
                                Finally, generic parts often have a significant "hidden labor cost." Because they fail more frequently and are harder to fit, your maintenance team spends more time dealing with the same machine. This labor time is a direct expense that isn&apos;t reflected in the part&apos;s purchase price. When you calculate the labor for three generic replacements versus one OEM installation, the genuine part is almost always the cheaper option in the long run.
                            </p>
                        </section>

                        <section id="machine-life" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Maximizing Machine Life Through Genuine Parts</h2>
                            <p>
                                The secret to the legendary thirty-year lifespan of Sunshine equipment is the consistent use of genuine parts. When you maintain a machine exclusively with OEM spares, you are essentially hitting a "reset button" on its wear. The machine continues to operate with the same tolerances and efficiency it had on Day One. This preservation of technical integrity is what allows our clients to see their hardware through three decades of service, while competitors are replacing their whole fleet every ten years.
                            </p>
                            <p>
                                Think of it as a form of "industrial preventative medicine." By using the right components, you prevent the friction and vibration that cause a machine to age. A well-fitted OEM bearing allows the drive shaft to spin without the micro-oscillations that lead to metal fatigue. A genuine gas valve ensures that the burner runs at the correct temperature, preventing the thermal stress that causes the heat exchanger to crack over time. Every genuine part is a guardian of the machine&apos;s future.
                            </p>
                        </section>

                        <section id="economic-calculus" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">The Economic Calculus of ROI</h2>
                            <p>
                                Calculating the ROI of OEM parts requires looking at the Total Cost of Ownership (TCO). A generic part might cost 500 rupees while the OEM equivalent costs 1000. On the surface, the generic seems like a win. However, if the generic part lasts for 6 months and the OEM part lasts for 36 months, the generic part will cost you 3000 rupees in parts alone over that three-year period. Add in the cost of six separate maintenance calls versus one, and the economic choice becomes clear.
                            </p>
                            <p>
                                We provide our clients with detailed financial models that demonstrate the long-term savings of genuine components. We factor in parts cost, labor cost, and the cost of lost production during downtime. In every scenario, the facility that utilizes 100% genuine parts has a lower operating cost per kilogram of laundry. This data-driven approach is why the world&apos;s leading hotels and hospitals trust Sunshine Equipments for their parts supply and service.
                            </p>
                        </section>

                        <section id="safety-standards" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Safety Standards & Certifications</h2>
                            <p>
                                Industrial laundry machinery is subject to stringent global safety standards. For example, pressure vessels in ironers and high-speed extractors must meet specific metallurgical certifications. Genuine OEM parts are manufactured to these exact standards, ensuring that the machine remains in compliance with its original safety certifications. A generic replacement part often has no such certification, or its "certification" is from an unverified third-party lab.
                            </p>
                            <p>
                                Maintaining compliance is vital for passing health and safety audits. In the healthcare sector, a single non-compliant part can lead to the closure of a facility. We provide all the necessary documentation and traceability for every genuine part we sell. You can show your auditors exactly where the part came from and the test standards it was manufactured to. This transparency is a key part of the professional service we provide at Sunshine Equipments.
                            </p>
                        </section>

                        <section id="warranty-protection" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Warranty Protection & Liability</h2>
                            <p>
                                Your machine&apos;s warranty is a valuable asset that protects you from expensive major repairs. However, this warranty is almost always conditional on the use of genuine spare parts and authorized service. Installing a single non-OEM sensor or belt can provide the manufacturer with the legal grounds to void your entire warranty. By sticking to genuine components, you keep your protection in place, ensuring that Sunshine remains your partner in case of a major mechanical event.
                            </p>
                            <p>
                                Beyond the machine warranty, there is the matter of manufacturer liability. If a generic part fails and causes injury or property damage, the machine manufacturer is no longer liable for the failure. You, the facility owner, become 100% responsible for the damages. This is a level of liability that no business should ever take on willingly. Genuine parts come with their own manufacturer-backed guarantee, adding a layer of protection to your overall business risk profile.
                            </p>
                        </section>

                        <section id="washer-parts" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Critical Washer Component Guide</h2>
                            <p>
                                The most critical OEM parts for a washer-extractor are the bearings and the seals. The "seal kit" is the primary defense against water entering the bearing housing. Our OEM seals are made from specialized Viton or PTFE compounds that can resist the corrosive action of industrial chemicals while maintaining their shape under the heat of a 90-degree Celsius wash. Replacing these with generic rubber seals is a recipe for a 50,000-rupee repair bill within six months.
                            </p>
                            <p>
                                Water inlet valves and drain valves are also high-wear items. OEM valves feature heavy-duty solenoids and high-grade internal springs that are rated for millions of cycles. Generic versions often have weak solenoids that burn out under the constant firing required in a 24/7 laundry. Furthermore, our OEM drain valves are designed for maximum flow, ensuring that the machine drains in the seconds prescribed by the software, maintaining the facility&apos;s hourly throughput.
                            </p>
                        </section>

                        <section id="dryer-parts" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Essential Dryer Component Guide</h2>
                            <p>
                                In industrial dryers, the sensor bars and the heating elements are the most vital components. Moisture sensor bars rely on precise electrical conductivity to determine when the linen is dry. Generic bars often have uneven conductivity, leading to over-drying or under-drying. Replacing these with genuine parts ensures that your energy bills stay low and your linens stay soft. It is a small part that has a massive impact on the facility&apos;s daily operational costs.
                            </p>
                            <p>
                                Blower fans and motors must be perfectly balanced. A generic blower fan that is even a few grams off-balance will create a vibration that eventually snaps the motor shaft or destroys the motor bearings. We only sell factory-balanced blower assemblies. Additionally, we provide OEM gas igniters and safety thermostats that are specifically rated for the high-airflow environment of our dryers, ensuring reliable ignition and total fire safety.
                            </p>
                        </section>

                        <section id="ironer-parts" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">High-Precision Ironer Components</h2>
                            <p>
                                Ironers require a level of precision measured in fractions of a millimeter. The padding and the belts on an ironer are subject to extreme heat and pressure. OEM ironer padding is formulated to maintain its elasticity and breathability for much longer than generic alternatives. This ensures a consistent, glass-like finish on your linens load after load. Using inferior padding results in a rough finish and increased moisture retention, often requiring the linens to be run through the ironer twice.
                            </p>
                            <p>
                                Scraper bars and feed belts are the parts that come into direct contact with the guest linens. Our OEM scrapers are made from self-lubricating, non-marking polymers that guide the linen smoothly without any risk of snagging or staining. Generic metal scrapers can often develop burrs that tear through expensive five-star bedsheets in an instant. Protecting your linen inventory is a direct result of choosing the right spare parts for your ironing department.
                            </p>
                        </section>

                        <section id="electronics" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Electronics & Control Board Integrity</h2>
                            <p>
                                The brain of a modern industrial laundry machine is its control board. These are sensitive electronic components that manage everything from water levels to motor speeds. Using a non-genuine control board is a massive risk. These parts interact with the machine&apos;s firmware, and any mismatch can lead to erratic behavior, such as the machine skipping rinse cycles or failing to drain at the correct time. Maintenance of the digital ecosystem is just as important as mechanical care.
                            </p>
                            <p>
                                We also see many "repaired" or "refurbished" boards in the generic market. These are often boards that have had individual components swapped out by unverified technicians. While they might work for a few days, they lack the multi-layered protection and precision oscillators of a factory-new Sunshine board. Don&apos;t risk your machine&apos;s entire operational logic on a cheap electronic shortcut. We provide only 100% factory-new control electronics for absolute security.
                            </p>
                        </section>

                        <section id="gaskets-seals" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">The Science of Gaskets & Seals</h2>
                            <p>
                                Gaskets and seals are the silent guardians of your laundry machines. They keep the chemicals in and the water out. The engineering of an OEM seal is a study in polymer science. They must remain flexible at zero degrees Celsius and not melt at one hundred. They must resist the swelling caused by detergents and the drying caused by high-speed airflow. This unique material property is why generic "one-size-fits-all" seals always fail prematurely in a Sunshine machine.
                            </p>
                            <p>
                                We provide full seal kits for all major machine components. By replacing the entire kit during a scheduled maintenance window, you ensure that all points of potential leakage are renewed simultaneously. This prevents the "whack-a-mole" problem where fixing one leak simply moves the pressure to the next weakest point. A dry machine is a safe machine, and genuine seals are the only way to achieve 100% water and steam integrity.
                            </p>
                        </section>

                        <section id="drive-belts" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Drive Belts: The Unsung Heroes of Torque</h2>
                            <p>
                                An industrial washer generates massive torque. Moving two hundred kilograms of wet laundry from a standstill to eighty RPM is a huge physical challenge. The drive belt is the component that must transmit this power without slipping or snapping. OEM belts are reinforced with Aramid or Carbon fibers to ensure they don&apos;t stretch under load. A generic belt will often "glaze" due to heat, losing its grip and causing the machine to fail to reach its full extraction speed.
                            </p>
                            <p>
                                Furthermore, OEM belts are precisely sized. A belt that is even one centimeter too long or too short will put excessive strain on the motor bearings or the pulley housing. This leads to noise, vibration, and eventual motor failure. We provide the exact belt profile for every Sunshine model, ensuring a silent, high-efficiency power transfer that protects your machine from the "jerking" action of a poorly fitted aftermarket belt.
                            </p>
                        </section>

                        <section id="heating-elements" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Heating Elements & Thermal Precision</h2>
                            <p>
                                Thermal efficiency is the key to low utility bills. Our OEM heating elements are made from Incoloy or specialized stainless alloys that resist the mineral scaling that kills cheaper elements. They are also designed with a specific "watt-density" that prevents the localized boiling that causes mineral deposits to form in the first place. By staying cleaner for longer, these elements maintain their heat transfer rate, ensuring that your wash water reaches temperature in the minimum possible time.
                            </p>
                            <p>
                                In dryers, the heating coils must be able to withstand thousands of expansion and contraction cycles without sagging or breaking. Genuine Sunshine coils are wound on high-temperature ceramic insulators that maintain their shape and spacing for decades. Generic coils often sag under their own heat, coming into contact with the housing and causing a dangerous electrical short. Safety and thermal precision are the two biggest reasons to never go generic with heating components.
                            </p>
                        </section>

                        <section id="valves-control" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Water & Steam Valves: Precision Control</h2>
                            <p>
                                In an industrial laundry, seconds matter. A water valve that takes five seconds to open and close can add minutes to every cycle, reducing your facility&apos;s daily capacity by ten percent. Our OEM valves are high-flow units designed to work with the machine&apos;s pressure sensors for absolute precision. They close with a "soft" action to prevent water-hammer and provide a 100% airtight seal against the high pressures of industrial steam and water systems.
                            </p>
                            <p>
                                We also focus on the durability of the internal diaphragms and springs. These are the parts that typically fail on generic valves, often leading to a "trickle" leak that goes unnoticed but wastes thousands of liters of treated water every month. By using genuine valves, you ensure that when the machine is off, it is truly off. This total control over your inputs is a major factor in our clients&apos; industry-leading utility efficiency rankings.
                            </p>
                        </section>

                        <section id="lubricants" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Lubricants as Part of the OEM Ecosystem</h2>
                            <p>
                                We do not treat lubricants as a separate commodity; we treat them as a spare part. The grease inside a bearing is a mechanical component that must perform under pressure. Our OEM lubricants are formulated to be compatible with our seals and bearing alloys. Standard "multipurpose" greases often contain additives that can attack the very seals they are meant to protect. By using our factory-certified grease, you ensure that your bearings stay quiet and cool for their entire rated lifespan.
                            </p>
                            <p>
                                We also provide specialized oils for ironer gearboxes and dryer transmissions. These oils must maintain their viscosity even when the machine housing reaches eighty degrees Celsius. A standard gearbox oil would become as thin as water at these temperatures, leading to metal-on-metal contact and a catastrophic gearbox failure. The science of lubrication is a vital piece of the reliability puzzle that Sunshine Equipments has mastered over thirty years in the field.
                            </p>
                        </section>

                        <section id="counterfeit-id" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Identifying Genuine vs Counterfeit Parts</h2>
                            <p>
                                Counterfeit parts are a growing problem in the global parts market. These are parts that are intentionally made to look like genuine items, even down to the logo and packaging. However, they are almost always made in uncertified factories using scrap materials. We help our clients identify these fakes by teaching them to look for specific anti-counterfeit features like holograms, unique QR codes, and laser-etched serial numbers that can be verified in our central database.
                            </p>
                            <p>
                                The easiest way to avoid counterfeits is to buy only from authorized Sunshine partners. We maintain a secure supply chain from the factory to your door. If the price of a part seems too good to be true, it almost certainly is. A fake part that fails and ruins your machine is no bargain. We provide our clients with a certificate of authenticity for every major component, providing you with the documentation needed for your internal audits and insurance requirements.
                            </p>
                        </section>

                        <section id="logistics-india" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Logistics: Reliable Supply Chain in India</h2>
                            <p>
                                In India, getting the right part at the right time is the biggest maintenance challenge. Geography and infrastructure can often turn a simple repair into a week-long crisis. Sunshine Equipments has solved this through a massive investment in local logistics. We maintain a central warehouse that stays stocked with over ten thousand unique part numbers. Whether you need a tiny spring or a massive five-hundred-kilogram drum assembly, we have it on the shelf and ready to ship.
                            </p>
                            <p>
                                Our logistics team uses AI-driven inventory management to predict which parts will be needed in each region based on climate, water quality, and the age of the local machine fleet. This allows us to keep the right stock in the right place, reducing transit times and shipping costs for our clients. Reliability in parts supply is a major reason why national hotel and hospital groups choose Sunshine as their exclusive equipment partner.
                            </p>
                        </section>

                        <section id="regional-hubs" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Regional Strategy & Rapid Fulfillment</h2>
                            <p>
                                We operate regional hubs in major corridors including Delhi NCR, Mumbai, and Goa. These hubs are more than just warehouses; they are rapid-fulfillment centers that offer same-day delivery for our most critical parts. If a hotel in Gurgaon has a motor failure at ten AM, we can often have the replacement part on-site by two PM. This level of responsiveness is unique in the Indian market and is the ultimate "insurance policy" for your facility&apos;s operational continuity.
                            </p>
                            <p>
                                We also offer "Customized Spares Audits" for our clients. We analyze your specific machine fleet and suggest a tailored inventory of critical spares that you should keep on-site. This avoids the waste of stocking parts you don&apos;t need while ensuring you are never caught empty-handed for the parts you do. Our local engineers also help with the installation of these parts, providing a full "turnkey" maintenance solution that takes the headache out of facility management.
                            </p>
                        </section>

                        <section id="future-trends" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">The Future: Digital Inventory & 3D Printing</h2>
                            <p>
                                The future of spare parts is digital. We are moving toward a models where parts are tracked via IoT and ordered automatically the moment a failure pattern is detected. This eliminates human error and ensures that the part is already in transit before your maintenance staff even realizes there is a problem. We are also exploring 3D printing for non-critical plastic components, allowing us to "print" a replacement part on-site for immediate temporary repair while the OEM metal part is in transit.
                            </p>
                            <p>
                                Digital twins and augmented reality are also changing how parts are identified and installed. A technician can point an AR headset at a machine and see a virtual "exploded view" of the components, along with their part numbers and installation videos. This tech ensures that the right part is ordered and installed correctly every single time. Sunshine Equipments is at the forefront of these innovations, redefining what "parts and service" means for the 21st-century laundry industry.
                            </p>
                        </section>

                        <section id="reviews" className="mb-20 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Industry Expert Reviews</h2>
                            <div className="grid gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;Sunshine&apos;s OEM parts supply is the backbone of our maintenance strategy. Their regional hub in Delhi has saved us on multiple occasions with same-day delivery of critical controller boards. The quality of genuine components is simply unmatched.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">RJ</span>
                                        General Manager, Radisson Group India
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;After trying generic belts for a month, we saw a massive drop in extraction efficiency and two snapped motor shafts. We returned to 100% Sunshine OEM and haven&apos;t had a single belt issue in over three years. Lesson learned.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">SK</span>
                                        Chief Engineer, Taj Resorts & Palaces
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;The traceability and certification provided with their genuine parts is vital for our hospitals health audit. We can prove the origin of every seal and valve in the building, which is non-negotiable for medical-grade sanitization.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">GM</span>
                                        General Manager, Apollo Healthcare Group
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;Their TCO analysis convinced us to stop buying cheap aftermarket parts. We&apos;ve saved nearly 40% on our annual maintenance labor because the genuine parts actually last as long as promised. ROI at its finest.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">FC</span>
                                        Financial Controller, Hilton Worldwide
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;Sunshine&apos;s critical spares kit is worth every paisa. We had a drain valve failure during a peak wedding weekend and had the machine back up in 20 minutes because we had the OEM part right on the shelf.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">EH</span>
                                        Executive Housekeeper, Marriott International
                                    </p>
                                </div>
                            </div>
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
                    </article>

                    <aside className="col-span-12 lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-brand-blue text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Package size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Order Genuine Parts</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Access our national inventory and get rapid fulfillment for any Sunshine Equipment model.
                                </p>
                                <button onClick={openContactModal} className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg">
                                    Browse Inventory <TrendingUp size={20} />
                                </button>
                            </div>

                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Support Channels</h3>
                                <nav className="space-y-4">
                                    <div className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600">Warranty Support</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Truck size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600">Expedited Shipping</span>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Live Parts Concierge</h4>
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
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <CTA />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />
        </main>
    );
}
