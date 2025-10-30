import AuthorImg from "../assets/images/author/author.png";
import LeftImg from "../assets/images/author/leftImg.png";
import RightImg from "../assets/images/author/rightImg.png";
import QuoteIcon from "../assets/images/author/quote.png";

export default function AboutAuthorSection() {
  return (
    <section className="w-full bg-[#FFF6ED] px-3 md:px-0 py-8 md:py-16 font-inter">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative">
        {/* Left quote and text */}
        <div className="flex flex-col flex-1 max-w-[21rem] md:max-w-[19rem] pl-2">
          <div className="flex items-start gap-2">
            <img src={QuoteIcon} alt="" className="w-7 md:w-9 mt-1 mb-2" />
        </div>
            <span className="font-playfairdisplay text-lg md:text-[2.3rem] font-regular text-black leading-none">I have always believed</span>
          
          <div className="font-inter text-[1.5rem] md:text-base text-black font-regular mt-2 leading-snug">
            that interior design is more <br />
            than just creating beautiful <br />
            spaces. It’s about crafting <br />
            environments that inspire,<br />
            comfort.
          </div>
          <img src={LeftImg} alt="" className="mt-9 w-[166px] h-[163px] object-cover" />
        </div>

        {/* Author centered image */}
        <div className="flex flex-col items-center flex-1 basis-[310px] md:basis-[370px]">
          <img
            src={AuthorImg}
            alt="Author"
            className="w-[230px] md:w-[340px] h-full md:h-full object-cover shadow-lg"
            style={{ objectPosition: "center top" }}
          />
        </div>

        {/* Right text block and image */}
        <div className="flex flex-col flex-1 max-w-[20rem] pr-2 items-end">
          <img src={RightImg} alt="" className="w-[172.47px] h-[219.79px] object-cover mb-6" />
          <div className="font-inter text-black text-[1.5rem] md:text-base font-regular text-right leading-relaxed">
            My approach to design is<br />
            centered around blending<br />
            timeless beauty with<br />
            modern functionality.<br />
            I believe that every design<br />
            should reflect the unique<br />
            personality of its owner.
          </div>
        </div>
      </div>
    </section>
  );
}
