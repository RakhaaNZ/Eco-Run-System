import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoEcoRun from "../../../../public/Assets/Logo-eco-run.png";
import MiniNavbar from "./MiniNavbar";

const Navbar = () => {
  return (
    <div id="Container" className="nav w-full h-[100px] flex fixed z-40">
      <div className="w-screen h-full relative flex flex-row">
        <div className="w-[15%] px-[10px] flex justify-center items-center">
          <Image
            src={LogoEcoRun}
            alt="EcoRun Logo Image"
            className="w-[80px] h-auto"
          />
        </div>
        {/* Desktop */}
        <div className="hidden md:flex w-[85%] h-full flex-row justify-around gap-8 items-center px-[150px] text-[32px] font-[400]">
          <Link href="#">
            <h1>Home</h1>
          </Link>
          <Link href="">
            <h1>About</h1>
          </Link>
          <Link href="">
            <h1>Details</h1>
          </Link>
          <Link href="">
            <h1>Sponsorship</h1>
          </Link>
        </div>
        {/* // Mobile */}
        <div className="md:hidden w-screen h-screen pt-[100px]">
          <MiniNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
