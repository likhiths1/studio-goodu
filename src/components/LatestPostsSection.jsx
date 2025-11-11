import { useState } from "react";
import { Link } from "react-router-dom";
import BlogBg from "../assets/images/blogs/blogg1.png";

const POSTS = [
  {
    id: 1,
    bg: BlogBg,
    cat: "DEVELOPMENT",
    date: "18 March 2025",
    title: "Ze Art Galleries Worldwide, High End Art Gallery",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    slug: "ze-art-galleries-worldwide"
  },
  {
    id: 2,
    bg: BlogBg,
    cat: "INTERIORS",
    date: "22 March 2025",
    title: "The Future of Living Spaces",
    summary:
      "Design for tomorrow's lifestyle: trends, comfort, and technology combined. Discover how to transform your home for a modern world with warmth and efficiency.",
    slug: "future-of-living-spaces"
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

import GreenOverlay from "../assets/images/greenoverlay.png";

function BlogSlide({ blog }) {
  return (
    <Link to={`/blog/${blog.slug}`} className="block w-full h-full">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={blog.bg}
            alt="Blog post"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </div>
        <div 
          className="absolute inset-0 bg-cover bg-left"
          style={{ 
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%), url(${GreenOverlay})`,
            backgroundSize: '100% 100%',
            backgroundBlendMode: 'overlay',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            padding: '2rem 2rem 3rem 2rem',
            color: 'white',
            paddingBottom: '4rem'
          }}
        >
          <div className="w-full text-left">
            <div className="text-sm sm:text-base font-normal mb-2 text-white/80">
              {blog.cat} <span className="mx-2">|</span> {blog.date}
            </div>
            <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 leading-tight">
              {blog.title}
            </h3>
            <div className="text-base sm:text-lg text-white/90 leading-relaxed break-words">
              {blog.summary}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
