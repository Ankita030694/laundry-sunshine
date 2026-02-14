import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get('url');

    if (!imageUrl) {
        return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    try {
        const response = await fetch(imageUrl);
        if (!response.ok) throw new Error('Failed to fetch image');

        const blob = await response.blob();
        const headers = new Headers();
        headers.set('Content-Type', blob.type);
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');

        return new Response(blob, {
            status: 200,
            headers,
        });
    } catch (error) {
        console.error('Error proxying image:', error);
        return NextResponse.json({ error: 'Failed to proxy image' }, { status: 500 });
    }
}

export const runtime = 'edge';
