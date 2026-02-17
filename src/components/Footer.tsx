"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function Footer() {
  const { openContactModal } = useModal();

  return (
    <footer className="bg-white border-t border-gray-400" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      {/* Upper Footer: Main Links */}
      <div className="border-y border-gray-400 mt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Quick Links */}
          <div className="p-8 md:p-12 border-l border-gray-400">
            <h5 className="text-lg font-bold text-gray-800 mb-8 uppercase tracking-wide">Quick Links</h5>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link href="/laundry-equipment-for-hotels" className="hover:text-brand-orange transition-colors">Hotel Laundry Equipment</Link></li>
              <li><Link href="/laundry-equipment-for-hospitals" className="hover:text-brand-orange transition-colors">Hospital Laundry Equipment</Link></li>
              <li><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link></li>
              <li><button onClick={openContactModal} className="hover:text-brand-orange transition-colors text-left outline-none">Get Free Quote</button></li>
            </ul>
          </div>

          {/* Service & Support */}
          <div className="p-8 md:p-12 border-r border-gray-400">
            <h5 className="text-lg font-bold text-gray-800 mb-8 uppercase tracking-wide">Service & Support</h5>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li>On-Site Installation & Commissioning</li>
              <li>Annual Maintenance Contracts (AMC)</li>
              <li>Spare Parts Supply</li>
              <li>Machine Repair & Technical Support</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="p-8 md:p-12">
            <h5 className="text-lg font-bold text-gray-800 mb-8 uppercase tracking-wide">Contact Us</h5>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li className="text-gray-900 font-bold">+91 97111 12950</li>
              <li>info@sunshine-laundry.com</li>
              <li><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link></li>
              <li><button onClick={openContactModal} className="hover:text-brand-orange transition-colors text-left outline-none">Contact Us</button></li>
            </ul>
          </div>

          {/* Head Office */}
          <div className="p-8 md:p-12 border-r border-gray-400">
            <h5 className="text-lg font-bold text-gray-800 mb-8 uppercase tracking-wide">Head Office</h5>
            <p className="text-gray-600 font-medium leading-relaxed">
              304, 3rd Floor, Gupta Palace, <br />
              Rajouri Garden, <br />
              New Delhi, Delhi 110027
            </p>
          </div>
        </div>
      </div>

      {/* Middle Footer: Social & Policies */}
      <div className="border-b border-gray-400">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Follow Us Section - spanning columns 1 & 2 */}
          <div className="col-span-1 md:col-span-2 p-8 md:px-12 md:py-8 border-l md:border-r border-gray-400 flex items-center gap-8">
            <span className="text-lg font-bold text-gray-800 uppercase tracking-wide">Follow Us</span>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-brand-orange hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-brand-orange hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Policies Section - spanning columns 3 & 4 */}
          <div className="col-span-1 md:col-span-2 p-8 md:px-12 md:py-8 border-r border-gray-400 flex items-center justify-end gap-8 text-gray-600 font-medium">
            <Link href="/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-orange transition-colors">Terms and Conditions</Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Brand & Copyright */}
      <div className="container mx-auto px-12 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-12">
          {/* Logo and Brand Name */}
          <div className="flex items-center gap-4">
            <Image
              src="/sunshine_logo.svg"
              alt="Sunshine Equipment Co Inc"
              width={300}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Brand Promise */}
          <div className="max-w-md">
            <p className="text-lg text-gray-700 font-medium leading-tight">
              Sunshine Equipment provides dependable commercial laundry solutions backed by trusted service across the nation.
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="text-center border-t border-gray-400 pt-8">
          <p className="text-sm text-gray-500 font-medium">
            © 2010 Sunshine Equipments. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
