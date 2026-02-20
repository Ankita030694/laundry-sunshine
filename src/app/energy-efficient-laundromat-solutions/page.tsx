"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, Star, ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp, Sun, Leaf, Wind, Thermometer, Battery, Gauge, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "Sustainable Laundry Philosophy" },
    { id: "heat-recovery", title: "Advanced Heat Recovery Logic" },
    { id: "high-g-extraction", title: "High G-Force Extraction Science" },
    { id: "inverter-motors", title: "Inverter-Driven Motor Efficiency" },
    { id: "water-recycling", title: "Closed-Loop Water Recycling" },
    { id: "solar-integration", title: "Solar Thermal Energy Systems" },
    { id: "insulation-tech", title: "Thermal Insulation Engineering" },
    { id: "low-water-wash", title: "Low-Water Wash Chemistry" },
    { id: "intelligent-programming", title: "Eco-Centric Machine Programming" },
    { id: "gas-optimization", title: "Burner & Gas Flow Optimization" },
    { id: "lighting-hvac", title: "Facility Lighting & HVAC Efficiency" },
    { id: "carbon-footprint", title: "Calculating Your Carbon ROI" },
    { id: "government-incentives", title: "Energy Credits & Incentives" },
    { id: "lifecycle-assessments", title: "Long-Term Lifecycle Assessment" },
    { id: "smart-metering", title: "Real-Time Utility Dashboarding" },
    { id: "vfd-tuning", title: "Fine-Tuning VFD Parameters" },
    { id: "ozone-technology", title: "Ozone Cold-Water Sanitization" },
    { id: "eco-marketing", title: "Marketing Your Green Facility" },
    { id: "success-studies", title: "Sustainability Success Studies" },
    { id: "faqs", title: "Energy Efficiency FAQ Section" },
];

const faqs = [
    {
        question: "How much can I save by switching to energy-efficient laundry equipment?",
        answer: "On average, our clients see a reduction of 30 to 50 percent in their total utility spend. This includes significant savings on water, electricity, and gas, which directly improves your monthly profit margins."
    },
    {
        question: "What is 'High G-Force' extraction and why does it matter?",
        answer: "G-Force refers to the centrifugal power of the washer's spin cycle. High G-Force (400G and above) removes significantly more water from the fabrics, which cuts the subsequent drying time by up to 40 percent."
    },
    {
        question: "Does cold-water washing really work for industrial laundry?",
        answer: "Yes, when combined with ozone technology or specialized low-temperature chemicals, cold-water washing achieves the same sanitization levels as hot water while virtually eliminating the cost of water heating."
    },
    {
        question: "Is water recycling worth the investment for a mid-sized laundromat?",
        answer: "Absolutely. In regions with high water costs or scarcity, a recycling system can reduce fresh water consumption by up to 70 percent, paying for itself in as little as 18 to 24 months."
    },
    {
        question: "How does solar thermal energy work in a laundromat?",
        answer: "Solar thermal panels pre-heat the water entering your facility. This means your boilers or water heaters have to do much less work to reach the target temperature, saving a massive amount of gas or electricity."
    },
    {
        question: "Can I upgrade my old machines to be more energy-efficient?",
        answer: "While new machines are the most efficient, we can retro-fit older units with VFDs (Variable Frequency Drives), better insulation, and specialized moisture sensors to improve their performance significantly."
    },
    {
        question: "What are 'Inverter-driven' motors?",
        answer: "These motors use digital controllers to manage their speed and torque precisely. They avoid the huge 'surge' of power traditional motors use during start-up and run much more efficiently throughout the cycle."
    },
    {
        question: "Do you help with government energy efficiency certificates?",
        answer: "Yes, we providing all the technical documentation and performance data required to apply for green energy credits and government incentives available in India."
    },
    {
        question: "How does ozone technology benefit the environment?",
        answer: "Ozone reduces the need for hot water and harsh chlorine bleaches. It breaks down into pure oxygen, leaving no chemical residue in the wastewater and significantly reducing the facility's chemical footprint."
    },
    {
        question: "Why should I choose Sunshine for my green laundry transformation?",
        answer: "We are pioneers in sustainable laundry in India. We don't just sell machines; we provide a complete engineering solution that balances environmental responsibility with maximum financial profit."
    }
];

