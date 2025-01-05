"use client";

import { Header } from "@/components/header/Header";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function Cv() {
  return (
    <div className="container mx-auto  bg-gradient-to-r from-purple-500 to-pink-500">
      <Header />
      <div>
        <iframe
          src="/my-document.pdf"
          width="100%"
          height="600px"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}
