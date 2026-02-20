"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, Star, ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp, Settings, Laptop, Cpu, MessageSquare, Headphones, FileText, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "Technical Support Mastery" },
    { id: "remote-monitoring", title: "Real-Time Remote Monitoring" },
    { id: "diagnostics", title: "Advanced System Diagnostics" },
    { id: "wiring-logic", title: "Electrical & Wiring Support" },
    { id: "software-integration", title: "Management Software Integration" },
    { id: "iot-ecosystem", title: "The IoT Laundry Ecosystem" },
    { id: "staff-proficiency", title: "Technical Staff Training" },
    { id: "marketing-strategy", title: "Digital Marketing for Success" },
    { id: "customer-acquisition", title: "Customer Acquisition Logic" },
    { id: "operational-efficiency", title: "Operational Workflow Audits" },
    { id: "hardware-upgrades", title: "Hardware Modification Services" },
    { id: "vfd-calibration", title: "VFD & Motor Calibration" },
    { id: "steam-management", title: "Steam Infrastructure Support" },
    { id: "preventative-consulting", title: "Preventative Strategy Consulting" },
    { id: "inventory-systems", title: "Electronic Inventory Management" },
    { id: "payment-solutions", title: "Contactless Payment Tech" },
    { id: "energy-audits", title: "Technical Energy Auditing" },
    { id: "global-standards", title: "Compliance & Industry Standards" },
    { id: "partnership-model", title: "Total Partnership Support" },
    { id: "faqs", title: "Technical FAQ Section" },
];

const faqs = [
    {
        question: "What does technical support for laundromat operations actually include?",
        answer: "Technical support encompasses everything from remote machine monitoring and software troubleshooting to physical electrical audits and staff training. We provide a complete backend support system for your laundry business."
    },
    {
        question: "How can remote monitoring improve my laundromat's profitability?",
        answer: "By tracking machine usage in real-time, you can identify peak hours and adjust your staffing or pricing accordingly. It also alerts you to machine errors instantly, reducing downtime and preventing lost revenue."
    },
    {
        question: "Do you provide electrical wiring diagrams for complex installations?",
        answer: "Yes, our technical team provides detailed, site-specific electrical and plumbing blueprints. This ensures that your facility is built to industrial safety standards and can handle the high loads of professional equipment."
    },
    {
        question: "Can your support team help with my laundromat's digital marketing?",
        answer: "Absolutely. We view ourselves as partners in your growth. We offer consulting on SEO, social media strategy, and local search optimization to ensure that customers in your area find your facility first."
    },
    {
        question: "What is the benefit of IoT-connected laundry machines?",
        answer: "IoT machines provide a wealth of data on utility consumption, cycle efficiency, and mechanical health. This allows for predictive maintenance, where we can spot a failing component before it actually breaks."
    },
    {
        question: "How do you handle software updates for my machines?",
        answer: "We perform both remote and on-site firmware updates. These updates ensure your machines is always running the latest efficiency algorithms and that your payment systems remain secure."
    },
    {
        question: "Do you offer technical training for my local staff?",
        answer: "Yes, we provide structured training modules for both operators and managers. This covers everything from basic troubleshooting and safety protocols to advanced system management."
    },
    {
        question: "What kind of payment systems can you integrate?",
        answer: "We support a wide range of solutions including RFID card proximity systems, mobile app payments, QR-based UPI payments, and traditional coin/token mechanisms, all integrated into a central dashboard."
    },
    {
        question: "How does technical support help with energy efficiency?",
        answer: "We conduct detailed audits of your machine settings, VFD parameters, and burner calibrations. Small technical adjustments can often result in significant reductions in your monthly utility spend."
    },
    {
        question: "Is technical support available 24/7?",
        answer: "Our remote monitoring systems run 24/7, and we provide round-the-clock technical phone support. For physical repairs, our mobile teams are available during extended business hours across Delhi NCR."
    }
];

