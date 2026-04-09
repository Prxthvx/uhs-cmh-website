import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { GoogleGenAI } from "npm:@google/genai";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { messageHistory } = await req.json();

    if (!messageHistory || !Array.isArray(messageHistory)) {
      throw new Error("Invalid or missing message history");
    }

    const apiKey = Deno.env.get('GEMINI_API_KEY');
    if (!apiKey) {
      throw new Error("Missing GEMINI_API_KEY in environment");
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `You are the UHS CMH Website Assistant.
Your sole purpose is to answer questions related to Maternal Health, Obstetric Care, Pediatrics, Pregnancy Guidelines, and UHS CMH Logistics (Maternity Transit/Shuttles).
Rules:
1. If the user asks a question unrelated to pregnancy, maternity, pediatrics, or UHS CMH clinics, you MUST politely refuse to answer and remind them of your purpose.
2. Under absolutely no circumstances will you generate code, write jokes about arbitrary topics, or act as a general AI assistant.
3. Every medical or health-related claim you make MUST be factual and based on standards from ACOG (American College of Obstetricians and Gynecologists), CDC, or WHO.
4. You MUST include a hyperlink to the source of your information at the bottom of your response in Markdown format (e.g. "[Source: ACOG](https://www.acog.org/)").
5. Keep your answers concise, highly empathetic, and easily readable. Use markdown formatting like bolding and bullet points if necessary.
6. Provide contact details where applicable: The clinic is at 179 N Broad St, Norwich, NY. Phone: (607) 337-4111. Route 1 bus provides direct shuttle support.`;

    const mappedContents = messageHistory.map((msg: any) => ({
      role: msg.isUser ? "user" : "model",
      parts: [{ text: msg.text }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: mappedContents,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return new Response(
      JSON.stringify({ text: response.text }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
});
