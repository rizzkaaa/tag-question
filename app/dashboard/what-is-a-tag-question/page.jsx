"use client";
import { useState } from "react";
import { luckiest_Guy, tenali_Ramakrishna } from "../../../public/font";
import styles from "./page.module.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

export default function WhatIsPage() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="container">
      <div className={styles.content}>
        <div
          className={`${styles.borderBox} ${
            index < 0 ? styles.end : styles.start
          }`}
        >
          <div className={styles.text}>
            <h1 className={luckiest_Guy.className}>WHAT IS A TAG QUESTION? </h1>
          </div>
        </div>
        <div
          className={`${styles.line} ${
            index >= 0 ? styles.activeLine : styles.inactiveLine
          }`}
        ></div>
        <div
          className={`${styles.borderBox} ${index >= 0 ? styles.step1 : ""}`}
        >
          <div className={styles.text}>
            <p className={tenali_Ramakrishna.className}>
              A tag question is a short question added at the end of a
              statement.
            </p>
          </div>
        </div>
        <div
          className={`${styles.line} ${
            index >= 1 ? styles.activeLine : styles.inactiveLine
          }`}
        ></div>
        <div
          className={`${styles.borderBox} ${index >= 1 ? styles.step1 : ""}`}
        >
          <div className={styles.text}>
            <p className={tenali_Ramakrishna.className}>It is used to:</p>
          </div>
        </div>
        <div
          className={`${styles.line} ${
            index >= 2 ? styles.activeLine : styles.inactiveLine
          }`}
        ></div>
        <div
          className={`${styles.branch} ${index >= 2 ? styles.active : ""}`}
        ></div>
        <div className={styles.wrap}>
          <div
            className={`${styles.borderBox} ${index >= 2 ? styles.step1 : ""}`}
          >
            <div className={styles.text}>
              <p className={tenali_Ramakrishna.className}>
                Confirm information
              </p>
            </div>
          </div>
          <div
            className={`${styles.borderBox} ${index >= 2 ? styles.step1 : ""}`}
          >
            <div className={styles.text}>
              <p className={tenali_Ramakrishna.className}>
                Involve the listener
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.action}>
        <button
          className={`${styles.btn} ${tenali_Ramakrishna.className}`}
          onClick={() => setIndex(index - 1)}
          disabled={index < 0}
          >
          <FaAngleDoubleLeft /> Prev
        </button>
        <button
          className={`${styles.btn} ${tenali_Ramakrishna.className}`}
          onClick={() => setIndex(index + 1)}
          disabled={index >= 2}
        >
          Next <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
}