const reviews = [
    {
        name: "Vikram Sethi",
        role: "Owner, EcoSpin Laundry",
        body: "Sunshine's energy audit was a revelation. We implemented their heat recovery and high G-force solutions, and our utility bills have dropped by 42 percent. The RO was incredible.",
        rating: 5
    },
    {
        name: "Ananya Desai",
        role: "Sustainability Director, GreenHospitality",
        body: "The ozone cold-water system they installed is brilliant. Not only are we saving on gas, but our linens actually last longer because they aren't subjected to high heat every day.",
        rating: 5
    },
    {
        name: "Rajesh Khanna",
        role: "Facility Manager, Urban Suites",
        body: "Technical expertise in water recycling is unmatched. Their system is compact, reliable, and has halved our fresh water footprint. A must-have for any modern facility.",
        rating: 5
    },
    {
        name: "Saurabh Mehra",
        role: "Property Investor",
        body: "I built my new laundromat around Sunshine's 'Eco-Logic' blueprint. It is the most profitable unit in my portfolio because the operational costs are so low. Highly recommended.",
        rating: 5
    },
    {
        name: "Pooja Hegde",
        role: "Owner, Sparkle Green Laundry",
        body: "The solar thermal integration they designed works flawlessly. Even on overcast days, we are getting pre-heated water that saves us a lot on our boiler costs. Great engineering.",
        rating: 5
    },
    {
        name: "Amitabh Shah",
        role: "Operations Consultant",
        body: "Sunshine understands that 'Green' must also mean 'Profitable.' Their ROI-focused approach to energy efficiency makes them the top choice for industrial laundry in India.",
        rating: 5
    },
    {
        name: "Karan Johar",
        role: "Facility Head, Elite Wash",
        body: "The VFD tuning and motor optimization they performed on our old line has extended its life and reduced our noise pollution. Excellent technical service.",
        rating: 5
    }
];

