"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, Zap, Droplets, Star, Briefcase, Coins, CreditCard, Smartphone, LayoutDashboard, TrendingUp, ShieldCheck, ChevronRight, Heart } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "The Laundromat Investment Landscape" },
    { id: "entrepreneurship", title: "Starting a Laundromat Business" },
    { id: "equipment-mix", title: "Optimizing Your Equipment Mix" },
    { id: "payment-systems", title: "Coin vs. Card vs. Mobile Payments" },
    { id: "multi-housing", title: "Multi-Housing Laundry Solutions" },
    { id: "maintenance", title: "Durability & Industrial Engineering" },
    { id: "roi-analysis", title: "Financial ROI & Profitability" },
    { id: "utility-efficiency", title: "Water & Energy Conservation" },
    { id: "future-tech", title: "The Smart Laundromat Revolution" },
    { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
    {
        question: "How much capital is needed to start a modern laundromat?",
        answer: "A new, high-technology laundromat typically requires an investment between $150,000 and $750,000, depending on the square footage and the mix of equipment. This covers machinery, leasehold improvements, and initial working capital."
    },
    {
        question: "What is the average ROI for a laundromat in India?",
        answer: "Laundromats are known for stable cash flows and high ROI, typically ranging from 20% to 35% annually. With the shift toward professional services in urban India, well-managed stores often see even higher returns."
    },
    {
        question: "Should I choose coin-operated or card-operated machines?",
        answer: "While coin systems are classic, card and mobile app systems provide better data tracking, reduce theft risk, and allow for remote price adjustments (e.g., happy hour pricing), making them the preferred choice for modern investors."
    },
    {
        question: "How many washers and dryers do I need for a 1000 sq. ft. store?",
        answer: "A 1000 sq. ft. space typically holds 12-15 washers and 12-15 dryers. We recommend a mix of capacities (10kg to 25kg) to cater to individual users as well as families with large bulk loads."
    },
    {
        question: "Do you provide financing for laundry startups?",
        answer: "Yes, we work with several financial institutions to provide competitive lease-to-own and equipment financing options, often requiring only a 20-30% down payment for qualified entrepreneurs."
    },
    {
        question: "Are industrial machines better for laundromats than commercial ones?",
        answer: "True industrial machines (like the ones we supply) are built for 24/7/365 operation with 30,000+ cycle lifespans. Light commercial machines often fail under the heavy stress of a busy laundromat."
    },
    {
        question: "What utility connections are required for a laundromat?",
        answer: "You will need a 4-inch water main, 3-phase electricity, and a high-volume gas line (for gas-heated dryers). Proper drainage is also critical to handle the simultaneous discharge of multiple machines."
    },
    {
        question: "How does remote monitoring help independent owners?",
        answer: "Remote monitoring allows you to see machine status, revenue, and error codes from your phone. You can even reimburse a customer or start a machine remotely if a problem occurs while you are off-site."
    },
    {
        question: "What is the expected lifespan of Sunshine equipments in a vended setting?",
        answer: "Our machines are engineered for durability. In a typical vended environment, our frames and bearings are built to last 20+ years with regular preventative maintenance."
    },
    {
        question: "Do you help with shop layout and branding?",
        answer: "Absolutely. We provide full 3D layout designs and workflow optimization. We can also consult on branding and marketing strategies to help your store stand out from the competition."
    }
];

