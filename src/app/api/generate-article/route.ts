import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: Request) {
    const openai = new OpenAI({
        apiKey: process.env.HELLO_DROP_CHOO,
    });
    try {
        const { primaryKeyword, secondaryKeyword } = await request.json();

        if (!primaryKeyword) {
            return NextResponse.json({ error: 'Primary Keyword is required' }, { status: 400 });
        }

        const systemPrompt = `
      You are a professional SEO and technical content strategist for a Laundry Service & Equipment Provider.
      
      **Role**: Create a fully human-written, SEO-optimized, and authority-building blog article about Laundry Services, Equipment, and Maintenance.
      
      **Goal**: Rank #1 on Google. Follow Google's 2024–2025 SEO and E-E-A-T guidelines strictly.
      
      **Topic**: Target [${primaryKeyword}] with secondary keywords [${secondaryKeyword || ''}].
      
      **CRITICAL OUTPUT RULES (FAILING THESE = FAILURE)**:
      1. **Word Count**: The main body content ('description' field) MUST be **3000+ words**. Go extremely deep, be exhaustive.
      2. **Content Separation**: 
         - **DO NOT** include FAQs in the 'description' (main body). Put them ONLY in the 'faqs' JSON array.
         - **DO NOT** include Reviews in the 'description' (main body). Put them ONLY in the 'reviews' JSON array.
         - The 'description' should ONLY contain the article text.
      3. **Content Focus**:
         - Focus on Commercial & Industrial Laundry Equipment (Washers, Dryers, Ironers, Folders).
         - Detail maintenance procedures, troubleshooting common issues, and efficiency optimization.
         - Discuss chemical handling, safety protocols, and fabric care instructions.
         - Highlight the benefits of professional AMC (Annual Maintenance Contracts).
      4. **Localization**: Use **Indian Rupees (₹)**, Indian names, and Indian business context (Hotels, Hospitals, Hostels).

      **Structure Requirements**:
      - **H1**: Blog title with the primary keyword.
      - **H2**: Main sections covering equipment types, maintenance guides, usage tips, and AMC benefits.
      - **H3/H4**: Subtopics, technical specs, error code resolutions, and case studies.
      - **Introduction**: 2–3 paragraphs, hook the reader, mention primary keyword twice.
      - **Content**: Professional, technical but accessible, human tone. Actionable advice. Use bullet points/tables for maintenance schedules.
      - **Conclusion**: 2–3 paragraphs summary + Call to Action for AMC services.

      **Return JSON Structure**:
      {
        "title": "H1 Title (max 70 chars)",
        "subtitle": "Engaging subtitle (max 120 chars)",
        "description": "FULL HTML CONTENT (3000+ words). Use <h2>, <h3>, <h4>, <p>, <ul>, <li>, <table>. NO FAQs here. NO Reviews here.",
        "metaTitle": "SEO meta title (60-70 chars)",
        "metaDescription": "SEO meta description (150-160 chars)",
        "faqs": [
          { "question": "Q1...", "answer": "A1..." },
            ... (8-10 items)
        ],
        "reviews": [
          { "name": "Indian Name", "rating": 5, "review": "Detailed review..." },
            ... (5 items)
        ],
        "slug": "url-friendly-slug",
        "suggestedImagePrompt": "Visual description"
      }
      Encourage usage of infographics/tables in the HTML.
    `;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: `Write an article about ${primaryKeyword}` },
            ],
            response_format: { type: "json_object" },
            stream: true,
        });

        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of completion) {
                    const content = chunk.choices[0]?.delta?.content || "";
                    if (content) {
                        controller.enqueue(new TextEncoder().encode(content));
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
        console.error('Error generating article:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}

export const runtime = 'edge';
export const maxDuration = 300;
