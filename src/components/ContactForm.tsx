"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Only allows alphabets and whitespaces
        if (value === "" || /^[a-zA-Z\s]*$/.test(value)) {
            setFormData({ ...formData, name: value });
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Only allows numeric values and max 10 digits
        if (value === "" || (/^\d*$/.test(value) && value.length <= 10)) {
            setFormData({ ...formData, phone: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isSubmitting) return;

        if (formData.phone.length !== 10) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            alert("Thank you! Your message has been sent successfully.");
            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="container mx-auto px-6 mb-16 md:mb-24">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-10 md:gap-y-8">
                {/* Full Name */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="text-[#1F2933] font-satoshi text-[16px] md:text-[24px] font-normal leading-tight">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleNameChange}
                        placeholder="Alphabets only"
                        className="w-full px-5 py-4 bg-white border border-[#1F2933]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6763F]/20 focus:border-[#E6763F] transition-all text-[#1F2933] font-satoshi text-lg"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="text-[#1F2933] font-satoshi text-[16px] md:text-[24px] font-normal leading-tight">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 bg-white border border-[#1F2933]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6763F]/20 focus:border-[#E6763F] transition-all text-[#1F2933] font-satoshi text-lg"
                    />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="phone" className="text-[#1F2933] font-satoshi text-[16px] md:text-[24px] font-normal leading-tight">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="10 digit number"
                        className="w-full px-5 py-4 bg-white border border-[#1F2933]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6763F]/20 focus:border-[#E6763F] transition-all text-[#1F2933] font-satoshi text-lg"
                    />
                </div>

                {/* Service Type */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="service" className="text-[#1F2933] font-satoshi text-[16px] md:text-[24px] font-normal leading-tight">Type Of Service</label>
                    <div className="relative">
                        <select
                            id="service"
                            required
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                    <label htmlFor="message" className="text-[#1F2933] font-satoshi text-[16px] md:text-[24px] font-normal leading-tight">Message</label>
                    <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirement"
                        className="w-full px-5 py-4 bg-white border border-[#1F2933]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E6763F]/20 focus:border-[#E6763F] transition-all text-[#1F2933] font-satoshi text-lg resize-none"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 mt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#E6763F] text-white font-bold transition-all hover:bg-[#d56530] flex justify-center items-center h-[54px] whitespace-nowrap px-8 md:px-10 text-base md:text-lg rounded-none disabled:opacity-70 disabled:cursor-not-allowed min-w-[200px]"
                        style={{
                            fontFamily: 'Satoshi, sans-serif'
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin mr-2" size={20} />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </div>
            </form>
        </section>
    );
}
