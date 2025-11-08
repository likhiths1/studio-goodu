import Img01 from "../assets/images/services/01.jpg";
import Img02 from "../assets/images/services/02.jpg";
import Img03 from "../assets/images/services/03.jpg";
import Img04 from "../assets/images/services/04.jpg";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export default function ServicesSection() {
  const images = [
    { src: Img01, alt: "Service 1" },
    { src: Img02, alt: "Service 2" },
    { src: Img03, alt: "Service 3" },
    { src: Img04, alt: "Service 4" }
  ];

  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] py-16 md:py-24 px-4 font-inter">
      <div className="max-w-[90rem] mx-auto">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-stretch justify-items-stretch">
          {images.map((image, index) => (
            <AnimatedItem key={index} delay={index + 1}>
              <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
