import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sunshine Laundry",
  description: "Read the privacy policy for using Sunshine Laundry services and our website.",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden flex flex-col pt-32 pb-24">
      {/* Background Blobs */}
      <div className="blob top-[-5%] left-[-10%] transform-gpu scale-75 opacity-20"></div>
      
      <main className="container mx-auto px-6 flex-grow relative z-10 w-full">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
          <h1 className="text-[#1F2933] font-satoshi text-[36px] md:text-[48px] font-medium leading-[1.2] mb-8 border-b border-gray-100 pb-6 w-full">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-[#1F2933] space-y-8 w-full">
            <section>
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-4">1. Introduction</h2>
              <p>
                At Sunshine Laundry, your privacy is important to us. This Privacy Policy details the types of personal information we collect and how we use, safeguard, and disclose that information when you use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-4">2. Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email address, phone number, and physical property address when you inquire about our products or services, request a quote, or sign up for our communication channels.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-4">3. How We Use Your Information</h2>
              <p>
                The information we collect is used to provide, operate, and maintain our services. We may also use this information for customer support, to send you important updates or promotional content, and to improve your overall experience with Sunshine Laundry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-4">4. Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-4">5. Third-Party Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-4">6. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us by accessing our contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
