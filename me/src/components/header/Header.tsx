"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { headerlists } from "./HeaderLists";

import { useRouter } from "next/navigation";

export function Header() {
  return (
    <div className="container mx-auto  bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="flex text-[30px] justify-around text-black">
        {headerlists.map((headerlist) => (
          <Link key={headerlist.id} href={headerlist.link}>
            <div>{headerlist.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
