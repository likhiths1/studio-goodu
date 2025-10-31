import Img01 from "../assets/images/services/01.png";
import Img02 from "../assets/images/services/02.png";
import Img03 from "../assets/images/services/03.png";
import Img04 from "../assets/images/services/04.png";

export default function ServicesSection() {
  const images = [
    { src: Img01, alt: "Service 1", rotation: -8 },
    { src: Img02, alt: "Service 2", rotation: 5 },
    { src: Img03, alt: "Service 3", rotation: -6 },
    { src: Img04, alt: "Service 4", rotation: 7 }
  ];

  return (
    <section className="w-full bg-[#FFF6ED] py-16 md:py-24 px-4 font-inter">
      <div className="max-w-[90rem] mx-auto">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              style={{
                transform: `rotate(${image.rotation}deg)`,
                transition: "transform 0.3s ease"
              }}
            >
              {/* Polaroid Frame */}
              <div className="bg-[#FFF6ED] p-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[180px] sm:h-[220px] md:h-[240px] object-cover"
                  draggable={false}
                />
                {/* Optional bottom space for polaroid effect */}
                <div className="h-8 md:h-10 bg-[#FFF6ED]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
