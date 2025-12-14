import { NextResponse } from "next/server";

export async function POST(request) {
  const GEMINI_API_KEY = process.env.GEMINI_API;
  const GEMINI_ENDPOINT = process.env.GEMINI_ENDPOINT;

  try {
    const { sentence } = await request.json();

    const response = await fetch(
      `${GEMINI_ENDPOINT}?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Analyze this sentence as a tag question in English grammar: "${sentence}"
                        Please respond ONLY with a JSON object (no markdown, no backticks) with this exact structure:
                        {
                        "isCorrect": true/false,
                        "mainClause": "the main statement part",
                        "tagQuestion": "the tag part",
                        "explanation": "brief explanation in English of why it's correct or incorrect",
                        "correction": "corrected version if incorrect, or null if correct"
                        }

                        Rules for tag questions:
                        1. Positive statement → negative tag (e.g., "You are happy, aren't you?")
                        2. Negative statement → positive tag (e.g., "You aren't happy, are you?")
                        3. Tag must use the auxiliary verb from the main clause
                        4. Subject in tag must match the main clause subject
                        5. Must end with a question mark`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    
    const text = data.candidates[0].content.parts[0].text.trim();

    const cleanText = text
      .replace(/```json\n?/g, "")
      .replace(/```\n?/g, "")
      .trim();
    const parsed = JSON.parse(cleanText);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        isCorrect: false,
        explanation:
          "Terjadi kesalahan saat menganalisis. Pastikan API key Gemini valid.",
        mainClause: "",
        tagQuestion: "",
        correction: null,
      },
      { status: 500 }
    );
  }
}
