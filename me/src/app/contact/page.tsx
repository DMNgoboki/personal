"use client";

import TestAnimation from "@/components/TestAnimation";
import { Header } from "@/components/header/Header";
import Link from "next/link";


export default function Contact() {
  return (
    <div>
      <div className="container font-honk mx-auto text-black bg-gradient-to-r from-purple-500 to-pink-500">
        <Header />
        <div className="flex mt-[50px] justify-center ">
          <div className="text-7xl">Contact</div>
        </div>
        <div className="flex mt-[30px] px-[20px] w-full gap-8 justify-center">
          <div>
            <div className="flex justify-center text-[30px]">Social</div>
            <div className="text-[50px] grid grid-rows-2 grid-flow-col gap-8 mt-[30px] mb-[80px]">
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
              <Link
                className="link-hover flex justify-center"
                href={`https://mail.google.com`}
              >
                EMAIL
              </Link>
              <Link className="link-hover" href={``}>
                PHONE NUMBER
              </Link>
            </div>
          </div>
        </div>
        <TestAnimation />
      </div>
    </div>
  );
}
