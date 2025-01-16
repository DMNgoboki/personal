import React from "react";
import styles from "../styles/BackgroundVideo.module.css";
import { Header } from "./header/Header";
import Contact from "@/app/contact/page";
import Contactext from "./contact/Contactext";

const BackgroundVideo2 = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/videos/my-video2.mp4" type="video/mp4" />
      </video>
      <div className="{styles.content}">
        <h1 className="p-0">
          <Header />
        </h1>
        <p></p>
        {/* <Contactext /> */}
      </div>
    </div>
  );
};

export default BackgroundVideo2;
