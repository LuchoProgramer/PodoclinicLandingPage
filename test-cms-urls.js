const { hybridBlogService } = require('./src/lib/hybrid-blog-service.ts');

async function testCMSUrls() {
  console.log('🔍 Probando URLs del CMS...');
  
  try {
    // Limpiar cache
    hybridBlogService.clearCache();
    
    // Obtener posts
    const posts = await hybridBlogService.getAllPosts();
    const cmsPosts = posts.filter(p => p.isCMSPost);
    
    console.log(`\n📊 Posts del CMS encontrados: ${cmsPosts.length}`);
    
    cmsPosts.forEach(post => {
      console.log(`\n📝 "${post.title}"`);
      console.log(`   Categoría original: "${post.category}"`);
      console.log(`   Slug: "${post.slug}"`);
      console.log(`   URL: ${post.cta?.link || 'N/A'}`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

testCMSUrls();