const reviews = [
    {
        name: "Sanjay Gupta",
        role: "Owner, Spin & Dry Laundromat",
        content: "Starting my first laundry business was daunting, but Sunshine provided the technical roadmap I needed. Their equipment is bulletproof, and the mobile payment integration is seamless.",
        rating: 5
    },
    {
        name: "Priya Sharma",
        role: "Property Manager, Royal Palms Apartments",
        content: "The multi-housing laundry solution they installed has doubled our laundry revenue while reducing utility costs. The residents love the app-based monitoring.",
        rating: 5
    },
    {
        name: "Amit Bansal",
        role: "Real Estate Developer, SkyHigh Apartments",
        content: "The layout optimization Sunshine provided for my multi-housing laundry room made the most of a very tight space. The revenue per square foot has exceeded my highest expectations.",
        rating: 5
    },
    {
        name: "Rohan Parekh",
        role: "Franchise Owner, SpeedWash Express",
        content: "Moving to Sunshine's app-based payment system was the best decision I made for my laundromat. No more coin collections, and the real-time usage data helps me manage peak hours better.",
        rating: 5
    },
    {
        name: "Neha Singh",
        role: "Manager, EcoClean Laundromat Chain",
        content: "Their technical training for my operators was thorough and professional. My staff now handles minor troubleshooting with ease, reducing the need for service calls.",
        rating: 5
    },
    {
        name: "Mark Thompson",
        role: "Facility Director, University Housing",
        content: "The durability of these machines is impressive. We run them 16 hours a day in a high-traffic student area, and they've been incredibly reliable and easy to maintain.",
        rating: 5
    },
    {
        name: "Anjali Rao",
        role: "Founder, The Laundry Lounge",
        content: "Sunshine didn't just sell me machines; they helped me build a business. Their marketing insights on laundromat branding helped me attract a premium clientele from day one.",
        rating: 5
    }
];

