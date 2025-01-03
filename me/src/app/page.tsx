import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import React from "react";
import Head from "next/head";
import ThreeScene from "@/components/ThreeScene";
// import gsap from "gsap-trial";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="experience">
          <Header />
          <ThreeScene />
        </div>
        <div className="scrollTarget" />
        <div className="vignette-radial" />
      </main>
    </div>
  );
}
