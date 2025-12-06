"use client";
import { useState } from "react";
import { luckiest_Guy, tenali_Ramakrishna } from "../../../public/font";
import styles from "./page.module.css";
import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaPaperPlane,
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
                    uses the {q.type[1] == "positive" ? "negative" : q.type[1]} {q.type[0]} verb <i>{q.correct_aux}</i> with
                    the subject <i>{q.subject}</i>. The result is {" "}
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
            <div className={styles.borderBox}>
              <div className={styles.text}>
                <h1 className={luckiest_Guy.className}>
                  Formula with Auxiliary
                </h1>
              </div>
            </div>
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
              <div>
                <div className={styles.borderBox}>
                  <div className={styles.text}>
                    <p className={tenali_Ramakrishna.className}>
                      If the main sentence already has an auxiliary verb (is,
                      are, was, were, have, has, had, etc.), the tag repeats the
                      same auxiliary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { FaPaperPlane, FaAngleDoubleUp } from "react-icons/fa";
// import styles from "./page.module.css";

// export default function Home() {
//   const [answers, setAnswers] = useState({});
//   const [status, setStatus] = useState({});

//   const questions = [
//     {
//       id: 1,
//       question: "Apa fungsi controller di MVC?",
//       answer: ["controller", "alur", "logika"],
//     },
//     {
//       id: 2,
//       question: "Jelaskan kegunaan API",
//       answer: ["data", "komunikasi", "server", "client"],
//     },
//   ];

//   const checkAnswer = (q) => {
//     const userAnswer = answers[q.id]?.toLowerCase().trim();

//     if (!userAnswer) return "kosong";

//     const match = q.answer.some((keyword) =>
//       userAnswer.includes(keyword.toLowerCase())
//     );

//     return match ? "benar" : "salah";
//   };

//   const handleSubmit = (q) => {
//     const result = checkAnswer(q);
//     setStatus({
//       ...status,
//       [q.id]: result,
//     });
//   };

//   return (
//     <div>
//       {questions.map((q) => (
//         <div key={q.id} className={styles.result}>
//           <p>{q.question}</p>

//           <div className={styles.answerField}>
//             <input
//               type="text"
//               placeholder="Write Your Answer"
//               // value={answers[q.id] || ""}
//               onChange={(e) =>
//                 setAnswers({ ...answers, [q.id]: e.target.value })
//               }
//             />

//             <button onClick={() => handleSubmit(q)}>
//               <FaPaperPlane />
//             </button>
//           </div>

//           <p>
//             {status[q.id] === "benar" && "✅ Correct"}
//             {status[q.id] === "salah" && "❌ Wrong"}
//             {status[q.id] === "kosong" && "⚪ Not Answered"}
//           </p>

//           <div className={styles.icon}>
//             <FaAngleDoubleUp />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
