import React from "react";
import styles from "../styles/BackgroundVideo.module.css";
import { Header } from "./header/Header";
import Contactext from "./contact/Contactext";

const BackgroundVideo2 = () => {
  return (
    <div className={styles.videoContainer} style={{ zIndex: 5 }}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/videos/my-video2.mp4" type="video/mp4" />
      </video>
      <div className="{styles.content}">
        <h1 className="p-0 text-black">
          <Header />
        </h1>
        <div className="p-0 text-black">
          <Contactext />
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo2;
