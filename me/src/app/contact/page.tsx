"use client";

import TestAnimation from "@/components/TestAnimation";
import { Header } from "@/components/header/Header";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <div className="container font-honk mx-auto text-black bg-white">
        <Header />
        <div className="flex mt-[50px] justify-center ">
          <div className="font-extrabold text-7xl">CONTACT</div>
        </div>
        <div className="flex mt-[30px] px-[20px] w-full gap-8 justify-center">
          <div>
            <div className="flex font-extrabold  justify-center text-5xl">
              Social
            </div>
            <div className="text-5xl font-extrabold grid grid-rows-2 grid-flow-col gap-8 mt-[30px] mb-[80px]">
              <Link
                className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hover:text-gray-700 transition duration-300"
                href={`https://www.instagram.com/dominggo__/?__pwa=1`}
              >
                INSTAGRAM
              </Link>
              <Link
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-slate-500 hover:text-gray-700 transition duration-300"
                href={`https://www.facebook.com/batmunhk.batbold.9/`}
              >
                FACEBOOK
              </Link>
              <Link
                className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-red-600 hover:text-gray-700 transition duration-300 flex justify-center"
                href={`https://mail.google.com`}
              >
                EMAIL
              </Link>
              <Link
                className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-slate-200 hover:text-gray-700 transition duration-300`"
                href={``}
              >
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
