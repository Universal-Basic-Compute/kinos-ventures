import { NextRequest, NextResponse } from 'next/server';

// Define environment variables for API access
const KINOS_API_URL = process.env.KINOS_API_URL || 'https://api.kinos-engine.ai';
const KINOS_API_KEY = process.env.KINOS_API_KEY;
const BLUEPRINT_ID = 'kinos-ventures';
const KIN_ID = 'website';

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();
    
    // Format the conversation history for the API
    const formattedHistory = history.map((msg: any) => ({
      role: msg.role,
      content: msg.content
    }));
    
    console.log('Sending to KinOS API:', {
      message,
      historyLength: formattedHistory.length
    });
    
    try {
      // Call the KinOS Engine API
      const response = await fetch(`${KINOS_API_URL}/v2/blueprints/${BLUEPRINT_ID}/kins/${KIN_ID}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${KINOS_API_KEY}`
        },
        body: JSON.stringify({
          content: message,
          model: 'claude-3-7-sonnet-latest',
          history_length: 25,
          mode: 'helpful',
          addSystem: 'You are KinOS AI, a helpful assistant for the KinOS Ventures website. Provide concise, accurate information about KinOS Ventures, its verticals, technology, and resources. Be friendly and professional.',
          addContext: ['knowledge/kinos_ventures_overview.md']
        }),
      });

      if (!response.ok) {
        let errorMessage = `API error: ${response.status}`;
        try {
          const errorData = await response.json();
          console.error('KinOS API error:', errorData);
          errorMessage = errorData.error || errorMessage;
        } catch (parseError) {
          console.error('Failed to parse error response:', parseError);
        }
        
        return NextResponse.json({ 
          response: "I'm sorry, I couldn't process your request at this time. Please try again later." 
        }, { status: 200 }); // Return a 200 status with an error message to the client
      }

      const data = await response.json();
      console.log('KinOS API response:', data);
      
      // Check if data.response exists
      if (!data.response) {
        console.error('Response is missing from KinOS API response:', data);
        return NextResponse.json({ 
          response: "I'm sorry, I couldn't process your request at this time. Please try again later." 
        });
      }
      
      // Return the response field from the data
      return NextResponse.json({ response: data.response });
    } catch (error) {
      console.error('Error in chat API:', error);
      return NextResponse.json(
        { response: "I'm sorry, I couldn't process your request at this time. Please try again later." },
        { status: 200 } // Return a 200 status with an error message to the client
      );
    }
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process your request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
