import Image from "next/image";

const features = [
  {
    icon: "/tools.svg",
    title: "Installation Services",
    description: "Our certified technicians ensure a precise and efficient setup of all commercial laundry systems. From plumbing and electrical integration to safety compliance and initial testing, we handle every detail to ensure your operations start smoothly and without delays."
  },
  {
    icon: "/settings.svg",
    title: "Annual Maintenance Contracts",
    description: "Protect your investment with our comprehensive AMC plans. We provide regular inspections, preventative maintenance, and timely servicing to prevent unexpected breakdowns, extend the operational life of your machines, and ensure peak performance throughout the year."
  },
  {
    icon: "/box.svg",
    title: "Genuine Spare Parts",
    description: "We maintain a robust inventory of authentic spare parts for all major commercial laundry brands. Our rapid delivery and expert service support minimize downtime, ensuring that your equipment is restored to original manufacturer specifications for long-term reliability."
  },
  {
    icon: "/bulb.svg",
    title: "Laundry Setup Solutions",
    description: "Benefit from our decades of industry expertise with complete laundry setup planning. We design tailored floor plans, optimize workflow efficiency, and recommend the best equipment configurations to create a cost-effective and highly productive laundry facility."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative p-10 group transition-all"
              style={{
                minHeight: '406px'
              }}
            >
              {/* SVG Background Layer */}
              <div className="absolute inset-0 z-0">
                <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 352 406" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="w-full h-full"
                >
                  <path 
                    d="M351 1V316.613L270.559 405H1V1H351Z" 
                    fill="white"
                    stroke="#1F2933" 
                    strokeOpacity="0.25" 
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="mb-8">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title} 
                    width={48} 
                    height={48} 
                  />
                </div>
                
                <h3 
                  className="text-[#E6763F] mb-4"
                  style={{ 
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '24px',
                    fontWeight: 500,
                    lineHeight: '1.2'
                  }}
                >
                  {feature.title}
                </h3>
                
                <p 
                  className="text-gray-500"
                  style={{ 
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '1.5'
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
