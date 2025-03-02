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
        <div className="w-[40%] md:w-[30%] lg:w-[18%] px-[10px] flex justify-center items-center">
          <Image
            src={LogoEcoRun}
            alt="EcoRun Logo Image"
            className="h-auto w-[45px] md:w-[65px] lg:w-[80px]"
          />
        </div>
        {/* Desktop */}
        <div className="hidden lg:flex w-[85%] h-full flex-row justify-around gap-8 ml-[-120px] items-center px-[150px] text-[32px] font-[400]">
          <Link href="#home">
            <h1>Home</h1>
          </Link>
          <Link href="#about">
            <h1>About</h1>
          </Link>
          <Link href="#details">
            <h1>Details</h1>
          </Link>
          <Link href="#sponsorship">
            <h1>Sponsorship</h1>
          </Link>
        </div>
        {/* // Mobile */}
        <div className="lg:hidden w-screen h-screen pt-[100px]">
          <MiniNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
