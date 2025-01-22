"use client";

import { useRef, useState } from "react";

const HoverSound = () => {
  const [isActivated, setIsActivated] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activateSound = () => {
    setIsActivated(true);
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("User interaction required:", error);
      });
    }
  };

  const playSound = () => {
    if (isActivated && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hover with Sound</h1>
      {!isActivated && (
        <div
          onClick={activateSound}
          style={{
            marginBottom: "20px",
            padding: "10px 20px",
            backgroundColor: "lightblue",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Click to Activate Hover Sound
        </div>
      )}
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
