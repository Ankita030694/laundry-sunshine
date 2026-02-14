import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: Request) {
    const openai = new OpenAI({
        apiKey: process.env.HELLO_DROP_CHOO,
    });
    try {
        const { content, prompt } = await request.json();

        if (!content) {
            return NextResponse.json({ error: 'Content is required' }, { status: 400 });
        }

        const systemPrompt = `
      You are a professional editor and content expander.
      Your task is to take the existing blog content and expand it to be much more detailed, aiming for a total of 5000+ words.
      Maintain the existing HTML structure but add more sections, more depth to existing sections, more examples, and more case studies.
      Follow the user's specific guidance if provided: ${prompt || 'No specific guidance provided.'}
      Ensure the output is valid HTML and maintains the professional tone.
    `;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: `Expand this content: ${content}` },
            ],
            stream: true,
        });

        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of completion) {
                    const text = chunk.choices[0]?.delta?.content || "";
                    if (text) {
                        controller.enqueue(new TextEncoder().encode(text));
                    }
                }
                controller.close();
            },
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            },
        });
    } catch (error) {
        console.error('Error expanding content:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}

export const runtime = 'edge';
export const maxDuration = 300;
