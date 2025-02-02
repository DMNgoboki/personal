"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Hero() {
  return (
    <div className="container font-honk w-full mt-[100px]">
      <div className="flex gap-[50px]">
        <div className="w-6/12 bg-clip-text text-transparent font-rubik bg-gradient-to-r from-yellow-500 to-slate-500">
          <h1 className="text-5xl font-extrabold "> Hello, I'm Batbold.</h1>
          <h1 className="text-5xl font-extrabold">I'm Fullstack devoloper.</h1>
        </div>
        <div className="w-6/12 font-rubik text-3xl font-extrabold bg-clip-text text-transparent  bg-gradient-to-r from-green-400 to-red-600">
          Because I enjoy trying new things, I am ready for and comfortable with
          unexpected problems. This is why I love what I do.
        </div>
      </div>
    </div>
  );
}
