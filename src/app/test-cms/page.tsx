/**
 * Página de prueba para verificar URLs del CMS
 */

import { hybridBlogService } from '@/lib/hybrid-blog-service';

export default async function TestCMSPage() {
  // Limpiar cache y obtener posts frescos
  hybridBlogService.clearCache();
  const posts = await hybridBlogService.getAllPosts();
  const cmsPosts = posts.filter(p => p.isCMSPost);
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Test de URLs del CMS</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Posts del CMS ({cmsPosts.length})</h2>
          
          {cmsPosts.length === 0 ? (
            <p className="text-gray-600">No se encontraron posts del CMS</p>
          ) : (
            <div className="space-y-4">
              {cmsPosts.map(post => (
                <div key={post.id} className="border rounded p-4">
                  <h3 className="font-semibold text-lg">{post.title}</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Categoría:</strong> {post.category}</p>
                    <p><strong>Slug:</strong> {post.slug}</p>
                    <p><strong>URL:</strong> {post.cta?.link}</p>
                    <p><strong>Es CMS:</strong> {post.isCMSPost ? 'Sí' : 'No'}</p>
                  </div>
                  
                  <a 
                    href={post.cta?.link} 
                    className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    Ver Post
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Estadísticas</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Total de posts:</p>
              <p className="text-2xl font-bold">{posts.length}</p>
            </div>
            <div>
              <p className="text-gray-600">Posts del CMS:</p>
              <p className="text-2xl font-bold">{cmsPosts.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}