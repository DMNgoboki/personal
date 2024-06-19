import React, { useEffect, useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "./about.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useEffect(() => {
    const scrollEl = document.querySelector("#main-section");
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({ delay: 0.5 });

      timeline
        .from(`.${about.about}`, {
          scrollTrigger: {
            trigger: `.${about.about}`,
            start: "+100px top",
            end: "bottom bottom",
            markers: true,
            scrub: true,
          },
        })
        .from(`.${about.subtitle}`, {
          scrollTrigger: {
            trigger: `.${about.about}`,
            start: "top top",
            scrub: true,
            pin: true,
          },
          x: 100,
          opacity: 0.5,
          duration: 2,
          delay: 2,
        });
    });

    return () => ctx.revert();
  });

  return (
    <div id="main-section">
      <section className={about.about} data-scroll-section>
        <div className={about.about__content}>
          <h2 className={about.subtitle}>600ds.</h2>
        </div>
      </section>
    </div>
  );
}
