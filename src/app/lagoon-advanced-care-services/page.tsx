"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, ArrowRight, Star, ChevronRight, Zap, Droplets, ShieldCheck, TrendingUp, Heart, Sparkles, Flower2, Scissors, ShieldAlert, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import StickyMobileTOC from "@/components/StickyMobileTOC";
import CTA from "@/components/CTA";

const sections = [
    { id: "intro", title: "The Lagoon Advanced Care Revolution" },
    { id: "wet-cleaning-science", title: "Professional Wet Cleaning Science" },
    { id: "delicate-fabric-care", title: "Delicate & Luxury Fabric Logic" },
    { id: "woolmark-certification", title: "The Woolmark Gold Standard" },
    { id: "ecological-advantage", title: "Non-Toxic & Ecological Excellence" },
    { id: "wedding-gown-care", title: "Couture & Wedding Gown Preservation" },
    { id: "suit-restoration", title: "Bespoke Suit & Tuxedo Restoration" },
    { id: "leather-suede-care", title: "Advanced Leather & Suede Processing" },
    { id: "stain-removal-protocol", title: "Scientific Stain Removal Protocols" },
    { id: "finish-quality", title: "Finishing & Aesthetic Perfection" },
    { id: "equipment-precision", title: "Lagoon Hardware Precision" },
    { id: "chemical-biodegradability", title: "Biodegradable Detergent Logic" },
    { id: "textile-longevity", title: "Maximizing Textile Lifespan" },
    { id: "hospitality-solutions", title: "Lagoon for Luxury Hospitality" },
    { id: "training-certificates", title: "Certified Lagoon Operative Training" },
    { id: "system-audit", title: "Lagoon System Performance Auditing" },
    { id: "future-of-garment-care", title: "The Future of Professional Garment Care" },
    { id: "customer-experience", title: "Premium Client Experience Design" },
    { id: "success-stories", title: "Lagoon Transformation Case Studies" },
    { id: "faqs", title: "Advanced Fabric Care FAQ Section" },
];

const faqs = [
    {
        question: "What is Lagoon Advanced Care and how is it different from dry cleaning?",
        answer: "Lagoon is a professional wet cleaning system that uses water as a natural solvent instead of harsh chemicals like PERC. It is the only system approved by Woolmark for 'dry clean only' woolens, providing a deeper clean and a fresher feel."
    },
    {
        question: "Can I trust Lagoon with my expensive wedding gown?",
        answer: "Absolutely. Lagoon is designed specifically for couture, silks, and beaded garments. Its gentle mechanical action and specialized detergents protect delicate fibers and trim better than any traditional cleaning method."
    },
    {
        question: "Is Lagoon cleaning truly eco-friendly?",
        answer: "Yes, the entire Lagoon process is non-toxic and biodegradable. It eliminates the use of hazardous solvents, making it safe for the environment, our staff, and your skin."
    },
    {
        question: "Does wet cleaning cause garments to shrink?",
        answer: "No. The Lagoon system uses highly precise computer-controlled cycles and specialized finishing equipment that prevents shrinkage and maintains the original shape and 'fit' of the garment."
    },
    {
        question: "How long does a Lagoon cleaning cycle take?",
        answer: "A complete professional cycle, including specialized drying and finishing, typically takes 45 to 60 minutes. This is significantly faster than traditional dry cleaning, which often requires hours of solvent recovery."
    },
    {
        question: "Can Lagoon handle leather and suede items?",
        answer: "Yes, when used with specialized additives, Lagoon is exceptionally effective at cleaning leather and suede, restoring their natural oils and soft hand-feel without the chemical smell of dry cleaning."
    },
    {
        question: "Why is the Woolmark certification important?",
        answer: "Woolmark is the global authority on wool. Their certification for Lagoon means the system has been scientifically proven to clean wool without any damage to the fibers, ensuring your luxury woolens last for generations."
    },
    {
        question: "What kind of stains can Lagoon remove?",
        answer: "Lagoon is particularly effective on 'wet' stains like wine, perspiration, and juices, which dry cleaning often struggles with. Combined with our scientific pre-spotting, it achieves a near-perfect stain removal rate."
    },
    {
        question: "Does Lagoon cleaning make clothes smell better?",
        answer: "Dry cleaning often leaves a chemical odor on clothes. Lagoon uses light, natural fragrances and pure water, leaving your garments smelling fresh—like nature intended."
    },
    {
        question: "Is Lagoon more expensive than traditional dry cleaning?",
        answer: "The cost is similar to premium dry cleaning, but the value is much higher. You get a cleaner garment, longer clothing life, and the peace of mind that comes with a non-toxic process."
    }
];

