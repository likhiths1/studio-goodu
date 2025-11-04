// Import images - adjust the count based on how many images you have
import Img1 from "../assets/images/portfoliodetail/1.png";
import Img2 from "../assets/images/portfoliodetail/2.png";
import Img3 from "../assets/images/portfoliodetail/3.png";
import Img4 from "../assets/images/portfoliodetail/4.png";
import Img5 from "../assets/images/portfoliodetail/5.png";
import Img6 from "../assets/images/portfoliodetail/6.png";
import Img7 from "../assets/images/portfoliodetail/7.png";
import Img8 from "../assets/images/portfoliodetail/8.png";
import Img9 from "../assets/images/portfoliodetail/9.png";
import Img10 from "../assets/images/portfoliodetail/10.png";

export default function PortfolioDetailSection() {
  // Organize images in groups: 2, 3, 2, 3, etc.
  const imageGroups = [
    { images: [Img1, Img2], columns: 2 },           // Row 1: 2 images (50-50)
    { images: [Img3, Img4, Img5], columns: 3 },    // Row 2: 3 images (33.33 each)
    { images: [Img6, Img7], columns: 2 },          // Row 3: 2 images (50-50)
    { images: [Img8, Img9, Img10], columns: 3 },  // Row 4: 3 images (33.33 each)
  ];

  return (
    <section className="w-full bg-[#FFF6ED] py-12 md:py-20 px-4 md:px-6 font-inter">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="text-left mb-12 md:mb-16">
          <h1 className="text-2xl md:text-4xl font-medium text-black mb-6 tracking-tight">
            TETUR SUSPENDISSE ORCI NISL
          </h1>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            {/* Left side - Description */}
            <div className="flex-1">
              <p className="font-poppins font-extralight text-sm md:text-base text-black/80 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Massa mattis lorem magna non elit. Mauris suscipit erat turpis nulla sit amet proin. Amet posuere ac ligula diam sed rhoncus suspendisse euismod. Imperdiet a ornare adipcing scelerisq. Mauris suscipit erat turpis nulla sit amet proin. Amet posuere ac ligula diam sed.
              </p>
            </div>
            {/* Right side - Service Type and Features */}
            <div className="flex-shrink-0 md:w-64 space-y-6">
              <div>
                <h3 className="font-inter text-xs md:text-sm font-medium text-black tracking-wide mb-2 inline-block border-b border-black/20 pb-2">
                  SERVICE TYPE:
                </h3>
              </div>
              <div>
                <h3 className="font-inter text-xs md:text-sm font-medium text-black tracking-wide mb-2 inline-block border-b border-black/20 pb-2">
                  FEATURES:
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid - Alternating 2 and 3 columns */}
        <div className="space-y-4 md:space-y-6">
          {imageGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`grid ${
                group.columns === 2 ? 'grid-cols-2' : 'grid-cols-3'
              } gap-4 md:gap-6`}
            >
              {group.images.map((image, imageIndex) => (
                <div key={imageIndex} className="w-full">
                  <img
                    src={image}
                    alt={`Portfolio ${groupIndex + 1}-${imageIndex + 1}`}
                    className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Navigation - Previous/Next with centered icon */}
        <div className="flex items-center justify-between border-t border-gray-300 pt-8 mt-16">
          <button className="text-sm md:text-base text-black hover:text-gray-600 transition">
            &lt; PREVIOUS
          </button>
          
          {/* Center Icon */}
          <div className="flex items-center justify-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>

          <button className="text-sm md:text-base text-black hover:text-gray-600 transition">
            NEXT &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
