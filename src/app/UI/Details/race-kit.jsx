import React from "react";
import Image from "next/image";
import Jersey from "../../../../public/Assets/jersey-img.png";
import Jersey1 from "../../../../public/Assets/jersey-b.png";
import Jersey2 from "../../../../public/Assets/jersey-t.png";
import Medal from "../../../../public/Assets/medal-img.png";
import Medal1 from "../../../../public/Assets/medal-b.png";
import Medal2 from "../../../../public/Assets/medal-t.png";
import Goodiebag from "../../../../public/Assets/goodiebag-img.png";
import Goodiebag1 from "../../../../public/Assets/goodiebag-b.png";
import Goodiebag2 from "../../../../public/Assets/goodiebag-t.png";
import BIB from "../../../../public/Assets/bib-img.png";
import BIB1 from "../../../../public/Assets/bib-b.png";
import BIB2 from "../../../../public/Assets/bib-t.png";

export default function RaceKIT() {
  return (
    <section id="race" className="mt-[8rem]">
      <div className="flex justify-center items-center text-center mb-[60px]">
        <h1 className="text-[26px] md:text-[42px] lg:text-[64px] font-[600] lg:font-[700]">
          Race KIT
        </h1>
      </div>

      <div className="relative flex justify-center items-center w-full h-auto px-[0px] md:px-[60px] lg:px-[100px]">
        <div className="flex flex-wrap gap-[20px] 2xl:gap-[100px] w-full max-w-[700px] md:max-w-[1300px] h-auto justify-center items-center">
          {/* jersey */}
          <div className="relative w-[250px] h-[300px] md:w-[550px] md:h-[500px] flex justify-center items-center mt-[-50px] md:mt-0 group">
            <div className="-z-10 absolute left-[-15px] md:left-[-20px] top-[15px] md:top-[30px]">
              <Image
                src={Jersey1}
                alt="decoration"
                className="w-[80px] md:w-[150px] h-auto"
              />
            </div>
            <div className="z-20 absolute right-[8px] md:right-[40px] top-[40px]">
              <Image
                src={Jersey2}
                alt="decoration"
                className="w-[45px] md:w-[85px] h-auto"
              />
            </div>
            <div className="z-10 w-[200px] h-[200px] md:w-[400px] md:h-[400px] border-[3px] border-black rounded-[8px] mb-[40px] shadow-[10px_10px_15px_rgba(0,0,0,0.25)] ">
              <div className="w-full h-[148px] md:h-[328px] flex justify-center items-center bg-gradient-to-b from-[#F7FFEB]/20 to-[#D9D9D9]/20 rounded-t-[5px] backdrop-blur-[3px]">
                <div>
                  <Image
                    src={Jersey}
                    alt="Jersey Image"
                    className="w-[150px] md:w-[300px] h-auto"
                  />
                </div>
              </div>
              <div className="w-full h-[47px] md:h-[66px] bg-gradient-to-r from-[#8CD223] to-[#99FF00] rounded-b-[6px] md:rounded-b-[5px] border-t-[3px] border-black flex justify-center items-center">
                <h1 className="text-[14px] md:text-[18px] lg:text-[36px] font-[600]">
                  Jersey
                </h1>
              </div>
            </div>
          </div>

          {/* medal */}
          <div className="relative w-[250px] h-[300px] md:w-[550px] md:h-[500px] flex justify-center items-center mt-[-50px] md:mt-0">
            <div className="-z-10 absolute left-[-25px] md:left-[-20px] bottom-[100px] md:bottom-[102px]">
              <Image
                src={Medal1}
                alt="decoration"
                className="w-[80px] md:w-[150px] h-auto"
              />
            </div>
            <div className="z-20 absolute right-[-28px] md:right-[-40px] top-[5px] md:top-[-30px]">
              <Image
                src={Medal2}
                alt="decoration"
                className="w-[100px] md:w-[200px] h-auto"
              />
            </div>
            <div className="z-10 w-[200px] h-[200px] md:w-[400px] md:h-[400px] border-[3px] border-black rounded-[8px] mb-[40px] shadow-[10px_10px_15px_rgba(0,0,0,0.25)] ">
              <div className="w-full h-[148px] md:h-[328px] flex justify-center items-center bg-gradient-to-b from-[#F7FFEB]/20 to-[#D9D9D9]/20 rounded-t-[5px] backdrop-blur-[3px]">
                <div>
                  <Image
                    src={Medal}
                    alt="Medal Image"
                    className="w-auto h-[120px] md:h-[200px]"
                  />
                </div>
              </div>
              <div className="w-full h-[47px] md:h-[66px] bg-gradient-to-r from-[#8CD223] to-[#99FF00] rounded-b-[6px] md:rounded-b-[5px] border-t-[3px] border-black flex justify-center items-center">
                <h1 className="text-[14px] md:text-[18px] lg:text-[36px] font-[600]">
                  Medal
                </h1>
              </div>
            </div>
          </div>

          {/* goodiebag */}
          <div className="relative w-[250px] h-[300px] md:w-[550px] md:h-[500px] flex justify-center items-center mt-[-50px] md:mt-0">
            <div className="z-20 absolute left-[-20px] md:left-[-20px] top-[40px] md:top-[80px]">
              <Image
                src={Goodiebag2}
                alt="decoration"
                className="w-[85px] md:w-[155px] h-auto"
              />
            </div>
            <div className="z-20 absolute right-[20px] md:right-[80px] bottom-[118px] md:bottom-[138px]">
              <Image
                src={Goodiebag1}
                alt="decoration"
                className="w-auto h-[70px] md:h-[135px]"
              />
            </div>
            <div className="z-10 w-[200px] h-[200px] md:w-[400px] md:h-[400px] border-[3px] border-black rounded-[8px] mb-[40px] shadow-[10px_10px_15px_rgba(0,0,0,0.25)] ">
              <div className="w-full h-[148px] md:h-[328px] flex justify-center items-center bg-gradient-to-b from-[#F7FFEB]/20 to-[#D9D9D9]/20 rounded-t-[5px] backdrop-blur-[3px]">
                <div>
                  <Image
                    src={Goodiebag}
                    alt="Goodiebag Image"
                    className="w-[90px] md:w-[200px] h-auto"
                  />
                </div>
              </div>
              <div className="w-full h-[47px] md:h-[66px] bg-gradient-to-r from-[#8CD223] to-[#99FF00] rounded-b-[6px] md:rounded-b-[5px] border-t-[3px] border-black flex justify-center items-center">
                <h1 className="text-[14px] md:text-[18px] lg:text-[36px] font-[600]">
                  Goodiebag
                </h1>
              </div>
            </div>
          </div>

          {/* bib */}
          <div className="relative w-[250px] h-[300px] md:w-[550px] md:h-[500px] flex justify-center items-center mt-[-50px] md:mt-0">
            <div className="-z-10 absolute left-[-15px] md:left-[-50px] top-[5px] md:top-[-22px]">
              <Image
                src={BIB1}
                alt="decoration"
                className="w-[105px] md:w-[210px] h-auto"
              />
            </div>
            <div className="z-20 absolute right-[25px] md:right-[67px] bottom-[117px] md:bottom-[136px]">
              <Image
                src={BIB2}
                alt="decoration"
                className="w-[75px] md:w-[160px] h-auto"
              />
            </div>
            <div className="z-10 w-[200px] h-[200px] md:w-[400px] md:h-[400px] border-[3px] border-black rounded-[8px] mb-[40px] shadow-[10px_10px_15px_rgba(0,0,0,0.25)] ">
              <div className="w-full h-[148px] md:h-[328px] flex justify-center items-center bg-gradient-to-b from-[#F7FFEB]/20 to-[#D9D9D9]/20 rounded-t-[5px] backdrop-blur-[3px]">
                <div>
                  <Image
                    src={BIB}
                    alt="BIB Image"
                    className="w-[120px] md:w-[250px] h-auto"
                  />
                </div>
              </div>
              <div className="w-full h-[47px] md:h-[66px] bg-gradient-to-r from-[#8CD223] to-[#99FF00] rounded-b-[6px] md:rounded-b-[5px] border-t-[3px] border-black flex justify-center items-center">
                <h1 className="text-[14px] md:text-[18px] lg:text-[36px] font-[600]">
                  BIB
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
