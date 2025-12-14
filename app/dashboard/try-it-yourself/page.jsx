"use client";
import React, { useState } from "react";
import { luckiest_Guy, tenali_Ramakrishna } from "../../../public/font";
import styles from "./page.module.css";
import {
  FaPaperPlane,
  FaSpinner,
  FaAngleDoubleDown,
  FaAngleDoubleUp,
} from "react-icons/fa";

export default function TagQuestionChecker() {
  const [sentence, setSentence] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkTagQuestion = async () => {
    if (!sentence.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/check-tag-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sentence }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error Response:", errorData);
        throw new Error(errorData.error || "API request failed");
      }

      const resultData = await response.json();
      setResult(resultData);
      console.log(resultData);
    } catch (error) {
      console.error("Error:", error);
      setResult({
        isCorrect: false,
        explanation:
          "Terjadi kesalahan dalam menganalisis kalimat. Pastikan API key Gemini sudah dikonfigurasi dengan benar di file .env.local",
        mainClause: "",
        tagQuestion: "",
        correction: null,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className={styles.borderBox}>
        <div className={styles.text}>
          <h1 className={luckiest_Guy.className}>Make Your Own Tag Question</h1>
        </div>
      </div>

      <div className={styles.wrap}>
        <div className={styles.answerField}>
          <input
            value={sentence}
            className={tenali_Ramakrishna.className}
            type="text"
            placeholder="Write Your Tag Question"
            onChange={(e) => setSentence(e.target.value)}
          />
          <button
            className={sentence.trim() == "" ? styles.inactive : ""}
            onClick={() => checkTagQuestion()}
            disabled={loading || !sentence.trim()}
          >
            {!loading ? (
              <FaPaperPlane />
            ) : (
              <FaSpinner className={styles.spin} />
            )}
          </button>
        </div>
      </div>

      {result && (
        <div className={styles.result}>
          {result.mainClause && (
            <div className={styles.wrapStructure}>
              <div className={styles.branch}></div>
              <div>
                <div className={styles.borderBox}>
                  <div className={styles.text}>
                    <h1 className={luckiest_Guy.className}>Main Clause:</h1>
                    <p className={tenali_Ramakrishna.className}>
                      {result.mainClause}
                    </p>
                  </div>
                </div>
                <div className={styles.borderBox}>
                  <div className={styles.text}>
                    <h1 className={luckiest_Guy.className}>Tag Question:</h1>
                    <p className={tenali_Ramakrishna.className}>
                      {result.tagQuestion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={styles.wrap}>
            {result != null ? (
              <>
                {result.isCorrect ? (
                  <div className={`${styles.tag} ${styles.correct}`}>
                    <p className={luckiest_Guy.className}>Good Job </p>{" "}
                    <FaAngleDoubleUp />
                  </div>
                ) : (
                  <div className={`${styles.tag} ${styles.wrong}`}>
                    <p className={luckiest_Guy.className}>
                      Need Improvement{" "}
                    </p>{" "}
                    <FaAngleDoubleDown />
                  </div>
                )}
                <p
                  className={`${tenali_Ramakrishna.className} ${
                    result.isCorrect ? styles.correct : styles.wrong
                  }`}
                >
                  {result.explanation}
                </p>
              </>
            ) : null}

            {result.correction && (
              <div className={styles.borderBox}>
                <div className={styles.text}>
                  <h1 className={luckiest_Guy.className}>Correction:</h1>
                  <p className={tenali_Ramakrishna.className}>
                    {result.correction}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* {result && (
        <div
          className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${
            result.isCorrect ? "border-green-500" : "border-red-500"
          }`}
        >
          {result.mainClause && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Main Clause:</p>
              <p className="font-medium text-gray-800">{result.mainClause}</p>
              <p className="text-sm text-gray-600 mt-2 mb-1">Tag Question:</p>
              <p className="font-medium text-gray-800">{result.tagQuestion}</p>
            </div>
          )}

          <div className="mb-4">
            <p className="text-gray-700 leading-relaxed">
              {result.explanation}
            </p>
          </div>

          {result.correction && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm font-semibold text-green-800 mb-2">
                Koreksi yang benar:
              </p>
              <p className="text-green-900 font-medium">{result.correction}</p>
            </div>
          )}
        </div>
      )} */}
    </div>
  );
}
