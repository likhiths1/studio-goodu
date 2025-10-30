import Work1 from '../assets/images/works/1.png';
import Work2 from '../assets/images/works/2.png';
import Work3 from '../assets/images/works/3.png';
import Work4 from '../assets/images/works/4.png';
import Work5 from '../assets/images/works/5.png';
import Work6 from '../assets/images/works/6.png';
import Work7 from '../assets/images/works/7.png';
import Work8 from '../assets/images/works/8.png';
import Work9 from '../assets/images/works/9.png';
import Work10 from '../assets/images/works/10.png';

const collage = [
  { src: Work1, style: "top-[40px] left-[0px] sm:left-[40px] md:left-[60px] lg:left-[100px] xl:left-[100px] w-[120px] sm:w-[150px] md:w-[190px] xl:w-[250px] z-10" },
  { src: Work2, style: "top-[60px] left-[150px] sm:left-[260px] md:left-[320px] lg:left-[400px] xl:left-[420px] w-[120px] sm:w-[150px] md:w-[190px] xl:w-[250px] z-20" },
  { src: Work3, style: "top-[40px] left-[300px] sm:left-[480px] md:left-[590px] lg:left-[700px] xl:left-[740px] w-[120px] sm:w-[150px] md:w-[190px] xl:w-[250px] z-10" },
  { src: Work4, style: "top-[240px] left-[20px] sm:left-[60px] md:left-[80px] lg:left-[100px] xl:left-[100px] w-[120px] sm:w-[150px] md:w-[190px] xl:w-[250px] z-20" },
  { src: Work5, style: "top-[220px] left-[180px] sm:left-[260px] md:left-[340px] lg:left-[360px] xl:left-[400px] w-[120px] sm:w-[150px] md:w-[190px] xl:w-[250px] z-10" },
  { src: Work6, style: "top-[200px] left-[330px] sm:left-[480px] md:left-[620px] lg:left-[700px] xl:left-[740px] w-[120px] sm:w-[150px] md:w-[190px] xl:w-[250px] z-10" },
  { src: Work7, style: "top-[400px] left-[20px] sm:left-[70px] md:left-[120px] lg:left-[100px] xl:left-[100px] w-[120px] sm:w-[150px] md:w-[190px] xl:w-[250px] z-30" },
  { src: Work8, style: "top-[400px] left-[200px] sm:left-[280px] md:left-[340px] lg:left-[400px] xl:left-[420px] w-[120px] sm:w-[150px] md:w-[190px] xl:w-[250px] z-20" },
  { src: Work9, style: "top-[360px] left-[360px] sm:left-[540px] md:left-[690px] lg:left-[700px] xl:left-[740px] w-[120px] sm:w-[150px] md:w-[190px] xl:w-[250px] z-20" },
  { src: Work10, style: "top-[560px] left-[180px] sm:left-[310px] md:left-[390px] lg:left-[420px] xl:left-[420px] w-[120px] sm:w-[150px] md:w-[190px] xl:w-[250px] z-20" },
];

export default function OurWorks() {
  return (
    <section className="w-full bg-[#FFF6ED] pb-2 pt-14 px-0 sm:px-4 md:px-12 font-inter">
      <div className="max-w-[90rem] w-full mx-auto">
        {/* Heading + Subtitle */}
        <div className="relative flex flex-col gap-2 mb-8 md:mb-16">
          {/* OUR WORKS between center and right (all breakpoints) */}
          <h2 
            className="font-inter font-medium text-[3.2rem] sm:text-[3.7rem] md:text-[4.6rem] lg:text-[10rem] leading-none mb-2 tracking-tight text-black text-right mx-auto mr-[12vw]"
          >
            OUR WORKS
          </h2>
          {/* Subtitle between center and left (all breakpoints) */}
          <div className="text-xs uppercase md:text-[1.2rem] font-regular text-[#3a3532] leading-none mt-2 text-left w-[90vw] md:w-94 max-w-full mx-auto ml-[12vw]">
            A glimpse into spaces we’ve shaped.<br />
           
          </div>
        </div>
        {/* Collage: desktop is block grid, but mobile/tablet unchanged */}
        <div className="relative h-[700px] sm:h-[1200px] md:h-[1100px] lg:h-[1300px] xl:h-[950px] w-[400px] sm:w-[700px] md:w-[900px] lg:w-[1200px] xl:w-[1150px] mx-auto overflow-visible">
          {collage.map(({ src, style }, i) => (
            <img
              key={i}
              src={src}
              alt={`work example ${i + 1}`}
              className={`absolute object-cover object-center ${style}`}
              style={{ borderRadius: 0 }}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
