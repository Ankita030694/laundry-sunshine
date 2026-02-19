import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | Sunshine Equipment",
    description: "Get in touch with Sunshine Equipment for all your commercial laundry solutions, equipment service, and maintenance needs.",
};

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen pb-20 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-12 pb-12 md:pt-8 md:pb-16 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="mb-8 md:mb-12 flex flex-col items-center text-center md:items-start md:text-left gap-8 md:gap-[50px] w-full">
                        <span className="text-[#E6763F] font-satoshi text-[32px] md:text-[40px] font-medium leading-[1]">
                            GET IN TOUCH
                        </span>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 items-start w-full">
                            <div className="md:col-span-7">
                                <h1 className="text-[#1F2933] font-satoshi text-[40px] md:text-[55px] font-medium leading-[1]">
                                    Reach Out To Us
                                </h1>
                            </div>
                            <div className="md:col-span-5 md:pt-4">
                                <p className="text-[#1F2933] font-satoshi text-[18px] md:text-[22px] font-normal leading-[1.4]">
                                    We&apos;re here to support all your commercial and industrial laundry needs. Whether you&apos;re looking for equipment solutions, maintenance support, AMC services, or want to discuss a custom requirement, the Sunshine Laundry team is ready to assist you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <ContactForm />

            {/* Info Cards Section */}
            <section className="container mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Address */}
                    <div className="p-8 border border-[#1F2933]/50 bg-white hover:bg-gray-50/50 transition-colors min-h-[200px] flex flex-col justify-start items-start">
                        <div className="mb-6 text-[#E6763F]">
                            <Image src="/Group (1).svg" alt="Address Icon" width={32} height={32} />
                        </div>
                        <h3 className="text-[#1F2933] font-satoshi text-[22px] font-bold mb-3">Address</h3>
                        <p className="text-[#4A5568] font-satoshi text-[16px] leading-relaxed">
                            304, 3rd Floor, Gupta Palace, Rajouri Garden, New Delhi, Delhi 110027
                        </p>
                    </div>

                    {/* Email */}
                    <div className="p-8 border border-[#1F2933]/50 bg-white hover:bg-gray-50/50 transition-colors min-h-[200px] flex flex-col justify-start items-start">
                        <div className="mb-6 text-[#E6763F]">
                            <Image src="/Vector (1).svg" alt="Email Icon" width={32} height={32} />
                        </div>
                        <h3 className="text-[#1F2933] font-satoshi text-[22px] font-bold mb-3">Email</h3>
                        <p className="text-[#4A5568] font-satoshi text-[16px] leading-relaxed">
                            info@sunshine-laundry.com
                        </p>
                    </div>

                    {/* Contact Number */}
                    <div className="p-8 border border-[#1F2933]/50 bg-white hover:bg-gray-50/50 transition-colors min-h-[200px] flex flex-col justify-start items-start">
                        <div className="mb-6 text-[#E6763F]">
                            <Image src="/Vector (2).svg" alt="Phone Icon" width={32} height={32} />
                        </div>
                        <h3 className="text-[#1F2933] font-satoshi text-[22px] font-bold mb-3">Contact Number</h3>
                        <p className="text-[#4A5568] font-satoshi text-[16px] leading-relaxed">
                            +91 97111 12950
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
