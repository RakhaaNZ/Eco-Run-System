import React from "react";
import LandingPage from "./UI/landing-page";
import About from "./UI/about";
import Details from "./UI/Details/details";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <About />
      <Details />
    </main>
  );
}
