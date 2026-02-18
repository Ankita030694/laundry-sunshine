import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12 md:py-16">
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
                fontSize: 'clamp(32px, 8vw, 52px)',
                fontWeight: 500,
              }}
            >
              Established Leaders in Commercial Laundry Solutions
            </h2>
          </div>
          <div className="lg:max-w-sm pt-4 md:pt-6">
            <p
              className="text-gray-600 leading-relaxed text-sm md:text-base"
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400
              }}
            >
              Delivering reliable equipment, expert service, and long-term operational excellence for over two decades.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width Border Wrapper */}
      <div className="border-t border-gray-300 md:border-gray-400 w-full mt-8">
        <div className="container mx-auto px-6">
          {/* Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Column 1 */}
            <div className="py-10 md:py-12 pr-6 border-b md:border-b-0 md:border-r border-gray-300 md:border-gray-400">
              <div className="mb-6 md:mb-8">
                <Image
                  src="/handshake.svg"
                  alt="Trusted Expertise"
                  width={48}
                  height={48}
                  className="md:w-[52px] md:h-[52px]"
                />
              </div>
              <p
                className="text-[#0f172a] max-w-[200px] text-lg md:text-2xl"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  lineHeight: '1.2'
                }}
              >
                25+ years of trusted laundry expertise.
              </p>
            </div>

            {/* Column 2 */}
            <div className="py-10 md:py-12 px-0 md:px-6 border-b md:border-b-0 md:border-r border-gray-300 md:border-gray-400">
              <div className="mb-6 md:mb-8">
                <Image
                  src="/badge.svg"
                  alt="Authorized Dealer"
                  width={48}
                  height={48}
                  className="md:w-[52px] md:h-[52px]"
                />
              </div>
              <p
                className="text-[#0f172a] max-w-[240px] text-lg md:text-2xl"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 400,
                  lineHeight: '1.2'
                }}
              >
                Authorized dealer of global laundry brands.
              </p>
            </div>

            {/* Column 3 */}
            <div className="py-10 md:py-12 pl-0 md:pl-6">
              <div className="mb-6 md:mb-8">
                <Image
                  src="/plaas.svg"
                  alt="Complete Support"
                  width={48}
                  height={48}
                  className="md:w-[52px] md:h-[52px]"
                />
              </div>
              <p
                className="text-[#0f172a] max-w-[260px] text-lg md:text-2xl"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
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
