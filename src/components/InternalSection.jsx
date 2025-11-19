// src/components/InternalSection.jsx

import img1 from '../assets/images/blogs/bg.png';
import img2 from '../assets/images/blogs/stor3.jpg';
import img3 from '../assets/images/contactback.jpg';
import { Link } from 'react-router-dom';

const internals = [
  {
    label: "",
    text: "2025 Interior Design Trends:<br>What's In, What's Out, and <br/> What's Next",
    image: img1,
    alt: "Internal Best Practice 1",
  },
  {
    label: "",
    text: "Parametric Design The Future of Creative Architecture",
    image: img2,
    alt: "Internal Best Practice 2",
  },
  {
    label: "",
    text: "Common On-Site Challenges and How Professionals Solve Them (2025 Guide)",
    image: img3,
    alt: "Internal Best Practice 2",
  },
];

export default function InternalSection() {
  return (
    <section className="bg-[#FFF6ED] py-6 sm:py-8 md:py-10 md:-mb-32">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-5xl sm:text-8xl md:text-10xl lg:text-[12rem] font-medium tracking-tight text-black font-inter mb-8 sm:mb-12">
          INTERNAL
        </h2>
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-6">
          {internals.map((item, i) => (
            <div key={i} className="flex flex-col items-center w-full sm:w-1/3 max-w-[400px] mx-auto">
              {i === 0 ? (
                <Link to="/blog/3" className="block w-full hover:opacity-90 transition-opacity">
                  {/* White Card with top rounded corners only */}
                  <div className="bg-white rounded-t-[20px] w-full p-4 sm:p-6 flex flex-col flex-1 h-[160px]">
                    <span className="text-xs sm:text-sm font-inter font-medium text-black/70 tracking-wide mb-2">{item.label}</span>
                    <span className="text-lg sm:text-xl font-inter font-normal text-black leading-tight flex-1" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                  </div>

                  {/* Image Box with bottom rounded corners only, directly attached */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-32 sm:h-64 object-cover rounded-b-[20px]"
                    draggable={false}
                  />
                </Link>
              ) : i === 1 ? (
                <Link to="/blog/4" className="block w-full hover:opacity-90 transition-opacity">
                  {/* White Card with top rounded corners only */}
                  <div className="bg-white rounded-t-[20px] w-full p-4 sm:p-6 flex flex-col flex-1 h-[160px]">
                    <span className="text-xs sm:text-sm font-inter font-medium text-black/70 tracking-wide mb-2">{item.label}</span>
                    <span className="text-lg sm:text-xl font-inter font-normal text-black leading-tight flex-1" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                  </div>

                  {/* Image Box with bottom rounded corners only, directly attached */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-32 sm:h-64 object-cover rounded-b-[20px]"
                    draggable={false}
                  />
                </Link>
              ) : i === 2 ? (
                <Link to="/blog/5" className="block w-full hover:opacity-90 transition-opacity">
                  {/* White Card with top rounded corners only */}
                  <div className="bg-white rounded-t-[20px] w-full p-4 sm:p-6 flex flex-col flex-1 h-[160px]">
                    <span className="text-xs sm:text-sm font-inter font-medium text-black/70 tracking-wide mb-2">{item.label}</span>
                    <span className="text-lg sm:text-xl font-inter font-normal text-black leading-tight flex-1" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                  </div>

                  {/* Image Box with bottom rounded corners only, directly attached */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-32 sm:h-64 object-cover rounded-b-[20px]"
                    draggable={false}
                  />
                </Link>
              ) : (
                <>
                  {/* White Card with top rounded corners only */}
                  <div className="bg-white rounded-t-[20px] w-full p-4 sm:p-6 flex flex-col flex-1 h-[160px]">
                    <span className="text-xs sm:text-sm font-inter font-medium text-black/70 tracking-wide mb-2">{item.label}</span>
                    <span className="text-lg sm:text-xl font-inter font-normal text-black leading-tight flex-1" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                  </div>

                  {/* Image Box with bottom rounded corners only, directly attached */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-32 sm:h-64 object-cover rounded-b-[20px]"
                    draggable={false}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
