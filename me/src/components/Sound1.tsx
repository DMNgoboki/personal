"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const HoverSound = () => {
  const [isActivated, setIsActivated] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <div>
      {!isActivated && (
        <div
          className="flex bg-clip-text cursor-pointer  hover:text-black font-sixtyfour justify-center mt-[100px] transition"
          onClick={() => {
            setIsVisible(!isVisible);
            activateSound();
          }}
        >
          PROJECTS VIEW
        </div>
      )}
      <div>
        <div
          className={`${
            isVisible ? "block" : "hidden"
          } mt-[150px] font-sixtyfour transition-opacity duration-500 
          w-[670px] p-5 flex flex-col gap-10`}
        >
          <Link
            onMouseEnter={playSound}
            className="bg-clip-text text-5xl text-transparent bg-black hover:text-gray-700 transition duration-300"
            href={``}
          >
            FOOD DELIVERY
          </Link>
          <Link
            onMouseEnter={playSound}
            className="bg-clip-text text-5xl text-transparent bg-black hover:text-gray-700 transition duration-300"
            href={`https://blackonefurniture.vercel.app/`}
          >
            FURNITURE
          </Link>
          <Link
            onMouseEnter={playSound}
            className="bg-clip-text text-5xl text-transparent bg-black hover:text-gray-700 transition duration-300"
            href={``}
          >
            Blog WEB
          </Link>
        </div>
      </div>
      <audio ref={audioRef} src="/sounds/select-sound.mp3" preload="auto" />
    </div>
  );
};

export default HoverSound;
