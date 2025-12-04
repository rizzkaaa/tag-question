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
        <div className={`${styles.borderBox} ${styles.wrapStart}`}>
          <div className={styles.text}>
            <p className={tenali_Ramakrishna.className}>
              A tag question is made by adding a short question at the end of a
              sentence.
            </p>
          </div>
        </div>
        <div className={styles.wrapStep1}>
          <div className={styles.borderBox}>
            <div className={styles.text}>
              <p className={tenali_Ramakrishna.className}>
                To form a question tag, we use:
              </p>
            </div>
          </div>
          <div className={styles.line}></div>

          <div className={styles.branch}></div>
          <div className={styles.wrapBranch}>
            <div className={styles.wrap}>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>
                    An auxiliary verb
                  </p>
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>
                    is, are, do, does, have, will, can, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.wrap}>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>
                    A subject pronoun
                  </p>
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>
                    I, you, they, we, he, she, it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.wrapStep2}>
          <div className={styles.wrap}>
            <div className={styles.branch}>
              <div className={styles.line}></div>
            </div>
            <div className={styles.wrapContent}>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>
                    If the main sentence is positive
                  </p>
                </div>
              </div>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>
                    The question tag must be negative
                  </p>
                </div>
              </div>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>
                    Example: You are a student, aren’t you?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.branch}>
              <div className={styles.line}></div>
            </div>
            <div className={styles.wrapContent}>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>
                    If the main sentence is negative
                  </p>
                </div>
              </div>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>
                    The question tag must be positive
                  </p>
                </div>
              </div>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>
                    Example: She isn’t here, is she?
                  </p>
                </div>
              </div>
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