const reviews = [
    {
        name: "Arjun Kapoor",
        role: "CEO, MetroWash Solutions",
        body: "Sunshine's technical support is the backbone of our operations. Their remote monitoring platform has saved us from dozens of potential machine failures. Truly state-of-the-art.",
        rating: 5
    },
    {
        name: "Sneha Reddy",
        role: "Operations Manager, BlueLagoon Laundry",
        body: "The electrical audits and wiring diagrams provided by Sunshine were invaluable during our facility expansion. They ensured total compliance and operational safety.",
        rating: 5
    },
    {
        name: "Rahul Bose",
        role: "Owner, QuickSpin Laundromat",
        body: "Finally a company that understands the digital side of laundry. Their help with our marketing and customer acquisition strategy has tripled our walk-ins in six months.",
        rating: 5
    },
    {
        name: "Divya Nair",
        role: "Technical Lead, Urban Clean",
        body: "The IoT integration has been a game changer. Being able to track utility usage per cycle allow us to price our services much more accurately. Scientific laundry at its best.",
        rating: 5
    },
    {
        name: "Manish Sharma",
        role: "Property Consultant",
        body: "I recommend Sunshine for their comprehensive technical approach. They don't just sell machines; they build intelligent business ecosystems. Their support is unparalleled.",
        rating: 5
    },
    {
        name: "Anjali Gupta",
        role: "Director, GreenWash India",
        body: "Their VFD calibration and energy auditing service reduced our electricity bill by 28 percent. The technical expertise they bring to the table is simply unmatched in India.",
        rating: 5
    },
    {
        name: "Kartik Aryan",
        role: "Owner, SpinCycle Delhi",
        body: "Great support with our software integration. Their team worked seamlessly with our payment provider to create a flawless user experience for our customers. 5 stars.",
        rating: 5
    }
];

