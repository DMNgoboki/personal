"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { headerlists } from "./HeaderLists";
import DrawerAppBar from "./Appbar";

export function Header() {
  return (
    <div className="container mx-auto bg-transparent">
      <div className="hidden md:hidden lg:flex font-anton text-4xl font-extrabold justify-around  2xl:text-6xl ">
        {headerlists.map((headerlist) => (
          <Link key={headerlist.id} href={headerlist.link}>
            <div>{headerlist.title}</div>
          </Link>
        ))}
      </div>
      <div className="lg:hidden">
        <DrawerAppBar />
      </div>
    </div>
  );
}
