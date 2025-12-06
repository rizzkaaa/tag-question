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

  const questions = [
    {
      id: 1,
      question: "She is studying in her room, ___?",
      answer: ["isn't she", "isn't she?", "is not she", "is not she?"],
      subject: "she",
      aux: "is",
      correct_aux: "isn't",
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
      answer: ["wasn't he", "wasn't he?", "was not he", "was not he?"],
      subject: "he",
      aux: "was",
      correct_aux: "wasn't",
      type: ["auxiliary", "positive"],
    },
    {
      id: 4,
      question: "You haven't finished your homework, ___?",
      answer: ["have you", "have you?"],
      subject: "you",
      aux: "have",
      correct_aux: "have",
      type: ["auxiliary", "negative"],
    },
    {
      id: 5,
      question: "She likes coffee, ___?",
      answer: ["doesn't she", "doesn't she?", "does not she", "does not she?"],
      subject: "she",
      aux: "does",
      correct_aux: "doesn't",
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
      answer: ["doesn't he", "doesn't he?", "does not he", "does not he?"],
      subject: "he",
      aux: "does",
      correct_aux: "doesn't",
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
      answer: ["won't she", "won't she?", "will not she", "will not she?"],
      subject: "she",
      aux: "will",
      correct_aux: "won't",
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
      question_tag: "Aren't",
    },
    {
      subject: "You",
      to_be: "Are / Were",
      question_tag: "Aren't / Weren't",
    },
    {
      subject: "They",
      to_be: "Are / Were",
      question_tag: "Aren't / Weren't",
    },
    {
      subject: "We",
      to_be: "Are / Were",
      question_tag: "Aren't / Weren't",
    },
    {
      subject: "He",
      to_be: "Is / Was",
      question_tag: "Isn't / Wasn't",
    },
    {
      subject: "She",
      to_be: "Is / Was",
      question_tag: "Isn't / Wasn't",
    },
    {
      subject: "It",
      to_be: "Is / Was",
      question_tag: "Isn't / Wasn't",
    },
  ];

  const table2 = [
    {
      subject: "I",
      aux: "Don't / Didn't",
    },
    {
      subject: "You",
      aux: "Don't / Didn't",
    },
    {
      subject: "They",
      aux: "Don't / Didn't",
    },
    {
      subject: "We",
      aux: "Don't / Didn't",
    },
    {
      subject: "He",
      aux: "Doesn't / Didn't",
    },
    {
      subject: "She",
      aux: "Doesn't / Didn't",
    },
    {
      subject: "It",
      aux: "Doesn't / Didn't",
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
            <button className={styles.borderBox}>
              <div className={styles.text}>
                <h1 className={luckiest_Guy.className}>
                  Formula with Auxiliary
                  <div className={styles.icon}>
                    <FaChevronDown />
                  </div>
                </h1>
              </div>
            </button>
            <div className={styles.wrap}>
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
                        <p className={tenali_Ramakrishna.className}>n't</p>
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
                          The moon is beautiful, isn't it?
                        </p>
                      </div>
                    </div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          We aren't lost in the memory, are we?
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
            <button className={styles.borderBox}>
              <div className={styles.text}>
                <h1 className={luckiest_Guy.className}>
                  Formula with Modals
                  <div className={styles.icon}>
                    <FaChevronDown />
                  </div>
                </h1>
              </div>
            </button>
            <div className={styles.wrap}>
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
                        <p className={tenali_Ramakrishna.className}>n't</p>
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
                          We can't be friends, can we?
                        </p>
                      </div>
                    </div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          You would agree, wouldn't you?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <button className={styles.borderBox}>
              <div className={styles.text}>
                <h1 className={luckiest_Guy.className}>
                  Formula with Main Verb
                  <div className={styles.icon}>
                    <FaChevronDown />
                  </div>
                </h1>
              </div>
            </button>
            <div className={styles.wrap}>
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
                        <p className={tenali_Ramakrishna.className}>n't</p>
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
                          The moon is beautiful, isn't it?
                        </p>
                      </div>
                    </div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          We aren't lost in the memory, are we?
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
