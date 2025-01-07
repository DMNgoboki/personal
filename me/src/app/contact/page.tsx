"use client";

import { Header } from "@/components/header/Header";
import Link from "next/link";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";


export default function Contact() {
  const testRef = useRef(null);

  useEffect(() => {
    gsap.to(testRef.current, {
      delay: 1.5,
      scrambleText: {
        text: "I sure hope this works for you.",
        rightToLeft: true,
        chars: "lowercase",
      },
      duration: 5,
    });
  }, []);

  gsap.registerPlugin(TextPlugin);

  return (
    <div className="">
      <Header />
      <div className="container mx-auto  bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="flex  justify-center ">
          <div className="text-7xl">Contact</div>
        </div>
        <div className="flex mt-[30px] px-[20px] w-full gap-8 justify-center">
          <div>
            <div className="flex justify-center text-[30px]">Social</div>
            <div className="text-[50px] flex flex-col">
              <Link
                className="link-hover"
                href={`https://www.instagram.com/dominggo__/?__pwa=1`}
              >
                INSTAGRAM
              </Link>
              <Link
                className="link-hover"
                href={`https://www.facebook.com/batmunhk.batbold.9/`}
              >
                FACEBOOK
              </Link>
              <Link className="link-hover" href={`https://mail.google.com`}>
                EMAIL
              </Link>
              <Link className="link-hover" href={``}>
                PHONE NUMBER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
