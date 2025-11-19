export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || '10';
    const id = searchParams.get('id');
    
    // Configuración usando variables de entorno
    const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'https://pukapresscms.vercel.app';
    const TENANT_ID = process.env.NEXT_PUBLIC_CMS_TENANT_ID || 'zCXAU8FLaGX4UHgnrPfI';
    
    // Log para debugging de variables de entorno
    console.log('🔧 Environment variables:', {
      CMS_URL: process.env.NEXT_PUBLIC_CMS_URL ? 'SET' : 'USING_FALLBACK',
      TENANT_ID: process.env.NEXT_PUBLIC_CMS_TENANT_ID ? 'SET' : 'USING_FALLBACK',
      actualCmsUrl: CMS_URL,
      actualTenantId: TENANT_ID
    });
    
    // Construir URL según si es búsqueda por ID o lista general
    let url = `${CMS_URL}/api/blogs?tenant=${TENANT_ID}`;
    if (id) {
      url += `&id=${id}`;
    } else {
      url += `&limit=${limit}`;
    }
    
    console.log('🔗 Proxy fetching from CMS:', url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'PodoclinicProxy/1.0'
      },
      cache: 'no-store', // No cache para debugging
      signal: AbortSignal.timeout(10000) // 10 segundos timeout
    });
    
    console.log('📊 Response status:', response.status, response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text().catch(() => 'No error text available');
      console.error('❌ CMS API Error:', {
        status: response.status,
        statusText: response.statusText,
        url: url,
        errorBody: errorText
      });
      return NextResponse.json(
        { 
          error: `CMS API Error: ${response.status} ${response.statusText}`,
          url: url,
          details: errorText
        },
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
    console.error('❌ Proxy error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : undefined
    });
    return NextResponse.json(
      { 
        error: 'Error connecting to CMS', 
        details: error instanceof Error ? error.message : 'Unknown error',
        errorType: error instanceof Error ? error.name : 'UnknownError',
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