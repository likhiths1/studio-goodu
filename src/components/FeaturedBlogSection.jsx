import BgImg from "../assets/images/blogs/back.png";
import GradientImg from "../assets/images/blogs/linear.png";
import BlogImg from "../assets/images/blogs/img1.png";

export default function FeaturedBlogSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-visible"
      // Add enough padding-bottom to ensure content does not overlap next section
      style={{
        minHeight: "500px", // matches background height plus overflow
        paddingBottom: "180px", // or use pb-44 in Tailwind for about 11rem
      }}
    >
      {/* Stacked background image and gradient */}
      <div className="relative w-full" style={{ height: "360px" }}>
        {/* Background image */}
        <img
          src={BgImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient layer - covers 10% from bottom */}
        <img
          src={GradientImg}
          alt=""
          className="absolute left-0 bottom-0 w-full"
          style={{ height: "36px" }}
        />
      </div>

      {/* Floating content row – half above/half below background */}
      <div 
        className="absolute left-1/2 flex flex-col md:flex-row items-start justify-center gap-x-12 gap-y-8 z-10"
        style={{
          top: "300px", // Position: background height minus half of container
          transform: "translateX(-50%)",
        }}
      >
        {/* Featured label and blog text box */}
        <div className="flex flex-col items-start">
          <span className="font-aerotis text-[2rem] text-[#6c6c6c] mb-5">Featured</span>
          <div className="bg-black px-8 py-8 flex flex-col w-[320px] md:w-[340px]">
            <h3 className="font-britishgreen text-white text-[1.28rem] md:text-[1.4rem] leading-tight mb-5">
              A Featured Blog Post<br />Title Would Go Here
            </h3>
            <p className="font-poppins text-white text-[1rem] leading-relaxed mb-7 pr-2 opacity-85">
              With meticulous attention to detail and an unwavering commitment to quality, we design spaces that are as exceptional as you are.
            </p>
            <a
              href="#"
              className="font-poppins text-white text-[0.92rem] tracking-tight underline underline-offset-4"
            >
              READ POST &mdash;
            </a>
          </div>
        </div>
        {/* Featured image */}
        <div className="flex flex-col justify-center items-center">
          <img
            src={BlogImg}
            alt="Featured Room"
            className="w-[320px] md:w-[340px] h-[340px] object-cover border-2 border-[#4795D1] rounded-none shadow-lg"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
