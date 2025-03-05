import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const sponsors = [
  "/Assets/sponsors/sponsor1.jpg",
  "/Assets/sponsors/sponsor2.png",
  "/Assets/sponsors/sponsor3.png",
  "/Assets/sponsors/sponsor4.png",
  "/Assets/sponsors/sponsor5.jpg",
  "/Assets/sponsors/sponsor6.png",
  "/Assets/sponsors/sponsor7.png",
  "/Assets/sponsors/sponsor8.png",
  "/Assets/sponsors/sponsor9.jpeg",
  "/Assets/sponsors/sponsor10.jpeg",
];

const media = [
  "/Assets/media/media1.png",
  "/Assets/media/media2.png",
  "/Assets/media/media3.jpg",
  "/Assets/media/media4.PNG",
  "/Assets/media/media5.PNG",
];

const Sliders = () => {
  return (
    <div className="reltive flex flex-col gap-[20px] md:gap-[40px] lg:gap-[60px]">
      <div className="flex justify-center">
        <h1 className="text-[26px] md:text-[42px] lg:text-[64px] font-[600] lg:font-[700] relative bottom-[-10px] md:bottom-[-20px] lg:bottom-[-30px]">
          Sponsors
        </h1>
      </div>
      <div className="flex h-auto border-y-[2px] md:border-y-[3px] lg:border-y-[4px] border-black bg-gradient-to-b from-[#75C200] via-[#99FF00] to-[#75C200] py-[10px] md:py-[20px]">
        <Marquee play autoFill pauseOnHover direction="right" speed={200}>
          {[...sponsors].map((src, index) => (
            <div
              key={index}
              className="w-20 md:w-30 lg:w-40 mx-[30px] md:mx-[50px] lg:mx-[70px] flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Sponsor ${index + 1}`}
                width={150}
                height={100}
                className="w-[50px] md:w-[100px] lg:w-auto h-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="flex justify-center">
        <h1 className="text-[26px] md:text-[42px] lg:text-[64px] font-[600] lg:font-[700] relative bottom-[-10px] md:bottom-[-20px] lg:bottom-[-30px]">
          Media
        </h1>
      </div>
      <div className="flex h-auto border-y-[2px] md:border-y-[3px] lg:border-y-[4px] border-black bg-gradient-to-b from-[#75C200] via-[#99FF00] to-[#75C200] py-[10px] md:py-[20px]">
        <Marquee play autoFill pauseOnHover direction="left" speed={200}>
          {[...media].map((src, index) => (
            <div
              key={index}
              className="w-20 md:w-30 lg:w-40 mx-[30px] md:mx-[50px] lg:mx-[70px] flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Sponsor ${index + 1}`}
                width={150}
                height={100}
                className="w-[50px] md:w-[100px] lg:w-auto h-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Sliders;
