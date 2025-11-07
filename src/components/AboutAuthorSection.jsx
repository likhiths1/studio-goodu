import AuthorImg from "../assets/images/team/person1.jpg";
import LeftImg from "../assets/images/author/leftImg.png";
import RightImg from "../assets/images/author/rightImg.png";
import QuoteIcon from "../assets/images/author/quote.png";

export default function AboutAuthorSection() {
  return (
    <section className="w-full bg-[#FFF6ED] px-4 sm:px-6 md:px-6 lg:px-8 xl:px-12 2xl:px-0 py-8 md:py-16 font-inter">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6 relative">
        {/* Left quote and text */}
        <div className="flex flex-col flex-1 w-full max-w-full md:max-w-[32rem] pl-0 sm:pl-2">
          <div className="flex items-start gap-2">
            <img src={QuoteIcon} alt="" className="w-6 sm:w-7 md:w-9 mt-1 mb-2" />
          </div>
          <span className="font-playfairdisplay text-3xl sm:text-4xl lg:text-[4.6rem] font-regular text-black leading-tight sm:leading-snug tracking-[0.02em]">
            I have always believed
          </span>

          <div className="font-inter text-base sm:text-lg md:text-[1.6rem] lg:text-[1.8rem] text-black font-regular mt-6 sm:mt-10 md:mt-16 leading-relaxed sm:leading-snug tracking-[0.01em]">
            that interior design is more
            than just creating beautiful
            spaces. It’s about crafting
            environments that inspire,
            comfort.
          </div>
          <img
            src={LeftImg}
            alt=""
            className="mt-6 sm:mt-8 md:mt-9 w-32 h-32 sm:w-44 sm:h-44 md:w-[266px] md:h-[263px] object-cover"
          />
        </div>

        {/* Author centered image */}
        <div className="flex flex-col items-center flex-1 basis-auto md:basis-[620px] w-full">
          <img
            src={AuthorImg}
            alt="Author"
            className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[520px] lg:max-w-[620px] h-auto object-cover"
            style={{ objectPosition: "center top" }}
          />
        </div>

        {/* Right text block and image */}
        <div className="flex flex-col flex-1 w-full max-w-full md:max-w-[40rem] pr-0 sm:pr-2 items-center md:items-end">
          <img
            src={RightImg}
            alt=""
            className="w-32 h-32 sm:w-44 sm:h-44 md:w-[272.47px] md:h-[279.79px] object-cover mb-10 sm:mb-16 md:mb-28"
          />
          <div className="font-inter text-black text-base sm:text-lg md:text-[1.6rem] lg:text-[1.8rem] font-regular text-center md:text-right leading-relaxed sm:leading-snug tracking-[0.01em]">
            My approach to design is
            centered around blending
            timeless beauty with
            modern functionality.
            I believe that every design
            should reflect the unique
            personality of its owner.
          </div>
        </div>
      </div>
    </section>
  );
}
