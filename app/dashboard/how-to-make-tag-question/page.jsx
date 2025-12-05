"use client";
import styles from "./page.module.css";
import { luckiest_Guy, tenali_Ramakrishna } from "../../../public/font";
import { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

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
        <div className={`${styles.borderBox} ${index < 0 ? styles.wrapStart : styles.start}`}>
          <div className={styles.text}>
            <p className={tenali_Ramakrishna.className}>
              A tag question is made by adding a short question at the end of a
              sentence.
            </p>
          </div>
        </div>
        <div className={`${styles.wrapStep1} ${index == 0 ? styles.step1 : ''}`}>
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

        <div className={`${styles.wrapStep2} ${index == 1 ? styles.step2 : ''}`}>
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
                    Example: You are a student, aren't you?
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
                    Example: She isn't here, is she?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.wrapStep3} ${index == 2 ? styles.step3 : ''} ${index == 3 ? styles.step4 : ''}`}>
          <div className={styles.wrap}>
            <div className={styles.borderBox}>
              <div className={styles.text}>
                <p className={tenali_Ramakrishna.className}>
                  The auxiliary verb in the tag must match the verb tense in the
                  main sentence.
                </p>
              </div>
            </div>
            <div className={styles.icon}>
              <FaAngleDoubleRight />
            </div>
            <div className={styles.wrapExample}>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>Example:</p>
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.wrapBranch}>
                <div className={styles.branch}></div>
                <div>
                  <div className={styles.borderBox}>
                    <div className={styles.text}>
                      <p className={tenali_Ramakrishna.className}>
                        They will come, won't they?
                      </p>
                    </div>
                  </div>
                  <div className={styles.borderBox}>
                    <div className={styles.text}>
                      <p className={tenali_Ramakrishna.className}>
                        He has finished, hasn't he?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.wrap}>
            <div className={styles.borderBox}>
              <div className={styles.text}>
                <p className={tenali_Ramakrishna.className}>
                  When the main sentence has no auxiliary verb, we use
                  do/does/did in the question tag.
                </p>
              </div>
            </div>
            <div className={styles.icon}>
              <FaAngleDoubleLeft />
            </div>

            <div className={styles.wrapExample}>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>Example:</p>
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.wrapBranch}>
                <div className={styles.branch}></div>
                <div>
                  <div className={styles.borderBox}>
                    <div className={styles.text}>
                      <p className={tenali_Ramakrishna.className}>
                        You like coffee, don't you?
                      </p>
                    </div>
                  </div>
                  <div className={styles.borderBox}>
                    <div className={styles.text}>
                      <p className={tenali_Ramakrishna.className}>
                        She plays piano, doesn't she?
                      </p>
                    </div>
                  </div>
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
          disabled={index >= 3}
        >
          Next <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
}
