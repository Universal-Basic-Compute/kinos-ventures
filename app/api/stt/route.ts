import { NextRequest, NextResponse } from 'next/server';

// Define environment variables for API access
const KINOS_API_URL = process.env.KINOS_API_URL || 'https://api.kinos-engine.ai';
const KINOS_API_KEY = process.env.KINOS_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get('file') as File;
    
    if (!audioFile) {
      return NextResponse.json({ error: 'Audio file is required' }, { status: 400 });
    }
    
    // Create a new FormData instance for the KinOS Engine API
    const kinosFormData = new FormData();
    kinosFormData.append('file', audioFile);
    kinosFormData.append('model', 'whisper-1');
    
    const response = await fetch(`${KINOS_API_URL}/v2/stt`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${KINOS_API_KEY}`,
      },
      body: kinosFormData,
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('STT API error:', error);
      return NextResponse.json({ error: 'Failed to transcribe audio' }, { status: response.status });
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in STT API:', error);
    return NextResponse.json(
      { error: 'Failed to process STT request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
