import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import React from "react";
import Head from "next/head";
import ThreeScene from "@/components/ThreeScene";
import { Footer } from "@/components/footer/Footer";
import "../styles/globals.css";


// import gsap from "gsap-trial";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function Home() {
  return (
    <div className="container bg-gradient-to-r from-purple-500 to-pink-500">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sofia&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div className="experience bg-transparent">
          <Header />
          <ThreeScene />
        </div>
        <div className="scrollTarget" />
        <div className="vignette-radial" />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
