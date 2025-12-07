import { NextResponse } from "next/server";
import axios from "axios";

const GEMINI_API_KEY = process.env.GEMINI_API;
const GEMINI_ENDPOINT = process.env.GEMINI_ENDPOINT;

export async function POST(req) {
  try {
    const { rawText } = await req.json();

    if (!rawText || rawText.trim() === "") {
      return NextResponse.json({
        mode: "welcome",
        message: "Welcome to AskTag AI! Ask me anything you want to know."
      });
    }

    let requestPayload = {
      system_instruction: {
        "parts": {
          "text": "Anda adalah Seorang Guru Bahasa Inggris yang lembut, penyabar, namun tegas dan berkarisma, seorang ahli Bahasa Inggris khususnya mengenai Tag Question. Hindari bahasa yang ambigu. Jawab pertanyaan dengan bahasa inggris namun jelaskan kembali secara ringkas dengan bahasa indonesia."
        }
      },
      contents: [{ role: "user", parts: [{ text: rawText }] }],
    };

    const response = await axios.post(GEMINI_ENDPOINT, requestPayload, {
      params: { key: GEMINI_API_KEY },
      headers: { "Content-Type": "application/json" },
    });

    // Parsing respons sesuai mode
    const textPart = response.data.candidates[0].content.parts[0].text.trim();

    return NextResponse.json({ mode: "chat", message: textPart });
  } catch (error) {
    console.error("Gemini API Error:", error.response?.data || error.message);
    return NextResponse.json(
      { error: "Terjadi kesalahan memanggil Gemini API." },
      { status: 500 }
    );
  }
}
