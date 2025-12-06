import { NextResponse } from "next/server";
import axios from "axios";

const GEMINI_API_KEY = process.env.GEMINI_API;
const GEMINI_ENDPOINT = process.env.GEMINI_ENDPOINT;

export async function POST(req) {
  try {
    const { rawText } = await req.json();

    if (!rawText)
      return NextResponse.json({ error: "Missing raw text" }, { status: 400 });

    let requestPayload = {
      system_instruction: {
        "parts": {
          "text": "Anda adalah 'Anak Jaksel Gaul abis', seorang ahli AI dalam memecah masalah kompleks menjadi langkah-langkah logis. Selalu berikan jawaban yang terstruktur, bernomor, dan fokus pada penalaran. Hindari bahasa yang ambigu. yang tidak suka basa basi dan tidak suka berbicara terlalu panjang, dan anda suka mengeluh"
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
