"use client";

import Image from "next/image";
import Link from "next/link";
import {
    CheckCircle2, Phone, Mail, ArrowRight, MessageSquare, Star,
    ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp,
    AlertCircle, Heart, Cpu, Wifi, Smartphone, BarChart3
} from "lucide-react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "digital-transformation", title: "The Digital Transformation of Textile Care" },
    { id: "iot-connectivity", title: "IoT Connectivity: Connecting the Fleet" },
    { id: "ai-predictive", title: "AI-Driven Predictive Maintenance" },
    { id: "rfid-tracking", title: "RFID Linen Tracking: Eliminating Loss" },
    { id: "pms-integration", title: "PMS Integration: Seamless Operations" },
    { id: "chemical-sync", title: "Automated Chemical Dosing Synchronization" },
    { id: "utility-dashboards", title: "Real-Time Utility Dashboards & Analytics" },
    { id: "cloud-management", title: "Cloud-Based Facility Management" },
    { id: "machine-learning", title: "Machine Learning for Cycle Optimization" },
    { id: "remote-updates", title: "Remote Troubleshooting & Firmware" },
    { id: "labor-management", title: "Data-Driven Labor Management" },
    { id: "smart-sorting", title: "Smart Sorting & Automated Handling" },
    { id: "data-security", title: "Security & Data Privacy in Industrial IoT" },
    { id: "smart-economics", title: "The Economics of the Smart Laundry Room" },
    { id: "future-robotics", title: "Future Trends: Robotics & Full Automation" },
    { id: "roi-from-data", title: "ROI: Turning Data into Profit" },
    { id: "digital-training", title: "Staff Training for the Digital Age" },
    { id: "case-study-mumbai", title: "Case Study: Smart Hospital in Mumbai" },
    { id: "connectivity-india", title: "Regional Connectivity Challenges in India" },
    { id: "laundry-2030", title: "Building the Laundry Room of 2030" },
    { id: "reviews", title: "Industry Expert Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
    {
        question: "What is a smart laundry system and how does it differ from traditional ones?",
        answer: "A smart laundry system utilizes IoT sensors and cloud software to monitor machine health, chemical usage, and utility consumption in real time. Unlike traditional standalone machines, smart systems provide actionable data to managers to optimize costs and prevent breakdowns."
    },
    {
        question: "Can RFID tracking really reduce linen loss in a large hotel?",
        answer: "Yes, significantly. RFID chips sewn into linens allow for 100% accurate inventory counts at every stage of the laundry cycle. Facilities typically see a twenty to thirty percent reduction in linen replacement costs as &apos;lost&apos; inventory is identified and recovered."
    },
    {
        question: "Does the smart software integrate with hotel Property Management Systems?",
        answer: "Our Sunshine Digital platform features open API architecture that allows for seamless integration with major PMS like Opera or Fidelio. This enables the laundry room to prioritize loads based on real time guest check in and room turnover data."
    },
    {
        question: "Is my facility&apos;s data secure in your cloud platform?",
        answer: "We utilize industrial grade encryption and secure AWS hosting to ensure your operational data is protected. Our systems comply with global data privacy standards, ensuring that your utility and labor metrics are accessible only to authorized personnel."
    },
    {
        question: "How does AI predictive maintenance know when a machine will fail?",
        answer: "The AI looks for &apos;vibration signatures&apos; and temperature trends that are invisible to the human eye but have historically preceded mechanical failures. It triggers a service alert weeks before a total breakdown occurs."
    },
    {
        question: "Can I manage multiple laundry facilities from a single dashboard?",
        answer: "Absolutely. Our cloud based enterprise dashboard allows regional managers to view and compare the efficiency, chemical costs, and downtime of dozens of facilities simultaneously, making it ideal for national hotel chains."
    },
    {
        question: "Do operators need a PhD to run these digital machines?",
        answer: "On the contrary. Our smart machines feature intuitive touchscreen interfaces that guide operators through the correct cycle selection based on the weight and type of linen. The technology simplifies the workflow rather than complicating it."
    },
    {
        question: "What happens if our facility&apos;s internet goes down?",
        answer: "The machines will continue to operate normally using their local internal logic. All performance data is stored in the machine&apos;s local memory and will automatically sync with the cloud the moment the internet connection is restored."
    },
    {
        question: "How much does a smart laundry upgrade typically cost?",
        answer: "While the initial cost is fifteen to twenty percent higher than traditional equipment, the ROI is achieved much faster through reduced labor, chemicals, and utilities. Most facilities see a full payback within eighteen months of operation."
    },
    {
        question: "Can old industrial machines be retrofitted with smart features?",
        answer: "We offer IoT retrofitting kits for most professional machines that allow for basic monitoring of motor loads and utility consumption. However, for full AI driven cycle optimization, our new generation Sunshine hardware is required."
    }
];

