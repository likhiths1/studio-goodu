import { useState } from "react";
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import BlogBg from "../assets/images/blogs/blog1.jpg";
import BlogBg2 from "../assets/images/blogs/stor3.jpg";
import GreenOverlay from "../assets/images/greenoverlay.png";

const BLOGS = [
  {
    bg: BlogBg,
    cat: "DEVELOPMENT",
    date: "18 March 2025",
    title: "Ze Art Galleries Worldwide, High End Art Gallery",
    summary: "The intersection of art and interior design has never been more prominent than in today's high-end galleries. Our latest project showcases how we transformed a traditional gallery space into a modern, interactive experience. By carefully considering lighting, flow, and spatial relationships, we've created an environment that enhances both the artwork and visitor experience. The design incorporates sustainable materials and smart technology to create a space that's both beautiful and functional."
  },
  {
    bg: BlogBg2,
    cat: "INTERIORS",
    date: "22 March 2025",
    title: "The Future of Living Spaces",
    summary: "As we move further into the decade, the way we think about living spaces continues to evolve. Our latest research shows a growing demand for multi-functional areas that can adapt to various needs throughout the day. From home offices that transform into entertainment spaces to kitchens that serve as social hubs, the future is all about flexibility. We're incorporating smart home technology, sustainable materials, and innovative storage solutions to create spaces that are as practical as they are beautiful."
  },
  {
    bg: BlogBg,
    cat: "DESIGN",
    date: "30 March 2025",
    title: "Modern Architecture Trends 2025",
    summary: "This year's architectural trends focus on creating harmony between indoor and outdoor spaces. Large, floor-to-ceiling windows, open floor plans, and natural materials dominate the scene. We're seeing a strong emphasis on sustainability, with features like green roofs, solar panels, and rainwater harvesting systems becoming standard. The use of smart home technology is also on the rise, allowing for greater energy efficiency and convenience. These trends reflect a growing desire for homes that are both environmentally responsible and technologically advanced."
  },
  {
    bg: BlogBg2,
    cat: "SUSTAINABILITY",
    date: "5 April 2025",
    title: "Eco-Friendly Materials Revolution",
    summary: "The construction industry is undergoing a green revolution with innovative, sustainable materials. From recycled plastics and reclaimed wood to self-healing concrete and mycelium-based materials, we're exploring cutting-edge solutions that reduce environmental impact. These materials not only benefit the planet but also offer superior performance and aesthetic appeal. Our latest projects showcase how sustainable design can be both beautiful and responsible."
  },
  {
    bg: BlogBg,
    cat: "TECHNOLOGY",
    date: "12 April 2025",
    title: "Smart Homes of the Future",
    summary: "The integration of AI and IoT in home design is transforming how we interact with our living spaces. Voice-controlled environments, automated climate control, and predictive maintenance are just the beginning. We're working on homes that learn from your habits and adapt to your needs, creating personalized experiences that enhance comfort and efficiency. The future of smart homes is about seamless integration of technology that serves the inhabitants, not the other way around."
  }
];

export default function BlogsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0); // 0: static, 1: next, -1: prev

  const [isAnimating, setIsAnimating] = useState(false);

  const nextBlog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(1);
    
    setTimeout(() => {
      setActive((prev) => (prev + 1) % BLOGS.length);
      setDirection(0);
      setIsAnimating(false);
    }, 500);
  };

  const prevBlog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(-1);
    
    setTimeout(() => {
      setActive((prev) => (prev - 1 + BLOGS.length) % BLOGS.length);
      setDirection(0);
      setIsAnimating(false);
    }, 500);
  };

  const current = BLOGS[active];
  const nextIdx = (active + 1) % BLOGS.length;
  const next = BLOGS[nextIdx];

  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] py-14 md:py-24 px-3 sm:px-8 md:px-14 font-inter">
      <div className="max-w-[90rem] mx-auto">
        <div className="w-full mb-7 md:mb-10">
          <AnimatedItem>
            <h2 className="text-[3.2rem] sm:text-[4rem] md:text-[12rem] leading-none font-medium tracking-[-0.08em] text-black text-left">
              BLOGS
            </h2>
          </AnimatedItem>
        </div>
        <div className="w-full relative rounded-lg overflow-hidden shadow-sm h-[380px] sm:h-[420px] md:h-[500px] lg:h-[600px] group">
          {/* Slides container */}
          <div className="absolute inset-0 w-full h-full"
               style={{ perspective: 900, overflow: "visible" }}>
            {/* Current Slide */}
            <div
              className={`
                absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out
                ${direction === 1 ? '-translate-x-full' : direction === -1 ? 'translate-x-full' : 'translate-x-0'}
                z-10
              `}
              style={{ willChange: 'transform' }}
            >
              <BlogSlide blog={current} />
            </div>
            {/* Next/Previous Slide */}
            <div
              className={`
                absolute top-0 w-full h-full transition-all duration-500 ease-in-out
                ${direction === 1 ? 'left-full translate-x-0' : 'left-0 translate-x-full'}
                z-20
              `}
              style={{ willChange: 'transform' }}
            >
              {direction !== 0 && (
                <BlogSlide blog={direction === 1 
                  ? BLOGS[(active + 1) % BLOGS.length] 
                  : BLOGS[(active - 1 + BLOGS.length) % BLOGS.length]} 
                />
              )}
            </div>
          </div>
          {/* Arrow navigation */}
          <button
            onClick={prevBlog}
            className="flex items-center justify-center absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 shadow-lg hover:scale-105"
            aria-label="Previous blog"
            disabled={direction !== 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextBlog}
            className="flex items-center justify-center absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 shadow-lg hover:scale-105"
            aria-label="Next blog"
            disabled={direction !== 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* CTA button */}
        <div className="w-full flex justify-center mt-8 sm:mt-10 md:mt-14">
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
    <Link to="/blog" className="block w-full h-full">
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
            padding: '1rem 0.75rem 1.5rem',
            '@media (min-width: 640px)': {
              padding: '1.25rem 1.25rem 2.5rem',
            },
            '@media (min-width: 768px)': {
              padding: '1.5rem 1.5rem 3rem',
            },
            '@media (min-width: 1024px)': {
              padding: '2rem 2rem 3rem',
            },
            color: 'white',
            paddingBottom: '2.5rem',
            '@media (min-width: 640px)': {
              paddingBottom: '3rem',
            },
            '@media (min-width: 1024px)': {
              paddingBottom: '4rem',
            }
          }}
        >
          <div className="w-full lg:max-w-[60%] text-left lg:ml-[40%] px-3 sm:px-6 md:pr-10 mb-4 sm:mb-6">
            <div className="text-[10px] xs:text-xs sm:text-sm md:text-base font-normal mb-1 sm:mb-2 text-white/80">
              {blog.cat} <span className="mx-2">|</span> {blog.date}
            </div>
            <h3 className="font-semibold text-base sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-3 leading-tight">
              {blog.title}
            </h3>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed break-words line-clamp-2 sm:line-clamp-3 md:line-clamp-4">
              {blog.summary}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
