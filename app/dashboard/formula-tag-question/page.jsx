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
  const [open, setOpen] = useState({
    open1: false,
    open2: false,
    open3: false,
  });
  const [example, setExample] = useState([
    { isChanged: false, subIndex: -1 },
    { isChanged: false, subIndex: -1 },
    { isChanged: false, subIndex: -1 },
    { isChanged: false, subIndex: -1 },
    { isChanged: false, subIndex: -1 },
    { isChanged: false, subIndex: -1 },
    { isChanged: false, subIndex: -1 },
    { isChanged: false, subIndex: -1 },
  ]);

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
      to_be: ["Am", "Was"],
      question_tag: ["Aren't", "Wasn't"],
    },
    {
      subject: "You",
      to_be: ["Are",  "Were"],
      question_tag: ["Aren't", "Weren't"],
    },
    {
      subject: "They",
      to_be: ["Are", "Were"],
      question_tag: ["Aren't", "Weren't"],
    },
    {
      subject: "We",
      to_be: ["Are", "Were"],
      question_tag: ["Aren't", "Weren't"],
    },
    {
      subject: "He",
      to_be: ["Is", "Was"],
      question_tag: ["Isn't", "Wasn't"],
    },
    {
      subject: "She",
      to_be: ["Is", "Was"],
      question_tag: ["Isn't", "Wasn't"],
    },
    {
      subject: "It",
      to_be: ["Is", "Was"],
      question_tag: ["Isn't", "Wasn't"],
    },
  ];

  const table2 = [
    {
      subject: "I",
      aux: ["Don't", "Didn't"],
      positifAux: ["Do", "Did"],
    },
    {
      subject: "You",
      aux: ["Don't", "Didn't"],
      positifAux: ["Do", "Did"],
    },
    {
      subject: "They",
      aux: ["Don't", "Didn't"],
      positifAux: ["Do", "Did"],
    },
    {
      subject: "We",
      aux: ["Don't", "Didn't"],
      positifAux: ["Do", "Did"],
    },
    {
      subject: "He",
      aux: ["Doesn't", "Didn't"],
      positifAux: ["Does", "Did"],
    },
    {
      subject: "She",
      aux: ["Doesn't", "Didn't"],
      positifAux: ["Does", "Did"],
    },
    {
      subject: "It",
      aux: ["Doesn't", "Didn't"],
      positifAux: ["Does", "Did"],
    },
  ];

  const modals = [
    { positive: "can", negative: "can't" },
    { positive: "could", negative: "couldn't" },
    { positive: "will", negative: "won't" },
    { positive: "would", negative: "wouldn't" },
    { positive: "shall", negative: "shan't" },
    { positive: "should", negative: "shouldn't" },
    { positive: "may", negative: "may not" },
    { positive: "might", negative: "might not" },
    { positive: "must", negative: "mustn't" },
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
    const result = checkAnswer(q);
    setStatus({
      ...status,
      [q.id]: result,
    });
    console.log(result);
    console.log(answers[q.id] != null && status[q.id]);
  };

  const toggleOpen = (key) =>
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const toggleChange = (index) =>
    setExample((prev) =>
      prev.map((item, i) =>
        i == index ? { ...item, isChanged: !item.isChanged } : item
      )
    );

  const selectSubject = (index, subIndex) => {
    setExample((prev) =>
      prev.map((item, i) =>
        i == index ? { ...item, subIndex: subIndex } : item
      )
    );

    toggleChange(index);
  };

  const showExample = (text, index, keyObject, table, indexObject = 0) => {
    if (example[index].subIndex == -1) return text;

    if (typeof table[example[index].subIndex][keyObject] == "object") {
      return table[example[index].subIndex][keyObject][indexObject];
    }

    return table[example[index].subIndex][keyObject];
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
                    {status[q.id] === true ? (
                      <>
                        Good job. The main clause is a{" "}
                        <b>
                          {q.type[1] === "positive" ? q.type[1] : "negative"}
                        </b>{" "}
                        sentence containing the <b>{q.type[0]}</b> verb{" "}
                        <i>{q.aux}</i> and the subject <i>{q.subject}</i>, which
                        means the tag question uses the{" "}
                        <b>
                          {q.type[1] === "positive" ? "negative" : q.type[1]}
                        </b>{" "}
                        {q.type[0]} verb <i>{q.correct_aux}</i> with the subject{" "}
                        <i>{q.subject}</i>. The result is{" "}
                        <u>
                          <i>
                            <b>{q.answer[0]}</b>
                          </i>
                        </u>
                      </>
                    ) : (
                      <>
                        What a pity, your answer is wrong. Please read again the{" "}
                        <b>Formula with {q.type[0]} verb</b> on the side.
                      </>
                    )}
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
              onClick={() => toggleOpen("open1")}
            >
              <div className={styles.text}>
                <h1 className={luckiest_Guy.className}>
                  Formula with Auxiliary
                  <div
                    className={`${styles.icon} ${
                      open.open1 ? styles.open : ""
                    }`}
                  >
                    <FaChevronDown />
                  </div>
                </h1>
              </div>
            </button>
            <div className={`${styles.wrap} ${open.open1 ? styles.open : ""}`}>
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
                          <button
                            onClick={() => toggleChange(0)}
                            className={tenali_Ramakrishna.className}
                          >
                            {showExample("The moon", 0, "subject", table1)}
                          </button>{" "}
                          {showExample("is", 0, "to_be", table1)} beautiful,{" "}
                          {showExample("isn't", 0, "question_tag", table1)}{" "}
                          {showExample("it", 0, "subject", table1)}?
                        </p>
                        <div
                          className={`${styles.wrapMenu} ${
                            !example[0].isChanged ? styles.hidden : ""
                          }`}
                        >
                          {table1.map((item, subIndex) => (
                            <button
                              key={subIndex}
                              className={tenali_Ramakrishna.className}
                              onClick={() => selectSubject(0, subIndex)}
                            >
                              {item.subject}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          <button
                            onClick={() => toggleChange(1)}
                            className={tenali_Ramakrishna.className}
                          >
                            {showExample("We", 1, "subject", table1)}
                          </button>{" "}
                          {showExample("weren't", 1, "question_tag", table1, 1)}{" "}
                          lost in the memory,{" "}
                          {showExample("were", 1, "to_be", table1, 1)}{" "}
                          {showExample("we", 1, "subject", table1)}?
                        </p>
                        <div
                          className={`${styles.wrapMenu} ${
                            !example[1].isChanged ? styles.hidden : ""
                          }`}
                        >
                          {table1.map((item, subIndex) => (
                            <button
                              key={subIndex}
                              className={tenali_Ramakrishna.className}
                              onClick={() => selectSubject(1, subIndex)}
                            >
                              {item.subject}
                            </button>
                          ))}
                        </div>
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
                          {data.to_be.join(" / ")}
                        </p>
                      </div>
                    </div>
                    <div className={` ${styles.td}`}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          {data.question_tag.join(" / ")}
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
              onClick={() => toggleOpen("open2")}
            >
              <div className={styles.text}>
                <h1 className={luckiest_Guy.className}>
                  Formula with Modals
                  <div
                    className={`${styles.icon} ${
                      open.open2 ? styles.open : ""
                    }`}
                  >
                    <FaChevronDown />
                  </div>
                </h1>
              </div>
            </button>
            <div className={`${styles.wrap} ${open.open2 ? styles.open : ""}`}>
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
                          We{" "}
                          <button
                            onClick={() => toggleChange(2)}
                            className={tenali_Ramakrishna.className}
                          >
                            {showExample("can't", 2, "negative", modals)}
                          </button>{" "}
                          be friends, {showExample("can", 2, "positive", modals)} we?
                        </p>
                        <div
                          className={`${styles.wrapMenu} ${
                            !example[2].isChanged ? styles.hidden : ""
                          }`}
                        >
                          {modals.map((item, subIndex) => (
                            <button
                              key={subIndex}
                              className={tenali_Ramakrishna.className}
                              onClick={() => selectSubject(2, subIndex)}
                            >
                              {item.negative}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          You{" "}
                          <button
                            onClick={() => toggleChange(3)}
                            className={tenali_Ramakrishna.className}
                          >
                            {showExample("would", 3, "positive", modals)}
                          </button>{" "}
                          agree, {showExample("wouldn't", 3, "negative", modals)} you?
                        </p>
                        <div
                          className={`${styles.wrapMenu} ${
                            !example[3].isChanged ? styles.hidden : ""
                          }`}
                        >
                          {modals.map((item, subIndex) => (
                            <button
                              key={subIndex}
                              className={tenali_Ramakrishna.className}
                              onClick={() => selectSubject(3, subIndex)}
                            >
                              {item.positive}
                            </button>
                          ))}
                        </div>
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
              onClick={() => toggleOpen("open3")}
            >
              <div className={styles.text}>
                <h1 className={luckiest_Guy.className}>
                  Formula with Main Verb
                  <div
                    className={`${styles.icon} ${
                      open.open3 ? styles.open : ""
                    }`}
                  >
                    <FaChevronDown />
                  </div>
                </h1>
              </div>
            </button>
            <div className={`${styles.wrap} ${open.open3 ? styles.open : ""}`}>
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
                          <button
                            onClick={() => toggleChange(4)}
                            className={tenali_Ramakrishna.className}
                          >
                            {showExample("You", 4, "subject", table2)}
                          </button>{" "}
                          cling
                          {example[4].subIndex == 4 ||
                          example[4].subIndex == 5 ||
                          example[4].subIndex == 6
                            ? "s"
                            : ""}{" "}
                          to papers and pens,{" "}
                          {showExample("don't", 4, "aux", table2)}{" "}
                          {showExample("you", 4, "subject", table2)}?
                        </p>
                        <div
                          className={`${styles.wrapMenu} ${
                            !example[4].isChanged ? styles.hidden : ""
                          }`}
                        >
                          {table2.map((item, subIndex) => (
                            <button
                              key={subIndex}
                              className={tenali_Ramakrishna.className}
                              onClick={() => selectSubject(4, subIndex)}
                            >
                              {item.subject}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          <button
                            onClick={() => toggleChange(5)}
                            className={tenali_Ramakrishna.className}
                          >
                            {showExample("He", 5, "subject", table2)}
                          </button>{" "}
                          {showExample("doesn't", 5, "aux", table2)} drive alone
                          past your street,{" "}
                          {showExample("does", 5, "positifAux", table2)}{" "}
                          {showExample("he", 5, "subject", table2)}?
                        </p>
                        <div
                          className={`${styles.wrapMenu} ${
                            !example[5].isChanged ? styles.hidden : ""
                          }`}
                        >
                          {table2.map((item, subIndex) => (
                            <button
                              key={subIndex}
                              className={tenali_Ramakrishna.className}
                              onClick={() => selectSubject(5, subIndex)}
                            >
                              {item.subject}
                            </button>
                          ))}
                        </div>
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
                          <button
                            onClick={() => toggleChange(6)}
                            className={tenali_Ramakrishna.className}
                          >
                            {showExample("She", 6, "subject", table2)}
                          </button>{" "}
                          drove through the suburbs,{" "}
                          {showExample("didn't", 6, "aux", table2, 1)}{" "}
                          {showExample("She", 6, "subject", table2)}?
                        </p>
                        <div
                          className={`${styles.wrapMenu} ${
                            !example[6].isChanged ? styles.hidden : ""
                          }`}
                        >
                          {table2.map((item, subIndex) => (
                            <button
                              key={subIndex}
                              className={tenali_Ramakrishna.className}
                              onClick={() => selectSubject(6, subIndex)}
                            >
                              {item.subject}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={styles.borderBox}>
                      <div className={styles.text}>
                        <p className={tenali_Ramakrishna.className}>
                          <button
                            onClick={() => toggleChange(7)}
                            className={tenali_Ramakrishna.className}
                          >
                            {showExample("You", 7, "subject", table2)}
                          </button>{" "}
                          {showExample("didn't", 7, "aux", table2, 1)} play
                          dumb, {showExample("did", 7, "positifAux", table2, 1)}{" "}
                          {showExample("You", 7, "subject", table2)}?
                        </p>
                        <div
                          className={`${styles.wrapMenu} ${
                            !example[7].isChanged ? styles.hidden : ""
                          }`}
                        >
                          {table2.map((item, subIndex) => (
                            <button
                              key={subIndex}
                              className={tenali_Ramakrishna.className}
                              onClick={() => selectSubject(7, subIndex)}
                            >
                              {item.subject}
                            </button>
                          ))}
                        </div>
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
                          {data.aux.join(" / ")}
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
