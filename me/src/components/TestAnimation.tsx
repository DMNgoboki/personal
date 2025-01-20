"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function TestAnimation() {
  const testRef = useRef(null);

  useEffect(() => {
    gsap.to(testRef.current, {
      text: "Please choose your preferred or desired social media account and contact me.",
      duration: 5,
      delay: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      className="flex justify-center"
      id="test"
      ref={testRef}
      style={{
        padding: "30px",
        fontSize: "3em",
        textAlign: "right",
        width: "850px",
      }}
    >
      Hello
    </div>
  );
}
