import { useState } from "react";
import BlogBg from "../assets/images/blogs/blogg1.png";

const POSTS = [
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

export default function LatestPostsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0); // 0 = no animation, 1 = animating

  function nextPost() {
    if (direction === 1) return; // prevent spam clicks
    setDirection(1);
    setTimeout(() => {
      setActive((active + 1) % POSTS.length);
      // keep direction = 1 to keep next slide visible fixed after animation
    }, 300); // match transition duration, 300ms
  }

  const current = POSTS[active];
  const nextIdx = (active + 1) % POSTS.length;
  const next = POSTS[nextIdx];

  return (
    <section className="w-full bg-[#FEF6ED] pt-14 pb-20 flex flex-col items-center justify-center font-inter">
      <div className="max-w-[90rem] w-full mx-auto px-3 text-center">
        <span className="text-[1.6rem] md:text-[2.1rem] text-black block tracking-wide">DESIGN JOURNAL</span>
        <h2 className="font-inter text-black text-[3.2rem] md:text-[10rem] md:-mt-12 font-medium tracking-tighter mt-1 mb-10">LATEST POSTS</h2>
      </div>
      <div className="w-full max-w-7xl mx-auto relative h-[320px] sm:h-[400px] md:h-[500px] px-6">
        <div className="absolute inset-0 w-full h-full" style={{ perspective: 900, overflow: "clip" }}>
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
          {/* Next Slide */}
          <div
            className={`
              absolute top-0 left-0 w-full h-full transition-transform duration-300
              ${direction === 1 ? "translate-x-0" : "translate-x-full"}
              z-20
            `}
            style={{ willChange: "transform" }}
          >
            <BlogSlide blog={next} />
          </div>
        </div>
        {/* Arrow navigation */}
        <button
          className="absolute top-1/2 right-0 translate-x-[calc(100%+1rem)] z-30 -translate-y-1/2 bg-white/80 hover:bg-white text-black shadow-sm p-2 rounded-full border border-gray-200 transition"
          onClick={nextPost}
          aria-label="Next blog"
          disabled={direction === 1}
        >
          <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <div className="flex items-center w-[500px] text-center text-xs tracking-wide text-[#888]">
          <div className="flex-grow border-t border-[#bbb]"></div>
          <span className="px-4 font-inter text-lg md:text-2xl">SEE ALL</span>
          <div className="flex-grow border-t border-[#bbb]"></div>
        </div>
      </div>
    </section>
  );
}

function BlogSlide({ blog }) {
  return (
    <div className="w-full h-full relative">
      <div className="relative h-full w-full">
        <img
          src={blog.bg}
          alt="Blog post"
          className="block w-full h-full object-cover object-center rounded-md"
          draggable={false}
        />
        {/* Overlay card */}
        <div
          className="absolute bottom-0 right-0 bg-white shadow-md px-6 py-5 sm:px-8 sm:py-7 md:px-10 md:py-8 w-full max-w-[90%]"
          style={{ borderRadius: "16px 0 0 0" }}
        >
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
    </div>
  );
}
