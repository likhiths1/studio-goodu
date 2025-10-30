import BgImg from "../assets/images/blogs/back.png";
import GradientImg from "../assets/images/blogs/linear.png";
import BlogImg from "../assets/images/blogs/img1.png";

export default function FeaturedBlogSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center relative bg-[#FFF6ED] pb-[120px] md:pb-[180px]">
      {/* Background image and gradient, both object-contain */}
      <div className="relative w-full flex items-end justify-center" style={{ height: "440px" }}>
        <img
          src={BgImg}
          alt=""
          className="absolute left-0 top-0 w-full h-full object-content pointer-events-none z-0"
        />
        <img
          src={GradientImg}
          alt=""
          className="absolute left-0 bottom-0 w-full object-content pointer-events-none z-10"
          style={{ height: "88px" }} // 10% of 440px
        />
      </div>
      {/* Overlapping containers, half floating out of image */}
      <div
        className="relative z-20 w-full max-w-5xl flex flex-col md:flex-row items-start justify-center gap-x-12 gap-y-8 mx-auto"
        style={{
          marginTop: "-140px" // The amount containers float out of the BG but still inside parent
        }}
      >
        <div className="flex flex-col items-center">
          <span className="font-aerotis text-[2.6rem] text-black mb-5">Featured</span>
          <div className="bg-black px-8 py-8 flex flex-col w-[320px] md:w-[340px]">
            <h3 className="font-britishgreen text-white text-[1.28rem] md:text-[1.4rem] leading-tight mb-5">
              A Featured Blog Post<br />Title Would Go Here
            </h3>
            <p className="font-poppins text-white text-[1rem] leading-relaxed mb-7 pr-2 opacity-85">
              With meticulous attention to detail and an unwavering commitment to quality, we design spaces that are as exceptional as you are.
            </p>
            <a href="#" className="font-poppins text-white text-[0.92rem] tracking-tight underline underline-offset-4">
              READ POST &mdash;
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={BlogImg}
            alt="Featured Room"
            className="w-[320px] md:w-[340px] md:h-full h-[340px] object-cover border-2 border-[#4795D1] rounded-none shadow-lg"
            draggable={false}
          />
        </div>
      </div>
      {/* No extra spacer needed—pb-[180px] on section ensures next section never overlaps */}
    </section>
  );
}
