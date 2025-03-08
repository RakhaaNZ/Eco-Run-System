import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoEcoRun from "../../../../public/Assets/Logo-eco-run.png";
import MiniNavbar from "./MiniNavbar";

const Navbar = () => {
  return (
    <div
      id="Container"
      className="nav w-full h-[60px] md:h-[80px] lg:h-[100px] flex fixed z-40"
    >
      <div className="w-screen h-full relative flex flex-row bg-white/80">
        <div className="w-[50%] md:w-[60%] lg:w-[18%] px-[10px] pl-[20px] md:pl-[70px] lg:pl-0 flex justify-center items-center">
          <Link
            href="https://eco-run-system.vercel.app/ "
            className="w-full h-full flex flex-row justify-center items-center gap-2 md:gap-4"
          >
            <Image
              src={LogoEcoRun}
              alt="EcoRun Logo Image"
              className="h-auto w-[45px] md:w-[65px] lg:w-[80px]"
            />
            <div className="relative lg:hidden w-full h-[60px] md:h-[80px] lg:h-[100px] flex  items-center">
              <h1 className="text-[12px] md:text-[18px] lg:text-[32px] font-[700] bg-gradient-to-r from-[#37A71F] to-[#8CD223] text-transparent bg-clip-text">
                ECO RUN SYSTEM
              </h1>
            </div>
          </Link>
        </div>
        {/* Desktop */}
        <div className="hidden lg:flex w-[85%] h-full flex-row justify-around gap-8 ml-[-120px] items-center px-[150px] text-[32px] font-[400]">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Details", href: "#details" },
            { name: "Sponsors & Media", href: "#sponsorship" },
            { name: "Contact Us", href: "#contact" },
          ].map((item, index) => (
            <Link key={index} href={item.href} className="relative group">
              <h1 className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-gradient-to-r from-[#37A71F] to-[#8CD223] group-hover:text-transparent group-hover:bg-clip-text leading-[1]">
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#99FF00] transition-all duration-300 group-hover:w-full"></span>
              </h1>
            </Link>
          ))}
        </div>

        {/* // Mobile */}
        <div className="lg:hidden lg:-z-50 lg:w-screen lg:h-screen pt-[100px]">
          <MiniNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
