import React from "react";

const Sponsorship = () => {
  return (
    <section
      id="sponsorship"
      className="relative w-screen h-full flex flex-col justify-center flex pt-[80px]"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[26px] md:text-[42px] lg:text-[64px] font-[600] lg:font-[700]">
          Sponsorship
        </h1>
        <div className="h-[2px] md:h-[3px] lg:h-[4px] w-[170px] md:w-[300px] lg:w-[500px] bg-black"></div>
      </div>

      <div className="w-full h-[900px]"></div>
    </section>
  );
};

export default Sponsorship;
