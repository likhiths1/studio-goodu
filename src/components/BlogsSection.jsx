import { useState } from "react";
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import BlogBg from "../assets/images/blogs/blog1.jpg";
import BlogBg2 from "../assets/images/blogs/stor3.jpg";

const BLOGS = [
  {
    bg: BlogBg,
    cat: "DEVELOPMENT",
    date: "18 March 2025",
    title: "Ze Art Galleries Worldwide, High End Art Gallery",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    bg: BlogBg2,
    cat: "INTERIORS",
    date: "22 March 2025",
    title: "The Future of Living Spaces",
    summary:
      "Design for tomorrow’s lifestyle: trends, comfort, and technology combined. Discover how to transform your home for a modern world with warmth and efficiency."
  },
];

export default function BlogsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0); // 0 for static, 1 for next

  function nextBlog() {
    setDirection(1);
    setTimeout(() => {
      setActive((active + 1) % BLOGS.length);
      setDirection(1);
    }, 340); // match transition duration
  }

  const current = BLOGS[active];
  const nextIdx = (active + 1) % BLOGS.length;
  const next = BLOGS[nextIdx];

  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] py-14 md:py-24 px-3 sm:px-8 md:px-14 font-inter">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-row justify-between items-end mb-7 md:mb-10">
          <AnimatedItem>
            <h2 className="text-[3.2rem] sm:text-[4rem] md:text-[12rem] leading-none font-medium tracking-[-0.08em] text-black">
              BLOGS
            </h2>
          </AnimatedItem>
          <AnimatedItem delay={1} className="w-full">
            <div className="w-full md:text-right text-xs sm:text-base md:text-[1.6rem] md:leading-none text-black/80 font-inter font-regular">
              TETUR. SUSPENDISSE ORCI NISL<br />
              CONGUE EGESTAS SAGITTIS
            </div>
          </AnimatedItem>
        </div>
        <div className="w-[95%] max-w-[1200px] mx-auto relative rounded-lg overflow-hidden shadow-sm h-[320px] sm:h-[420px] md:h-[500px]">
          {/* Slides container */}
          <div className="absolute inset-0 w-full h-full"
               style={{ perspective: 900, overflow: "clip" }}>
            {/* Current Slide */}
            <div
              className={`
                absolute top-0 left-0 w-full h-full transition-transform duration-300
                ${direction === 1 ? "-translate-x-full" : "translate-x-0"}
                z-10
              `}
              style={{ willChange: "transform" }}
            >
              <BlogSlide blog={current} />
            </div>
            {/* Next Slide (appears from right) */}
            <div
              className={`
                absolute top-0 left-0 w-full h-full transition-transform duration-300
                ${direction === 1 ? "translate-x-0" : "translate-x-full"}
                z-20
              `}
              style={{ willChange: "transform" }}
            >
              {direction === 1 && <BlogSlide blog={next} />}
            </div>
          </div>
          {/* Arrow navigation */}
          <button
            className="absolute top-1/2 right-0 translate-x-full z-30 -translate-y-1/2 bg-white/80 hover:bg-white text-black shadow-sm p-2 rounded-full border border-gray-200 transition"
            onClick={nextBlog}
            aria-label="Next blog"
            disabled={direction !== 0}
          >
            <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        {/* CTA button */}
        <div className="w-full flex justify-center mt-10 md:mt-14">
          <Link 
            to="/blog" 
            className="inline-block px-8 md:px-10 py-3.5 md:py-4 bg-black text-white text-sm md:text-base font-medium tracking-wide hover:opacity-90 transition min-w-[180px] text-center" 
            style={{ borderRadius: 0 }}
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}

function BlogSlide({ blog }) {
  return (
    <Link to="/blog"><div className="w-full h-full relative">
      <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: "12px" }}>
        <img
          src={blog.bg}
          alt="Blog post"
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 30%' }}
          draggable={false}
        />
      </div>
      {/* Overlay card - positioned to cover bottom right 50% */}
      <div className="
          absolute right-0 bottom-0
          bg-white shadow-md 
          p-4 sm:p-5 md:p-6
          w-full sm:w-[85%] md:w-[80%] lg:w-[75%]
          h-auto min-h-[50%] max-h-[80%]
          flex flex-col
          overflow-hidden
          transition-all duration-300
        " 
        style={{ 
          borderTopLeftRadius: "12px",
          borderBottomRightRadius: "12px"
        }}>
        <div className="flex-grow flex flex-col">
          <div className="text-[10px] md:pl-8 md:pt-12 sm:text-xs font-normal mb-2 sm:mb-3 text-gray-500">
            {blog.cat} &nbsp;&nbsp;|&nbsp;&nbsp; {blog.date}
          </div>
          <h3 className="font-semibold md:pl-8 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 sm:mb-3 text-black leading-tight">
            {blog.title}
          </h3>
          <div className="max-w-[800px] text-sm md:pl-8 sm:text-base md:text-lg text-[#404040] leading-relaxed line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
            {blog.summary}
          </div>
        </div>
      </div>
    </div></Link>
  );
}
