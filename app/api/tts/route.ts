import { NextRequest, NextResponse } from 'next/server';

// Define environment variables for API access
const KINOS_API_URL = process.env.KINOS_API_URL || 'https://api.kinos-engine.ai';
const KINOS_API_KEY = process.env.KINOS_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const { text, voice_id } = await request.json();
    
    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }
    
    // Call the KinOS Engine TTS API
    const response = await fetch(`${KINOS_API_URL}/v2/tts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${KINOS_API_KEY}`
      },
      body: JSON.stringify({
        text,
        voice_id: voice_id || 'IKne3meq5aSn9XLyUdCD',
        model: 'eleven_flash_v2_5'
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('TTS API error:', error);
      return NextResponse.json({ error: 'Failed to generate speech' }, { status: response.status });
    }

    // Get the audio data
    const audioArrayBuffer = await response.arrayBuffer();
    
    // Return the audio as a blob
    return new NextResponse(audioArrayBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
      },
    });
  } catch (error) {
    console.error('Error in TTS API:', error);
    return NextResponse.json(
      { error: 'Failed to process TTS request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
