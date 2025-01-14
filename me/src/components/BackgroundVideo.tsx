import React from "react";
import styles from "../styles/BackgroundVideo.module.css";
import { Header } from "./header/Header";

const BackgroundVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/videos/my-video.mp4" type="video/mp4" />
      </video>
      {/* <div className={styles.content}>
        <h1>
          <Header />
        </h1>
        <p></p>
      </div> */}
    </div>
  );
};

export default BackgroundVideo;
