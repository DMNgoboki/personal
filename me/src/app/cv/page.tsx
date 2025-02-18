"use client";

import { Header } from "@/components/header/Header";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function Cv() {
  return (
    <div className="container mx-auto text-white bg-black">
      <Header />
      <div>
        <iframe
          src="/my-document.pdf"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}
