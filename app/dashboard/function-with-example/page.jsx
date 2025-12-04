"use client";
import { useState } from "react";
import { luckiest_Guy, tenali_Ramakrishna } from "../../../public/font";
import styles from "./page.module.css";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function FunctionPage() {
  const [isActive, setIsActive] = useState(false);

  setTimeout(() => {
    setIsActive(true);
  }, 1800);

  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.wrap}>
          <div className={styles.borderBox}>
            <div className={styles.text}>
              <h1 className={luckiest_Guy.className}>Functions</h1>
            </div>
          </div>
          <div className={styles.borderBox}>
            <div className={styles.text}>
              <h1 className={luckiest_Guy.className}>Example</h1>
            </div>
          </div>
        </div>

        <div className={styles.wrap}>
          <div className={styles.borderBox}>
            <div className={styles.text}>
              <p className={tenali_Ramakrishna.className}>
                Asking for comfirmation
              </p>
            </div>
          </div>
          <div className={`${styles.icon} ${isActive ? styles.active : ""}`}>
            <FaAngleDoubleRight />
          </div>
          <div className={styles.borderBox}>
            <div className={styles.text}>
              <p className={tenali_Ramakrishna.className}>
                “This is your book, isn't it?”
              </p>
            </div>
          </div>
        </div>

        <div className={styles.wrap}>
          <div className={styles.borderBox}>
            <div className={styles.text}>
              <p className={tenali_Ramakrishna.className}>
                Engaging the listener
              </p>
            </div>
          </div>
          <div className={`${styles.icon} ${isActive ? styles.active : ""}`}>
            <FaAngleDoubleRight />
          </div>
          <div className={styles.borderBox}>
            <div className={styles.text}>
              <p className={tenali_Ramakrishna.className}>
                “It's a nice day, isn't it?”
              </p>
            </div>
          </div>
        </div>

        <div className={styles.wrap}>
          <div className={styles.borderBox}>
            <div className={styles.text}>
              <p className={tenali_Ramakrishna.className}>Seeking agreement</p>
            </div>
          </div>
          <div className={`${styles.icon} ${isActive ? styles.active : ""}`}>
            <FaAngleDoubleRight />
          </div>
          <div className={styles.borderBox}>
            <div className={styles.text}>
              <p className={tenali_Ramakrishna.className}>
                “We should study harder, shouldn't we?”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