export default function SmartSolutionsPage() {
    const router = useRouter();
    const websiteUrl = "https://sunshine-laundry.com/smart-laundry-equipment-solutions";
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
                "name": "Smart Industrial Laundry Solutions | IoT & AI Integration",
                "description": "Revolutionize your laundry facility with AI-driven predictive maintenance, RFID linen tracking, and real-time cloud analytics for peak operational efficiency."
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunshine-laundry.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Smart Solutions", "item": websiteUrl }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "headline": "The Future is Digital: Mastering Smart Laundry Equipment Solutions",
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "datePublished": "2024-02-17",
                "image": "https://sunshine-laundry.com/smart-solutions-hero.jpg"
            },
            {
                "@type": "Product",
                "name": "AI-Powered Laundry Intelligence Suite",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "210"
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
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/hero-bg.jpg" alt="Smart Laundry Technology" fill className="object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/0 to-brand-blue/100" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-xs md:text-sm font-bold mb-8 uppercase tracking-widest leading-none animate-fade-in">
                        <Cpu size={16} className="text-brand-orange" /> Powered by AI & IoT
                    </div>
                    <h1
                        className="tracking-tight leading-tight mb-6 animate-fade-in delay-100 px-4"
                        style={{
                            fontFamily: 'Satoshi, sans-serif',
                            fontSize: 'clamp(32px, 7vw, 72px)',
                            fontWeight: 900
                        }}
                    >
                        Smart Laundry <br className="hidden md:block" />
                        <span className="text-brand-orange italic">Equipment Solutions</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium animate-fade-in delay-200">
                        The digitalization of textile care has arrived. Harness the power of cloud analytics, RFID tracking, and predictive AI to transform your facility into a high-efficiency data-driven enterprise.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-300">
                        <button onClick={() => router.push("/contact")} className="bg-brand-orange text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3">
                            Request Demo <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Smart Solutions", href: websiteUrl }]} />
            </div>

            <StickyMobileTOC sections={sections} />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-12 gap-6 lg:gap-12">
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} orientation="vertical" />
                        </div>
                    </aside>

                    <article className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="digital-transformation" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">
                                The Digital Transformation of Textile Care</h2>
                            <p>
                                The industrial laundry industry is currently undergoing its most significant evolution since the invention of the continuous batch washer. This evolution is the digital transformation—a shift from mechanical automation to digital intelligence. In a smart laundry facility, machines are no longer isolated islands of activity; they are nodes in a connected data network. At Sunshine Equipments, we are leading this charge, helping our clients move from "running a laundry" to "managing a digital textile ecosystem."
                            </p>
                            <p>
                                Digital transformation is about more than just adding touchscreens to machines. It is about capturing the massive amount of data generated byEvery wash cycle, every heating element, and every motor rotation, and turning that data into actionable insights. When you know exactly how many kilograms of towels were washed at what temperature using how much detergent, you gain absolute control over your operational costs. This visibility is the secret to reaching the next level of profitability.
                            </p>
                            <p>
                                For facility managers, the digital shift means the end of manual logging and guesswork. No more clipboard-based reports that are outdated by the time they reach your desk. A smart facility provides a live "pulse" of the operation, accessible from anywhere in the world on a smartphone or tablet. This allows for real-time decision-making, such as reassigning staff to the folding section during a surprise peak or identifying a water leak the moment it starts.
                            </p>
                            <p>
                                We also see digital transformation as a way to solve the industry&apos;s chronic labor challenges. Smart machines guide operators through correct procedures, reducing the need for intensive technical training. They also automate the most tedious tasks—like counting inventory or tracking machine hours—allowing your human talent to focus on quality control and guest satisfaction. Technology doesn&apos;t replace people; it empowers them to work at a higher level.
                            </p>
                            <p>
                                Finally, the digital era brings a new level of accountability. In sectors like healthcare, the ability to provide a digital "birth-to-death" record for every piece of linen—proving it was washed at the correct temperature for the correct time—is becoming a regulatory requirement. Sunshine&apos;s smart solutions provide this level of audit-ready data automatically, giving you total peace of mind and protecting your facility from compliance risks.
                            </p>
                        </section>

                        <section id="iot-connectivity" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">IoT Connectivity: Connecting the Fleet</h2>
                            <p>
                                The foundation of any smart system is connectivity. Our Internet of Things (IoT) architecture connects every washer, dryer, and ironer to a central cloud server. We use industrial-grade Wi-Fi and Zigbee mesh networks to ensure that even in the harsh, RF-noisy environment of a laundry room, the data stream remains unbroken. Connectivity is the bridge that allows your machines to "talk" to each other and to you.
                            </p>
                            <p>
                                By connecting the fleet, we enable "Swarm Intelligence." For example, if the main ironer is running behind, the smart dryers can automatically adjust their moisture settings to hold the linen in a slightly damp state, preventing them from becoming brittle while they wait for the next stage of processing. This synchronization of effort ensures a smooth flow of production, eliminating the "bottleneck" effect that kills efficiency in traditional facilities.
                            </p>
                            <p>
                                IoT connectivity also allows for the remote orchestration of utility demand. We can program your machines to cycle their heaters in a staggered pattern, preventing the massive "peak demand" spikes that lead to heavy surcharges from your electricity provider. By flattening the energy curve through digital coordination, we can save a large facility thousands of dollars in utility bills without changing a single wash cycle.
                            </p>
                        </section>

                        <section id="ai-predictive" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">AI-Driven Predictive Maintenance</h2>
                            <p>
                                Breakdowns are the single biggest enemy of laundry profitability. In a traditional facility, you fix things when they break. In a Sunshine smart facility, the machines tell you when they are *about* to break. We utilize Artificial Intelligence (AI) to analyze the vibration, temperature, and electrical signatures of every machine. Over time, the AI learns what a "perfectly healthy" machine sounds like and identifies the subtle deviations that precede a major failure.
                            </p>
                            <p>
                                For instance, a bearing that is starting to wear out will create a specific high-frequency vibration that is invisible to the operator. Our sensors catch this "mechanical sigh" and trigger a maintenance alert. This allows you to schedule a repair during a low-occupancy period, rather than facing a total machine shutdown during a peak holiday weekend. Predictive maintenance is the ultimate tool for achieving a 100% uptime guarantee in your facility.
                            </p>
                        </section>

                        <section id="rfid-tracking" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">RFID Linen Tracking: Eliminating Loss</h2>
                            <p>
                                Every year, the average hotel loses fifteen to twenty percent of its linen inventory to theft, misplacement, or accidental disposal. RFID (Radio Frequency Identification) tracking puts an end to this "hidden tax." By sewing a tiny, heat-resistant RFID chip into every towel and sheet, we can track the exact location of every piece of inventory in real-time. You know exactly what went in the washer, what came out of the ironer, and what returned to the floor.
                            </p>
                            <p>
                                RFID tracking also provides a "history" for every item. You can see how many times a specific sheet has been washed, helping you predict when it is reaching the end of its life and should be retired. This prevents guest dissatisfaction from "worn-out" linen while ensuring you get the maximum value from every textile investment. In the healthcare sector, RFID also ensures that "clean" and "dirty" linens never cross paths, maintaining the highest standards of hygiene.
                            </p>
                        </section>

                        <section id="pms-integration" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">PMS Integration: Seamless Operations</h2>
                            <p>
                                The laundry room does not exist in a vacuum; it is a service department for the rest of the hotel. Our smart software integrates directly with your Property Management System (PMS). When the front desk checks in a large group, the laundry room gets a real-time update on the required linen volumes. If the hotel is at full occupancy, the machines automatically prioritize the heavy-demand items like king-size sheets and bath towels.
                            </p>
                            <p>
                                This integration allows for "Just-In-Time" laundry. Instead of washing everything at once, the system manages the production flow to match the housekeepers&apos; needs. This reduces the amount of "par stock" you need to keep on the shelves, freeing up capital for other areas of the business. By connecting the laundry room to the guest cycle, we ensure that you are always ready for the next check-in without the waste of over-processing.
                            </p>
                        </section>

                        <section id="chemical-sync" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Automated Chemical Dosing Synchronization</h2>
                            <p>
                                Over-dosing chemicals is bad for the environment and bad for the linen. Under-dosing is bad for the guest. Our smart washers are perfectly synchronized with the chemical pumps. The machine communicates the exact weight and type of linen to the dosing system, which then delivers the precise milliliter of detergent, bleach, and softener required. This eliminates human error and ensures that every load is perfectly clean and perfectly safe.
                            </p>
                            <p>
                                We also track chemical consumption and provide automated low-level alerts. You will never run out of supplies mid-shift again. Furthermore, by analyzing the chemical-to-water ratio, we can identify anomalies that might indicate a clogged spray head or a failing pump. This "closed-loop" chemistry management is a core part of the digital excellence we bring to every facility. Precision in chemistry leads to longevity in textiles.
                            </p>
                        </section>

                        <section id="utility-dashboards" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Real-Time Utility Dashboards & Analytics</h2>
                            <p>
                                Data is only valuable if it is understandable. Our "Sunshine Clarity" dashboard transforms the thousands of raw data points from your machines into a series of clear, easy-to-read charts and KPIs. You can see your cost-per-kilogram for water, gas, and electricity in real-time. You can compare the efficiency of different shifts or even different facilities across a national group. Transparency is the first step toward optimization.
                            </p>
                            <p>
                                We also use these analytics to identify "utility leakage." If a machine is using ten percent more water than it should, the system identifies the anomaly and suggests a cause—such as a leaking drain valve or a sensor that is out of calibration. This level of automated auditing ensures that your facility maintains its high-efficiency rating for its entire life. In a smart facility, the machines perform their own utility audits twenty-four hours a day.
                            </p>
                        </section>

                        <section id="cloud-management" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Cloud-Based Facility Management</h2>
                            <p>
                                The cloud is the modern command center for the laundry industry. By hosting your data in the cloud, we ensure it is safe, backed up, and accessible from anywhere. A regional director in Delhi can view the performance of a resort in Goa with a single click. This centralized visibility allows for the standardization of best practices across an entire organization. If one facility finds a way to save energy on its wash cycles, those settings can be pushed to every other machine in the group instantly.
                            </p>
                        </section>

                        <section id="machine-learning" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Machine Learning for Cycle Optimization</h2>
                            <p>
                                Our systems don&apos;t just follow programs; they learn from them. We use Machine Learning (ML) to analyze thousands of wash cycles to find the perfect balance of mechanical action, time, and temperature for every fabric type. The more you use the machine, the "smarter" it gets. It identifies the shortest possible cycle that achieves the desired cleaning result, further reducing your utility costs and increasing your daily capacity.
                            </p>
                        </section>

                        <section id="remote-updates" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Remote Troubleshooting & Firmware</h2>
                            <p>
                                In the digital age, many mechanical problems are actually software issues. Our remote connectivity allows our senior engineers to "log in" to your machines from our central office. We can view motor loads, valve timings, and error logs in real-time. We can often resolve glitches or perform firmware updates without ever having to send a technician on-site. This "remote-first" service model reduces your costs and restores operation in minutes.
                            </p>
                        </section>

                        <section id="labor-management" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Data-Driven Labor Management</h2>
                            <p>
                                Labor is often the largest expense in a laundry department. Smart systems help you manage this expense through data. By tracking machine "uptime" and "idle time," you can identify shifts where the workflow is inefficient. You can see exactly how long it takes to fold a load of towels versus a load of sheets, allowing for more accurate staffing levels. We turn human activity into a measurable KPI, helping you build a more productive and balanced workforce.
                            </p>
                        </section>

                        <section id="smart-sorting" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Smart Sorting & Automated Handling</h2>
                            <p>
                                The future of the smart laundry room involves the automation of the "handoff" between machines. We are integrating our software with smart conveyor systems and automated sorting racks. These systems use the RFID data to automatically route the clean linen to the correct ironer or folder based on the material type. This reduces manual handling, prevents sorting errors, and speeds up the entire transit from washer to linen room.
                            </p>
                        </section>

                        <section id="data-security" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Security & Data Privacy in Industrial IoT</h2>
                            <p>
                                As we move more data to the cloud, security becomes paramount. Sunshine Equipments uses bank-level encryption for all data transmissions between your machine and our servers. We follow the principle of "privacy by design," ensuring that your operational metrics are accessible only to your authorized users. Our architecture is hardened against external threats, ensuring that your laundry room is as secure as it is smart.
                            </p>
                        </section>

                        <section id="smart-economics" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Economics of the Smart Laundry Room</h2>
                            <p>
                                The economics of a smart facility are driven by the elimination of "invisible waste." Invisible waste is the 10% extra detergent used, the 5 minutes of idle time between loads, and the 2% of linen lost to the trash every month. While these seem small, they add up to millions of rupees over a year in a large facility. A smart system makes this waste visible and manageable. It is the ultimate tool for lean operational excellence in the textile care industry.
                            </p>
                        </section>

                        <section id="future-robotics" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Future Trends: Robotics & Full Automation</h2>
                            <p>
                                We are currently piloting the next generation of smart laundry: robotic feeding and folding. These robots use machine vision to identify a piece of linen, pick it up, and feed it into the ironer with greater precision than any human. When paired with our AI-driven fleet management, we are moving toward the "Lights-Out Laundry Room"—a facility that can operate with minimal human intervention, providing the ultimate level of safety and efficiency.
                            </p>
                        </section>

                        <section id="roi-from-data" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">ROI: Turning Data into Profit</h2>
                            <p>
                                Calculating the ROI of a smart system involves more than just utility savings. We look at the reduction in linen replacement costs (via RFID), the reduction in emergency repair premiums (via AI maintenance), and the improvement in labor productivity. On average, our clients see their total operating costs drop by twenty-five percent. In a five-star hotel with a multi-crore laundry budget, this translates into massive annual profit growth. Data is the new currency of industrial success.
                            </p>
                        </section>

                        <section id="digital-training" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Staff Training for the Digital Age</h2>
                            <p>
                                We believe that any technology is only as good as the people who use it. We provide comprehensive "Digital Literacy" training for your laundry team. They learn how to use the dashboards, how to respond to the predictive alerts, and how to manage the RFID tracking system. We make the technology accessible and exciting, fostering a culture of innovation within your department. Empowering your staff with digital tools is the best way to secure your facility&apos;s future.
                            </p>
                        </section>

                        <section id="case-study-mumbai" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Case Study: Smart Hospital in Mumbai</h2>
                            <p>
                                A leading multispecialty hospital in Mumbai implemented our full Smart Intelligence Suite. In the first year, they reduced linen loss by forty percent using RFID tracking and cut their emergency repair costs to zero using AI predictive alerts. Most importantly, the digital "wash record" for their surgical linens allowed them to pass a major international safety audit with zero non-conformities. They proved that a smart laundry is a safer laundry.
                            </p>
                        </section>

                        <section id="connectivity-india" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Regional Connectivity Challenges in India</h2>
                            <p>
                                Operating a digital facility in India requires resilient technology. We have designed our IoT modules to be "offline-resilient." In areas with unstable internet, the machines continue to log data locally and sync with the cloud the moment the connection returns. We also offer dual-SIM cellular connectivity for facilities in remote locations or industrial zones where fiber internet is unavailable. We ensure your data flows, regardless of the local infrastructure challenges.
                            </p>
                        </section>

                        <section id="laundry-2030" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Building the Laundry Room of 2030</h2>
                            <p>
                                A smart laundry room is a future-proof investment. As technology continues to evolve, our software-upgradable machines ensure that your facility stays at the cutting edge without needing to replace the hardware. You are not just buying a machine; you are buying into a living digital platform that will continue to get smarter, faster, and more efficient every year. Join us in building the laundry room of 2030, today.
                            </p>
                        </section>

                        <section id="reviews" className="mb-20 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Industry Expert Reviews</h2>
                            <div className="grid gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;Sunshine&apos;s RFID tracking has completely eliminated our linen loss problem. We used to lose nearly 15% of our inventory every year; now that number is less than 1%. The system paid for itself in just six months. Incredible tech.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">RJ</span>
                                        General Manager, Taj Palaces & Resorts
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;The AI predictive maintenance is spooky in its accuracy. It alerted us to a failing motor bearing three weeks before it actually failed. We scheduled the repair on a slow Monday, avoiding what would have been a disaster for our weekend check-ins.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">SK</span>
                                        Chief Engineer, Hilton Worldwide
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;The dashboard provides a level of transparency I&apos;ve never seen in thirty years in the industry. I can see my exact cost-per-kg across four different properties from my phone. It has made me a much more effective regional manager.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">GM</span>
                                        Regional Director, Radisson Group
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;Integrating our laundry machines with our PMS has streamlined our entire housekeeping operation. We no longer have &apos;room ready&apos; delays because the laundry room knows exactly what we need in real time. Absolute game changer.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">FC</span>
                                        General Manager, Hyatt Regency Delhi
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;The digital wash records are a lifesaver for our medical-grade sanitization audits. We can prove every load met the safety parameters with a single report. It has significantly reduced our compliance workload and enhanced our reputation.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">EH</span>
                                        Operations Head, Max Healthcare Mumbai
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

                    <aside className="col-span-12 lg:col-span-3 mt-12 lg:mt-0">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-brand-blue text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Wifi size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Request Tech Demo</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Experience the future of laundry management with a live walkthrough of our digital suite.
                                </p>
                                <button onClick={() => router.push("/contact")} className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg">
                                    Book a Demo <TrendingUp size={20} />
                                </button>
                            </div>

                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Smart Modules</h3>
                                <nav className="space-y-4">
                                    <div className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Smartphone size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600">Mobile Management App</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <BarChart3 size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600">Advanced AI Analytics</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600">Secure Cloud Storage</span>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Digital Support Link</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Phone size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">24/7 Connectivity Link</p>
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
