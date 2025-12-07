"use client";
import { useState } from "react";
import { luckiest_Guy, tenali_Ramakrishna } from "../../../public/font";
import styles from "./page.module.css";
import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaPaperPlane,
  FaChevronDown,
} from "react-icons/fa";

export default function FormulaPage() {
  const [answers, setAnswers] = useState({});
  const [status, setStatus] = useState({});
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const questions = [
    {
      id: 1,
      question: "She is studying in her room, ___?",
      answer: [
        "isn&apos;t she",
        "isn&apos;t she?",
        "is not she",
        "is not she?",
      ],
      subject: "she",
      aux: "is",
      correct_aux: "isn&apos;t",
      type: ["auxiliary", "positive"],
    },
    {
      id: 2,
      question: "They are not coming to the party tonight, ___?",
      answer: ["are they", "are they?"],
      subject: "they",
      aux: "are",
      correct_aux: "are",
      type: ["auxiliary", "negative"],
    },
    {
      id: 3,
      question: "He was very tired yesterday, ___?",
      answer: [
        "wasn&apos;t he",
        "wasn&apos;t he?",
        "was not he",
        "was not he?",
      ],
      subject: "he",
      aux: "was",
      correct_aux: "wasn&apos;t",
      type: ["auxiliary", "positive"],
    },
    {
      id: 4,
      question: "You haven&apos;t finished your homework, ___?",
      answer: ["have you", "have you?"],
      subject: "you",
      aux: "have",
      correct_aux: "have",
      type: ["auxiliary", "negative"],
    },
    {
      id: 5,
      question: "She likes coffee, ___?",
      answer: [
        "doesn&apos;t she",
        "doesn&apos;t she?",
        "does not she",
        "does not she?",
      ],
      subject: "she",
      aux: "does",
      correct_aux: "doesn&apos;t",
      type: ["main", "positive"],
    },
    {
      id: 6,
      question: "They did not play football yesterday, ___?",
      answer: ["did they", "did they?"],
      subject: "they",
      aux: "did",
      correct_aux: "did",
      type: ["main", "negative"],
    },
    {
      id: 7,
      question: "He studies English every day, ___?",
      answer: [
        "doesn&apos;t he",
        "doesn&apos;t he?",
        "does not he",
        "does not he?",
      ],
      subject: "he",
      aux: "does",
      correct_aux: "doesn&apos;t",
      type: ["main", "positive"],
    },
    {
      id: 8,
      question: "You cannot swim very well, ___?",
      answer: ["can you", "can you?"],
      subject: "you",
      aux: "can",
      correct_aux: "can",
      type: ["modal", "negative"],
    },
    {
      id: 9,
      question: "She will join us later, ___?",
      answer: [
        "won&apos;t she",
        "won&apos;t she?",
        "will not she",
        "will not she?",
      ],
      subject: "she",
      aux: "will",
      correct_aux: "won&apos;t",
      type: ["modal", "positive"],
    },
    {
      id: 10,
      question: "They should not arrive late, ___?",
      answer: ["should they", "should they?"],
      subject: "they",
      aux: "should",
      correct_aux: "should",
      type: ["modal", "negative"],
    },
  ];

  const table1 = [
    {
      subject: "I",
      to_be: "Am",
      question_tag: "Aren&apos;t",
    },
    {
      subject: "You",
      to_be: "Are / Were",
      question_tag: "Aren&apos;t / Weren&apos;t",
    },
    {
      subject: "They",
      to_be: "Are / Were",
      question_tag: "Aren&apos;t / Weren&apos;t",
    },
    {
      subject: "We",
      to_be: "Are / Were",
      question_tag: "Aren&apos;t / Weren&apos;t",
    },
    {
      subject: "He",
      to_be: "Is / Was",
      question_tag: "Isn&apos;t / Wasn&apos;t",
    },
    {
      subject: "She",
      to_be: "Is / Was",
      question_tag: "Isn&apos;t / Wasn&apos;t",
    },
    {
      subject: "It",
      to_be: "Is / Was",
      question_tag: "Isn&apos;t / Wasn&apos;t",
    },
  ];

  const table2 = [
    {
      subject: "I",
      aux: "Don&apos;t / Didn&apos;t",
    },
    {
      subject: "You",
      aux: "Don&apos;t / Didn&apos;t",
    },
    {
      subject: "They",
      aux: "Don&apos;t / Didn&apos;t",
    },
    {
      subject: "We",
      aux: "Don&apos;t / Didn&apos;t",
    },
    {
      subject: "He",
      aux: "Doesn&apos;t / Didn&apos;t",
    },
    {
      subject: "She",
      aux: "Doesn&apos;t / Didn&apos;t",
    },
    {
      subject: "It",
      aux: "Doesn&apos;t / Didn&apos;t",
    },
  ];

  const checkAnswer = (q) => {
    const userAnswer = answers[q.id]?.toLowerCase().trim();

    if (!userAnswer) return null;

    const match = q.answer.some((keyword) =>
      userAnswer.includes(keyword.toLowerCase())
    );

    return match ? true : false;
  };

  const handleSubmit = (q) => {
    console.log(1);

    const result = checkAnswer(q);
    setStatus({
      ...status,
      [q.id]: result,
    });
    console.log(result);
    console.log(answers[q.id] != null && status[q.id]);
  };

  return (
    <div className="container">
      <h1 className={`${styles.title} ${luckiest_Guy.className}`}>
        FORMULA TAG QUESTION
      </h1>
      <div className={styles.content}>
        <div className={styles.side}>
          <h1 className={`${styles.title} ${luckiest_Guy.className}`}>
            EXERCISE
          </h1>
          <div className={styles.wrapCard}>
            {questions.map((q, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.borderBox}>
                  <div className={styles.text}>
                    <p className={tenali_Ramakrishna.className}>{q.question}</p>
                  </div>
                </div>

                <div className={styles.wrap}>
                  <div className={styles.result}>
                    <div className={styles.answerField}>
                      <input
                      className={tenali_Ramakrishna.className}
                        type="text"
                        placeholder="Write Your Answer"
                        onChange={(e) =>
                          setAnswers({ ...answers, [q.id]: e.target.value })
                        }
                      />
                      <button
                        className={!answers[q.id] ? styles.inactive : ""}
                        onClick={() => handleSubmit(q)}
                      >
                        <FaPaperPlane />
                      </button>
                    </div>

                    <p
                      className={`${tenali_Ramakrishna.className} ${
                        status[q.id] ? styles.correct : styles.wrong
                      } ${status[q.id] != null ? styles.show : ""}`}
                    >
                      {status[q.id] == true ? "Correct" : "Wrong"}
                    </p>
                    <div
                      className={`${styles.icon} ${
                        status[q.id] ? styles.correct : styles.wrong
                      } ${status[q.id] != null ? styles.show : ""}`}
                    >
                      {status[q.id] == true ? (
                        <FaAngleDoubleUp />
                      ) : (
                        <FaAngleDoubleDown />
                      )}
                    </div>
                  </div>
                  <p
                    className={`${tenali_Ramakrishna.className} ${
                      status[q.id] ? styles.correct : styles.wrong
                    } ${status[q.id] != null ? styles.show : ""}`}
                  >
                    {status[q.id] == true ? `Good job. ` : "What a pity. "}
                    The main clause is a{" "}
                    {q.type[1] == "positive" ? q.type[1] : "negative"} sentence
                    containing the {q.type[0]} verb <i>{q.aux}</i> and the
                    subject <i>{q.subject}</i>, which means the tag question
                    uses the {q.type[1] == "positive" ? "negative" : q.type[1]}{" "}
                    {q.type[0]} verb <i>{q.correct_aux}</i> with the subject{" "}
                    <i>{q.subject}</i>. The result is{" "}
                    <u>
                      <i>
                        <b>{q.answer[0]}</b>
                      </i>
                    </u>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.side}>
          <div className={styles.card}>
            <button
              className={styles.borderBox}
              onClick={() => setOpen1(!open1)}
            >
              <div className={styles.text}>
                <h1 className={luckiest_Guy.className}>
                  Formula with Auxiliary
                  <div className={`${styles.icon} ${open1 ? styles.open : ""}`}>
                    <FaChevronDown />
                  </div>
                </h1>
              </div>
            </button>
            <div className={`${styles.wrap} ${open1 ? styles.open : ""}`}>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>
                    If the main sentence already has an auxiliary verb (is, are,
                    was, were, have, has, had, etc.), the tag repeats the same
                    auxiliary.
                  </p>
                </div>
              </div>

              <div className={styles.formula}>
                <div className={styles.wrapBranch}>
                  <div className={styles.branch}></div>
                </div>
                <div>
                  <div className={styles.wrapFormula}>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          Negative sentence
                        </p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          Auxiliary
                        </p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>Subject?</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wrapFormula}>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          Positive sentence
                        </p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          Auxiliary
                        </p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>n&apos;t</p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>Subject?</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                          The moon is beautiful, isn&apos;t it?
                        </p>
                      </div>
                    </div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          We aren&apos;t lost in the memory, are we?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.table}>
                <div className={styles.tr}>
                  <div className={` ${styles.th}`}>
                    <div className={styles.text}>
                      <p className={tenali_Ramakrishna.className}>Subject</p>
                    </div>
                  </div>
                  <div className={` ${styles.th}`}>
                    <div className={styles.text}>
                      <p className={tenali_Ramakrishna.className}>To Be</p>
                    </div>
                  </div>
                  <div className={` ${styles.th}`}>
                    <div className={styles.text}>
                      <p className={tenali_Ramakrishna.className}>
                        Tag Question
                      </p>
                    </div>
                  </div>
                </div>

                {table1.map((data, i) => (
                  <div className={styles.tr} key={i}>
                    <div className={` ${styles.td}`}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          {data.subject}
                        </p>
                      </div>
                    </div>
                    <div className={` ${styles.td}`}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          {data.to_be}
                        </p>
                      </div>
                    </div>
                    <div className={` ${styles.td}`}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          {data.question_tag}
                        </p>
                      </div>
                    </div>
                    <div className={` ${styles.td}`}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          {data.subject}?
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <button
              className={styles.borderBox}
              onClick={() => setOpen2(!open2)}
            >
              <div className={styles.text}>
                <h1 className={luckiest_Guy.className}>
                  Formula with Modals
                  <div className={`${styles.icon} ${open2 ? styles.open : ""}`}>
                    <FaChevronDown />
                  </div>
                </h1>
              </div>
            </button>
            <div className={`${styles.wrap} ${open2 ? styles.open : ""}`}>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>
                    If the sentence has a modal verb (can, could, may, might,
                    must, shall, should, will, would), the tag repeats the same
                    modal.
                  </p>
                </div>
              </div>

              <div className={styles.formula}>
                <div className={styles.wrapBranch}>
                  <div className={styles.branch}></div>
                </div>
                <div>
                  <div className={styles.wrapFormula}>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          Negative sentence
                        </p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>Modal</p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>Subject?</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wrapFormula}>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          Positive sentence
                        </p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>Modal</p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>n&apos;t</p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>Subject?</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                          We can&apos;t be friends, can we?
                        </p>
                      </div>
                    </div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          You would agree, wouldn&apos;t you?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <button
              className={styles.borderBox}
              onClick={() => setOpen3(!open3)}
            >
              <div className={styles.text}>
                <h1 className={luckiest_Guy.className}>
                  Formula with Main Verb
                  <div className={`${styles.icon} ${open3 ? styles.open : ""}`}>
                    <FaChevronDown />
                  </div>
                </h1>
              </div>
            </button>
            <div className={`${styles.wrap} ${open3 ? styles.open : ""}`}>
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <p className={tenali_Ramakrishna.className}>
                    If the sentence only has a main verb (like, play, go, eat,
                    etc.), we use do / does / did in the tag.
                  </p>
                </div>
              </div>

              <div className={styles.formula}>
                <div className={styles.wrapBranch}>
                  <div className={styles.branch}></div>
                </div>
                <div>
                  <div className={styles.borderBox}>
                    <div className={styles.text}>
                      <p className={tenali_Ramakrishna.className}>
                        Simple Present Tense
                      </p>
                    </div>
                  </div>
                  <div className={styles.wrapFormula}>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>Subject</p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>Verb 1</p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          don&apos;t/doesn&apos;t
                        </p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>Subject?</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                          You cling to your papers and pens, don&apos;t you?
                        </p>
                      </div>
                    </div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          He drives alone past your street, doesn&apos;t he?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.formula}>
                <div className={styles.wrapBranch}>
                  <div className={styles.branch}></div>
                </div>
                <div>
                  <div className={styles.borderBox}>
                    <div className={styles.text}>
                      <p className={tenali_Ramakrishna.className}>
                        Simple Past Tense
                      </p>
                    </div>
                  </div>
                  <div className={styles.wrapFormula}>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>Subject</p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>Verb 2</p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          didn&apos;t
                        </p>
                      </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>Subject?</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                          She drove through the suburbs, didn&apos;t she?
                        </p>
                      </div>
                    </div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          You played dumb but you always knew, didn&apos;t you?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.table}>
                <div className={styles.tr}>
                  <div className={` ${styles.th}`}>
                    <div className={styles.text}>
                      <p className={tenali_Ramakrishna.className}>Subject</p>
                    </div>
                  </div>
                  <div className={` ${styles.th}`}>
                    <div className={styles.text}>
                      <p className={tenali_Ramakrishna.className}>
                        Tag Question
                      </p>
                    </div>
                  </div>
                </div>

                {table2.map((data, i) => (
                  <div className={styles.tr} key={i}>
                    <div className={` ${styles.td}`}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          {data.subject}
                        </p>
                      </div>
                    </div>
                    <div className={` ${styles.td}`}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          {data.aux}
                        </p>
                      </div>
                    </div>
                    <div className={` ${styles.td}`}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          {data.subject}?
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