export default function EnergyEfficientPage() {
    const router = useRouter();
    const websiteUrl = "https://sunshine-laundry.com/energy-efficient-laundromat-solutions";
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
                    "url": "https://sunshine-laundry.com/sunshine_logo.svg"
                }
            },
            {
                "@type": "WebPage",
                "@id": websiteUrl,
                "url": websiteUrl,
                "name": "Energy-Efficient Laundromat Solutions | Sustainable Laundry Engineering",
                "description": "Premium eco-friendly laundry solutions. Experts in heat recovery, water recycling, and high G-force extraction to reduce your utility bills by up to 50 percent.",
                "breadcrumb": { "@id": websiteUrl + "#breadcrumb" }
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunshine-laundry.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Energy Efficient Solutions", "item": websiteUrl }
                ]
            },
            {
                "@type": "Product",
                "@id": websiteUrl + "#product",
                "name": "Eco-Logic Sustainable Laundry Systems",
                "description": "High-efficiency industrial laundry equipment and infrastructure. Includes solar thermal, ozone washing, and advanced heat recovery systems.",
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
        <main className="min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/hero-bg.jpg" alt="Energy Efficient Solutions" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight px-4">
                        Sustainable Laundry Logic <br className="hidden md:block" />
                        <span className="text-brand-orange italic">High Performance, Zero Waste</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium">
                        Slash your utility bills by 50 percent with our elite energy-efficient infrastructure. We combine industrial engineering with ecological responsibility for maximum profit.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-brand-orange text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            Request an Energy Audit <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Energy Efficient Solutions", href: "/energy-efficient-laundromat-solutions" }]} />
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
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="intro" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Sustainable Laundry Revolution: Profitability Through Efficiency</h2>
                            <p>
                                In the traditional laundry business, utility costs are viewed as a fixed, unavoidable burden. At Sunshine Equipments, we challenge that fundamental assumption. We believe that waste is simply a failure of engineering. Sustainable laundry is not just about being "environmentally friendly"; it is about achieving operational excellence that results in significantly higher profit margins. By viewing your facility through the lens of energy physics, we can unlock savings that most operators never even consider.
                            </p>
                            <p>
                                Our sustainability philosophy is built on the principle of "Cascading Efficiency." Every watt of energy and every liter of water used in your facility should be utilized to its absolute maximum potential. This means recovering heat from wastewater to pre-heat fresh water; it means using high-speed centrifugal force to minimize drying energy; and it means using digital motor controllers to eliminate power surges. We provide a complete "Eco-Logic" blueprint that transforms your facility from a high-cost overhead into a lean, profitable machine.
                            </p>
                            <p>
                                The economics of green laundry are undeniable. With energy prices globally on a long-term upward trajectory, the businesses that survive and thrive will be those that use the fewest resources to produce the best results. A 40 percent reduction in utility costs is equivalent to a 15 percent increase in your top-line revenue, but with zero additional marketing spend or labor cost. It is the purest form of profit. We help you achieve this through a combination of international equipment standards and site-specific engineering modifications.
                            </p>
                            <p>
                                Furthermore, being a "Green" laundromat is a powerful marketing asset. Modern consumers—especially younger, affluent urban demographics—prefer to spend their money with businesses that align with their values. By positioning your facility as a sustainability leader, you attract a higher-quality customer base that is often willing to pay a premium for eco-friendly services. Efficiency, therefore, drive both your "cost-out" and your "revenue-in" strategies.
                            </p>
                            <p>
                                This comprehensive guide explores the advanced technologies and engineering principles that define a truly energy-efficient laundromat. From the science of heat recovery and ozone washing to the logistics of solar thermal integration and real-time utility dashboarding, we provide the definitive roadmap for your sustainable transformation. Whether you are building from scratch or retrofitting an existing site, these insights will help you lead the industry into a cleaner, more profitable future.
                            </p>
                        </section>

                        <section id="heat-recovery" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Advanced Heat Recovery Logic: Capturing the Waste</h2>
                            <p>
                                One of the most significant sources of waste in a typical laundry is the thermal energy literally flushed down the drain. Every time a hot wash cycle finishes, hundreds of liters of warm water are discarded. At Sunshine, we implement Heat Recovery Systems (HRS) that capture this energy before it leaves the building. Using industrial-grade plate heat exchangers, we transfer the heat from the wastewater to the incoming fresh water supply. This can pre-heat your fresh water from 20 degrees to as high as 45 degrees Celsius before it even reaches your water heater.
                            </p>
                            <p>
                                The beauty of heat recovery is that it is a "passive" efficiency. Once installed, it requires minimal energy to operate and provides constant savings every single day. For a facility that operates multi-shift hot water cycles—such as those in hospitals or high-end hotels—an HRS can pay for itself within 12 months. It also reduces the stress on your boiler or water heater, extending its operational life and reducing its maintenance requirements.
                            </p>
                            <p>
                                We also look at heat recovery in the drying process. Modern dryers can be equipped with systems that recirculate the warm, dry air back into the drum, rather than venting all of it to the atmosphere. This "closed-loop" logic significantly reduces the amount of gas or electricity required to maintain the drying temperature. By managing your facility's "thermal balance" with scientific precision, we ensure that every calorie of heat you pay for is used to dry clothes, not to heat the neighborhood.
                            </p>
                        </section>

                        <section id="high-g-extraction" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">High G-Force Extraction Science</h2>
                            <p>
                                Drying clothes with heat is an energy-intensive process. Removing moisture with mechanical centrifugal force is much more efficient. This is why "G-Force" is the most important metric in industrial washing machines. A standard washer might extract at 100G or 200G. At Sunshine, we prioritize "High Extraction" units that reach 400G or 450G. The difference is staggering. A 450G spin cycle removes significantly more moisture from the fabric, feeling almost dry to the touch even before it reaches the dryer.
                            </p>
                            <p>
                                By reducing the "Retained Moisture Content" (RMC) in the fabrics, we can cut drying times by as much as 40 percent. This has a massive impact on your utility bill, but it also has a significant impact on your capacity. If your dryers finish 15 minutes faster, you can process more loads per day with the same number of machines. High G-Force extraction is therefore a "dual-benefit" technology—it reduces your costs while increasing your revenue potential.
                            </p>
                        </section>

                        <section id="inverter-motors" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Inverter-Driven Motor Efficiency</h2>
                            <p>
                                Traditional industrial motors are binary—they are either 100 percent "on" or 100 percent "off." This leads to massive power surges during start-up (up to six times the normal running current) and significant energy waste during the cycle. Modern energy-efficient machines use Inverter-driven motors, managed by Frequency Inverters (VFDs). These controllers allow the motor to speed up and slow down gradually, providing "soft starts" and "soft stops" that eliminate power surges entirely.
                            </p>
                            <p>
                                Beyond the start-up, a VFD allows the machine to use exactly the right amount of power for the specific load. A 5kg load in a 10kg machine will use significantly less electricity because the motor is not running at full capacity unnecessarily. We also fine-tune these VFD parameters during our technical audits to ensure the motor is always operating at its most efficient torque-to-speed ratio. This technical precision reduces your electrical bill by up to 20 percent and protects your motors from heat stress.
                            </p>
                        </section>

                        <section id="water-recycling" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Closed-Loop Water Recycling</h2>
                            <p>
                                In many parts of India, water is a scarce and expensive resource. A professional laundromat can consume thousands of liters a day. Water recycling is therefore a critical pillar of sustainable laundry. Our systems focus on "Secondary Rinse Recovery." The water used during the final rinse of a cycle is often extremely clean—it has very little detergent and almost no soil. We capture this water, filter it, and use it as the "pre-wash" water for the next load.
                            </p>
                            <p>
                                This "Cascading Water" logic can reduce your fresh water consumption by up to 60 percent. It also reduces the volume of wastewater your facility discharges, which can lower your sewerage fees and help you meet environmental regulations. Our recycling units are compact and industrial-grade, featuring multi-stage filtration and UV sterilization to ensure the recycled water is safe and effective for laundry. It is a win for your bank account and a win for the local environment.
                            </p>
                        </section>

                        <section id="solar-integration" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Solar Thermal Energy Systems</h2>
                            <p>
                                India has an abundance of solar radiation, and hot water is one of the best ways to "store" that energy. We integrate industrial-scale solar thermal panels into your facility's hot water infrastructure. These panels can heat water to 60-70 degrees Celsius on a sunny day, providing essentially "free" hot water for your washers. This virtually eliminates the need for gas or electrical water heating during daylight hours.
                            </p>
                            <p>
                                We design these systems with smart-balancing valves. If the solar water is not quite hot enough, the boiler will provide just the small "top-up" of heat required. If the solar water is at target temperature, the boiler remains idle. This "Hybrid Heat" approach provides the perfect balance of total reliability and maximum efficiency. We provide the full engineering design and installation support for these systems, ensuring they are sized correctly for your facility's throughput.
                            </p>
                        </section>

                        <section id="insulation-tech" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Thermal Insulation Engineering</h2>
                            <p>
                                Any piece of equipment that handles heat—washers, dryers, boilers, and pipes—is a potential source of "Radiant Loss." If the exterior of your dryer is hot to the touch, you are paying to heat the air in the room, not the clothes in the drum. We implement high-performance thermal insulation for all hot surfaces in your facility. Our dryers are built with double-walled, insulated drums that keep the heat exactly where it belongs.
                            </p>
                            <p>
                                We also provide specialized "insulation jackets" for valves and boiler fittings, which are often left exposed. By reducing these radiant losses, we can improve your facility's thermal efficiency by another 5-10 percent. It also makes the laundry room itself much more comfortable for your staff and customers, reducing the energy needed for HVAC and ventilation. Insulation is the simplest, most cost-effective way to improve your energy logic.
                            </p>
                        </section>

                        <section id="low-water-wash" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Low-Water Wash Chemistry</h2>
                            <p>
                                Traditional laundry relies on massive amounts of water to provide the mechanical "sloshing" action required for cleaning. Modern energy-efficient washers use a "low-water" logic that relies on more precise mechanical action and advanced chemicals. By reducing the water level in the drum, we also reduce the amount of energy needed to heat that water and the amount of chemistry needed to treat it.
                            </p>
                            <p>
                                This requires a sophisticated integration of machine programming and chemical dosing. We work with specialized providers to develop "Eco-Recipes" for your facility. These recipes achieve a perfect clean using up to 40 percent less water than traditional methods. We also implement "Cold-Start" chemistry that achieves sanitization at ambient temperatures, further reducing your energy demand. It is a scientific approach to clean.
                            </p>
                        </section>

                        <section id="intelligent-programming" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Eco-Centric Machine Programming</h2>
                            <p>
                                The software that runs your machines is as important as the hardware. We custom-program your equipment with "Eco-Cycles" that are optimized for your specific textiles and soil levels. Most machines come with generic "factory settings" that are designed for a "worst-case" soil level, which means they are over-washing 90 percent of the time. Our technicians perform on-site testing to find the minimum effective wash time, temperature, and water level for your specific needs.
                            </p>
                            <p>
                                We also implement "automatic half-load" logic. Using internal weight sensors, the machine can detect a partial load and automatically adjust the water and chemical levels to match. This prevents the massive energy waste that occurs when customers or staff run small loads in high-capacity machines. Intelligent programming ensure that you are never using more resources than absolutely necessary.
                            </p>
                        </section>

                        <section id="gas-optimization" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Burner & Gas Flow Optimization</h2>
                            <p>
                                For gas-fired dryers and boilers, the efficiency of the burner is the most critical factor. A burner that is "sooting" or has an incorrect air-to-gas ratio is essentially wasting money and creating a fire hazard. We perform regular burner calibrations using industrial flue-gas analyzers. We measure the CO2 and O2 levels in the exhaust to ensure the combustion is as complete as possible.
                            </p>
                            <p>
                                We also optimize the gas flow patterns within the burner assembly. By ensuring that the flame is perfectly directed and that the air intake is not restricted, we maximize the heat transfer to the drum or the water. We often find that a simple burner tuning can reduce gas consumption by 15 percent. It is a technical service that pays for itself in the first month.
                            </p>
                        </section>

                        <section id="lighting-hvac" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Facility Lighting & HVAC Efficiency</h2>
                            <p>
                                While the laundry machines are the main consumers, the facility's lighting and HVAC systems cannot be ignored. A laundry room is naturally hot and humid. Instead of fighting this with massive air conditioning units, we use high-efficiency "Heat Recovery Ventilation" (HRV) systems. These units pull out the hot, humid air and use it to pre-heat the incoming fresh air, maintaining a comfortable temperature without the astronomical electrical cost of AC.
                            </p>
                            <p>
                                We also recommend and install high-lumen LED lighting throughout the facility. LEDs use 80 percent less electricity than traditional fluorescents and have a much longer life. When combined with occupancy sensors in storage areas and staff rooms, your lighting bill can be reduced by over 90 percent. We believe in a holistic strategy where every detail is optimized for efficiency.
                            </p>
                        </section>

                        <section id="carbon-footprint" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Calculating Your Carbon ROI</h2>
                            <p>
                                Profit is the primary driver, but the environmental impact is the lasting legacy. We provide our clients with a "Sustainability Dashboard" that translates their utility savings into tangible environmental metrics. We show you exactly how many tons of CO2 you have prevented from entering the atmosphere and how many millions of liters of water you have saved. This data is invaluable for your corporate social responsibility (CSR) reporting and for marketing your facility to the public.
                            </p>
                            <p>
                                We also help you calculate the "Carbon ROI" of your investments. This metric combines the financial payback with the environmental benefit, providing a more modern and comprehensive view of your business's performance. In a world moving towards carbon pricing and stricter environmental transparency, this data is your most powerful strategic tool.
                            </p>
                        </section>

                        <section id="government-incentives" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Energy Credits & Incentives</h2>
                            <p>
                                The Indian government offers various incentives for businesses that invest in energy-efficient technology and renewable energy. These include accelerated depreciation benefits, tax credits, and even direct subsidies for solar thermal and water recycling systems. However, navigating the documentation required for these benefits can be complex.
                            </p>
                            <p>
                                Our technical support team assists you throughout the process. We provide the certified energy performance data, the engineering blueprints, and the manufacturer's certifications required for your applications. We help you maximize the "hidden" financial benefits of being green, further improving your project's ROI.
                            </p>
                        </section>

                        <section id="lifecycle-assessments" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Long-Term Lifecycle Assessment</h2>
                            <p>
                                When choosing equipment, the "sticker price" is the least important number. The most important number is the Total Cost of Ownership (TCO) over the 15-20 year life of the machine. An energy-efficient machine might cost 2,000 dollars more up-front, but if it saves 500 dollars a year in utilities, it is the much cheaper option over its life.
                            </p>
                            <p>
                                We provide a full TCO analysis for every proposal we make. We show you the projected utility spend, the expected maintenance costs, and the residual value of the machine at the end of its life. This data-driven approach allowed you to make capital investment decisions with total confidence, knowing that you are choosing the most profitable path for your business.
                            </p>
                        </section>

                        <section id="smart-metering" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Real-Time Utility Dashboarding</h2>
                            <p>
                                You cannot manage what you cannot measure. Most laundromat owners only know their utility costs when the bill arrives at the end of the month. By then, it is too late to change anything. We provide real-time smart metering for your water, gas, and electricity. This data is fed into a live dashboard where you can see your cost-per-kg of laundry in real-time.
                            </p>
                            <p>
                                Our software will alert you to any anomalies. A sudden spike in water use at 3 AM? That's a leaking valve. A gradual increase in dryer gas use? That's a clogged filter. By providing you with actionable data, we empower you to maintain your facility's peak efficiency every single day.
                            </p>
                        </section>

                        <section id="vfd-tuning" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Fine-Tuning VFD Parameters</h2>
                            <p>
                                The Difference between a "good" motor and a "great" motor is in the tuning of the Frequency Inverter (VFD). Most VFDs are installed with default factory parameters that are safe but not optimized. Our technicians perform on-site "Tuning sessions" where we adjust the motor's voltage-to-frequency curve to match the actual mechanical resistance of the drum.
                            </p>
                            <p>
                                This tuning can reduce motor energy consumption by another 5-10 percent and significantly reduces the heat generated by the motor, which extends its life. It is a highly specialized technical skill that differentiates Sunshine from generic equipment vendors. We speak the language of engineering to save you money.
                            </p>
                        </section>

                        <section id="ozone-technology" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Ozone Cold-Water Sanitization</h2>
                            <p>
                                Ozone (O3) is one of the most powerful sanitizers known to man. When dissolved in laundry water, it kills bacteria and viruses up to 3000 times faster than chlorine. Most crucially, it works most effectively in cold water. By integrating an ozone generator into your facility, you can achieve hospital-grade sanitization in 20-degree water.
                            </p>
                            <p>
                                The environmental benefits are massive. You eliminate the energy cost of water heating; you reduce the need for harsh chemicals; and because ozone breaks down into pure oxygen, your wastewater is actually cleaner than when it entered the building. It is the ultimate "clean tech" for the modern laundromat.
                            </p>
                        </section>

                        <section id="eco-marketing" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Marketing Your Green Facility</h2>
                            <p>
                                Once your facility is optimized, you need to tell the world. We provide our "Eco-Partner" marketing kit to all our long-term clients. This includes branding materials, window decals, and digital content that explains the technology your facility uses. We show you how to communicate the benefits of high G-force extraction and ozone washing to your customers in a way that resonates with them.
                            </p>
                            <p>
                                A green marketing strategy establishes your brand as a modern, premium alternative to the traditional "dirty" laundromat. It builds trust, encourages loyalty, and allows you to charge the prices that your high-tech service deserves. Efficiency is your most powerful brand story.
                            </p>
                        </section>

                        <section id="success-studies" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Sustainability Success Studies</h2>
                            <p>
                                We recently completed the green transformation of a massive industrial laundry in Gurgaon. The facility was struggling with energy costs that accounted for 40 percent of their revenue. We implemented a multi-stage solution: heat recovery from their continuous batch washer, high G-force extraction units for their linens, and a plant-wide VFD optimization.
                            </p>
                            <p>
                                The results were transformative. Their total energy consumption dropped by 38 percent. Their water usage dropped by 1.2 million liters per month. Most importantly, their profitability tripled, and they were able to secure a long-term contract with a major international hotel chain that required "Green-Certified" laundry partners. Efficiency is not just about saving; it is about winning.
                            </p>
                        </section>

                        <section id="faqs" className="mb-12 md:mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Expert FAQ Section</h2>
                            <div className="space-y-8">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-8">
                                        <h3 className="text-xl font-bold text-brand-blue mb-4">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-12 md:mb-20 p-6 md:p-10 bg-slate-50 rounded-2xl md:rounded-[3rem] border border-slate-100">
                            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mb-8 text-center italic">Industry Review Highlights</h2>
                            <div className="grid gap-8">
                                {reviews.map((r, i) => (
                                    <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="flex gap-1 text-brand-orange mb-4">
                                            {[...Array(r.rating)].map((_, s) => <Star key={s} size={20} fill="currentColor" />)}
                                        </div>
                                        <p className="italic text-gray-700 text-lg">"{r.body}"</p>
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
                            <div className="bg-[#2D5A27] text-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-[#A3E635]">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Battery size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Eco-Audit Request</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Benchmark your facility against global efficiency standards and get a projected ROI report.
                                </p>
                                <button
                                    onClick={() => router.push("/contact")}
                                    className="bg-[#A3E635] text-[#2D5A27] w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-[#2D5A27] transition-all relative z-10 shadow-lg"
                                >
                                    Start Your Audit <Gauge size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#2D5A27] mb-6">Efficiency Tools</h3>
                                <nav className="space-y-4">
                                    <Link href="/laundromat-washer-dryer-servicing" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={18} className="text-[#2D5A27]" />
                                            <span className="font-bold text-gray-600 group-hover:text-[#2D5A27] transition-colors">Equipment Servicing</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/technical-support-for-laundromat-operations" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Zap size={18} className="text-[#2D5A27]" />
                                            <span className="font-bold text-gray-600 group-hover:text-[#2D5A27] transition-colors">Technical Support</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/laundry-infrastructure-development" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Settings size={18} className="text-[#2D5A27]" />
                                            <span className="font-bold text-gray-600 group-hover:text-[#2D5A27] transition-colors">Infrastructure Dev</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-[#2D5A27] mb-4 uppercase text-[10px] tracking-[0.2em]">Sustainability Desk</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Leaf size={18} className="text-[#2D5A27]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Direct Hotline</p>
                                            <a href="tel:+919711112950" className="text-sm font-bold text-gray-800 hover:text-[#2D5A27] tracking-tight">+91 97111 12950</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Sun size={18} className="text-[#2D5A27]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Official Support Email</p>
                                            <a href="mailto:info@sunshine-laundry.com" className="text-sm font-bold text-gray-800 hover:text-[#2D5A27] leading-none break-all">eco@sunshine-laundry.com</a>
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