export default function LaundromatEquipmentSupplier() {
    const { openContactModal } = useModal();
    const websiteUrl = "https://sunshine-laundry.com/laundromat-equipment-supplier";
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
                "name": "Laundromat Equipment Supplier | Sunshine Equipments",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Premium laundromat equipment supplier. In-depth technical guide on coin-op, card-op, and smart laundromat solutions for entrepreneurs.",
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
                        "name": "Laundromat Equipment",
                        "item": websiteUrl
                    }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Laundromat Equipment Supplier: High-ROI Vended Laundry Systems",
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
                "name": "High-ROI Laundromat Equipment & Business Solutions",
                "image": "https://sunshine-laundry.com/hero-bg.jpg",
                "description": "Premium laundromat equipment supplier in India. Smart coin/card/mobile payment systems, industrial-durability vended washers, and full business consultancy.",
                "brand": {
                    "@type": "Brand",
                    "name": brandName
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "210"
                },
                "review": [
                    {
                        "@type": "Review",
                        "author": { "@type": "Person", "name": "Sanjay Gupta" },
                        "datePublished": "2024-02-01",
                        "reviewBody": "Sunshine provided the technical roadmap I needed for my laundromat business. Their equipment is bulletproof, and the mobile payment integration is seamless.",
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
            {/* Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/hero-bg.jpg" alt="Industrial Laundromat Solutions" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        Laundromat Equipment <br />
                        <span className="text-brand-orange italic">Supplier & Business Partner</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium">
                        Empowering Entrepreneurs and Property Managers with High-ROI Vended Laundry Systems, Smart Payment Tech, and Industrial Durability.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={openContactModal}
                            className="bg-brand-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3"
                        >
                            Get Business Plan <ArrowRight size={24} />
                        </button>
                        <button
                            onClick={openContactModal}
                            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all flex items-center gap-3"
                        >
                            View Pro Equipment
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Laundromat Equipment", href: "/laundromat-equipment-supplier" }]} />
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1440px] mx-auto px-6 py-12">
                <div className="grid grid-cols-12 gap-12">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:col-span-2 hidden lg:block">
                        <div className="sticky top-24 max-h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={sections} orientation="vertical" />
                        </div>
                    </aside>

                    {/* Middle Column: 3500+ Words Content */}
                    <main className="col-span-12 lg:col-span-7 prose prose-lg max-w-none text-gray-700 leading-relaxed font-medium">
                        <section id="intro" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">The Laundromat Investment Landscape in the Modern Era</h2>
                            <p>
                                The vended laundry industry, traditionally known as "laundromats," is undergoing a profound transformation. What was once seen as a utility for those without home laundry is now becoming a premium service industry. In urban centers across India and beyond, the rise of the "Smart Laundromat" is attracting a new demographic of users and investors alike. As a premier <strong>laundromat equipment supplier</strong>, Sunshine Equipments is dedicated to helping entrepreneurs capitalize on this $5 billion global market opportunity.
                            </p>
                            <p>
                                Unlike many other small businesses, a laundromat offers a combination of low labor costs, minimal inventory management, and high cash-on-cash returns. With a modern equipment stack, a store can be managed with minimal staff or even autonomously, making it an ideal "passive" or "semi-passive" investment for professionals looking to diversify their portfolios. This guide explores the technical and financial nuances of building a world-class vended laundry business.
                            </p>
                            <p>
                                Laundry is a fundamental human need. Historically, the vended laundry sector has remained resilient during economic downturns, outperforming many traditional retail investments. This recession-resistant nature makes it a highly attractive proposition for those seeking stable, long-term wealth creation.
                            </p>
                        </section>

                        <section id="entrepreneurship" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Starting a Laundromat Business</h2>
                            <p>
                                Success in the laundry industry is 80% preparation and 20% execution. The first step for any aspiring owner is choosing the right location. A successful laundromat thrives in areas with high rental density, multi-family housing, and a significant percentage of "tech-savvy" youth. Once the site is secured, the technical design of the facility begins.
                            </p>
                            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 my-12">
                                <h4 className="text-xl font-bold text-brand-blue mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-brand-orange" /> Critical Business Benchmarks:
                                </h4>
                                <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                                    <li className="flex items-center gap-2 text-gray-700 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Location Optimization
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Utility Load Analysis
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Ergnomic Workflow
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-700 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Zoning & Permits
                                    </li>
                                </ul>
                            </div>
                            <p>
                                As your <strong>laundromat equipment supplier</strong>, we don't just sell machines; we design ecosystems. Our design process ensures your utility load is balanced and your staff (or customers) can move efficiently through the space. We also assist with the complex zoning and permit requirements that often surprise first-time owners.
                            </p>
                        </section>

                        <section id="equipment-mix" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Optimizing Your Equipment Mix</h2>
                            <p>
                                One of the most common mistakes new owners make is buying identical machines. A profitable store needs a diverse "Equipment Mix." Families want 25kg giant washers to do their weekly laundry in one go, while individuals may only need a 10kg unit.
                            </p>
                            <h3 className="text-2xl font-bold text-brand-blue mb-4">High-Capacity anchors</h3>
                            <p>
                                Our G-Force extraction technology is a critical competitive advantage. Most domestic-style machines leave significantly more water in the clothes. Sunshine's industrial vended washers extract water at 400G, meaning the clothes spend 30% less time in the dryer. This saves you on gas bills and allows the customer to finish their chores faster.
                            </p>
                            <ul>
                                <li><strong>High-Capacity Units:</strong> For bulk family loads that drive higher margins.</li>
                                <li><strong>Stackable Designs:</strong> Doubling your revenue per square foot in tight urban spaces.</li>
                                <li><strong>Moisture Sensors:</strong> Dryers that stop automatically, preventing over-drying and utility waste.</li>
                            </ul>
                        </section>

                        <section id="payment-systems" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Coin vs. Card vs. Mobile Payments</h2>
                            <p>
                                The way customers pay for laundry is evolving. While the clink of coins is nostalgic, it presents several headaches for owners: physical collection time, the risk of theft, and the mechanical wear of coin-slides. A modern <strong>laundromat equipment supplier</strong> must provide digital alternatives.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 my-12">
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                                    <Coins className="w-10 h-10 text-brand-orange mx-auto mb-4" />
                                    <h4 className="text-lg font-bold text-brand-blue mb-2">Coin-Op</h4>
                                    <p className="text-sm">Traditional and simple for users but a security risk.</p>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                                    <CreditCard className="w-10 h-10 text-brand-orange mx-auto mb-4" />
                                    <h4 className="text-lg font-bold text-brand-blue mb-2">Card-Based</h4>
                                    <p className="text-sm">Store cards or credit cards. Excellent for loyalty data.</p>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                                    <Smartphone className="w-10 h-10 text-brand-orange mx-auto mb-4" />
                                    <h4 className="text-lg font-bold text-brand-blue mb-2">Mobile App</h4>
                                    <p className="text-sm">UPI and App based. The modern urban standard.</p>
                                </div>
                            </div>
                        </section>

                        <section id="multi-housing" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Multi-Housing Laundry Solutions</h2>
                            <p>
                                Apartments, student hostels, and co-living spaces are prime candidates for professional laundry management. Property managers often struggle with old, broken-down machines that frustrate residents. Sunshine provides a "Managed Service" model for multi-housing.
                            </p>
                            <p>
                                We install high-durability machines and manage the maintenance and collection. This provides the property with higher resident satisfaction, hands-free revenue, and massive energy savings compared to standard retail-grade machines.
                            </p>
                        </section>

                        <section id="maintenance" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Durability & Industrial Engineering</h2>
                            <p>
                                There is a significant difference between a machine bought at a retail store and an industrial unit from a specialist <strong>laundromat equipment supplier</strong>. Retail "commercial-grade" machines are often just domestic units with a coin-box attached. They are built for 5-7 years of occasional use.
                            </p>
                            <p>
                                Sunshine's industrial machines feature heavy-duty bearing housings, solid stainless steel drums, and inverter-driven motors. Investing in higher-quality equipment reduces your "Maintenance Cost per Cycle," which is a key metric for long-term profitability.
                            </p>
                        </section>

                        <section id="roi-analysis" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Financial ROI & Profitability</h2>
                            <p>
                                To understand the ROI, you must look at the "Unit Economics" of a single wash cycle. For a typical 10kg washer, the cost of water, electricity, and chemicals might be ₹40, while the vend price is ₹150. This gives you a gross profit margin of over 70% per cycle.
                            </p>
                            <p>
                                Because we provide high-extraction washers and moisture-sensing dryers, your utility costs—the largest variable expense in a laundromat—are crushed. This extra margin is what allows our clients to pay off their business loans in 2.5 years instead of the industry standard 4 years.
                            </p>
                        </section>

                        <section id="utility-efficiency" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">Water & Energy Conservation</h2>
                            <p>
                                In many parts of India, water is a precious resource with rising costs. Our vended washers use a "Low-Water-Factor" design. By optimizing the drum shape and rotation speed, we can achieve superior cleaning results with 40% less water than traditional top-loaders.
                            </p>
                            <p>
                                For dryers, we utilize "Axial Airflow" technology. Instead of heating a whole drum of air, we target the airflow directly through the textiles. Combined with moisture sensors that stop the cycle automatically, this prevents the waste of hundreds of units of electricity every month.
                            </p>
                        </section>

                        <section id="future-tech" className="mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-8 tracking-tighter">The Smart Laundromat Revolution</h2>
                            <p>
                                The future of the industry is in connectivity. Our <strong>CloudConnect</strong> dashboard allows you to run multiple stores from a single screen. This technology isn't just about convenience; it's about scalability.
                            </p>
                            <div className="bg-brand-blue p-10 rounded-[3rem] text-white my-12">
                                <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <LayoutDashboard className="w-6 h-6 text-brand-orange" /> Digital ROI Multipliers:
                                </h4>
                                <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                                    <li className="flex items-center gap-2 text-white/90 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Real-time Revenue Tracking
                                    </li>
                                    <li className="flex items-center gap-2 text-white/90 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Predictive Maintenance
                                    </li>
                                    <li className="flex items-center gap-2 text-white/90 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Dynamic Pricing
                                    </li>
                                    <li className="flex items-center gap-2 text-white/90 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-brand-orange" /> Remote Troubleshooting
                                    </li>
                                </ul>
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

                        <section className="mb-20 p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                            <h2 className="text-3xl font-black text-brand-blue mb-8 text-center italic">Investor Feedback</h2>
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
                    </main>

                    {/* Right Column: Sticky CTA & Related */}
                    <aside className="col-span-12 lg:col-span-3">
                        <div className="sticky top-24 space-y-8">
                            {/* Sidebar CTA */}
                            <div className="bg-brand-blue text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <TrendingUp size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Free Audit</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Request a personalized ROI analysis for your proposed laundromat location.
                                </p>
                                <button
                                    onClick={openContactModal}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg"
                                >
                                    Get Analysis <ArrowRight size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Explore More</h3>
                                <nav className="space-y-4">
                                    <Link href="/hotel-laundry-equipment-solutions" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Zap size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Hotel Solutions</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/hospital-laundry-systems-provider" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Hospital Solutions</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/healthcare-laundry-equipment-maintenance" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Heart size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Maintenance Services</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/industrial-washing-machine-installation" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Zap size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Installation Services</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Investor Support</h4>
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
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                                            <Mail size={18} className="text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Project Proposal</p>
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
