import AnimatedFish from "@/components/AnimatedFish";
import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import React from "react";
// import gsap from "gsap-trial";
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
      <Hero />
      <AnimatedFish />
    </main>
  );
}
