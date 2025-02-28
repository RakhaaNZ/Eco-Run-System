import React from "react";
import Image from "next/image";
import Leaf1 from "../../../public/Assets/Leaf1.png";
import Leaf2 from "../../../public/Assets/Leaf2.png";
import Hero2 from "../../../public/Assets/Hero2.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-screen h-full flex flex-col justify-center items-center pt-[60px] md:pt-[80px] lg:pt-[100px]"
    >
      <div className="relative flex flex-row justify-center items-center mb-[60px]">
        <div className="absolute left-[-60px] md:left-[-140px] lg:left-[-250px]">
          <Image
            src={Leaf1}
            alt="Leaf Image"
            className="h-auto w-[25px] md:w-[45px] lg:w-[80px]"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-[26px] md:text-[42px] lg:text-[64px] font-[600] lg:font-[700]">
            About
          </h1>
          <div className="h-[2px] md:h-[3px] lg:h-[4px] w-[170px] md:w-[300px] lg:w-[500px] bg-black"></div>
          <h2 className="text-[26px] md:text-[42px] lg:text-[64px] font-[600] lg:font-[700] bg-gradient-to-r from-[#37A71F] to-[#8CD223] text-transparent bg-clip-text">
            ECO RUN SYSTEM
          </h2>
        </div>
      </div>

      <div className="container flex flex-col justify-center items-center px-[45px]">
        <div className="flex justify-center items-center mb-[40px]">
          <p className="text-[12px] md:text-[18px] lg:text-[30px] font-[400] text-wrap">
            <span className="bg-gradient-to-r from-[#37A71F] to-[#8CD223] text-transparent bg-clip-text">
              Eco Run System
            </span>{" "}
            is a running event that integrates sports with concrete actions for
            environmental conservation. The event is designed to form positive
            habits, educate the public and raise awareness of the importance of
            processing plastic waste and maintaining the sustainability of
            Bali's nature. Later, for every ticket sold, one tree seedling will
            be planted as a form of real action to care for the environment.
          </p>
        </div>
        <div className="flex flex-row w-full justify-around items-center">
          <div className="flex flex-col gap-[20px]">
            <div>
              <h1 className="text-[14px] md:text-[20px] lg:text-[40px] font-[600]">
                Vision :
              </h1>
              <p className="text-[12px] md:text-[18px] lg:text-[30px] font-[400]">
                Supporting the sustainability of Bali's nature through
                collective action.
              </p>
            </div>
            <div>
              <h1 className="text-[14px] md:text-[20px] lg:text-[40px] font-[600]">
                Mission :
              </h1>
              <ul className="pl-[30px] list-disc text-[12px] md:text-[18px] lg:text-[30px] font-[400]">
                <li>Form positive habits in the community.</li>
                <li>
                  Educate the community about the importance of environmental
                  conservation.
                </li>
                <li>Planting trees as a form of nature conservation.</li>
              </ul>
            </div>
          </div>
          <div className="relative right-[-20px]">
            <Image
              src={Leaf2}
              alt="Leaf Image"
              className="h-auto w-[25px] md:w-[55px] lg:w-[100px]"
            />
          </div>
        </div>
        <div className="relative w-screen top-[-30px] md:top-[-130px] lg:top-[-180px]">
          <Image
            src={Hero2}
            alt="Hero2 Image"
            className="w-screen h-auto block"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
