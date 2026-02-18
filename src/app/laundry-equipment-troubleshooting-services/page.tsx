"use client";

import Image from "next/image";
import Link from "next/link";
import {
    CheckCircle2, Phone, Mail, ArrowRight, MessageSquare, Star,
    ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp,
    AlertCircle, Heart, Search, Activity, Wrench, LifeBuoy
} from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "art-and-science", title: "The Art and Science of Troubleshooting" },
    { id: "decoding-errors", title: "Decoding Error Patterns: Beyond the Screen" },
    { id: "speed-resolution", title: "The Speed of Resolution: Why 4 Hours Matters" },
    { id: "mechanical-diagnostics", title: "Mechanical Diagnostics: Listening to the Machine" },
    { id: "electronic-auditing", title: "Electronic Auditing: Probing the PLC" },
    { id: "thermal-imaging", title: "Thermal Imaging for Electrical Health" },
    { id: "hydraulic-pneumatic", title: "Hydraulic & Pneumatic Troubleshooting" },
    { id: "gas-ignition", title: "Gas Burner & Ignition System Repair" },
    { id: "vfd-calibration", title: "Variable Frequency Drive (VFD) Calibration" },
    { id: "water-drainage", title: "Water Inlet & Drainage Obstructions" },
    { id: "vibration-analysis", title: "Advanced Vibration Analysis & Balancing" },
    { id: "steam-integrity", title: "Steam Pressure & Trap Integrity" },
    { id: "human-factor", title: "Human Factor vs Machine Failure" },
    { id: "diagnostic-tools", title: "The Role of Original Diagnostic Tools" },
    { id: "case-study", title: "Case Study: Solving Intermittent Resets" },
    { id: "remote-diagnostics", title: "Remote Diagnostics & IoT Monitoring" },
    { id: "emergency-protocols", title: "Emergency Protocols & On-Site Safety" },
    { id: "staff-training", title: "Training Staff for First-Level Diagnostics" },
    { id: "regional-support", title: "Regional Support Network in India" },
    { id: "future-ai", title: "The Future of AI-Assisted Troubleshooting" },
    { id: "reviews", title: "Industry Expert Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
    {
        question: "How quickly can your troubleshooting team arrive on site?",
        answer: "For facilities in Delhi, Gurgaon, and the wider NCR, we guarantee a four hour technical response for all critical machine failures. Our regional service hubs ensure that a certified engineer is never more than a short drive away from your laundry room."
    },
    {
        question: "Do you troubleshoot non Sunshine brand equipment?",
        answer: "Yes. Our senior engineers have decades of experience with all major international laundry brands. We use universal diagnostic tools and have access to a global database of error codes and technical manuals to resolve issues across your entire fleet."
    },
    {
        question: "Can many error codes be resolved over the phone?",
        answer: "Approximately thirty percent of common error codes are related to simple sensor obstructions or minor software glitches that can be resolved through our remote assistance desk, saving you the cost of a site visit and restoring operation in minutes."
    },
    {
        question: "What is the most difficult laundry machine issue to diagnose?",
        answer: "Intermittent electrical failures are the most challenging. These are issues that appear and disappear randomly. We resolve these using long term data logging and thermal imaging to catch the specific moment and location of the failure."
    },
    {
        question: "Is troubleshooting included in a standard AMC contract?",
        answer: "Yes. All our Annual Maintenance Contracts include unlimited diagnostic visits. This encourages facility managers to call us the moment they notice a slight deviation in performance, rather than waiting for a total breakdown."
    },
    {
        question: "How do you diagnose a bearing failure before the machine stops?",
        answer: "We use acoustic vibration analysis to listen to the frequency of the bearing rotation. A failing bearing emits a distinct high frequency signature that our sensors can detect months before the noise becomes audible to the human ear."
    },
    {
        question: "What is the primary cause of dryer ignition failure?",
        answer: "Most ignition issues stem from carbon buildup on the flame sensor or a misaligned igniter spark gap. Regular cleaning of the burner assembly during our preventive visits virtually eliminates this frustrating problem."
    },
    {
        question: "Can you troubleshoot laundry equipment remotely via the internet?",
        answer: "Modern machines equipped with our IoT modules can be diagnosed in real time from our central command center. We can view motor loads, temperature curves, and valve timings, often identifying a part that is about to fail."
    },
    {
        question: "Why does my washer extract cycle keep getting cut short?",
        answer: "This is usually an out of balance safety trigger. It could be caused by failing suspension dampers, an uneven floor, or improper loading by staff. We calibrate the vibration sensors and inspect the physical suspension to find the root cause."
    },
    {
        question: "What safety precautions do your engineers take during troubleshooting?",
        answer: "All our technicians follow strict Lock Out Tag Out (LOTO) procedures, wear appropriate PPE, and use non conductive tools when working on electrical panels. Safety for our team and your staff is our absolute priority during any repair."
    }
];

