"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { headerlists } from "./HeaderLists";

import { useRouter } from "next/navigation";

export function Header() {
  return (
    <div className="container mx-auto bg-transparent">
      <div className="flex text-3xl font-extrabold justify-around">
        {headerlists.map((headerlist) => (
          <Link key={headerlist.id} href={headerlist.link}>
            <div>{headerlist.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
