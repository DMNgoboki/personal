import React from "react";
import styles from "../styles/BackgroundVideo.module.css";
import { Header } from "./header/Header";
import HoverSound from "./Sound1";


const BackgroundVideo = () => {
  return (
    <div className={styles.videoContainer} style={{ zIndex: 1 }}>
      <video autoPlay loop muted className={styles.video}>
        <source  src="/videos/my-video.mp4" type="video/mp4" />
      </video>
      <div className="{styles.content}">
        <h1 className="p-0 text-red-500">
          <Header />
        </h1>
        <HoverSound />
      </div>
    </div>
  );
};

export default BackgroundVideo;
