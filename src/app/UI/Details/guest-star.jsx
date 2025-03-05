import React from "react";
import Image from "next/image";
import ZinBG from "../../../../public/Assets/zin-bg.png";
import Zin from "../../../../public/Assets/zin-tata.png";
import BerlinBG from "../../../../public/Assets/berlin-bg.png";
import Berlin from "../../../../public/Assets/dj-berlin.png";

export default function GuestStar() {
  return (
    <section id="guest" className="mt-[8rem]">
      <div className="flex justify-center items-center text-center mb-[60px]">
        <h1 className="text-[26px] md:text-[42px] lg:text-[64px] font-[600] lg:font-[700]">
          Guest Star
        </h1>
      </div>

      <div className="relative flex justify-center items-center w-full h-auto px-[40px] md:px-[60px] lg:px-[100px] my-[50px]">
        <div className="flex flex-wrap gap-[100px] w-full max-w-[700px] md:max-w-[1300px] h-auto justify-around items-center">
          <div className="w-[250px] md:w-[500px] h-auto flex justify-around items-center group">
            <div className="relative flex flex-col justify-center items-center w-[250px] md:w-[500px] h-[350px] md:h-[600px]">
              <div className="w-[250px] md:w-[500px] h-[80%] relative flex justify-center items-center transition-transform duration-500 ease-in-out group-hover:scale-110">
                <Image
                  src={ZinBG}
                  alt="background"
                  className="object-cover w-[300px] md:w-[450px] h-auto"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <Image
                    src={Zin}
                    alt="Guest Star"
                    className="w-[120px] md:w-[180px] h-auto filter drop-shadow-[8px_4px_0px_#000] md:drop-shadow-[-8px_-8px_0px_#000] group-hover:md:drop-shadow-[30px_8px_0px_#000] transition-all duration-300"
                  />
                </div>
              </div>
              <div className="w-[300px] h-[20%] flex flex-col justify-center items-center">
                <h1 className="relative right-[0px] text-[14px] md:text-[36px] font-[600] transition-all duration-300 group-hover:right-[-40px]">
                  Zin Tata
                </h1>
                <p className="relative right-[-25px] md:right-[-80px] top-[-6px] md:top-[-15px] text-[8px] md:text-[26px] font-[600] transition-all duration-300 group-hover:right-[40px]">
                  Zumba Instructor
                </p>
              </div>
            </div>
          </div>

          <div className="w-[250px] md:w-[500px] h-auto flex justify-around items-center group">
            <div className="relative flex flex-col justify-center items-center w-[250px] md:w-[500px] h-[350px] md:h-[600px]">
              <div className="w-[250px] md:w-[500px] h-[80%] relative flex justify-center items-center transition-transform duration-500 ease-in-out hover:scale-110">
                <Image
                  src={BerlinBG}
                  alt="background"
                  className="object-cover w-[300px] md:w-[450px] h-auto"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <Image
                    src={Berlin}
                    alt="Guest Star"
                    className="w-[150px] md:w-[200px] h-auto filter drop-shadow-[8px_4px_0px_#000] md:drop-shadow-[-8px_-8px_0px_#000] group-hover:md:drop-shadow-[30px_8px_0px_#000] transition-all duration-300"
                  />
                </div>
              </div>
              <div className="w-[300px] h-[20%] flex flex-col justify-center items-center">
                <h1 className="relative right-[0px] text-[14px] md:text-[36px] font-[600] transition-all duration-300 group-hover:right-[-40px]">
                  DJ Berlin
                </h1>
                <p className="relative right-[-25px] md:right-[-80px] top-[-6px] md:top-[-15px] text-[8px] md:text-[26px] font-[600] transition-all duration-300 group-hover:right-[40px]">
                  DJ Live performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
