import Image from "next/image";

const BrandPartners = () => {
  const brands = [
    { name: "Electrolux", src: "/clients/electrolux.png" },
    { name: "Giancola", src: "/clients/giancola.png" },
    { name: "Lapaouw", src: "/clients/lapaouw.png" },
    { name: "Maxi", src: "/clients/maxi.png" },
    { name: "Pros", src: "/clients/pros.png" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 
          className="mb-16"
          style={{ 
            color: '#1F2933',
            textAlign: 'center',
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '55px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '55px',
          }}
        >
          Our Strategic Brand Partners
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
          {brands.map((brand) => (
            <div key={brand.name} className="relative h-36 w-50 transition-all duration-300">
              <Image
                src={brand.src}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
