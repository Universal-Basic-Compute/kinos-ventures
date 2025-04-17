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
          model: 'claude-3-7-sonnet-latest'
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

      try {
        const data = await response.json();
        // Add more detailed logging of the entire response
        console.log('KinOS API response:', JSON.stringify(data, null, 2));
        
        // Check if data.response exists
        if (!data.response) {
          console.error('Response is missing from KinOS API response:', data);
          return NextResponse.json({ 
            response: "I'm sorry, I couldn't process your request at this time. Please try again later." 
          });
        }
        
        // Return the response field from the data
        return NextResponse.json({ response: data.response });
      } catch (jsonError) {
        // This will catch JSON parsing errors
        console.error('Error parsing JSON response:', jsonError);
        
        // Try to get the raw text response to see what's causing the parsing error
        try {
          const rawResponse = await response.text();
          console.error('Raw response that caused parsing error:', rawResponse);
        } catch (textError) {
          console.error('Could not get raw response text:', textError);
        }
        
        return NextResponse.json(
          { response: "I'm sorry, I couldn't process your request at this time. Please try again later." },
          { status: 200 }
        );
      }
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
