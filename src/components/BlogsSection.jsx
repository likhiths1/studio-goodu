import { useState } from "react";
import BlogBg from "../assets/images/blogs/bg.png";

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
    bg: BlogBg,
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
    <section className="w-full bg-[#FFF6ED] py-14 md:py-24 px-2 sm:px-8 font-inter">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-row justify-between items-start mb-7 md:mb-10">
          <h2 className="text-[3.2rem] sm:text-[4rem] md:text-[10rem] leading-none font-medium tracking-tight text-black">
            BLOGS
          </h2>
          <div className="mt-3 md:mt-0 md:text-right text-xs uppercase sm:text-base md:text-[1.2rem] md:leading-none text-black/80 font-inter font-regular">
            Design stories that inspire living beautifully. <br />
            WHERE LIVING BECOMES AN ART FORM.
            
          </div>
        </div>
        <div className="w-full relative rounded-sm overflow-hidden shadow-none h-[260px] sm:h-[340px] md:h-[420px]">
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
            className="absolute top-1/2 right-2 sm:-right-4 z-30 translate-y-[-50%] bg-white/80 hover:bg-white text-black shadow-sm p-2 rounded-full border border-gray-200 transition"
            onClick={nextBlog}
            aria-label="Next blog"
            disabled={direction !== 0}
          >
            <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function BlogSlide({ blog }) {
  return (
    <div className="w-full h-full relative">
      <img
        src={blog.bg}
        alt="Blog post"
        className="block w-full h-full object-cover object-center"
        style={{ borderRadius: "12px" }}
        draggable={false}
      />
      {/* Overlay card */}
      <div className="
          absolute bottom-0 right-0 
          bg-white shadow-md 
          px-4 py-5 sm:px-6 sm:py-7 md:px-8 md:py-8
          w-[96%] xs:w-[90%] sm:w-[78%] md:w-[66%] 
        " 
        style={{ borderRadius: "16px 0 0 0.5rem" }}>
        <div className="text-[0.72rem] sm:text-xs md:text-sm font-normal mb-1 text-gray-500">
          {blog.cat} &nbsp;&nbsp;|&nbsp;&nbsp; {blog.date}
        </div>
        <div className="font-semibold text-[1.1rem] sm:text-xl mb-2 text-black">
          {blog.title}
        </div>
        <div className="text-xs md:text-sm lg:text-base text-[#606060] leading-snug sm:leading-relaxed">
          {blog.summary}
        </div>
      </div>
    </div>
  );
}