export default function TechSupportPage() {
    const router = useRouter();
    const websiteUrl = "https://sunshine-laundry.com/technical-support-for-laundromat-operations";
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
                "name": "Technical Support for Laundromat Operations | System Experts",
                "description": "Comprehensive technical support for modern laundromats. Includes remote monitoring, system diagnostics, electrical planning, and operational consulting.",
                "breadcrumb": { "@id": websiteUrl + "#breadcrumb" }
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunshine-laundry.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Technical Support", "item": websiteUrl }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "headline": "Mastering Laundromat Operations: The Technical Support Blueprint",
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "publisher": { "@id": "https://sunshine-laundry.com/#organization" },
                "image": "https://sunshine-laundry.com/hero-bg.jpg"
            },
            {
                "@type": "Product",
                "@id": websiteUrl + "#product",
                "name": "Laundromat Technical Support Solutions",
                "description": "Enterprise-grade technical support and consulting for laundry businesses. Features remote management, software integration, and hardware optimization.",
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
                <div className="absolute inset-0 opacity-15">
                    <Image src="/hero-bg.jpg" alt="Technical Support" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight px-4 text-white">
                        Advanced Technical Support <br className="hidden md:block" />
                        <span className="text-brand-orange italic">for Intelligent Laundromats</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium">
                        Scale your operations with our elite technical ecosystem. From IoT diagnostics to strategic marketing, we provide the backend intelligence your business demands.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-brand-orange text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            Speak to a System Expert <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Technical Support", href: "/technical-support-for-laundromat-operations" }]} />
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
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Technical Support: The Backbone of Modern Commercial Laundry</h2>
                            <p>
                                Running a successful laundromat in the 21st century involves much more than just a collection of washers and dryers. It requires a sophisticated technical infrastructure that ensures every machine is operating at its theoretical peak. Technical support at Sunshine Equipments is not just about fixing what is broken; it is about building an intelligent business ecosystem that minimizes risk and maximizes profit. We provide the expertise you need to navigate the complex intersection of mechanical engineering, digital software, and industrial logic.
                            </p>
                            <p>
                                Our approach is multi-dimension. We look at the electrical stability of your facility, the integrity of your plumbing, the efficiency of your digital payment systems, and the accuracy of your remote monitoring data. In a high-volume laundromat, a single technical bottleneck can reduce your daily throughput by 20 percent. Our goal is to identify and resolve these bottlenecks before they impact your bottom line. We bring international technical standards to the Indian market, ensuring your facility is as advanced as any in the world.
                            </p>
                            <p>
                                The modern laundry operator is a data manager. You have to track utility consumption, monitor machine health, manage customer payments, and analyze labor efficiency. Trying to do this manually is an exercise in futility. We provide the technical support to integrate these diverse systems into a single, intuitive dashboard. This digital empowerment allow you to spend less time working "in" your business and more time working "on" your business. We provide the clarity that leads to growth.
                            </p>
                            <p>
                                Furthermore, technical support is a pillar of safety. Industrial laundry equipment involves massive mechanical forces, high-pressure steam, and significant electrical loads. Ensuring that these systems are correctly installed, wired, and maintained and is a legal and ethical requirement. Our technical audits ensure that your facility is fully compliant with all safety standards, protecting your staff, your customers, and your investment.
                            </p>
                            <p>
                                In this definitive guide, we explore the various facets of technical support for laundromat operations. From the science of remote monitoring and IoT to the logistics of staff training and customer acquisition, we provide a blueprint for technical excellence. Whether you are a first-time investor or a seasoned operator with multiple locations, these insights will help you build a more resilient and profitable enterprise.
                            </p>
                        </section>

                        <section id="remote-monitoring" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Real-Time Remote Monitoring: Total Operational Visibility</h2>
                            <p>
                                Imagine being able to see exactly what is happening in your laundromat from anywhere in the world. Real-time remote monitoring is no longer a futuristic luxury; it is a standard tool for the modern operator. Our systems connect every machine in your facility to a central cloud server. This allows you to track cycle progress, monitor utility consumption per load, and receive instant alerts if a machine encounters an error. This level of visibility prevents the "silent failures" that can drain your profits for weeks without being noticed.
                            </p>
                            <p>
                                Remote monitoring also provides invaluable data on customer behavior. You can see which machines are the most popular, what times of day are your busiest, and even track the effectiveness of your pricing promotions. This data allow you to optimize your laundry's operations. For example, if you see that your 25kg washers are always busy while your 10kg units are often idle, you can adjust your marketing to encourage more bulk-washing or decide to replace the smaller units with higher-capacity models during your next upgrade.
                            </p>
                            <p>
                                Beyond the machines, our monitoring systems can track the health of your facility's infrastructure. We can monitor water pressure at the inlet, the temperature of the boiler, and even the humidity levels in the laundry room. Anomalies in this data are often the first signs of a larger technical issue. By catching these early, we allow you to perform preventative maintenance and avoid costly emergency repairs. Remote monitoring is the ultimate tool for proactive management.
                            </p>
                        </section>

                        <section id="diagnostics" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Advanced System Diagnostics: The Power of Data</h2>
                            <p>
                                Modern industrial laundry equipment is equipped with tens of sensors that track everything from drum vibration to motor temperature. When a machine fails, it is often not a simple mechanical break but a complex system error. Our advanced diagnostic support uses this sensor data to find the root cause of the problem. We don't just "part-swap" and hope for the best; we use signal-analysis to understand why the component failed in the first place.
                            </p>
                            <p>
                                For example, an error code for an "unbalanced load" might actually be caused by a failing shock absorber or a malfunctioning frequency inverter. Our diagnostic tools allow us to pinpoint the exact failure point without invasive mechanical disassembly. This speeds up the repair process significantly, ensuring your machines are back in action much faster. We also use these diagnostics to perform "health checks" on your equipment, identifying components that are nearing the end of their design life.
                            </p>
                            <p>
                                We maintain a historical diagnostic database for every machine we service. This "medical record" of your equipment allows us to spot trends and identify recurring issues. If a specific machine keeps encounter the same error, we look beyond the machine to the environment. Is the floor perfectly level? Is the power supply stable? Is the water pressure consistent? This holistic diagnostic approach is what makes Sunshine's technical support truly elite.
                            </p>
                        </section>

                        <section id="wiring-logic" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Electrical & Wiring Support: Powering Performance</h2>
                            <p>
                                A professional laundromat is a massive electrical consumer. High-torque motors, powerful heating elements, and sophisticated digital controllers all require a stable and robust power supply. Poor wiring is the primary cause of intermittent machine errors and premature motor failure. Our technical support team provides site-specific electrical blueprints that ensure your facility can handle the load. We specify the correct wire gauges, breaker types, and grounding protocols required for industrial equipment.
                            </p>
                            <p>
                                We pay special attention to "clean power." Industrial motors can generate electrical noise (harmonics) that can interfere with sensitive electronic controllers and payment systems. We integrate EMI/RFI filters and shielded cabling as standard parts of our installation support. We also recommend the use of surge protection and voltage stabilizers, which are essential in the Indian market where power fluctuations are common. Protecting your digital electronics from power anomalies is a key part of our technical mission.
                            </p>
                            <p>
                                During our periodic audits, we use thermal imaging to inspect your electrical panels. Heat is the first sign of a loose connection or an overloaded circuit. By spotting these "hot spots" early, we prevent electrical fires and unscheduled downtime. We also verify that all machines are properly "earth-bonded," ensuring total safety for your customers and staff. Wiring logic is not just about power; it is about reliability and safety.
                            </p>
                        </section>

                        <section id="software-integration" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Management Software Integration: The Digital Dashboard</h2>
                            <p>
                                Your laundry's logic should be accessible through a single, intuitive interface. We specialize in the horizontal integration of machine software, payment systems, and customer databases. This unified "Digital Dashboard" provides you with a 360-degree view of your operations. You can see your live revenue, your utility costs, your machine statuses, and your customer loyalty data all in one place. This integration removes the need for manual data entry and provides you with a "single source of truth" for your business.
                            </p>
                            <p>
                                We also support the integration of advanced features such as "Time-of-Use" pricing. This allow you to automatically adjust your machine rates based on the time of day, encouraging customers to use the facility during off-peak hours and maximizing your facility's utilization. We can also integrate "Guest Login" portals where customers can track their own laundry progress and receive notifications when their wash is done. These software flourishes are what create a premium experience in a competitive market.
                            </p>
                            <p>
                                Data security is at the core of our software support. We ensure that all payment data and customer information are stored and transmitted using industry-standard encryption protocols. We also provide secure, remote access for you, allowing you to manage your facility from your home or while traveling. Our software team provides regular updates and 24/7 troubleshooting to ensure your digital infrastructure is as reliable as your mechanical one.
                            </p>
                        </section>

                        <section id="iot-ecosystem" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The IoT Laundry Ecosystem</h2>
                            <p>
                                The Internet of Things (IoT) is transforming the way laundromats operate. It is about creating a network of intelligent devices that communicate with each other to optimize the entire facility. Our IoT support includes the integration of smart water meters, gas flow sensors, and humidity trackers. This data is fed into an AI engine that analyzes your operational efficiency. For example, the system might notice that your dryers are running 10 percent longer than they should based on the ambient humidity and suggest a change in the ventilation settings.
                            </p>
                            <p>
                                IoT also enables predictive maintenance. Instead of waiting for a machine to break, the system analyzes minor shifts in vibration patterns or motor torque and alerts us that a failure is likely within the next two weeks. This allow us to schedule a repair before the customer ever knows there was an issue. This "pre-emptive" support is the gold standard for high-volume facilities where uptime is everything. We are at the forefront of this technology in the Indian laundry sector.
                            </p>
                        </section>

                        <section id="staff-proficiency" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Technical Staff Training: Empowerment Through Knowledge</h2>
                            <p>
                                Even the most advanced technology is only as good as the people who manage it. We provide structured technical training for your on-site staff. This goes beyond simple machine operation; we teach them how to interpret the data on the dashboard, how to perform basic mechanical troubleshooting, and how to safely manage the facility's technical infrastructure. A proficient team is your best defense against operational downtime.
                            </p>
                            <p>
                                We offer modular training sessions for different roles. Operators are taught cycle-selection logic and safety protocols. Managers are trained on data analysis, financial auditing, and staff performance tracking. Maintenance engineers are given deep dives into the mechanical and electrical systems. We use a combination of classroom learning, hands-on workshops, and visual "cheat sheets" to ensure that the knowledge is retained and applied.
                            </p>
                        </section>

                        <section id="marketing-strategy" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Digital Marketing for Success: Visibility as a Service</h2>
                            <p>
                                A technically perfect laundromat is useless if no one knows it exists. As part of our comprehensive support, we offer consulting on digital marketing and local SEO. We help you optimize your Google Business Profile, manage your online reviews, and create content that establishes you as the premier laundry destination in your area. We look at the "digital foot traffic" in your neighborhood and provide strategies to capture a larger share of the local market.
                            </p>
                            <p>
                                We also help you design and implement loyalty programs that are integrated directly into your machine software. These programs use customer data to send personalized offers, encourage repeat visits, and turn occasional users into loyal fans. We understand that marketing is as much a technical challenge as it is a creative one. We provide the tools and the data to ensure your marketing budget is spent effectively.
                            </p>
                        </section>

                        <section id="customer-acquisition" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Customer Acquisition Logic</h2>
                            <p>
                                Identifying and attracting the right customers is a science. We analyze the demographics of your area—the ratio of students, working professionals, and families—to tailor your service offerings. For example, an area with many PG accommodations will benefit from higher-capacity machines and 24-hour access, whereas a residential family neighborhood might prefer pick-up and drop-off services.
                            </p>
                            <p>
                                We help you design the "Customer Journey" from the moment they see your sign or find you online to the moment they walk out with clean laundry. Every touchpoint—the ease of the payment app, the cleanliness of the folding tables, the responsiveness of the staff—should be technically optimized. We provide standard operating procedures (SOPs) that ensure a consistent, five-star experience for every customer, every time.
                            </p>
                        </section>

                        <section id="operational-efficiency" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Operational Workflow Audits</h2>
                            <p>
                                A bottleneck in your laundry is a bottleneck in your bank account. Our technical support includes regular workflow audits. We measure the time a customer spends in different areas of your facility and identify any friction points. Is the path from the washer to the dryer congested? Is the folding area too small during peak hours? We use this data to suggest layout modifications that speed up the customer experience and increase your facility's capacity.
                            </p>
                            <p>
                                We also audit your internal staff workflows. We analyze the time spent on sorting, loading, and cleaning to find opportunities for automation or better labor allocation. Small technical changes, such as the placement of high-speed extraction units or the introduction of automated folding tables, can significantly reduce your labor costs and improve staff morale. Efficiency is the ultimate result of technical mastery.
                            </p>
                        </section>

                        <section id="hardware-upgrades" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Hardware Modification Services</h2>
                            <p>
                                As your business grows, your equipment needs might change. We provide hardware modification services that allow you to upgrade your existing machines with new technology. This might include adding ozone injection ports, upgrading to IoT-connected controllers, or installing more efficient heating elements. These modifications allow you to benefit from new technology without the massive capital expense of a full machine replacement.
                            </p>
                            <p>
                                We also specialize in "ruggedizing" equipment for the Indian environment. This includes installing specialized dust filters for electronics, upgrading to high-temperature bearing seals, and adding extra anti-corrosion protection. By modifying the hardware to better withstand local conditions, we significantly extend its operational life and reduce the frequency of repairs. Customization is a key part of our technical DNA.
                            </p>
                        </section>

                        <section id="vfd-calibration" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">VFD & Motor Calibration</h2>
                            <p>
                                The motor is the heart of your machine, and the Frequency Inverter (VFD) is the brain that controls it. If the VFD is not correctly calibrated, the motor will run inefficiently, consume too much power, and wear out prematurely. Our technical support includes the fine-tuning of these parameters. we optimize the "ramp-up" and "ramp-down" speeds to provide soft starts and stops, which protects the mechanical drive system from shock loads.
                            </p>
                            <p>
                                We also calibrate the motor for different types of laundry. A heavy load of wet towels requires different torque settings than a light load of delicate silk sheets. By programming the VFD to provide exactly the amount of power needed, we minimize energy waste and ensure the most effective mechanical action for the wash. This technical precision is what separates industrial laundry from domestic solutions.
                            </p>
                        </section>

                        <section id="steam-management" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Steam Infrastructure Support</h2>
                            <p>
                                For large laundromats using steam for heating or ironing, the infrastructure is as important as the machines. We provide technical support for high-pressure steam boilers and piping systems. We check for steam leaks, calibrate pressure-reducing valves, and ensure your condensate recovery system is operating at peak efficiency. Steam is a highly effective heat transfer medium, but it requires specialized knowledge to manage safely and efficiently.
                            </p>
                            <p>
                                We also perform water-chemistry audits for your boiler. Hard water or improper chemical treatment can lead to scale and corrosion inside the boiler, which is dangerous and expensive. Our team provide the training and support to ensure your steam system is always providing "dry," high-quality steam to your machines, which is essential for achieving a perfect finish on your linens.
                            </p>
                        </section>

                        <section id="preventative-consulting" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Preventative Strategy Consulting</h2>
                            <p>
                                Maintenance shouldn't be a random event; it should be a strategy. We provide consulting to help you design a long-term preventative maintenance roadmap. We look at your facility's age, usage patterns, and future growth plans to suggest the most cost-effective maintenance schedule. This roadmap allow you to budget for maintenance as a fixed operational expense, rather than as a series of unpredictable crises.
                            </p>
                            <p>
                                We also provide a "Critical Spares Strategy." We identify the components that are most likely to fail and are essential for your operations. By stocking these parts locally at your facility, we can transform a potential two-day shutdown into a 30-minute repair. Strategic thinking is the hallmark of a wise business owner, and our consultants are here to provide that perspective.
                            </p>
                        </section>

                        <section id="inventory-systems" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Electronic Inventory Management</h2>
                            <p>
                                For laundromats that offer pickup and drop-off or commercial linen services, tracking every item is a massive logistical challenge. We provide technical support for RFID and barcoding systems that provide total visibility into your inventory. You can track an item from the moment it is collected to the moment it is returned, ensuring that nothing is ever lost or misplaced.
                            </p>
                            <p>
                                These systems also provide data on the "life cycle" of your linens. You can see how many times a sheet has been washed and when it is nearing the end of its aesthetic life. This data-driven approach allowed for more accurate budgeting and prevents the embarrassment of providing a guest with a worn-out item. Inventory management is about much more than counting; it is about quality control.
                            </p>
                        </section>

                        <section id="payment-solutions" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Contactless Payment Tech</h2>
                            <p>
                                The modern consumer rarely carries cash. We provide technical support to integrate the latest contactless payment solutions into your laundry machines. This includes mobile apps, QR-based UPI payments, and RFID proximity cards. These systems are not just more convenient for the customer; they are also more secure and easier to manage for you. No more dealing with heavy coins or the risk of theft from cash boxes.
                            </p>
                            <p>
                                Our payment solutions provide you with real-time financial reporting. You can see exactly how much revenue every machine is generating at any given moment. We also support the creation of "Stored Value" cards, which encourage customer loyalty and provide you with up-front revenue. A modern payment infrastructure is the key to attracting the higher-spending urban demographic.
                            </p>
                        </section>

                        <section id="energy-audits" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Technical Energy Auditing</h2>
                            <p>
                                Energy is likely your largest ongoing expense. Our technical support includes detailed energy audits where we measure the consumption of your facility under different load conditions. We look for "energy leaks"—machines that are heating unnecessarily, insulation that has failed, or motors that are drawing too much current. We then provide a list of technical modifications that will reduce your consumption and increase your profits.
                            </p>
                            <p>
                                We often find that simple technical changes, like the timing of the rinse cycles or the speed of the extraction, can result in 10 percent reductions in utility spend. We provide a projected ROI for every suggestion, allowing you to prioritize the improvements that will have the biggest impact on your bottom line. An energy audit is an investment that pays for itself over and over again.
                            </p>
                        </section>

                        <section id="global-standards" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Compliance & Industry Standards</h2>
                            <p>
                                The industrial laundry sector is subject to a complex web of environmental and safety regulations. We provide the technical support to ensure your facility is fully compliant with all national and local standards. This includes wastewater discharge regulations, air emissions standards, and industrial workplace safety laws. Staying compliant is essential for avoiding legal issues and protecting your brand reputation.
                            </p>
                            <p>
                                We also help you achieve voluntary certifications, such as "Green Key" or "ISO 9001," which establish you as a leader in quality and sustainability. These certifications are a powerful marketing tool, establishing trust with high-end commercial clients and eco-conscious consumers. Compliance is not just about rules; it is about excellence.
                            </p>
                        </section>

                        <section id="partnership-model" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Total Partnership Support</h2>
                            <p>
                                At Sunshine Equipments, we don't just view ourselves as a vendor; we are your technical partner. This means your success is our success. Our total support model covers every stage of your business's life—from the initial facility design and equipment selection to decades of ongoing maintenance and strategic consulting. We bring a long-term perspective to everything we do, ensuring that your technical foundation is strong enough to support your loftiest ambitions.
                            </p>
                            <p>
                                We believe that technical mastery is the ultimate competitive advantage. By providing you with the most advanced machines, the most intelligent software, and the most knowledgeable technical support, we empower you to lead your market. We invite you to experience the Sunshine difference—where engineering meets entrepreneurship.
                            </p>
                        </section>

                        <section id="faqs" className="mb-12 md:mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Technical FAQ Section</h2>
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
                                            <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">
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
                            <div className="bg-[#1A1A1A] text-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Cpu size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Free Tech Audit</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Get an expert evaluation of your facility's digital and electrical infrastructure.
                                </p>
                                <button
                                    onClick={() => router.push("/contact")}
                                    className="bg-[#00AEEF] text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-[#00AEEF] transition-all relative z-10 shadow-lg"
                                >
                                    Book Technical Audit <TrendingUp size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Expert Resources</h3>
                                <nav className="space-y-4">
                                    <Link href="/laundromat-washer-dryer-servicing" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Settings size={18} className="text-[#00AEEF]" />
                                            <span className="font-bold text-gray-600 group-hover:text-[#00AEEF] transition-colors">Equipment Servicing</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/energy-efficient-laundromat-solutions" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Droplets size={18} className="text-[#00AEEF]" />
                                            <span className="font-bold text-gray-600 group-hover:text-[#00AEEF] transition-colors">Efficiency Services</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/laundry-infrastructure-development" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Globe size={18} className="text-[#00AEEF]" />
                                            <span className="font-bold text-gray-600 group-hover:text-[#00AEEF] transition-colors">Infrastructure Dev</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-[#1A1A1A] mb-4 uppercase text-[10px] tracking-[0.2em]">National Support Center</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Phone size={18} className="text-[#00AEEF]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Technical Hotline</p>
                                            <a href="tel:+919711112950" className="text-sm font-bold text-gray-800 hover:text-[#00AEEF] tracking-tight">+91 97111 12950</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Mail size={18} className="text-[#00AEEF]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Official Support Email</p>
                                            <a href="mailto:info@sunshine-laundry.com" className="text-sm font-bold text-gray-800 hover:text-[#00AEEF] leading-none break-all">support@sunshine-laundry.com</a>
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