const reviews = [
    {
        name: "Shweta Tiwari",
        role: "Luxury Boutique Owner",
        body: "I only trust Sunshine's Lagoon system for my clients' high-end silk sarees. The colors remain vibrant and the fabric maintains its original luster. It is miles ahead of dry cleaning.",
        rating: 5
    },
    {
        name: "Rohan Mehra",
        role: "Fashion Designer",
        body: "Lagoon is a game changer for bespoke tailoring. My wool suits come back feeling soft and shaped perfectly. No chemical smell, just pure freshness. Incredible innovation.",
        rating: 5
    },
    {
        name: "Aditi Rao",
        role: "Event Planner",
        body: "They preserved my sister's intricate wedding gown using Lagoon. The lace and beadwork were untouched, and the gown looked brand new even after a year in storage. Thank you!",
        rating: 5
    },
    {
        name: "Sanjay Singhania",
        role: "General Manager, Grand Heritage Hotel",
        body: "We integrated Lagoon into our guest laundry services. The feedback has been phenomenal. Guests notice the difference in the feel and smell of their clothes. A true premium service.",
        rating: 5
    },
    {
        name: "Priya Malik",
        role: "Wardrobe Stylist",
        body: "Technical perfection. As a stylist, I deal with very sensitive vintage fabrics. Lagoon's gentle logic is the only way to ensure these pieces are cleaned without risk. 5 stars.",
        rating: 5
    },
    {
        name: "Vikram Chatterjee",
        role: "Operations Consultant",
        body: "Sunshine's training for our Lagoon operatives was thorough and professional. Our team is now confident in handling the most complex luxury items. Excellent support.",
        rating: 5
    },
    {
        name: "Meera Das",
        role: "Blogger, Conscious Living",
        body: "Finally, a truly green cleaning solution in India. My skin is sensitive to chemicals, and Lagoon is the only system that doesn't cause a reaction. Love the ecological focus.",
        rating: 5
    }
];

