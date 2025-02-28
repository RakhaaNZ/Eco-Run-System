import React from "react";
import Event from "./event-detail";

const Details = () => {
  return (
    <section id="details" className="">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-[26px] md:text-[42px] lg:text-[64px] font-[600] lg:font-[700]">
          Details
        </h1>
        <div className="h-[2px] md:h-[3px] lg:h-[4px] w-[170px] md:w-[300px] lg:w-[500px] bg-black"></div>
      </div>
      <Event />
    </section>
  );
};

export default Details;
