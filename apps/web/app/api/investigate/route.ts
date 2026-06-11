import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set");
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const { content, type } = await req.json();

    if (!content) {
      return NextResponse.json({ error: "No content provided" }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

    const prompt = `You are TruthNet AI, an expert misinformation detection system. Analyze the following ${type} content and return ONLY a valid JSON object with no markdown formatting, no code blocks, no extra text.

CONTENT: "${content.slice(0, 2000)}"

Return exactly this JSON structure:
{
  "truthScore": <integer 0-100>,
  "riskScore": <integer 0-100>,
  "harmScore": <integer 0-100>,
  "viralityScore": <integer 0-100>,
  "threatLevel": "<LOW|MEDIUM|HIGH|CRITICAL>",
  "detectionReport": "<1-2 sentences>",
  "verificationReport": "<1-2 sentences>",
  "riskReport": "<1-2 sentences>",
  "responseReport": "<1-2 sentences>",
  "monitoringReport": "<1-2 sentences>",
  "summary": "<2-3 sentences>",
  "verdict": "<one clear sentence verdict>",
  "counterNarrative": "<1-2 sentences>",
  "sources": ["reuters.com/fact-check", "apnews.com/hub/fact-check", "snopes.com"]
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    console.log("Gemini raw response:", text.slice(0, 200));

    const clean = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(clean);
    return NextResponse.json(parsed);

  } catch (error: any) {
    console.error("API route error:", error?.message ?? error);
    return NextResponse.json({ error: "Analysis failed", detail: error?.message }, { status: 500 });
  }
}