export default function TroubleshootingPage() {
    const { openContactModal } = useModal();
    const websiteUrl = "https://sunshine-laundry.com/laundry-equipment-troubleshooting-services";
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
                "name": "Industrial Laundry Troubleshooting & Diagnostic Services | Sunshine",
                "description": "Professional troubleshooting for industrial washers, dryers, and ironers. Expert diagnostics, 4-hour response, and rapid repair for hospitality and healthcare."
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunshine-laundry.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Troubleshooting", "item": websiteUrl }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "headline": "Advanced Diagnostics: The Expert Guide to Laundry Equipment Troubleshooting",
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "datePublished": "2024-02-17",
                "image": "https://sunshine-laundry.com/troubleshooting-hero.jpg"
            },
            {
                "@type": "Product",
                "name": "Laundry Equipment Troubleshooting Services",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "184"
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
                    <Image src="/hero-bg.jpg" alt="Technical Troubleshooting" fill className="object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/0 to-brand-blue/100" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-xs md:text-sm font-bold mb-8 uppercase tracking-widest leading-none animate-fade-in">
                        <Wrench size={16} className="text-brand-orange" /> Expert Diagnostics & Rapid Repair
                    </div>
                    <h1
                        className="tracking-tight leading-tight mb-6 animate-fade-in delay-100 px-4"
                        style={{
                            fontFamily: 'Satoshi, sans-serif',
                            fontSize: 'clamp(32px, 7vw, 72px)',
                            fontWeight: 900
                        }}
                    >
                        Advanced Laundry <br className="hidden md:block" />
                        <span className="text-brand-orange italic">Troubleshooting Services</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium animate-fade-in delay-200">
                        Zero guesswork. Maximum uptime. Our certified engineers utilize state-of-the-art diagnostic tools to identify and resolve complex machine failures within hours, not days.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-300">
                        <button onClick={openContactModal} className="bg-brand-orange text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3">
                            Emergency Technical Support <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Troubleshooting Services", href: websiteUrl }]} />
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
                        <section id="art-and-science" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">
                                The Art and Science of Troubleshooting</h2>
                            <p>
                                Troubleshooting industrial laundry equipment is a unique discipline that sits at the intersection of mechanical engineering, electronic diagnostics, and operational intuition. In a high-volume facility, a machine failure is more than just a broken part; it is a disruption to the entire linen lifecycle. Professional troubleshooting is the process of rapidly peeling back the layers of a failure to find the root cause, rather than just treating the symptom.
                            </p>
                            <p>
                                At Sunshine Equipments, we believe that effective diagnostics start with a deep understanding of how each machine "breathes." A technician who knows the normal sound profile of a washer-extractor can identify a bearing seal failure long before a sensor triggers an alarm. This marriage of human experience and technical tools is what allows our team to solve issues that have baffled other service providers for weeks.
                            </p>
                            <p>
                                The science part of the equation involves a data-driven approach. We don&apos;t guess; we measure. We use Fluke-certified multimeters, infrared thermal cameras, and digital vibration analyzers to get a real-time picture of the machine&apos;s health. This precision allows us to identify the exact electronic component or mechanical tolerance that is out of specification. Troubleshooting is about narrowing the field of possibilities until only the truth remains.
                            </p>
                            <p>
                                Furthermore, troubleshooting is a race against the clock. In the hospitality and healthcare sectors, the "linen gap"—the time between dirty laundry and clean sheets—must be kept to an absolute minimum. Our troubleshooting protocols are designed for speed without sacrificing accuracy. We treat every service call as a critical mission, knowing that our success directly impacts your ability to serve your guests and patients.
                            </p>
                            <p>
                                Finally, we view troubleshooting as an opportunity for learning. Every failure tells a story about the machine&apos;s environment, the staff&apos;s habits, or the facility&apos;s utility quality. By analyzing these failure patterns, we can suggest changes to your preventive maintenance program that ensure the same issue never happens twice. This is how we move your facility from reactive repair to proactive operational excellence.
                            </p>
                        </section>

                        <section id="decoding-errors" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Decoding Error Patterns: Beyond the Screen</h2>
                            <p>
                                Modern industrial laundry machines are equipped with sophisticated PLC (Programmable Logic Controller) systems that display error codes when something goes wrong. However, these codes are often just a starting point. For example, a "Drain Error" code might mean a failed drain valve, but it could also mean a clogged lint filter, a failed water level sensor, or even an obstructed vent pipe 20 feet away from the machine.
                            </p>
                            <p>
                                Our decoding process involves looking at the sequence of events leading up to the error. Did it happen during the fill cycle or the extract cycle? Was there a specific sound or smell associated with the shutdown? By reconstructing the "crime scene" of the failure, we can often rule out fifty percent of the possible causes before we even open the machine. This contextual diagnostics is a hallmark of a senior Sunshine engineer.
                            </p>
                            <p>
                                We also maintain a massive internal database of "Ghost Codes"—errors that appear to be one thing but are actually caused by another. For instance, an intermittent motor error might actually be caused by a slightly loose neutral wire in the building&apos;s main electrical panel. Without this level of specialized knowledge, a technician might waste hours replacing perfectly good motors, only for the error to return the next day.
                            </p>
                            <p>
                                Effective decoding also requires understanding the machine&apos;s software logic. Sometimes an error is simply a matter of parameters being set too tight for the local environment. If the water pressure in Gurgaon drops during peak hours, a machine might trigger a "Fill Time Limit" error. We adjust the machine&apos;s logic to be resilient to these real-world factors while still maintaining its core safety and performance standards.
                            </p>
                            <p>
                                Finally, we provide your staff with simplified "Error Response Guides." These help them understand which codes can be cleared with a simple reset and which require an immediate call to our technical hotline. This empowers your team to handle minor glitches while ensuring that major mechanical issues are treated with the necessary professional urgency. Knowledge is the ultimate tool in minimizing downtime.
                            </p>
                        </section>

                        <section id="speed-resolution" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Speed of Resolution: Why 4 Hours Matters</h2>
                            <p>
                                In the industrial laundry business, speed is not a luxury; it is a requirement. Our "4-Hour Technical Response" guarantee is the gold standard in Delhi, Gurgaon, and the NCR. This isn&apos;t just about arriving on site; it is about having a certified engineer with the right tools and a van full of parts at your door before your morning linen mountain becomes an operational crisis.
                            </p>
                            <p>
                                We achieve this speed through a hub-and-spoke service model. Our engineers are strategically stationed near major industrial and hospitality corridors. When a distress call comes in, the closest engineer is dispatched immediately via our live tracking system. This minimizes the time lost to the notorious traffic of the National Capital Region, ensuring that your machine is being worked on while other service providers are still stuck in a traffic jam.
                            </p>
                            <p>
                                Speed also comes from our diagnostic technology. By using high-speed data loggers, we can see exactly what happened in the seconds before a machine tripped. This eliminates the "let&apos;s try this and see" approach that characterizes amateur repair work. We go straight to the problem, fix it, and perform a full test cycle to ensure the machine is 100% ready for the next shift. Accuracy at speed is our promise to you.
                            </p>
                        </section>

                        <section id="mechanical-diagnostics" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Mechanical Diagnostics: Listening to the Machine</h2>
                            <p>
                                Despite all the digital sensors, the human ear remains one of the most powerful diagnostic tools in a laundry room. A mechanical failure almost always announces itself with a change in sound. A rhythmic thud might indicate a failing suspension damper, while a high-pitched squeal points directly to a slipping or glazed drive belt. Our senior technicians have "machine ears"—the ability to hear a failure before the software even knows it is failing.
                            </p>
                            <p>
                                We transition these audible clues into physical measurements using digital stethoscopes and vibration meters. This allows us to quantify the severity of a bearing or gear failure. If the vibration frequency matches the motor&apos;s RPM, we know the issue is on the drive side. If it matches the drum speed, the issue is with the main bearing or the shock absorbers. This mechanical logic is how we achieve a 98% first-time fix rate.
                            </p>
                            <p>
                                We also perform extensive "play" tests. We manually check for any movement in the drum or the motor pulleys that shouldn&apos;t be there. Even a millimeter of unplanned movement can lead to a catastrophic failure under the high-G extraction of a modern washer. Mechanical diagnostics is about verifying the physical integrity of the machine, ensuring that it is safe to operate at the high speeds required for modern efficiency.
                            </p>
                        </section>

                        <section id="electronic-auditing" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Electronic Auditing: Probing the PLC</h2>
                            <p>
                                The Programmable Logic Controller (PLC) is the nervous system of your machine. When troubleshooting, we perform a deep audit of the PLC&apos;s inputs and outputs. We verify that every sensor is sending a clean, stable signal back to the brain. Often, a "failure" is actually a sensor that has becomes coated in laundry chemicals or affected by high humidity. Cleaning or recalibrating a sensor is a faster and cheaper solution than replacing a whole control board.
                            </p>
                            <p>
                                We also audit the power quality at the machine terminals. In many parts of India, voltage fluctuations and phase imbalances are common. These can cause the machine&apos;s internal protection circuits to trip. We use power quality analyzers to show you if the problem is inside the machine or with your building&apos;s utility supply. This transparency saves you from unnecessary repair bills and allows you to hold your utility provider accountable.
                            </p>
                        </section>

                        <section id="thermal-imaging" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Thermal Imaging for Electrical Health</h2>
                            <p>
                                Electricity creates heat, and where there is resistance, there is excessive heat. We use infrared thermal imaging cameras to "see" the health of your machine&apos;s electrical system. A loose connection in a contactor or a failing relay will show up as a bright white "hot spot" on our camera screen. This allows us to find and fix a loose wire before it melts the insulation and causes a fire or a total electronic blackout.
                            </p>
                            <p>
                                Thermal imaging is also used to check the health of motors and bearings. A bearing that is running five degrees hotter than its neighbor is a bearing that is starting to fail. This non-invasive diagnostic technique allows us to perform "predictive troubleshooting"—fixing things that haven&apos;t broken yet but definitely will within the next few weeks. It is the ultimate expression of the "zero downtime" philosophy that Sunshine Equipments champions.
                            </p>
                        </section>

                        <section id="hydraulic-pneumatic" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Hydraulic & Pneumatic Troubleshooting</h2>
                            <p>
                                Many large-scale laundry machines, especially ironers and tunnel washers, rely on pneumatic or hydraulic systems for pressure and movement. Troubleshooting these systems requires a different set of tools and skills. We check for "ghost leaks"—pressure drops that happen overnight or during standby. This often points to a failing internal seal in a cylinder or a slow-leaking solenoid valve.
                            </p>
                            <p>
                                Air quality is a major factor in pneumatic longevity. If your facility&apos;s compressed air contains water or oil (common in poorly maintained compressors), it will rot the internal seals of your laundry machines. We audit your air supply as part of our troubleshooting process, suggesting the installation of better dryers or filters to protect your equipment. A machine fix is never complete until the environmental cause of the failure is addressed.
                            </p>
                        </section>

                        <section id="gas-ignition" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Gas Burner & Ignition System Repair</h2>
                            <p>
                                Dryer troubleshooting often centers on the burner assembly. A "no heat" error is the most common dryer complaint, and it can be caused by anything from a faulty ignition cable to a blocked exhaust vent. We perform a full "gas train" audit, checking the gas pressure, the air-to-fuel ratio, and the integrity of the safety thermostats. We ensure that the burner ignites smoothly and burns with a efficient, blue flame.
                            </p>
                            <p>
                                We also troubleshoot the dryer&apos;s airflow sensors. Modern dryers are designed to shut down the gas immediately if they detect a drop in exhaust airflow. This prevents the machine from becoming an oven and catching fire. If your dryer is struggling to reach temperature, we look beyond the burner and check the blower fan and ducting for obstructions. Troubleshooting a dryer is about balancing thermal energy with safe airflow.
                            </p>
                        </section>

                        <section id="vfd-calibration" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Variable Frequency Drive (VFD) Calibration</h2>
                            <p>
                                The VFD controls the speed and torque of the main motor. It is a highly complex piece of power electronics. Troubleshooting a VFD requires specialized digital tools that can read the pulse-width modulation (PWM) signals. If your machine is taking too long to reach extract speed, or if it is "shaking" during the ramp-up, the VFD timing is likely off. We recalibrate the drive parameters to match the machine&apos;s current mechanical state.
                            </p>
                            <p>
                                We also check for "electrical noise" generated by the VFD. If not properly shielded, this noise can interfere with other sensors in the machine, causing strange, intermittent errors. We ensure that all grounding cables and shielding are in place, creating a silent and stable electronic environment. Calibrating a VFD is one of the most technical tasks in laundry repair, and it is where our engineers truly shine compared to generalist electricians.
                            </p>
                        </section>

                        <section id="water-drainage" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Water Inlet & Drainage Obstructions</h2>
                            <p>
                                A machine that cannot fill or drain quickly is a machine that is losing you money every hour. We troubleshoot the entire water path, from the building&apos;s main pipes to the internal spray nozzles. Often, a slow fill is caused by mineral buildup in the machine&apos;s inlet filters. On the drainage side, we frequently find coins, hairpins, and even stray socks that have bypassed the lint trap and are obstructing the main drain valve.
                            </p>
                            <p>
                                We use snake cameras to inspect the internal plumbing of the machine without having to take everything apart. This allows us to locate an obstruction in minutes and remove it with surgical precision. We also test the drain valve&apos;s opening time; if the motor is weak, the valve might only be opening halfway, leading to "drain time exceeded" errors that kill your productivity. Efficiency in fluid management is the key to washer throughput.
                            </p>
                        </section>

                        <section id="vibration-analysis" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Advanced Vibration Analysis & Balancing</h2>
                            <p>
                                Excessive vibration is the enemy of any high-speed machine. We troubleshoot vibration issues using digital accelerometers that provide a "signature" of the machine&apos;s movement. This allows us to distinguish between an unbalanced load (staff error), failed shock absorbers (wear and tear), or a bent drive shaft (catastrophic damage). We can even detect if the machine&apos;s foundation is cracked or if the floor anchors have come loose.
                            </p>
                            <p>
                                Balancing is a precision job. If the drum is out of balance, it will create thousands of kilograms of centrifugal force that can eventually rip the machine out of the floor. We recalibrate the "Out of Balance" (OOB) sensors to ensure they are sensitive enough to protect the machine but not so sensitive that they cause unnecessary cycle aborts. Mastering the physics of vibration is what keeps our machines running silently and safely in luxury hotel basements.
                            </p>
                        </section>

                        <section id="steam-integrity" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Steam Pressure & Trap Integrity</h2>
                            <p>
                                Steam is a powerful and dangerous energy source. Troubleshooting steam systems requires specialized knowledge of thermodynamics and high-pressure fittings. We troubleshoot slow-heating ironers by checking the steam traps. If a trap is stuck closed, the machine stays cold. If it is stuck open, you are blowing expensive steam straight down the drain. We ensure that every joule of energy is used to dry and finish your linens, not wasted in the pipes.
                            </p>
                            <p>
                                We also check for "air binding" in the steam chambers. If air gets trapped in the ironer roll, it prevents the steam from heating the surface evenly. We troubleshoot these cold spots and install better air vents to ensure a perfectly uniform thermal profile across the entire ironing width. Steam integrity is about safety, efficiency, and the perfect finish on every guest sheet.
                            </p>
                        </section>

                        <section id="human-factor" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Human Factor vs Machine Failure</h2>
                            <p>
                                A surprising number of "machine failures" are actually the result of human error or improper operational procedures. During our troubleshooting, we often find that a machine is overheating because staff have blocked the air intakes with laundry carts, or a washer is failing to extract because it has been overloaded with double the rated weight. We don&apos;t just fix the machine; we provide a "debrief" to the facility manager to address these behavioral issues.
                            </p>
                            <p>
                                Troubleshooting is also about ergonomics. If operators find a control panel difficult to use, they might mash the buttons, eventually breaking the keypad. We analyze the interaction between the staff and the machine, suggesting better training or interface adjustments to reduce the risk of user-induced damage. A machine is part of a human system, and effective diagnostics must consider both the metal and the person operating it.
                            </p>
                        </section>

                        <section id="diagnostic-tools" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Role of Original Diagnostic Tools</h2>
                            <p>
                                You can&apos;t fix a modern machine with just a hammer and a wrench. Our engineers use proprietary diagnostic software that plugs directly into the machine&apos;s brain. This allow us to run "step-by-step" tests, firing individual valves and motors while watching the sensor responses in real time. This level of access is only available to certified Sunshine partners and is the only way to troubleshoot intermittent electronic glitches accurately.
                            </p>
                            <p>
                                We also use specialized tools like laser alignment kits for pulleys and ultrasonic leak detectors for steam and compressed air. These tools find problems that are invisible to the naked eye. An investment in diagnostic technology is an investment in your facility&apos;s uptime. When you hire Sunshine, you are hiring a technical team that brings a mobile laboratory to your laundry room door.
                            </p>
                        </section>

                        <section id="case-study" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Case Study: Solving Intermittent Resets</h2>
                            <p>
                                A major hotel in Gurgaon was experiencing random machine resets. Every few days, the main washer would just shut down in the middle of a cycle with no error code. Three other service companies had replaced the control board and the motor with no success. When the Sunshine troubleshooting team arrived, we installed a power quality logger for forty-eight hours.
                            </p>
                            <p>
                                We discovered that the hotel&apos;s main elevators were creating a massive voltage spike every time they started up. This spike was bypassing the machine&apos;s internal filters and "confusing" the PLC. By installing a dedicated line filter on the machine, the problem was solved permanently that same day. This case study illustrates why broad technical knowledge and data logging are essential for resolving modern industrial issues.
                            </p>
                        </section>

                        <section id="remote-diagnostics" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Remote Diagnostics & IoT Monitoring</h2>
                            <p>
                                The fastest way to troubleshoot a machine is to never have to travel to it in the first place. Our IoT-enabled machines transmit thousands of data points every hour to our central monitoring center. When a deviation is detected, our engineers can log in remotely to see exactly what the machine is seeing. We can often talk your on-site maintenance person through a simple fix, such as cleaning a sensor or resetting a breaker, restoring operation in seconds.
                            </p>
                            <p>
                                If an on-site visit is still required, the remote diagnostic allows us to know exactly which part has failed before the engineer even leaves the warehouse. This ensures that we arrive with the correct spare part in hand, achieving a "one-visit fix" every time. IoT technology has transformed troubleshooting from a reactive chase into a precision strike. We are the only provider in India offering this level of digital service at scale.
                            </p>
                        </section>

                        <section id="emergency-protocols" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Emergency Protocols & On-Site Safety</h2>
                            <p>
                                Troubleshooting often happens when the machine is in an "unknown" state, which makes it a high-risk activity. Our engineers follow strict safety protocols, including the use of Lock-Out Tag-Out (LOTO) to ensure the machine cannot be accidentally started while they are working on internal parts. We also perform a hazardous energy audit before every repair, checking for stored heat, air pressure, or electrical charge.
                            </p>
                            <p>
                                We also prioritize the safety of your facility. If a machine is found to be in a dangerous condition—such as a leaking gas line or a cracked drum—we have the authority to "red-tag" the machine, rendering it inoperable until the safety issue is fully resolved. We do not cut corners on safety, and we provide you with a detailed report on any hazardous conditions found. Protecting your people is the most important part of any service call.
                            </p>
                        </section>

                        <section id="staff-training" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Training Staff for First-Level Diagnostics</h2>
                            <p>
                                The first five minutes after a machine failure are the most critical. We provide your laundry team with "First Responder" training. This doesn&apos;t teach them how to fix the machine, but it teaches them how to gather the right data. They learn how to identify which stage of the cycle failed, what the error code says, and what physical signs (leaks, smells) were present. This information, when relayed to our hotline, allows us to diagnose the problem much faster.
                            </p>
                        </section>

                        <section id="regional-support" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Regional Support Network in India</h2>
                            <p>
                                Our troubleshooting network is built to handle the unique geography of India. With local teams in Delhi, Noida, Gurgaon, Mumbai, and Bengaluru, we provide a density of expertise that no other provider can match. This local presence means that we don&apos;t just know machines; we know the local water chemistry, the local power grid quirks, and the local humidity factors. This contextual expertise is what makes our troubleshooting so effective across the subcontinent.
                            </p>
                        </section>

                        <section id="future-ai" className="mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Future of AI-Assisted Troubleshooting</h2>
                            <p>
                                We are currently piloting an AI "Diagnostic Assistant" that uses machine learning to analyze thousands of previous service calls. By inputting the current symptoms of a machine, our engineers get a ranked list of the most likely causes and a step-by-step verification plan. This AI doesn&apos;t replace our engineers; it gives them the collective knowledge of thirty years of troubleshooting in an instant. This is the next level of uptime security for our clients.
                            </p>
                        </section>

                        <section id="reviews" className="mb-20 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Industry Expert Reviews</h2>
                            <div className="grid gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;The speed of Sunshine&apos;s troubleshooting team is legendary. We had a tunnel washer failure at 5 AM, and by 9 AM their senior engineer had identified a faulty VFD and replaced it. They saved us from an absolute linen disaster during a peak conference week.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">RJ</span>
                                        General Manager, Radisson Group India
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;Their use of thermal imaging and vibration analysis is light-years ahead of the competition. They found a loose electrical connection that would have eventually caused a major fire. They don&apos;t just fix things; they prevent disasters.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">SK</span>
                                        Chief Engineer, Taj Resorts & Palaces
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;The remote diagnostic capability of the Sunshine IoT module has been a game-changer. Thirty percent of our minor glitches are now resolved via a 5-minute phone call. It is like having a senior engineer living inside the machine.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">GM</span>
                                        General Manager, Apollo Healthcare Group
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;Their first-time-fix rate is exceptional. Because they diagnose the problem remotely before arriving, they always have the right parts in the van. No more waiting days for &apos;shipping from the warehouse.&apos; Highly professional.&quot;</p>
                                    <p className="mt-6 font-bold text-brand-blue flex items-center gap-2">
                                        <span className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white text-xs">FC</span>
                                        Financial Controller, Hyatt Regency Delhi
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="flex gap-1 text-brand-orange mb-4">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                                    </div>
                                    <p className="italic text-gray-700 text-lg">&quot;Safety is often overlooked in emergency repairs, but Sunshine engineers are incredibly disciplined. Their LOTO procedures and thorough testing before restart give me complete peace of mind that my staff are safe.&quot;</p>
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

                    <aside className="col-span-12 lg:col-span-3 mt-12 lg:mt-0">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-brand-blue text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <LifeBuoy size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Emergency Support</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Critical machine failure? Get a certified engineer on site within 4 hours.
                                </p>
                                <button onClick={openContactModal} className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg">
                                    Request Emergency Tech <TrendingUp size={20} />
                                </button>
                            </div>

                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Diagnostic Capability</h3>
                                <nav className="space-y-4">
                                    <div className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Search size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600">Thermal Imaging Audits</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Activity size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600">Vibration Analysis</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600">LOTO Safety Certified</span>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">National Diagnostic Hotline</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Phone size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Direct Technical Link</p>
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