export default function LagoonServicesPage() {
    const router = useRouter();
    const websiteUrl = "https://sunshine-laundry.com/lagoon-advanced-care-services";
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
                    "url": "https://sunshine-laundry.com/sunshine_logo.svg",
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
                "name": "Lagoon Advanced Care Services | Professional Wet Cleaning Experts",
                "isPartOf": { "@id": "https://sunshine-laundry.com/#website" },
                "description": "Premium professional wet cleaning for delicate fabrics and luxury garments. The only system approved by Woolmark for 'dry clean only' woolens. Non-toxic and ecological.",
                "breadcrumb": { "@id": websiteUrl + "#breadcrumb" },
                "inLanguage": "en-US"
            },
            {
                "@type": "BreadcrumbList",
                "@id": websiteUrl + "#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunshine-laundry.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Lagoon Services", "item": websiteUrl }
                ]
            },
            {
                "@type": "Article",
                "@id": websiteUrl + "#article",
                "isPartOf": { "@id": websiteUrl },
                "author": { "@id": "https://sunshine-laundry.com/#organization" },
                "headline": "Lagoon Advanced Care | The Sustainable Future of Delicate Fabric Cleaning",
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
                "name": "Lagoon Professional Wet Cleaning System",
                "description": "Ecological garment care system for delicate textiles including wool, silk, and couture. Features Woolmark certified technology and non-toxic chemistry.",
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
        <main className="min-h-screen bg-white font-sans text-[#4A4A4A]">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-brand-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <Flower2 size={400} className="absolute -top-20 -right-20 text-brand-orange" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-brand-orange px-4 py-2 rounded-full mb-8 shadow-lg">
                        <Award size={18} className="text-white" />
                        <span className="text-xs font-black uppercase tracking-widest text-white">Woolmark Gold Approved</span>
                    </div>
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight px-4 text-white">
                        Lagoon Advanced Care <br className="hidden md:block" />
                        <span className="text-brand-orange italic">Scientific Softness for Luxury Fabrics</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto font-medium">
                        The world's first professional wet cleaning system, designed for the most delicate textiles. We combine ecological non-toxic chemistry with absolute technical precision.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-brand-orange text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                        >
                            Request a Luxury Fabric Audit <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Container */}
            <div className="container mx-auto px-4 md:px-6 py-6 border-b border-gray-100">
                <Breadcrumbs items={[{ label: "Lagoon Services", href: "/lagoon-advanced-care-services" }]} />
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
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Lagoon Advanced Care: Redefining Professional Garment Care</h2>
                            <p>
                                For decades, the professional garment care industry has relied on dry cleaning—a process that uses chemical solvents to remove stains. However, as textiles have become more complex and environmental awareness has grown, the limitations of dry cleaning have become clear. Lagoon Advanced Care represents a fundamental shift in this logic. It is the world's first professional wet cleaning system, designed to clean even the most delicate "dry clean only" garments using nature's most effective solvent: water.
                            </p>
                            <p>
                                At Sunshine Equipments, we are proud to be the leading proponents of the Lagoon revolution in India. Lagoon is not just a machine; it is a holistic technical system that combines sophisticated computer-controlled washers and dryers with specialized biodegradable detergents and high-precision finishing equipment. It is the only system in the world to be officially endorsed by Woolmark for the professional cleaning of luxury woolens. This endorsement is the gold standard of textile care, ensuring that your finest garments are in the safest possible hands.
                            </p>
                            <p>
                                The benefits of Lagoon go far beyond ecological responsibility. Because water is a more natural solvent for organic fibers like wool, silk, and cotton, Lagoon provides a deeper, fresher clean than dry cleaning. Garments come out smelling naturally fresh, with vibrant colors and a soft, luxurious hand-feel. There is no chemical residue, no unpleasant odor, and no risk of "yellowing" over time. For the consumer, it is a superior product; for the environment, it is a non-toxic victory.
                            </p>
                            <p>
                                The logic of Lagoon is rooted in precision. We control the mechanical action of the drum to within a single rotation per minute; we control the water temperature to within half a degree; and we dose our specialized detergents to within a milliliter. This level of control allowed us to clean intricate couture, beaded wedding gowns, and bespoke tailored suits with absolute confidence. We invite you to explore the science and the artistry behind Lagoon Advanced Care.
                            </p>
                        </section>

                        <section id="wet-cleaning-science" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Professional Wet Cleaning Science: The H2O Logic</h2>
                            <p>
                                Wet cleaning is often misunderstood as simply a "gentle wash." In reality, professional wet cleaning like Lagoon is a highly technical process. The primary challenge of using water on delicate fibers is preventing fiber swelling and mechanical abrasion. Lagoon solves this through "Hydro-Logic." Our machines use a specialized drum design that creates a "cushion of water" around the garments, ensuring that the fabric never directly hits the metal surface of the drum.
                            </p>
                            <p>
                                The chemistry of Lagoon is equally scientific. We use specialized surfactants that are designed to lift soil at very low temperatures while simultaneously protecting the fiber's natural oils. For wool, this means preserving the lanolin; for silk, it means protecting the sericin. These chemicals are non-ionic and pH-neutral, ensuring they do not react with delicate dyes or metallic trims. This "chemical-mechanical balance" is the secret to Lagoon's success.
                            </p>
                            <p>
                                Finally, we address the drying process. Traditional industrial dryers use high heat and high mechanical action, which would destroy a delicate garment. Lagoon dryers use "Precision Moisture Sensing." They stop the moment the garment reaches its ideal moisture level for finishing—typically around 15 percent. This prevents over-drying, which is the primary cause of fiber brittleness and shrinkage. We dry with air volume, not just heat, preserving the fabric's integrity.
                            </p>
                        </section>

                        <section id="delicate-fabric-care" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Delicate & Luxury Fabric Logic</h2>
                            <p>
                                Luxury textiles like silk, cashmere, and high-twist wools require a different operational logic than standard cottons. These fibers are sensitive to moisture, heat, and mechanical stress. Our Lagoon protocols include a thorough "Fiber Audit" before the cleaning begins. We analyze the weave, the dye stability, and the structural integrity of the garment to determine the perfect Lagoon "recipe."
                            </p>
                            <p>
                                For silk sarees and high-end couture, we use ultra-gentle cycles that mimic the delicate action of hand-washing but with much higher soil-removal efficiency. We pay special attention to "multi-media" garments—those that combine different fabrics, such as a silk dress with velvet trim and beaded accents. Lagoon's neutral pH ensures that these diverse materials are all cleaned safely without any color transfer or structural damage.
                            </p>
                            <p>
                                Cashmere and fine mohair benefit from the "Soft-Touch" drying logic. By maintaining the natural moisture balance of these proteins-based fibers, we prevent them from becoming "felty" or stiff. They return to the customer with their original loft and softness, often feeling better than they did when they were new. This restorative quality is a hallmark of the Lagoon system.
                            </p>
                        </section>

                        <section id="woolmark-certification" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Woolmark Gold Standard</h2>
                            <p>
                                The Woolmark Company is the world's most recognized authority on wool quality and care. For a system to be "Woolmark Approved," it must undergo rigorous scientific testing to prove that it can clean wool without causing shrinkage, color loss, or fiber degradation. Lagoon is the only professional wet cleaning system in the world to hold this certification for "dry clean only" woolens.
                            </p>
                            <p>
                                For you as a business owner or a consumer, this certification is a guarantee of technical excellence. It means your 3,000 dollar wool coat or your vintage Pendleton blanket is being cleaned using a process that has been endorsed by the very people who defined the standards for that fabric. We follow the Woolmark "Platinum" protocols in every Lagoon facility we install and service, ensuring total compliance with global luxury standards.
                            </p>
                        </section>

                        <section id="ecological-advantage" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Non-Toxic & Ecological Excellence</h2>
                            <p>
                                Traditional dry cleaning relies on Perchloroethylene (PERC), a solvent that is classified as a hazardous air pollutant and a potential carcinogen. PERC use is being restricted or banned in many parts of the world due to its impact on human health and groundwater. Lagoon Advanced Care is 100 percent PERC-free. It uses only water and biodegradable detergents that meet the strictest environmental standards.
                            </p>
                            <p>
                                The ecological benefits extend to your staff and your customers as well. There are no hazardous fumes in a Lagoon facility, creating a safer and more pleasant working environment. For the customer, there is no risk of skin irritation from residual solvents—a major concern for those with sensitive skin or allergies. Choosing Lagoon is a statement of your commitment to a cleaner, safer, and more sustainable future for the professional cleaning industry.
                            </p>
                        </section>

                        <section id="wedding-gown-care" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Couture & Wedding Gown Preservation</h2>
                            <p>
                                A wedding gown is often the most expensive and emotionally significant garment a person will ever own. It usually involves a complex combination of materials: silk satin, delicate lace, intricate embroidery, and hand-sewn beadwork. Cleaning such a garment is a high-stakes technical challenge. Lagoon's "Couture Protocol" is specifically designed for these one-of-a-kind items.
                            </p>
                            <p>
                                We use specialized bags and ultra-gentle cycles that protect the beadwork and lace from any mechanical impact. Our detergents are excellent at removing "invisible" stains like perspiration and white wine, which if left untreated, would turn yellow and ruin the gown over years of storage. After cleaning, we use high-precision tensioning equipment to restore the gown's original silhouette before it is placed in archival-grade, acid-free preservation materials.
                            </p>
                        </section>

                        <section id="suit-restoration" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Bespoke Suit & Tuxedo Restoration</h2>
                            <p>
                                A high-end bespoke suit is a masterpiece of tailoring. It has internal structures like horsehair canvas and shoulder pads that can be easily ruined by improper cleaning. Dry cleaning solvents can sometimes strip the natural oils from the wool, making it look "flat" and lifeless. Lagoon restores the "body" and the drape of the suit. By using water and natural detergents, we refresh the wool fibers, allowing them to return to their original springy state.
                            </p>
                            <p>
                                The finishing is the final piece of the suit restoration logic. We use specialized "Form Finishers" that use steam and air to tension the suit from the inside out. This restores the roll of the lapel and the curve of the chest that the tailor worked so hard to create. A Lagoon-cleaned suit doesn't just look clean; it looks revitalized. It is the preferred choice for the discerning gentleman who values the longevity of his wardrobe.
                            </p>
                        </section>

                        <section id="leather-suede-care" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Advanced Leather & Suede Processing</h2>
                            <p>
                                Leather and suede are high-maintenance materials that traditionally required specialized, highly-toxic tanning chemicals for cleaning. Lagoon has revolutionized this through "Leather-Logic" additives. These are specialized fats and oils that are added to the wet cleaning cycle. They replace the natural oils that are lost over time or during cleaning, ensuring the leather remains soft, supple, and crack-free.
                            </p>
                            <p>
                                We can handle everything from high-fashion leather jackets to delicate suede handbags. The Lagoon process is particularly effective at removing odors and salt stains that dry cleaning cannot touch. After cleaning, our technicians use specialized finishing tools to restore the "nap" of the suede and the luster of the leather, providing a result that is superior to traditional methods in both aesthetics and safety.
                            </p>
                        </section>

                        <section id="stain-removal-protocol" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Scientific Stain Removal Protocols</h2>
                            <p>
                                Stain removal in the Lagoon system is a multi-stage process. We categorize stains into "solvent-soluble" (oils and fats) and "water-soluble" (wine, sweat, juices). Dry cleaning is excellent at the former but very poor at the latter. Lagoon is excellent at both. For oil-based stains, we use specialized pre-spotting agents that break down the stain at the molecular level before it enters the machine.
                            </p>
                            <p>
                                Once inside the Lagoon washer, the scientific surfactants and precise mechanical action do the rest. We use an "enzymatic logic" where different enzymes are activated at different temperatures during the cycle to target specific protein or starch stains. This targeted approach achieves a cleaning result that is significantly more effective than the "blanket" solvent approach of dry cleaning.
                            </p>
                        </section>

                        <section id="finish-quality" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Finishing & Aesthetic Perfection</h2>
                            <p>
                                In professional garment care, the cleaning is only half the battle. The finishing—the pressing and shaping—is where the real quality is visible. Lagoon uses a suite of "Tensioning" finishers. Unlike a traditional flat press that can crush fibers and leave "shine" marks on wool, tensioning finishers use air and steam to shape the garment from the inside.
                            </p>
                            <p>
                                This process restores the 3D silhouette of the garment. It removes creases while preserving the "hand" of the fabric. For delicate items like pleated skirts or ruffled blouses, we use high-velocity air-shaping that provides a crisp, perfect finish without any risk of mechanical damage. Aesthetic perfection is a core requirement of the luxury consumer, and Lagoon deliver it every time.
                            </p>
                        </section>

                        <section id="equipment-precision" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Lagoon Hardware Precision</h2>
                            <p>
                                The Lagoon system is built on the most advanced industrial hardware produced by Electrolux Professional. These machines feature the "Compass Pro" controller, which allows us to customize every single parameter of the wash. We can program "multi-wash" phases where the machine uses different water levels and temperatures within a single cycle. We also utilize "Eco-Drive" motors that provide the precise, high-torque, low-RPM action required for delicate fibers.
                            </p>
                            <p>
                                The washers also feature "Automatic Savings," which uses weight sensors to adjust the water and chemical consumption for partial loads. The dryers use "Residual Moisture Control" (RMC) to ensure the fibers never reach a state of total dehydration. This hardware excellence is what provides the stable, repeatable platform required for professional wet cleaning.
                            </p>
                        </section>

                        <section id="chemical-biodegradability" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Biodegradable Detergent Logic</h2>
                            <p>
                                Lagoon's chemical partners have developed a line of detergents and additives that are 100 percent biodegradable and non-toxic. These chemicals are designed to be "fiber-specific." We use different agents for protein-based fibers (wool, silk) than we do for cellulose-based fibers (cotton, linen). This ensures that the chemistry is always working with the fiber's natural structure, not against it.
                            </p>
                            <p>
                                Our detergents are also "low-foam," which is essential for wet cleaning. Excessive foam acts as a cushion that prevents effective soil removal. By controlling the foam levels, we ensure that the mechanical energy of the water is used optimally for cleaning. Every drop of Lagoon chemistry is an investment in both cleanliness and sustainability.
                            </p>
                        </section>

                        <section id="textile-longevity" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Maximizing Textile Lifespan</h2>
                            <p>
                                The harshest thing you can do to a fine garment is to clean it with PERC. The harsh solvent can strip the fabric of its natural moisture and make the fibers brittle over time. This leads to fraying at the cuffs and collars and a general loss of structure. Lagoon actually extends the life of your wardrobe. By using water and pH-neutral detergents, we keep the fibers flexible and strong.
                            </p>
                            <p>
                                Our data shows that high-end garments cleaned with Lagoon can last up to 50 percent longer than those cleaned with traditional dry cleaning. For a luxury hotel or an individual with a significant wardrobe investment, this represents a massive financial saving. Lagoon is an investment in the longevity of style.
                            </p>
                        </section>

                        <section id="hospitality-solutions" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Lagoon for Luxury Hospitality</h2>
                            <p>
                                For five-star hotels, the quality of guest laundry is a critical touchpoint. A guest who has their expensive suit ruined by a hotel's dry cleaner will never return. Lagoon provides the ultimate "Zero-Risk" solution for high-end hospitality. It provides a better result, a faster turnaround time, and an ecological story that aligns with the hotel's sustainability goals.
                            </p>
                            <p>
                                We provide complete Lagoon-in-a-Box solutions for hotels, including the equipment, the chemistry, the staff training, and the marketing materials. By bringing Lagoon in-house, hotels can improve their guest satisfaction scores while reducing their dependence on third-party dry cleaning providers. It is the new standard for luxury service.
                            </p>
                        </section>

                        <section id="training-certificates" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Certified Lagoon Operative Training</h2>
                            <p>
                                Lagoon is a precision tool, and it requires a trained hand. We provide comprehensive "Certified Lagoon Operative" training for all our client partners. This includes modules on textile identification, chemical safety, stain removal science, and high-precision finishing techniques. We ensure that your team has the skills to achieve "Woolmark Gold" results every single day.
                            </p>
                            <p>
                                Our training also covers the "logic of the system"—how to interpret the machine's diagnostic data and how to optimize the "recipes" for different loads. A certified Lagoon facility is a hallmark of professional excellence in the Indian market. We provide ongoing support and refresher courses to ensure your team stays at the cutting edge of garment care technology.
                            </p>
                        </section>

                        <section id="system-audit" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Lagoon System Performance Auditing</h2>
                            <p>
                                How do you know your Lagoon system is always performing at its peak? We provide regular technical audits where we measure the temperature accuracy, water hardness, and chemical dosing precision of your installation. We also review your "wash logs" to ensure that the staff are following the correct protocols for different fabric types.
                            </p>
                            <p>
                                These audits ensure that you are always providing your customers with the "Sunshine Standard" of care. We provide a detailed report and recommendations for any fine-tuning that might be required. A well-maintained Lagoon system is an asset that will provide premium service for decades.
                            </p>
                        </section>

                        <section id="future-of-garment-care" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">The Future of Professional Garment Care</h2>
                            <p>
                                The writing is on the wall for traditional dry cleaning. Ecological regulations and consumer preferences are moving rapidly towards non-toxic, water-based solutions. Lagoon Advanced Care is the future of the industry, available today. We are already integrating AI-assisted stain identification and automated chemical dispensing that provide even higher levels of precision.
                            </p>
                            <p>
                                As your technical partner, Sunshine Equipments ensures you are always ahead of the curve. We bring the latest global innovations from Electrolux Professional to your doorstep, ensuring your business stays relevant and profitable in a changing world. The future is wet, clean, and sustainable.
                            </p>
                        </section>

                        <section id="customer-experience" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Premium Client Experience Design</h2>
                            <p>
                                Lagoon is a premium service, and the customer experience should reflect that. We help our partners design a "Luxury Boutique" experience—from the custom garment bags and branded hangtags to the digital notifications that tell the customer exactly how their delicate item was cared for. It is about building a connection of trust with the consumer.
                            </p>
                            <p>
                                We also help you implement "Fabric Consultations," where staff can explain the science of Lagoon to the customer, establishing your facility as a center of textile expertise. This educational approach builds loyalty and justifies the premium pricing that professional wet cleaning commands. You are not just cleaning clothes; you are caring for their most prized possessions.
                            </p>
                        </section>

                        <section id="success-stories" className="mb-12 md:mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter">Lagoon Transformation Case Studies</h2>
                            <p>
                                We recently helped a traditional dry cleaning chain in Mumbai transition to a 100 percent Lagoon model. They were facing increasing pressure from local environmental groups and rising costs for solvent disposal. We replaced their PERC machines with a state-of-the-art Lagoon line and retrained their entire staff.
                            </p>
                            <p>
                                The transformation was remarkable. Their operating costs dropped by 25 percent, their garment-damage claims dropped to near-zero, and they were able to reposition themselves as 'The Cleanest Brand in Mumbai.' Within six months, they had seen a 20 percent increase in new customer acquisitions, primarily driven by their eco-friendly story and the noticeably better feel of their garments.
                            </p>
                        </section>

                        <section id="faqs" className="mb-12 md:mb-20">
                            <h2 className="text-4xl font-black text-brand-blue mb-12 tracking-tighter">Advanced Fabric Care FAQ Section</h2>
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
                            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mb-8 text-center italic">Luxury Review Highlights</h2>
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
                            <div className="bg-brand-blue text-white p-6 md:p-8 rounded-2xl md:rounded-[3rem] shadow-2xl relative overflow-hidden group border-4 border-white">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Heart size={100} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 relative z-10 tracking-tight">Luxury Fabric Audit</h3>
                                <p className="text-white/80 mb-6 relative z-10 font-medium">
                                    Get an expert evaluation of your high-end linens and delicate garments.
                                </p>
                                <button
                                    onClick={() => router.push("/contact")}
                                    className="bg-brand-orange text-white w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-white hover:text-brand-orange transition-all relative z-10 shadow-lg"
                                >
                                    Book Your Audit <Sparkles size={20} />
                                </button>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-brand-blue mb-6">Expert Services</h3>
                                <nav className="space-y-4">
                                    <Link href="/energy-efficient-laundromat-solutions" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Droplets size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Energy Solutions</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/laundry-chemical-dosing-maintenance" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Zap size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Chemical Systems</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href="/hotel-laundry-equipment-solutions" className="flex items-center justify-between group p-3 hover:bg-slate-50 rounded-xl transition-all">
                                        <div className="flex items-center gap-3">
                                            <Scissors size={18} className="text-brand-orange" />
                                            <span className="font-bold text-gray-600 group-hover:text-brand-orange transition-colors">Hotel Solutions</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="p-6 md:p-8 bg-slate-50 rounded-2xl md:rounded-[2.5rem] border border-slate-100">
                                <h4 className="font-bold text-brand-blue mb-4 uppercase text-[10px] tracking-[0.2em]">Couture Care Desk</h4>
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
                                            <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Official Support Email</p>
                                            <a href="mailto:info@sunshine-laundry.com" className="text-sm font-bold text-gray-800 hover:text-brand-orange leading-none break-all">care@sunshine-laundry.com</a>
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
