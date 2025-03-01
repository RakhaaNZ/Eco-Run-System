import React from "react";
import LandingPage from "./UI/landing-page";
import About from "./UI/about";
import Details from "./UI/Details/details";
import Sponsorship from "./UI/sponsorship";
import Footer from "./UI/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <LandingPage />
      <About />
      <Details />
      <Sponsorship />
      {/* <Footer /> */}
    </main>
  );
}
