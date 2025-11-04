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
  // Row 1 (left, middle, right)
  { src: Work1, style: "top-[40px] left-[0px] sm:left-[60px] md:left-[110px] lg:left-[110px] xl:left-[150px] 2xl:left-[160px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[320px] xl:w-[380px] 2xl:w-[420px] z-10" },
  { src: Work2, style: "top-[20px] left-[110px] sm:left-[320px] md:left-[400px] lg:left-[680px] xl:left-[900px] 2xl:left-[980px] w-[180px] sm:w-[180px] md:w-[2200px] lg:w-[300px] xl:w-[320px] 2xl:w-[360px] z-20" },
  { src: Work3, style: "top-[20px] left-[300px] sm:left-[560px] md:left-[700px] lg:left-[1070px] xl:left-[1300px] 2xl:left-[1460px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[360px] xl:w-[420px] 2xl:w-[460px] z-10" },
  // Row 2 (staggered and denser)
  { src: Work4, style: "top-[510px] left-[20px] sm:left-[80px] md:left-[130px] lg:left-[280px] xl:left-[360px] 2xl:left-[440px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[310px] xl:w-[360px] 2xl:w-[390px] z-20" },
  { src: Work6, style: "top-[400px] left-[330px] sm:left-[560px] md:left-[730px] lg:left-[620px] xl:left-[780px] 2xl:left-[900px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[260px] xl:w-[300px] 2xl:w-[330px] z-10" },
  { src: Work5, style: "top-[580px] left-[180px] sm:left-[300px] md:left-[400px] lg:left-[960px] xl:left-[1140px] 2xl:left-[1280px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[360px] xl:w-[420px] 2xl:w-[460px] z-10" },
  // Row 3 (staggered again differently)
  { src: Work7, style: "top-[1100px] left-[20px] sm:left-[90px] md:left-[170px] lg:left-[120px] xl:left-[160px] 2xl:left-[180px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[280px] xl:w-[330px] 2xl:w-[360px] z-30" },
  { src: Work9, style: "top-[980px] left-[240px] sm:left-[600px] md:left-[810px] lg:left-[420px] xl:left-[550px] 2xl:left-[700px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[300px] xl:w-[340px] 2xl:w-[370px] z-20" },
  { src: Work8, style: "top-[940px] left-[200px] sm:left-[320px] md:left-[410px] lg:left-[1100px] xl:left-[1300px] 2xl:left-[1440px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[320px] xl:w-[380px] 2xl:w-[420px] z-20" },
  { src: Work10, style: "top-[1200px] left-[180px] sm:left-[350px] md:left-[460px] lg:left-[880px] xl:left-[1060px] 2xl:left-[1200px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[340px] xl:w-[400px] 2xl:w-[440px] z-20" },
  // Extra fillers (reuse some images) to cover whitespace on lg/xl/2xl
  { src: Work3, style: "hidden lg:block top-[100px] left-[480px] xl:left-[580px] 2xl:left-[680px] w-[240px] xl:w-[280px] 2xl:w-[300px] z-1" },
  { src: Work5, style: "hidden lg:block top-[770px] left-[640px] xl:left-[820px] 2xl:left-[920px] w-[210px] xl:w-[250px] 2xl:w-[270px] z-10" },
  { src: Work2, style: "hidden lg:block top-[530px] left-[1220px] xl:left-[1420px] 2xl:left-[1560px] w-[200px] xl:w-[240px] 2xl:w-[260px] z-10" },
  { src: Work4, style: "hidden lg:block top-[450px] left-[40px] xl:left-[80px] 2xl:left-[100px] w-[200px] xl:w-[240px] 2xl:w-[260px] z-10" },
  { src: Work6, style: "hidden lg:block top-[800px] left-[40px] xl:left-[80px] 2xl:left-[100px] w-[220px] xl:w-[260px] 2xl:w-[280px] z-10" },
  // New filler for bottom whitespace (desktop only)
  { src: Work2, style: "hidden lg:block top-[1450px] left-[360px] xl:left-[540px] 2xl:left-[660px] w-[240px] xl:w-[280px] 2xl:w-[300px] z-10" }
];

export default function OurWorks() {
  return (
    <section className="w-full bg-[#FFF6ED] pb-8 md:pb-[80px] pt-14 px-0 sm:px-4 md:px-12 font-inter">
      <div className="max-w-[90rem] w-full mx-auto">
        {/* Heading + Subtitle */}
        <div className="relative flex flex-col gap-2 mb-8 md:mb-16">
          {/* OUR WORKS between center and right (all breakpoints) */}
          <h2 
            className="font-inter font-medium text-[3.2rem] sm:text-[3.7rem] md:text-[4.6rem] lg:text-[12rem] md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full md:text-right lg:text-right leading-none mb-2 tracking-[-0.08em] text-black text-right ml-auto mr-0"
          >
            OUR WORKS
          </h2>
          {/* Subtitle between center and left (all breakpoints) */}
          <div className="text-xs md:text-[1.6rem] font-regular text-[#3a3532] leading-snug mt-2 text-left w-[90vw] md:w-94 max-w-full ml-0 mr-auto">
            TETUR. SUSPENDISSE ORCI NISL.<br />
            CONGUE EGESTAS SAGITTIS
          </div>
        </div>
        {/* Collage: desktop is block grid, but mobile/tablet unchanged */}
        <div className="relative h-[760px] sm:h-[1250px] md:h-[1200px] lg:h-[1650px] xl:h-[1570px] 2xl:h-[1670px] w-[400px] sm:w-[760px] md:w-[980px] lg:w-[1360px] xl:w-[1500px] 2xl:w-[1680px] mx-auto overflow-visible lg:translate-x-[-120px] xl:translate-x-[-180px] 2xl:translate-x-[-220px]">
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
