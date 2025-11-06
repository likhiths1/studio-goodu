import BannerImg from "../assets/images/contact/banner.png";
import LineImg from "../assets/images/contact/line.png";

export default function ContactUsSection() {
  return (
    <section className="w-full bg-[#FFF6ED] py-10 px-3 sm:px-8 md:px-14 flex flex-col items-center">
      <div className="max-w-[90rem] w-full mx-auto grid grid-cols-1 md:mt-12 md:grid-cols-2 gap-x-12 gap-y-10 items-start bg-[#FFF6ED]">
        {/* Left Form */}
        <div className="flex flex-col pt-2 max-w-[40rem] w-full">
          <div className="mb-7 font-inter text-[2.4rem] font-regular leading-tight text-black">
            We Are Ready to Help You<br />Elevate Your Space
          </div>
          <form className="flex flex-col gap-12 bg-[#FFF6ED] p-0 border-none rounded-none">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="bg-[#EFE2D3] rounded-none px-4 py-4 text-base font-inter text-[#3D3C3C] placeholder:text-[#3D3C3C] border-none outline-none focus:ring-2 focus:ring-[#4D696C] transition"
            />
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="bg-[#EFE2D3] rounded-none px-4 py-4 text-base font-inter text-[#3D3C3C] placeholder:text-[#3D3C3C] border-none outline-none focus:ring-2 focus:ring-[#4D696C] transition"
            />
            <input
              type="text"
              placeholder="SERVICE INTERESTED IN"
              className="bg-[#EFE2D3] rounded-none px-4 py-4 text-base font-inter text-[#3D3C3C] placeholder:text-[#3D3C3C] border-none outline-none focus:ring-2 focus:ring-[#4D696C] transition"
            />
            <textarea
              placeholder="WRITE YOUR MESSAGE HERE"
              className="bg-[#EFE2D3] rounded-none px-4 py-4 h-40 text-base font-inter text-[#3D3C3C] placeholder:text-[#3D3C3C] border-none outline-none focus:ring-2 focus:ring-[#4D696C] transition resize-none"
            />
          </form>
          <button
            type="submit"
            className="mt-16 w-fit px-6 py-2 rounded-none font-inter font-medium text-white bg-[#4D696C] hover:bg-[#3a5051] transition"
            style={{ letterSpacing: 0.5 }}
          >
            START YOUR JOURNEY
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full min-h-[300px] flex justify-center items-start">
          <img
            src={BannerImg}
            alt=""
            className="w-full h-[700px] object-contain"
          />
        </div>
      </div>

      {/* Bottom Info Row */}
      <div className="max-w-[90rem] w-full mt-24 flex flex-col md:grid md:grid-cols-5 md:justify-center gap-y-6 tracking-tight items-center text-center">
        {/* Email/Phone */}
        <div className="col-span-1 text-[1.01rem] md:text-[1.8rem] flex flex-col gap-1 text-justify max-w-xs">
          <span className="font-inter text-[#4D696C] uppercase mb-1">OUR EMAIL & PHONE</span>
          <span className="font-playfairdisplay md:text-[1.4rem] text-black">info@velainteriors.com</span>
          <span className="font-playfairdisplay md:text-[1.4rem] text-black">003 404 507 1200</span>
        </div>
        {/* Line Image */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <img src={LineImg} alt="" className="h-16 w-auto" />
        </div>
        {/* Address - centered */}
        <div className="col-span-1 text-[1.01rem] md:text-[1.8rem] font-inter text-black flex flex-col gap-1 items-center text-center max-w-xs mx-auto">
          <span className="text-[#4D696C] uppercase mb-1">STUDIO ADDRESS</span>
          <span className="font-playfairdisplay md:text-[1.4rem]">
            123 Peachtree Lane,<br />Suite 400, Atlanta, GA 30309
          </span>
        </div>
        {/* Line Image */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <img src={LineImg} alt="" className="h-16 w-auto" />
        </div>
        {/* Hours */}
        <div className="col-span-1 text-[1.01rem] md:text-[1.8rem] flex flex-col gap-1 text-justify max-w-xs">
          <span className="font-inter text-[#4D696C] uppercase mb-1">STUDIO HOURS</span>
          <span className="font-playfairdisplay md:text-[1.4rem] text-black">Monday – Friday<br />10am – 6pm</span>
        </div>
      </div>
    </section>
  );
}
