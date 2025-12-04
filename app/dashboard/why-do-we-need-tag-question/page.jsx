"use client";
import { useState } from "react";
import { luckiest_Guy, tenali_Ramakrishna } from "../../../public/font";
import styles from "./page.module.css";
import { FaChevronDown } from "react-icons/fa";

export default function WhyNeedPage() {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  return (
    <div className="container">
      <div className={styles.borderBox}>
        <div className={styles.text}>
          <h1 className={luckiest_Guy.className}>
            Why Do We Need Tag Question?
          </h1>
        </div>
      </div>
      <div className={styles.content}>
        <div className={`${styles.wrapBox}`}>
          <button
            onClick={() => setIsActive1(!isActive1)}
            className={`${styles.borderBox} ${isActive1 ? styles.active : ""}`}
          >
            <div className={styles.text}>
              <h3 className={tenali_Ramakrishna.className}>
                Avoid misunderstanding
              </h3>
              <div
                className={`${styles.icon} ${isActive1 ? styles.active : ""}`}
              >
                <FaChevronDown />
              </div>
            </div>
          </button>
          <p
            className={`${tenali_Ramakrishna.className} ${
              isActive1 ? styles.active : styles.inactive
            }`}
          >
            Tag questions help make sure that the listener understands the
            message correctly and prevent confusion.
          </p>
        </div>
        <div className={`${styles.wrapBox}`}>
          <button
            onClick={() => setIsActive2(!isActive2)}
            className={`${styles.borderBox} ${isActive2 ? styles.active : ""}`}
          >
            <div className={styles.text}>
              <h3 className={tenali_Ramakrishna.className}>
                Make conversation more natural
              </h3>
              <div
                className={`${styles.icon} ${isActive2 ? styles.active : ""}`}
              >
                <FaChevronDown />
              </div>
            </div>
          </button>
          <p
            className={`${tenali_Ramakrishna.className}  ${
              isActive2 ? styles.active : styles.inactive
            }`}
          >
            Tag questions make speech sound friendlier and more natural,
            especially in casual conversation.
          </p>
        </div>
        <div className={`${styles.wrapBox}`}>
          <button
            onClick={() => setIsActive3(!isActive3)}
            className={`${styles.borderBox} ${isActive3 ? styles.active : ""}`}
          >
            <div className={styles.text}>
              <h3 className={tenali_Ramakrishna.className}>
                Encourage interaction
              </h3>
              <div
                className={`${styles.icon} ${isActive3 ? styles.active : ""}`}
              >
                <FaChevronDown />
              </div>
            </div>
          </button>
          <p
            className={`${tenali_Ramakrishna.className} ${
              isActive3 ? styles.active : styles.inactive
            }`}
          >
            They invite the listener to reply and take part in the conversation,
            making communication more active.
          </p>
        </div>
      </div>
    </div>
  );
}
