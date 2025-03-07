import React from "react";
import Event from "./event-detail";
import RaceKIT from "./race-kit";
import GustStar from "./guest-star";
import InstaPost from "./instapost";

const Details = () => {
  return (
    <section id="details">
      <div className="flex flex-col justify-center items-center text-center pt-[60px] md:pt-[80px] lg:pt-[100px]">
        <h1 className="text-[26px] md:text-[42px] lg:text-[64px] font-[600] lg:font-[700]">
          Details
        </h1>
        <div className="h-[2px] md:h-[3px] lg:h-[4px] w-[170px] md:w-[300px] lg:w-[500px] bg-black"></div>
      </div>
      <Event />
      <RaceKIT />
      <GustStar />
      <InstaPost />
    </section>
  );
};

export default Details;
