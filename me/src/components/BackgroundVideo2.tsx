import React from "react";
import styles from "../styles/BackgroundVideo.module.css";
import { Header } from "./header/Header";
import Link from "next/link";
import TestAnimation from "./TestAnimation";
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
        <div className="">
          <Contactext />
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo2;
