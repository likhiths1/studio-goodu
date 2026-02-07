import BannerImg from "../assets/images/portfoliodetail/sree5.png";
import LineImg from "../assets/images/contact/line.png";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

export default function ContactUsSection() {
  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] py-10 px-3 sm:px-8 md:px-14 flex flex-col items-center">
      <div className="max-w-[90rem] w-full mx-auto grid grid-cols-1 md:mt-12 md:grid-cols-2 gap-x-12 gap-y-10 items-start bg-[#FFF6ED]">
        {/* Left Form */}
        <AnimatedItem>
          <div className="flex flex-col pt-2 max-w-[40rem] w-full">
            <div className="mb-7 font-inter text-[2.4rem] font-regular leading-tight text-black">
              We Are Ready to Help You<br />Elevate Your Space
            </div>
            <form 
              className="flex flex-col gap-10 bg-[#FFF6ED] p-0 border-none rounded-none"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = form.name.value;
                const email = form.email.value;
                const service = form.service.value;
                const message = form.message.value;
                
                const subject = `Service Inquiry: ${service}`;
                const body = `Hi Studio Goodu Team,%0D%0A%0D%0AI am ${name}. I'm reaching out regarding ${service}.%0D%0A%0D%0A${message ? message + '%0D%0A%0D%0A' : ''}Looking forward to your response.%0D%0A%0D%0ABest regards,%0D%0A${name}`;
                
                window.location.href = `mailto:studiogoodu@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
              }}
              name="contactForm"
            >
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                className="bg-[#EFE2D3] rounded-none px-4 py-4 text-base font-inter text-[#3D3C3C] placeholder:text-[#3D3C3C] border-none outline-none focus:ring-2 focus:ring-[#4D696C] transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                className="bg-[#EFE2D3] rounded-none px-4 py-4 text-base font-inter text-[#3D3C3C] placeholder:text-[#3D3C3C] border-none outline-none focus:ring-2 focus:ring-[#4D696C] transition"
                required
              />
              <input
                type="text"
                name="service"
                placeholder="SERVICE INTERESTED IN"
                className="bg-[#EFE2D3] rounded-none px-4 py-4 text-base font-inter text-[#3D3C3C] placeholder:text-[#3D3C3C] border-none outline-none focus:ring-2 focus:ring-[#4D696C] transition"
                required
              />
              <textarea
                name="message"
                placeholder="WRITE YOUR MESSAGE HERE"
                className="bg-[#EFE2D3] rounded-none px-4 py-4 h-40 text-base font-inter text-[#3D3C3C] placeholder:text-[#3D3C3C] border-none outline-none focus:ring-2 focus:ring-[#4D696C] transition resize-none"
                required
              />
              <button
                type="submit"
                className="mt-8 w-fit px-6 py-2 rounded-none font-inter font-medium text-white bg-[#4D696C] hover:bg-[#3a5051] transition"
                style={{ letterSpacing: 0.5 }}
              >
                START YOUR JOURNEY
              </button>
            </form>
          </div>
        </AnimatedItem>

        {/* Right Image */}
        <AnimatedItem delay={1}>
          <div className="w-full min-h-[300px] flex justify-center items-start">
            <img
              src={BannerImg}
              alt=""
              className="w-full h-[700px] object-contain"
            />
          </div>
        </AnimatedItem>
      </div>

      {/* Bottom Info Row */}
      <div className="w-full mt-24 flex flex-col md:flex-row md:justify-center gap-y-12 md:gap-x-12 tracking-tight items-center text-center">
        {/* Email/Phone */}
        <AnimatedItem delay={2}>
          <div className="text-base md:text-xl flex flex-col gap-3 text-center min-w-[240px] px-6">
            <span className="font-inter text-[#4D696C] uppercase whitespace-nowrap">OUR EMAIL & PHONE</span>
            <span className="font-playfairdisplay text-lg md:text-xl text-black mt-2">studiogoodu@gmail.com</span>
            <span className="font-playfairdisplay text-lg md:text-xl text-black">08049721999</span>
          </div>
        </AnimatedItem>
        {/* Line Image */}
        <AnimatedItem delay={3}>
          <div className="hidden md:flex flex-col items-center justify-center h-full px-4">
            <img src={LineImg} alt="" className="h-16 w-auto" />
          </div>
        </AnimatedItem>
        {/* Address - centered */}
        <AnimatedItem delay={4}>
          <div className="text-base md:text-xl font-inter text-black flex flex-col gap-3 items-center text-center min-w-[400px] px-8 mx-8">
            <span className="text-[#4D696C] uppercase whitespace-nowrap">STUDIO ADDRESS</span>
            <div className="font-playfairdisplay text-lg md:text-xl mt-2 text-center">
              <p>3rd Block, 1st, 19/H, Main Road,</p>
              <p>3rd Stage 4th Block, Basaveshwar Nagar,</p>
              <p>Bengaluru, Karnataka 560079</p>
            </div>
            <a 
              href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDAgBECMYJxiABBiKBTIGCAAQRRg5MgwIARAjGCcYgAQYigUyBggCEEUYOzIGCAMQRRg7Mg0IBBAAGIMBGLEDGIAEMhMIBRAuGIMBGMcBGLEDGNEDGIAEMhMIBhAuGIMBGMcBGLEDGNEDGIAEMg0IBxAuGMcBGNEDGIAEMgcICBAAGIAEMgcICRAuGIAE0gEJNTgxMmowajE1qAIIsAIB8QVAvIlMIZWn0w&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTu6xXcdPa47MdCMpfHix8Ck&daddr=3rd+Block,+1st,+19/H,+Main+Road,+3rd+Stage+4th+Block,+3rd+Stage,+Basaveshwar+Nagar,+Bengaluru,+Karnataka+560079"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 uppercase text-[#4D696C] underline cursor-pointer text-sm hover:opacity-80"
            >
              STUDIO GOODU ADDRESS
            </a>
          </div>
        </AnimatedItem>
        {/* Line Image */}
        <AnimatedItem delay={5}>
          <div className="hidden md:flex flex-col items-center justify-center h-full px-4">
            <img src={LineImg} alt="" className="h-16 w-auto" />
          </div>
        </AnimatedItem>
        {/* Hours */}
        <AnimatedItem delay={6}>
          <div className="text-base md:text-xl flex flex-col gap-3 text-center min-w-[240px] px-6">
            <span className="font-inter text-[#4D696C] uppercase whitespace-nowrap">STUDIO HOURS</span>
            <span className="font-playfairdisplay text-lg md:text-xl text-black mt-2">Monday – Friday<br />10am – 7pm</span>
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
