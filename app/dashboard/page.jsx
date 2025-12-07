"use client";
import Link from "next/link";
import { luckiest_Guy, tenali_Ramakrishna } from "../../public/font";
import styles from "./page.module.css";
import Image from "next/image";

export default function GetStartedPage() {
  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.logo}>
          <div>
            <p className={luckiest_Guy.className}>Tag</p>
            <div className={styles.wrapImage}>
              <Image
                src="/images/decoration1.png"
                fill
                alt="decoration"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <p className={luckiest_Guy.className}>QUESTION</p>
        </div>

        <div className={styles.actionBtn}>
          <Link
            href="/dashboard/what-is-a-tag-question"
            className={`${styles.a} ${tenali_Ramakrishna.className}`}
          >
            Get Started
          </Link>
          <a
            href="https://quiz.yopaaa.xyz/"
            className={tenali_Ramakrishna.className}
          >
            Go To WUIZZ
          </a>
        </div>

        <p className={`${styles.greetings} ${tenali_Ramakrishna.className}`}>
          “Master Tag Questions with confidence, <br></br> learning English
          starts with one simple step.”
        </p>
      </div>
      <div className={styles.team}>
        <h1 className={luckiest_Guy.className}>OUR TEAM</h1>
        <div className={styles.wrapCard}>
          <div className={styles.cardTeam}>
            <div className={styles.wrapImage}>
              <Image
                src="/images/rizka1.jpeg"
                fill
                alt="team"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className={tenali_Ramakrishna.className}>Programmer</p>
            <p className={luckiest_Guy.className}>Rizka Layla Ramadhani</p>
          </div>
          <div className={styles.cardTeam}>
            <div className={styles.wrapImage}>
              <Image
                src="/images/arin.jpeg"
                fill
                alt="team"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className={tenali_Ramakrishna.className}>UI/UX Desaigner</p>
            <p className={luckiest_Guy.className}>Arindiany Nur Islamiyah</p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <div>
            <p className={luckiest_Guy.className}>Tag</p>
            <div className={styles.wrapImage}>
              <Image
                src="/images/decoration1.png"
                fill
                alt="decoration"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <p className={luckiest_Guy.className}>QUESTION</p>
        </div>
        <div className={styles.line}></div>
        <span>&copy;</span>
        <p className={`${tenali_Ramakrishna.className} ${styles.p}`}>
          {" "}
          Create By Rizka Layla Ramadhani
        </p>
      </footer>
    </div>
  );
}
