import React from "react";
import styles from "../styles/BackgroundVideo.module.css";
import { Header } from "./header/Header";
import Link from "next/link";
import HoverSound from "./Sound1";

const BackgroundVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/videos/my-video.mp4" type="video/mp4" />
      </video>
      <div className="{styles.content}">
        <h1 className="p-0">
          <Header />
        </h1>
        <div className="mt-[150px] p-5 pl-20 flex flex-col gap-10">
          <Link
            className="bg-clip-text text-5xl text-transparent bg-black hover:text-gray-700 transition duration-300"
            href={`https://www.instagram.com/dominggo__/?__pwa=1`}
          >
            FOOD DELIVERY
          </Link>
          <Link
            className="bg-clip-text text-5xl text-transparent bg-black hover:text-gray-700 transition duration-300"
            href={`https://blackonefurniture.vercel.app/`}
          >
            FURNITURE
          </Link>
          <Link
            className="bg-clip-text text-5xl text-transparent bg-black hover:text-gray-700 transition duration-300"
            href={`https://www.instagram.com/dominggo__/?__pwa=1`}
          >
            Blog WEB
          </Link>
          <HoverSound />
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
