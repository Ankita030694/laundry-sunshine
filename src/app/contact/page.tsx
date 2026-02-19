import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Contact Us | Sunshine Equipment",
    description: "Get in touch with Sunshine Equipment for all your commercial laundry solutions, equipment service, and maintenance needs.",
};

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen pt-12 md:pt-16 pb-20">
            {/* Hero Section */}
            <section className="relative pt-4 pb-12 md:pt-8 md:pb-16 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="mb-8 md:mb-12 inline-flex flex-col items-start gap-[50px] w-full">
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
            <section className="container mx-auto px-6 mb-16 md:mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-8">
                    {/* Full Name */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="name" className="text-[#1F2933] font-satoshi text-[20px] md:text-[24px] font-normal leading-tight">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-5 py-4 bg-white border border-[#1F2933]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6763F]/20 focus:border-[#E6763F] transition-all text-[#1F2933] font-satoshi text-lg"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="email" className="text-[#1F2933] font-satoshi text-[20px] md:text-[24px] font-normal leading-tight">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-5 py-4 bg-white border border-[#1F2933]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6763F]/20 focus:border-[#E6763F] transition-all text-[#1F2933] font-satoshi text-lg"
                        />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="phone" className="text-[#1F2933] font-satoshi text-[20px] md:text-[24px] font-normal leading-tight">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full px-5 py-4 bg-white border border-[#1F2933]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6763F]/20 focus:border-[#E6763F] transition-all text-[#1F2933] font-satoshi text-lg"
                        />
                    </div>

                    {/* Service Type */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="service" className="text-[#1F2933] font-satoshi text-[20px] md:text-[24px] font-normal leading-tight">Type Of Service</label>
                        <div className="relative">
                            <select
                                id="service"
                                defaultValue=""
                                className="w-full px-5 py-4 bg-white border border-[#1F2933]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6763F]/20 focus:border-[#E6763F] transition-all text-[#1F2933] font-satoshi text-lg appearance-none cursor-pointer"
                            >
                                <option value="" disabled>Select</option>
                                <option value="equipment">Equipment Purchase</option>
                                <option value="amc">AMC Services</option>
                                <option value="repair">Machine Repair</option>
                                <option value="parts">Spare Parts</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                <Image src="/Vector (3).svg" alt="Drop Down Icon" width={16} height={16} />
                            </div>
                        </div>
                    </div>

                    {/* Message (spanning both columns) */}
                    <div className="flex flex-col gap-3 md:col-span-2">
                        <label htmlFor="message" className="text-[#1F2933] font-satoshi text-[20px] md:text-[24px] font-normal leading-tight">Type Of Service</label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full px-5 py-4 bg-white border border-[#1F2933]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6763F]/20 focus:border-[#E6763F] transition-all text-[#1F2933] font-satoshi text-lg resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-4">
                        <button type="submit" className="group flex items-stretch gap-[2px]">
                            <span className="flex items-center justify-center bg-[#E6763F] text-white py-4 px-12 font-satoshi text-[22px] font-normal transition-all group-hover:bg-[#d56534]">
                                Send Message
                            </span>
                            <span className="flex items-center justify-center bg-[#E6763F] p-4 transition-all group-hover:bg-[#d56534]">
                                <Image src="/Frame 6.svg" alt="Send Icon" width={24} height={24} />
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Info Cards Section */}
            <section className="container mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Address */}
                    <div className="p-8 border border-[#1F2933]/50 bg-white hover:bg-gray-50/50 transition-colors min-h-[200px] flex flex-col justify-start items-start">
                        <div className="mb-6 text-[#E6763F]">
                            <Image src="/Vector (1).svg" alt="Address Icon" width={32} height={32} />
                        </div>
                        <h3 className="text-[#1F2933] font-satoshi text-[22px] font-bold mb-3">Address</h3>
                        <p className="text-[#4A5568] font-satoshi text-[16px] leading-relaxed">
                            304, 3rd Floor, Gupta Palace, Rajouri Garden, New Delhi, Delhi 110027
                        </p>
                    </div>

                    {/* Email */}
                    <div className="p-8 border border-[#1F2933]/50 bg-white hover:bg-gray-50/50 transition-colors min-h-[200px] flex flex-col justify-start items-start">
                        <div className="mb-6 text-[#E6763F]">
                            <Image src="/Group (1).svg" alt="Email Icon" width={32} height={32} />
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
