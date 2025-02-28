import React from "react";
import Image from "next/image";
import Link from "next/link";
import Date from "../../../../public/Assets/date-icon.png";
import Clock from "../../../../public/Assets/clock-icon.png";
import LocationImg from "../../../../public/Assets/location-img.png";
import LocationIcon from "../../../../public/Assets/location-icon.png";

export default function Event() {
  return (
    <section>
      <div className="flex justify-center items-center text-center mb-[60px]">
        <h1 className="text-[26px] md:text-[42px] lg:text-[64px] font-[600] lg:font-[700]">
          Event
        </h1>
      </div>

      <div className="relative flex flex-col w-full h-auto px-[40px] md:px-[60px] lg:px-[100px]">
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-[100px]">
          <div className="flex flex-col w-full md:w-[60%] h-full">
            <div className="flex flex-col gap-4 mb-[40px]">
              <h1 className="text-[14px] md:text-[20px] lg:text-[40px] font-[600]">
                Description
              </h1>
              <p className="text-[12px] md:text-[18px] lg:text-[30px] font-[400] text-wrap">
                Join our exciting Fun Run with a unique route through Singaraja!
                Experience the thrill of running while enjoying interactive
                educational activities and mini-games along the way. The fun
                doesn’t stop at the finish line—get ready for an
                entertainment-packed program that will keep the energy high.
                Run, learn, and have fun!
              </p>
            </div>
            <div className="relative flex flex-col gap-4 top-[-15px] md:top-0">
              <h1 className="text-[14px] md:text-[20px] lg:text-[40px] font-[600]">
                Schedule
              </h1>
              <div className="flex flex-row gap-1 md:gap-6 items-center">
                <div className="flex justify-center w-[50px]">
                  <Image
                    src={Date}
                    alt="Date Icon"
                    className="w-[25px] md:w-[35px] lg:w-[45px] h-auto"
                  />
                </div>
                <p className="text-[12px] md:text-[18px] lg:text-[30px] font-[400]">
                  {" "}
                  : 26 April 2025
                </p>
              </div>
              <div className="flex flex-row gap-1 md:gap-6 items-center">
                <div className="flex justify-center w-[50px]">
                  <Image
                    src={Clock}
                    alt="Clock Icon"
                    className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] mx-[4px]"
                  />
                </div>
                <p className="text-[12px] md:text-[18px] lg:text-[30px] font-[400]">
                  {" "}
                  : 05.00 WITA s/d Selesai
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[40%] h-full pl-0 md:pl-[50px]">
            <div className="mb-[20px]">
              <h1 className="text-[14px] md:text-[20px] lg:text-[40px] font-[600]">
                Event Location
              </h1>
            </div>
            <div>
              <Image
                src={LocationImg}
                alt="Location Img"
                className="w-[220px] md:w-[420px] h-auto"
              />
            </div>
            <div className="flex flex-row gap-6 items-center">
              <Image
                src={LocationIcon}
                alt=""
                className="w-[25px] md:w-[35px] lg:w-[45px] h-auto"
              />
              <p className="text-[12px] md:text-[18px] lg:text-[22px] font-[400]">
                {" "}
                : Parkir Barat Krisna Oleh-Oleh Singaraja
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-[20px] md:mt-[40px]">
          <div>
            <h1 className="text-[14px] md:text-[20px] lg:text-[40px] font-[600]">
              Register Now
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSe1GWo7wPvc4iOOKiGCnflyaZOS5qniHl45Sq3LsQwlhSgssA/viewform?usp=dialog"
              className="w-[120px] h-[25px] md:w-[190px] md:h-[35px] lg:w-[280px] lg:h-[50px]"
            >
              <div className="w-[120px] h-[25px] md:w-[190px] md:h-[35px] lg:w-[280px] lg:h-[50px] border-[1px] md:border-[2px] lg:border-[3px] border-black rounded-[4px] md:rounded-[6px] lg:rounded-[8px] flex justify-center items-center">
                <h1 className="text-[10px] md:text-[14px] lg:text-[24px]">
                  Register
                </h1>
              </div>
            </Link>
            <div className="w-[120px] h-[25px] md:w-[190px] md:h-[35px] lg:w-[280px] lg:h-[50px] border-[1px] md:border-[2px] lg:border-[3px] border-black rounded-[4px] md:rounded-[6px] lg:rounded-[8px] flex justify-center items-center">
              <div className="w-[40%] h-full flex justify-center items-center bg-black">
                <h1 className="text-white text-[10px] md:text-[14px] lg:text-[24px]">
                  Countdown
                </h1>
              </div>
              <div className="w-[60%] flex justify-center items-center">
                <p className="text-[10px] md:text-[14px] lg:text-[24px]">
                  10:10:10:10
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
