"use client";

import { useRef } from "react";

const HoverSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      // Браузерийн бодлогыг давахын тулд catch ашиглаж алдааг барина
      audioRef.current.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hover</h1>
      <button
        onClick={() => {
          audioRef.current?.play();
        }}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "lightblue",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Click to Activate Sound
      </button>
      <div
        onMouseEnter={playSound}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "lightgray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease",
        }}
      >
        Hover Me
      </div>
      <audio ref={audioRef} src="/sounds/select-sound.mp3" preload="auto" />
    </div>
  );
};

export default HoverSound;
