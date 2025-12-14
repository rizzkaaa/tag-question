"use client";
import { luckiest_Guy } from "../../../public/font";
import styles from "./page.module.css";

export default function MoreVideo() {
  const videos = [
    "https://www.youtube.com/embed/xGq0BN7JkLU",
    "https://www.youtube.com/embed/uYJaBYBWYYs",
    "https://www.youtube.com/embed/BqwOgQN7DP4",
    "https://www.youtube.com/embed/JuAnvVADyLc",
    "https://www.youtube.com/embed/7thLgNgnVbY",
    "https://www.youtube.com/embed/y_UxwCSQGLc"
  ];

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
        {videos.map((video, i) => (
          <div className={styles.wrap} key={i}>
            <iframe
              width="445"
              height="250"
              src={video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
