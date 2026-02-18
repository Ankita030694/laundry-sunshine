import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-[#FEF5EE] py-12 md:py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
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
              ABOUT SUNSHINE
            </span>
            <h2
              className="text-[#1F2933] leading-[1.1]"
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: 'clamp(32px, 8vw, 52px)',
                fontWeight: 500,
              }}
            >
              Trusted Partner for Commercial Laundry Excellence
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p
              className="text-[#1F2933] opacity-80 mb-8 leading-relaxed text-base md:text-lg"
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400
              }}
            >
              Sunshine Equipment provides commercial laundry solutions with expert installation and reliable support to ensure smooth, efficient operations nationwide.
            </p>

            <div className="flex items-center group cursor-pointer">
              <button
                className="bg-[#E6763F] text-white font-medium transition-all hover:bg-[#d56530] flex justify-center items-center h-[50px] md:h-[54px] px-6 md:px-8 text-base md:text-lg"
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  textTransform: 'uppercase'
                }}
              >
                DISCOVER MORE
              </button>
              <div className="transition-all duration-300 ml-[2px] h-[50px] w-[50px] md:h-[54px] md:w-[54px] bg-[#E6763F] flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-45"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* scrollable images */}
        <div className="overflow-x-auto pb-8 -mx-6 px-6 no-scrollbar">
          <div className="flex gap-4 md:gap-8 w-max">
            {[
              { src: "/about1.png", title: "Certified Installation for Seamless Operations" },
              { src: "/about2.png", title: "Preventive Maintenance for Maximum Uptime" },
              { src: "/about1.png", title: "Customized Laundry Room Design" },
              { src: "/about2.png", title: "Energy-Efficient Solutions" },
              { src: "/about1.png", title: "After-Sales Support & Spare Parts" }
            ].map((card, index) => (
              <div key={index} className="relative w-[300px] md:w-[600px] lg:w-[1080px] aspect-[16/9] overflow-hidden group flex-shrink-0">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2933]/90 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <h3
                    className="text-white max-w-[250px] md:max-w-sm text-xl md:text-3xl"
                    style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 500,
                      lineHeight: '1.2'
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative accent border */}
        <div className="w-full h-[4px] md:h-[6px] bg-gray-200 mt-4">
          <div className="w-1/3 h-full bg-[#E6763F]"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
