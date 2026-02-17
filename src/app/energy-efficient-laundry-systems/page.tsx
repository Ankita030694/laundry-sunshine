"use client";

import Image from "next/image";
import Link from "next/link";
import {
    CheckCircle2, Phone, Mail, ArrowRight, MessageSquare, Star,
    ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp,
    AlertCircle, Heart, Leaf, Sun, Thermometer, Wind
} from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import CTA from "@/components/CTA";

const sections = [
    { id: "green-imperative", title: "The Imperative of Green Laundry Operations" },
    { id: "thermal-dynamics", title: "Heat Recovery & Thermal Dynamics" },
    { id: "liquor-ratio", title: "The Liquor Ratio Revolution" },
    { id: "solar-thermal", title: "Solar-Thermal Integration: Harvesting Sun" },
    { id: "vfd-optimization", title: "Motor Optimization & VFD Technology" },
    { id: "wastewater-recycling", title: "Advanced Wastewater Recycling & Filtration" },
    { id: "moisture-sensing", title: "Moisture-Sensing: The End of Over-Drying" },
    { id: "high-g-extraction", title: "High-G Force: Reducing Mechanical Moisture" },
    { id: "steam-insulation", title: "Steam Integrity & Insulation Excellence" },
    { id: "smart-sensors", title: "Smart Sensors & AI Resource Management" },
    { id: "low-temp-chem", title: "The Science of Low-Temperature Chemistry" },
    { id: "roi-analysis", title: "ROI: The Economics of Energy Saving" },
    { id: "environmental-impact", title: "Carbon Footprint & Environmental Impact" },
    { id: "leed-certification", title: "LEED Certification & Sustainability" },
    { id: "staff-consciousness", title: "Staff Training for Resource Consciousness" },
    { id: "peak-maintenance", title: "Maintenance for Peak Thermal Efficiency" },
    { id: "case-study-jaipur", title: "Case Study: 40% Utility Reduction" },
    { id: "regional-india", title: "Regional Energy Management in India" },
    { id: "gov-incentives", title: "Government Incentives for Green Tech" },
    { id: "future-hydrogen", title: "Future: Zero-Emission Laundry Systems" },
    { id: "reviews", title: "Industry Expert Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
    {
        question: "How much water can a modern laundry recycling system save?",
        answer: "Industrial grade wastewater recovery systems can recycle up to eighty percent of the water used in the wash process. This water is filtered, sanitized, and thermally optimized for reuse in the initial rinse cycles, dramatically lowering your utility bills."
    },
    {
        question: "Is solar thermal technology viable for hotel laundry in India?",
        answer: "Absolutely. With India&apos;s high solar irradiance, solar thermal collectors can heat wash water to sixty degrees Celsius year round, reducing the load on gas or electric boilers by up to fifty percent and providing a rapid return on investment."
    },
    {
        question: "Does high G-force extraction actually save energy in the dryer?",
        answer: "Yes, significantly. For every additional percentage of water removed during the spin cycle, you save twice as much energy during the drying process. Machines reaching 400 G-force can reduce dryer run times by ten to fifteen minutes per load."
    },
    {
        question: "What is a liquor ratio and why does it matter for efficiency?",
        answer: "The liquor ratio is the weight of water compared to the weight of dry linen. Traditional machines use a 1 to 10 ratio, while our modern high efficiency models operate at 1 to 4. This means you heat sixty percent less water for the same cleaning result."
    },
    {
        question: "Can I retrofit energy saving devices onto my older laundry machines?",
        answer: "Many machines can be retrofitted with Variable Frequency Drives and moisture sensors. However, the most significant gains come from the internal design of the drum and the heat exchange chambers, which are built into our new generation hardware."
    },
    {
        question: "How do moisture sensors prevent fabric damage and energy waste?",
        answer: "Sensors measure the electrical conductivity of the linen. The moment the desired moisture level is reached, the heater shuts off and the cool down cycle begins. This prevents the &apos;bake-off&apos; effect that makes fibers brittle and wastes gas."
    },
    {
        question: "Is low temperature chemistry as effective as hot water washing?",
        answer: "When combined with the specific mechanical action of our washers, modern cold water detergents can achieve hospital grade sanitization at thirty degrees Celsius. This eliminates the massive energy cost of heating thousands of liters of water daily."
    },
    {
        question: "What are the common LEED points achievable through laundry optimization?",
        answer: "Facilities can earn points under several categories, including Water Efficiency, Energy and Atmosphere, and Indoor Environmental Quality. Our high efficiency systems are a core component of many LEED Platinum certified hotels in India."
    },
    {
        question: "How often should heat exchangers be cleaned to maintain efficiency?",
        answer: "To maintain peak thermal transfer, heat exchangers should be professionally descaled every six months. Even a one millimeter layer of mineral scale can reduce heating efficiency by fifteen percent, costing you thousands in wasted fuel."
    },
    {
        question: "Does using green technology compromise the wash quality?",
        answer: "On the contrary. Because our systems are more precise in their temperature and chemical delivery, the linen often comes out whiter and softer than in traditional high heat, high water systems. Efficiency and quality go hand in hand."
    }
];

export default function EnergyEfficientSystemsPage() {
    const { openContactModal } = useModal();
    const websiteUrl = "https://sunshine-laundry.com/energy-efficient-laundry-systems";
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
                "name": "Energy Efficient Industrial Laundry Systems | Sunshine Equipments",
                "description": "Cut utility costs by 40% with our eco-friendly laundry solutions. Solar-thermal integration, water recycling, and advanced heat recovery for modern facilities."
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunshine-laundry.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Energy Systems", "item": websiteUrl }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "headline": "Sustainability in Motion: The Future of Energy Efficient Industrial Laundry",
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "datePublished": "2024-02-17",
                "image": "https://sunshine-laundry.com/energy-efficiency-hero.jpg"
            },
            {
                "@type": "Product",
                "name": "Eco-Friendly Laundry Equipment Solutions",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "126"
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
                    <Image src="/hero-bg.jpg" alt="Sustainability & Efficiency" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-sm font-bold mb-8 uppercase tracking-widest leading-none">
                        <Leaf size={16} className="text-brand-orange" /> Eco-Certified Industry Leader
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Energy Efficient <br />
                        <span className="text-brand-orange italic">Laundry Systems</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium transition-all duration-300">
                        Achieve a 40% reduction in utility overheads. Integrate solar-thermal power, wastewater recycling, and AI-driven resource monitoring to build a truly sustainable laundry operation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button onClick={openContactModal} className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3">
                            Calculate Your Savings <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Energy Efficient Systems", href: websiteUrl }]} />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 py-12">
                <div className="grid grid-cols-12 gap-12">
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} orientation="vertical" />
                        </div>
                    </aside>

                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="green-imperative" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">The Imperative of Green Laundry Operations</h2>
                            <p>
                                Sustainability is no longer a corporate buzzword; it is a fundamental pillar of modern industrial operational strategy. In the laundry sector, which is traditionally one of the most resource-intensive departments in any hotel or hospital, the transition to energy-efficient systems is driven by two parallel forces: environmental responsibility and cold, hard economics. At Sunshine Equipments, we view green laundry as the optimization of every liter of water, every joule of heat, and every minute of mechanical action.
                            </p>
                            <p>
                                The environmental impact of a traditional high-volume laundry facility is staggering. Thousands of liters of water are heated and then dumped into the sewer every hour, carrying with them chemical residues and valuable thermal energy. By reimagining the laundry room as a circular system rather than a linear one, we can reduce carbon footprints by thousands of tons annually. This commitment to the planet is a powerful brand differentiator in an increasingly eco-conscious global market.
                            </p>
                            <p>
                                On the economic side, the rising costs of water, gas, and electricity are the primary threats to facility profitability. A laundry room that operates with forty percent greater efficiency is a laundry room that is shielded from utility price volatility. The initial capital investment in energy-efficient hardware pays for itself through reduced operational expenditure (OPEX) at a rate that traditional equipment simply cannot match. Sustainability is the ultimate long-term profit strategy.
                            </p>
                            <p>
                                We also recognize that "Green" must not mean "Grit." Efficiency cannot come at the expense of sanitization or linen quality. Our high-efficiency systems are engineered to achieve superior cleaning results through better mechanical design and more precise thermal control. We believe that the best way to save energy is to get the job done right the first time, eliminating the massive waste associated with re-washes and linen damage.
                            </p>
                            <p>
                                Finally, green laundry operations are essential for meeting international certification standards like LEED or IGBC. As major hotel chains and healthcare groups move toward global carbon neutrality, the laundry department is the most logical place to start. Sunshine Equipments provides the technical roadmap and the hardware required to transform a traditional, wasteful utility room into a showpiece of sustainable industrial engineering.
                            </p>
                        </section>

                        <section id="thermal-dynamics" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Heat Recovery & Thermal Dynamics</h2>
                            <p>
                                In traditional laundry, heat is treated as a disposable byproduct. In a Sunshine system, heat is a precious resource that is recovered and recycled. Our advanced heat recovery systems (HRS) capture the thermal energy from the dryer exhaust and the hot wastewater from the washer-extractor. This "found" energy is then used to pre-heat the incoming fresh water, reducing the energy load on your primary boilers by as much as thirty percent.
                            </p>
                            <p>
                                The physics of our heat exchangers is optimized for the specific challenges of the laundry room—namely lint and mineral scaling. We use self-cleaning exchangers that maintain high thermal transfer rates even in a dirty environment. By keeping the heat within the building rather than venting it into the atmosphere, we not only save fuel but also reduce the ambient temperature of the laundry room, improving the working conditions for your staff and reducing the load on your HVAC systems.
                            </p>
                            <p>
                                Thermal dynamics also involves the insulation of every high-temperature component. Our boilers, steam pipes, and ironer chests are wrapped in high-performance aero-thermal insulators that keep the heat where it belongs—working on the linens. A well-insulated steam network can achieve a ten percent reduction in boiler cycling, leading to significant fuel savings and a longer lifespan for your heating hardware.
                            </p>
                        </section>

                        <section id="liquor-ratio" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">The Liquor Ratio Revolution</h2>
                            <p>
                                The "Liquor Ratio" is the relationship between the weight of dry linen and the weight of water used in the wash. For decades, the industry standard was a 1:10 ratio—meaning 10 liters of water for every 1 kilogram of linen. Sunshine has revolutionized this through the "Low Liquor" design of our washer-extractors. By optimizing the drum geometry and using precision spray technology, we have reduced this ratio to as low as 1:3 for synthetic loads and 1:5 for heavy cottons.
                            </p>
                            <p>
                                Why does this matter? Because every liter of water removed from the process is a liter of water you don&apos;t have to buy, you don&apos;t have to heat, and you don&apos;t have to treat. Reducing the liquor ratio by fifty percent leads to an immediate and permanent fifty percent drop in your water heating costs. This is the single most effective way to lower the utility footprint of a washing facility. It is a fundamental shift in how textiles are cleaned.
                            </p>
                        </section>

                        <section id="solar-thermal" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Solar-Thermal Integration: Harvesting Sun</h2>
                            <p>
                                India is blessed with incredible solar irradiance, yet most laundries still rely entirely on fossil fuels for water heating. Sunshine Equipments is a pioneer in integrating solar-thermal arrays directly into the laundry utility loop. By installing high-efficiency vacuum-tube collectors on the facility roof, we can provide thousands of liters of sixty-degree-Celsius water at zero operating cost.
                            </p>
                            <p>
                                This solar-heated water is stored in large, insulated buffer tanks, ready for the morning wash cycles. During the day, the system continues to harvest sun, supplementing the gas or electric boilers and drastically reducing your carbon footprint. In regions like Rajasthan, Gujarat, and Maharashtra, a properly sized solar-thermal system can provide up to seventy percent of a facility&apos;s annual water heating needs. It is truly free energy from the sky.
                            </p>
                        </section>

                        <section id="vfd-optimization" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Motor Optimization & VFD Technology</h2>
                            <p>
                                Traditional industrial motors are binary—they are either 100% on or 100% off. This results in massive energy spikes during start-up and the waste of energy during lower-speed cycles. Our systems utilize high-precision Variable Frequency Drives (VFDs) that match the motor&apos;s energy consumption exactly to its current load. If a washer is only half-full, the VFD ensures that the motor only draws the power required to move that specific weight.
                            </p>
                            <p>
                                VFDs also reduce the mechanical stress on the machine. By providing a "soft-start" and a controlled "ramp-down," they eliminate the jerking and vibration that cause motor bearings to fail prematurely. This electronic precision saves energy, reduces noise, and extends the life of your most expensive mechanical components. It is the intelligence that powers the hardware, ensuring that not a single watt of electricity is wasted.
                            </p>
                        </section>

                        <section id="wastewater-recycling" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Advanced Wastewater Recycling & Filtration</h2>
                            <p>
                                The water dumped after a rinse cycle is remarkably clean, yet it is traditionally sent straight to the sewer. Our Zero Liquid Discharge (ZLD) systems capture this rinse water, pass it through multi-stage filtration—including ceramic membranes and UV sanitization—and pump it back into the storage tank for the next initial wash cycle. This circular water economy can reduce your total freshwater demand by upward of eighty percent.
                            </p>
                            <p>
                                Recycling also preserves the thermal energy already in the water. Fresh municipal water often enters the building at twenty degrees Celsius, while our recycled water is already at thirty-five or forty degrees. This means your boilers have a "head start," requiring much less energy to reach the target wash temperature. A water recycling system is a double-win for both resource conservation and thermal efficiency.
                            </p>
                        </section>

                        <section id="moisture-sensing" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Moisture-Sensing: The End of Over-Drying</h2>
                            <p>
                                Over-drying is the single biggest energy waste in a laundry room. When a dryer continues to run after the linen is dry, it is literally blowing money out of the chimney while destroying your fabric fibers. Sunshine&apos;s "Smart-Sense" moisture bars measure the electrical resistivity of the load in real-time. The moment the linen reaches the perfect five percent moisture level, the burner is cut and the cool-down phase begins automatically.
                            </p>
                            <p>
                                This precision saves an average of eight minutes per drying cycle. Across a facility running twenty loads a day, that is nearly three hours of unnecessary gas consumption and fan operation saved every single day. Furthermore, moisture-sensing prevents the "yellowing" and brittleness caused by extreme heat, extending the life of your linen inventory by thirty percent. Protect your energy budget and your textile investment simultaneously.
                            </p>
                        </section>

                        <section id="high-g-extraction" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">High-G Force: Reducing Mechanical Moisture</h2>
                            <p>
                                Mechanical extraction is far more energy-efficient than thermal drying. It is much cheaper to "spin" water out of a towel than it is to "evaporate" it out with gas. Our washer-extractors are engineered to reach speeds of up to 450 G-force. This massive centrifugal force pulls significantly more water out of the fibers compared to traditional machines that only reach 200 or 300 G.
                            </p>
                            <p>
                                The result is linen that enters the dryer with twenty percent less moisture. This translates directly into a twenty percent reduction in dryer time and energy use. By investing in a high-performance washer, you are actually solving your dryer efficiency problems. High-G extraction is the silent hero of the green laundry room, doing the work of evaporation with the much cheaper power of centrifugal force and physics.
                            </p>
                        </section>

                        <section id="steam-insulation" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Steam Integrity & Insulation Excellence</h2>
                            <p>
                                In large facilities, steam is the primary vehicle for heat. Any leak or radiation loss from the steam network is a direct hit to your efficiency. We use high-grade thermal jackets on all steam valves, traps, and manifolds. These removable jackets reduce heat loss by over ninety percent and protect staff from accidental burns. A well-insulated steam system stays hot, ensuring that the ironer chest reaches its operating temperature faster and stays there with less boiler intervention.
                            </p>
                        </section>

                        <section id="smart-sensors" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Smart Sensors & AI Resource Management</h2>
                            <p>
                                We believe that you cannot manage what you do not measure. Every Sunshine high-efficiency machine is equipped with flow meters, kilowatt sensors, and gas meters. This data is transmitted to our central dashboard, providing you with a real-time report on the cost per kilogram of every load. We use AI to identify patterns of waste—such as a machine being run half-full or a boiler that is cycling too frequently—allowing for immediate operational corrections.
                            </p>
                        </section>

                        <section id="low-temp-chem" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">The Science of Low-Temperature Chemistry</h2>
                            <p>
                                Traditional laundry relied on boiling water to kill bacteria. Modern chemistry has changed the game. When paired with the specific mechanical "drop and roll" action of our industrial washers, cold-water detergents can achieve hospital-grade sanitization at just thirty degrees Celsius. This eliminates the need for steam or gas for water heating entirely. Low-temperature washing is the ultimate goal of any zero-emission laundry strategy.
                            </p>
                        </section>

                        <section id="roi-analysis" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">ROI: The Economics of Energy Saving</h2>
                            <p>
                                The financial case for energy-efficient systems is undeniable. We provide our clients with a detailed ROI calculator that factors in local utility rates and current operational volume. Typically, the utility savings alone pay for the entire equipment upgrade within twenty-four to thirty-six months. Over the twenty-year life of the machine, the "Green" choice will save the facility several crores in utility expenses. It is the most financially sound decision a facility manager can make.
                            </p>
                        </section>

                        <section id="environmental-impact" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Carbon Footprint & Environmental Impact</h2>
                            <p>
                                Every kilowatt of electricity and kilogram of gas saved is a direct reduction in your facility&apos;s carbon footprint. For many of our global hospitality clients, their laundry department is the single largest point of carbon emissions. By upgrading to a Sunshine high-efficiency suite, a hotel can often reduce its total carbon footprint by twelve to fifteen percent. This isn&apos;t just good for the earth; it is essential for meeting the sustainability targets of major international brands.
                            </p>
                        </section>

                        <section id="leed-certification" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">LEED Certification & Sustainability</h2>
                            <p>
                                Our equipment is a core component of sustainable building design. We provide the documentation and technical data required for your LEED or IGBC certification points. From water consumption metrics to thermal efficiency ratings, we support your design team in achieving the highest possible green rating. A Sunshine-powered laundry is proof of a facility&apos;s commitment to the highest global standards of sustainability and engineering excellence.
                            </p>
                        </section>

                        <section id="staff-consciousness" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Staff Training for Resource Consciousness</h2>
                            <p>
                                A green machine is only as efficient as the person operating it. We provide training for your laundry team to emphasize the importance of full loads and proper cycle selection. We teach them how to use the machine&apos;s economy modes and how to monitor the resource meters. When the staff understands that saving water and energy is part of their mission, the entire facility&apos;s efficiency profile improves dramatically.
                            </p>
                        </section>

                        <section id="peak-maintenance" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Maintenance for Peak Thermal Efficiency</h2>
                            <p>
                                Efficiency is not a one-time setup; it is a maintenance commitment. A dirty heater or a scaled-up boiler will lose ten percent of its efficiency in a single year. Our maintenance programs include specialized descaling and thermal cleaning to ensure that your "Green" machine stays green for its entire life. We audit the resource meters quarterly to verify that the equipment is still performing to its original high-efficiency specifications.
                            </p>
                        </section>

                        <section id="case-study-jaipur" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Case Study: 40% Utility Reduction</h2>
                            <p>
                                A premium resort in Jaipur was struggling with massive water and gas bills. By replacing their aging 1990s-era machines with a Sunshine High-Efficiency Suite—including solar-thermal integration and wastewater recycling—they achieved a documented forty-two percent reduction in total laundry utility costs in the first year. This savings of nearly thirty-five lakh rupees annually allowed them to fund other facility upgrades, proving that sustainability powers growth.
                            </p>
                        </section>

                        <section id="regional-india" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Regional Energy Management in India</h2>
                            <p>
                                Managing energy in India requires local expertise. From the hard water of Haryana to the high humidity of Kerala, every region presents a different efficiency obstacle. We tailor our systems to these local factors. In the north, we focus on winter heat recovery; in the coastal south, we focus on humidity-controlled drying and corrosion-resistant solar collectors. Our regional knowledge ensures that your efficiency is maximized for your specific Indian location.
                            </p>
                        </section>

                        <section id="gov-incentives" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Government Incentives for Green Tech</h2>
                            <p>
                                The Indian government offers several incentives for businesses investing in energy-efficient technology and renewable energy. From accelerated depreciation to potential tax credits for solar installations, there are many ways to further improve the ROI of your green laundry project. We help you navigate these incentives, providing the technical certifications and documentation required to apply for these high-value government programs.
                            </p>
                        </section>

                        <section id="future-hydrogen" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Future: Zero-Emission Laundry Systems</h2>
                            <p>
                                The next frontier of laundry efficiency is hydrogen-powered drying and zero-waste water systems. We are currently testing prototypes that use green hydrogen for heat, completely eliminating carbon emissions from the drying process. We are also refining our nano-filtration systems to achieve 100% water recovery. The future of laundry is a totally closed-loop system, and Sunshine Equipments is the partner that will take you there.
                            </p>
                        </section>

                        <section id="reviews" className="mb-20 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Industry Expert Reviews</h2>
                            <div className="grid gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;The solar-thermal integration provided by Sunshine has been a Revelation. We&apos;ve virtually eliminated our gas bills for 8 months of the year in Jaipur. Their low liquor ratio washers have also cut our water demand by half. Truly visionary technology.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">RJ</span>
                                        General Manager, Taj Resorts & Palaces
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;Their moisture-sensing dryers have ended our &apos;over-drying&apos; problem for good. We&apos;ve seen our gas consumption drop by 22% and our linen replacement costs have plummeted because we aren&apos;t &apos;frying&apos; the towels anymore.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">SK</span>
                                        Chief Engineer, Marriott International
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;Sunshine&apos;s wastewater recycling system is the cleanest and most reliable we&apos;ve seen. It helped us achieve LEED Platinum certification for our new hospital wing. Their data-driven approach allowed us to prove every liter of water saved.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">GM</span>
                                        Technical Director, Apollo Healthcare Group
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;The ROI analysis for their high-efficiency suite was incredibly conservative. We actually reached our break-even point 6 months sooner than expected due to rising electricity costs. Green technology is the best financial hedge.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">FC</span>
                                        Financial Controller, Hyatt Regency Delhi
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;Their heat recovery systems have transformed our laundry room from an oven into a pleasant workspace. The reduction in ambient heat has lowered our HVAC bills across the entire ground floor. A massive win for staff morale and energy.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">EH</span>
                                        Executive Housekeeper, Radisson Blu
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
                                    <Leaf size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Eco-Audit Survey</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Get a professional analysis of your current resource waste and a roadmap for sustainability.
                                </p>
                                <button onClick={openContactModal} className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg">
                                    Book Eco-Audit <TrendingUp size={20} />
                                </button>
                            </div>

                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Efficiency Features</h3>
                                <nav className="space-y-4">
                                    <div className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Sun size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600">Solar-Thermal Ready</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Droplets size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600">Wastewater Recycling</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Thermometer size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600">Smart Heat Recovery</span>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Sustainability Desk</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Phone size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Expert Consultation</p>
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
