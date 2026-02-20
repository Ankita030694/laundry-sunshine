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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Quick Links */}
          <div className="p-8 md:p-12 border-l border-gray-400">
            <h5 className="text-lg font-bold text-gray-800 mb-8 uppercase tracking-wide">Quick Links</h5>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link></li>
              <li><button onClick={openContactModal} className="hover:text-brand-orange transition-colors text-left outline-none">Contact Us</button></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="p-8 md:p-12 border-x border-gray-400">
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

      {/* Queries Section */}
      <div className="bg-gray-50 border-b border-gray-400">
        <div className="container mx-auto p-8 md:px-12 md:py-16">
          <h5 className="text-lg font-bold text-gray-800 mb-10 uppercase tracking-wide">Queries</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            <Link href="/laundry-equipment-for-hotels" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Hotel Laundry Equipment</Link>
            <Link href="/laundry-equipment-for-hospitals" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Hospital Laundry Equipment</Link>
            <Link href="/commercial-laundry-equipment-supplier" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Commercial Laundry Equipment</Link>
            <Link href="/industrial-washing-machine-installation" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Industrial Machine Installation</Link>
            <Link href="/laundry-equipment-maintenance-services" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Maintenance Services</Link>
            <Link href="/after-sales-support-for-laundry-machines" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">After-Sales Support</Link>
            <Link href="/laundry-equipment-spare-parts-supplier" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Spare Parts Supplier</Link>
            <Link href="/hotel-laundry-equipment-solutions" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Hotel Laundry Solutions</Link>
            <Link href="/hospital-laundry-systems-provider" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Hospital Laundry Systems</Link>
            <Link href="/laundromat-equipment-supplier" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Laundromat Equipment</Link>
            <Link href="/healthcare-laundry-equipment-maintenance" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Healthcare Maintenance</Link>
            <Link href="/hospitality-laundry-solutions" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Hospitality Solutions</Link>
            <Link href="/commercial-laundry-equipment-gurgaon" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Gurgaon Laundry Equipment</Link>
            <Link href="/laundry-machine-suppliers-delhi-ncr" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Delhi NCR Suppliers</Link>
            <Link href="/industrial-laundry-solutions-india" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Industrial Solutions India</Link>
            <Link href="/laundry-equipment-installation-services-delhi" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Delhi Installation Services</Link>
            <Link href="/laundry-equipment-maintenance-gurgaon" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Gurgaon Maintenance</Link>
            <Link href="/laundry-machine-preventive-maintenance" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Preventive Maintenance</Link>
            <Link href="/oem-laundry-equipment-parts" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">OEM Spare Parts</Link>
            <Link href="/laundry-equipment-troubleshooting-services" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Troubleshooting Services</Link>
            <Link href="/energy-efficient-laundry-systems" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Energy Efficient Systems</Link>
            <Link href="/smart-laundry-equipment-solutions" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Smart Laundry Solutions</Link>
            <Link href="/laundromat-washer-dryer-servicing" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Washer Dryer Servicing</Link>
            <Link href="/technical-support-for-laundromat-operations" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Laundromat Tech Support</Link>
            <Link href="/energy-efficient-laundromat-solutions" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Energy Efficient Solutions</Link>
            <Link href="/lagoon-advanced-care-services" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Lagoon Advanced Care</Link>
            <Link href="/on-site-laundry-equipment-repair-gurgaon" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">On-Site Repair Gurgaon</Link>
            <Link href="/industrial-washer-dryer-replacement-parts" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Industrial Spare Parts</Link>
            <Link href="/high-usage-laundromat-maintenance" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">High-Usage Maintenance</Link>
            <Link href="/laundry-chemical-dosing-maintenance" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Chemical Dosing Maint.</Link>
            <Link href="/washer-extractor-dryer-servicing-delhi-ncr" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Washer-Extractor Servicing</Link>
            <Link href="/laundry-infrastructure-development" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Infrastructure Development</Link>
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
              <a href="https://www.instagram.com/sunshineequipments?igsh=djB3Ynl1ejA3cnk%3D" className="p-2 bg-gray-100 rounded-full hover:bg-brand-orange hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/people/Sunshine-Equipment-Co-Inc/100094629672265/" className="p-2 bg-gray-100 rounded-full hover:bg-brand-orange hover:text-white transition-all">
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
