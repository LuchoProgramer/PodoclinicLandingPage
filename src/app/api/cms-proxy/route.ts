import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || '10';
    
    // Configuración hardcodeada para evitar problemas con env vars
    const CMS_URL = 'http://localhost:3000';
    const TENANT_ID = 'zCXAU8FLaGX4UHgnrPfI';
    
    console.log('🔗 Proxy fetching from CMS:', `${CMS_URL}/api/blogs?tenant=${TENANT_ID}&limit=${limit}`);
    
    const response = await fetch(`${CMS_URL}/api/blogs?tenant=${TENANT_ID}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store' // No cache para debugging
    });
    
    if (!response.ok) {
      console.error('❌ CMS API Error:', response.status, response.statusText);
      return NextResponse.json(
        { error: `CMS API Error: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    console.log('✅ CMS data received:', data);
    
    // Añadir headers CORS
    const apiResponse = NextResponse.json(data);
    apiResponse.headers.set('Access-Control-Allow-Origin', '*');
    apiResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    apiResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return apiResponse;
    
  } catch (error) {
    console.error('❌ Proxy error:', error);
    return NextResponse.json(
      { 
        error: 'Error connecting to CMS', 
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}