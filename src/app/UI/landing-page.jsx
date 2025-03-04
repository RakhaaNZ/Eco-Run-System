import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../../public/Assets/Hero1.png";

const Landing = () => {
  return (
    <section
      id="home"
      className="relative w-screen h-screen pt-[100px] flex justify-center items-center"
    >
      <div className="container relative flex justify-center items-center w-full h-screen">
        <Image
          src={Hero}
          alt="Background Image"
          className="object-cover w-auto h-auto px-[20px] md:px-[100px]"
        />
        <div className="absolute inset-0 container h-full max-h-[200px] md:max-h-[300px] flex items-center justify-start px-4 ">
          <div className="h-auto w-full max-w-[500px] md:max-w-[600px] px-4 md:px-6 lg:px-10 mt-[60px]">
            <div className="flex flex-col">
              <h1 className="w-[250px] h-[80px] text-[32px] md:text-[48px] lg:text-[68px] font-[700] bg-gradient-to-r from-[#37A71F] to-[#8CD223] text-transparent bg-clip-text">
                ECO RUN
              </h1>
              <p className="text-[12px] md:text-[20px] lg:text-[42px] font-[600] w-full h-auto mt-[-20px] md:mt-[-10px] lg:mt-[0px]">
                “Together for sustainablity”
              </p>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSe1GWo7wPvc4iOOKiGCnflyaZOS5qniHl45Sq3LsQwlhSgssA/viewform?usp=dialog"
                className="w-[100px] md:w-[150px] lg:w-[200px] h-[20px] md:h-[30px] lg:h-[45px] border-[1px] md:border-[2px] lg:border-[3px] border-black rounded-[4px] md:rounded-[6px] lg:rounded-[8px] flex justify-center items-center"
              >
                <div>
                  <h1 className="text-[10px] md:text-[14px] lg:text-[24px]">
                    Register Now
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
