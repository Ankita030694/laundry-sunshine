"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, MessageSquare, Star, ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp, AlertCircle, Heart } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import CTA from "@/components/CTA";



const sections = [
    { id: "intro", title: "Introduction to Hospitality Laundry" },
    { id: "guest-experience", title: "The Guest Experience Factor" },
    { id: "challenges", title: "Hospitality Laundry Challenges" },
    { id: "in-house-vs-outsourced", title: "In-House vs Outsourced" },
    { id: "washers", title: "Industrial Washers & Extractors" },
    { id: "dryers", title: "Commercial Drying Technology" },
    { id: "ironers", title: "Flatwork Ironing & Finishing" },
    { id: "hygiene", title: "Post-Pandemic Hygiene Standards" },
    { id: "water-quality", title: "Water Quality & Softening" },
    { id: "chemicals", title: "Advanced Chemical Dosing" },
    { id: "sustainability", title: "Sustainable Laundry Practices" },
    { id: "energy-efficiency", title: "Energy Recovery Systems" },
    { id: "rfid", title: "RFID Linen Tracking" },
    { id: "maintenance", title: "Preventative Maintenance" },
    { id: "safety", title: "Operational Safety Protocols" },
    { id: "staff-training", title: "Training for Excellence" },
    { id: "facility-design", title: "Laundry Facility Design" },
    { id: "roi", title: "Financial ROI & Economics" },
    { id: "case-study", title: "Resort Case Study" },
    { id: "regional-analysis", title: "Regional Challenges in India" },
    { id: "future-trends", title: "The Future of Laundry" },
    { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
    {
        question: "What is the ideal laundry capacity for a 100-room luxury hotel?",
        answer: "For a 100-room luxury hotel, we typically recommend a total capacity of 120kg to 180kg per cycle. This accounts for high-thread-count linens, oversized plush towels, and the heavy throughput of food and beverage textiles like napkins and tablecloths."
    },
    {
        question: "How long is the expected lifespan of industrial laundry machines?",
        answer: "With a consistent preventative maintenance program, our industrial machines are designed to last between 20 to 25 years. This durability is achieved through high-grade stainless steel construction and oversized industrial bearings."
    },
    {
        question: "Is on-premise laundry (OPL) more expensive than outsourcing?",
        answer: "While OPL requires higher initial capital expenditure, it significantly reduces the cost per kilogram of laundry over time. Most hotels see a full return on investment within 18 to 30 months through lower utility bills and extended linen life."
    },
    {
        question: "How does your equipment handle sanitization for hotel guest safety?",
        answer: "Our machines use thermal disinfection protocols combined with precise chemical injection. We can maintain water temperatures at 65 degrees Celsius or higher for the exact duration needed to eliminate pathogens and viruses."
    },
    {
        question: "What are the benefits of high-speed extraction (High G-Force)?",
        answer: "High G-force extraction (up to 450G) removes significantly more water from the linen compared to standard machines. This reduces drying time by 30 percent, which is the most effective way to save energy and lower utility costs."
    },
    {
        question: "Do you offer energy-efficient dryers for sustainable hotels?",
        answer: "Yes, our dryers feature axial airflow systems and heat recovery technologies. These systems recirculate hot air to reduce energy consumption and include moisture sensors to prevent over-drying of expensive linens."
    },
    {
        question: "Can your systems integrate with hotel management software?",
        answer: "Absolutely. Our IoT-connected machines provide real-time data on cycle completion, utility usage, and machine health, which can be monitored via web or mobile dashboards by your housekeeping and engineering teams."
    },
    {
        question: "What kind of support do you provide for staff training?",
        answer: "We provide comprehensive on-site training for both operators and maintenance staff. This covers equipment operation, safety protocols, chemical handling, and basic troubleshooting to ensure your facility runs smoothly."
    },
    {
        question: "Are spare parts readily available in India?",
        answer: "We maintain a central warehouse and multiple regional hubs stocked with thousands of OEM parts. For most locations in India, we provide same-day or next-day delivery of critical components to minimize downtime."
    },
    {
        question: "How do you help in designing a new hotel laundry facility?",
        answer: "Our experts provide full facility planning services, including layout design, utility requirement specifications (water, steam, electricity), and workflow optimization to ensure your laundry staff can work efficiently."
    }
];

export default function LaundryForHotels() {
    const { openContactModal } = useModal();
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Commercial Laundry Solutions for Hotels: The Complete Technical Guide",
        "description": "An exhaustive industry guide to optimizing hotel laundry operations. Covers equipment selection, hygiene standards, sustainability, and financial ROI for hoteliers.",
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
        },
        "datePublished": "2024-02-17",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://sunshine-laundry.com/laundry-equipment-for-hotels"
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

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
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
                "name": "Laundry for Hotels",
                "item": "https://sunshine-laundry.com/laundry-equipment-for-hotels"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-white font-sans">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/hero-bg.jpg" alt="Luxury Hotel Laundry" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Professional Laundry Solutions <br />
                        <span className="text-brand-orange italic">for Five Star Hospitality</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium">
                        Master your hospitality linen operations with our comprehensive guide. From technical equipment specs to financial ROI analysis, we provide the ultimate resource for hoteliers.
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
                <Breadcrumbs items={[{ label: "Laundry for Hotels", href: "/laundry-equipment-for-hotels" }]} />
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-6 py-12">
                <div className="grid grid-cols-12 gap-12">

                    {/* Left: Table of Contents */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle: Main Content */}
                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="intro" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">The Critical Role of Laundry in Modern Hospitality</h2>
                            <p>
                                In the competitive world of hospitality, first impressions are everything. When a guest enters their room, the crispness of the bedsheets and the softness of the towels speak volumes about the hotel's commitment to quality. Commercial laundry is not just a utility but is a foundational pillar of the guest experience. A minor lapse in linen quality can lead to poor reviews and a tarnished reputation. Imagine a guest finding a faint stain on a duvet or feeling the rough texture of a poorly laundered towel. These small details can overshadow even the most beautiful decor and service.
                            </p>
                            <p>
                                Sunshine Equipments understands that hoteliers need more than just machines. They need reliable partners who can provide end to end solutions. Our systems are engineered to handle the rigorous demands of hotel operations, ensuring that every piece of linen comes out spotless and sanitized. We focus on industrial grade durability so that your staff can focus on the guests. Every component in our equipment is chosen for its ability to withstand 24/7 operation in high pressure environments.
                            </p>
                            <p>
                                As travel recovers and guest expectations rise, the pressure on hotel laundry facilities has never been greater. High occupancy rates require rapid turnover without compromising on hygiene. This is where advanced machinery becomes a game changer. By investing in the right technology, hotels can achieve a level of cleanliness that manual processes or older equipment simply cannot match. The modern traveler is more aware than ever about sanitization standards, and your laundry room is at the front line of this new reality.
                            </p>
                            <p>
                                Furthermore, the financial impact of laundry cannot be ignored. It is often one of the largest ongoing operational expenses for a property. From water and electricity bills to the cost of labor and chemical consumables, every aspect of the process needs optimization. Our guide delves deep into these metrics to show you how a properly designed laundry facility can shift from being a cost center to a value driver for your business. We provide the tools and insights to help you make informed decisions that benefit your bottom line and your brand equity.
                            </p>
                            <p>
                                In this exhaustive guide, we explore every facet of hotel laundry operations. We cover the technical specifications of industrial machines, the science of chemical dosing, the logistics of linen tracking, and the financial models that justify premium equipment. Whether you are building a new resort or upgrading an existing facility, this resource will provide the clarity you need to achieve operational excellence.
                            </p>
                        </section>

                        <section id="guest-experience" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">The Guest Experience Factor</h2>
                            <p>
                                The sensory experience of linen is one of the most intimate interactions a guest has with your hotel. They spend roughly a third of their stay in direct contact with bedsheets, pillowcases, and bathrobes. This "textile touchpoint" is a powerful tool for building loyalty. A high thread count sheet that feels smooth and cool against the skin is a hallmark of luxury that guests remember and mention in their feedback.
                            </p>
                            <p>
                                However, achieving this consistent quality across hundreds of rooms is a massive operational challenge. It starts with the selection of the linen itself, but it is the laundry process that determines how long that luxury feel lasts. Poor laundering can make expensive silk or Egyptian cotton feel like sandpaper in just a few months. Our machines use optimized drum designs and gentle mechanical action to ensure that the delicate fibers of high end textiles are preserved load after load.
                            </p>
                            <p>
                                Whiteness is another critical metric. Guests associate bright, pristine whites with absolute cleanliness. Over time, many hotels struggle with "graying" or "yellowing" of their linens, often caused by hard water or improper chemical rinsing. We integrate industrial water softening and precise neutralization steps into every cycle to ensure that your whites stay white and your colors stay vibrant. This visual perfection is what justifies your room rates and maintains your five star standing.
                            </p>
                            <p>
                                Scent also plays a role. While many hotels use signature fragrances in their lobbies, the scent of the linen should be one of "neutral cleanliness." Strong chemical smells can be off putting or even trigger allergies for sensitive guests. Our advanced rinsing programs use multiple water changes and precise chemical extraction to ensure that no irritating residues remain in the fabric. This focus on pure, unscented hygiene is the gold standard for luxury hospitality.
                            </p>
                        </section>

                        <section id="challenges" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Hospitality Laundry Challenges</h2>
                            <p>
                                Hotel laundry faces unique challenges that distinguish it from residential or even other commercial sectors. The volume is immense. A luxury hotel might process thousands of kilograms of linen every single day. This includes everything from heavy duvets and plush towels to delicate restaurant napkins and staff uniforms. Managing this diverse mix requires sophisticated sorting and processing strategies to avoid bottlenecks.
                            </p>
                            <p>
                                Stain management is another significant hurdle. Food and beverage areas generate stubborn oil and wine stains, while guest rooms deal with various biological soils. Effective removal requires precise chemical balancing and high temperature cycles that must be performed consistently. If the process is too harsh, the fabric degrades quickly. If it is too gentle, the stains remain. This delicate balance is what separates professional laundry systems from makeshift solutions. Our controllers allow for over 50 unique programming options to handle every possible stain scenario.
                            </p>
                            <p>
                                Labor costs are often the largest expense in a laundry room. Manually sorting, loading, and especially folding guest linens takes significant time. High staff turnover in the hospitality sector adds to the difficulty, as new employees must be constantly trained on complex equipment. This is why automation is becoming a necessity rather than a luxury. An automated folder can do the work of four manual laborers, paying for itself in a matter of months while ensuring every towel is folded to exactly the same dimensions.
                            </p>
                            <p>
                                Space constraints also play a role. Many urban hotels have limited basement or back of house space. Fitting high capacity machines into these areas requires intelligent facility design. We specialize in creating layouts that maximize every square inch, ensuring a smooth workflow from the soiled linen entrance to the clean linen exit. We look at the ergonomic flow to ensure that staff can move between stations without physical strain, which improves morale and safety.
                            </p>
                            <p>
                                Technical downtime is the ultimate nightmare for a hotelier. If your main washer breaks during a 100 percent occupancy weekend, you are in immediate trouble. This is why we prioritize industrial grade components and offer 24/7 service support. Our machines are built with redundancy in mind, using standard industrial parts that are easy to source and replace. We also provide our clients with a "Critical Spares Kit" to handle minor issues instantly on site.
                            </p>
                        </section>

                        <section id="in-house-vs-outsourced" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">In-House vs Outsourced Laundry</h2>
                            <p>
                                One of the most important decisions a hotel manager makes is whether to keep laundry operations on premise or outsource them to a third party service. Both models have their merits, but the trend among luxury establishments is moving toward on premise laundry (OPL) due to the higher quality control it affords.
                            </p>
                            <p>
                                <strong>The Case for On-Premise Laundry:</strong> OPL provides unparalleled control over your largest asset—your linen. You decide exactly how your linens are treated, which detergents are used, and how many times they are rinsed. This control directly impacts the life of your linen. Many hotels find that their linens last 20 percent to 30 percent longer when cleaned in house compared to commercial plants that use harsh chemicals for speed. The investment in linen is significant, and extending its life even by six months can save a large hotel tens of thousands of dollars.
                            </p>
                            <p>
                                Turnaround time is another critical factor. With OPL, you can have a fresh batch of towels ready in hours. There is no waiting for a delivery truck or worrying about external logistics. During peak holiday seasons or unexpected spikes in occupancy, OPL ensures you never run out of clean stock. You also avoid the common problem of "lost linen" where items sent to big commercial plants never return or come back mixed with another hotel's lower quality stock.
                            </p>
                            <p>
                                <strong>The Case for Outsourcing:</strong> Outsourcing can reduce capital expenditure and free up space. For smaller boutique hotels with very low volume, it might be more cost effective. However, the lack of control over hygiene and the risk of lost or damaged items are significant trade offs. Often, the hidden costs of outsourcing, such as higher linen replacement rates and transportation fees, outweigh the initial savings. You also lose the ability to provide guest laundry services as a revenue stream if you do not have equipment on site.
                            </p>
                            <p>
                                Financial transparency is also a challenge when outsourcing. Many commercial laundries charge by weight, but if they return the linen while it is still slightly damp, you are essentially paying for water. With OPL, your costs are fixed and manageable. You know exactly what your utility and labor spend is, allowing for much more accurate financial planning and budgeting.
                            </p>
                        </section>

                        <section id="washers" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Industrial Washers & Extractors</h2>
                            <p>
                                The foundation of any hotel laundry is the washer extractor. These are not just larger versions of home machines; they are precision engineered industrial tools. Our washers feature heavy duty suspension systems that allow for high extraction speeds, often exceeding 400 G-force. This speed is crucial because it pulls more water out of the fabric, which means less time in the dryer. Since dryers consume more energy than washers, high extraction is the single most effective way to lower your utility bills.
                            </p>
                            <p>
                                Durability is achieved through the use of high grade 304 stainless steel for the drum and the outer tub. This material resists corrosion from harsh laundry chemicals and ensures the machine can run for decades. We use oversized bearings and robust motor drives that are designed to handle the massive torque generated by a moving load of wet towels. This engineering ensures that your "up-time" remains high, even during your busiest seasons. Our machines are built to withstand 30,000 to 50,000 wash cycles, whereas a light commercial unit might fail before 5,000.
                            </p>
                            <p>
                                Programming is the brain of the washer. Modern hospitality needs require different cycles for different items. A cycle for "Red Wine on Tablecloths" will have different water levels, temperatures, and chemical dosing points than a cycle for "Delicate Silk Bedding." Our controllers allow for these granular adjustments, ensuring that every load is treated perfectly. We also provide "one touch" operation so that even entry level staff can operate the machines correctly without error. This reduces the risk of fabric damage caused by manual override.
                            </p>
                            <p>
                                Water consumption is managed through tiered water levels and reuse tanks. Instead of filling a giant drum for a half load, our sensors detect the weight and adjust the water level accordingly. For large scale operations, we offer tunnel washers which use a continuous flow of water in a counter current direction, achieving the lowest possible water usage per kilogram of laundry. This technology can reduce your water footprint by as much as 60 percent, making it the ultimate tool for eco-centric resorts.
                            </p>
                            <p>
                                Finally, we focus on ease of maintenance. The drive system and chemical ports are easily accessible through front and side panels. We use standard industrial components from trusted global brands like Siemens and ABB to ensure that parts are always available. This "open architecture" design is a hallmark of Sunshine Equipments, as we believe you should not be locked into a proprietary system for simple repairs.
                            </p>
                        </section>

                        <section id="dryers" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Commercial Drying Technology</h2>
                            <p>
                                Drying is the most energy intensive stage of the laundry process. Traditional dryers simply run for a set amount of time at a high temperature, which often results in over drying. Over drying makes the fibers in your linen brittle, leading to shedding (the lint in your filter is actually your linen disappearing) and a rough hand feel. Our dryers feature moisture sensing technology that stops the cycle the moment the linen reaches the ideal moisture level. This preservation of fabric integrity is essential for luxury hotels where linen softness is a key guest metric.
                            </p>
                            <p>
                                The airflow in our dryers is designed for maximum efficiency. Axial airflow systems move heat through the center of the cylinder, ensuring that the entire load is dried evenly. This prevents the "wet center" problem where the outside of a bundle is dry but the middle remains damp. Even drying also makes the ironing and folding process much smoother, as the fabric is consistently pliable. We also use high performance blowers that can exhaust moisture twice as fast as standard units, which increases your hourly throughput.
                            </p>
                            <p>
                                Cool down cycles are a critical safety and quality feature. If hot linens are piled up immediately after drying, they can undergo "spontaneous combustion" in rare cases or, more commonly, develop set in wrinkles. Our dryers include a programmed cool down phase that gradually brings the load to room temperature while rotating the drum to prevent settling. This also makes the linens more comfortable for your staff to handle and fold immediately after the cycle ends.
                            </p>
                            <p>
                                Fire suppression systems are built into every industrial dryer we install. High heat and lint are a dangerous combination. Our sensors can detect a sudden spike in temperature or smoke and automatically activate a water spray inside the drum, protecting your building and your staff. This level of safety is standard in our hospitality grade equipment. We also provide "smart lint filters" that alert staff when they are full, preventing airflow restricted fires and maintaining high efficiency.
                            </p>
                            <p>
                                For properties looking to maximize speed, we offer gas heated dryers which reach operational temperature much faster than electric models. These units are highly favored in the Indian hospitality industry due to their lower operational costs and faster cycle times. We assist with all gas piping and safety certification to ensure a seamless installation.
                            </p>
                        </section>

                        <section id="ironers" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Flatwork Ironing & Finishing</h2>
                            <p>
                                The mark of a true luxury hotel is the perfectly pressed bedsheet. Achieving this finish manually with hand irons is labor intensive and inconsistent. Our flatwork ironers (manglers) allow you to feed damp linens directly from the washer extractor, bypassing the dryer entirely for certain items. This "wash to iron" workflow is the pinnacle of efficiency, as it uses the existing moisture in the fabric to achieve a superior, glass like finish.
                            </p>
                            <p>
                                The ironer works by passing the linen between a heated chest and a rotating cylinder. The pressure and heat remove all wrinkles while "locking in" a smooth finish. Our ironers feature variable speed controls so you can match the ironing speed to the moisture level of the linen and the skill level of the operators. This flexibility allows you to process different types of fabrics—from thick table linens to delicate pillowcases—all on the same machine.
                            </p>
                            <p>
                                Finger guards and emergency stop bars are standard on all our ironers to ensure operator safety. We also use advanced padding materials on the cylinders that maintain their shape and heat distribution for longer, reducing the frequency of maintenance. The heating chests are made of mirror polished steel to prevent snagging and ensure that the linen glides smoothly through the system.
                            </p>
                            <p>
                                For high volume food and beverage operations, a dedicated ironer for napkins and tablecloths is a lifesaver. It ensures that every table in your restaurant looks immaculate, reflecting the high standards of your culinary team. The ironed linens are much easier to fold neatly into intricate shapes for table presentation. We offer various widths and diameters to match the specific linen dimensions of your property.
                            </p>
                            <p>
                                Optional automated folders can be attached to the back of our ironers. This creates a fully automated line where a single operator can feed a damp sheet and have it come out the other side perfectly pressed and folded. This massive reduction in labor is a primary reason why larger resorts choose Sunshine Equipments for their facility upgrades.
                            </p>
                        </section>

                        <section id="hygiene" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Post-Pandemic Hygiene Standards</h2>
                            <p>
                                Since the global health crisis, guest awareness regarding hygiene has skyrocketed. They want to know that the linens they sleep on are not just visibly clean but biologically safe. Our equipment is built to meet the most stringent sanitization protocols. This is particularly important for high turnover environments where the risk of pathogen spread is magnified. Hygiene is no longer a "behind the scenes" function; it is a core promise of your brand.
                            </p>
                            <p>
                                Thermal disinfection is at the core of our sanitization strategy. Our machines can maintain precise high temperatures for the duration required to eliminate pathogens. We also integrate with advanced chemical injection systems that use ozone or hospital grade disinfectants to ensure a 99.99 percent kill rate for bacteria and viruses. Ozone is particularly effective because it works at lower water temperatures, saving energy while providing a deeper clean and a natural "fresh air" scent.
                            </p>
                            <p>
                                Proper rinsing is equally important. Residual chemicals can cause skin irritation for guests with allergies. Our machines feature programmable rinse cycles that ensure all detergents and conditioners are thoroughly removed before the extraction phase. We offer pH testing kits so you can verify that the final output is skin neutral and safe for all guests. Our controllers track every sanitization cycle and can generate reports for your health and safety audits.
                            </p>
                            <p>
                                We also advocate for the use of barrier washers in properties that handle healthcare laundry as part of their hotel group operations. This design physically separates the soiled side from the clean side, eliminating any risk of airborne contamination. If your hotel serves long stay guests or has a medical tourism component, this level of hygiene is a major strategic advantage. Barrier washers represent the highest standard of international laundry safety.
                            </p>
                        </section>

                        <section id="water-quality" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Water Quality & Softening</h2>
                            <p>
                                The quality of the water entering your laundry facility is often the most underestimated factor in achieving a five star finish. In many parts of India, groundwater is "hard," meaning it contains high levels of calcium and magnesium. When this water meets laundry detergent, it forms a soap scum that sticks to the fibers of your linen, making them feel stiff and gray. This buildup also coats the internal components of your machines, leading to higher energy consumption as the heating elements have to work harder.
                            </p>
                            <p>
                                We recommend a comprehensive water analysis before any installation. Our systems can then be paired with industrial water softeners that remove these minerals, allowing the detergents to work at peak efficiency. Soft water also means you can reduce your chemical usage by up to 40 percent, as you no longer need to "fight" the minerals in the water. This is a massive win for both your budget and the environment. Your linens will feel softer to the guest and last significantly longer.
                            </p>
                            <p>
                                Iron and manganese are other common contaminants in the Indian water supply. These can cause permanent staining on white linens, manifesting as orange or black spots. We provide specialized filtration systems that remove these metals before they ever enter the washer. Protecting your linen investment starts at the water inlet, and our engineering team takes a holistic view of the entire plumbing system.
                            </p>
                            <p>
                                Water temperature control is the final pillar of quality. While some cycles use cold water for energy savings, others require precise heat to activate specific enzymes in the detergent. Our machines use redundant temperature sensors to ensure that the water is within one degree of the set point. This level of precision ensures that you get a consistent clean every time, regardless of the time of day or the season.
                            </p>
                        </section>

                        <section id="chemicals" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Advanced Chemical Dosing</h2>
                            <p>
                                Manually pouring detergent into an industrial washer is an outdated and inefficient practice. It leads to waste, inconsistent cleaning, and the risk of operator error. Our systems use multi port chemical injection pumps that are directly linked to the machine's controller. Each cycle determines the exact amount of chemical needed down to the milliliter, injecting it at precisely the right moment in the wash process.
                            </p>
                            <p>
                                We work with leading chemical partners to create "recipes" tailored to your specific textiles. For example, a "Heavy Soil" cycle for kitchen uniforms will use a high alkaline builder to break down fats, whereas a "Delicate Guest Laundry" cycle will use a pH neutral detergent to preserve the colors of silk or wool. This automated precision ensures that your fabrics are never over processed or prematurely degraded by chemical stress.
                            </p>
                            <p>
                                Safety is also enhanced through automation. By using a closed loop dosing system, your laundry staff never comes into direct contact with concentrated chemicals. This reduces the risk of chemical burns, spills, and respiratory irritation. It also keeps your laundry room floor clean and dry, which is a major factor in workplace safety. Our pumps are designed with "out of chemical" sensors that alert managers before a drum runs dry, preventing wasted cycles.
                            </p>
                            <p>
                                Finally, we focus on eco-friendly chemistry. Many modern hotels are moving away from traditional bleaches in favor of oxygen based whiteners and bio-degradable surfactants. Our machines are compatible with all modern green chemistries, allowing you to achieve a "Green Key" or "LEED" certification for your property without sacrificing cleaning performance.
                            </p>
                        </section>

                        <section id="sustainability" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Sustainable Laundry Practices</h2>
                            <p>
                                Modern hotels are under pressure from both guests and investors to reduce their environmental footprint. Laundry is typically one of the largest consumers of water and energy in a building. Our goal is to make your laundry room as green as it is clean. This is not just about being eco friendly; it is about saving money on every single load. A sustainable laundry room is a more profitable laundry room.
                            </p>
                            <p>
                                Water recycling systems can reduce consumption by up to 50 percent. By filtering and reusing water from the final rinses in the initial wash stages of the next cycle, we significantly cut utility bills and environmental impact. Our machines also use smart sensors to determine the exact amount of water needed based on the weight of the load. No more wasting fifty liters of water on a five kilogram load of staff shirts. This level of stewardship is a powerful part of your CSR story.
                            </p>
                            <p>
                                Energy efficiency is achieved through motor optimization and heat recovery. Our dryers can be equipped with air recirculation systems that capture hot air and feed it back into the heating chamber. This reduces the amount of gas or electricity needed to reach the desired temperature. We also use high performance insulation on our ironers and washers to keep the heat inside the machines where it belongs rather than heating up your laundry room and stressing your air conditioning systems.
                            </p>
                            <p>
                                Choosing durable equipment is also a form of sustainability. Machines that last 20 years instead of 5 mean fewer resources are spent on manufacturing and transportation over the long term. We build our equipment with heavy duty components that stand the test of time. A Sunshine machine is an investment in the future of your property and the planet. We also provide "end of life" recycling services for our machines to ensure that metal and electronics are disposed of responsibly.
                            </p>
                        </section>

                        <section id="energy-efficiency" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Energy Recovery Systems</h2>
                            <p>
                                The heat generated by an industrial laundry is a valuable resource that is often wasted. In a typical setup, hot water is drained and hot air is exhausted from the building. Our energy recovery systems capture this waste heat and redirect it where it is needed most. For example, a waste water heat exchanger can capture the thermal energy from the hot wash water and use it to pre heat the incoming cold water. This can reduce the energy needed for heating by as much as 30 percent.
                            </p>
                            <p>
                                Steam recovery is another area of opportunity for large resorts. By piping the condensate from the ironers back into the boiler, you save both water and the energy needed to heat that water from room temperature. This creates a highly efficient "closed loop" system that significantly reduces the operating hours of your boiler. Our engineering team can analyze your existing steam layout and suggest simple retrofits that pay for themselves in months.
                            </p>
                            <p>
                                Frequency inverters (VFDs) on all our motors ensure that energy is only used when needed. Instead of running a motor at 100 percent speed for a 20 percent load, the VFD adjusts the power output to match the demand. This not only saves electricity but also reduces the wear and tear on the motor and drive belts, extending the overall life of the equipment. VFDs also provide a "soft start" which prevents power surges that can trip breakers in older hotel buildings.
                            </p>
                            <p>
                                Lighting and ventilation in the laundry room are also part of our energy audits. We recommend high efficiency LED lighting and humidity controlled ventilation fans that only run when the room exceeds a certain moisture level. These small adjustments create a more comfortable environment for your staff while trimming your overhead costs. We take a holistic view of the entire facility's energy profile to find every possible saving.
                            </p>
                        </section>

                        <section id="rfid" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">RFID Linen Tracking</h2>
                            <p>
                                Linen loss, also known as "inventory shrinkage," is a multi million dollar problem for the global hospitality industry. Between guest theft, accidental disposal, and losses at commercial laundry plants, hotels often lose 15 percent to 20 percent of their linen every year. Radio Frequency Identification (RFID) technology offers a high tech solution to this ancient problem. It provides total visibility into every piece of textile in your inventory.
                            </p>
                            <p>
                                By embedding a small, heat resistant RFID chip in the hem of every towel and sheet, you can track the movement of your assets in real time. Gates at the laundry entrance and the loading docks automatically scan hundreds of items per second, giving you an accurate count without any manual labor. You can instantly see if a bundle of 500 towels was sent to the wash but only 480 returned. This accountability alone often pays for the RFID system within the first twelve months by reducing replacement costs.
                            </p>
                            <p>
                                RFID also provides invaluable data on the "life cycle" of your linen. You can see exactly how many times a specific bedsheet has been washed. When an item reaches its 150th wash, the system can flag it for inspection or automatic retirement, ensuring that guests never encounter a sheet that is nearing the end of its aesthetic life. This data driven approach allows for more accurate budgeting and prevents "panic buying" of new stock based on guesses rather than facts.
                            </p>
                            <p>
                                For room management, RFID can speed up the inventory process for housekeeping. Instead of counting every towel by hand, a staff member can simply wave a handheld scanner over the linen closet to get a 100 percent accurate count in seconds. This allows for better labor allocation and ensures that every floor is properly stocked for the next day's turnover. RFID is the ultimate tool for the modern, tech-savvy hotelier.
                            </p>
                        </section>

                        <section id="maintenance" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Preventative Maintenance</h2>
                            <p>
                                A commercial laundry room is a harsh environment. High heat, humidity, and constant mechanical stress can take a toll on even the best equipment. This is why a rigorous preventative maintenance schedule is non negotiable. For hotels, where a machine failure can lead to guests not having clean towels, maintenance is as much about risk management as it is about equipment health. A proactive approach is the only way to ensure 100 percent reliability.
                            </p>
                            <p>
                                Daily tasks include cleaning lint filters in dryers and checking the debris traps in washers. These small steps prevent air and water flow blockages that would otherwise force the machines to work harder and consume more energy. Our machines are designed with easy access panels so that these tasks can be completed in seconds without any tools. We provide laminated daily check sheets that your staff can use to ensure compliance with these critical steps.
                            </p>
                            <p>
                                Monthly inspections should focus on belt tension and lubrication of moving parts. A slipping belt can reduce extraction efficiency, while a dry bearing can quickly lead to a motor failure. We provide comprehensive training for your in house engineering team or offer Annual Maintenance Contracts (AMC) where our certified technicians handle everything for you. Our AMCs include all wear and tear parts and priority response times for any emergencies.
                            </p>
                            <p>
                                Water quality is an often overlooked factor in maintenance. Hard water can lead to scale buildup in the heating elements of your washers and ironers, significantly reducing their efficiency. We recommend installing water softeners as part of your laundry setup to protect your machines and improve the effectiveness of your detergents. Regular descaling cycles should also be performed on the machines to keep them in peak condition.
                            </p>
                            <p>
                                Finally, we use digital diagnostic tools to monitor machine performance. By hooking up our laptops to the machine's controller, we can see historical data on cycle times, error codes, and utility usage. This allows us to spot potential issues before they become actual breakdowns. This "data led" maintenance is why Sunshine equipment has the highest up-time in the industry.
                            </p>
                        </section>

                        <section id="safety" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Operational Safety Protocols</h2>
                            <p>
                                Operating industrial grade machinery requires a strong culture of safety. The combination of high heat, steam, and moving mechanical parts can be dangerous if not managed correctly. Our equipment is built with "Safety First" engineering, including localized emergency stops and automatic shut off sensors. However, technology is only part of the equation; staff training and clear protocols are essential. A safe laundry room is a productive laundry room.
                            </p>
                            <p>
                                Ergonomics is a major focus of our facility design. We set the height of sorting tables and the placement of carts to minimize the need for staff to bend or lift heavy weights. Over time, these small adjustments prevent chronic back injuries and carpel tunnel syndrome, keeping your team healthy and productive. We also provide signage and training on the correct way to handle soiled linens to prevent needle sticks or exposure to biological hazards.
                            </p>
                            <p>
                                Chemical safety is equally important. We insist on the use of closed loop chemical systems where staff never have to handle open containers of concentrated detergents. This eliminates the risk of chemical splashes and ensure that fumes are contained within the system. Regular training sessions on Material Safety Data Sheets (MSDS) are part of our standard commissioning process for every hotel client. We also provide eye wash stations and personal protective equipment for all staff.
                            </p>
                            <p>
                                Electrical safety is managed through high quality wiring and circuit breakers that are rated for the high torque of industrial motors. We also recommend regular "thermal scanning" of your electrical panels to spot any loose connections or hot spots before they lead to a fire. Since laundry rooms are often damp, we use higher grade waterproof connectors and shielded cables to ensure total safety for your operators.
                            </p>
                        </section>

                        <section id="staff-training" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Training for Excellence</h2>
                            <p>
                                Even the most advanced laundry facility is only as effective as the people operating it. We believe that training is a continuous process, not just a one time event during installation. We provide structured training programs for three distinct groups: machine operators, laundry managers, and maintenance engineers. This ensuring that every level of your organization is empowered to get the best results from our equipment.
                            </p>
                            <p>
                                For operators, we focus on safe handling and cycle selection. They are taught how to spot different types of stains and which programs to use for maximum effectiveness without damaging the fabric. We use visual aids and translated manuals to ensure that information is accessible to all staff members regardless of their educational background. Good operator training reduces "re wash" rates and extends the life of your equipment.
                            </p>
                            <p>
                                Managers are trained on the digital dashboard and financial reporting tools. They learn how to analyze utility data to find savings and how to manage the workflow to eliminate bottlenecks. We also provide them with templates for staff scheduling and inventory management. A well trained laundry manager can save your property thousands of dollars through operational optimization.
                            </p>
                            <p>
                                Maintenance engineers are given a deep dive into the mechanical and electrical systems. We show them how to perform preventative maintenance tasks and how to use our diagnostic tools to troubleshoot issues. By empowering your in house team, we reduce your reliance on external service calls for minor issues, which increases your facility's reliability. Training is an investment that pays dividends in both staff morale and machine performance.
                            </p>
                        </section>

                        <section id="facility-design" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Laundry Facility Design</h2>
                            <p>
                                Designing a hotel laundry facility is a complex engineering task. It involves more than just picking a room and moving the machines in. You have to consider floor loading, utility access, ventilation, and the flow of material. A poorly designed facility will have staff tripping over each other and carts blocking important exits. Our design team uses 3D modeling to create a "digital twin" of your facility before a single machine is ordered.
                            </p>
                            <p>
                                The "dirty to clean" flow is the most important concept in design. Soiled linens should enter the room at one end and traverse through the washing, drying, and ironing stations without ever crossing paths with clean linens. This prevents cross-contamination and makes the operation much more intuitive for the staff. We also ensure that there is ample space for sorting and for the "rest period" of the clean linens before they return to the floors.
                            </p>
                            <p>
                                Ventilation is another critical factor. A laundry room generates a massive amount of heat and humidity. If this is not vented correctly, it becomes an unbearable environment for your staff and can lead to mold growth in other parts of the building. We design specialized exhaust systems that pull hot air directly from the machines and replace it with fresh, filtered air from the outside. Proper ventilation also prevents the buildup of lint, which is a major fire hazard.
                            </p>
                            <p>
                                Utility requirements must be specified early in the construction phase. An industrial washer might require a three inch water line and a high voltage electrical feed. Steam ironers need dedicated steam piping and high pressure drains. We provide your architects and contractors with detailed "Rough-In" specifications to ensure that the building is ready for the equipment when it arrives. This prevents costly "work arounds" and delays during the installation phase.
                            </p>
                            <p>
                                Finally, we consider future expansion. Your hotel might grow or your occupancy might increase. We design the initial facility with "plug and play" space for additional machines, ensuring that you can scale your operations without having to perform a major renovation of your back of house areas. Flexible design is the hallmark of a wise long term investment.
                            </p>
                        </section>

                        <section id="roi" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Financial ROI & Economics</h2>
                            <p>
                                When looking at the price tag of industrial laundry equipment, it is easy to focus on the initial capital expenditure. However, the true cost of a machine is measured over its entire lifespan. A cheap machine that consumes 30 percent more water and electricity will end up costing you three times its purchase price in utility bills over five years. We provide a full Total Cost of Ownership (TCO) analysis to help you see the long term reality.
                            </p>
                            <p>
                                The most immediate ROI comes from utility savings. By moving from home style or light commercial units to high efficiency industrial extractors, you can expect a 40 percent reduction in your water and energy bills. In many properties, these savings alone are enough to pay the monthly financing for the equipment. We use your actual utility rates to build a customized financial model that shows exactly when you will reach your break even point.
                            </p>
                            <p>
                                Extended linen life is another huge financial driver. If your linens last 200 washes instead of 150 because of our gentle mechanical action and precise chemical dosing, you have effectively reduced your linen replacement budget by 25 percent. For a 500 room hotel, this can translate to savings of 50,000 dollars or more every year. We provide the data to back up these claims, drawing from our decades of experience in the Indian hospitality market.
                            </p>
                            <p>
                                Labor is the final piece of the economic puzzle. Automation doesn't just reduce the number of staff needed; it increases the output per staff member. If our automated folding system allows one person to do the work of three, those other two employees can be redirected to higher value tasks like room inspection or guest service. In an era of rising labor costs and staff shortages, this improved efficiency is a major competitive advantage.
                            </p>
                            <p>
                                Resale value is also worth considering. Sunshine equipment is known for its durability and high secondary market value. If you decide to upgrade your facility in ten years, your existing machines can be traded in or sold for a significant sum, further lowering your long term cost of ownership. We stand behind the value of our machines for the long haul.
                            </p>
                        </section>

                        <section id="case-study" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Resort Case Study</h2>
                            <p>
                                A 250 room luxury resort on the coast of Goa was struggling with their outsourced laundry provider. They were experiencing high linen loss rates, frequent delays in towel delivery, and a growing number of guest complaints about "musty" smelling linens caused by high humidity during transport. They were spending nearly 12,000 dollars a month on laundry services and still not meeting their own quality standards.
                            </p>
                            <p>
                                Sunshine Equipments was brought in to design and install a state of the art on premise laundry facility. We faced challenges with the salty air and limited space near the employee housing. We used specialized anti corrosion coatings on all exterior panels and implemented a vertical stacking system for their smaller washers to maximize the floor plan. We also installed a high speed steam ironer to handle their premium bed sheets.
                            </p>
                            <p>
                                The results were transformative. Within the first six months, guest satisfaction scores for "room cleanliness" rose from 3.8 to 4.7 out of 5. The resort reduced its monthly laundry expenditure by 28 percent, even after accounting for the equipment lease and labor costs. They also saw their linen replacement budget drop by 15 percent as the in house team took better care of the textiles.
                            </p>
                            <p>
                                Perhaps most importantly, the resort was able to launch a "Express Guest Laundry" service for their long stay guests, generating an additional 4,000 dollars in monthly profit. This case study demonstrates how moving from a reactive to a proactive laundry strategy can transform a hotel's operations, guest perception, and overall profitability.
                            </p>
                        </section>

                        <section id="regional-analysis" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Regional Challenges in India</h2>
                            <p>
                                India's diverse climate and infrastructure present unique challenges for hotel laundry. In the humid coastal regions like Mumbai or Kerala, drying times are naturally longer, and the risk of mildew is much higher. Machines in these areas require robust moisture control and anti microbial cycles to ensure linens stay fresh. We use high grade stainless steel that resists the salty air, preventing the rust that plagues lower quality brands in coastal environments.
                            </p>
                            <p>
                                In the colder hill stations of the North, the challenge is getting water up to temperature in freezing conditions. Our washers are equipped with high capacity heating elements that can quickly bring near-freezing water to the 60 degree Celsius required for effective sanitization. We also provide extra insulation for steam pipes to prevent heat loss in cold laundry rooms, ensuring that your energy bills stay manageable even in the depths of winter.
                            </p>
                            <p>
                                Urban hotels in cities like Bengaluru or Delhi face a different challenge: space and noise. In these crowded environments, a laundry room is often located directly below guest rooms or near public areas. Our "Whisper-Quiet" technology and high quality suspension systems minimize vibrations and noise, ensuring that the heavy duty work of the laundry does not disturb the serene atmosphere of your lobby or spa. We also offer "stackable" units for hotels with extremely tight square footage.
                            </p>
                            <p>
                                Water scarcity is also a growing concern in many Indian cities. Our water recycling systems are a major selling point for hotels in these regions, allowing them to maintain high standards while being responsible stewards of local resources. Being able to show your guests and local authorities that you have reduced your water consumption by 50 percent is a powerful statement of corporate responsibility.
                            </p>
                        </section>

                        <section id="future-trends" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">The Future of Laundry</h2>
                            <p>
                                The future of hospitality laundry is digital and automated. We are already seeing the adoption of robotic hands for sorting and loading, which will further reduce the physical burden on staff. AI powered vision systems can now detect small tears or stains in linen before they reach the guest, ensuring 100 percent quality control. These technologies are currently in the early adoption phase but will become standard in the next decade.
                            </p>
                            <p>
                                Ozone washing is another trend that is gaining massive traction. By using ozone gas dissolved in cold water, you can achieve superior sanitization while practically eliminating the need for hot water. This is an incredible tool for sustainability and fabric longevity, as cold water is much gentler on fabric than hot water. We are at the forefront of this technology in India, helping our clients transition to a more efficient future.
                            </p>
                            <p>
                                Finally, the "service as a product" model is evolving. Instead of just buying machines, many hotels are looking for partners who provide "Clean Linen as a Service," where the vendor handles everything from equipment to maintenance and staffing for a fixed monthly fee. Sunshine Equipments is exploring these models to provide even more flexibility for our hotel clients. The goal is always the same: to provide the highest quality linen at the lowest possible cost.
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
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">"Sunshine Equipments transformed our back of house operations. The reliability of their machines is unmatched, and the reduction in utility costs was exactly as promised in their initial audit. Our housekeeping team is much more efficient now."</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">RJ</span>
                                        General Manager, Radisson Group India
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">"From a technical perspective, their equipment is top notch. The PLC controllers are intuitive, and the water recycling system is a game changer for our Goa resort. Their service team is always responsive and highly knowledgeable."</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">SK</span>
                                        Chief Engineer, Taj Resorts & Palaces
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">"Sunshine's equipment transformed our laundry from a bottleneck into a high-efficiency department. The finish on our 800-thread-count sheets is consistently perfect, which is vital for our brand's luxury positioning."</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">GM</span>
                                        General Manager, Taj Palaces & Resorts
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">"The ROI analysis provided by Sunshine was spot on. We recovered our initial investment in 28 months through utility savings alone. Their moisture-sensing dryers have halved our energy bills for the towel processing line."</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">FC</span>
                                        Financial Controller, Hyatt Regency Delhi
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">"As an Executive Housekeeper, my priority is linen longevity and staff safety. Sunshine's ergonomic designs and soft-water treatment protocols have extended our linen life by 35 percent. It's the most reliable system I've used in my 20-year career."</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">EH</span>
                                        Executive Housekeeper, Marriott International
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">"Designing a new-build luxury hotel requires partners who understand architectural constraints. Sunshine worked seamlessly with our MEP contractors to design a high-capacity laundry in a compact basement footprint without compromising on workflow."</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">PD</span>
                                        Project Director, Oberoi Hotels & Resorts
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">"The RFID tracking system from Sunshine has virtually eliminated linen loss. We now have 100 percent visibility into our inventory across multiple floors, and our delivery cycles are 20 percent faster."</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">LM</span>
                                        Laundry Manager, Hilton Worldwide
                                    </p>
                                </div>
                            </div>
                        </section>

                    </article>

                    {/* Right Column: CTA & Related */}
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
                                    <Link href="/laundry-equipment-for-hospitals" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Hospital Solutions</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/services/laundry-setup" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Droplets size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Facility Setup</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/services/amc" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Zap size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Maintenance AMC</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/brands" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Star size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Our Partner Brands</span>
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

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </main>
    );
}
