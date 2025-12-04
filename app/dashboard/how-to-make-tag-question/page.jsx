"use client";
import styles from "./page.module.css";
import { luckiest_Guy, tenali_Ramakrishna } from "../../../public/font";
import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

export default function HowToMakePage() {
  const [index, setIndex] = useState(-1);
  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.borderBox}>
          <div className={styles.text}>
            <h1 className={luckiest_Guy.className}>HOW</h1>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.borderBox}>
          <div className={styles.text}>
            <h1 className={luckiest_Guy.className}>TO MAKE</h1>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.borderBox}>
          <div className={styles.text}>
            <h1 className={luckiest_Guy.className}>TAG QUESTION?</h1>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.borderBox}>
          <div className={styles.text}>
            <p className={tenali_Ramakrishna.className}>
              A tag question is made by adding a short question at the end of a
              sentence.
            </p>
          </div>
        </div>
        <div className="wrapStep1">
          <div className={styles.borderBox}>
            <div className={styles.text}>
              <p className={tenali_Ramakrishna.className}>
                To form a question tag, we use an:
              </p>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.branch}></div>
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
