"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";

export function Hero() {
  return (
    <div className="container mx-auto mt-[100px]">
      <div className="flex w-full px-[50px]">
        <div className="w-6/12">
          <h1 className="text-[30px] Bungee Spice"> Hello, I'm Batbold.</h1>
          <h1 className="text-[30px]">I'm Fullstack devoloper.</h1>
        </div>
        <div className="w-6/12">
          Because I enjoy trying new things, I am ready for and comfortable with
          unexpected problems. This is why I love what I do.
        </div>
        {/* <div>
          I am a motivated, versatile individual who is always eager to take on
          new challenges. Additionally, I am a skilled full-stack developer with
          1 year of experience in web development and a strong desire to learn
          new things.
        </div> */}
      </div>
    </div>
  );
}
