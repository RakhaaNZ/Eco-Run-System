"use client";

import React from "react";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoEcoRun from "../../../public/Assets/Logo-eco-run.png";
import LogoBless from "../../../public/Assets/Logo-bless.png";
import IconWA from "../../../public/Assets/wa-icon.png";
import IconEmail from "../../../public/Assets/email-icon.png";
import IconIG from "../../../public/Assets/ig-icon.png";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const numberRef = useRef(null);

  const handleCopy = () => {
    if (numberRef.current) {
      navigator.clipboard.writeText(numberRef.current.innerText);
      setCopied(true);

      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative flex flex-col pt-[60px] md:pt-[80px] lg:pt-[100px]">
      <div className="flex px-[40px] md:px-[60px] lg:px-[100px] items-center text-center mb-[4px] md:mb-[6px] lg:mb-[10px]">
        <h1 className="text-[14px] md:text-[24px] lg:text-[34px] font-[600]">
          Let’s Join our Event
        </h1>
      </div>

      <div className="w-full h-[1px] md:h-[2px] bg-black"></div>

      <div className="w-screen h-full relative flex flex-col justify-center items-center">
        <div className="flex flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] justify-center items-center pt-[30px] md:pt-[40px] lg:pt-[50px] pb-[30px] lg:pb-[120px]">
          <div className="flex flex-row justify-center items-center gap-[6px] md:gap-[12px] lg:gap-[20px]">
            <Image
              src={LogoEcoRun}
              alt="Logo Eco Run"
              className="w-[25px] md:w-[45px] lg:w-[65px] h-auto"
            />
            <h1 className="text-[10px] md:text-[18px] lg:text-[24px] font-[600]">
              Eco Run System 2025
            </h1>
          </div>
          <div>
            <h1 className="w-full max-w-[600px] text-center text-[14px] md:text-[20px] lg:text-[34px] font-[600] leading-[18px] md:leading-[32px] mt-[-5px] md:mt-[-20px]">
              Step into a greener future with an eco-friendly running experience
            </h1>
          </div>
          <div className="mt-[-10px] lg:mt-0">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSe1GWo7wPvc4iOOKiGCnflyaZOS5qniHl45Sq3LsQwlhSgssA/viewform?usp=dialog"
              className="w-[200px] h-[25px] md:w-[300px] md:h-[35px] lg:w-[400px] lg:h-[50px]"
            >
              <div className="w-[200px] h-[25px] md:w-[300px] md:h-[35px] lg:w-[400px] lg:h-[50px] border-[1px] md:border-[2px] lg:border-[3px] border-black rounded-[8px] md:rounded-[14px] lg:rounded-[20px] flex justify-center items-center">
                <h1 className="text-[10px] md:text-[14px] lg:text-[24px]">
                  Register Now
                </h1>
              </div>
            </Link>
          </div>
        </div>

        <div className="relative lg:absolute bottom-0 lg:bottom-[70px] right-0 lg:right-[120px] flex flex-col justify-center items-center mb-[20px] lg:mb-0 gap-2 lg:gap-0">
          <div>
            <h1 className="text-[10px] md:text-[18px] lg:text-[24px] font-[400]">
              Organized By :
            </h1>
          </div>
          <div className="flex flex-row lg:flex-col justify-center lg:justify-start items-center lg:items-start gap-2 lg:gap-4 lg:gap-0">
            <Image
              src={LogoBless}
              alt="Logo Bless Event"
              className="w-[30px] md:w-[50px] lg:w-[70px] h-auto"
            />
            <h1 className="text-[10px] md:text-[18px] lg:text-[24px] font-[600] mb-[8px]">
              Bless Event Planner
            </h1>
          </div>
          <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center mt-[5px] md:mt-[10px] lg:mt-0">
            <div>
              <button popoverTarget="my-popover" className="trigger-btn">
                {" "}
                <Image
                  src={IconWA}
                  alt="Icon WA"
                  className="w-[15px] md:w-[25px] lg:w-[35px] h-auto"
                />{" "}
              </button>
              {/* Elemen Popover */}
              <div
                id="my-popover"
                popover="true"
                className="z-50 bg-black/20 w-full h-auto fixed inset-0 items-center justify-center "
              >
                <div className="w-full h-auto fixed inset-0 flex items-center justify-center ">
                  <div className="p-4 rounded-lg shadow-lg bg-white">
                    <h1>WhatsApp Number</h1>
                    <div className="flex flex-col items-center gap-2 p-4 border rounded-md shadow-md bg-white">
                      {/* Box yang berisi nomor */}
                      <div
                        ref={numberRef}
                        className="px-4 py-2 border rounded-md text-lg font-semibold bg-gray-100"
                      >
                        081234567890
                      </div>

                      {/* Tombol Copy */}
                      <button
                        onClick={handleCopy}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                      >
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <button
                      popoverTarget="my-popover"
                      popoverTargetAction="hide"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={IconEmail}
                alt="Icon Email"
                className="w-[20px] md:w-[30px] lg:w-[40px] h-auto"
              />
            </div>
            <div>
              <Image
                src={IconIG}
                alt="Icon IG"
                className="w-[15px] md:w-[25px] lg:w-[35px] h-auto"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-[2px] px-[40px] md:px-[60px] lg:px-[100px]">
          <div className="w-full h-[1px] bg-[#A7A7A7]"></div>
        </div>

        <div className="flex justify-center items-center h-[40px] md:h-[50px]">
          <div className="flex flex-row gap-4 text-[10px] md:text-[14px] lg:text-[18px] font-[400]">
            <Link href="#about">
              <h1>About</h1>
            </Link>
            <div className="flex flex-row items-center border-0 sm:border-[1px] border-black rounded-[10px] px-0 sm:px-[10px] gap-4">
              <div className="border-0 sm:border-r-[1px] border-black pr-0 sm:pr-[9px]">
                <Link href="#details">
                  <h1>Details</h1>
                </Link>
              </div>
              <div className="hidden sm:flex flex-row gap-4">
                <Link href="#event">
                  <h1>Event</h1>
                </Link>
                <Link href="#race">
                  <h1>Race-KIT</h1>
                </Link>
                <Link href="#guest">
                  <h1>Guest-Star</h1>
                </Link>
                <Link href="#insta">
                  <h1>Insta-Post</h1>
                </Link>
              </div>
            </div>
            <Link href="#sponsorship">
              <h1>Sponsors & Media</h1>
            </Link>
          </div>
        </div>

        <div className="w-screen h-[6px] md:h-[8px] lg:h-[10px] bg-[#99FF00]"></div>
      </div>
    </section>
  );
}
