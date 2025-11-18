'use client';
import { useState, useEffect } from 'react';

export default function TestCMSPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [config, setConfig] = useState<any>({});

  useEffect(() => {
    // Mostrar configuración
    const baseUrl = 'http://localhost:3000';
    const tenantId = 'zCXAU8FLaGX4UHgnrPfI';
    
    setConfig({
      baseUrl: baseUrl,
      tenantId: tenantId
    });

    // Testear conexión
    const testConnection = async () => {
      try {
        console.log('🔧 Testing CMS connection...');
        
        const url = `${baseUrl}/api/blogs?tenant=${tenantId}&limit=5`;
        console.log('🌐 Fetching from:', url);
        
        // Usar fetch con modo no-cors como alternativa
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ CMS Response:', data);
        
        if (data.blogs) {
          setBlogs(data.blogs);
        }
        setError(null);
      } catch (err: any) {
        console.error('❌ CMS Error:', err);
        setError(err.message || 'Error connecting to CMS');
      } finally {
        setLoading(false);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Test CMS Connection</h1>
        
        {/* Configuración */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">🔧 CMS Configuration</h2>
          <div className="space-y-2 text-sm">
            <div><strong>Base URL:</strong> {config.baseUrl}</div>
            <div><strong>Tenant ID:</strong> {config.tenantId}</div>
            <div><strong>API Endpoint:</strong> {config.baseUrl}/api/blogs?tenant={config.tenantId}</div>
          </div>
        </div>

        {/* Estado de carga */}
        {loading && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-3"></div>
              <span className="text-blue-700">Connecting to CMS...</span>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <h3 className="text-red-800 font-semibold mb-2">❌ Connection Error</h3>
            <p className="text-red-700">{error}</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-red-600 hover:text-red-800">Show troubleshooting tips</summary>
              <div className="mt-2 text-sm text-red-600">
                <p>1. Make sure the CMS server is running on {config.baseUrl}</p>
                <p>2. Verify the tenant ID {config.tenantId} exists in the CMS</p>
                <p>3. Check if there are any CORS issues in the browser console</p>
                <p>4. Ensure the .env.local file has the correct variables</p>
              </div>
            </details>
          </div>
        )}

        {/* Blogs encontrados */}
        {!loading && !error && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
            <h3 className="text-green-800 font-semibold mb-2">✅ Connection Successful</h3>
            <p className="text-green-700">Found {blogs.length} blog(s) from CMS</p>
          </div>
        )}

        {/* Lista de blogs */}
        {blogs.length > 0 && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b">
              <h2 className="text-xl font-semibold">📝 Blogs from CMS</h2>
            </div>
            <div className="divide-y">
              {blogs.map((blog, index) => (
                <div key={blog.id || index} className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
                    <span className="text-sm text-gray-500">ID: {blog.id}</span>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div><strong>Category:</strong> {blog.category || 'N/A'}</div>
                    <div><strong>Author:</strong> {blog.author?.name || 'N/A'}</div>
                    <div><strong>Created:</strong> {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : 'N/A'}</div>
                    <div><strong>Tags:</strong> {blog.tags?.join(', ') || 'N/A'}</div>
                    <div><strong>Blocks:</strong> {blog.blocks?.length || 0}</div>
                  </div>
                  
                  {/* Mostrar primeros bloques */}
                  {blog.blocks && blog.blocks.length > 0 && (
                    <details className="mt-3">
                      <summary className="cursor-pointer text-blue-600 hover:text-blue-800">Show content blocks</summary>
                      <div className="mt-2 space-y-2">
                        {blog.blocks.slice(0, 3).map((block: any, blockIndex: number) => (
                          <div key={blockIndex} className="bg-gray-50 p-2 rounded text-xs">
                            <strong>{block.type}:</strong> {block.content || block.src || 'No content'}
                          </div>
                        ))}
                        {blog.blocks.length > 3 && (
                          <div className="text-xs text-gray-500">... and {blog.blocks.length - 3} more blocks</div>
                        )}
                      </div>
                    </details>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No blogs */}
        {!loading && !error && blogs.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="text-yellow-800 font-semibold mb-2">⚠️ No Blogs Found</h3>
            <p className="text-yellow-700">The connection is working, but no blogs were found for this tenant.</p>
            <p className="text-yellow-600 text-sm mt-2">Try creating a blog post in the CMS dashboard first.</p>
          </div>
        )}
      </div>
    </div>
  );
}