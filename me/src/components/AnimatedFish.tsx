"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "../styles/AnimatedFish.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const AnimatedFish = () => {
  const fishRef = useRef(null);
  const fishHeadAndBodyRef = useRef([]);
  const sectionsRef = useRef([]);
  const lightsRef = useRef([]);
  const raysRef = useRef(null);

  useEffect(() => {
    const rx = window.innerWidth < 1000 ? window.innerWidth / 1200 : 1;
    const ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1;

    const path = [
      { x: 800, y: 200 },
      { x: 900, y: 20 },
      { x: 1100, y: 100 },
      { x: 1000, y: 200 },
      { x: 900, y: 20 },
      { x: 10, y: 500 },
      { x: 100, y: 300 },
      { x: 500, y: 400 },
      { x: 1000, y: 200 },
      { x: 1100, y: 300 },
      { x: 400, y: 400 },
      { x: 200, y: 250 },
      { x: 100, y: 300 },
      { x: 500, y: 450 },
      { x: 1100, y: 500 },
    ];

    const scaledPath = path.map(({ x, y }) => ({
      x: x * rx,
      y: y * ry,
    }));

    const bubbles = gsap.timeline();
    bubbles.set(".bubbles__bubble", { y: 100 });
    bubbles.to(".bubbles__bubble", {
      scale: 1.2,
      y: -300,
      opacity: 1,
      duration: 2,
      stagger: 0.2,
    });
    bubbles.to(
      ".bubbles__bubble",
      {
        scale: 1,
        opacity: 0,
        duration: 1,
      },
      "-=1"
    );
    bubbles.pause();

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1.5,
      },
    });
    tl.to(fishRef.current, {
      motionPath: {
        path: scaledPath,
        align: "self",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 10,
      immediateRender: true,
    });
    tl.to(".indicator", { opacity: 0 }, 0);
    tl.to(fishRef.current, { rotateX: 180 }, 1);
    tl.to(fishRef.current, { rotateX: 0 }, 2.5);
    tl.to(fishRef.current, { z: -500, duration: 2 }, 2.5);
    tl.to(fishRef.current, { rotateX: 180 }, 4);
    tl.to(fishRef.current, { rotateX: 0 }, 5.5);
    tl.to(fishRef.current, { z: -50, duration: 2 }, 5);
    tl.to(fishRef.current, { rotate: 0, duration: 1 }, "-=1");
    tl.to(".fish__skeleton", { opacity: 0.6, duration: 0.1, repeat: 4 }, "-=3");
    tl.to(
      fishHeadAndBodyRef.current,
      { opacity: 0, duration: 0.1, repeat: 4 },
      "-=3"
    );
    tl.to(".fish__inner", { opacity: 0.1, duration: 1 }, "-=1");
    tl.to(".fish__skeleton", { opacity: 0.1, duration: 1 }, "-=1");

    bubbles.play();
    tl.pause();

    const lightsTl = gsap.timeline({
      scrollTrigger: {
        scrub: 6,
      },
    });
    lightsTl.from(
      lightsRef.current[0],
      {
        x: window.innerWidth * -1,
        y: window.innerHeight,
        ease: "power4.out",
        duration: 80,
      },
      0
    );
    lightsTl.to(
      lightsRef.current[0],
      {
        x: window.innerWidth,
        y: window.innerHeight * -1,
        ease: "power4.out",
        duration: 80,
      },
      "-=5"
    );

    const makeBubbles = (p, i) => {
      const { top, left } = fishRef.current.getBoundingClientRect();
      gsap.to(p, { opacity: 1, duration: 1 });
      gsap.set(".bubbles", { x: left, y: top });
      if (bubbles.paused) {
        bubbles.restart();
      }
      if (i > 6) {
        gsap.to(".bubbles", { opacity: 0 });
      }
    };

    const rotateFish = (self) => {
      if (self.direction === -1) {
        gsap.to(fishRef.current, { rotationY: 180, duration: 0.4 });
      } else {
        gsap.to(fishRef.current, { rotationY: 0, duration: 0.4 });
      }
    };

    const hideText = (p) => {
      gsap.to(p, { opacity: 0, duration: 1 });
    };

    sectionsRef.current.forEach((section, i) => {
      const p = section.querySelector("p");
      gsap.to(p, { opacity: 0 });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        onEnter: () => makeBubbles(p, i),
        onEnterBack: () => {
          if (i <= 6) {
            gsap.to(".bubbles", { opacity: 1 });
          }
        },
        onLeave: () => {
          hideText(p);
          if (i === 0) {
            gsap.to(raysRef.current, {
              opacity: 0,
              y: -500,
              duration: 8,
              ease: "power4.in",
            });
          }
        },
        onLeaveBack: () => hideText(p),
        onUpdate: (self) => rotateFish(self),
      });
    });
  }, []);

  return (
    <div>
      <div className="bubbles">
        <div className="bubbles__bubble"></div>
        <div className="bubbles__bubble"></div>
        <div className="bubbles__bubble"></div>
        <div className="bubbles__bubble"></div>
      </div>
      <div className="fish" ref={fishRef}>
        <div className="fish__head"></div>
        <div className="fish__body"></div>
      </div>
      <div className="rays" ref={raysRef}></div>
      <div data-lights ref={(el) => lightsRef.current.push(el)}></div>
      <section ref={(el) => sectionsRef.current.push(el)}>
        <p>Section 1</p>
      </section>
      <section ref={(el) => sectionsRef.current.push(el)}>
        <p>Section 2</p>
      </section>
      <section ref={(el) => sectionsRef.current.push(el)}>
        <p>Section 3</p>
      </section>
      <section ref={(el) => sectionsRef.current.push(el)}>
        <p>Section 4</p>
      </section>
    </div>
  );
};

export default AnimatedFish;
