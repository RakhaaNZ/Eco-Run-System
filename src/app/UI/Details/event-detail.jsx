"use client";

import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import DateIcon from "../../../../public/Assets/date-icon.png";
import ClockIcon from "../../../../public/Assets/clock-icon.png";
import LocationImg from "../../../../public/Assets/location-img.png";
import LocationIcon from "../../../../public/Assets/location-icon.png";

export default function Event() {
  // Target waktu: 19 April 2025, pukul 23:59:00 (Waktu Lokal)
  const targetDate = new Date("2025-04-14T23:59:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = String(
      Math.floor(difference / (1000 * 60 * 60 * 24))
    ).padStart(2, "0");
    const hours = String(
      Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const seconds = String(
      Math.floor((difference % (1000 * 60)) / 1000)
    ).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section id="event">
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
              <p className="text-[12px] md:text-[18px] lg:text-[30px] font-[400] text-balance">
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
                    src={DateIcon}
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
                    src={ClockIcon}
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
            <div className="flex justify-center items-center">
              <Image
                src={LocationImg}
                alt="Location Img"
                className="w-[220px] md:w-[420px] h-auto"
              />
            </div>
            <div className="flex flex-row gap-1 md:gap-6 justify-center items-center">
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
              Register
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSe1GWo7wPvc4iOOKiGCnflyaZOS5qniHl45Sq3LsQwlhSgssA/viewform?usp=dialog"
              className="relative w-full h-[30px] md:w-[500px] md:h-[35px] lg:w-[700px] lg:h-[55px] border-[1px] md:border-[2px] lg:border-[3px] border-black rounded-[4px] md:rounded-[6px] lg:rounded-[8px] hover:font-[700] flex justify-center items-center overflow-hidden group transition-all duration-300 ease-in-out active:scale-95 hover:shadow-[0_0_15px_#81E900] hover:border-[#81E900]"
            >
              <div className="absolute inset-0 bg-[#81E900] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out "></div>
              <h1 className="relative z-10 text-[10px] md:text-[14px] lg:text-[24px] text-black group-hover:text-white transition-all duration-600">
                Register Now
              </h1>
            </Link>
            <div className="w-full h-auto md:w-[500px] md:h-[40px] lg:w-[700px] lg:h-[65px] border-[1px] md:border-[2px] lg:border-[3px] border-black rounded-[4px] md:rounded-[6px] lg:rounded-[8px] flex flex-col md:flex-row justify-center items-center">
              <div className="w-[100%] h-[20px] md:w-[40%] md:h-full flex justify-center items-center bg-black border-r-[3px] border-black rounded-l-[3px] md:rounded-l-[4px] lg:rounded-l-[5px]">
                <h1 className="text-white text-[10px] md:text-[14px] lg:text-[24px]">
                  Countdown
                </h1>
              </div>
              <div className="w-[100%] h-auto py-[10px] md:w-[60%] flex justify-center items-center">
                <div className="flex flex-row flex flex-wrap justify-center gap-3 items-center text-[10px] md:text-[14px] lg:text-[24px] tracking-[2px]">
                  <div className="flex flex-col justify-center items-center leading-[1]">
                    <h1 className="font-[600]">Days</h1>
                    <p>{timeLeft.days}</p>
                  </div>
                  <div className="flex flex-col justify-center items-center leading-[1]">
                    <h1 className="font-[600]">:</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center leading-[1]">
                    <h1 className="font-[600]">Hours</h1>
                    <p>{timeLeft.hours}</p>
                  </div>
                  <div className="flex flex-col justify-center items-center leading-[1]">
                    <h1 className="font-[600]">:</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center leading-[1]">
                    <h1 className="font-[600]">Minutes</h1>
                    <p>{timeLeft.minutes}</p>
                  </div>
                  <div className="flex flex-col justify-center items-center leading-[1]">
                    <h1 className="font-[600]">:</h1>
                  </div>
                  <div className="flex flex-col justify-center items-center leading-[1]">
                    <h1 className="font-[600]">Seconds</h1>
                    <p>{timeLeft.seconds}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
