import React from "react";
import Slider from "./sliders";

const Sponsorship = () => {
  return (
    <section
      id="sponsorship"
      className="relative w-screen h-full flex flex-col justify-center flex pt-[60px] md:pt-[80px] lg:pt-[100px]"
    >
      <div className="flex flex-col justify-center items-center text-center mb-[20px] md:mb-[35px] lg:mb-[50px]">
        <div className="flex flex-row gap-[8px] md:gap-[20px] justify-center items-center">
          <div className="flex flex-col w-[60px] md:w-[90px] lg:w-[130px] text-[16px] md:text-[26px] lg:text-[36px] font-[600] lg:font-[700]">
            <h1 className="text-left mb-[-8px] md:mb-[-9px] lg:mb-[-10px]">
              Sponsors
            </h1>
            <h1 className="text-right">& Media</h1>
          </div>
          <h1 className="text-[26px] md:text-[42px] lg:text-[64px] font-[600] lg:font-[700]">
            Partners
          </h1>
        </div>
        <div className="h-[2px] md:h-[3px] lg:h-[4px] w-[170px] md:w-[300px] lg:w-[500px] bg-black"></div>
      </div>

      <div className="w-full h-full mb-[20px]">
        <Slider />
      </div>
    </section>
  );
};

export default Sponsorship;
