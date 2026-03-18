import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Sunshine Laundry",
  description: "Read the terms and conditions for using Sunshine Laundry services and our website.",
};

export default function Terms() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden flex flex-col pt-32 pb-24">
      {/* Background Blobs */}
      <div className="blob top-[-5%] left-[-10%] transform-gpu scale-75 opacity-20"></div>
      
      <main className="container mx-auto px-6 flex-grow relative z-10 w-full">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
          <h1 className="text-[#1F2933] font-satoshi text-[36px] md:text-[48px] font-medium leading-[1.2] mb-8 border-b border-gray-100 pb-6 w-full">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none text-[#1F2933] space-y-8 w-full">
            <section>
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-4">1. Introduction</h2>
              <p>
                Welcome to Sunshine Laundry. These terms and conditions outline the rules and regulations for the use of our website and services.
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use our site if you do not agree to 
                all of the terms and conditions stated on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-4">2. Services</h2>
              <p>
                We provide commercial laundry equipment supply, installation, maintenance, and AMC services. Specific terms related to 
                equipment purchase, warranties, and maintenance contracts will be provided in individual service agreements upon engagement.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-4">3. Use License</h2>
              <p>
                Unless otherwise stated, Sunshine Laundry and/or its licensors own the intellectual property rights for all material on 
                the website. All intellectual property rights are reserved. You may access this from our website for your own personal use 
                subjected to restrictions set in these terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-4">4. Limitation of Liability</h2>
              <p>
                In no event shall Sunshine Laundry, nor any of its officers, directors and employees, be held liable for anything arising 
                out of or in any way connected with your use of this website or our services, whether such liability is under contract.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-4">5. Revisions and Modifications</h2>
              <p>
                We may revise these terms of service for its website at any time without notice. By using this website you are agreeing to 
                be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1F2933] mb-4">6. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us via our contact form or by reaching out to our customer support.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
