import React from "react";
import Script from "next/script";

export default function InstaPost() {
  return (
    <section id="insta">
      <div className="flex justify-center items-center text-center mb-[30px] md:mb-[60px] mt-[100px]">
        <h1 className="text-[26px] md:text-[42px] lg:text-[64px] font-[600] lg:font-[700]">
          Insta Post
        </h1>
      </div>

      <div className="relative flex px-[20px] md:px-[60px] lg:px-[100px]">
        <Script src="https://static.elfsight.com/platform/platform.js" async />
        <div
          className="elfsight-app-582705ec-81de-4bbc-9ebb-d86eb228f768"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
