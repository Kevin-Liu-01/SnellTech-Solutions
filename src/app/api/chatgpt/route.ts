/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { openai } from "@ai-sdk/openai";
import { StreamingTextResponse, streamText } from "ai";

export async function POST(req: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { messages } = await req.json();
  const result = await streamText({
    model: openai("gpt-4-turbo"),
    messages: [{ role: "user", content: messages }],
  });

  return new StreamingTextResponse(result.toAIStream());
}

// import OpenAI from "openai";
// import { env } from "process";
// import { NextResponse } from "next/server";

// const openai = new OpenAI({ apiKey: env.OPENAI_API });

// export default async function query(request: Request) {
//   const stream = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     // eslint-disable-next-line @typescript-eslint/no-base-to-string
//     messages: [{ role: "user", content: request.toString() ?? "hi" }],
//     stream: true,
//   });
//   for await (const chunk of stream) {
//     const response = process.stdout.write(
//       chunk.choices[0]?.delta?.content ?? "",
//     );
//     NextResponse.json({ answer: response });
//   }
// }
