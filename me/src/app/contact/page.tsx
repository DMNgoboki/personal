"use client";

import { Header } from "@/components/header/Header";

export default function Contact() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex  justify-center mt-[30px]">
        <div className="text-7xl">Contact</div>
      </div>
      <div className="flex mt-[30px] px-[20px] w-full gap-8 justify-between">
        <div className="w-6/12 flex gap-4 flex-wrap">
          <div className="text-6xl">INSTAGRAM</div>
          <div className="text-6xl">FACEBOOK</div>
          <div className="text-6xl">EMAIL</div>
          <div className="text-6xl">PHONE NUMBER</div>
        </div>
        <div className="w-6/12">
          <div>PHOTO</div>
          <button className="btn btn-active btn-secondary">Secondary</button>
        </div>
      </div>
    </div>
  );
}
