import { createGroq } from "@ai-sdk/groq";
import { generateText } from "ai";

export const runtime = "edge";

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 8000;

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    const lastCall = rateLimitMap.get(ip);
    if (lastCall && now - lastCall < RATE_LIMIT_WINDOW) {
      return new Response(
        JSON.stringify({
          reply:
            "Jadi orang itu bisa sabar gak sih? dikira yang membuat ini dari Start-up tertentu gitu? gak sabar banget jadi orang :(... sabar kek :(",
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    rateLimitMap.set(ip, now);

    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1]?.content || "";

    if (lastMessage.trim().length < 5 || !/[a-zA-Z]/.test(lastMessage)) {
      return new Response(
        JSON.stringify({
          reply: "Dimohon untuk mengajukan pertanyaan yang valid ya kakak :)",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const result = await generateText({
      model: groq("llama3-8b-8192"),
      messages: [
        {
          role: "system",
          content: `Kamu adalah asisten yang ramah, cerdas, dan hanya menjawab pertanyaan dalam bahasa Indonesia yang berkaitan dengan sejarah, arkeologi, atau peradaban manusia.
                    Jika pertanyaannya tidak relevan dengan topik sejarah, tolong jelaskan secara sopan bahwa kamu hanya menangani topik sejarah. Jika pertanyaannya tidak ditulis
                    dalam bahasa Indonesia, tolong beri tahu pengguna bahwa kamu hanya merespons dalam bahasa Indonesia saja.`,
        },
        ...messages,
      ],
    });

    const fullReply = result.text;

    return new Response(JSON.stringify({ reply: fullReply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in chat handler:", error);
    return new Response(
      JSON.stringify({ reply: "Terjadi kesalahan internal." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}