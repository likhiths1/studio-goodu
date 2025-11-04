import { useState } from "react";
import { Link } from 'react-router-dom';
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
        <div className="flex flex-row justify-between items-end mb-7 md:mb-10">
          <h2 className="text-[3.2rem] sm:text-[4rem] md:text-[12rem] leading-none font-medium tracking-tight text-black md:-ml-[4vw]">
            BLOGS
          </h2>
          <div className="md:text-right text-xs sm:text-base md:text-[1.6rem] md:leading-none text-black/80 font-inter font-regular md:mr-[4vw] md:w-94">
            TETUR. SUSPENDISSE ORCI NISL<br />
            CONGUE EGESTAS SAGITTIS
          </div>
        </div>
        <div className="w-full relative rounded-sm overflow-hidden shadow-none h-[360px] sm:h-[480px] md:h-[720px]">
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
        {/* CTA button */}
        <div className="w-full flex justify-center mt-8 md:mt-12">
          <Link to="/blogt" className="inline-block px-6 md:px-7 py-2.5 md:py-3 bg-black text-white text-xs md:text-sm tracking-tight hover:opacity-90 transition" style={{ borderRadius: 0 }}>
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
}

function BlogSlide({ blog }) {
  return (
    <Link to="/blog"><div className="w-full h-full relative">
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
          px-5 py-6 sm:px-7 sm:py-8 md:px-9 md:py-10
          w-[96%] xs:w-[90%] sm:w-[78%] md:w-[64%]
          h-[50%]
          flex flex-col justify-start
        " 
        style={{ borderRadius: "16px 0 0 0.5rem" }}>
        <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-normal mb-3 text-gray-500">
          {blog.cat} &nbsp;&nbsp;|&nbsp;&nbsp; {blog.date}
        </div>
        <div className="font-semibold text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-3 text-black leading-tight">
          {blog.title}
        </div>
        <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.35rem] text-[#404040] leading-snug sm:leading-normal md:leading-relaxed line-clamp-4 sm:line-clamp-5 md:line-clamp-6">
          {blog.summary}
        </div>
      </div>
    </div></Link>
  );
}
