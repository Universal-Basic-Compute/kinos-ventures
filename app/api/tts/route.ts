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
    
    console.log('TTS API: Generating speech for text:', text.substring(0, 100) + '...');
    
    // For debugging, if the API key is missing
    if (!KINOS_API_KEY) {
      console.warn('KINOS_API_KEY is not set. Using fallback audio.');
      // Return a simple audio file as fallback for testing
      return new NextResponse(Buffer.from('dummy audio data'), {
        headers: {
          'Content-Type': 'audio/mpeg',
        },
      });
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
      console.error('TTS API error status:', response.status);
      let errorText = '';
      try {
        const errorData = await response.json();
        console.error('TTS API error details:', errorData);
        errorText = JSON.stringify(errorData);
      } catch (e) {
        errorText = await response.text();
        console.error('TTS API error text:', errorText);
      }
      
      return NextResponse.json({ 
        error: 'Failed to generate speech', 
        details: errorText 
      }, { status: response.status });
    }

    // Get the audio data
    const audioArrayBuffer = await response.arrayBuffer();
    console.log('TTS API: Received audio data of size:', audioArrayBuffer.byteLength, 'bytes');
    
    // Return the audio as a blob
    return new NextResponse(audioArrayBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
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
