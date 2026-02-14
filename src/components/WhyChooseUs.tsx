import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="bg-white pt-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-3xl">
            <span 
              className="text-[#E6763F] block mb-5 tracking-wide"
              style={{ 
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '20px',
                fontWeight: 500,
                textTransform: 'uppercase'
              }}
            >
              Why Choose Us
            </span>
            <h2 
              className="text-[#0f172a] leading-[1.1]"
              style={{ 
                fontFamily: 'Satoshi, sans-serif',
                fontSize: 'min(52px, 6.5vw)',
                fontWeight: 500,
              }}
            >
              Established Leaders in Commercial Laundry Solutions
            </h2>
          </div>
          <div className="lg:max-w-sm pt-6">
            <p 
              className="text-gray-600 leading-relaxed"
              style={{ 
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '15px',
                fontWeight: 400
              }}
            >
              Delivering reliable equipment, expert service, and long-term operational excellence for over two decades.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width Border Wrapper */}
      <div className="border-t border-gray-400 w-full mt-8">
        <div className="container mx-auto px-6">
          {/* Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Column 1 */}
            <div className="py-12 pr-6 md:border-r border-gray-400">
              <div className="mb-8">
                <Image 
                  src="/handshake.svg" 
                  alt="Trusted Expertise" 
                  width={52} 
                  height={52} 
                />
              </div>
              <p 
                className="text-[#0f172a] max-w-[200px]"
                style={{ 
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  lineHeight: '1.2'
                }}
              >
                25+ years of trusted laundry expertise.
              </p>
            </div>

            {/* Column 2 */}
            <div className="py-12 px-6 md:border-r border-gray-400">
              <div className="mb-8">
                <Image 
                  src="/badge.svg" 
                  alt="Authorized Dealer" 
                  width={52} 
                  height={52} 
                />
              </div>
              <p 
                className="text-[#0f172a] max-w-[240px]"
                style={{ 
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  lineHeight: '1.2'
                }}
              >
                Authorized dealer of global laundry brands.
              </p>
            </div>

            {/* Column 3 */}
            <div className="py-12 pl-6">
              <div className="mb-8">
                <Image 
                  src="/plaas.svg" 
                  alt="Complete Support" 
                  width={52} 
                  height={52} 
                />
              </div>
              <p 
                className="text-[#0f172a] max-w-[260px]"
                style={{ 
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  lineHeight: '1.2'
                }}
              >
                Complete installation, AMC, and parts support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
