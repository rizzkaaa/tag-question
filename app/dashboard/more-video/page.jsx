"use client";
import { useState } from "react";
import { luckiest_Guy, tenali_Ramakrishna } from "../../../public/font";
import styles from "./page.module.css";

export default function MoreVideo() {
  return (
    <div className="container">
      <div className={styles.borderBox}>
        <div className={styles.text}>
          <h1 className={luckiest_Guy.className}>
            More Video About Tag Question
          </h1>
        </div>
      </div>
      <div>
        <div className={styles.wrap}>
          <iframe
            width="445"
            height="250"
            src="https://www.youtube.com/embed/xGq0BN7JkLU?si=4whG3bSuiMgpomMX"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
