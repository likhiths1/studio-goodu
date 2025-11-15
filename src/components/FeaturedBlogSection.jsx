import BgImg from "../assets/images/blogs/back.png";
import GradientImg from "../assets/images/blogs/grad2.png";
import BlogImg from "../assets/images/portfoliodetail/snob1.jpg";

export default function FeaturedBlogSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center relative bg-[#FFF6ED] pb-[120px] md:pb-[180px]">
      {/* Max-width container for heading only (matches Internal) */}
      <div className="max-w-[85rem] z-50 w-full mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-5xl translate-y-[80%] sm:text-8xl md:text-10xl lg:text-[12rem] font-medium tracking-tight text-black font-inter mb-8 sm:mb-12">
          FEATURED
        </h2>
      </div>

      {/* Background image and gradient as in old code */}
      <div className="relative w-full flex items-end justify-center" style={{ height: "840px" }}>
        <img
          src={BgImg}
          alt=""
          className="absolute left-0 top-0 w-full h-full object-content pointer-events-none z-0"
        />
        <img
          src={GradientImg}
          alt=""
          className="absolute left-0 bottom-0 w-full object-content pointer-events-none z-10"
          style={{ height: "220px" }} // 10% of 440px
        />
      </div>

      {/* Overlapping containers, half floating out of image */}
      <div
        className="relative z-20 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-end justify-center gap-x-12 gap-y-8 mx-auto"
        style={{
          marginTop: "-600px"
        }}
      >
        <div className="flex flex-col items-start">
          <div className="bg-black px-10 py-10 flex flex-col justify-between w-[420px] md:w-[520px] h-[520px] md:h-[640px]">
            <h3 className="font-inter text-white text-[1.28rem] md:text-[2rem] leading-tight mb-1">
              A Featured Blog Post<br />Title Would Go Here
            </h3>
            <p className="font-inter text-white text-[1rem] md:text-[1.3rem] leading-relaxed mb-5 pr-2 opacity-85">
              With meticulous attention to detail and an unwavering commitment to quality, we design spaces that are as exceptional as you are.
            </p>
            <a href="#" className="font-inter text-white text-[1.2rem] tracking-tight underline underline-offset-4">
              READ POST
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={BlogImg}
            alt="Featured Room"
            className="w-[420px] md:w-[520px] h-[520px] md:h-[780px] object-cover border-2 border-[#4795D1] rounded-none shadow-lg"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
