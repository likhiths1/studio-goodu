import GooduLogo from "../assets/images/herosection/goodu-logoblue.png";
import { useNavigate } from "react-router-dom";

export default function BlogDetailSection({ 
  post,
  onPrev, 
  onNext, 
  hasPrev = false, 
  hasNext = false 
}) {
  const navigate = useNavigate();
  
  if (!post) {
    return (
      <div className="w-full bg-[#FEF6ED] py-12 md:py-20 font-inter text-center">
        <p>Post not found</p>
      </div>
    );
  }
  
  const { date, title, intro = [], sections = [], imageGroups = [] } = post;
  return (
    <section className="w-full bg-[#FEF6ED] py-12 md:py-20 font-inter">
      <div className="w-full max-w-[1300px] mx-auto px-4 md:px-6">
        {/* Date */}
        <p className="text-sm md:text-[1.6rem] text-center text-gray-500 tracking-wide mb-6">
          {date}
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-6xl font-medium text-center text-black mb-12 leading-tight tracking-[-0.02em]">
          {title}
        </h1>

        {/* Intro Paragraphs */}
        {intro.map((paragraph, index) => (
          <p key={`intro-${index}`} className="font-inter font-light text-base md:text-2xl text-black/80 leading-relaxed mb-8">
            {paragraph}
          </p>
        ))}

        {/* Render image groups and sections */}
        {imageGroups.map((group, groupIndex) => (
          <div key={`group-${groupIndex}`} className="w-full mb-12">
            {/* Image Group */}
            <div className={`flex ${group.columns === 2 ? 'flex-col md:flex-row' : 'flex-col sm:flex-row'} gap-4 ${groupIndex < imageGroups.length - 1 ? 'mb-4' : ''}`}>
              {group.images.map((image, imgIndex) => (
                <div 
                  key={`img-${groupIndex}-${imgIndex}`} 
                  className={`w-full ${group.columns === 2 ? 'md:w-1/2' : 'sm:w-1/3'} ${group.heights?.[imgIndex] ? `h-[${group.heights[imgIndex]}]` : 'h-[500px]'} overflow-hidden`}
                >
                  <img
                    src={image}
                    alt={`${title} - Image ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Section content after image group if exists */}
            {sections[groupIndex] && (
              <div className="my-16">
                <h2 className="text-2xl md:text-4xl font-medium text-black mb-6 tracking-tight">
                  {sections[groupIndex].title}
                </h2>
                <p className="font-inter font-light text-base md:text-2xl text-black/80 leading-relaxed">
                  {sections[groupIndex].content}
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Render any remaining sections without images */}
        {sections.slice(imageGroups.length).map((section, index) => (
          <div key={`section-${index}`} className="my-16">
            <h2 className="text-2xl md:text-4xl font-medium text-black mb-6 tracking-tight">
              {section.title}
            </h2>
            <p className="font-inter font-light text-base md:text-2xl text-black/80 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}

        {/* Navigation - Previous/Next with centered Goodu logo */}
        <div className="flex items-center justify-between border-t border-[#969696] pt-6 md:pt-8">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className={`inline-flex items-center gap-2 font-playfairdisplay tracking-[0.08em] text-[1.05rem] md:text-[1.25rem] transition bg-transparent border-none ${hasPrev ? 'text-black hover:opacity-80' : 'text-gray-400 cursor-not-allowed'}`}
            style={{ background: "none", border: "none" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span>PREVIOUS</span>
          </button>

          {/* Center Logo (larger) */}
          <div 
            className="flex items-center justify-center cursor-pointer"
            onClick={() => navigate('/blog')}
          >
            <img
              src={GooduLogo}
              alt="Studio Goodu"
              className="w-10 h-auto md:w-24 object-contain"
            />
          </div>

          <button
            onClick={onNext}
            disabled={!hasNext}
            className={`inline-flex items-center gap-2 font-playfairdisplay tracking-[0.08em] text-[1.05rem] md:text-[1.25rem] transition bg-transparent border-none ${hasNext ? 'text-black hover:opacity-80' : 'text-gray-400 cursor-not-allowed'}`}
            style={{ background: "none", border: "none" }}
          >
            <span>NEXT</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
