import AuthorImg from "../assets/images/author/authorimage.jpeg";
import LeftImg from "../assets/images/author/leftImg.png";
import RightImg from "../assets/images/author/rightImg.png";
import QuoteIcon from "../assets/images/author/quote.png";

export default function AboutAuthorSection() {
  return (
    <section className="w-full bg-[#FFF6ED] px-3 md:px-0 py-8 md:py-16 font-inter">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative">
        {/* Left quote and text */}
        <div className="flex flex-col flex-1 max-w-[28rem] md:max-w-[32rem] pl-2">
          <div className="flex items-start gap-2">
            <img src={QuoteIcon} alt="" className="w-7 md:w-9 mt-1 mb-2" />
        </div>
            <span className="font-playfairdisplay text-lg md:text-[4.6rem] font-regular text-black leading-snug tracking-[0.02em]">I have always believed</span>
          
          <div className="font-inter text-[1.6rem] md:text-[1.8rem] text-black font-regular mt-16 leading-snug tracking-[0.01em]">
            that interior design is more
            than just creating beautiful
            spaces. It’s about crafting
            environments that inspire,
            comfort.
          </div>
          <img src={LeftImg} alt="" className="mt-9 w-[266px] h-[263px] object-cover" />
        </div>

        {/* Author centered image */}
        <div className="flex flex-col items-center flex-1 basis-[380px] md:basis-[620px]">
          <img
            src={AuthorImg}
            alt="Author"
            className="w-[320px] md:w-[620px] h-full md:h-full object-cover"
            style={{ objectPosition: "center top" }}
          />
        </div>

        {/* Right text block and image */}
        <div className="flex flex-col flex-1 max-w-[30rem] md:max-w-[40rem] pr-2 items-end">
          <img src={RightImg} alt="" className="w-[272.47px] h-[279.79px] object-cover mb-28" />
          <div className="font-inter text-black text-[1.6rem] md:text-[1.8rem] font-regular text-right leading-snug tracking-[0.01em]">
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
