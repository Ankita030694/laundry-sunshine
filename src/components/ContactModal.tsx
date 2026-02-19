"use client";

import React, { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function ContactModal() {
  const { isContactModalOpen, closeContactModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContactModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeContactModal]);

  if (!isContactModalOpen) return null;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allows alphabets and whitespaces
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setFormData({ ...formData, name: value });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allows numeric values and max 10 digits
    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, phone: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (formData.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
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
      setFormData({ name: "", phone: "", email: "", message: "" });
      closeContactModal();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-white shadow-2xl overflow-hidden animate-scale-in"
        style={{ fontFamily: 'Satoshi, sans-serif' }}
      >
        {/* Close Button */}
        <button
          onClick={closeContactModal}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-brand-orange transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-10">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-brand-blue mb-2">Get in Touch</h3>
            <p className="text-gray-600">Fill out the form below and we'll reach out to you shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all text-gray-800"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="10-digit number"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all text-gray-800"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@email.com"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all text-gray-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can we help you?"
                className="w-full px-4 py-3 border border-gray-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all text-gray-800 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-orange text-white py-4 font-bold uppercase tracking-widest hover:bg-brand-orange-hover transition-all shadow-lg active:scale-[0.98] mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
